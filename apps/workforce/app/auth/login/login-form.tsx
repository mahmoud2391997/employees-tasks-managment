'use client'

import { LanguageSwitch, useTranslations } from '@/lib/i18n/provider'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { BRAND } from '@/lib/brand'
import { LockKeyhole } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardBody, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'

export function LoginForm({ companyName, demoAvailable }: { companyName: string; demoAvailable: boolean }) {
  const tr = useTranslations()

  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [pending, setPending] = useState(false)

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden p-6">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-50 via-slate-50 to-white" />
      <div className="pointer-events-none absolute -top-24 right-[-120px] h-80 w-80 rounded-full bg-brand-200/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 left-[-120px] h-80 w-80 rounded-full bg-accent-100/60 blur-3xl" />

      <div className="relative w-full max-w-md">
        <div className="mb-4 flex justify-end"><LanguageSwitch /></div>
        <Card>
          <CardHeader>
            <div className="mb-5 flex flex-col items-center gap-3 text-center">
              <Image src={BRAND.logo} alt={tr(BRAND.name)} width={112} height={112} preload className="h-28 w-28 object-contain" />
              <div><div className="text-xl font-bold text-brand-950">{companyName}</div><div className="mt-1 text-xs text-slate-500">{tr(BRAND.tagline)}</div></div>
            </div>
            <p className="mb-5 text-center text-sm leading-6 text-slate-600">{tr(BRAND.description)}</p>
            <CardTitle>{tr("تسجيل الدخول")}</CardTitle>
            <CardDescription>{tr('مساحة عمل {company}. سجل الدخول بالبريد وكلمة المرور.', { company: companyName })}</CardDescription>
          </CardHeader>
          <CardBody>
            <form
              className="space-y-3"
              onSubmit={async (e) => {
                e.preventDefault()
                setPending(true)
                setError('')
                try {
                const res = await fetch('/api/auth/login', {
                  method: 'POST',
                  headers: { 'content-type': 'application/json' },
                  body: JSON.stringify({ email, password }),
                })
                const json = (await res.json().catch(() => null)) as { success?: boolean; message?: string } | null
                setPending(false)
                if (!res.ok || !json?.success) {
                  setError(tr(json?.message || 'تعذر تسجيل الدخول'))
                  return
                }
                router.replace('/dashboard')
                router.refresh()
                } catch { setError(tr('تعذر الاتصال بالخادم، حاول مرة أخرى')) }
                finally { setPending(false) }
              }}
            >
              <label className="block text-sm font-medium text-slate-700">
                {tr("البريد الإلكتروني")}<Input className="ltr mt-2" value={email} onChange={(e) => setEmail(e.target.value)} type="email" autoComplete="username" required placeholder="name@company.com" />
              </label>
              <label className="block text-sm font-medium text-slate-700">
                {tr("كلمة المرور")}<Input className="mt-2" type="password" autoComplete="current-password" value={password} onChange={(e) => setPassword(e.target.value)} required />
              </label>

              {error ? <div className="rounded-xl border border-rose-200 bg-rose-50 px-3 py-2 text-sm text-rose-700">{error}</div> : null}

              <Button className="w-full" disabled={pending} type="submit">
                <LockKeyhole size={16} />
                {pending ? '...' : tr("دخول")}
              </Button>
            </form>

            {demoAvailable ? <div className="mt-5 space-y-2 border-t border-slate-100 pt-5">
              <Button className="w-full" type="button" disabled={pending} onClick={async () => {
                setPending(true)
                setError('')
                try {
                  const response = await fetch('/api/auth/demo', { method: 'POST' })
                  const result = await response.json()
                  if (!response.ok || !result.success) { setError(tr('تعذر بدء العرض التجريبي')); return }
                  router.replace('/dashboard')
                  router.refresh()
                } catch { setError(tr('تعذر الاتصال بالخادم، حاول مرة أخرى')) }
                finally { setPending(false) }
              }}>{tr('جرب النسخة التجريبية')}</Button>
              <p className="text-center text-xs text-slate-500">{tr('استكشف النظام ببيانات تجريبية دون تسجيل الدخول.')}</p>
            </div> : null}

            <p className="mt-4 text-sm text-slate-500">{tr("الحسابات يضيفها مسؤول الشركة عبر الدعوة.")}</p>
          </CardBody>
        </Card>
      </div>
    </main>
  )
}
