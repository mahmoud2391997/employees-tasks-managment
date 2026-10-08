import { describe, expect, it, vi } from 'vitest'
const { departments, employees } = vi.hoisted(() => ({ departments: vi.fn(), employees: vi.fn() }))
vi.mock('@/server/db', () => ({ prisma: { workforceDepartment: { findMany: departments }, workforceEmployee: { findFirst: employees } } }))
import { mayAssignTask } from '@/server/task-assignment'
const actor = { profileId: 'manager', role: 'MANAGER', permissions: ['tasks.assign'] }
describe('department task assignment', () => {
  it('denies a manager who is not a department head', async () => {
    departments.mockResolvedValue([])
    expect(await mayAssignTask(actor, 'team', 'employee')).toBe(false)
    expect(employees).not.toHaveBeenCalled()
  })
  it('requires the employee and task department to belong to the managed department', async () => {
    departments.mockResolvedValue([{ id: 'engineering' }])
    employees.mockResolvedValue({ id: 'employee' })
    expect(await mayAssignTask(actor, 'team', 'profile', 'engineering')).toBe(true)
    expect(employees).toHaveBeenCalledWith(expect.objectContaining({ where: { teamId: 'team', profileId: 'profile', departmentId: { in: ['engineering'] }, profile: { teamId: 'team' } } }))
    expect(await mayAssignTask(actor, 'team', 'profile', 'operations')).toBe(false)
    employees.mockResolvedValue(null)
    expect(await mayAssignTask(actor, 'team', 'foreign')).toBe(false)
  })
  it('allows admins across departments and denies employees with assignment permission', async () => {
    expect(await mayAssignTask({ ...actor, role: 'ADMIN' }, 'team', 'employee')).toBe(true)
    expect(await mayAssignTask({ ...actor, role: 'EMPLOYEE' }, 'team', 'employee')).toBe(false)
    expect(departments).not.toHaveBeenCalled()
  })
})
