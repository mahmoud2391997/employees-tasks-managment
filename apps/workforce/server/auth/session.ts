import type { NextRequest } from 'next/server'

import { resolveWorkforceDatabaseUrl } from '@workforce/database/env'

import { type Permission } from '@/lib/permissions'
import { loadAccountAccess } from '@/server/auth/access'
import { getOrCreateDemoSession, isDemoModeEnabled } from '@/server/auth/demo'
import { getAccessTokenFromRequest, verifyAccessToken } from '@/server/auth/jwt'

export type SessionUser = {
  id: string
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
}

export async function getSessionUser(req: NextRequest): Promise<SessionUser | null> {
  if (isDemoModeEnabled()) {
    const demo = await getOrCreateDemoSession()
    return { id: demo.userId, email: demo.email, profile: demo.profile, permissions: demo.permissions }
  }
  if (!resolveWorkforceDatabaseUrl()) return null

  const token = getAccessTokenFromRequest(req)
  if (!token) return null
  const payload = await verifyAccessToken(token)
  if (!payload?.sub) return null

  try {
    const access = await loadAccountAccess(payload.sub)
    if (!access?.active) return null
    return {
      id: access.userId,
      email: access.email,
      profile: access.profile,
      permissions: access.permissions,
    }
  } catch (e) {
    console.error('auth/session: failed to load session user', e)
    return null
  }
}

