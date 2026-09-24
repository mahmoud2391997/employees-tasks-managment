import { redirect } from 'next/navigation'

import { getServerSession } from '@/server/auth/server-session'

import { CreateTeamForm } from '@/components/dashboard/create-team-form'

export default async function CreateTeamPage() {
  const session = await getServerSession()
  if (!session) redirect('/auth/login')
  if (session.profile?.teamId) redirect('/dashboard')

  return (
    <main className="space-y-4">
      <div className="rounded-lg border border-[#d0d7de] bg-white p-5 shadow-sm">
        <h1 className="text-xl font-semibold">إنشاء فريق</h1>
        <p className="mt-2 text-sm text-[#656d76]">أنشئ فريقك للبدء في إدارة الموظفين والمهام.</p>
      </div>
      <CreateTeamForm />
    </main>
  )
}

