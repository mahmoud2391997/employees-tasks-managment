import { afterEach, describe, expect, it, vi } from 'vitest'
import { SignJWT } from 'jose'
import { NextRequest } from 'next/server'
import { issueAccessToken, verifyAccessToken } from '@/server/auth/jwt'
import { updateSession } from '@/lib/auth-middleware'

const secret = 'a-local-test-secret-with-at-least-32-characters'

afterEach(() => vi.unstubAllEnvs())

describe('authentication boundary', () => {
  it('refuses to issue tokens without a sufficiently long secret', async () => {
    vi.stubEnv('WORKFORCE_JWT_SECRET', '')
    await expect(issueAccessToken({ sub: 'u1', email: 'a@b.com' })).rejects.toThrow('WORKFORCE_JWT_SECRET')
    vi.stubEnv('WORKFORCE_JWT_SECRET', 'change-me')
    await expect(issueAccessToken({ sub: 'u1', email: 'a@b.com' })).rejects.toThrow('WORKFORCE_JWT_SECRET')
  })

  it('accepts issued tokens in middleware', async () => {
    vi.stubEnv('WORKFORCE_JWT_SECRET', secret)
    vi.stubEnv('WORKFORCE_DEMO_MODE', 'false')
    const token = await issueAccessToken({ sub: 'u1', email: 'a@b.com' })
    const response = await updateSession(new NextRequest('http://localhost/tasks', { headers: { cookie: `wf_auth=${token}` } }))
    expect(response.headers.get('location')).toBeNull()
    expect(await verifyAccessToken(token)).toEqual({ sub: 'u1', email: 'a@b.com' })
  })

  it('rejects expired tokens in middleware', async () => {
    vi.stubEnv('WORKFORCE_JWT_SECRET', secret)
    vi.stubEnv('WORKFORCE_DEMO_MODE', 'false')
    const token = await new SignJWT({ email: 'a@b.com' }).setProtectedHeader({ alg: 'HS256', typ: 'JWT' })
      .setSubject('u1').setExpirationTime(Math.floor(Date.now() / 1000) - 60)
      .sign(new TextEncoder().encode(secret))
    const response = await updateSession(new NextRequest('http://localhost/tasks', { headers: { cookie: `wf_auth=${token}` } }))
    expect(response.headers.get('location')).toBe('http://localhost/auth/login')
  })

  it('requires authentication even without a database configuration', async () => {
    vi.stubEnv('WORKFORCE_DEMO_MODE', 'false')
    vi.stubEnv('WORKFORCE_DATABASE_URL', '')
    const response = await updateSession(new NextRequest('http://localhost/dashboard'))
    expect(response.headers.get('location')).toBe('http://localhost/auth/login')
  })

  it('does not bypass middleware in production demo mode', async () => {
    vi.stubEnv('NODE_ENV', 'production')
    vi.stubEnv('WORKFORCE_DEMO_MODE', 'true')
    const response = await updateSession(new NextRequest('http://localhost/dashboard'))
    expect(response.headers.get('location')).toBe('http://localhost/auth/login')
  })
})
