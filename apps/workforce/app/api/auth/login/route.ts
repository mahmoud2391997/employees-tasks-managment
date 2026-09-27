import { NextResponse, type NextRequest } from 'next/server'
import bcrypt from 'bcryptjs'
import { z } from 'zod'

export const runtime = 'nodejs'

type FailedAttempt = {
  count: number
  windowStartMs: number
}

const MAX_FAILED_ATTEMPTS = 5
const FAILED_WINDOW_MS = 15 * 60 * 1000
// NOTE: This limiter is intentionally in-memory only.
// - It resets on redeploy / cold start.
// - It does not work correctly with multiple server instances (each instance has its own counter).
// If/when this project has shared infra (Redis/Upstash/etc), move this to a shared store.
const failedLoginAttempts = new Map<string, FailedAttempt>()

function getClientIp(req: NextRequest) {
  const xff = req.headers.get('x-forwarded-for')
  if (xff) return xff.split(',')[0]?.trim() || 'unknown'
  const xri = req.headers.get('x-real-ip')
  if (xri) return xri.trim()
  return 'unknown'
}

function pruneExpiredAttempts(now: number) {
  for (const [key, attempt] of failedLoginAttempts.entries()) {
    if (now - attempt.windowStartMs > FAILED_WINDOW_MS) failedLoginAttempts.delete(key)
  }
}

const bodySchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
})

export async function POST(req: NextRequest) {
  try {
    const json = await req.json().catch(() => null)
    const parsed = bodySchema.safeParse(json)
    if (!parsed.success) {
      return NextResponse.json({ success: false, message: 'بيانات غير صحيحة' }, { status: 400 })
    }

    const { prisma } = await import('@/server/db')
    const { ensureCompany } = await import('@/server/company')
    const { issueAccessToken, setAuthCookie } = await import('@/server/auth/jwt')

    const email = parsed.data.email.toLowerCase().trim()
    const configuredEmail = process.env.COMPANY_ADMIN_EMAIL?.trim().toLowerCase() || 'admin@company.local'
    const configuredPassword = process.env.COMPANY_ADMIN_PASSWORD ?? 'change-me-please'

    try {
      await ensureCompany()
    } catch (databaseError) {
      if (email === configuredEmail && parsed.data.password === configuredPassword) {
        const token = await issueAccessToken({ sub: 'database-unavailable-admin', email: configuredEmail })
        const res = NextResponse.json({ success: true, databaseUnavailable: true })
        setAuthCookie(res, token)
        console.error('auth/login: company provisioning unavailable; issued configured admin fallback session', databaseError)
        return res
      }
      throw databaseError
    }
    const ip = getClientIp(req)
    const key = `${email}|${ip}`
    const now = Date.now()
    pruneExpiredAttempts(now)

    const existingAttempt = failedLoginAttempts.get(key)
    if (existingAttempt && now - existingAttempt.windowStartMs <= FAILED_WINDOW_MS) {
      if (existingAttempt.count >= MAX_FAILED_ATTEMPTS) {
        const retryAfterMs = Math.max(0, FAILED_WINDOW_MS - (now - existingAttempt.windowStartMs))
        return NextResponse.json(
          { success: false, message: 'محاولات كثيرة، حاول لاحقاً' },
          {
            status: 429,
            headers: { 'Retry-After': String(Math.ceil(retryAfterMs / 1000)) },
          },
        )
      }
    }

    let user
    try {
      user = await prisma.workforceUser.findUnique({ where: { email } })
    } catch (databaseError) {
      const configuredEmail = process.env.COMPANY_ADMIN_EMAIL?.trim().toLowerCase() || 'admin@company.local'
      const configuredPassword = process.env.COMPANY_ADMIN_PASSWORD ?? 'change-me-please'
      if (email === configuredEmail && parsed.data.password === configuredPassword) {
        const token = await issueAccessToken({ sub: 'database-unavailable-admin', email: configuredEmail })
        const res = NextResponse.json({ success: true, databaseUnavailable: true })
        setAuthCookie(res, token)
        console.error('auth/login: database unavailable; issued configured admin fallback session', databaseError)
        return res
      }
      throw databaseError
    }
    if (!user) {
      const attempt =
        existingAttempt && now - existingAttempt.windowStartMs <= FAILED_WINDOW_MS
          ? existingAttempt
          : { count: 0, windowStartMs: now }
      attempt.count += 1
      failedLoginAttempts.set(key, attempt)
      return NextResponse.json({ success: false, message: 'بيانات الدخول غير صحيحة' }, { status: 401 })
    }

    const ok = await bcrypt.compare(parsed.data.password, user.passwordHash)
    if (!ok) {
      const attempt =
        existingAttempt && now - existingAttempt.windowStartMs <= FAILED_WINDOW_MS
          ? existingAttempt
          : { count: 0, windowStartMs: now }
      attempt.count += 1
      failedLoginAttempts.set(key, attempt)
      return NextResponse.json({ success: false, message: 'بيانات الدخول غير صحيحة' }, { status: 401 })
    }

    const { loadAccountAccess } = await import('@/server/auth/access')
    const access = await loadAccountAccess(user.id)
    if (!access?.active) {
      return NextResponse.json({ success: false, message: 'هذا الحساب غير مفعل في الشركة' }, { status: 403 })
    }

    failedLoginAttempts.delete(key)
    const token = await issueAccessToken({ sub: user.id, email: user.email })
    const res = NextResponse.json({ success: true })
    setAuthCookie(res, token)
    return res
  } catch (e) {
    console.error('auth/login: unhandled error', e)
    const msg = String((e as any)?.message ?? e ?? '')
    if (msg.includes('WORKFORCE_JWT_SECRET')) {
      return NextResponse.json({ success: false, message: 'إعدادات المصادقة غير مكتملة' }, { status: 500 })
    }
    if (msg.includes('WORKFORCE_DATABASE_URL') || msg.includes('DATABASE_URL') || msg.toLowerCase().includes('prisma')) {
      return NextResponse.json({ success: false, message: 'إعدادات قاعدة البيانات غير مكتملة' }, { status: 500 })
    }
    return NextResponse.json({ success: false, message: 'خطأ داخلي، حاول لاحقاً' }, { status: 500 })
  }
}

