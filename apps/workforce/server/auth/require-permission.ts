import type { NextRequest } from 'next/server'

import type { Permission } from '@/lib/permissions'
import { FALLBACK_ADMIN_ID } from '@/server/company'
import { getSessionUser } from '@/server/auth/session'
import { VIRTUAL_READONLY_MESSAGE } from '@/server/virtual-data'

export async function requirePermission(req: NextRequest, permission: Permission) {
  const user = await getSessionUser(req)
  if (!user) return { ok: false as const, status: 401, message: 'غير مصرح', user: null }
  if (!user.permissions.includes(permission)) {
    return { ok: false as const, status: 403, message: 'ليس لديك صلاحية', user }
  }
  if (user.id === FALLBACK_ADMIN_ID && req.method !== 'GET' && req.method !== 'HEAD') {
    return { ok: false as const, status: 403, message: VIRTUAL_READONLY_MESSAGE, user }
  }
  if (!user.profile?.teamId) {
    return { ok: false as const, status: 400, message: 'لا يوجد فريق مرتبط بالحساب', user }
  }
  return { ok: true as const, status: 200, message: 'ok', user }
}

