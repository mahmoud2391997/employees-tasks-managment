import { LoginForm } from './login-form'

export default function LoginPage() {
  const companyName = process.env.COMPANY_NAME?.trim() || 'الشركة'
  return <LoginForm companyName={companyName} />
}
