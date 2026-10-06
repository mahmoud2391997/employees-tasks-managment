import { ALL_PERMISSIONS } from '@/lib/permissions'
import { describe, expect, it, vi } from 'vitest'

function makeReq(body: any) {
  return {
    json: async () => body,
  } as any
}

describe('POST /api/members/reactivate', () => {
  it('reactivates an existing inactive membership without resetting role', async () => {
    vi.resetModules()

    const upsert = vi.fn().mockResolvedValue({
      id: 'm1',
      userId: 'u1',
      teamId: 't1',
      role: 'MANAGER',
      isActive: true,
    })

    vi.doMock('@/server/auth/require-permission', () => ({
      requirePermission: vi.fn().mockResolvedValue({
        ok: true,
        status: 200,
        message: 'ok',
        user: { profile: { id: 'p-admin', teamId: 't1' }, permissions: [...ALL_PERMISSIONS] },
      }),
    }))

    vi.doMock('@/server/db', () => ({
      prisma: {
        workforceUser: {
          findUnique: vi.fn().mockResolvedValue({
            id: 'u1',
            profileId: 'p1',
            profile: { id: 'p1', role: 'MANAGER' },
            memberships: [{ id: 'm1', role: 'MANAGER', isActive: false }],
          }),
        },
        $transaction: vi.fn(async (fn: any) =>
          fn({
            workforceProfile: { update: vi.fn().mockResolvedValue({}), create: vi.fn(), },
            workforceUser: { update: vi.fn().mockResolvedValue({}) },
            workforceTeamMember: { upsert },
          }),
        ),
      },
    }))

    const { POST } = await import('@/app/api/members/reactivate/route')
    const res = await POST(makeReq({ email: 'user@example.com' }))
    expect(res.status).toBe(200)

    const json = await res.json()
    expect(json.success).toBe(true)
    expect(upsert).toHaveBeenCalledWith(
      expect.objectContaining({
        update: { isActive: true },
      }),
    )
  })
})

