type Viewer = { id: string; role: string } | null

export function employeeVisibilityWhere(teamId: string, viewer: Viewer) {
  if (viewer?.role !== 'MANAGER') return { teamId }
  return { teamId, OR: [
    { department: { teamId, managerId: viewer.id } },
    { profile: { user: { memberships: { some: { teamId, role: 'ADMIN', isActive: true } } } } },
  ] }
}

export function memberVisibilityWhere(teamId: string, viewer: Viewer) {
  if (viewer?.role !== 'MANAGER') return { teamId }
  return { teamId, OR: [
    { role: 'ADMIN' },
    { user: { profile: { teamId, employees: { some: { teamId, department: { teamId, managerId: viewer.id } } } } } },
  ] }
}
