import { NextResponse, type NextRequest } from 'next/server'
import { z } from 'zod'

import { prisma } from '@/server/db'
import { requirePermission } from '@/server/auth/require-permission'

export const runtime = 'nodejs'

const createSchema = z.object({
  email: z.string().email(),
  firstName: z.string().trim().min(1),
  lastName: z.string().trim().min(1).optional(),
  departmentId: z.string().trim().min(1).optional(),
  position: z.string().trim().min(1).optional(),
  joinDate: z.string().trim().min(1).optional(),
  salary: z.union([z.number(), z.string().trim().min(1)]).optional(),
  status: z.enum(['ACTIVE', 'INACTIVE', 'ON_LEAVE', 'TERMINATED']).optional(),
  managerId: z.string().trim().min(1).optional(),
})

export async function GET(req: NextRequest) {
  const auth = await requirePermission(req, 'employees.view')
  if (!auth.ok) return NextResponse.json({ success: false, message: auth.message }, { status: auth.status })
  const teamId = auth.user.profile!.teamId!

  const employees = await prisma.workforceEmployee.findMany({
    where: { teamId },
    include: { profile: true, department: true, manager: true },
    orderBy: [{ createdAt: 'desc' }],
  })
  return NextResponse.json({ success: true, data: employees })
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

  const salary = parsed.data.salary === undefined ? undefined : String(parsed.data.salary)

  const email = parsed.data.email.toLowerCase().trim()
  if (parsed.data.departmentId) {
    const department = await prisma.workforceDepartment.findFirst({
      where: { id: parsed.data.departmentId, teamId },
      select: { id: true },
    })
    if (!department) return NextResponse.json({ success: false, message: 'القسم غير موجود' }, { status: 400 })
  }
  if (parsed.data.managerId) {
    const manager = await prisma.workforceProfile.findFirst({
      where: { id: parsed.data.managerId, teamId },
      select: { id: true },
    })
    if (!manager) return NextResponse.json({ success: false, message: 'المدير غير موجود' }, { status: 400 })
  }

  const existingProfile = await prisma.workforceProfile.findUnique({ where: { email } })
  if (existingProfile && existingProfile.teamId && existingProfile.teamId !== teamId) {
    return NextResponse.json({ success: false, message: 'هذا البريد مرتبط بشركة أخرى' }, { status: 409 })
  }
  const profile =
    existingProfile ??
    (await prisma.workforceProfile.create({
      data: {
        email,
        firstName: parsed.data.firstName,
        lastName: parsed.data.lastName ?? null,
        role: 'EMPLOYEE',
        teamId,
      },
    }))

  if (!existingProfile?.teamId) {
    await prisma.workforceProfile.update({ where: { id: profile.id }, data: { teamId } })
  }

  const created = await prisma.workforceEmployee.create({
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

  return NextResponse.json({ success: true, data: created })
}

