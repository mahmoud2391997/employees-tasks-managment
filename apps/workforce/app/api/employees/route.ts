import { NextResponse, type NextRequest } from 'next/server'
import { z } from 'zod'
import { salarySchema } from '@/lib/salary-schema'

import { prisma } from '@/server/db'
import { requirePermission } from '@/server/auth/require-permission'
import { canViewAllEmails, redactEmailForViewer } from '@/lib/email-privacy'
import { virtualEmployeesApi } from '@/server/virtual-data'

export const runtime = 'nodejs'

function parseTakeSkip(req: NextRequest) {
  const sp = req.nextUrl.searchParams
  let take = Number(sp.get('take') ?? '50')
  let skip = Number(sp.get('skip') ?? '0')
  if (!Number.isFinite(take) || take <= 0) take = 50
  if (!Number.isFinite(skip) || skip < 0) skip = 0
  take = Math.min(200, Math.max(1, Math.floor(take)))
  skip = Math.max(0, Math.floor(skip))
  return { take, skip }
}

const createSchema = z.object({
  email: z.string().email(),
  firstName: z.string().trim().min(1),
  lastName: z.string().trim().min(1).optional(),
  departmentId: z.string().trim().min(1).optional(),
  position: z.string().trim().min(1).optional(),
  joinDate: z.string().trim().min(1).optional(),
  salary: salarySchema.optional(),
  status: z.enum(['ACTIVE', 'INACTIVE', 'ON_LEAVE', 'TERMINATED']).optional(),
  managerId: z.string().trim().min(1).optional(),
})

export async function GET(req: NextRequest) {
  const auth = await requirePermission(req, 'employees.view')
  if (!auth.ok) return NextResponse.json({ success: false, message: auth.message }, { status: auth.status })
  const { take, skip } = parseTakeSkip(req)
  const virtual = virtualEmployeesApi(auth.user.id, take, skip)
  if (virtual) return NextResponse.json(virtual.body, { status: virtual.status })

  const teamId = auth.user.profile!.teamId!
  const where = { teamId }
  const [total, employees] = await prisma.$transaction([
    prisma.workforceEmployee.count({ where }),
    prisma.workforceEmployee.findMany({
      where,
      include: { profile: true, department: true, manager: true },
      orderBy: [{ createdAt: 'desc' }],
      take,
      skip,
    }),
  ])

  const canViewEmails = canViewAllEmails({ permissions: auth.user.permissions, role: auth.user.profile?.role })
  const viewerEmail = auth.user.email
  const data = employees.map((e) => ({
    ...e,
    profile: { ...e.profile, email: redactEmailForViewer(e.profile.email, viewerEmail, canViewEmails) },
    manager: e.manager ? { ...e.manager, email: redactEmailForViewer(e.manager.email, viewerEmail, canViewEmails) } : null,
  }))

  return NextResponse.json({ success: true, data, total, hasMore: skip + employees.length < total })
}

export async function POST(req: NextRequest) {
  const auth = await requirePermission(req, 'employees.create')
  if (!auth.ok) return NextResponse.json({ success: false, message: auth.message }, { status: auth.status })
  const teamId = auth.user.profile!.teamId!

  const json = await req.json().catch(() => null)
  const parsed = createSchema.safeParse(json)
  if (!parsed.success) {
    return NextResponse.json({ success: false, message: 'بيانات غير صحيحة', errors: parsed.error.issues }, { status: 400 })
  }

  const joinDate = parsed.data.joinDate ? new Date(parsed.data.joinDate) : undefined
  if (joinDate && Number.isNaN(joinDate.valueOf())) {
    return NextResponse.json({ success: false, message: 'joinDate غير صحيح' }, { status: 400 })
  }

  if (parsed.data.departmentId) {
    const dep = await prisma.workforceDepartment.findFirst({
      where: { id: parsed.data.departmentId, teamId },
      select: { id: true },
    })
    if (!dep) return NextResponse.json({ success: false, message: 'معرّف غير صحيح' }, { status: 400 })
  }

  if (parsed.data.managerId) {
    const mgr = await prisma.workforceProfile.findFirst({
      where: { id: parsed.data.managerId, teamId },
      select: { id: true },
    })
    if (!mgr) return NextResponse.json({ success: false, message: 'معرّف غير صحيح' }, { status: 400 })
  }

  const salary = parsed.data.salary === undefined ? undefined : String(parsed.data.salary)

  const email = parsed.data.email.toLowerCase().trim()
  let created
  try {
    created = await prisma.$transaction(async (tx) => {
      const existingProfile = await tx.workforceProfile.findUnique({ where: { email } })
      if (existingProfile && existingProfile.teamId && existingProfile.teamId !== teamId) {
        throw new Error('PROFILE_COMPANY_CONFLICT')
      }
      if (existingProfile) {
        const employee = await tx.workforceEmployee.findFirst({ where: { teamId, profileId: existingProfile.id }, select: { id: true } })
        if (employee) throw new Error('EMPLOYEE_EXISTS')
      }
      const profile =
        existingProfile ??
        (await tx.workforceProfile.create({
          data: {
            email,
            firstName: parsed.data.firstName,
            lastName: parsed.data.lastName ?? null,
            role: 'EMPLOYEE',
            teamId,
          },
        }))

      if (existingProfile && !existingProfile.teamId) {
        await tx.workforceProfile.update({ where: { id: profile.id }, data: { teamId } })
      }

      const created = await tx.workforceEmployee.create({
        data: {
          teamId,
          profileId: profile.id,
          departmentId: parsed.data.departmentId,
          position: parsed.data.position,
          joinDate,
          salary,
          status: parsed.data.status ?? 'ACTIVE',
          managerId: parsed.data.managerId,
        },
        include: { profile: true, department: true, manager: true },
      })

      return created
    }, { isolationLevel: 'Serializable' })
  } catch (error) {
    const code = (error as { code?: string })?.code
    const message = error instanceof Error ? error.message : ''
    if (code === 'P2034' || code === 'P2002' || message === 'PROFILE_COMPANY_CONFLICT' || message === 'EMPLOYEE_EXISTS') {
      return NextResponse.json({ success: false, message: 'هذا البريد مرتبط بموظف أو شركة أخرى' }, { status: 409 })
    }
    throw error
  }

  return NextResponse.json({ success: true, data: created })
}

