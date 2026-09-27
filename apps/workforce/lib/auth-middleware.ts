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

function base64UrlToUint8Array(input: string) {
  const base64 = input.replace(/-/g, '+').replace(/_/g, '/')
  const padded = base64 + '==='.slice((base64.length + 3) % 4)
  const binary = atob(padded)
  const bytes = new Uint8Array(binary.length)
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i)
  return bytes
}

async function verifyTokenEdge(token: string) {
  const secret = process.env.WORKFORCE_JWT_SECRET?.trim()
  if (!secret) return null
  try {
    const parts = token.split('.')
    if (parts.length !== 3) return null

    const [headerB64, payloadB64, sigB64] = parts
    const header = JSON.parse(new TextDecoder().decode(base64UrlToUint8Array(headerB64)))
    if (header?.alg !== 'HS256' || header?.typ !== 'JWT') return null

    const key = await crypto.subtle.importKey(
      'raw',
      new TextEncoder().encode(secret),
      { name: 'HMAC', hash: 'SHA-256' },
      false,
      ['verify'],
    )

    const ok = await crypto.subtle.verify(
      'HMAC',
      key,
      base64UrlToUint8Array(sigB64),
      new TextEncoder().encode(`${headerB64}.${payloadB64}`),
    )
    if (!ok) return null

    const payload = JSON.parse(new TextDecoder().decode(base64UrlToUint8Array(payloadB64)))
    const sub = String(payload?.sub ?? '')
    if (!sub) return null
    return { sub, email: String(payload?.email ?? '') }
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
