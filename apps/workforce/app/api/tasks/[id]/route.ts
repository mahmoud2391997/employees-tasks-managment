import { NextResponse, type NextRequest } from 'next/server'
import { z } from 'zod'

import { prisma } from '@/server/db'
import { FALLBACK_ADMIN_ID } from '@/lib/sample-identity'
import { VIRTUAL_READONLY_MESSAGE } from '@/server/virtual-data'
import { recordNotification, taskStatusLabel } from '@/server/notify'

export const runtime = 'nodejs'

const updateSchema = z.object({
  title: z.string().trim().min(1).optional(),
  description: z.string().trim().min(1).nullable().optional(),
  status: z.enum(['TODO', 'IN_PROGRESS', 'REVIEW', 'COMPLETED']).optional(),
  dueDate: z.string().trim().min(1).nullable().optional(),
  priority: z.enum(['LOW', 'MEDIUM', 'HIGH', 'URGENT']).optional(),
  departmentId: z.string().trim().min(1).nullable().optional(),
  assigneeId: z.string().trim().min(1).nullable().optional(),
})

export async function PATCH(req: NextRequest, ctx: { params: Promise<{ id: string }> }) {
  const { id } = await ctx.params
  const json = await req.json().catch(() => null)
  const parsed = updateSchema.safeParse(json)
  if (!parsed.success) {
    return NextResponse.json({ success: false, message: 'بيانات غير صحيحة', errors: parsed.error.issues }, { status: 400 })
  }

  const { getSessionUser } = await import('@/server/auth/session')
  const user = await getSessionUser(req)
  if (!user?.profile?.teamId) {
    return NextResponse.json({ success: false, message: user ? 'لا يوجد فريق مرتبط بالحساب' : 'غير مصرح' }, { status: user ? 400 : 401 })
  }
  if (user.id === FALLBACK_ADMIN_ID) return NextResponse.json({ success: false, message: VIRTUAL_READONLY_MESSAGE }, { status: 403 })
  const teamId = user.profile.teamId
  const actorId = user.profile.id

  const dueDate = parsed.data.dueDate ? new Date(parsed.data.dueDate) : parsed.data.dueDate === null ? null : undefined
  if (dueDate && Number.isNaN(dueDate.valueOf())) {
    return NextResponse.json({ success: false, message: 'dueDate غير صحيح' }, { status: 400 })
  }

  const existing = await prisma.workforceTask.findFirst({
    where: { id, teamId },
    select: { id: true, title: true, status: true, createdById: true, assigneeId: true },
  })
  if (!existing) return NextResponse.json({ success: false, message: 'غير موجود' }, { status: 404 })

  const assigneeChanged = parsed.data.assigneeId !== undefined && parsed.data.assigneeId !== existing.assigneeId
  const editsContent =
    parsed.data.title !== undefined ||
    parsed.data.description !== undefined ||
    parsed.data.status !== undefined ||
    parsed.data.dueDate !== undefined ||
    parsed.data.priority !== undefined ||
    parsed.data.departmentId !== undefined
  if (editsContent && !user.permissions.includes('tasks.edit')) {
    return NextResponse.json({ success: false, message: 'ليس لديك صلاحية' }, { status: 403 })
  }
  if (assigneeChanged && !user.permissions.includes('tasks.assign')) {
    return NextResponse.json({ success: false, message: 'ليس لديك صلاحية إسناد المهام' }, { status: 403 })
  }
  if (!editsContent && !assigneeChanged) {
    return NextResponse.json({ success: false, message: 'لا يوجد تغيير' }, { status: 400 })
  }
  if (parsed.data.departmentId !== undefined && parsed.data.departmentId !== null) {
    const dep = await prisma.workforceDepartment.findFirst({
      where: { id: parsed.data.departmentId, teamId },
      select: { id: true },
    })
    if (!dep) return NextResponse.json({ success: false, message: 'معرّف غير صحيح' }, { status: 400 })
  }

  if (parsed.data.assigneeId !== undefined && parsed.data.assigneeId !== null) {
    const assignee = await prisma.workforceProfile.findFirst({
      where: { id: parsed.data.assigneeId, teamId },
      select: { id: true },
    })
    if (!assignee) return NextResponse.json({ success: false, message: 'معرّف غير صحيح' }, { status: 400 })
  }

  const updated = await prisma.workforceTask.update({
    where: { id },
    data: {
      title: parsed.data.title,
      description: parsed.data.description,
      status: parsed.data.status,
      dueDate,
      priority: parsed.data.priority,
      departmentId: parsed.data.departmentId === undefined ? undefined : parsed.data.departmentId,
      assigneeId: parsed.data.assigneeId === undefined ? undefined : parsed.data.assigneeId,
    },
    include: { department: true, assignee: true, creator: true },
  })

  const newAssigneeId = parsed.data.assigneeId === undefined ? existing.assigneeId : parsed.data.assigneeId
  if (newAssigneeId && assigneeChanged && newAssigneeId !== actorId) {
    await recordNotification({
      userId: newAssigneeId,
      teamId,
      type: 'task_assigned',
      title: 'تم إسناد مهمة',
      message: `تم إسناد المهمة "${updated.title}" إليك`,
      data: { taskId: id, assignedBy: actorId },
    }).catch((error) => console.error('tasks: notification failed after save', error))
  }

  const statusChanged = Boolean(parsed.data.status && existing.status !== parsed.data.status)
  const recipients = new Set<string>()
  if (existing.createdById && existing.createdById !== actorId) recipients.add(existing.createdById)
  if (existing.assigneeId && existing.assigneeId !== actorId) recipients.add(existing.assigneeId)
  for (const userId of recipients) {
    if (assigneeChanged && userId === newAssigneeId) continue
    await recordNotification({
      userId,
      teamId,
      type: statusChanged ? 'task_status_changed' : 'task_updated',
      title: statusChanged ? 'تم تحديث حالة مهمة' : 'تم تحديث مهمة',
      message: statusChanged
        ? `أصبحت المهمة "${updated.title}" في الحالة ${taskStatusLabel(parsed.data.status)}`
        : `تم تحديث المهمة "${updated.title}"`,
      data: { taskId: id, changedBy: actorId, newStatus: parsed.data.status ?? null },
    }).catch((error) => console.error('tasks: notification failed after save', error))
  }

  return NextResponse.json({ success: true, data: updated })
}

export async function DELETE(req: NextRequest, ctx: { params: Promise<{ id: string }> }) {
  const { id } = await ctx.params
  const { requirePermission } = await import('@/server/auth/require-permission')
  const auth = await requirePermission(req, 'tasks.delete')
  if (!auth.ok) return NextResponse.json({ success: false, message: auth.message }, { status: auth.status })
  const teamId = auth.user.profile!.teamId!
  const actorId = auth.user.profile!.id

  const existing = await prisma.workforceTask.findFirst({
    where: { id, teamId },
    select: { id: true, title: true, createdById: true, assigneeId: true },
  })
  if (!existing) return NextResponse.json({ success: false, message: 'غير موجود' }, { status: 404 })

  await prisma.workforceTask.delete({ where: { id } })

  const recipients = new Set<string>()
  if (existing.createdById && existing.createdById !== actorId) recipients.add(existing.createdById)
  if (existing.assigneeId && existing.assigneeId !== actorId) recipients.add(existing.assigneeId)
  for (const userId of recipients) {
    await recordNotification({
      userId,
      teamId,
      type: 'task_deleted',
      title: 'تم حذف مهمة',
      message: `تم حذف المهمة "${existing.title}"`,
      data: { taskId: id, deletedBy: actorId },
    }).catch((error) => console.error('tasks: notification failed after save', error))
  }

  return NextResponse.json({ success: true })
}

