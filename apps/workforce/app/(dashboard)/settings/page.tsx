import Image from 'next/image'
import { BRAND } from '@/lib/brand'
import { getTranslations } from '@/lib/i18n/server'

import { redirect } from 'next/navigation'

import { getServerSession } from '@/server/auth/server-session'
import { FALLBACK_ADMIN_ID } from '@/server/company'
import { VirtualLoginNotice } from '@/components/dashboard/virtual-login-notice'
import { servesVirtualDemoData, VIRTUAL_SAMPLE_NOTE } from '@/server/virtual-data'

export default async function SettingsPage() {
  const tr = await getTranslations()

  const session = await getServerSession()
  if (!session) redirect('/auth/login')
  if (!session.permissions.includes('settings.manage')) {
    return (
      <main className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-bold tracking-tight">{tr("الإعدادات")}</h1>
        <p className="mt-2 text-sm text-slate-500">{tr("ليس لديك صلاحية.")}</p>
      </main>
    )
  }

  if (session.userId === FALLBACK_ADMIN_ID && !servesVirtualDemoData(session.userId)) {
    return <VirtualLoginNotice title={tr("الإعدادات")} />
  }

  const sampleData = servesVirtualDemoData(session.userId)

  return (
    <main className="space-y-4">
      <div className="rounded-2xl border border-slate-200/70 bg-white p-5 shadow-sm">
        <h1 className="text-2xl font-bold tracking-tight">{tr("الإعدادات")}</h1>
        <p className="mt-2 text-sm text-slate-500">{tr("إعدادات الشركة.")}</p>
        {sampleData ? <p className="mt-1 text-sm text-amber-700">{tr(VIRTUAL_SAMPLE_NOTE)}</p> : null}
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="mb-6 flex items-center gap-4">
          <Image src={BRAND.logo} alt={tr(BRAND.name)} width={80} height={80} className="h-20 w-20 object-contain" />
          <div><h2 className="text-xl font-bold text-brand-950">{tr(BRAND.name)}</h2><p className="mt-1 text-sm text-slate-500">{tr("بيانات الشركة")}</p></div>
        </div>
        <dl className="grid gap-x-8 gap-y-5 text-sm sm:grid-cols-2">
          {[
            [tr("الاسم القانوني"), tr(BRAND.legalName)],
            [tr("السجل التجاري"), BRAND.registrationNumber],
            [tr("رقم التعريف الضريبي"), BRAND.taxIdentificationNumber],
            [tr("عنوان الشركة"), tr(BRAND.address)],
            [tr("الرمز البريدي"), BRAND.postalCode],
            [tr("صندوق البريد"), BRAND.poBox],
          ].map(([label, value]) => <div key={label}><dt className="text-slate-500">{label}</dt><dd className="mt-1 font-medium text-slate-900">{value}</dd></div>)}
          <div><dt className="text-slate-500">{tr("البريد الإلكتروني")}</dt><dd className="mt-1"><a className="text-brand-700 hover:underline" href={`mailto:${BRAND.email}`}><bdi dir="ltr">{BRAND.email}</bdi></a></dd></div>
          <div><dt className="text-slate-500">{tr("الهاتف")}</dt><dd className="mt-1"><a className="text-brand-700 hover:underline" href={`tel:${BRAND.phone.replace(/\s/g, '')}`}><bdi dir="ltr">{BRAND.phone}</bdi></a></dd></div>
        </dl>
      </div>
    </main>
  )
}

