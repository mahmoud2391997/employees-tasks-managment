import { demoMutation } from '@/server/demo-sandbox'
import { getDemoCompany } from '@/server/demo-sandbox'
import { NextResponse, type NextRequest } from 'next/server'
import { z } from 'zod'

import { prisma } from '@/server/db'
import { requirePermission } from '@/server/auth/require-permission'
import { recordNotification } from '@/server/notify'
import { canViewAllEmails, redactEmailForViewer } from '@/lib/email-privacy'
import { virtualTasksApi } from '@/server/virtual-data'

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
  title: z.string().trim().min(1),
  description: z.string().trim().min(1).optional(),
  dueDate: z.string().trim().min(1).optional(),
  priority: z.enum(['LOW', 'MEDIUM', 'HIGH', 'URGENT']).optional(),
  status: z.enum(['TODO', 'IN_PROGRESS', 'REVIEW', 'COMPLETED']).optional(),
  departmentId: z.string().trim().min(1).optional(),
  assigneeId: z.string().trim().min(1).optional(),
})

export async function GET(req: NextRequest) {
  const auth = await requirePermission(req, 'tasks.view')
  if (!auth.ok) return NextResponse.json({ success: false, message: auth.message }, { status: auth.status })
  const { take, skip } = parseTakeSkip(req)
  const virtual = virtualTasksApi(auth.user.id, take, skip, await getDemoCompany(req))
  if (virtual) return NextResponse.json(virtual.body, { status: virtual.status })

  const teamId = auth.user.profile!.teamId!
  const where = { teamId }
  const [total, tasks] = await prisma.$transaction([
    prisma.workforceTask.count({ where }),
    prisma.workforceTask.findMany({
      where,
      include: { department: true, assignee: true, creator: true },
      orderBy: [{ createdAt: 'desc' }],
      take,
      skip,
    }),
  ])

  const canViewEmails = canViewAllEmails({ permissions: auth.user.permissions, role: auth.user.profile?.role })
  const viewerEmail = auth.user.email
  const data = tasks.map((t) => ({
    ...t,
    assignee: t.assignee ? { ...t.assignee, email: redactEmailForViewer(t.assignee.email, viewerEmail, canViewEmails) } : null,
    creator: t.creator ? { ...t.creator, email: redactEmailForViewer(t.creator.email, viewerEmail, canViewEmails) } : null,
  }))

  return NextResponse.json({ success: true, data, total, hasMore: skip + data.length < total })
}

export async function POST(req: NextRequest) {
  const auth = await requirePermission(req, 'tasks.create')
  if (!auth.ok) return NextResponse.json({ success: false, message: auth.message }, { status: auth.status })
  const teamId = auth.user.profile!.teamId!
  const creatorId = auth.user.profile!.id

  const json = await req.json().catch(() => null)
  const parsed = createSchema.safeParse(json)
  if (!parsed.success) {
    return NextResponse.json({ success: false, message: 'بيانات غير صحيحة', errors: parsed.error.issues }, { status: 400 })
  }

  const demo = await demoMutation(req, auth.user.id, 'tasks', parsed.data)
  if (demo) return demo

  const dueDate = parsed.data.dueDate ? new Date(parsed.data.dueDate) : null
  if (dueDate && Number.isNaN(dueDate.valueOf())) {
    return NextResponse.json({ success: false, message: 'dueDate غير صحيح' }, { status: 400 })
  }
  if (parsed.data.assigneeId && !auth.user.permissions.includes('tasks.assign')) {
    return NextResponse.json({ success: false, message: 'ليس لديك صلاحية إسناد المهام' }, { status: 403 })
  }
  if (parsed.data.assigneeId) {
    const assignee = await prisma.workforceProfile.findFirst({
      where: { id: parsed.data.assigneeId, teamId },
      select: { id: true },
    })
    if (!assignee) return NextResponse.json({ success: false, message: 'المسؤول غير موجود' }, { status: 400 })
  }
  if (parsed.data.departmentId) {
    const department = await prisma.workforceDepartment.findFirst({
      where: { id: parsed.data.departmentId, teamId },
      select: { id: true },
    })
    if (!department) return NextResponse.json({ success: false, message: 'القسم غير موجود' }, { status: 400 })
  }

  const created = await prisma.workforceTask.create({
    data: {
      title: parsed.data.title,
      description: parsed.data.description,
      dueDate: dueDate ?? undefined,
      priority: parsed.data.priority ?? 'MEDIUM',
      status: parsed.data.status ?? 'TODO',
      teamId,
      departmentId: parsed.data.departmentId,
      assigneeId: parsed.data.assigneeId,
      createdById: creatorId,
    },
    include: { department: true, assignee: true, creator: true },
  })

  if (created.assigneeId && created.assigneeId !== creatorId) {
    await recordNotification({
      userId: created.assigneeId,
      teamId,
      type: 'task_assigned',
      title: 'تم إسناد مهمة',
      message: `تم إسناد المهمة "${created.title}" إليك`,
      data: { taskId: created.id, assignedBy: creatorId },
    }).catch((error) => console.error('tasks: notification failed after save', error))
  }

  return NextResponse.json({ success: true, data: created })
}

