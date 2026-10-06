import { getTranslations } from '@/lib/i18n/server'

import { redirect } from 'next/navigation'

import { getServerSession } from '@/server/auth/server-session'

export default async function ProfilePage() {
  const tr = await getTranslations()

  const session = await getServerSession()
  if (!session) redirect('/auth/login')

  return (
    <main className="space-y-4">
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <h1 className="text-xl font-semibold">{tr("الملف الشخصي")}</h1>
        <p className="mt-2 text-sm text-slate-500">{tr("بيانات حسابك.")}</p>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="grid gap-3 text-sm">
          <Row label={tr("البريد الإلكتروني")} value={session.email} valueClassName="ltr" />
          <Row label={tr("الاسم")} value={`${session.profile?.firstName ?? ''} ${session.profile?.lastName ?? ''}`.trim() || '—'} />
          <Row label={tr("الدور")} value={tr(session.profile?.role ?? '—')} valueClassName="ltr" />
          <Row label={tr("الفريق")} value={session.profile?.teamId ?? '—'} valueClassName="ltr" />
        </div>
      </div>
    </main>
  )
}

function Row({ label, value, valueClassName }: { label: string; value: string; valueClassName?: string }) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3 last:border-b-0 last:pb-0">
      <div className="font-semibold">{label}</div>
      <div className={`font-mono text-xs text-slate-500 ${valueClassName ?? ''}`}>{value}</div>
    </div>
  )
}

