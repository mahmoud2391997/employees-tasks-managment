'use client'

import { LanguageSwitch, useTranslations } from '@/lib/i18n/provider'

import Link from 'next/link'
import Image from 'next/image'
import { BRAND } from '@/lib/brand'
import { usePathname } from 'next/navigation'
import { Bell, BriefcaseBusiness, CheckSquare, ChevronRight, LayoutDashboard, LogOut, X, Settings, ShieldCheck, User, UserPlus, Users } from 'lucide-react'

const sections = [
  { label: 'Main', items: [
    { href: '/dashboard', label: 'لوحة التحكم', icon: LayoutDashboard, permission: 'dashboard.view' },
    { href: '/employees', label: 'الموظفون', icon: Users, permission: 'employees.view' },
    { href: '/departments', label: 'الأقسام', icon: BriefcaseBusiness, permission: 'departments.view' },
    { href: '/tasks', label: 'المهام', icon: CheckSquare, permission: 'tasks.view' },
  ]},
  { label: 'Team', items: [
    { href: '/members', label: 'الأعضاء', icon: UserPlus, permission: 'members.view' },
    { href: '/roles', label: 'الأدوار والصلاحيات', icon: ShieldCheck, permission: 'roles.manage' },
    { href: '/settings', label: 'الإعدادات', icon: Settings, permission: 'settings.manage' },
  ]},
  { label: 'Account', items: [
    { href: '/profile', label: 'الملف الشخصي', icon: User, permission: null },
    { href: '/notifications', label: 'الإشعارات', icon: Bell, permission: null },
  ]},
]

export function Sidebar({ name, role, permissions, companyName, collapsed, onToggle, mobile = false, onNavigate }: {
  name: string; role?: string | null; permissions: string[]; companyName: string;
  collapsed: boolean; onToggle: () => void; mobile?: boolean; onNavigate?: () => void
}) {
  const tr = useTranslations()
  const pathname = usePathname()
  return <aside data-collapsed={collapsed} className={`${mobile ? 'flex h-full w-full' : 'fixed inset-y-0 start-0 z-40 hidden w-[var(--sidebar-width)] md:flex'} sidebar h-dvh min-h-0 flex-col overflow-hidden border-e border-brand-200 bg-brand-50 text-slate-800 transition-[width] duration-200`}>
    <div className={`sidebar-header flex h-16 shrink-0 items-center border-b border-brand-200/70 ${collapsed ? 'justify-center px-2' : 'justify-between gap-2 px-5'}`}>
      <div className="flex min-w-0 items-center gap-3">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white p-1.5"><Image src={BRAND.logo} alt={tr(BRAND.name)} width={48} height={48} className="h-full w-full object-contain" /></div>
        {!collapsed ? <div className="min-w-0"><div className="text-sm font-bold">{companyName}</div><div className="mt-1 text-[10px] text-slate-500">{tr(BRAND.tagline)}</div></div> : null}
      </div>
      {!collapsed ? <button type="button" onClick={onToggle} aria-label={mobile ? tr('إغلاق') : tr('طي القائمة')} aria-expanded={!collapsed}
        className="rounded-lg p-1.5 text-brand-500 hover:bg-brand-100 hover:text-brand-700">{mobile ? <X size={18} /> : <ChevronRight size={17} className="rtl:rotate-180" />}</button> : null}
    </div>
    {collapsed ? <button type="button" onClick={onToggle} aria-label={tr('توسيع القائمة')} aria-expanded={false} className="sidebar-expand mx-auto mt-2 rounded-lg p-1.5 text-slate-500 hover:bg-white/10"><ChevronRight size={17} className="rtl:rotate-180" /></button> : null}
    <nav aria-label={tr('القائمة')} className="sidebar-nav min-h-0 flex-1 space-y-4 px-3 py-3">
      {sections.map(section => <div className="sidebar-section" key={section.label}>
        {!collapsed ? <div className="sidebar-section-label mb-2 px-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">{tr(section.label === 'Main' ? 'الرئيسية' : section.label === 'Team' ? 'الفريق' : 'الحساب')}</div> : null}
        <div className="sidebar-links space-y-1">{section.items.filter(item => !item.permission || permissions.includes(item.permission)).map(item => {
          const Icon = item.icon
          const active = pathname === item.href || pathname.startsWith(`${item.href}/`)
          return <Link key={item.href} href={item.href} onClick={onNavigate} aria-current={active ? 'page' : undefined} title={tr(item.label)}
            className={`sidebar-link flex h-10 items-center gap-3 rounded-xl px-3 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 ${collapsed ? 'justify-center' : ''} ${active ? 'bg-brand-600 font-semibold text-white shadow-md shadow-brand-950/30' : 'text-slate-600 hover:bg-brand-100 hover:text-brand-700'}`}>
            <Icon size={19} strokeWidth={active ? 2.1 : 1.7} />{!collapsed ? <span className="min-w-0 truncate">{tr(item.label)}</span> : null}
          </Link>
        })}</div>
      </div>)}
    </nav>
    <div className="sidebar-footer shrink-0 space-y-3 border-t border-brand-200/70 p-3">
      {!collapsed ? <div className="sidebar-language"><LanguageSwitch /></div> : null}
      {!collapsed ? <div className="sidebar-profile flex items-center gap-3"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-100 text-sm font-semibold text-brand-700">{name?.trim().charAt(0) || 'T'}</span><div className="min-w-0"><div className="truncate text-sm font-medium text-slate-800">{name || tr('عضو فريق')}</div><div className="mt-0.5 text-xs text-slate-500">{tr(role || 'عضو')}</div></div></div> : null}
      <form method="post" action="/api/auth/logout"><button title={tr('تسجيل الخروج')} className={`sidebar-logout flex h-9 w-full items-center gap-3 rounded-lg text-sm text-slate-600 hover:bg-brand-100 hover:text-rose-700 ${collapsed ? 'justify-center' : 'px-2'}`}><LogOut size={18} />{!collapsed ? tr('تسجيل الخروج') : null}</button></form>
    </div>
  </aside>
}
