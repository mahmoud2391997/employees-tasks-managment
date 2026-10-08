type TaskActor = { profileId: string; role: string; permissions: readonly string[] }
type TaskOwnership = { assigneeId: string | null; createdById: string | null }

export function canAssignTasks(actor: TaskActor) {
  return (actor.role === 'ADMIN' || actor.role === 'MANAGER') && actor.permissions.includes('tasks.assign')
}

export function canModifyTask(actor: TaskActor, task: TaskOwnership, action: 'edit' | 'delete' = 'edit') {
  if (!actor.permissions.includes(`tasks.${action}`)) return false
  if (actor.role === 'ADMIN') return true
  if (actor.role === 'MANAGER') return task.assigneeId === actor.profileId || task.createdById === actor.profileId
  return task.assigneeId === actor.profileId
}

/** Scope every task read, including pagination totals and dashboard statistics. */
export function taskVisibilityWhere(teamId: string, profile: { id: string; role: string } | null, permissions: readonly string[]) {
  if (!profile || !permissions.includes('tasks.view')) return { teamId, id: '__no_visible_tasks__' }
  if (profile.role === 'ADMIN') return { teamId }
  if (profile.role === 'MANAGER') return { teamId, createdById: profile.id }
  return { teamId, assigneeId: profile.id }
}
