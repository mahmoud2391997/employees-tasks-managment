import { cache } from 'react'
import { cookies } from 'next/headers'

import { resolveWorkforceDatabaseUrl } from '@workforce/database/env'

import { type Permission } from '@/lib/permissions'
import { loadAccountAccess } from '@/server/auth/access'
import { ensureCompany } from '@/server/company'
import { getOrCreateDemoSession, isDemoModeEnabled } from '@/server/auth/demo'
import { verifyAccessToken } from '@/server/auth/jwt'

const COOKIE_NAME = 'wf_auth'

export type ServerSession = {
  userId: string
  email: string
  profile: {
    id: string
    email: string
    firstName: string | null
    lastName: string | null
    role: string
    teamId: string | null
  } | null
  permissions: Permission[]
  demo?: boolean
}

export const getServerSession = cache(async (): Promise<ServerSession | null> => {
  if (!resolveWorkforceDatabaseUrl()) return null
  const cookieStore = await cookies()
  const token = cookieStore.get(COOKIE_NAME)?.value
  if (!token) return null
  const payload = await verifyAccessToken(token)
  if (!payload) return null
  if (payload.mode === 'demo') {
    if (!isDemoModeEnabled()) return null
    return { ...await getOrCreateDemoSession(), demo: true }
  }
  try {
    await ensureCompany()
  } catch (error) {
    console.error('auth/server-session: session unavailable', error)
    return null
  }

  try {
    const access = await loadAccountAccess(payload.sub)
    if (!access?.active) return null
    return {
      userId: access.userId,
      email: access.email,
      profile: access.profile,
      permissions: access.permissions,
    }
  } catch (e) {
    console.error('auth/server-session: failed to load session', e)
    return null
  }
})

