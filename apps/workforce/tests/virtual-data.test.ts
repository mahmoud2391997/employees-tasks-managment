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
    expect(stats.employees).toBe(2)
    expect(stats.departments).toBe(3)
    expect(stats.tasks).toBe(4)
    expect(stats.completed).toBe(1)
    expect(stats.statusRows.map((row) => row.count)).toEqual([1, 1, 1, 1])

    const company = getVirtualCompany()
    expect(company.employees.map((employee) => employee.profile.email)).toEqual(['sara@demo.local', 'alex@demo.local'])
    expect(company.tasks.map((task) => task.title)).toEqual([
      'Set up Kanban board',
      'Prepare operations report',
      'Review onboarding flow',
      'Design system polish',
    ])
    expect(company.invitations).toHaveLength(1)
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
    expect(tasks && 'total' in tasks.body ? tasks.body.total : 0).toBe(4)

    const notes = virtualNotificationsApi(FALLBACK_ADMIN_ID, FALLBACK_ADMIN_PROFILE_ID, 50, 0)
    expect(notes?.status).toBe(200)
    expect(notes && 'total' in notes.body ? notes.body.total : 0).toBe(2)

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
