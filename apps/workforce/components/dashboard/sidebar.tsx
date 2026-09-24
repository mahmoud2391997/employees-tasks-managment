'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Bell, BriefcaseBusiness, CheckSquare, ChevronLeft, LayoutDashboard, LogOut, Menu, Settings, ShieldCheck, User, UserPlus, Users } from 'lucide-react'
import { useState } from 'react'

const sections = [
  { label: 'Main', items: [
    { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard, permission: 'dashboard.view' },
    { href: '/employees', label: 'Employees', icon: Users, permission: 'employees.view' },
    { href: '/departments', label: 'Departments', icon: BriefcaseBusiness, permission: 'departments.view' },
    { href: '/tasks', label: 'Tasks', icon: CheckSquare, permission: 'tasks.view' },
  ]},
  { label: 'Team', items: [
    { href: '/members', label: 'Members', icon: UserPlus, permission: 'members.view' },
    { href: '/roles', label: 'Roles & Permissions', icon: ShieldCheck, permission: 'roles.manage' },
    { href: '/settings', label: 'Settings', icon: Settings, permission: null },
  ]},
  { label: 'Account', items: [
    { href: '/profile', label: 'Profile', icon: User, permission: null },
    { href: '/notifications', label: 'Notifications', icon: Bell, permission: null },
  ]},
]

export function Sidebar({ name, role, permissions, hasTeam }: { name: string; role?: string | null; permissions: string[]; hasTeam: boolean }) {
  const [collapsed, setCollapsed] = useState(false)
  const pathname = usePathname()
  const visibleSections = hasTeam ? sections : [{ label: '', items: [
    { href: '/create-team', label: 'Create Team', icon: Users, permission: null },
    { href: '/notifications', label: 'Notifications', icon: Bell, permission: null },
    { href: '/profile', label: 'Profile', icon: User, permission: null },
  ]}]

  return (
    <aside className={`fixed inset-y-0 left-0 z-40 flex flex-col border-r border-slate-200 bg-white transition-all duration-200 ${collapsed ? 'w-[72px]' : 'w-64'}`}>
      <div className="flex h-20 items-center justify-between border-b border-slate-100 px-4">
        {!collapsed && <div className="flex min-w-0 items-center gap-3"><div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white"><Menu size={21} /></div><div className="min-w-0"><div className="truncate text-base font-bold text-slate-900">TeamFlow</div><div className="truncate text-xs text-slate-400">Team management</div></div></div>}
        {collapsed && <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white"><Menu size={21} /></div>}
        <button aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'} onClick={() => setCollapsed(!collapsed)} className="rounded-lg p-2 text-slate-400 hover:bg-slate-50 hover:text-slate-700"><ChevronLeft className={`transition-transform ${collapsed ? 'rotate-180' : ''}`} size={18} /></button>
      </div>
      <nav className="flex-1 space-y-6 overflow-y-auto p-3">
        {visibleSections.map((section) => <div key={section.label}>
          {!collapsed && section.label && <div className="mb-2 px-3 text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">{section.label}</div>}
          <div className="space-y-1">{section.items.filter((item) => !item.permission || permissions.includes(item.permission)).map((item) => { const Icon = item.icon; const active = pathname === item.href || pathname.startsWith(`${item.href}/`); return <Link key={item.href} href={item.href} title={collapsed ? item.label : undefined} className={`flex h-11 items-center rounded-xl text-sm font-medium transition-colors ${collapsed ? 'justify-center px-2' : 'gap-3 px-3'} ${active ? 'bg-blue-50 text-blue-700' : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'}`}><Icon size={19} strokeWidth={active ? 2.3 : 1.9} />{!collapsed && item.label}</Link> })}</div>
        </div>)}
      </nav>
      <div className="border-t border-slate-100 p-3">
        {!collapsed && <div className="mb-3 rounded-xl bg-slate-50 px-3 py-2"><div className="truncate text-sm font-semibold text-slate-700">{name || 'Team member'}</div><div className="truncate text-xs text-slate-400">{role || 'Member'}</div></div>}
        <form method="post" action="/api/auth/logout"><button title={collapsed ? 'Logout' : undefined} className={`flex h-11 w-full items-center rounded-xl text-sm font-medium text-slate-500 hover:bg-red-50 hover:text-red-600 ${collapsed ? 'justify-center' : 'gap-3 px-3'}`}><LogOut size={19} />{!collapsed && 'Logout'}</button></form>
      </div>
    </aside>
  )
}
