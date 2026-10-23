import { describe, expect, it } from 'vitest'
import { taskVisibilityWhere } from '@/lib/task-access'
import { taskSearchWhere } from '@/lib/server-search'

type Task = { id: string; teamId: string; createdById: string; assigneeId: string }
// Evaluate authorization against adversarial records, including cross-company ownership links.
function matches(row: Task, where: any): boolean {
  return Object.entries(where).every(([key, value]) => {
    if (key === 'OR') return (value as any[]).some(clause => matches(row, clause))
    if (key === 'AND') return (value as any[]).every(clause => matches(row, clause))
    return row[key as keyof Task] === value
  })
}
const rows: Task[] = [
  { id: 'assigned', teamId: 'a', createdById: 'admin', assigneeId: 'manager' },
  { id: 'created', teamId: 'a', createdById: 'manager', assigneeId: 'employee' },
  { id: 'unrelated', teamId: 'a', createdById: 'admin', assigneeId: 'employee' },
  { id: 'foreign-assigned', teamId: 'b', createdById: 'admin', assigneeId: 'manager' },
  { id: 'foreign-created', teamId: 'b', createdById: 'manager', assigneeId: 'employee' },
]
const profile = (role: string, id = 'manager') => ({ id, role })
describe('task read boundaries', () => {
  it('shows managers created and assigned tasks without unrelated or foreign records', () => {
    const where = taskVisibilityWhere('a', profile('MANAGER'), ['tasks.view'])
    expect(rows.filter(row => matches(row, where)).map(row => row.id)).toEqual(['assigned', 'created'])
    const ownFilter = taskSearchWhere(new URLSearchParams({ assignment: 'me' }), 'manager')
    expect(rows.filter(row => matches(row, { AND: [where, ownFilter] })).map(row => row.id)).toEqual(['assigned'])
  })
  it('does not give employees or custom roles manager visibility', () => {
    for (const role of ['EMPLOYEE', 'CUSTOM']) {
      const where = taskVisibilityWhere('a', profile(role, 'employee'), ['tasks.view'])
      expect(rows.filter(row => matches(row, where)).map(row => row.id)).toEqual(['created', 'unrelated'])
    }
  })
  it('scopes admins to their company and denies missing permission or profile', () => {
    expect(rows.filter(row => matches(row, taskVisibilityWhere('a', profile('ADMIN'), ['tasks.view'])))).toHaveLength(3)
    expect(rows.filter(row => matches(row, taskVisibilityWhere('a', profile('ADMIN'), [])))).toHaveLength(0)
    expect(rows.filter(row => matches(row, taskVisibilityWhere('a', null, ['tasks.view'])))).toHaveLength(0)
  })
})
