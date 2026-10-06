import { BRAND } from '@/lib/brand'
import { getTranslations } from '@/lib/i18n/server'

import { isDemoModeEnabled } from '@/server/auth/demo'
import { LoginForm } from './login-form'

export default async function LoginPage() {
  const tr = await getTranslations()

  const companyName = tr(BRAND.name)
  return <LoginForm companyName={companyName} demoAvailable={isDemoModeEnabled()} />
}
