'use client'

import { useTranslations } from '@/lib/i18n/provider'

import { useMemo, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'

export default function InviteAcceptPage() {
  const tr = useTranslations()

  const params = useParams<{ token: string }>()
  const router = useRouter()
  const token = useMemo(() => String(params?.token ?? ''), [params])

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [password, setPassword] = useState('')
  const [pending, setPending] = useState(false)
  const [error, setError] = useState('')

  return (
    <main className="mx-auto max-w-md rounded-lg border border-[#d0d7de] bg-white p-6 shadow-sm">
      <h1 className="text-xl font-semibold">{tr("قبول الدعوة")}</h1>
      <p className="mt-2 text-sm text-[#656d76]">{tr("أنشئ حسابك للانضمام إلى الشركة. الدعوة تصدر من المسؤول.")}</p>

      <form
        className="mt-4 space-y-3"
        onSubmit={async (e) => {
          e.preventDefault()
          setPending(true)
          setError('')
          const res = await fetch('/api/invitations/accept', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ token, firstName, lastName: lastName || undefined, password }),
          })
          const json = (await res.json().catch(() => null)) as { success?: boolean; message?: string } | null
          setPending(false)
          if (!res.ok || !json?.success) {
            setError(tr(json?.message || "تعذر قبول الدعوة"))
            return
          }
          router.replace('/dashboard')
        }}
      >
        <label className="block text-sm font-medium">
          {tr("الاسم الأول")}<input className="mt-2 h-10 w-full rounded-md border border-[#d0d7de] px-3 text-sm" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
        </label>
        <label className="block text-sm font-medium">
          {tr("الاسم الأخير (اختياري)")}<input className="mt-2 h-10 w-full rounded-md border border-[#d0d7de] px-3 text-sm" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </label>
        <label className="block text-sm font-medium">
          {tr("كلمة المرور")}<input className="mt-2 h-10 w-full rounded-md border border-[#d0d7de] px-3 text-sm" type="password" value={password} onChange={(e) => setPassword(e.target.value)} minLength={8} required />
        </label>

        {error ? <div className="rounded-md border border-[#ff818266] bg-[#ffebe9] px-3 py-2 text-sm text-[#cf222e]">{error}</div> : null}
        <button className="inline-flex h-10 w-full items-center justify-center rounded-md border border-[#1f2328] bg-[#1f2328] px-4 text-sm font-semibold text-white disabled:opacity-60" disabled={pending} type="submit">
          {pending ? '...' : tr("انضمام")}
        </button>
      </form>
    </main>
  )
}

