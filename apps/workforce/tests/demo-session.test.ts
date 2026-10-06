import { afterEach, describe, expect, it, vi } from 'vitest'
vi.mock('@/server/auth/demo', () => ({
  isDemoModeEnabled: () => process.env.WORKFORCE_DEMO_MODE === 'true' && process.env.NODE_ENV !== 'production',
  getOrCreateDemoSession: async () => ({ userId: 'demo-user', email: 'demo@example.com', profile: { id: 'p1', teamId: 't1', role: 'ADMIN' }, permissions: ['dashboard.view'] }),
}))
vi.mock('@/server/db', () => ({ prisma: {} }))
import { POST } from '@/app/api/auth/demo/route'
import { getSessionUser } from '@/server/auth/session'
import { verifyAccessToken } from '@/server/auth/jwt'
import { NextRequest } from 'next/server'
afterEach(() => vi.unstubAllEnvs())
describe('explicit demo session', () => {
  it('does not grant a session just because demo is available', async () => {
    vi.stubEnv('WORKFORCE_DEMO_MODE', 'true')
    expect(await getSessionUser(new NextRequest('http://localhost/api/auth/me'))).toBeNull()
  })
  it('starts a signed demo session on request', async () => {
    vi.stubEnv('WORKFORCE_DEMO_MODE', 'true')
    vi.stubEnv('WORKFORCE_JWT_SECRET', 'a-local-test-secret-with-at-least-32-characters')
    const response = await POST()
    expect(response.status).toBe(200)
    const token = response.cookies.get('wf_auth')!.value
    expect((await verifyAccessToken(token))?.mode).toBe('demo')
    const request = new NextRequest('http://localhost/api/auth/me', { headers: { cookie: `wf_auth=${token}` } })
    expect((await getSessionUser(request))?.id).toBe('demo-user')
    vi.stubEnv('WORKFORCE_DEMO_MODE', 'false')
    expect(await getSessionUser(request)).toBeNull()
  })
  it('refuses demo when disabled or in production', async () => {
    vi.stubEnv('WORKFORCE_DEMO_MODE', 'false')
    expect((await POST()).status).toBe(403)
    vi.stubEnv('WORKFORCE_DEMO_MODE', 'true')
    vi.stubEnv('NODE_ENV', 'production')
    expect((await POST()).status).toBe(403)
  })
})
