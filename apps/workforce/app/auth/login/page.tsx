import {getPublicBranding} from '@/server/branding'
import { BRAND } from '@/lib/brand'
import { getTranslations } from '@/lib/i18n/server'

import { isDemoModeEnabled } from '@/server/auth/demo'
import { LoginForm } from './login-form'

export default async function LoginPage() {
  const tr = await getTranslations()

  const branding=await getPublicBranding()
  const companyName = branding.systemName===BRAND.name?tr(BRAND.name):branding.systemName
  return <LoginForm companyName={companyName} demoAvailable={isDemoModeEnabled()} />
}
