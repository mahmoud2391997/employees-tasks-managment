'use client'

import { apiFetch } from '@/lib/api-fetch'

import { useTranslations } from '@/lib/i18n/provider'

import { useMemo, useState } from 'react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Select } from '@/components/ui/select'
import { Table, TableWrapper, TD, TH, THead } from '@/components/ui/table'

type RoleOption = { name: string; label: string }

type Member = {
  id: string
  userId: string
  teamId: string
  role: string
  isActive: boolean
  createdAt: string
  user: {
    id: string
    email: string | null
    profile: { id: string; email: string | null; firstName: string | null; lastName: string | null; role: string; teamId: string | null } | null
  }
}

type Invitation = {
  id: string
  email: string | null
  role: string
  token: string
  expiresAt: string | null
  acceptedAt: string | null
  createdAt: string
  invitedBy: { id: string; email: string | null; firstName: string | null; lastName: string | null }
}

export function MembersContainer({
  initialMembers,
  initialTotal,
  initialHasMore,
  initialInvitations,
  roles,
  permissions,
}: {
  initialMembers: Member[]
  initialTotal: number
  initialHasMore: boolean
  initialInvitations: Invitation[]
  roles: RoleOption[]
  permissions: string[]
}) {
  const tr = useTranslations()

  const [members, setMembers] = useState<Member[]>(initialMembers)
  const [total, setTotal] = useState<number>(initialTotal)
  const [hasMore, setHasMore] = useState<boolean>(initialHasMore)
  const [loadingMore, setLoadingMore] = useState(false)
  const [invitations, setInvitations] = useState<Invitation[]>(initialInvitations)
  const [inviteUrl, setInviteUrl] = useState<string>('')
  const [emailNotice, setEmailNotice] = useState<string>('')

  const canInvite = permissions.includes('members.invite')
  const canRemove = permissions.includes('members.remove')
  const canAssign = permissions.includes('members.assign_role')

  const roleOptions = useMemo(() => {
    const base = roles.map((r) => ({ value: r.name, label: `${tr(r.label)} (${r.name})` }))
    const uniq = new Map<string, { value: string; label: string }>()
    for (const o of base) uniq.set(o.value, o)
    return Array.from(uniq.values())
  }, [roles, tr])

  const apiTake = 50

  async function refresh() {
    const res = await apiFetch(`/api/members?take=${apiTake}&skip=0`, { cache: 'no-store' })
    const json = (await res.json().catch(() => null)) as
      | {
          success?: boolean
          data?: { members?: Member[]; invitations?: Invitation[]; roles?: RoleOption[] }
          total?: number
          hasMore?: boolean
        }
      | null
    if (res.ok && json?.success) {
      const nextMembers = json.data?.members ?? []
      setMembers(nextMembers)
      setInvitations(json.data?.invitations ?? [])
      setTotal(Number(json.total ?? nextMembers.length))
      setHasMore(Boolean(json.hasMore))
    }
  }

  async function loadMore() {
    if (!hasMore || loadingMore) return
    setLoadingMore(true)
    const res = await apiFetch(`/api/members?take=${apiTake}&skip=${members.length}`, { cache: 'no-store' })
    const json = (await res.json().catch(() => null)) as
      | {
          success?: boolean
          data?: { members?: Member[]; invitations?: Invitation[]; roles?: RoleOption[] }
          total?: number
          hasMore?: boolean
        }
      | null
    setLoadingMore(false)
    if (res.ok && json?.success) {
      const next = json.data?.members ?? []
      setMembers((prev) => [...prev, ...next])
      setInvitations(json.data?.invitations ?? invitations)
      setTotal(Number(json.total ?? total))
      setHasMore(Boolean(json.hasMore))
    }
  }

  return (
    <div className="space-y-4">
      {canInvite ? (
        <InviteCard
          roleOptions={roleOptions}
          onInvited={async (result) => {
            setInviteUrl(result.url)
            setEmailNotice(result.emailSent ? tr("تم إرسال الدعوة إلى البريد الإلكتروني.") : tr("لم يُرسل البريد. انسخ الرابط وأرسله يدوياً."))
            await refresh()
          }}
        />
      ) : null}

      {inviteUrl ? (
        <Card className="border-blue-200 bg-blue-50 p-4 text-sm text-blue-700">
          <div className="font-semibold">{tr("رابط الدعوة")}</div>
          {emailNotice ? <div className="mt-1">{emailNotice}</div> : null}
          <div className="ltr mt-1 break-all font-mono text-xs">{inviteUrl}</div>
        </Card>
      ) : null}

      <TableWrapper>
        <div className="overflow-x-auto">
        <Table>
          <THead>
            <tr>
              <TH className="min-w-72">{tr("العضو")}</TH>
              <TH className="min-w-56">{tr("الدور")}</TH>
              <TH className="min-w-32">{tr("الحالة")}</TH>
              {canRemove ? <TH className="min-w-40">{tr("إجراءات")}</TH> : null}
            </tr>
          </THead>
          <tbody>
            {members.map((m) => {
              const profile = m.user.profile
              const display = profile
                ? (profile.firstName || profile.email || tr("مستخدم")) + (profile.lastName ? ` ${profile.lastName}` : '')
                : m.user.email || tr("مستخدم")
              return (
                <tr key={m.id} className="border-t border-slate-100 hover:bg-slate-50/60">
                  <TD>
                    <div className="font-semibold">{display}</div>
                    {m.user.email ? <div className="mt-1 text-xs text-slate-500"><bdi dir="ltr">{m.user.email}</bdi></div> : null}
                  </TD>
                  <TD>
                    {canAssign ? (
                      <div className="flex justify-start">
                      <Select
                        className="h-9 w-44!"
                        value={m.role}
                        onChange={async (e) => {
                          const res = await apiFetch(`/api/members/${m.id}`, {
                            method: 'PATCH',
                            headers: { 'content-type': 'application/json' },
                            body: JSON.stringify({ role: e.target.value }),
                          })
                          if (!res.ok) {
                            const json = await res.json().catch(() => null)
                            window.alert(tr(json?.message || 'تعذر الحفظ'))
                            return
                          }
                          await refresh()
                        }}
                      >
                        {roleOptions.map((o) => (
                          <option key={o.value} value={o.value}>
                            {tr(o.value)}
                          </option>
                        ))}
                        {!roleOptions.some((o) => o.value === m.role) ? <option value={m.role}>{tr(m.role)}</option> : null}
                      </Select>
                      </div>
                    ) : (
                      <span className="text-sm font-medium">{tr(m.role)}</span>
                    )}
                  </TD>
                  <TD>{m.isActive ? <Badge variant="success">{tr("نشط")}</Badge> : <Badge variant="neutral">{tr("غير نشط")}</Badge>}</TD>
                  {canRemove ? <TD>
                      <Button
                        size="sm"
                        variant="danger"
                        type="button"
                        onClick={async () => {
                          const res = await apiFetch(`/api/members/${m.id}`, { method: 'DELETE' })
                          if (!res.ok) {
                            const json = await res.json().catch(() => null)
                            window.alert(tr(json?.message || 'تعذر الحفظ'))
                            return
                          }
                          await refresh()
                        }}
                      >
                        {tr("إزالة")}</Button>
                  </TD> : null}
                </tr>
              )
            })}
            {members.length === 0 ? (
              <tr>
                <td className="px-3 py-10 text-center text-sm text-slate-500" colSpan={canRemove ? 4 : 3}>
                  {tr("لا يوجد أعضاء")}</td>
              </tr>
            ) : null}
          </tbody>
        </Table>
        </div>
      </TableWrapper>

      {members.length > 0 ? (
        <Card className="p-3">
          <div className="flex flex-wrap items-center justify-between gap-3 text-sm text-slate-600">
            <div>
              {tr("تم تحميل")}{' '}{members.length} {tr("من")}{' '}{total}
            </div>
            {hasMore ? (
              <Button variant="secondary" size="sm" type="button" disabled={loadingMore} onClick={loadMore}>
                {loadingMore ? '...' : tr("تحميل المزيد")}
              </Button>
            ) : (
              <Badge variant="neutral">{tr("آخر صفحة")}</Badge>
            )}
          </div>
        </Card>
      ) : null}

      {canInvite ? (
        <Card>
          <div className="border-b border-slate-100 bg-slate-50 px-5 py-3 text-sm font-semibold text-slate-600">{tr("الدعوات المعلقة")}</div>
          <div className="p-5">
            {invitations.length === 0 ? <div className="text-sm text-slate-500">{tr("لا توجد دعوات معلقة")}</div> : null}
            <div className="space-y-2">
              {invitations.map((inv) => (
                <div key={inv.id} className="rounded-2xl border border-slate-200 bg-white p-4">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <div className="ltr font-semibold">{inv.email ?? '—'}</div>
                      <div className="text-xs text-[#656d76]">
                        {tr("الدور:")}<span className="ltr font-mono">{tr(inv.role)}</span>
                        {inv.expiresAt ? tr(" · ينتهي: {0}", {0: new Date(inv.expiresAt).toISOString().slice(0, 10)}) : ''}
                      </div>
                    </div>
                    <Button
                      size="sm"
                      variant="secondary"
                      type="button"
                      onClick={() => {
                        const url = `${window.location.origin}/invite/${inv.token}`
                        setInviteUrl(url)
                        navigator.clipboard?.writeText(url).catch(() => {})
                      }}
                    >
                      {tr("نسخ رابط الدعوة")}</Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>
      ) : null}
    </div>
  )
}

function InviteCard({
  roleOptions,
  onInvited,
}: {
  roleOptions: Array<{ value: string; label: string }>
  onInvited: (result: { url: string; emailSent: boolean }) => void
}) {
  const tr = useTranslations()

  const [email, setEmail] = useState('')
  const [role, setRole] = useState(roleOptions[0]?.value ?? 'EMPLOYEE')
  const [pending, setPending] = useState(false)
  const [error, setError] = useState('')
  const [mode, setMode] = useState<'invite' | 'reactivate'>('invite')

  return (
    <Card className="p-5">
      <div className="text-lg font-semibold text-slate-900">{tr("دعوة عضو")}</div>
      <form
        className="mt-4 grid gap-3 md:grid-cols-3"
        onSubmit={async (e) => {
          e.preventDefault()
          setPending(true)
          setError('')
          const endpoint = mode === 'reactivate' ? '/api/members/reactivate' : '/api/members/invite'
          const body = mode === 'reactivate' ? { email } : { email, role }
          const res = await apiFetch(endpoint, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(body),
          })
          const json = (await res.json().catch(() => null)) as
            | { success?: boolean; message?: string; code?: string; data?: { inviteUrl?: string; emailSent?: boolean } }
            | null
          setPending(false)
          if (!res.ok || !json?.success) {
            setError(tr(json?.message || "تعذر إرسال الدعوة"))
            if (mode === 'invite' && json?.code === 'EXISTING_USER_CAN_REACTIVATE') setMode('reactivate')
            return
          }
          setEmail('')
          setMode('invite')
          onInvited({ url: json?.data?.inviteUrl ?? '', emailSent: Boolean(json?.data?.emailSent) })
        }}
      >
        <label className="block text-sm font-medium md:col-span-2">
          {tr("البريد الإلكتروني")}<Input
            className="ltr mt-2"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
              setMode('invite')
            }}
            required
          />
        </label>
        <label className="block text-sm font-medium">
          {tr("الدور")}<Select className="mt-2" value={role} onChange={(e) => setRole(e.target.value)}>
            {roleOptions.map((o) => (
              <option key={o.value} value={o.value}>
                {tr(o.value)}
              </option>
            ))}
          </Select>
        </label>
        {error ? <div className="md:col-span-3 rounded-md border border-[#ff818266] bg-[#ffebe9] px-3 py-2 text-sm text-[#cf222e]">{error}</div> : null}
        <Button className="md:col-span-3 w-full" disabled={pending} type="submit">
          {pending ? '...' : mode === 'reactivate' ? tr("إعادة التفعيل") : tr("إرسال الدعوة")}
        </Button>
      </form>
    </Card>
  )
}

