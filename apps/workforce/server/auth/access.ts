import { resolveWorkforceDatabaseUrl } from '@workforce/database/env'

import { prisma } from '@/server/db'
import { type Permission } from '@/lib/permissions'
import { permissionsFor } from '@/server/auth/permissions-for'

type ProfileRecord = {
  id: string
  email: string
  firstName: string | null
  lastName: string | null
  role: string
  teamId: string | null
}

export type AccountAccess = {
  userId: string
  email: string
  active: boolean
  role: string
  teamId: string | null
  permissions: Permission[]
  profile: {
    id: string
    email: string
    firstName: string | null
    lastName: string | null
    role: string
    teamId: string | null
  } | null
}

export async function loadAccountAccess(userId: string): Promise<AccountAccess | null> {
  if (!resolveWorkforceDatabaseUrl()) return null
  try {
    const user = await prisma.workforceUser.findUnique({
      where: { id: userId },
      select: {
        id: true,
        email: true,
        profile: { select: { id: true, email: true, firstName: true, lastName: true, role: true, teamId: true } },
      },
    })
    if (!user) return null

    const profile = user.profile
    const membership = profile?.teamId
      ? await prisma.workforceTeamMember.findUnique({
          where: { userId_teamId: { userId: user.id, teamId: profile.teamId } },
          select: { role: true, isActive: true },
        })
      : null
    const active = Boolean(membership?.isActive && profile?.teamId)
    const role = active ? membership!.role : profile?.role ?? 'EMPLOYEE'
    const teamId = active ? profile!.teamId : null
    const permissions = active ? await permissionsFor(role, teamId) : []

    return {
      userId: user.id,
      email: user.email,
      active,
      role,
      teamId,
      permissions,
      profile: profile ? sessionProfile(profile, role, teamId) : null,
    }
  } catch (e) {
    console.error('auth/access: failed to load account access', e)
    return null
  }
}

function sessionProfile(profile: ProfileRecord, role: string, teamId: string | null) {
  return {
    id: profile.id,
    email: profile.email,
    firstName: profile.firstName,
    lastName: profile.lastName,
    role,
    teamId,
  }
}

/** A member can only receive a role whose permissions they could already grant. */
export async function canGrantRole(actorPermissions: readonly Permission[], role: string, teamId: string) {
  const target = await permissionsFor(role, teamId)
  return target.every((permission) => actorPermissions.includes(permission))
}
