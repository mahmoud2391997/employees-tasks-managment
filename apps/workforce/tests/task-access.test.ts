import { describe, expect, it } from 'vitest'
import { canAssignTasks, canModifyTask } from '@/lib/task-access'

const permissions = ['tasks.edit', 'tasks.assign', 'tasks.delete']
const task = { assigneeId: 'employee', createdById: 'manager' }
describe('task ownership restrictions', () => {
  it('allows admin and manager assignment capabilities, but excludes employees and custom roles', () => {
    for (const role of ['EMPLOYEE', 'CUSTOM']) {
      expect(canAssignTasks({ profileId: 'employee', role, permissions })).toBe(false)
    }
    expect(canAssignTasks({ profileId: 'manager', role: 'MANAGER', permissions })).toBe(true)
    expect(canAssignTasks({ profileId: 'admin', role: 'ADMIN', permissions })).toBe(true)
  })
  it('allows admin edits on any task, managers on created or assigned tasks, and others on assigned tasks', () => {
    expect(canModifyTask({ profileId: 'admin', role: 'ADMIN', permissions }, task)).toBe(true)
    expect(canModifyTask({ profileId: 'manager', role: 'MANAGER', permissions }, task)).toBe(true)
    expect(canModifyTask({ profileId: 'employee', role: 'MANAGER', permissions }, task)).toBe(true)
    expect(canModifyTask({ profileId: 'other', role: 'MANAGER', permissions }, task)).toBe(false)
    expect(canModifyTask({ profileId: 'employee', role: 'EMPLOYEE', permissions }, task)).toBe(true)
    expect(canModifyTask({ profileId: 'manager', role: 'EMPLOYEE', permissions }, task)).toBe(false)
    expect(canModifyTask({ profileId: 'manager', role: 'CUSTOM', permissions }, task)).toBe(false)
    expect(canModifyTask({ profileId: 'employee', role: 'CUSTOM', permissions }, task)).toBe(true)
  })
  it('requires edit/delete permissions in addition to ownership', () => {
    expect(canModifyTask({ profileId: 'employee', role: 'EMPLOYEE', permissions: [] }, task)).toBe(false)
    expect(canModifyTask({ profileId: 'other', role: 'MANAGER', permissions }, task, 'delete')).toBe(false)
  })
})
