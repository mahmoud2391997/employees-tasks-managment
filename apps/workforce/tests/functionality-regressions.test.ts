import { afterEach, describe, expect, it, vi } from 'vitest'
import { salarySchema } from '@/lib/salary-schema'
import { ALL_PERMISSIONS } from '@/lib/permissions'

const req = (body: unknown) => ({ json: async () => body, method: 'PATCH' }) as any
const ctx = { params: Promise.resolve({ id: 'row1' }) }
afterEach(() => { vi.resetModules(); vi.unstubAllEnvs() })

function auth(permissions = [...ALL_PERMISSIONS] as string[]) {
  vi.doMock('@/server/auth/require-permission', () => ({ requirePermission: async () => ({ ok: true, user: { id: 'u1', profile: { id: 'p1', teamId: 't1' }, permissions } }) }))
}

describe('functionality regressions', () => {
  it('validates monetary input before database writes', () => {
    for (const value of ['oops', '-1', '1.234', '', Infinity, -10]) expect(salarySchema.safeParse(value).success).toBe(false)
    for (const value of ['0', '123.45', 1250]) expect(salarySchema.safeParse(value).success).toBe(true)
  })

  it('rejects a foreign company department manager without updating', async () => {
    auth()
    const update = vi.fn()
    vi.doMock('@/server/db', () => ({ prisma: { workforceDepartment: { findFirst: async () => ({ id: 'row1' }), update }, workforceProfile: { findFirst: async () => null } } }))
    const { PATCH } = await import('@/app/api/departments/[id]/route')
    expect((await PATCH(req({ managerId: 'foreign-profile' }), ctx)).status).toBe(400)
    expect(update).not.toHaveBeenCalled()
  })

  it('rejects demo task edits without touching the database', async () => {
    vi.doMock('@/server/auth/session', () => ({ getSessionUser: async () => ({ id: 'database-unavailable-admin', profile: { id: 'demo', teamId: 'demo' }, permissions: [] }) }))
    const findFirst = vi.fn()
    vi.doMock('@/server/db', () => ({ prisma: { workforceTask: { findFirst } } }))
    const { PATCH } = await import('@/app/api/tasks/[id]/route')
    expect((await PATCH(req({ title: 'Changed' }), ctx)).status).toBe(403)
    expect(findFirst).not.toHaveBeenCalled()
  })

  it('prevents invitation-based privilege escalation', async () => {
    auth(['members.invite'])
    vi.doMock('@/server/db', () => ({ prisma: {} }))
    const { POST } = await import('@/app/api/members/invite/route')
    expect((await POST(req({ email: 'new@example.com', role: 'ADMIN' }))).status).toBe(403)
  })

  it('reuses an employee profile when accepting an invitation', async () => {
    const profileCreate = vi.fn()
    const profileUpdate = vi.fn().mockResolvedValue({ id: 'existing-profile' })
    const userUpdate = vi.fn()
    const claim = vi.fn().mockResolvedValue({ count: 1 })
    const tx = {
      workforceInvitation: { updateMany: claim },
      workforceUser: { create: async () => ({ id: 'new-user', email: 'new@example.com' }), update: userUpdate },
      workforceProfile: { findUnique: async () => ({ id: 'existing-profile', teamId: 't1', lastName: 'Employee' }), create: profileCreate, update: profileUpdate },
      workforceTeamMember: { create: vi.fn() }, workforceCustomRole: { createMany: vi.fn() },
    }
    vi.doMock('@/server/db', () => ({ prisma: {
      workforceInvitation: { findUnique: async () => ({ id: 'inv1', teamId: 't1', email: 'new@example.com', role: 'EMPLOYEE', acceptedAt: null, expiresAt: null, invitedById: 'p1' }) },
      workforceUser: { findUnique: async () => null }, $transaction: async (fn: any) => fn(tx),
    } }))
    vi.doMock('@/server/auth/jwt', () => ({ issueAccessToken: async () => 'token', setAuthCookie: vi.fn() }))
    vi.doMock('@/server/notify', () => ({ recordNotification: vi.fn() }))
    const { POST } = await import('@/app/api/invitations/accept/route')
    const res = await POST(req({ token: 'invitation-token', password: 'long-password', firstName: 'New' }))
    expect(res.status).toBe(200)
    expect(profileCreate).not.toHaveBeenCalled()
    expect(userUpdate).toHaveBeenCalledWith({ where: { id: 'new-user' }, data: { profileId: 'existing-profile' } })
    expect(claim).toHaveBeenCalledOnce()
    claim.mockResolvedValue({ count: 0 })
    expect((await POST(req({ token: 'invitation-token', password: 'long-password', firstName: 'New' }))).status).toBe(409)
  })
  it('rejects moving another company account during reactivation', async () => {
    auth()
    const transaction = vi.fn()
    vi.doMock('@/server/db', () => ({ prisma: {
      workforceUser: { findUnique: async () => ({ id: 'foreign', profileId: 'foreign-profile', profile: { teamId: 'other', role: 'ADMIN' }, memberships: [] }) },
      $transaction: transaction,
    } }))
    const { POST } = await import('@/app/api/members/reactivate/route')
    expect((await POST(req({ email: 'foreign@example.com' }))).status).toBe(409)
    expect(transaction).not.toHaveBeenCalled()
  })

  it('returns success for a saved task even if notification recording fails', async () => {
    auth()
    const create = vi.fn().mockResolvedValue({ id: 'task1', title: 'Test', assigneeId: 'p2' })
    vi.doMock('@/server/db', () => ({ prisma: { workforceProfile: { findFirst: async () => ({ id: 'p2' }) }, workforceTask: { create } } }))
    vi.doMock('@/server/notify', () => ({ recordNotification: vi.fn().mockRejectedValue(new Error('Notification unavailable')) }))
    const log = vi.spyOn(console, 'error').mockImplementation(() => {})
    try {
      const { POST } = await import('@/app/api/tasks/route')
      expect((await POST(req({ title: 'Test', assigneeId: 'p2' }))).status).toBe(200)
      expect(create).toHaveBeenCalledOnce()
    } finally { log.mockRestore() }
  })

})
