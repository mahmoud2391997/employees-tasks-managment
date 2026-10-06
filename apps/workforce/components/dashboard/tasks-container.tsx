'use client'

import { useTranslations } from '@/lib/i18n/provider'

import { useMemo, useState } from 'react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Modal } from '@/components/ui/modal'
import { Select } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'

type Department = { id: string; name: string }
type Profile = { id: string; firstName: string | null; lastName: string | null; email: string | null }
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
  initialTotal,
  initialHasMore,
  departments,
  profiles,
  currentProfileId,
  permissions,
}: {
  initialTasks: Task[]
  initialTotal: number
  initialHasMore: boolean
  departments: Department[]
  profiles: Profile[]
  currentProfileId: string
  permissions: string[]
}) {
  const tr = useTranslations()

  const [tasks, setTasks] = useState<Task[]>(initialTasks)
  const [total, setTotal] = useState<number>(initialTotal)
  const [hasMore, setHasMore] = useState<boolean>(initialHasMore)
  const [loadingMore, setLoadingMore] = useState(false)
  const [error, setError] = useState<string | null>(null)
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

  const apiTake = 50

  async function refresh() {
    const res = await fetch(`/api/tasks?take=${apiTake}&skip=0`, { cache: 'no-store' })
    const json = (await res.json().catch(() => null)) as
      | { success?: boolean; data?: Task[]; total?: number; hasMore?: boolean }
      | null
    if (res.ok && json?.success) {
      const next = json.data ?? []
      setTasks(next)
      setTotal(Number(json.total ?? next.length))
      setHasMore(Boolean(json.hasMore))
    }
  }

  async function loadMore() {
    if (!hasMore || loadingMore) return
    setLoadingMore(true)
    const res = await fetch(`/api/tasks?take=${apiTake}&skip=${tasks.length}`, { cache: 'no-store' })
    const json = (await res.json().catch(() => null)) as
      | { success?: boolean; data?: Task[]; total?: number; hasMore?: boolean }
      | null
    setLoadingMore(false)
    if (res.ok && json?.success) {
      const next = json.data ?? []
      setTasks((prev) => [...prev, ...next])
      setTotal(Number(json.total ?? total))
      setHasMore(Boolean(json.hasMore))
    }
  }

  async function mutateTask(id: string, method: 'PATCH' | 'DELETE', patch?: Partial<Task>) {
    setError(null)
    try {
      const res = await fetch(`/api/tasks/${id}`, {
        method,
        headers: { 'content-type': 'application/json' },
        body: patch ? JSON.stringify(patch) : undefined,
      })
      const json = await res.json().catch(() => null) as { success?: boolean; message?: string } | null
      if (!res.ok || !json?.success) {
        setError(tr(json?.message ?? "تعذر حفظ التغيير، حاول مرة أخرى"))
        return
      }
      if (method === 'DELETE') {
        setTasks((prev) => prev.filter((task) => task.id !== id))
        setTotal((prev) => Math.max(0, prev - 1))
      } else {
        setTasks((prev) => prev.map((task) => task.id === id ? { ...task, ...patch } : task))
      }
    } catch {
      setError(tr("تعذر الاتصال بالخادم، حاول مرة أخرى"))
    }
  }

  async function updateTask(id: string, patch: Partial<Task>) {
    await mutateTask(id, 'PATCH', patch)
  }

  async function deleteTask(id: string) {
    await mutateTask(id, 'DELETE')
  }

  return (
    <div className="space-y-4">
      {error ? <p role="alert" className="rounded-xl bg-red-50 p-3 text-sm text-red-700">{error}</p> : null}
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
            <option value="">{tr("كل الأقسام")}</option>
            {departments.map((d) => (
              <option key={d.id} value={d.id}>
                {d.name}
              </option>
            ))}
          </Select>
          <Select className="w-auto" value={filterAssignee} onChange={(e) => setFilterAssignee(e.target.value as any)}>
            <option value="all">{tr("كل المهام")}</option>
            <option value="me">{tr("المسندة لي")}</option>
            <option value="by_me">{tr("التي أنشأتها")}</option>
          </Select>
        </div>
        {canCreate ? (
          <Button type="button" onClick={() => { setEditing(null); setShowForm(true) }}>
            {tr("+ إضافة مهمة")}</Button>
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
              const draggedTask = tasks.find((x) => x.id === taskId)
              if (!draggedTask || draggedTask.status === col.id) return
              if (!canEdit) return
              await updateTask(taskId, { status: col.id } as any)
            }}
          >
            <div className="mb-3 flex items-center justify-between">
              <div className="text-sm font-semibold">{tr(col.label)}</div>
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
                            {tr("تعديل")}</Button>
                        ) : null}
                        {canDelete ? (
                          <Button size="sm" variant="danger" type="button" onClick={() => deleteTask(t.id)}>
                            {tr("حذف")}</Button>
                        ) : null}
                      </div>
                    </div>

                    <div className="mt-2 flex flex-wrap gap-2 text-xs">
                      <Badge variant="neutral">{tr(t.priority)}</Badge>
                      {t.department?.name ? <Badge variant="neutral">{t.department.name}</Badge> : null}
                      {t.assignee ? (
                        <Badge variant="info">
                          {(t.assignee.firstName || t.assignee.email || tr("مستخدم")) + (t.assignee.lastName ? ` ${t.assignee.lastName}` : '')}
                        </Badge>
                      ) : null}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>

      <Card className="p-3">
        <div className="flex flex-wrap items-center justify-between gap-3 text-sm text-slate-600">
          <div>
            {tr("تم تحميل")}{tasks.length} {tr("من")}{total}
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
  const tr = useTranslations()

  const [title, setTitle] = useState(task?.title ?? '')
  const [description, setDescription] = useState(task?.description ?? '')
  const [departmentId, setDepartmentId] = useState(task?.departmentId ?? '')
  const [assigneeId, setAssigneeId] = useState(task?.assigneeId ?? '')
  const [priority, setPriority] = useState<Task['priority']>(task?.priority ?? 'MEDIUM')
  const [status, setStatus] = useState<Task['status']>(task?.status ?? 'TODO')
  const [dueDate, setDueDate] = useState(task?.dueDate ? new Date(task.dueDate).toISOString().slice(0, 10) : '')
  const [pending, setPending] = useState(false)
  const [error, setError] = useState('')

  return (
    <Modal open title={task ? tr("تعديل مهمة") : tr("مهمة جديدة")} onClose={onClose}>
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
            setError(tr(json?.message || "تعذر الحفظ"))
            return
          }
          onSaved()
        }}
      >
        <label className="block text-sm font-medium md:col-span-2">
          {tr("العنوان")}<Input className="mt-2" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </label>
        <label className="block text-sm font-medium md:col-span-2">
          {tr("الوصف")}<Textarea className="mt-2" value={description} onChange={(e) => setDescription(e.target.value)} />
        </label>
        <label className="block text-sm font-medium">
          {tr("القسم")}<Select className="mt-2" value={departmentId} onChange={(e) => setDepartmentId(e.target.value)}>
            <option value="">—</option>
            {departments.map((d) => (
              <option key={d.id} value={d.id}>
                {d.name}
              </option>
            ))}
          </Select>
        </label>
        <label className="block text-sm font-medium">
          {tr("المسؤول")}<Select className="mt-2" value={assigneeId} disabled={!canAssign} onChange={(e) => setAssigneeId(e.target.value)}>
            <option value="">—</option>
            {profiles.map((p) => (
              <option key={p.id} value={p.id}>
                {(p.firstName || p.email || tr("مستخدم")) + (p.lastName ? ` ${p.lastName}` : '')}
              </option>
            ))}
          </Select>
        </label>
        <label className="block text-sm font-medium">
          {tr("الأولوية")}<Select className="mt-2" value={priority} onChange={(e) => setPriority(e.target.value as any)}>
            <option value="LOW">{tr('LOW')}</option>
            <option value="MEDIUM">{tr('MEDIUM')}</option>
            <option value="HIGH">{tr('HIGH')}</option>
            <option value="URGENT">{tr('URGENT')}</option>
          </Select>
        </label>
        <label className="block text-sm font-medium">
          {tr("الحالة")}<Select className="mt-2" value={status} onChange={(e) => setStatus(e.target.value as any)}>
            <option value="TODO">{tr('TODO')}</option>
            <option value="IN_PROGRESS">{tr('IN_PROGRESS')}</option>
            <option value="REVIEW">{tr('REVIEW')}</option>
            <option value="COMPLETED">{tr('COMPLETED')}</option>
          </Select>
        </label>
        <label className="block text-sm font-medium">
          {tr("تاريخ الاستحقاق")}<Input className="mt-2" type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
        </label>

        {error ? <div className="md:col-span-2 rounded-md border border-[#ff818266] bg-[#ffebe9] px-3 py-2 text-sm text-[#cf222e]">{error}</div> : null}
        <Button className="md:col-span-2 w-full" disabled={pending} type="submit">
          {pending ? '...' : tr("حفظ")}
        </Button>
      </form>
    </Modal>
  )
}

