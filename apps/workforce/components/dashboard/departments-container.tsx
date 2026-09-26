'use client'

import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Modal } from '@/components/ui/modal'
import { Select } from '@/components/ui/select'
import { Table, TableWrapper, TD, TH, THead } from '@/components/ui/table'

type Profile = { id: string; firstName: string | null; lastName: string | null; email: string }
type Department = { id: string; name: string; icon: string | null; managerId: string | null; manager?: Profile | null }

export function DepartmentsContainer({
  initialDepartments,
  profiles,
  permissions,
}: {
  initialDepartments: Department[]
  profiles: Profile[]
  permissions: string[]
}) {
  const [rows, setRows] = useState<Department[]>(initialDepartments)
  const [name, setName] = useState('')
  const [managerId, setManagerId] = useState('')
  const [error, setError] = useState('')
  const [pending, setPending] = useState(false)

  const [editing, setEditing] = useState<Department | null>(null)
  const [editName, setEditName] = useState('')
  const [editManagerId, setEditManagerId] = useState('')
  const [confirmDelete, setConfirmDelete] = useState<Department | null>(null)

  const canCreate = permissions.includes('departments.create')
  const canEdit = permissions.includes('departments.edit')
  const canDelete = permissions.includes('departments.delete')

  async function refresh() {
    const res = await fetch('/api/departments', { cache: 'no-store' })
    const json = (await res.json().catch(() => null)) as { success?: boolean; data?: Department[] } | null
    if (res.ok && json?.success) setRows(json.data ?? [])
  }

  return (
    <div className="space-y-4">
      <Modal
        open={Boolean(editing)}
        title="تعديل القسم"
        description="تحديث اسم القسم وتحديد المدير."
        onClose={() => setEditing(null)}
      >
        <form
          className="grid gap-3 md:grid-cols-2"
          onSubmit={async (e) => {
            e.preventDefault()
            if (!editing) return
            const res = await fetch(`/api/departments/${editing.id}`, {
              method: 'PATCH',
              headers: { 'content-type': 'application/json' },
              body: JSON.stringify({ name: editName.trim() || undefined, managerId: editManagerId || null }),
            })
            const json = (await res.json().catch(() => null)) as { success?: boolean; message?: string } | null
            if (!res.ok || !json?.success) {
              setError(json?.message || 'تعذر الحفظ')
              return
            }
            setEditing(null)
            await refresh()
          }}
        >
          <label className="block text-sm font-medium md:col-span-2">
            الاسم
            <Input className="mt-2" value={editName} onChange={(e) => setEditName(e.target.value)} required />
          </label>
          <label className="block text-sm font-medium">
            المدير
            <Select className="mt-2" value={editManagerId} onChange={(e) => setEditManagerId(e.target.value)}>
              <option value="">—</option>
              {profiles.map((p) => (
                <option key={p.id} value={p.id}>
                  {(p.firstName || p.email) + (p.lastName ? ` ${p.lastName}` : '')}
                </option>
              ))}
            </Select>
          </label>
          <div className="flex items-end justify-end gap-2">
            <Button type="button" variant="secondary" onClick={() => setEditing(null)}>
              إلغاء
            </Button>
            <Button type="submit">حفظ</Button>
          </div>
        </form>
      </Modal>

      <Modal
        open={Boolean(confirmDelete)}
        title="حذف القسم"
        description="سيتم حذف القسم نهائياً."
        onClose={() => setConfirmDelete(null)}
      >
        <div className="flex flex-wrap items-center justify-end gap-2">
          <Button variant="secondary" type="button" onClick={() => setConfirmDelete(null)}>
            إلغاء
          </Button>
          <Button
            variant="danger"
            type="button"
            onClick={async () => {
              if (!confirmDelete) return
              await fetch(`/api/departments/${confirmDelete.id}`, { method: 'DELETE' })
              setConfirmDelete(null)
              await refresh()
            }}
          >
            حذف
          </Button>
        </div>
      </Modal>

      {canCreate ? (
        <Card className="p-5">
          <div className="text-sm font-semibold text-slate-900">قسم جديد</div>
          <form
            className="mt-3 grid gap-3 md:grid-cols-3"
            onSubmit={async (e) => {
              e.preventDefault()
              setPending(true)
              setError('')
              const res = await fetch('/api/departments', {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify({ name, managerId: managerId || undefined }),
              })
              const json = (await res.json().catch(() => null)) as { success?: boolean; message?: string } | null
              setPending(false)
              if (!res.ok || !json?.success) {
                setError(json?.message || 'تعذر الحفظ')
                return
              }
              setName('')
              setManagerId('')
              await refresh()
            }}
          >
            <label className="block text-sm font-medium">
              الاسم
              <Input className="mt-2" value={name} onChange={(e) => setName(e.target.value)} required />
            </label>
            <label className="block text-sm font-medium">
              المدير
              <Select className="mt-2" value={managerId} onChange={(e) => setManagerId(e.target.value)}>
                <option value="">—</option>
                {profiles.map((p) => (
                  <option key={p.id} value={p.id}>
                    {(p.firstName || p.email) + (p.lastName ? ` ${p.lastName}` : '')}
                  </option>
                ))}
              </Select>
            </label>
            <div className="flex items-end">
              <Button className="w-full" disabled={pending} type="submit">
                {pending ? '...' : 'إنشاء'}
              </Button>
            </div>
            {error ? <div className="md:col-span-3 rounded-md border border-[#ff818266] bg-[#ffebe9] px-3 py-2 text-sm text-[#cf222e]">{error}</div> : null}
          </form>
        </Card>
      ) : null}

      <TableWrapper>
        <div className="overflow-x-auto">
        <Table>
          <THead>
            <tr>
              <TH className="min-w-64">الاسم</TH>
              <TH className="min-w-64">المدير</TH>
              <TH className="min-w-40">إجراءات</TH>
            </tr>
          </THead>
          <tbody>
            {rows.map((d) => (
              <tr key={d.id} className="border-t border-slate-100 hover:bg-slate-50/60">
                <TD className="font-semibold">{d.name}</TD>
                <TD>{d.manager ? (d.manager.firstName || d.manager.email) : '—'}</TD>
                <TD>
                  <div className="flex flex-wrap items-center justify-center gap-2">
                    {canEdit ? (
                      <Button
                        size="sm"
                        variant="secondary"
                        type="button"
                        onClick={() => {
                          setError('')
                          setEditing(d)
                          setEditName(d.name)
                          setEditManagerId(d.managerId ?? '')
                        }}
                      >
                        تعديل
                      </Button>
                    ) : null}
                    {canDelete ? (
                      <Button size="sm" variant="danger" type="button" onClick={() => setConfirmDelete(d)}>
                        حذف
                      </Button>
                    ) : null}
                  </div>
                </TD>
              </tr>
            ))}
            {rows.length === 0 ? (
              <tr>
                <td className="px-3 py-10 text-center text-sm text-slate-500" colSpan={3}>
                  لا توجد أقسام
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

