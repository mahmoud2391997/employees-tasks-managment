import { afterEach, describe, expect, it, vi } from 'vitest'

import {
  MailNotConfiguredError,
  buildInvitationEmail,
  buildNotificationEmail,
  readSmtpConfig,
  requireSiteUrl,
  sendInvitationEmail,
  setMailTransportForTests,
} from '@/server/mail'

afterEach(() => {
  setMailTransportForTests(null)
  vi.unstubAllEnvs()
})

describe('production mail', () => {
  it('builds an invitation email with an escaped link', () => {
    const message = buildInvitationEmail({
      companyName: 'Acme <Ops>',
      role: 'EMPLOYEE',
      inviteUrl: 'https://workforce.example.com/invite/abc',
      expiresAt: new Date('2026-10-04T00:00:00.000Z'),
    })
    expect(message.subject).toContain('Acme <Ops>')
    expect(message.text).toContain('https://workforce.example.com/invite/abc')
    expect(message.html).toContain('Acme &lt;Ops&gt;')
    expect(message.html).toContain('href="https://workforce.example.com/invite/abc"')
    expect(message.html).not.toContain('Acme <Ops>')
  })

  it('builds a notification email with an action link', () => {
    const message = buildNotificationEmail({
      companyName: 'الشركة',
      title: 'تم إسناد مهمة',
      message: 'تم إسناد المهمة "Design" إليك',
      actionUrl: 'https://workforce.example.com/notifications',
    })
    expect(message.subject).toBe('الشركة: تم إسناد مهمة')
    expect(message.text).toContain('https://workforce.example.com/notifications')
    expect(message.html).toContain('فتح الإشعارات')
  })

  it('rejects javascript links', () => {
    expect(() =>
      buildInvitationEmail({
        companyName: 'الشركة',
        role: 'EMPLOYEE',
        inviteUrl: 'javascript:alert(1)',
        expiresAt: new Date(),
      }),
    ).toThrow(/non-http/)
  })

  it('requires SMTP host and from together', () => {
    vi.stubEnv('SMTP_HOST', 'smtp.example.com')
    vi.stubEnv('SMTP_FROM', '')
    expect(readSmtpConfig()).toBeNull()

    vi.stubEnv('SMTP_FROM', 'Workforce <workforce@example.com>')
    vi.stubEnv('SMTP_PORT', '587')
    vi.stubEnv('SMTP_USER', '')
    vi.stubEnv('SMTP_PASS', '')
    expect(readSmtpConfig()).toMatchObject({
      host: 'smtp.example.com',
      port: 587,
      secure: false,
      from: 'Workforce <workforce@example.com>',
    })
  })

  it('requires https SITE_URL in production and sends through the configured transport', async () => {
    vi.stubEnv('NODE_ENV', 'production')
    vi.stubEnv('SITE_URL', 'http://workforce.example.com')
    expect(() => requireSiteUrl()).toThrow(MailNotConfiguredError)

    vi.stubEnv('SITE_URL', 'https://workforce.example.com')
    expect(requireSiteUrl()).toBe('https://workforce.example.com')

    vi.stubEnv('SMTP_HOST', '')
    vi.stubEnv('SMTP_FROM', '')
    await expect(
      sendInvitationEmail({
        to: 'new.hire@example.com',
        companyName: 'الشركة',
        role: 'EMPLOYEE',
        inviteUrl: 'https://workforce.example.com/invite/token',
        expiresAt: new Date('2026-10-04T00:00:00.000Z'),
      }),
    ).rejects.toBeInstanceOf(MailNotConfiguredError)

    vi.stubEnv('SMTP_HOST', 'smtp.example.com')
    vi.stubEnv('SMTP_FROM', 'workforce@example.com')
    vi.stubEnv('SMTP_PORT', '587')
    vi.stubEnv('SMTP_USER', 'workforce@example.com')
    vi.stubEnv('SMTP_PASS', 'secret')
    const sendMail = vi.fn().mockResolvedValue({})
    setMailTransportForTests({ sendMail })

    const result = await sendInvitationEmail({
      to: 'new.hire@example.com',
      companyName: 'الشركة',
      role: 'EMPLOYEE',
      inviteUrl: 'https://workforce.example.com/invite/token',
      expiresAt: new Date('2026-10-04T00:00:00.000Z'),
    })
    expect(result.sent).toBe(true)
    expect(sendMail).toHaveBeenCalledWith(
      expect.objectContaining({
        from: 'workforce@example.com',
        to: 'new.hire@example.com',
        subject: expect.stringContaining('الشركة'),
      }),
    )
  })
})
