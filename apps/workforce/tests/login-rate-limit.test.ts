import { describe, expect, it, vi } from 'vitest'

function makeReq(body: any, ip = '203.0.113.10') {
  return {
    headers: new Headers({ 'x-forwarded-for': ip }),
    json: async () => body,
  } as any
}

describe('POST /api/auth/login rate limiting', () => {
  it('does not authenticate configured admin credentials during a database outage', async () => {
    vi.resetModules()
    vi.doMock('@/server/company', () => ({ ensureCompany: vi.fn().mockRejectedValue(new Error('Prisma unavailable')) }))
    const issueAccessToken = vi.fn()
    vi.doMock('@/server/auth/jwt', () => ({ issueAccessToken, setAuthCookie: vi.fn() }))
    const { POST } = await import('@/app/api/auth/login/route')
    const response = await POST(makeReq({ email: 'admin@company.local', password: 'change-me-please' }))
    expect(response.status).toBe(500)
    expect(issueAccessToken).not.toHaveBeenCalled()
    expect(response.headers.get('set-cookie')).toBeNull()
  })

  it('blocks after 5 failed attempts per email+ip', async () => {
    vi.resetModules()

    vi.doMock('@/server/db', () => ({
      prisma: {
        workforceUser: {
          findUnique: vi.fn().mockResolvedValue(null),
        },
      },
    }))
    vi.doMock('@/server/company', () => ({ ensureCompany: vi.fn().mockResolvedValue(undefined) }))
    vi.doMock('@/server/auth/jwt', () => ({
      issueAccessToken: vi.fn(),
      setAuthCookie: vi.fn(),
    }))

    const { POST } = await import('@/app/api/auth/login/route')

    for (let i = 0; i < 5; i++) {
      const res = await POST(makeReq({ email: 'a@b.com', password: 'bad' }))
      expect(res.status).toBe(401)
    }

    const limited = await POST(makeReq({ email: 'a@b.com', password: 'bad' }))
    expect(limited.status).toBe(429)
    expect(limited.headers.get('retry-after')).toBeTruthy()
  })
})

