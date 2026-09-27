import { afterEach, describe, expect, it, vi } from 'vitest'

function makeReq(body: unknown) {
  return {
    json: async () => body,
    nextUrl: new URL('http://localhost:3001/api/members/invite'),
  } as any
}

afterEach(() => {
  vi.unstubAllEnvs()
  vi.resetModules()
})

describe('POST /api/members/invite email delivery', () => {
  it('does not create an invitation in production when SMTP is missing', async () => {
    vi.resetModules()
    vi.stubEnv('NODE_ENV', 'production')
    vi.stubEnv('SITE_URL', 'https://workforce.example.com')
    vi.stubEnv('SMTP_HOST', '')
    vi.stubEnv('SMTP_FROM', '')

    const create = vi.fn()
    vi.doMock('@/server/auth/require-permission', () => ({
      requirePermission: vi.fn().mockResolvedValue({
        ok: true,
        status: 200,
        message: 'ok',
        user: { profile: { id: 'p-admin', teamId: 't1' }, permissions: ['members.invite'] },
      }),
    }))
    vi.doMock('@/server/db', () => ({
      prisma: {
        workforceUser: { findUnique: vi.fn().mockResolvedValue(null) },
        workforceInvitation: { findFirst: vi.fn().mockResolvedValue(null), create, delete: vi.fn() },
      },
    }))

    const { POST } = await import('@/app/api/members/invite/route')
    const res = await POST(makeReq({ email: 'new.hire@example.com', role: 'EMPLOYEE' }))
    expect(res.status).toBe(503)
    const json = await res.json()
    expect(json.success).toBe(false)
    expect(create).not.toHaveBeenCalled()
  })

  it('rolls back the invitation when production delivery fails', async () => {
    vi.resetModules()
    vi.stubEnv('NODE_ENV', 'production')

    const created = {
      id: 'inv1',
      token: 'a'.repeat(32),
      email: 'new.hire@example.com',
      invitedBy: { id: 'p-admin', email: 'admin@company.local', firstName: 'مدير', lastName: 'الشركة' },
    }
    const remove = vi.fn().mockResolvedValue(created)
    class MailDeliveryError extends Error {
      constructor() {
        super('delivery failed')
        this.name = 'MailDeliveryError'
      }
    }

    vi.doMock('@/server/mail', () => ({
      MailNotConfiguredError: class MailNotConfiguredError extends Error {},
      MailDeliveryError,
      readSmtpConfig: () => ({ host: 'smtp.example.com', from: 'workforce@example.com' }),
      requireSiteUrl: () => 'https://workforce.example.com',
      sendInvitationEmail: vi.fn().mockRejectedValue(new MailDeliveryError()),
    }))
    vi.doMock('@/server/auth/require-permission', () => ({
      requirePermission: vi.fn().mockResolvedValue({
        ok: true,
        status: 200,
        message: 'ok',
        user: { profile: { id: 'p-admin', teamId: 't1' }, permissions: ['members.invite'] },
      }),
    }))
    vi.doMock('@/server/db', () => ({
      prisma: {
        workforceUser: { findUnique: vi.fn().mockResolvedValue(null) },
        workforceInvitation: {
          findFirst: vi.fn().mockResolvedValue(null),
          create: vi.fn().mockResolvedValue(created),
          delete: remove,
        },
      },
    }))

    const { POST } = await import('@/app/api/members/invite/route')
    const res = await POST(makeReq({ email: 'new.hire@example.com' }))
    expect(res.status).toBe(503)
    expect(remove).toHaveBeenCalledWith({ where: { id: 'inv1' } })
  })

  it('returns emailSent when SMTP accepts the invitation', async () => {
    vi.resetModules()
    vi.stubEnv('NODE_ENV', 'production')

    const sendInvitationEmail = vi.fn().mockResolvedValue({ sent: true })
    vi.doMock('@/server/mail', () => ({
      MailNotConfiguredError: class MailNotConfiguredError extends Error {},
      MailDeliveryError: class MailDeliveryError extends Error {},
      readSmtpConfig: () => ({ host: 'smtp.example.com', from: 'workforce@example.com' }),
      requireSiteUrl: () => 'https://workforce.example.com',
      sendInvitationEmail,
    }))
    vi.doMock('@/server/auth/require-permission', () => ({
      requirePermission: vi.fn().mockResolvedValue({
        ok: true,
        status: 200,
        message: 'ok',
        user: { profile: { id: 'p-admin', teamId: 't1' }, permissions: ['members.invite'] },
      }),
    }))
    vi.doMock('@/server/db', () => ({
      prisma: {
        workforceUser: { findUnique: vi.fn().mockResolvedValue(null) },
        workforceInvitation: {
          findFirst: vi.fn().mockResolvedValue(null),
          create: vi.fn().mockResolvedValue({
            id: 'inv1',
            token: 'abc123tokenvalue',
            email: 'new.hire@example.com',
            invitedBy: { id: 'p-admin', email: 'admin@company.local', firstName: null, lastName: null },
          }),
          delete: vi.fn(),
        },
      },
    }))

    const { POST } = await import('@/app/api/members/invite/route')
    const res = await POST(makeReq({ email: 'new.hire@example.com', role: 'MANAGER' }))
    expect(res.status).toBe(200)
    const json = await res.json()
    expect(json.data.emailSent).toBe(true)
    expect(json.data.inviteUrl).toBe('https://workforce.example.com/invite/abc123tokenvalue')
    expect(sendInvitationEmail).toHaveBeenCalledWith(
      expect.objectContaining({ to: 'new.hire@example.com', role: 'MANAGER' }),
    )
  })
})
