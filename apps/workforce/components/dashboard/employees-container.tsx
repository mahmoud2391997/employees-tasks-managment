'use client'

import { Search, Users, Plus } from 'lucide-react'
import { apiFetch } from '@/lib/api-fetch'

import { useTranslations } from '@/lib/i18n/provider'

import Link from 'next/link'
import { useMemo, useState } from 'react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Modal } from '@/components/ui/modal'
import { Select } from '@/components/ui/select'
import { Table, TableWrapper, TD, TH, THead } from '@/components/ui/table'

type Department = { id: string; name: string }
type Profile = { id: string; firstName: string | null; lastName: string | null; email: string | null }
type Employee = {
  id: string
  profileId: string
  departmentId: string | null
  position: string | null
  joinDate: string | null
  salary: string | null
  status: 'ACTIVE' | 'INACTIVE' | 'ON_LEAVE' | 'TERMINATED'
  managerId: string | null
  profile: { id: string; email: string | null; firstName: string | null; lastName: string | null; role: string; teamId: string | null }
  department?: Department | null
  manager?: (Omit<Profile, 'email'> & { email: string | null }) | null
}

export function EmployeesContainer({
  initialEmployees,
  initialTotal,
  initialHasMore,
  departments,
  profiles,
  permissions,
}: {
  initialEmployees: Employee[]
  initialTotal: number
  initialHasMore: boolean
  departments: Department[]
  profiles: Profile[]
  permissions: string[]
}) {
  const tr = useTranslations()

  const [employees, setEmployees] = useState<Employee[]>(initialEmployees)
  const [total, setTotal] = useState<number>(initialTotal)
  const [hasMore, setHasMore] = useState<boolean>(initialHasMore)
  const [loadingMore, setLoadingMore] = useState(false)
  const [q, setQ] = useState('')
  const [page, setPage] = useState(1)
  const pageSize = 10

  const [showForm, setShowForm] = useState(false)
  const [editing, setEditing] = useState<Employee | null>(null)

  const canCreate = permissions.includes('employees.create')
  const canEdit = permissions.includes('employees.edit')
  const canDelete = permissions.includes('employees.delete')

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase()
    if (!query) return employees
    return employees.filter((e) => {
      const name = `${e.profile.firstName ?? ''} ${e.profile.lastName ?? ''}`.trim().toLowerCase()
      const email = (e.profile.email ?? '').toLowerCase()
      const position = (e.position ?? '').toLowerCase()
      const dept = (e.department?.name ?? '').toLowerCase()
      return name.includes(query) || email.includes(query) || position.includes(query) || dept.includes(query)
    })
  }, [employees, q])

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize))
  const currentPage = Math.min(page, totalPages)
  const pageRows = filtered.slice((currentPage - 1) * pageSize, currentPage * pageSize)

  const apiTake = 50

  async function refresh() {
    const res = await apiFetch(`/api/employees?take=${apiTake}&skip=0`, { cache: 'no-store' })
    const json = (await res.json().catch(() => null)) as
      | { success?: boolean; data?: Employee[]; total?: number; hasMore?: boolean }
      | null
    if (res.ok && json?.success) {
      const next = json.data ?? []
      setEmployees(next)
      setTotal(Number(json.total ?? next.length))
      setHasMore(Boolean(json.hasMore))
      setPage(1)
    }
  }

  async function loadMore() {
    if (!hasMore || loadingMore) return
    setLoadingMore(true)
    const res = await apiFetch(`/api/employees?take=${apiTake}&skip=${employees.length}`, { cache: 'no-store' })
    const json = (await res.json().catch(() => null)) as
      | { success?: boolean; data?: Employee[]; total?: number; hasMore?: boolean }
      | null
    setLoadingMore(false)
    if (res.ok && json?.success) {
      const next = json.data ?? []
      setEmployees((prev) => [...prev, ...next])
      setTotal(Number(json.total ?? total))
      setHasMore(Boolean(json.hasMore))
    }
  }

  async function deleteEmployee(id: string) {
    if (!canDelete) return
    const res = await apiFetch(`/api/employees/${id}`, { method: 'DELETE' })
    if (!res.ok) {
      const json = await res.json().catch(() => null)
      window.alert(tr(json?.message || 'تعذر الحذف'))
      return
    }
    await refresh()
  }

  return (
    <div className="space-y-4">
      {showForm ? (
        <EmployeeForm
          employee={editing}
          departments={departments}
          profiles={profiles}
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

      <Card className="p-4 sm:p-5">
        <div className="mb-5 flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600"><Users size={20} /></span>
          <div><h2 className="text-sm font-semibold text-slate-800">{tr('دليل الفريق')}</h2><p className="mt-1 text-xs text-slate-400">{total} {tr('الموظفون')}</p></div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="relative w-full max-w-sm">
            <Search size={18} className="pointer-events-none absolute start-3 top-3 text-slate-400" />
            <Input
              className="ps-10"
              aria-label={tr("ابحث عن موظف...")}
              placeholder={tr("ابحث عن موظف...")}
              value={q}
              onChange={(e) => {
                setQ(e.target.value)
                setPage(1)
              }}
            />
          </div>
          {canCreate ? (
            <Button
              type="button"
              onClick={() => {
                setEditing(null)
                setShowForm(true)
              }}
            >
              <Plus size={17} />{tr("موظف جديد")}</Button>
          ) : null}
        </div>
      </Card>

      <TableWrapper>
        <div className="overflow-x-auto">
          <Table>
          <THead>
            <tr>
              <TH className="min-w-56">{tr("الموظف")}</TH>
              <TH className="min-w-32">{tr("القسم")}</TH>
              <TH className="min-w-40">{tr("المسمى")}</TH>
              <TH className="min-w-32">{tr("الحالة")}</TH>
              <TH className="min-w-32">{tr("إجراءات")}</TH>
            </tr>
          </THead>
          <tbody>
            {pageRows.map((e) => (
              <tr key={e.id} className="border-t border-slate-100 hover:bg-slate-50/60">
                <TD>
                  <div className="flex items-center gap-3">
                    <span aria-hidden="true" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-50 text-sm font-bold text-brand-600">{(e.profile.firstName || e.profile.email || '?').charAt(0)}{e.profile.lastName?.charAt(0)}</span>
                    <div className="min-w-0">
                      <div className="font-semibold text-slate-800">{(e.profile.firstName || e.profile.email || tr("مستخدم")) + (e.profile.lastName ? ` ${e.profile.lastName}` : '')}</div>
                      {e.profile.email ? <div dir="ltr" className="mt-1 text-start text-xs text-slate-400">{e.profile.email}</div> : null}
                    </div>
                  </div>
                </TD>
                <TD>{e.department?.name ?? '—'}</TD>
                <TD>{e.position ?? '—'}</TD>
                <TD>
                  <StatusBadge status={e.status} />
                </TD>
                <TD>
                  <div className="flex flex-wrap items-center justify-start gap-1.5">
                    <Link
                      className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50"
                      href={`/employees/${e.id}`}
                    >
                      {tr("عرض")}</Link>
                    {canEdit ? (
                      <Button
                        size="sm"
                        variant="secondary"
                        type="button"
                        onClick={() => {
                          setEditing(e)
                          setShowForm(true)
                        }}
                      >
                        {tr("تعديل")}</Button>
                    ) : null}
                    {canDelete ? (
                      <Button
                        size="sm"
                        variant="danger"
                        type="button"
                        onClick={() => deleteEmployee(e.id)}
                      >
                        {tr("حذف")}</Button>
                    ) : null}
                  </div>
                </TD>
              </tr>
            ))}
            {filtered.length === 0 ? (
              <tr>
                <td className="px-3 py-10 text-center text-sm text-slate-500" colSpan={5}>
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-slate-100"><Users size={22} /></div>{tr(q ? 'لا توجد نتائج مطابقة. جرب البحث باسم آخر.' : 'لا يوجد موظفون')}</td>
              </tr>
            ) : null}
          </tbody>
          </Table>
        </div>
      </TableWrapper>

      {filtered.length > 0 ? (
        <Card className="p-3">
          <div className="flex flex-wrap items-center justify-between gap-3 text-sm">
          <div className="text-slate-500">
            {tr("عرض")}{(currentPage - 1) * pageSize + 1}–{Math.min(currentPage * pageSize, filtered.length)} {tr("من")}{q.trim() ? filtered.length : total}
            {!q.trim() ? <span className="mr-2 text-xs"> {tr("(تم تحميل")}{' '}{employees.length})</span> : null}
          </div>
          <div className="flex items-center gap-2">
            <Button variant="secondary" size="sm" type="button" onClick={() => setPage(1)} disabled={currentPage === 1}>
              {tr("الأولى")}</Button>
            <Button variant="secondary" size="sm" type="button" onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={currentPage === 1}>
              {tr("السابق")}</Button>
            <div className="min-w-20 text-center text-xs text-slate-500">
              {tr("صفحة")}{' '}{currentPage} / {totalPages}
            </div>
            <Button
              variant="secondary"
              size="sm"
              type="button"
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
            >
              {tr("التالي")}</Button>
            <Button variant="secondary" size="sm" type="button" onClick={() => setPage(totalPages)} disabled={currentPage === totalPages}>
              {tr("الأخيرة")}</Button>
            {hasMore ? (
              <Button variant="secondary" size="sm" type="button" disabled={loadingMore} onClick={loadMore}>
                {loadingMore ? '...' : tr("تحميل المزيد")}
              </Button>
            ) : null}
          </div>
          </div>
        </Card>
      ) : null}
    </div>
  )
}

function EmployeeForm({
  employee,
  departments,
  profiles,
  onClose,
  onSaved,
}: {
  employee: Employee | null
  departments: Department[]
  profiles: Profile[]
  onClose: () => void
  onSaved: () => void
}) {
  const tr = useTranslations()

  const isEdit = Boolean(employee)

  const [email, setEmail] = useState(employee?.profile.email ?? '')
  const [firstName, setFirstName] = useState(employee?.profile.firstName ?? '')
  const [lastName, setLastName] = useState(employee?.profile.lastName ?? '')
  const [departmentId, setDepartmentId] = useState(employee?.departmentId ?? '')
  const [position, setPosition] = useState(employee?.position ?? '')
  const [joinDate, setJoinDate] = useState(employee?.joinDate ? new Date(employee.joinDate).toISOString().slice(0, 10) : '')
  const [salary, setSalary] = useState(employee?.salary ?? '')
  const [status, setStatus] = useState<Employee['status']>(employee?.status ?? 'ACTIVE')
  const [managerId, setManagerId] = useState(employee?.managerId ?? '')

  const [pending, setPending] = useState(false)
  const [error, setError] = useState('')

  return (
    <Modal open title={isEdit ? tr("تعديل موظف") : tr("موظف جديد")} onClose={onClose}>
      <form className="grid gap-3 md:grid-cols-2"
        onSubmit={async (e) => {
          e.preventDefault()
          setPending(true)
          setError('')

          const body = isEdit
            ? {
                departmentId: departmentId || null,
                position: position || null,
                joinDate: joinDate || null,
                salary: salary ? salary : null,
                status,
                managerId: managerId || null,
              }
            : {
                email,
                firstName,
                lastName: lastName || undefined,
                departmentId: departmentId || undefined,
                position: position || undefined,
                joinDate: joinDate || undefined,
                salary: salary ? salary : undefined,
                status,
                managerId: managerId || undefined,
              }

          const res = await apiFetch(isEdit ? `/api/employees/${employee!.id}` : '/api/employees', {
            method: isEdit ? 'PATCH' : 'POST',
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
        {!isEdit ? (
          <>
            <label className="block text-sm font-medium md:col-span-2">
              {tr("البريد الإلكتروني")}<Input className="ltr mt-2" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </label>
            <label className="block text-sm font-medium">
              {tr("الاسم الأول")}<Input className="mt-2" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
            </label>
            <label className="block text-sm font-medium">
              {tr("الاسم الأخير")}<Input className="mt-2" value={lastName} onChange={(e) => setLastName(e.target.value)} />
            </label>
          </>
        ) : null}

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
          {tr("المدير")}<Select className="mt-2" value={managerId} onChange={(e) => setManagerId(e.target.value)}>
            <option value="">—</option>
            {profiles.map((p) => (
              <option key={p.id} value={p.id}>
                {(p.firstName || p.email || tr("مستخدم")) + (p.lastName ? ` ${p.lastName}` : '')}
              </option>
            ))}
          </Select>
        </label>
        <label className="block text-sm font-medium">
          {tr("المسمى الوظيفي")}<Input className="mt-2" value={position} onChange={(e) => setPosition(e.target.value)} />
        </label>
        <label className="block text-sm font-medium">
          {tr("الحالة")}<Select className="mt-2" value={status} onChange={(e) => setStatus(e.target.value as any)}>
            <option value="ACTIVE">{tr("نشط")}</option>
            <option value="INACTIVE">{tr("غير نشط")}</option>
            <option value="ON_LEAVE">{tr("إجازة")}</option>
            <option value="TERMINATED">{tr("منتهي")}</option>
          </Select>
        </label>
        <label className="block text-sm font-medium">
          {tr("تاريخ الانضمام")}<Input className="mt-2" type="date" value={joinDate} onChange={(e) => setJoinDate(e.target.value)} />
        </label>
        <label className="block text-sm font-medium">
          {tr("الراتب (اختياري)")}<Input className="mt-2" inputMode="decimal" value={salary} onChange={(e) => setSalary(e.target.value)} />
        </label>

        {error ? <div className="md:col-span-2 rounded-md border border-[#ff818266] bg-[#ffebe9] px-3 py-2 text-sm text-[#cf222e]">{error}</div> : null}
        <Button className="md:col-span-2 w-full" disabled={pending} type="submit">
          {pending ? '...' : tr("حفظ")}
        </Button>
      </form>
    </Modal>
  )
}

function StatusBadge({ status }: { status: Employee['status'] }) {
  const tr = useTranslations()

  const label =
    status === 'ACTIVE'
      ? tr("نشط")
      : status === 'INACTIVE'
        ? tr("غير نشط")
        : status === 'ON_LEAVE'
          ? tr("إجازة")
          : tr("منتهي")

  const variant = status === 'ACTIVE' ? 'success' : status === 'ON_LEAVE' ? 'warning' : status === 'TERMINATED' ? 'danger' : 'neutral'
  return <Badge variant={variant}>{label}</Badge>
}

