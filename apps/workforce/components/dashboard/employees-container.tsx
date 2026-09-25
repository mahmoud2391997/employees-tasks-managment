'use client'

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
type Profile = { id: string; firstName: string | null; lastName: string | null; email: string }
type Employee = {
  id: string
  profileId: string
  departmentId: string | null
  position: string | null
  joinDate: string | null
  salary: string | null
  status: 'ACTIVE' | 'INACTIVE' | 'ON_LEAVE' | 'TERMINATED'
  managerId: string | null
  profile: { id: string; email: string; firstName: string | null; lastName: string | null; role: string; teamId: string | null }
  department?: Department | null
  manager?: Profile | null
}

export function EmployeesContainer({
  initialEmployees,
  departments,
  profiles,
  permissions,
}: {
  initialEmployees: Employee[]
  departments: Department[]
  profiles: Profile[]
  permissions: string[]
}) {
  const [employees, setEmployees] = useState<Employee[]>(initialEmployees)
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
      const email = e.profile.email.toLowerCase()
      const position = (e.position ?? '').toLowerCase()
      const dept = (e.department?.name ?? '').toLowerCase()
      return name.includes(query) || email.includes(query) || position.includes(query) || dept.includes(query)
    })
  }, [employees, q])

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize))
  const currentPage = Math.min(page, totalPages)
  const pageRows = filtered.slice((currentPage - 1) * pageSize, currentPage * pageSize)

  async function refresh() {
    const res = await fetch('/api/employees', { cache: 'no-store' })
    const json = (await res.json().catch(() => null)) as { success?: boolean; data?: Employee[] } | null
    if (res.ok && json?.success) setEmployees(json.data ?? [])
  }

  async function deleteEmployee(id: string) {
    if (!canDelete) return
    await fetch(`/api/employees/${id}`, { method: 'DELETE' })
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

      <Card className="p-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="w-full max-w-sm">
            <Input
              placeholder="ابحث عن موظف..."
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
              + إضافة موظف
            </Button>
          ) : null}
        </div>
      </Card>

      <TableWrapper>
        <div className="overflow-x-auto">
          <Table>
          <THead>
            <tr>
              <TH className="min-w-72">الموظف</TH>
              <TH className="min-w-44">القسم</TH>
              <TH className="min-w-48">المسمى</TH>
              <TH className="min-w-32">الحالة</TH>
              <TH className="min-w-44 text-left">إجراءات</TH>
            </tr>
          </THead>
          <tbody>
            {pageRows.map((e) => (
              <tr key={e.id} className="border-t border-slate-100 hover:bg-slate-50/60">
                <TD>
                  <div className="font-semibold">
                    {(e.profile.firstName || e.profile.email) + (e.profile.lastName ? ` ${e.profile.lastName}` : '')}
                  </div>
                  <div className="ltr text-xs text-[#656d76]">{e.profile.email}</div>
                </TD>
                <TD>{e.department?.name ?? '—'}</TD>
                <TD>{e.position ?? '—'}</TD>
                <TD>
                  <StatusBadge status={e.status} />
                </TD>
                <TD className="text-left">
                  <div className="flex justify-start gap-2">
                    <Link
                      className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50"
                      href={`/employees/${e.id}`}
                    >
                      عرض
                    </Link>
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
                        تعديل
                      </Button>
                    ) : null}
                    {canDelete ? (
                      <Button
                        size="sm"
                        variant="danger"
                        type="button"
                        onClick={() => deleteEmployee(e.id)}
                      >
                        حذف
                      </Button>
                    ) : null}
                  </div>
                </TD>
              </tr>
            ))}
            {filtered.length === 0 ? (
              <tr>
                <td className="px-3 py-10 text-center text-sm text-slate-500" colSpan={5}>
                  لا يوجد موظفون
                </td>
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
            عرض {(currentPage - 1) * pageSize + 1}–{Math.min(currentPage * pageSize, filtered.length)} من {filtered.length}
          </div>
          <div className="flex items-center gap-2">
            <Button variant="secondary" size="sm" type="button" onClick={() => setPage(1)} disabled={currentPage === 1}>
              الأولى
            </Button>
            <Button variant="secondary" size="sm" type="button" onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={currentPage === 1}>
              السابق
            </Button>
            <div className="min-w-20 text-center text-xs text-slate-500">
              صفحة {currentPage} / {totalPages}
            </div>
            <Button
              variant="secondary"
              size="sm"
              type="button"
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
            >
              التالي
            </Button>
            <Button variant="secondary" size="sm" type="button" onClick={() => setPage(totalPages)} disabled={currentPage === totalPages}>
              الأخيرة
            </Button>
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
  const isEdit = Boolean(employee)

  const [email, setEmail] = useState(employee?.profile.email ?? '')
  const [firstName, setFirstName] = useState(employee?.profile.firstName ?? '')
  const [lastName, setLastName] = useState(employee?.profile.lastName ?? '')
  const [role, setRole] = useState(employee?.profile.role ?? 'EMPLOYEE')
  const [departmentId, setDepartmentId] = useState(employee?.departmentId ?? '')
  const [position, setPosition] = useState(employee?.position ?? '')
  const [joinDate, setJoinDate] = useState(employee?.joinDate?.slice(0, 10) ?? '')
  const [salary, setSalary] = useState(employee?.salary ?? '')
  const [status, setStatus] = useState<Employee['status']>(employee?.status ?? 'ACTIVE')
  const [managerId, setManagerId] = useState(employee?.managerId ?? '')

  const [pending, setPending] = useState(false)
  const [error, setError] = useState('')

  return (
    <Modal open title={isEdit ? 'تعديل موظف' : 'موظف جديد'} onClose={onClose}>
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
                role: role || undefined,
                departmentId: departmentId || undefined,
                position: position || undefined,
                joinDate: joinDate || undefined,
                salary: salary ? salary : undefined,
                status,
                managerId: managerId || undefined,
              }

          const res = await fetch(isEdit ? `/api/employees/${employee!.id}` : '/api/employees', {
            method: isEdit ? 'PATCH' : 'POST',
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
        {!isEdit ? (
          <>
            <label className="block text-sm font-medium md:col-span-2">
              البريد الإلكتروني
              <Input className="ltr mt-2" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </label>
            <label className="block text-sm font-medium">
              الاسم الأول
              <Input className="mt-2" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
            </label>
            <label className="block text-sm font-medium">
              الاسم الأخير
              <Input className="mt-2" value={lastName} onChange={(e) => setLastName(e.target.value)} />
            </label>
            <label className="block text-sm font-medium md:col-span-2">
              الدور
              <Input className="mt-2" value={role} onChange={(e) => setRole(e.target.value)} />
              <div className="mt-1 text-xs text-[#656d76]">استخدم دوراً افتراضياً (ADMIN/MANAGER/EMPLOYEE) أو اسم دور مخصص.</div>
            </label>
          </>
        ) : null}

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
        <label className="block text-sm font-medium">
          المسمى الوظيفي
          <Input className="mt-2" value={position} onChange={(e) => setPosition(e.target.value)} />
        </label>
        <label className="block text-sm font-medium">
          الحالة
          <Select className="mt-2" value={status} onChange={(e) => setStatus(e.target.value as any)}>
            <option value="ACTIVE">نشط</option>
            <option value="INACTIVE">غير نشط</option>
            <option value="ON_LEAVE">إجازة</option>
            <option value="TERMINATED">منتهي</option>
          </Select>
        </label>
        <label className="block text-sm font-medium">
          تاريخ الانضمام
          <Input className="mt-2" type="date" value={joinDate} onChange={(e) => setJoinDate(e.target.value)} />
        </label>
        <label className="block text-sm font-medium">
          الراتب (اختياري)
          <Input className="mt-2" inputMode="decimal" value={salary} onChange={(e) => setSalary(e.target.value)} />
        </label>

        {error ? <div className="md:col-span-2 rounded-md border border-[#ff818266] bg-[#ffebe9] px-3 py-2 text-sm text-[#cf222e]">{error}</div> : null}
        <Button className="md:col-span-2 w-full" disabled={pending} type="submit">
          {pending ? '...' : 'حفظ'}
        </Button>
      </form>
    </Modal>
  )
}

function StatusBadge({ status }: { status: Employee['status'] }) {
  const label =
    status === 'ACTIVE'
      ? 'نشط'
      : status === 'INACTIVE'
        ? 'غير نشط'
        : status === 'ON_LEAVE'
          ? 'إجازة'
          : 'منتهي'

  const variant = status === 'ACTIVE' ? 'success' : status === 'ON_LEAVE' ? 'warning' : status === 'TERMINATED' ? 'danger' : 'neutral'
  return <Badge variant={variant}>{label}</Badge>
}

