import { verifyAccessToken } from '@/server/auth/jwt'
import { NextResponse, type NextRequest } from 'next/server'

const COOKIE_NAME = 'wf_auth'

const protectedRoutes = [
  '/dashboard',
  '/employees',
  '/departments',
  '/tasks',
  '/roles',
  '/settings',
  '/members',
  '/notifications',
  '/profile',
]

function isProtectedRoute(pathname: string) {
  return protectedRoutes.some((route) => pathname === route || pathname.startsWith(`${route}/`))
}

function isClosedOnboardingPage(pathname: string) {
  return (
    pathname.startsWith('/auth/sign-up') ||
    pathname.startsWith('/auth/create-team') ||
    pathname === '/create-team' ||
    pathname.startsWith('/create-team/')
  )
}

export async function updateSession(request: NextRequest) {
  const token = request.cookies.get(COOKIE_NAME)?.value
  const pathname = request.nextUrl.pathname
  const demo = process.env.WORKFORCE_DEMO_MODE === 'true' && process.env.NODE_ENV !== 'production'
  const payload = !demo && token ? await verifyAccessToken(token) : null

  if (isClosedOnboardingPage(pathname)) {
    const url = request.nextUrl.clone()
    url.pathname = demo || payload ? '/dashboard' : '/auth/login'
    url.search = ''
    return NextResponse.redirect(url)
  }

  if (demo) return NextResponse.next()

  const allowWithoutSession =
    pathname.startsWith('/auth/login') ||
    pathname.startsWith('/invite/') ||
    pathname.startsWith('/api/auth/login') ||
    pathname.startsWith('/api/invitations/accept') ||
    pathname.startsWith('/_next') ||
    pathname.startsWith('/favicon') ||
    pathname.startsWith('/icon') ||
    pathname.startsWith('/apple-icon')

  if (allowWithoutSession) return NextResponse.next()

  if (isProtectedRoute(pathname) && !payload) {
    const url = request.nextUrl.clone()
    url.pathname = '/auth/login'
    url.search = ''
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}
