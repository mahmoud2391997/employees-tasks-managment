import { afterEach, describe, expect, it, vi } from 'vitest'
vi.mock('@/server/db', () => ({ prisma: new Proxy({}, { get() { throw new Error('Demo attempted database access') } }) }))
import { POST } from '@/app/api/auth/demo/route'
import { getSessionUser } from '@/server/auth/session'
import { requirePermission } from '@/server/auth/require-permission'
import { updateSession } from '@/lib/auth-middleware'
import { DEMO_PREVIEW_TOKEN } from '@/lib/demo-config'
import { NextRequest } from 'next/server'
afterEach(() => vi.unstubAllEnvs())
function demoRequest(method = 'GET') {
  return new NextRequest('http://localhost/api/tasks', { method, headers: { cookie: `wf_auth=${DEMO_PREVIEW_TOKEN}` } })
}
describe('public interactive demo', () => {
  it('requires explicit entry even when demo is available', async () => {
    vi.stubEnv('WORKFORCE_DEMO_MODE', 'true')
    expect(await getSessionUser(new NextRequest('http://localhost/api/auth/me'))).toBeNull()
  })
  it('works in production without a database or JWT secret and exposes only samples', async () => {
    vi.stubEnv('NODE_ENV', 'production')
    vi.stubEnv('WORKFORCE_DEMO_MODE', undefined)
    vi.stubEnv('WORKFORCE_DATABASE_URL', '')
    vi.stubEnv('WORKFORCE_JWT_SECRET', '')
    vi.stubEnv('COMPANY_ADMIN_EMAIL', 'private@real-company.com')
    const response = await POST()
    expect(response.status).toBe(200)
    expect(response.cookies.get('wf_auth')?.value).toBe(DEMO_PREVIEW_TOKEN)
    expect(response.cookies.get('wf_auth')?.secure).toBe(true)
    const user = await getSessionUser(demoRequest())
    expect(user?.email).toBe('demo@workforce.invalid')
    expect(user?.permissions).toContain('tasks.edit')
    expect((await requirePermission(demoRequest(), 'tasks.view')).ok).toBe(true)
    expect((await requirePermission(demoRequest('POST'), 'roles.manage')).status).toBe(200)
    const request = new NextRequest('http://localhost/dashboard', { headers: { cookie: `wf_auth=${DEMO_PREVIEW_TOKEN}` } })
    expect((await updateSession(request)).headers.get('location')).toBeNull()
  })
  it('disables entry and existing sample sessions when false', async () => {
    vi.stubEnv('WORKFORCE_DEMO_MODE', 'false')
    expect((await POST()).status).toBe(403)
    expect(await getSessionUser(demoRequest())).toBeNull()
    const request = new NextRequest('http://localhost/dashboard', { headers: { cookie: `wf_auth=${DEMO_PREVIEW_TOKEN}` } })
    expect((await updateSession(request)).headers.get('location')).toBe('http://localhost/auth/login')
  })
  it('grants production actions to the isolated sample identity', async () => {
    vi.stubEnv('WORKFORCE_DEMO_MODE', 'true')
    expect((await requirePermission(demoRequest('POST'), 'tasks.create')).status).toBe(200)
    expect((await requirePermission(demoRequest('DELETE'), 'roles.manage')).status).toBe(200)
  })
})
