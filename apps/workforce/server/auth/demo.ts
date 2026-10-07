import { ALL_PERMISSIONS, type Permission } from '@/lib/permissions'
import { getVirtualCompany } from '@/server/virtual-data'
import { FALLBACK_ADMIN_ID } from '@/lib/sample-identity'
export { isDemoModeEnabled } from '@/lib/demo-config'

export type DemoSession = {
  userId: string
  email: string
  profile: { id: string; email: string; firstName: string | null; lastName: string | null; role: string; teamId: string | null }
  permissions: Permission[]
}

/** Public, interactive samples. No database connection or company credentials are used. */
export async function getOrCreateDemoSession(): Promise<DemoSession> {
  const { admin } = getVirtualCompany()
  return {
    userId: FALLBACK_ADMIN_ID,
    email: admin.email,
    profile: admin,
    permissions: [...ALL_PERMISSIONS],
  }
}
