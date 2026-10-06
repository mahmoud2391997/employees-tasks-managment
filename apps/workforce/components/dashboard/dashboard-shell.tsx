'use client'

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Bell, ChevronRight, FlaskConical, Menu } from 'lucide-react'
import { useTranslations } from '@/lib/i18n/provider'
import { Sidebar } from '@/components/dashboard/sidebar'

const pageNames: Record<string, string> = {
  dashboard: 'لوحة التحكم', employees: 'الموظفون', departments: 'الأقسام', tasks: 'المهام',
  members: 'الأعضاء', roles: 'الأدوار والصلاحيات', settings: 'الإعدادات', profile: 'الملف الشخصي', notifications: 'الإشعارات',
}
export function DashboardShell({ children, name, role, permissions, companyName, demo }: {
  children: ReactNode; name: string; role?: string | null; permissions: string[]; companyName: string; demo?: boolean
}) {
  const tr = useTranslations()
  const pathname = usePathname()
  const [collapsed, setCollapsed] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const drawer = useRef<HTMLDialogElement>(null)
  const menuButton = useRef<HTMLButtonElement>(null)
  const title = tr(pageNames[pathname.split('/')[1]] ?? 'لوحة التحكم')
  useEffect(() => {
    if (mobileOpen) drawer.current?.showModal()
    else drawer.current?.close()
  }, [mobileOpen])
  function closeDrawer() { setMobileOpen(false); menuButton.current?.focus() }

  return <div className="min-h-screen bg-[#f4f7fb]" style={{ '--sidebar-width': collapsed ? '80px' : '248px' } as CSSProperties}>
    <Sidebar name={name} role={role} permissions={permissions} companyName={companyName} collapsed={collapsed} onToggle={() => setCollapsed(value => !value)} />
    <dialog ref={drawer} aria-label={tr('القائمة')} onCancel={closeDrawer} onClose={() => setMobileOpen(false)}
      onClick={event => { if (event.target === event.currentTarget) closeDrawer() }}
      className="m-0 h-dvh max-h-none w-[280px] max-w-[85vw] border-0 p-0 backdrop:bg-slate-950/50"
      style={{ insetInlineStart: 0, insetInlineEnd: 'auto' }}>
      <Sidebar name={name} role={role} permissions={permissions} companyName={companyName} collapsed={false} mobile onToggle={closeDrawer} onNavigate={closeDrawer} />
    </dialog>
    <div className="min-h-screen transition-[padding] duration-200 md:ps-[var(--sidebar-width)]">
      <header className="sticky top-0 z-30 flex h-[76px] items-center justify-between gap-3 border-b border-slate-200/70 bg-white/95 px-4 backdrop-blur sm:px-6 lg:px-8">
        <div className="flex min-w-0 items-center gap-3">
          <button ref={menuButton} type="button" onClick={() => setMobileOpen(true)} aria-label={tr('فتح القائمة')} aria-expanded={mobileOpen}
            className="rounded-xl border border-slate-200 p-2.5 text-slate-600 md:hidden"><Menu size={20} /></button>
          <div className="flex min-w-0 items-center gap-2 text-sm">
            <span className="hidden text-slate-400 sm:block">{companyName}</span>
            <ChevronRight size={14} className="hidden text-slate-300 sm:block rtl:rotate-180" />
            <span className="truncate font-semibold text-slate-800">{title}</span>
          </div>
        </div>
        <div className="flex items-center gap-3 sm:gap-5">
          <Link href="/notifications" aria-label={tr('الإشعارات')} className="rounded-xl p-2.5 text-slate-500 transition hover:bg-slate-100 hover:text-brand-600"><Bell size={20} /></Link>
          <div className="h-7 w-px bg-slate-200" />
          <Link href="/profile" className="flex items-center gap-3 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500">
            <div className="hidden text-end sm:block"><p className="text-sm font-semibold text-slate-800">{name || tr('عضو')}</p><p className="mt-0.5 text-xs text-slate-400">{tr(role || 'عضو')}</p></div>
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-100 text-sm font-bold text-brand-700">{name?.trim().charAt(0) || 'T'}</span>
          </Link>
        </div>
      </header>
      <main id="main-content" className="mx-auto max-w-[1600px] p-4 sm:p-6 lg:p-8">
        {demo ? <div className="mb-5 flex items-center justify-between gap-3 rounded-xl border border-brand-200/70 bg-brand-50/70 px-4 py-2.5 text-xs text-brand-800">
          <span className="flex items-center gap-2 font-medium"><FlaskConical size={15} />{tr('عرض تجريبي للقراءة فقط')}</span>
          <form method="post" action="/api/auth/logout"><button className="rounded-md px-2 py-1 font-semibold hover:bg-brand-100">{tr('إنهاء العرض التجريبي')}</button></form>
        </div> : null}
        {children}
      </main>
    </div>
  </div>
}
