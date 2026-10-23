import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { ALL_PERMISSIONS, DEFAULT_ROLES } from '@/lib/permissions'

const { auth, create, pending, send } = vi.hoisted(() => ({ auth: vi.fn(), create: vi.fn(), pending: vi.fn(), send: vi.fn() }))
vi.mock('@/server/auth/require-permission', () => ({ requirePermission: auth }))
vi.mock('@/server/db', () => ({ prisma: {
  workforceTeam: { findUnique: async () => ({ details: { systemName: 'Fixture' } }) },
  workforceUser: { findUnique: async () => null },
  workforceInvitation: { findFirst: pending, create },
} }))
vi.mock('@/server/mail', async importOriginal => ({ ...await importOriginal<typeof import('@/server/mail')>(), sendInvitationEmail: send }))
import { POST } from '@/app/api/members/invite/route'

const req = (body: unknown) => ({ json: async () => body, nextUrl: new URL('http://localhost/api/members/invite') }) as any
afterEach(() => vi.unstubAllEnvs())
beforeEach(() => {
  vi.stubEnv('NODE_ENV', 'production')
  vi.stubEnv('SITE_URL', 'https://fixture.example.invalid')
  vi.stubEnv('SMTP_HOST', '')
  vi.stubEnv('SMTP_FROM', '')
  auth.mockResolvedValue({ ok: true, user: { id: 'admin-user', profile: { id: 'admin-profile', teamId: 'company-a' }, permissions: [...ALL_PERMISSIONS] } })
  pending.mockResolvedValue(null)
  create.mockImplementation(async ({ data }) => ({ id: 'invite', ...data }))
})

describe('explicit private invitation links', () => {
  it('creates a company-scoped expiring employee invitation without calling a mail transport', async () => {
    const response = await POST(req({ email: 'new@example.invalid', delivery: 'link' }))
    expect(response.status).toBe(200)
    const result = await response.json()
    expect(result.data.emailSent).toBe(false)
    expect(result.data.inviteUrl).toMatch(/^https:\/\/fixture\.example\.invalid\/invite\/[a-f0-9]{48}$/)
    expect(create).toHaveBeenCalledWith(expect.objectContaining({ data: expect.objectContaining({ teamId: 'company-a', invitedById: 'admin-profile', role: 'EMPLOYEE' }) }))
    expect(new Date(result.data.invitation.expiresAt).getTime()).toBeGreaterThan(Date.now())
    expect(send).not.toHaveBeenCalled()
  })
  it('cannot bypass invite permission or grant a role above the actor', async () => {
    auth.mockResolvedValueOnce({ ok: false, status: 403, message: 'Forbidden' })
    expect((await POST(req({ email: 'new@example.invalid', delivery: 'link' }))).status).toBe(403)
    auth.mockResolvedValueOnce({ ok: true, user: { id: 'limited', profile: { id: 'limited', teamId: 'company-a' }, permissions: [...DEFAULT_ROLES.EMPLOYEE.permissions, 'members.invite'] } })
    expect((await POST(req({ email: 'new@example.invalid', role: 'ADMIN', delivery: 'link' }))).status).toBe(403)
    expect(create).not.toHaveBeenCalled()
  })
  it('still requires an approved HTTPS site and rejects duplicate pending invitations', async () => {
    vi.stubEnv('SITE_URL', '')
    expect((await POST(req({ email: 'new@example.invalid', delivery: 'link' }))).status).toBe(503)
    expect(create).not.toHaveBeenCalled()
    vi.stubEnv('SITE_URL', 'https://fixture.example.invalid')
    pending.mockResolvedValue({ id: 'already-invited' })
    expect((await POST(req({ email: 'new@example.invalid', delivery: 'link' }))).status).toBe(409)
    expect(create).not.toHaveBeenCalled()
  })
})
