'use client'

import { useMemo, useState } from 'react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Modal } from '@/components/ui/modal'
import { Select } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'

type Department = { id: string; name: string }
type Profile = { id: string; firstName: string | null; lastName: string | null; email: string }
type Task = {
  id: string
  title: string
  description: string | null
  priority: 'LOW' | 'MEDIUM' | 'HIGH' | 'URGENT'
  status: 'TODO' | 'IN_PROGRESS' | 'REVIEW' | 'COMPLETED'
  departmentId: string | null
  assigneeId: string | null
  createdById: string | null
  dueDate: string | null
  department?: Department | null
  assignee?: Profile | null
  creator?: Profile | null
}

const statusColumns: Array<{ id: Task['status']; label: string; surface: string }> = [
  { id: 'TODO', label: 'قيد الانتظار', surface: 'bg-slate-50' },
  { id: 'IN_PROGRESS', label: 'قيد العمل', surface: 'bg-blue-50/60' },
  { id: 'REVIEW', label: 'للمراجعة', surface: 'bg-amber-50/60' },
  { id: 'COMPLETED', label: 'مكتملة', surface: 'bg-emerald-50/60' },
]

export function TasksContainer({
  initialTasks,
  departments,
  profiles,
  currentProfileId,
  permissions,
}: {
  initialTasks: Task[]
  departments: Department[]
  profiles: Profile[]
  currentProfileId: string
  permissions: string[]
}) {
  const [tasks, setTasks] = useState<Task[]>(initialTasks)
  const [filterDept, setFilterDept] = useState('')
  const [filterAssignee, setFilterAssignee] = useState<'all' | 'me' | 'by_me'>('all')

  const [showForm, setShowForm] = useState(false)
  const [editing, setEditing] = useState<Task | null>(null)

  const canCreate = permissions.includes('tasks.create')
  const canEdit = permissions.includes('tasks.edit')
  const canDelete = permissions.includes('tasks.delete')
  const canAssign = permissions.includes('tasks.assign')

  const filtered = useMemo(() => {
    return tasks.filter((t) => {
      if (filterDept && t.departmentId !== filterDept) return false
      if (filterAssignee === 'me' && t.assigneeId !== currentProfileId) return false
      if (filterAssignee === 'by_me' && t.createdById !== currentProfileId) return false
      return true
    })
  }, [tasks, filterDept, filterAssignee, currentProfileId])

  async function refresh() {
    const res = await fetch('/api/tasks', { cache: 'no-store' })
    const json = (await res.json().catch(() => null)) as { success?: boolean; data?: Task[] } | null
    if (res.ok && json?.success) setTasks(json.data ?? [])
  }

  async function updateTask(id: string, patch: Partial<Task>) {
    setTasks((prev) => prev.map((t) => (t.id === id ? ({ ...t, ...patch } as Task) : t)))
    await fetch(`/api/tasks/${id}`, { method: 'PATCH', headers: { 'content-type': 'application/json' }, body: JSON.stringify(patch) })
    await refresh()
  }

  async function deleteTask(id: string) {
    setTasks((prev) => prev.filter((t) => t.id !== id))
    await fetch(`/api/tasks/${id}`, { method: 'DELETE' })
    await refresh()
  }

  return (
    <div className="space-y-4">
      {showForm ? (
        <TaskForm
          task={editing}
          departments={departments}
          profiles={profiles}
          canAssign={canAssign}
          onClose={() => {
            setShowForm(false)
            setEditing(null)
          }}
          onSaved={async () => {
            setShowForm(false)
            setEditing(null)
            await refresh()
          }}
        />
      ) : null}

      <Card className="p-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <Select className="w-auto" value={filterDept} onChange={(e) => setFilterDept(e.target.value)}>
            <option value="">كل الأقسام</option>
            {departments.map((d) => (
              <option key={d.id} value={d.id}>
                {d.name}
              </option>
            ))}
          </Select>
          <Select className="w-auto" value={filterAssignee} onChange={(e) => setFilterAssignee(e.target.value as any)}>
            <option value="all">كل المهام</option>
            <option value="me">المسندة لي</option>
            <option value="by_me">التي أنشأتها</option>
          </Select>
        </div>
        {canCreate ? (
          <Button type="button" onClick={() => { setEditing(null); setShowForm(true) }}>
            + إضافة مهمة
          </Button>
        ) : null}
      </div>
      </Card>

      <div className="grid gap-4 lg:grid-cols-4">
        {statusColumns.map((col) => (
          <div
            key={col.id}
            className={`min-h-[28rem] rounded-2xl border border-slate-200 ${col.surface} p-3`}
            onDragOver={(e) => e.preventDefault()}
            onDrop={async (e) => {
              e.preventDefault()
              const taskId = e.dataTransfer.getData('text/plain')
              const t = tasks.find((x) => x.id === taskId)
              if (!t || t.status === col.id) return
              if (!canEdit) return
              await updateTask(taskId, { status: col.id } as any)
            }}
          >
            <div className="mb-3 flex items-center justify-between">
              <div className="text-sm font-semibold">{col.label}</div>
              <div className="text-xs text-slate-500">({filtered.filter((t) => t.status === col.id).length})</div>
            </div>

            <div className="space-y-2">
              {filtered
                .filter((t) => t.status === col.id)
                .map((t) => (
                  <div
                    key={t.id}
                    draggable={canEdit}
                    onDragStart={(e) => e.dataTransfer.setData('text/plain', t.id)}
                    className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0">
                        <div className="truncate font-semibold">{t.title}</div>
                        {t.description ? <div className="mt-1 line-clamp-2 text-xs text-slate-500">{t.description}</div> : null}
                      </div>
                      <div className="flex shrink-0 gap-1">
                        {canEdit ? (
                          <Button size="sm" variant="secondary" type="button" onClick={() => { setEditing(t); setShowForm(true) }}>
                            تعديل
                          </Button>
                        ) : null}
                        {canDelete ? (
                          <Button size="sm" variant="danger" type="button" onClick={() => deleteTask(t.id)}>
                            حذف
                          </Button>
                        ) : null}
                      </div>
                    </div>

                    <div className="mt-2 flex flex-wrap gap-2 text-xs">
                      <Badge variant="neutral">{t.priority}</Badge>
                      {t.department?.name ? <Badge variant="neutral">{t.department.name}</Badge> : null}
                      {t.assignee ? (
                        <Badge variant="info">
                          {(t.assignee.firstName || t.assignee.email) + (t.assignee.lastName ? ` ${t.assignee.lastName}` : '')}
                        </Badge>
                      ) : null}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function TaskForm({
  task,
  departments,
  profiles,
  canAssign,
  onClose,
  onSaved,
}: {
  task: Task | null
  departments: Department[]
  profiles: Profile[]
  canAssign: boolean
  onClose: () => void
  onSaved: () => void
}) {
  const [title, setTitle] = useState(task?.title ?? '')
  const [description, setDescription] = useState(task?.description ?? '')
  const [departmentId, setDepartmentId] = useState(task?.departmentId ?? '')
  const [assigneeId, setAssigneeId] = useState(task?.assigneeId ?? '')
  const [priority, setPriority] = useState<Task['priority']>(task?.priority ?? 'MEDIUM')
  const [status, setStatus] = useState<Task['status']>(task?.status ?? 'TODO')
  const [dueDate, setDueDate] = useState(task?.dueDate?.slice(0, 10) ?? '')
  const [pending, setPending] = useState(false)
  const [error, setError] = useState('')

  return (
    <Modal open title={task ? 'تعديل مهمة' : 'مهمة جديدة'} onClose={onClose}>
      <form className="grid gap-3 md:grid-cols-2"
        onSubmit={async (e) => {
          e.preventDefault()
          setPending(true)
          setError('')
          const body = {
            title,
            description: description || undefined,
            departmentId: departmentId || undefined,
            assigneeId: canAssign ? assigneeId || undefined : undefined,
            priority,
            status,
            dueDate: dueDate || undefined,
          }
          const res = await fetch(task ? `/api/tasks/${task.id}` : '/api/tasks', {
            method: task ? 'PATCH' : 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(body),
          })
          const json = (await res.json().catch(() => null)) as { success?: boolean; message?: string } | null
          setPending(false)
          if (!res.ok || !json?.success) {
            setError(json?.message || 'تعذر الحفظ')
            return
          }
          onSaved()
        }}
      >
        <label className="block text-sm font-medium md:col-span-2">
          العنوان
          <Input className="mt-2" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </label>
        <label className="block text-sm font-medium md:col-span-2">
          الوصف
          <Textarea className="mt-2" value={description} onChange={(e) => setDescription(e.target.value)} />
        </label>
        <label className="block text-sm font-medium">
          القسم
          <Select className="mt-2" value={departmentId} onChange={(e) => setDepartmentId(e.target.value)}>
            <option value="">—</option>
            {departments.map((d) => (
              <option key={d.id} value={d.id}>
                {d.name}
              </option>
            ))}
          </Select>
        </label>
        <label className="block text-sm font-medium">
          المسؤول
          <Select className="mt-2" value={assigneeId} disabled={!canAssign} onChange={(e) => setAssigneeId(e.target.value)}>
            <option value="">—</option>
            {profiles.map((p) => (
              <option key={p.id} value={p.id}>
                {(p.firstName || p.email) + (p.lastName ? ` ${p.lastName}` : '')}
              </option>
            ))}
          </Select>
        </label>
        <label className="block text-sm font-medium">
          الأولوية
          <Select className="mt-2" value={priority} onChange={(e) => setPriority(e.target.value as any)}>
            <option value="LOW">LOW</option>
            <option value="MEDIUM">MEDIUM</option>
            <option value="HIGH">HIGH</option>
            <option value="URGENT">URGENT</option>
          </Select>
        </label>
        <label className="block text-sm font-medium">
          الحالة
          <Select className="mt-2" value={status} onChange={(e) => setStatus(e.target.value as any)}>
            <option value="TODO">TODO</option>
            <option value="IN_PROGRESS">IN_PROGRESS</option>
            <option value="REVIEW">REVIEW</option>
            <option value="COMPLETED">COMPLETED</option>
          </Select>
        </label>
        <label className="block text-sm font-medium">
          تاريخ الاستحقاق
          <Input className="mt-2" type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
        </label>

        {error ? <div className="md:col-span-2 rounded-md border border-[#ff818266] bg-[#ffebe9] px-3 py-2 text-sm text-[#cf222e]">{error}</div> : null}
        <Button className="md:col-span-2 w-full" disabled={pending} type="submit">
          {pending ? '...' : 'حفظ'}
        </Button>
      </form>
    </Modal>
  )
}

