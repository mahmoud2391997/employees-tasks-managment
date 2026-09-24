'use client'

import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Modal } from '@/components/ui/modal'

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
        title="Edit department"
        description="Update department name and manager."
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
            Name
            <input
              className="mt-2 h-10 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm"
              value={editName}
              onChange={(e) => setEditName(e.target.value)}
              required
            />
          </label>
          <label className="block text-sm font-medium">
            Manager
            <select
              className="mt-2 h-10 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm"
              value={editManagerId}
              onChange={(e) => setEditManagerId(e.target.value)}
            >
              <option value="">—</option>
              {profiles.map((p) => (
                <option key={p.id} value={p.id}>
                  {(p.firstName || p.email) + (p.lastName ? ` ${p.lastName}` : '')}
                </option>
              ))}
            </select>
          </label>
          <div className="flex items-end justify-end gap-2">
            <Button type="button" variant="secondary" onClick={() => setEditing(null)}>
              Cancel
            </Button>
            <Button type="submit">Save</Button>
          </div>
        </form>
      </Modal>

      <Modal
        open={Boolean(confirmDelete)}
        title="Delete department"
        description="This will permanently delete the department."
        onClose={() => setConfirmDelete(null)}
      >
        <div className="flex flex-wrap items-center justify-end gap-2">
          <Button variant="secondary" type="button" onClick={() => setConfirmDelete(null)}>
            Cancel
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
            Delete
          </Button>
        </div>
      </Modal>

      {canCreate ? (
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="text-sm font-semibold">New department</div>
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
              Name
              <input className="mt-2 h-10 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm" value={name} onChange={(e) => setName(e.target.value)} required />
            </label>
            <label className="block text-sm font-medium">
              Manager
              <select className="mt-2 h-10 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm" value={managerId} onChange={(e) => setManagerId(e.target.value)}>
                <option value="">—</option>
                {profiles.map((p) => (
                  <option key={p.id} value={p.id}>
                    {(p.firstName || p.email) + (p.lastName ? ` ${p.lastName}` : '')}
                  </option>
                ))}
              </select>
            </label>
            <div className="flex items-end">
              <Button className="w-full" disabled={pending} type="submit">
                {pending ? '...' : 'Create'}
              </Button>
            </div>
            {error ? <div className="md:col-span-3 rounded-md border border-[#ff818266] bg-[#ffebe9] px-3 py-2 text-sm text-[#cf222e]">{error}</div> : null}
          </form>
        </div>
      ) : null}

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <table className="w-full text-right text-sm">
          <thead className="bg-[#f6f8fa] text-[#656d76]">
            <tr>
              <th className="px-3 py-2 font-medium">Name</th>
              <th className="px-3 py-2 font-medium">Manager</th>
              <th className="px-3 py-2 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((d) => (
              <tr key={d.id} className="border-t border-[#d0d7de]">
                <td className="px-3 py-2 font-semibold">{d.name}</td>
                <td className="px-3 py-2">{d.manager ? (d.manager.firstName || d.manager.email) : '—'}</td>
                <td className="px-3 py-2">
                  <div className="flex gap-2">
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
                        Edit
                      </Button>
                    ) : null}
                    {canDelete ? (
                      <Button size="sm" variant="danger" type="button" onClick={() => setConfirmDelete(d)}>
                        Delete
                      </Button>
                    ) : null}
                  </div>
                </td>
              </tr>
            ))}
            {rows.length === 0 ? (
              <tr>
                <td className="px-3 py-6 text-center text-sm text-[#656d76]" colSpan={3}>
                  No departments
                </td>
              </tr>
            ) : null}
          </tbody>
        </table>
      </div>
    </div>
  )
}

