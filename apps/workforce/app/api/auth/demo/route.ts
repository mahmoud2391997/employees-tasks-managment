import { NextResponse } from 'next/server'
import { getOrCreateDemoSession, isDemoModeEnabled } from '@/server/auth/demo'
import { issueAccessToken, setAuthCookie } from '@/server/auth/jwt'
export const runtime = 'nodejs'
export async function POST() {
  if (!isDemoModeEnabled()) {
    return NextResponse.json({ success: false, message: 'Demo is unavailable' }, { status: 403 })
  }
  try {
    const demo = await getOrCreateDemoSession()
    const token = await issueAccessToken({ sub: demo.userId, email: demo.email, mode: 'demo' })
    const response = NextResponse.json({ success: true })
    setAuthCookie(response, token)
    return response
  } catch (error) {
    console.error('auth/demo: unable to start demo', error)
    return NextResponse.json({ success: false, message: 'تعذر بدء العرض التجريبي' }, { status: 503 })
  }
}
