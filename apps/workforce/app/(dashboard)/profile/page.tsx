import { redirect } from 'next/navigation'

import { getServerSession } from '@/server/auth/server-session'

export default async function ProfilePage() {
  const session = await getServerSession()
  if (!session) redirect('/auth/login')

  return (
    <main className="space-y-4">
      <div className="rounded-lg border border-[#d0d7de] bg-white p-5 shadow-sm">
        <h1 className="text-xl font-semibold">الملف الشخصي</h1>
        <p className="mt-2 text-sm text-[#656d76]">بيانات حسابك.</p>
      </div>

      <div className="rounded-lg border border-[#d0d7de] bg-white p-6 shadow-sm">
        <div className="grid gap-3 text-sm">
          <Row label="البريد الإلكتروني" value={session.email} valueClassName="ltr" />
          <Row label="الاسم" value={`${session.profile?.firstName ?? ''} ${session.profile?.lastName ?? ''}`.trim() || '—'} />
          <Row label="الدور" value={session.profile?.role ?? '—'} valueClassName="ltr" />
          <Row label="الفريق" value={session.profile?.teamId ?? '—'} valueClassName="ltr" />
        </div>
      </div>
    </main>
  )
}

function Row({ label, value, valueClassName }: { label: string; value: string; valueClassName?: string }) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#d0d7de] pb-3 last:border-b-0 last:pb-0">
      <div className="font-semibold">{label}</div>
      <div className={`font-mono text-xs text-[#656d76] ${valueClassName ?? ''}`}>{value}</div>
    </div>
  )
}

