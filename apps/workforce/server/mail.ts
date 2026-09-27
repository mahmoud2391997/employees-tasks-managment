import nodemailer from 'nodemailer'

export class MailNotConfiguredError extends Error {
  constructor(message = 'Email is not configured') {
    super(message)
    this.name = 'MailNotConfiguredError'
  }
}

export class MailDeliveryError extends Error {
  constructor(message = 'Email delivery failed') {
    super(message)
    this.name = 'MailDeliveryError'
  }
}

type SmtpConfig = {
  host: string
  port: number
  secure: boolean
  user: string
  pass: string
  from: string
}

export type OutboundMail = {
  to: string
  subject: string
  text: string
  html: string
}

type MailTransport = {
  sendMail(message: OutboundMail & { from: string }): Promise<unknown>
}

let transportOverride: MailTransport | null = null

/** Test hook. Production code leaves this unset and uses SMTP. */
export function setMailTransportForTests(transport: MailTransport | null) {
  transportOverride = transport
}

function isProduction() {
  return process.env.NODE_ENV === 'production'
}

function emailAddress(value: string) {
  const match = value.match(/<([^>]+)>/)
  return (match?.[1] ?? value).trim()
}

function isEmailAddress(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

export function readSmtpConfig(): SmtpConfig | null {
  const host = process.env.SMTP_HOST?.trim() ?? ''
  const from = process.env.SMTP_FROM?.trim() ?? ''
  if (!host || !from || !isEmailAddress(emailAddress(from))) return null

  const portRaw = process.env.SMTP_PORT?.trim()
  const port = portRaw ? Number(portRaw) : 587
  if (!Number.isInteger(port) || port < 1 || port > 65535) return null

  const user = process.env.SMTP_USER?.trim() ?? ''
  const pass = process.env.SMTP_PASS ?? ''
  if (Boolean(user) !== Boolean(pass)) return null

  const secureFlag = process.env.SMTP_SECURE?.trim().toLowerCase()
  const secure = secureFlag === 'true' || secureFlag === '1' || (secureFlag !== 'false' && secureFlag !== '0' && port === 465)

  return { host, port, secure, user, pass, from }
}

export function configuredSiteUrl(): string | null {
  const raw = process.env.SITE_URL?.trim()
  if (!raw) return null
  let url: URL
  try {
    url = new URL(raw)
  } catch {
    return null
  }
  if (url.protocol !== 'https:' && url.protocol !== 'http:') return null
  if (isProduction() && url.protocol !== 'https:') return null
  return url.toString().replace(/\/+$/, '')
}

export function requireSiteUrl(fallbackOrigin?: string) {
  const configured = configuredSiteUrl()
  if (configured) return configured
  if (isProduction() || !fallbackOrigin) {
    throw new MailNotConfiguredError('SITE_URL is required')
  }
  let url: URL
  try {
    url = new URL(fallbackOrigin)
  } catch {
    throw new MailNotConfiguredError('SITE_URL is required')
  }
  if (url.protocol !== 'https:' && url.protocol !== 'http:') {
    throw new MailNotConfiguredError('SITE_URL is required')
  }
  return url.origin
}

export function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function safeHttpUrl(value: string) {
  const url = new URL(value)
  if (url.protocol !== 'https:' && url.protocol !== 'http:') {
    throw new MailDeliveryError('Refusing to send a non-http link')
  }
  return url.toString()
}

export function buildInvitationEmail(input: {
  companyName: string
  role: string
  inviteUrl: string
  expiresAt: Date
}) {
  const inviteUrl = safeHttpUrl(input.inviteUrl)
  const company = input.companyName.trim() || 'الشركة'
  const role = input.role.trim() || 'EMPLOYEE'
  const expires = input.expiresAt.toISOString().slice(0, 10)
  const subject = `دعوة للانضمام إلى ${company}`
  const text = [
    `دعوة للانضمام إلى ${company}`,
    '',
    `تمت دعوتك للانضمام بدور ${role}.`,
    `الرابط صالح حتى ${expires}.`,
    '',
    inviteUrl,
  ].join('\n')
  const html = `
    <div dir="rtl" style="font-family:Tahoma,Arial,sans-serif;color:#0f172a;line-height:1.6">
      <h1 style="font-size:18px">دعوة للانضمام إلى ${escapeHtml(company)}</h1>
      <p>تمت دعوتك للانضمام بدور <strong>${escapeHtml(role)}</strong>.</p>
      <p>الرابط صالح حتى <span dir="ltr">${escapeHtml(expires)}</span>.</p>
      <p><a href="${escapeHtml(inviteUrl)}">قبول الدعوة</a></p>
    </div>
  `.trim()
  return { subject, text, html }
}

export function buildNotificationEmail(input: {
  companyName: string
  title: string
  message: string
  actionUrl?: string | null
}) {
  const company = input.companyName.trim() || 'الشركة'
  const title = input.title.trim() || 'إشعار'
  const message = input.message.trim()
  const actionUrl = input.actionUrl ? safeHttpUrl(input.actionUrl) : null
  const subject = `${company}: ${title}`
  const lines = [`لديك إشعار جديد في ${company}`, '', title, message]
  if (actionUrl) lines.push('', actionUrl)
  const text = lines.join('\n')
  const html = `
    <div dir="rtl" style="font-family:Tahoma,Arial,sans-serif;color:#0f172a;line-height:1.6">
      <p>لديك إشعار جديد في <strong>${escapeHtml(company)}</strong>.</p>
      <h1 style="font-size:18px">${escapeHtml(title)}</h1>
      <p>${escapeHtml(message)}</p>
      ${actionUrl ? `<p><a href="${escapeHtml(actionUrl)}">فتح الإشعارات</a></p>` : ''}
    </div>
  `.trim()
  return { subject, text, html }
}

function createSmtpTransport(config: SmtpConfig): MailTransport {
  const transport = nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: config.secure,
    auth: config.user ? { user: config.user, pass: config.pass } : undefined,
    requireTLS: isProduction() && !config.secure,
    connectionTimeout: 10_000,
    greetingTimeout: 10_000,
    socketTimeout: 15_000,
  })
  return transport
}

export async function sendMail(message: OutboundMail) {
  if (!isEmailAddress(message.to)) {
    throw new MailDeliveryError('Recipient address is invalid')
  }
  const config = readSmtpConfig()
  if (!config) {
    if (isProduction()) throw new MailNotConfiguredError('SMTP is not configured')
    console.warn('mail: SMTP is not configured; email was not sent', { to: message.to, subject: message.subject })
    return { sent: false as const }
  }

  try {
    const transport = transportOverride ?? createSmtpTransport(config)
    await transport.sendMail({ from: config.from, ...message })
    return { sent: true as const }
  } catch (error) {
    const reason = error instanceof Error ? error.message : 'unknown'
    console.error('mail: delivery failed', { to: message.to, subject: message.subject, reason })
    if (isProduction()) throw new MailDeliveryError('SMTP delivery failed')
    return { sent: false as const }
  }
}

export async function sendInvitationEmail(input: {
  to: string
  companyName: string
  role: string
  inviteUrl: string
  expiresAt: Date
}) {
  const body = buildInvitationEmail(input)
  return sendMail({ to: input.to, ...body })
}

export async function sendNotificationEmail(input: {
  to: string
  companyName: string
  title: string
  message: string
  actionUrl?: string | null
}) {
  const body = buildNotificationEmail(input)
  return sendMail({ to: input.to, ...body })
}
