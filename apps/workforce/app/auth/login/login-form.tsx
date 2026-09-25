'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Building2, LockKeyhole } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardBody, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'

export function LoginForm({ companyName }: { companyName: string }) {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [pending, setPending] = useState(false)

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden p-6">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-50 via-slate-50 to-white" />
      <div className="pointer-events-none absolute -top-24 right-[-120px] h-80 w-80 rounded-full bg-blue-200/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 left-[-120px] h-80 w-80 rounded-full bg-emerald-200/20 blur-3xl" />

      <div className="relative w-full max-w-md">
        <Card>
          <CardHeader>
            <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white">
              <Building2 size={22} />
            </div>
            <CardTitle>تسجيل الدخول</CardTitle>
            <CardDescription>نظام {companyName} للموظفين. ادخل بالبريد وكلمة المرور.</CardDescription>
          </CardHeader>
          <CardBody>
            <form
              className="space-y-3"
              onSubmit={async (e) => {
                e.preventDefault()
                setPending(true)
                setError('')
                const res = await fetch('/api/auth/login', {
                  method: 'POST',
                  headers: { 'content-type': 'application/json' },
                  body: JSON.stringify({ email, password }),
                })
                const json = (await res.json().catch(() => null)) as { success?: boolean; message?: string } | null
                setPending(false)
                if (!res.ok || !json?.success) {
                  setError(json?.message || 'تعذر تسجيل الدخول')
                  return
                }
                router.replace('/dashboard')
              }}
            >
              <label className="block text-sm font-medium text-slate-700">
                البريد الإلكتروني
                <Input className="ltr mt-2" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="name@company.com" />
              </label>
              <label className="block text-sm font-medium text-slate-700">
                كلمة المرور
                <Input className="mt-2" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
              </label>

              {error ? <div className="rounded-xl border border-rose-200 bg-rose-50 px-3 py-2 text-sm text-rose-700">{error}</div> : null}

              <Button className="w-full" disabled={pending} type="submit">
                <LockKeyhole size={16} />
                {pending ? '...' : 'دخول'}
              </Button>
            </form>

            <p className="mt-4 text-sm text-slate-500">الحسابات يضيفها مسؤول الشركة عبر الدعوة.</p>
          </CardBody>
        </Card>
      </div>
    </main>
  )
}
