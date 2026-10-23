import { NextResponse, type NextRequest } from 'next/server'
import bcrypt from 'bcryptjs'
import { z } from 'zod'
import { reserveLoginAttempt } from '@/server/auth/login-rate-limit'

export const runtime = 'nodejs'

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
    // Do not fall back to per-process counters or issue sessions when the shared store fails.
    let attempt
    try {
      attempt = await reserveLoginAttempt(email)
    } catch {
      return NextResponse.json(
        { success: false, message: 'خدمة الدخول غير متاحة مؤقتاً، حاول لاحقاً' },
        { status: 503, headers: { 'Retry-After': '60' } },
      )
    }
    if (!attempt.allowed) {
      return NextResponse.json(
        { success: false, message: 'محاولات كثيرة، حاول لاحقاً' },
        { status: 429, headers: { 'Retry-After': String(attempt.retryAfterSeconds) } },
      )
    }

    await ensureCompany()
    const user = await prisma.workforceUser.findUnique({ where: { email } })
    if (!user) {
      return NextResponse.json({ success: false, message: 'بيانات الدخول غير صحيحة' }, { status: 401 })
    }

    const ok = await bcrypt.compare(parsed.data.password, user.passwordHash)
    if (!ok) {
      return NextResponse.json({ success: false, message: 'بيانات الدخول غير صحيحة' }, { status: 401 })
    }

    const { loadAccountAccess } = await import('@/server/auth/access')
    const access = await loadAccountAccess(user.id)
    if (!access?.active) {
      return NextResponse.json({ success: false, message: 'هذا الحساب غير مفعل في الشركة' }, { status: 403 })
    }

    const token = await issueAccessToken({ sub: user.id, email: user.email, version: user.authVersion ?? 0 })
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

