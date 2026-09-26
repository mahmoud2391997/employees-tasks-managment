import { NextResponse, type NextRequest } from 'next/server'
import { jwtVerify } from 'jose/jwt/verify'

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

function resolveDbUrlFromEnv(): string | null {
  const candidates = [
    process.env.WORKFORCE_DATABASE_URL,
    process.env.WORKFORCE_POSTGRES_PRISMA_URL,
    process.env.WORKFORCE_POSTGRES_URL,
    process.env.WORKFORCE_POSTGRES_URL_NON_POOLING,
    process.env.POSTGRES_PRISMA_URL,
    process.env.POSTGRES_URL,
    process.env.POSTGRES_URL_NON_POOLING,
    process.env.DATABASE_URL,
  ]
  for (const candidate of candidates) {
    const value = candidate?.trim()
    if (value) return value
  }
  return null
}

async function verifyTokenEdge(token: string) {
  const secret = process.env.WORKFORCE_JWT_SECRET?.trim()
  if (!secret) return null
  try {
    const key = new TextEncoder().encode(secret)
    const verified = await jwtVerify(token, key, { algorithms: ['HS256'] })
    const sub = String(verified.payload.sub ?? '')
    if (!sub) return null
    return { sub, email: String(verified.payload.email ?? '') }
  } catch {
    return null
  }
}

export async function updateSession(request: NextRequest) {
  const token = request.cookies.get(COOKIE_NAME)?.value
  const pathname = request.nextUrl.pathname
  const demo = process.env.WORKFORCE_DEMO_MODE === 'true' || !resolveDbUrlFromEnv()
  const payload = !demo && token ? await verifyTokenEdge(token) : null

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
