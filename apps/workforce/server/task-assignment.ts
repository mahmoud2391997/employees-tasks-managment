import { prisma } from '@/server/db'
import { canAssignTasks } from '@/lib/task-access'

export async function mayAssignTask(actor: { profileId: string; role: string; permissions: readonly string[] }, teamId: string, assigneeId: string | null | undefined, departmentId?: string | null) {
  if (!canAssignTasks(actor)) return false
  if (actor.role === 'ADMIN') return true
  const departments = await prisma.workforceDepartment.findMany({ where: { teamId, managerId: actor.profileId }, select: { id: true } })
  const ids = departments.map(d => d.id)
  if (!ids.length || (departmentId && !ids.includes(departmentId))) return false
  if (!assigneeId) return true
  return Boolean(await prisma.workforceEmployee.findFirst({
    where: { teamId, profileId: assigneeId, departmentId: { in: departmentId ? [departmentId] : ids }, profile: { teamId } }, select: { id: true },
  }))
}
