'use client'

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
    email: string
    profile: { id: string; email: string; firstName: string | null; lastName: string | null; role: string; teamId: string | null } | null
  }
}

type Invitation = {
  id: string
  email: string
  role: string
  token: string
  expiresAt: string | null
  acceptedAt: string | null
  createdAt: string
  invitedBy: { id: string; email: string; firstName: string | null; lastName: string | null }
}

export function MembersContainer({
  initialMembers,
  initialInvitations,
  roles,
  permissions,
}: {
  initialMembers: Member[]
  initialInvitations: Invitation[]
  roles: RoleOption[]
  permissions: string[]
}) {
  const [members, setMembers] = useState<Member[]>(initialMembers)
  const [invitations, setInvitations] = useState<Invitation[]>(initialInvitations)
  const [inviteUrl, setInviteUrl] = useState<string>('')

  const canInvite = permissions.includes('members.invite')
  const canRemove = permissions.includes('members.remove')
  const canAssign = permissions.includes('members.assign_role')

  const roleOptions = useMemo(() => {
    const base = roles.map((r) => ({ value: r.name, label: `${r.label} (${r.name})` }))
    const uniq = new Map<string, { value: string; label: string }>()
    for (const o of base) uniq.set(o.value, o)
    return Array.from(uniq.values())
  }, [roles])

  async function refresh() {
    const res = await fetch('/api/members', { cache: 'no-store' })
    const json = (await res.json().catch(() => null)) as
      | { success?: boolean; data?: { members?: Member[]; invitations?: Invitation[]; roles?: RoleOption[] } }
      | null
    if (res.ok && json?.success) {
      setMembers(json.data?.members ?? [])
      setInvitations(json.data?.invitations ?? [])
    }
  }

  return (
    <div className="space-y-4">
      {canInvite ? (
        <InviteCard
          roleOptions={roleOptions}
          onInvited={async (url) => {
            setInviteUrl(url)
            await refresh()
          }}
        />
      ) : null}

      {inviteUrl ? (
        <Card className="border-blue-200 bg-blue-50 p-4 text-sm text-blue-700">
          <div className="font-semibold">رابط الدعوة</div>
          <div className="ltr mt-1 break-all font-mono text-xs">{inviteUrl}</div>
        </Card>
      ) : null}

      <TableWrapper>
        <div className="overflow-x-auto">
        <Table>
          <THead>
            <tr>
              <TH className="min-w-72">العضو</TH>
              <TH className="min-w-56">الدور</TH>
              <TH className="min-w-32">الحالة</TH>
              <TH className="min-w-40 text-left">إجراءات</TH>
            </tr>
          </THead>
          <tbody>
            {members.map((m) => {
              const profile = m.user.profile
              const display = profile
                ? (profile.firstName || profile.email) + (profile.lastName ? ` ${profile.lastName}` : '')
                : m.user.email
              return (
                <tr key={m.id} className="border-t border-slate-100 hover:bg-slate-50/60">
                  <TD>
                    <div className="font-semibold">{display}</div>
                    <div className="ltr text-xs text-[#656d76]">{m.user.email}</div>
                  </TD>
                  <TD>
                    {canAssign ? (
                      <Select
                        className="h-9 w-auto min-w-44"
                        value={m.role}
                        onChange={async (e) => {
                          await fetch(`/api/members/${m.id}`, {
                            method: 'PATCH',
                            headers: { 'content-type': 'application/json' },
                            body: JSON.stringify({ role: e.target.value }),
                          })
                          await refresh()
                        }}
                      >
                        {roleOptions.map((o) => (
                          <option key={o.value} value={o.value}>
                            {o.value}
                          </option>
                        ))}
                        {!roleOptions.some((o) => o.value === m.role) ? <option value={m.role}>{m.role}</option> : null}
                      </Select>
                    ) : (
                      <span className="ltr font-mono text-xs">{m.role}</span>
                    )}
                  </TD>
                  <TD>{m.isActive ? <Badge variant="success">نشط</Badge> : <Badge variant="neutral">غير نشط</Badge>}</TD>
                  <TD className="text-left">
                    {canRemove ? (
                      <Button
                        size="sm"
                        variant="danger"
                        type="button"
                        onClick={async () => {
                          await fetch(`/api/members/${m.id}`, { method: 'DELETE' })
                          await refresh()
                        }}
                      >
                        إزالة
                      </Button>
                    ) : null}
                  </TD>
                </tr>
              )
            })}
            {members.length === 0 ? (
              <tr>
                <td className="px-3 py-10 text-center text-sm text-slate-500" colSpan={4}>
                  لا يوجد أعضاء
                </td>
              </tr>
            ) : null}
          </tbody>
        </Table>
        </div>
      </TableWrapper>

      <Card>
        <div className="border-b border-slate-100 bg-slate-50 px-5 py-3 text-sm font-semibold text-slate-600">الدعوات المعلقة</div>
        <div className="p-5">
          {invitations.length === 0 ? <div className="text-sm text-slate-500">لا توجد دعوات معلقة</div> : null}
          <div className="space-y-2">
            {invitations.map((inv) => (
              <div key={inv.id} className="rounded-2xl border border-slate-200 bg-white p-4">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <div className="ltr font-semibold">{inv.email}</div>
                    <div className="text-xs text-[#656d76]">
                      الدور: <span className="ltr font-mono">{inv.role}</span>
                      {inv.expiresAt ? ` · ينتهي: ${inv.expiresAt.slice(0, 10)}` : ''}
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
                    نسخ رابط الدعوة
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  )
}

function InviteCard({ roleOptions, onInvited }: { roleOptions: Array<{ value: string; label: string }>; onInvited: (url: string) => void }) {
  const [email, setEmail] = useState('')
  const [role, setRole] = useState(roleOptions[0]?.value ?? 'EMPLOYEE')
  const [pending, setPending] = useState(false)
  const [error, setError] = useState('')

  return (
    <Card className="p-5">
      <div className="text-lg font-semibold text-slate-900">دعوة عضو</div>
      <form
        className="mt-4 grid gap-3 md:grid-cols-3"
        onSubmit={async (e) => {
          e.preventDefault()
          setPending(true)
          setError('')
          const res = await fetch('/api/members/invite', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ email, role }) })
          const json = (await res.json().catch(() => null)) as { success?: boolean; message?: string; data?: { inviteUrl?: string } } | null
          setPending(false)
          if (!res.ok || !json?.success) {
            setError(json?.message || 'تعذر إرسال الدعوة')
            return
          }
          setEmail('')
          onInvited(json?.data?.inviteUrl ?? '')
        }}
      >
        <label className="block text-sm font-medium md:col-span-2">
          البريد الإلكتروني
          <Input className="ltr mt-2" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <label className="block text-sm font-medium">
          الدور
          <Select className="mt-2" value={role} onChange={(e) => setRole(e.target.value)}>
            {roleOptions.map((o) => (
              <option key={o.value} value={o.value}>
                {o.value}
              </option>
            ))}
          </Select>
        </label>
        {error ? <div className="md:col-span-3 rounded-md border border-[#ff818266] bg-[#ffebe9] px-3 py-2 text-sm text-[#cf222e]">{error}</div> : null}
        <Button className="md:col-span-3 w-full" disabled={pending} type="submit">
          {pending ? '...' : 'إرسال الدعوة'}
        </Button>
      </form>
    </Card>
  )
}

