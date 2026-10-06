import { getTranslations } from '@/lib/i18n/server'

export async function VirtualLoginNotice({ title }: { title: string }) {
  const tr = await getTranslations()

  return (
    <main className="space-y-4">
      <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 shadow-sm">
        <h1 className="text-xl font-semibold">{title}</h1>
        <p className="mt-2 text-sm text-amber-800">{tr("تم تسجيل الدخول بوضع الطوارئ لأن قاعدة البيانات غير متاحة حالياً.")}</p>
      </div>
    </main>
  )
}
