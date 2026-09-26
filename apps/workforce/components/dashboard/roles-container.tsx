'use client'

import { useMemo, useState } from 'react'

import { ALL_PERMISSIONS } from '@/lib/permissions'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Modal } from '@/components/ui/modal'
import { Table, TableWrapper, TD, TH, THead } from '@/components/ui/table'

type Role = {
  id: string
  name: string
  label: string
  permissions: string[]
  createdAt: string
  updatedAt: string
}

const RESERVED = new Set(['ADMIN', 'MANAGER', 'EMPLOYEE'])

function groupPermissions(perms: readonly string[]) {
  const groups: Record<string, string[]> = {}
  for (const p of perms) {
    const [g] = p.split('.', 1)
    const key = g || 'other'
    groups[key] ??= []
    groups[key].push(p)
  }
  return Object.entries(groups).sort(([a], [b]) => a.localeCompare(b))
}

export function RolesContainer({ initialRoles }: { initialRoles: Role[] }) {
  const [roles, setRoles] = useState<Role[]>(initialRoles)
  const [editing, setEditing] = useState<Role | null>(null)
  const [creating, setCreating] = useState(false)

  const grouped = useMemo(() => groupPermissions(ALL_PERMISSIONS), [])

  async function refresh() {
    const res = await fetch('/api/roles', { cache: 'no-store' })
    const json = (await res.json().catch(() => null)) as { success?: boolean; data?: Role[] } | null
    if (res.ok && json?.success) setRoles(json.data ?? [])
  }

  return (
    <div className="space-y-4">
      {creating ? (
        <RoleEditor
          title="دور جديد"
          grouped={grouped}
          initial={{ name: '', label: '', permissions: [] }}
          onClose={() => setCreating(false)}
          onSave={async (draft) => {
            const res = await fetch('/api/roles', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(draft) })
            const json = (await res.json().catch(() => null)) as { success?: boolean; message?: string } | null
            if (!res.ok || !json?.success) throw new Error(json?.message || 'تعذر الحفظ')
            setCreating(false)
            await refresh()
          }}
          allowEditName
        />
      ) : null}

      {editing ? (
        <RoleEditor
          title={`تعديل الدور: ${editing.name}`}
          grouped={grouped}
          initial={{ name: editing.name, label: editing.label, permissions: editing.permissions ?? [] }}
          onClose={() => setEditing(null)}
          onSave={async (draft) => {
            const res = await fetch(`/api/roles/${editing.id}`, { method: 'PATCH', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ label: draft.label, permissions: draft.permissions }) })
            const json = (await res.json().catch(() => null)) as { success?: boolean; message?: string } | null
            if (!res.ok || !json?.success) throw new Error(json?.message || 'تعذر الحفظ')
            setEditing(null)
            await refresh()
          }}
          readOnly={RESERVED.has(editing.name)}
        />
      ) : null}

      <Card className="p-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <div className="text-sm font-semibold text-slate-900">الأدوار</div>
            <div className="text-xs text-slate-500">{roles.length} دور</div>
          </div>
          <Button type="button" onClick={() => setCreating(true)}>
            + دور جديد
          </Button>
        </div>
      </Card>

      <TableWrapper>
        <div className="overflow-x-auto">
        <Table>
          <THead>
            <tr>
              <TH className="min-w-48">الاسم</TH>
              <TH className="min-w-64">الوصف</TH>
              <TH className="min-w-28">الصلاحيات</TH>
              <TH className="min-w-44">إجراءات</TH>
            </tr>
          </THead>
          <tbody>
            {roles.map((r) => (
              <tr key={r.id} className="border-t border-slate-100 hover:bg-slate-50/60">
                <TD className="ltr font-mono text-xs">{r.name}</TD>
                <TD>{r.label}</TD>
                <TD className="text-slate-600">{(r.permissions ?? []).length}</TD>
                <TD>
                  <div className="flex flex-wrap items-center justify-center gap-2">
                    <Button size="sm" variant="secondary" type="button" onClick={() => setEditing(r)}>
                      {RESERVED.has(r.name) ? 'عرض' : 'تعديل'}
                    </Button>
                    {!RESERVED.has(r.name) ? (
                      <Button
                        size="sm"
                        variant="danger"
                        type="button"
                        onClick={async () => {
                          await fetch(`/api/roles/${r.id}`, { method: 'DELETE' })
                          await refresh()
                        }}
                      >
                        حذف
                      </Button>
                    ) : null}
                  </div>
                </TD>
              </tr>
            ))}
            {roles.length === 0 ? (
              <tr>
                <td className="px-3 py-10 text-center text-sm text-slate-500" colSpan={4}>
                  لا توجد أدوار
                </td>
              </tr>
            ) : null}
          </tbody>
        </Table>
        </div>
      </TableWrapper>
    </div>
  )
}

function RoleEditor({
  title,
  grouped,
  initial,
  onClose,
  onSave,
  allowEditName,
  readOnly,
}: {
  title: string
  grouped: Array<[string, string[]]>
  initial: { name: string; label: string; permissions: string[] }
  onClose: () => void
  onSave: (draft: { name: string; label: string; permissions: string[] }) => Promise<void>
  allowEditName?: boolean
  readOnly?: boolean
}) {
  const [name, setName] = useState(initial.name)
  const [label, setLabel] = useState(initial.label)
  const [permissions, setPermissions] = useState<string[]>(initial.permissions ?? [])
  const [pending, setPending] = useState(false)
  const [error, setError] = useState('')

  return (
    <Modal open title={title} onClose={onClose}>
      <form className="space-y-4"
        onSubmit={async (e) => {
          e.preventDefault()
          setPending(true)
          setError('')
          try {
            await onSave({ name, label, permissions })
          } catch (err: any) {
            setError(String(err?.message ?? 'تعذر الحفظ'))
            setPending(false)
          }
        }}
      >
        <div className="grid gap-3 md:grid-cols-2">
          <label className="block text-sm font-medium">
            الاسم
            <Input
              className="ltr mt-2 font-mono"
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={!allowEditName || Boolean(readOnly)}
              required
            />
          </label>
          <label className="block text-sm font-medium">
            الوصف
            <Input className="mt-2" value={label} onChange={(e) => setLabel(e.target.value)} disabled={Boolean(readOnly)} required />
          </label>
        </div>

        <div className="rounded-2xl border border-slate-200 p-4">
          <div className="mb-3 text-sm font-semibold">الصلاحيات</div>
          <div className="grid gap-4 md:grid-cols-2">
            {grouped.map(([group, perms]) => (
              <div key={group} className="rounded-2xl border border-slate-200 bg-slate-50 p-3">
                <div className="mb-2 text-xs font-semibold uppercase text-slate-500">{group}</div>
                <div className="space-y-1">
                  {perms.map((p) => {
                    const checked = permissions.includes(p)
                    return (
                      <label key={p} className="flex items-center gap-2 text-sm">
                        <input
                          type="checkbox"
                          checked={checked}
                          disabled={Boolean(readOnly)}
                          onChange={(e) => {
                            const next = e.target.checked
                            setPermissions((prev) => (next ? Array.from(new Set([...prev, p])) : prev.filter((x) => x !== p)))
                          }}
                        />
                        <span className="ltr font-mono text-xs text-slate-700">{p}</span>
                      </label>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {error ? <div className="rounded-md border border-[#ff818266] bg-[#ffebe9] px-3 py-2 text-sm text-[#cf222e]">{error}</div> : null}
        {!readOnly ? (
          <Button className="w-full" disabled={pending} type="submit">
            {pending ? '...' : 'حفظ'}
          </Button>
        ) : null}
      </form>
    </Modal>
  )
}

