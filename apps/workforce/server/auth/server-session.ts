import { cache } from 'react'
import { cookies } from 'next/headers'

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
}

export const getServerSession = cache(async (): Promise<ServerSession | null> => {
  if (isDemoModeEnabled()) return await getOrCreateDemoSession()
  await ensureCompany()

  const cookieStore = await cookies()
  const token = cookieStore.get(COOKIE_NAME)?.value
  if (!token) return null
  const payload = await verifyAccessToken(token)
  if (!payload) return null

  const access = await loadAccountAccess(payload.sub)
  if (!access?.active) return null
  return {
    userId: access.userId,
    email: access.email,
    profile: access.profile,
    permissions: access.permissions,
  }
})

