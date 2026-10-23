import { beforeEach, describe, expect, it, vi } from 'vitest'

const { reserve, ensureCompany, findUser, issueToken } = vi.hoisted(() => ({
  reserve: vi.fn(), ensureCompany: vi.fn(), findUser: vi.fn(), issueToken: vi.fn(),
}))
vi.mock('@/server/auth/login-rate-limit', () => ({ reserveLoginAttempt: reserve }))
vi.mock('@/server/company', () => ({ ensureCompany }))
vi.mock('@/server/db', () => ({ prisma: { workforceUser: { findUnique: findUser } } }))
vi.mock('@/server/auth/jwt', () => ({ issueAccessToken: issueToken, setAuthCookie: vi.fn() }))

const request = (email = 'Person@Example.com') => ({
  headers: new Headers({ 'x-forwarded-for': '203.0.113.25' }),
  json: async () => ({ email, password: 'bad-password' }),
}) as any

beforeEach(() => {
  reserve.mockResolvedValue({ allowed: true, retryAfterSeconds: 900 })
  ensureCompany.mockResolvedValue(undefined)
  findUser.mockResolvedValue(null)
})

describe('shared login guard', () => {
  it('fails closed before provisioning, lookup or token issuance when the store is unavailable', async () => {
    reserve.mockRejectedValue(new Error('database unavailable'))
    const { POST } = await import('@/app/api/auth/login/route')
    const response = await POST(request())
    expect(response.status).toBe(503)
    expect(response.headers.get('retry-after')).toBe('60')
    expect(response.headers.get('set-cookie')).toBeNull()
    expect(ensureCompany).not.toHaveBeenCalled()
    expect(findUser).not.toHaveBeenCalled()
    expect(issueToken).not.toHaveBeenCalled()
  })
  it('returns a shared throttle decision without attempting authentication', async () => {
    reserve.mockResolvedValue({ allowed: false, retryAfterSeconds: 743 })
    const { POST } = await import('@/app/api/auth/login/route')
    const response = await POST(request())
    expect(response.status).toBe(429)
    expect(response.headers.get('retry-after')).toBe('743')
    expect(reserve).toHaveBeenCalledWith('person@example.com')
    expect(findUser).not.toHaveBeenCalled()
    expect(issueToken).not.toHaveBeenCalled()
  })
  it('reserves attempts for nonexistent accounts before checking their existence', async () => {
    const { POST } = await import('@/app/api/auth/login/route')
    expect((await POST(request())).status).toBe(401)
    expect(reserve.mock.invocationCallOrder[0]).toBeLessThan(findUser.mock.invocationCallOrder[0])
    expect(issueToken).not.toHaveBeenCalled()
  })
})
