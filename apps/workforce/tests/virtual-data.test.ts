import { describe, expect, it, vi } from 'vitest'

import { FALLBACK_ADMIN_ID, FALLBACK_ADMIN_PROFILE_ID } from '@/server/company'
import {
  getVirtualCompany,
  servesVirtualDemoData,
  virtualDashboardStats,
  virtualEmployeesApi,
  virtualNotificationsApi,
  virtualTasksApi,
} from '@/server/virtual-data'

describe('public sample data', () => {
  it('loads only the public sample company', () => {
    expect(servesVirtualDemoData(FALLBACK_ADMIN_ID)).toBe(true)
    expect(servesVirtualDemoData('someone-else')).toBe(false)

    const stats = virtualDashboardStats()
    expect(stats.employees).toBe(18)
    expect(stats.departments).toBe(6)
    expect(stats.tasks).toBe(36)
    expect(stats.completed).toBe(9)
    expect(stats.statusRows.map((row) => row.count)).toEqual([9, 9, 9, 9])

    const company = getVirtualCompany()
    expect(company.profiles).toHaveLength(19)
    expect(company.members).toHaveLength(19)
    expect(company.invitations).toHaveLength(3)
    expect(company.employees.every(employee => employee.profile.email.endsWith('@riwaq.invalid'))).toBe(true)
    for (const department of company.departments) {
      expect(department.manager?.role).toBe('MANAGER')
      expect(company.employees.filter(employee => employee.departmentId === department.id)).toHaveLength(3)
      expect(company.tasks.filter(task => task.departmentId === department.id)).toHaveLength(6)
    }
    expect(company.tasks.filter(task => task.assigneeId === company.admin.id)).toHaveLength(6)
    expect(company.tasks.filter(task => task.createdById === company.admin.id && task.assigneeId !== company.admin.id)).toHaveLength(18)
    expect(new Set(company.tasks.map(task => task.priority)).size).toBe(4)
    expect(company.tasks.every(task => task.assignee?.id === task.assigneeId && task.creator.id === task.createdById)).toBe(true)
    expect(company.tasks.some(task => task.dueDate && Date.parse(task.dueDate) < Date.now())).toBe(true)
    expect(company.tasks.some(task => task.dueDate && Date.parse(task.dueDate) > Date.now())).toBe(true)
    expect(company.invitations.every(invite => Date.parse(invite.expiresAt) > Date.now())).toBe(true)
    expect(company.notifications.every((row) => row.userId === FALLBACK_ADMIN_PROFILE_ID)).toBe(true)
    expect(company.roles.map((role) => role.name)).toEqual(['ADMIN', 'MANAGER', 'EMPLOYEE'])
  })

  it('serves paged samples in production and blocks them when disabled', () => {
    const employees = virtualEmployeesApi(FALLBACK_ADMIN_ID, 1, 0)
    expect(employees?.status).toBe(200)
    expect(employees && 'data' in employees.body ? employees.body.data : []).toHaveLength(1)
    expect(employees && 'hasMore' in employees.body ? employees.body.hasMore : false).toBe(true)

    const tasks = virtualTasksApi(FALLBACK_ADMIN_ID, 50, 0)
    expect(tasks?.status).toBe(200)
    expect(tasks && 'total' in tasks.body ? tasks.body.total : 0).toBe(36)

    const notes = virtualNotificationsApi(FALLBACK_ADMIN_ID, FALLBACK_ADMIN_PROFILE_ID, 50, 0)
    expect(notes?.status).toBe(200)
    expect(notes && 'total' in notes.body ? notes.body.total : 0).toBe(6)

    expect(virtualEmployeesApi('real-user', 50, 0)).toBeNull()

    vi.stubEnv('NODE_ENV', 'production')
    try {
      expect(servesVirtualDemoData(FALLBACK_ADMIN_ID)).toBe(true)
      expect(virtualTasksApi(FALLBACK_ADMIN_ID, 50, 0)?.status).toBe(200)
      vi.stubEnv('WORKFORCE_DEMO_MODE', 'false')
      expect(servesVirtualDemoData(FALLBACK_ADMIN_ID)).toBe(false)
      expect(virtualTasksApi(FALLBACK_ADMIN_ID, 50, 0)?.status).toBe(503)
    } finally {
      vi.unstubAllEnvs()
    }
  })
})
