import { redirect } from 'next/navigation'

import { getServerSession } from '@/server/auth/server-session'
import { prisma } from '@/server/db'

export default async function SettingsPage() {
  const session = await getServerSession()
  if (!session) redirect('/auth/login')
  if (!session.permissions.includes('settings.manage')) {
    return (
      <main className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h1 className="text-xl font-semibold">الإعدادات</h1>
        <p className="mt-2 text-sm text-slate-500">ليس لديك صلاحية.</p>
      </main>
    )
  }

  const teamId = session.profile?.teamId ?? null
  const team = teamId ? await prisma.workforceTeam.findUnique({ where: { id: teamId }, select: { id: true, name: true, createdAt: true } }) : null

  return (
    <main className="space-y-4">
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <h1 className="text-xl font-semibold">الإعدادات</h1>
        <p className="mt-2 text-sm text-slate-500">إعدادات الشركة.</p>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="text-sm font-semibold">الشركة</div>
        <div className="mt-2 grid gap-2 text-sm">
          <div>
            <span className="text-slate-500">الاسم:</span> {team?.name ?? '—'}
          </div>
          <div className="ltr font-mono text-xs text-slate-500">id: {team?.id ?? '—'}</div>
        </div>
      </div>
    </main>
  )
}

