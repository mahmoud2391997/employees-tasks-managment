import { prisma } from '@/server/db'
import { DEFAULT_ROLES, type Permission } from '@/lib/permissions'

export async function permissionsFor(role: string, teamId: string | null): Promise<Permission[]> {
  if (DEFAULT_ROLES[role]) return DEFAULT_ROLES[role].permissions
  if (!teamId) return []
  const custom = await prisma.workforceCustomRole.findUnique({
    where: { teamId_name: { teamId, name: role } },
    select: { permissions: true },
  })
  const raw = (custom?.permissions ?? []) as unknown
  if (!Array.isArray(raw)) return []
  return raw.filter((p): p is Permission => typeof p === 'string') as Permission[]
}

