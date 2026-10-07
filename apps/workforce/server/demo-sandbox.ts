import { cookies } from 'next/headers'
import { NextResponse, type NextRequest } from 'next/server'
import { ALL_PERMISSIONS } from '@/lib/permissions'
import { FALLBACK_ADMIN_ID, FALLBACK_COMPANY_ID } from '@/lib/sample-identity'
import { getVirtualCompany, servesVirtualDemoData } from '@/server/virtual-data'

export async function getDemoCompany(req?: NextRequest) {
  const key = req ? req.cookies?.get('wf_demo')?.value : (await cookies()).get('wf_demo')?.value
  return getVirtualCompany(key)
}

// Inputs have already passed the production route's Zod schema and authentication.
export async function demoMutation(req: NextRequest, userId: string, resource: string, input: Record<string, unknown> = {}, id?: string) {
  if (userId !== FALLBACK_ADMIN_ID) return null
  const fail = (message: string, status = 400) => NextResponse.json({ success: false, message }, { status })
  if (!servesVirtualDemoData(userId)) return fail('العرض التجريبي غير متاح', 403)
  if (!req.cookies?.get('wf_demo')?.value) return fail('ابدأ عرضاً تجريبياً جديداً', 403)
  const company = await getDemoCompany(req)
  // Collections have different shapes; relationships are hydrated below before returning.
  const collections: Record<string, Array<Record<string, any>>> = {
    employees: company.employees, tasks: company.tasks, departments: company.departments,
    roles: company.roles, members: company.members, invitations: company.invitations,
  }
  const data = { ...input }
  const now = new Date().toISOString()
  for (const field of ['dueDate', 'joinDate']) {
    if (data[field] && Number.isNaN(new Date(String(data[field])).valueOf())) return fail(`${field} غير صحيح`)
  }
  for (const [field, rows] of [['departmentId', company.departments], ['managerId', company.profiles], ['assigneeId', company.profiles]] as const) {
    if (data[field] && !rows.some(row => row.id === data[field])) return fail('معرّف غير صحيح')
  }
  if (resource === 'accept') {
    const invitation = company.invitations.find(row => row.token === data.token)
    if (!invitation) return fail('الدعوة غير موجودة', 404)
    if (invitation.acceptedAt) return fail('تم قبول الدعوة مسبقاً', 409)
    if (invitation.expiresAt && Date.parse(invitation.expiresAt) < Date.now()) return fail('انتهت صلاحية الدعوة', 410)
    const profile = { ...company.admin, id: crypto.randomUUID(), email: invitation.email, firstName: String(data.firstName), lastName: String(data.lastName || ''), role: invitation.role, createdAt: now, updatedAt: now }
    company.profiles.unshift(profile)
    company.members.unshift({ id: crypto.randomUUID(), userId: crypto.randomUUID(), teamId: FALLBACK_COMPANY_ID, role: invitation.role, isActive: true, createdAt: now, updatedAt: now, user: { id: crypto.randomUUID(), email: invitation.email, profile } })
    invitation.acceptedAt = now
    return NextResponse.json({ success: true })
  }
  if (resource === 'invite') {
    const email = String(data.email).toLowerCase().trim()
    const role = String(data.role || 'EMPLOYEE').toUpperCase().replace(/\s+/g, '_')
    if (!company.roles.some(row => row.name === role)) return fail('الدور غير موجود')
    if (company.members.some(row => row.user.email === email)) return fail('هذا المستخدم عضو بالفعل', 409)
    if (company.invitations.some(row => row.email === email)) return fail('تم إرسال دعوة مسبقاً لهذا البريد', 409)
    const invitation = { id: crypto.randomUUID(), teamId: FALLBACK_COMPANY_ID, email, role, token: crypto.randomUUID(), expiresAt: new Date(Date.now() + 604800000).toISOString(), invitedById: company.admin.id, acceptedAt: null, createdAt: now, updatedAt: now, invitedBy: company.admin }
    company.invitations.unshift(invitation)
    return NextResponse.json({ success: true, data: { invitation, inviteUrl: `${req.nextUrl.origin}/invite/${invitation.token}`, emailSent: false } })
  }
  if (resource === 'reactivate') {
    const member = company.members.find(row => row.user.email === String(data.email).toLowerCase().trim())
    if (!member) return fail('غير موجود', 404)
    member.isActive = true
    return NextResponse.json({ success: true, data: member })
  }
  const rows = collections[resource]
  if (!rows) return fail('غير موجود', 404)
  let row = id ? rows.find(row => row.id === id) : undefined
  if (id && !row) return fail('غير موجود', 404)
  if (resource === 'roles') {
    if (row && ['ADMIN', 'MANAGER', 'EMPLOYEE'].includes(row.name)) return fail('لا يمكن تعديل هذا الدور')
    if (data.name) {
      data.name = String(data.name).toUpperCase().replace(/\s+/g, '_')
      if (!/^[A-Z][A-Z0-9_]*$/.test(String(data.name))) return fail('اسم الدور غير صحيح')
      if (rows.some(row => row.name === data.name)) return fail('اسم الدور مستخدم', 409)
    }
    if (Array.isArray(data.permissions)) data.permissions = data.permissions.filter(permission => ALL_PERMISSIONS.includes(permission))
  }
  if (resource === 'members' && row) {
    if (req.method === 'DELETE' && row.userId === FALLBACK_ADMIN_ID) return fail('لا يمكن إزالة مالك الفريق')
    if (data.role) {
      data.role = String(data.role).toUpperCase().replace(/\s+/g, '_')
      if (!company.roles.some(role => role.name === data.role)) return fail('الدور غير موجود')
    }
  }
  if (req.method === 'DELETE') {
    if (resource === 'members') row!.isActive = false
    else {
      rows.splice(rows.indexOf(row!), 1)
      if (resource === 'departments') {
        for (const related of [...company.tasks, ...company.employees]) {
          if (related.departmentId === id) { related.departmentId = null as any; related.department = null as any }
        }
      }
    }
    return NextResponse.json({ success: true, ...(resource === 'members' ? { data: row } : {}) })
  }
  if (!row) {
    row = { id: crypto.randomUUID(), teamId: FALLBACK_COMPANY_ID, createdAt: now }
    if (resource === 'employees') {
      const email = String(data.email).toLowerCase().trim()
      if (company.employees.some(employee => employee.profile.email === email)) return fail('هذا البريد مرتبط بموظف', 409)
      let profile = company.profiles.find(profile => profile.email === email)
      if (!profile) {
        profile = { ...company.admin, id: crypto.randomUUID(), email, firstName: String(data.firstName), lastName: String(data.lastName || ''), role: 'EMPLOYEE', createdAt: now, updatedAt: now }
        company.profiles.unshift(profile)
      }
      Object.assign(row, { profileId: profile.id, profile, departmentId: null, managerId: null, position: null, joinDate: null, salary: null, status: 'ACTIVE' })
      delete data.email; delete data.firstName; delete data.lastName
    }
    if (resource === 'tasks') Object.assign(row, { createdById: company.admin.id, creator: company.admin, status: 'TODO', priority: 'MEDIUM', description: null, dueDate: null, departmentId: null, assigneeId: null })
    if (resource === 'departments') Object.assign(row, { icon: null, managerId: null })
    if (resource === 'roles') row.permissions = []
    rows.unshift(row)
  }
  Object.assign(row, data, { updatedAt: now })
  if ('salary' in data && data.salary !== null) row.salary = String(data.salary)
  if (resource === 'tasks' || resource === 'employees') row.department = company.departments.find(department => department.id === row!.departmentId) ?? null
  if (resource === 'tasks') row.assignee = company.profiles.find(profile => profile.id === row!.assigneeId) ?? null
  if (resource === 'employees' || resource === 'departments') row.manager = company.profiles.find(profile => profile.id === row!.managerId) ?? null
  if (resource === 'members' && data.role && row.user.profile) row.user.profile.role = data.role
  return NextResponse.json({ success: true, data: row })
}
