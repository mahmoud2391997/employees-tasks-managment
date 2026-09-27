import { describe, expect, it, vi } from 'vitest'

function makeReq(body: any) {
  return {
    json: async () => body,
    nextUrl: new URL('http://localhost/api/employees'),
  } as any
}

describe('FK validation', () => {
  it('rejects invalid departmentId on employee create with a clean 400', async () => {
    vi.resetModules()

    vi.doMock('@/server/auth/require-permission', () => ({
      requirePermission: vi.fn().mockResolvedValue({
        ok: true,
        status: 200,
        message: 'ok',
        user: { profile: { id: 'p1', teamId: 't1' }, permissions: ['employees.create'] },
      }),
    }))

    vi.doMock('@/server/db', () => ({
      prisma: {
        workforceDepartment: { findFirst: vi.fn().mockResolvedValue(null) },
        workforceProfile: { findUnique: vi.fn(), create: vi.fn(), update: vi.fn() },
        workforceEmployee: { create: vi.fn(), count: vi.fn(), findMany: vi.fn() },
        $transaction: vi.fn(),
      },
    }))

    const { POST } = await import('@/app/api/employees/route')
    const res = await POST(
      makeReq({
        email: 'x@y.com',
        firstName: 'X',
        lastName: 'Y',
        departmentId: 'dep-does-not-exist',
      }),
    )

    expect(res.status).toBe(400)
    const json = await res.json()
    expect(json.success).toBe(false)
  })
})

