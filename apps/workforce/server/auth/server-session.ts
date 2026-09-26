import { cache } from 'react'
import { cookies } from 'next/headers'

import { prisma } from '@/server/db'
import { type Permission } from '@/lib/permissions'
import { ensureCompany } from '@/server/company'
import { permissionsFor } from '@/server/auth/permissions-for'
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

  const user = await prisma.workforceUser.findUnique({
    where: { id: payload.sub },
    select: {
      id: true,
      email: true,
      profile: { select: { id: true, email: true, firstName: true, lastName: true, role: true, teamId: true } },
    },
  })
  if (!user) return null
  const perms = await permissionsFor(user.profile?.role ?? 'EMPLOYEE', user.profile?.teamId ?? null)
  return {
    userId: user.id,
    email: user.email,
    profile: user.profile
      ? {
          id: user.profile.id,
          email: user.profile.email,
          firstName: user.profile.firstName,
          lastName: user.profile.lastName,
          role: user.profile.role,
          teamId: user.profile.teamId,
        }
      : null,
    permissions: perms,
  }
})

