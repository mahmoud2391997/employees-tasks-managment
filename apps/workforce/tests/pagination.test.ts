import { describe, expect, it, vi } from 'vitest'

function makeReq(url: string) {
  return {
    nextUrl: new URL(url),
  } as any
}

describe('Pagination boundaries', () => {
  it('returns hasMore=false for an empty first page', async () => {
    vi.resetModules()

    vi.doMock('@/server/auth/require-permission', () => ({
      requirePermission: vi.fn().mockResolvedValue({
        ok: true,
        status: 200,
        message: 'ok',
        user: { profile: { id: 'p1', teamId: 't1' }, permissions: ['employees.view'] },
      }),
    }))

    vi.doMock('@/server/db', () => ({
      prisma: {
        $transaction: vi.fn().mockResolvedValue([0, []]),
        workforceEmployee: {
          count: vi.fn(),
          findMany: vi.fn(),
        },
      },
    }))

    const { GET } = await import('@/app/api/employees/route')
    const res = await GET(makeReq('http://localhost/api/employees?take=50&skip=0'))
    expect(res.status).toBe(200)
    const json = await res.json()
    expect(json.total).toBe(0)
    expect(json.hasMore).toBe(false)
    expect(Array.isArray(json.data)).toBe(true)
  })

  it('returns hasMore=false on the last page', async () => {
    vi.resetModules()

    vi.doMock('@/server/auth/require-permission', () => ({
      requirePermission: vi.fn().mockResolvedValue({
        ok: true,
        status: 200,
        message: 'ok',
        user: { profile: { id: 'p1', teamId: 't1' }, permissions: ['employees.view'] },
      }),
    }))

    const lastPageRows = new Array(5).fill(null).map((_, i) => ({ id: `e${i}` }))

    vi.doMock('@/server/db', () => ({
      prisma: {
        $transaction: vi.fn().mockResolvedValue([55, lastPageRows]),
        workforceEmployee: {
          count: vi.fn(),
          findMany: vi.fn(),
        },
      },
    }))

    const { GET } = await import('@/app/api/employees/route')
    const res = await GET(makeReq('http://localhost/api/employees?take=50&skip=50'))
    const json = await res.json()
    expect(json.total).toBe(55)
    expect(json.hasMore).toBe(false)
  })
})

