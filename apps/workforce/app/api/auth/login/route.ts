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
  const json = await req.json().catch(() => null)
  const parsed = bodySchema.safeParse(json)
  if (!parsed.success) {
    return NextResponse.json({ success: false, message: 'بيانات غير صحيحة' }, { status: 400 })
  }

  const { prisma } = await import('@/server/db')
  const { ensureCompany } = await import('@/server/company')
  const { issueAccessToken, setAuthCookie } = await import('@/server/auth/jwt')

  await ensureCompany()

  const email = parsed.data.email.toLowerCase().trim()
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

  const user = await prisma.workforceUser.findUnique({ where: { email } })
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
}

