import { DEMO_PREVIEW_TOKEN } from '@/lib/demo-config'
import { NextResponse } from 'next/server'
import { isDemoModeEnabled } from '@/lib/demo-config'
import { setAuthCookie } from '@/server/auth/jwt'
export const runtime = 'nodejs'
export async function POST() {
  if (!isDemoModeEnabled()) {
    return NextResponse.json({ success: false, message: 'Demo is unavailable' }, { status: 403 })
  }
  try {
    const response = NextResponse.json({ success: true })
    response.cookies.set('wf_demo', crypto.randomUUID(), { httpOnly: true, secure: process.env.NODE_ENV === 'production', sameSite: 'lax', path: '/', maxAge: 86400 })
    setAuthCookie(response, DEMO_PREVIEW_TOKEN)
    return response
  } catch (error) {
    console.error('auth/demo: unable to start demo', error)
    return NextResponse.json({ success: false, message: 'تعذر بدء العرض التجريبي' }, { status: 503 })
  }
}
