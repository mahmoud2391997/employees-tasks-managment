import { BRAND } from '@/lib/brand'
import { isDemoModeEnabled } from '@/lib/demo-config'
import { DEFAULT_ROLES } from '@/lib/permissions'
import { FALLBACK_ADMIN_ID, FALLBACK_ADMIN_PROFILE_ID, FALLBACK_COMPANY_ID } from '@/lib/sample-identity'

export const VIRTUAL_DB_UNAVAILABLE_MESSAGE = 'قاعدة البيانات غير متاحة حالياً'
export const VIRTUAL_READONLY_MESSAGE = 'وضع الدخول الافتراضي يعرض بيانات تجريبية للقراءة فقط'
export const VIRTUAL_SAMPLE_NOTE = 'بيانات تجريبية تفاعلية. التغييرات مؤقتة ولا تؤثر على بيانات الشركة.'

function adminEmail() {
  return 'demo@riwaq.invalid'
}

function companyName() {
  return BRAND.name
}

export function isVirtualAdmin(userId: string | null | undefined) {
  return userId === FALLBACK_ADMIN_ID
}

/** Only the public sample identity can receive virtual records. */
export function servesVirtualDemoData(userId: string | null | undefined) {
  return isVirtualAdmin(userId) && isDemoModeEnabled()
}

type Gate = { kind: 'skip' } | { kind: 'unavailable' } | { kind: 'dummy' }

export function virtualReadGate(userId: string | null | undefined): Gate {
  if (!isVirtualAdmin(userId)) return { kind: 'skip' }
  if (!isDemoModeEnabled()) return { kind: 'unavailable' }
  return { kind: 'dummy' }
}

type Profile = {
  id: string
  email: string
  firstName: string
  lastName: string
  role: string
  teamId: string
  createdAt: string
  updatedAt: string
}

type Department = {
  id: string
  teamId: string
  name: string
  icon: string | null
  managerId: string | null
  manager: Profile | null
  createdAt: string
  updatedAt: string
}

export function createVirtualCompany() {
  // Anchor each new sandbox to today so recordings keep useful due-date scenarios.
  const base = new Date()
  base.setUTCHours(12, 0, 0, 0)
  const iso = (days: number) => new Date(base.getTime() + days * 86400000).toISOString()
  const email = adminEmail()
  const admin: Profile = {
    id: FALLBACK_ADMIN_PROFILE_ID, email, firstName: 'نور', lastName: 'منصور',
    role: 'ADMIN', teamId: FALLBACK_COMPANY_ID, createdAt: iso(-90), updatedAt: iso(0),
  }
  // All names and addresses are fictional; .invalid addresses cannot deliver mail.
  const office = [
    { key: 'engineering', name: 'التقنية · Engineering', people: [['آدم', 'حسن', 'مدير التقنية'], ['ليلى', 'عمر', 'مهندسة واجهات'], ['يوسف', 'عادل', 'مهندس برمجيات']], work: ['إطلاق بوابة الفريق · Team portal', 'تحسين تجربة الجوال · Mobile experience', 'مراجعة جودة الإصدار · Release quality', 'تحديث دليل التكامل · Integration guide', 'اختبار الأداء · Performance testing', 'تجهيز الإصدار القادم · Next release'] },
    { key: 'design', name: 'التصميم · Design', people: [['مريم', 'سالم', 'مديرة التصميم'], ['كريم', 'نادر', 'مصمم منتجات'], ['هنا', 'سعيد', 'باحثة تجربة المستخدم']], work: ['تصميم مساحة الفريق · Team workspace', 'مراجعة رحلة المستخدم · User journey', 'تسليم مكتبة المكونات · Component library', 'توحيد قوالب العرض · Presentation templates', 'اختبار سهولة الاستخدام · Usability study', 'تصميم صفحة الترحيب · Welcome screen'] },
    { key: 'operations', name: 'العمليات · Operations', people: [['عمر', 'فؤاد', 'مدير العمليات'], ['دينا', 'ماهر', 'منسقة عمليات'], ['زياد', 'أمين', 'محلل عمليات']], work: ['تخطيط الأسبوع · Weekly planning', 'تحديث إجراءات العمل · Work procedures', 'مراجعة مؤشرات الأداء · KPI review', 'تنسيق تسليم الأقسام · Department handoff', 'تقرير سير العمل · Operations report', 'جدولة اجتماع الفرق · Team meeting'] },
    { key: 'hr', name: 'الموارد البشرية · People', people: [['سارة', 'نبيل', 'مديرة الموارد البشرية'], ['أحمد', 'راشد', 'مسؤول توظيف'], ['نورا', 'حمدي', 'منسقة تدريب']], work: ['تهيئة الموظفين الجدد · Onboarding', 'تنظيم ورشة الفريق · Team workshop', 'مراجعة دليل الموظف · Employee handbook', 'خطة تطوير المهارات · Learning plan', 'استبيان تجربة الفريق · Team survey', 'تحديث ملفات الموظفين · Employee records'] },
    { key: 'marketing', name: 'التسويق · Marketing', people: [['رنا', 'سمير', 'مديرة التسويق'], ['تامر', 'جلال', 'كاتب محتوى'], ['منى', 'عصام', 'مختصة حملات']], work: ['إطلاق حملة رِواق · Riwaq campaign', 'تحضير تقويم المحتوى · Content calendar', 'مراجعة صفحة المنتج · Product page', 'تنسيق العرض التعريفي · Product demo', 'تحليل نتائج الحملة · Campaign results', 'كتابة قصة العميل · Customer story'] },
    { key: 'finance', name: 'المالية · Finance', people: [['خالد', 'شريف', 'مدير المالية'], ['ياسمين', 'باسم', 'محاسبة'], ['مازن', 'طارق', 'محلل مالي']], work: ['مراجعة ميزانية الأقسام · Department budget', 'تجهيز تقرير المصروفات · Expense report', 'تدقيق الفواتير · Invoice review', 'تخطيط الربع القادم · Quarterly forecast', 'ملخص الأداء المالي · Finance summary', 'تنسيق طلبات المشتريات · Purchase requests'] },
  ]
  const staff = office.flatMap(dept => dept.people.map(([firstName, lastName], index): Profile => ({
    id: `virtual-profile-${dept.key}-${index}`, email: `${dept.key}.${index + 1}@riwaq.invalid`,
    firstName, lastName, role: index === 0 ? 'MANAGER' : 'EMPLOYEE',
    teamId: FALLBACK_COMPANY_ID, createdAt: iso(-80 + index), updatedAt: iso(-1),
  })))
  const profiles = [admin, ...staff]
  const departments: Department[] = office.map((dept, index) => ({
    id: `virtual-dept-${dept.key}`, teamId: FALLBACK_COMPANY_ID, name: dept.name, icon: null,
    managerId: staff[index * 3].id, manager: staff[index * 3], createdAt: iso(-85), updatedAt: iso(-1),
  }))
  const employees = staff.map((profile, index) => {
    const department = departments[Math.floor(index / 3)]
    const manager = index % 3 === 0 ? null : department.manager
    return {
      id: `virtual-employee-${index}`, teamId: FALLBACK_COMPANY_ID, profileId: profile.id,
      departmentId: department.id, position: office[Math.floor(index / 3)].people[index % 3][2],
      joinDate: iso(-180 + index * 7), salary: null as string | null, status: 'ACTIVE' as const,
      managerId: manager?.id ?? null, profile, department: { id: department.id, name: department.name },
      manager, createdAt: iso(-70 + index), updatedAt: iso(-1),
    }
  })
  const statuses = ['TODO', 'IN_PROGRESS', 'REVIEW', 'COMPLETED'] as const
  const priorities = ['URGENT', 'HIGH', 'MEDIUM', 'LOW'] as const
  const tasks = office.flatMap((dept, departmentIndex) => dept.work.map((title, index) => {
    const department = departments[departmentIndex]
    const number = departmentIndex * 6 + index
    const assignee = index === departmentIndex % 4 ? admin : staff[departmentIndex * 3 + index % 3]
    const creator = index < 4 ? admin : department.manager!
    return {
      id: `virtual-task-${dept.key}-${index}`, teamId: FALLBACK_COMPANY_ID, title,
      description: `التنسيق مع قسم ${dept.name}، توثيق المخرجات ومشاركة التحديث في اجتماع الفريق. Coordinate with the department, document deliverables, and share progress at the team meeting.`,
      priority: priorities[(departmentIndex + index * 3) % 4], status: statuses[number % 4],
      departmentId: department.id, assigneeId: assignee.id, createdById: creator.id,
      dueDate: index === 5 ? null : iso(statuses[number % 4] === 'COMPLETED' ? -1 : [-2, 0, 2, 5, 10][index]),
      department: { id: department.id, name: department.name }, assignee, creator,
      createdAt: iso(-Math.floor(number / 6)), updatedAt: iso(-1),
    }
  }))
  const members = profiles.map((profile, index) => ({
    id: `virtual-member-${index}`, userId: index === 0 ? FALLBACK_ADMIN_ID : `virtual-user-${index}`,
    teamId: FALLBACK_COMPANY_ID, role: profile.role, isActive: true,
    createdAt: iso(-70 + index), updatedAt: iso(-1),
    user: { id: index === 0 ? FALLBACK_ADMIN_ID : `virtual-user-${index}`, email: profile.email, profile },
  }))
  const invitations = ['content', 'research', 'support'].map((position, index) => ({
    id: `virtual-invite-${position}`, teamId: FALLBACK_COMPANY_ID,
    email: `${position}.new@riwaq.invalid`, role: 'EMPLOYEE',
    token: `demo-invite-${FALLBACK_COMPANY_ID}-${position}`, expiresAt: iso(7 + index),
    invitedById: admin.id, acceptedAt: null as string | null, createdAt: iso(-index), updatedAt: iso(-index),
    invitedBy: { id: admin.id, email: admin.email, firstName: admin.firstName, lastName: admin.lastName },
  }))
  const notifications = [
    ['TASK_ASSIGNED', 'مهمة جديدة · New task', 'إطلاق بوابة الفريق جاهز للمتابعة · The team portal is ready for your follow-up.'],
    ['TASK_UPDATED', 'جاهز للمراجعة · Ready for review', 'تم إرسال مراجعة جودة الإصدار · The release quality review is ready for review.'],
    ['TASK_COMPLETED', 'إنجاز جديد · Task completed', 'تم تسليم دليل التكامل · The integration guide has been delivered.'],
    ['INVITATION_SENT', 'دعوة جديدة · New invitation', 'دعوة فريق المحتوى بانتظار القبول · The content team invitation is pending.'],
    ['TASK_UPDATED', 'تحديث العمليات · Operations update', 'تم تحديث خطة الأسبوع · The weekly plan has been updated.'],
    ['TASK_ASSIGNED', 'تنسيق الأقسام · Department coordination', 'إطلاق حملة رِواق ضمن مهامك · The Riwaq campaign is assigned to you.'],
  ].map(([type, title, message], index) => ({
    id: `virtual-notif-${index}`, userId: admin.id, teamId: FALLBACK_COMPANY_ID,
    type, title, message, data: null, read: index > 2, createdAt: iso(-index), updatedAt: iso(-index),
  }))

  const roles = Object.entries(DEFAULT_ROLES).map(([name, def], index) => ({
    id: `virtual-role-${name.toLowerCase()}`,
    teamId: FALLBACK_COMPANY_ID,
    name,
    label: def.label,
    permissions: [...def.permissions],
    createdAt: iso(index),
    updatedAt: iso(index),
  }))

  const team = {
    id: FALLBACK_COMPANY_ID,
    name: companyName(),
    createdAt: iso(0),
  }

  return { admin, profiles, departments, employees, tasks, members, invitations, roles, notifications, team }
}

export function virtualDashboardStats(company = getVirtualCompany()) {
  const { employees, departments, tasks } = company
  const statuses = ['TODO', 'IN_PROGRESS', 'REVIEW', 'COMPLETED'] as const
  return {
    employees: employees.length,
    departments: departments.length,
    tasks: tasks.length,
    completed: tasks.filter((task) => task.status === 'COMPLETED').length,
    statusRows: statuses.map((status) => ({
      status,
      count: tasks.filter((task) => task.status === status).length,
    })),
  }
}

function unavailable<T>() {
  return { status: 503, body: { success: false as const, message: VIRTUAL_DB_UNAVAILABLE_MESSAGE } as T }
}

function slicePage<T>(rows: T[], take: number, skip: number) {
  const data = rows.slice(skip, skip + take)
  return { data, total: rows.length, hasMore: skip + data.length < rows.length }
}

export function virtualEmployeesApi(userId: string, take: number, skip: number, company = getVirtualCompany()) {
  const gate = virtualReadGate(userId)
  if (gate.kind === 'skip') return null
  if (gate.kind === 'unavailable') return unavailable<{ success: false; message: string }>()
  const page = slicePage(company.employees, take, skip)
  return { status: 200, body: { success: true as const, ...page } }
}

export function virtualTasksApi(userId: string, take: number, skip: number, company = getVirtualCompany()) {
  const gate = virtualReadGate(userId)
  if (gate.kind === 'skip') return null
  if (gate.kind === 'unavailable') return unavailable<{ success: false; message: string }>()
  const page = slicePage(company.tasks, take, skip)
  return { status: 200, body: { success: true as const, ...page } }
}

export function virtualDepartmentsApi(userId: string, company = getVirtualCompany()) {
  const gate = virtualReadGate(userId)
  if (gate.kind === 'skip') return null
  if (gate.kind === 'unavailable') return unavailable<{ success: false; message: string }>()
  return { status: 200, body: { success: true as const, data: company.departments } }
}

export function virtualMembersApi(userId: string, take: number, skip: number, canInvite: boolean, company = getVirtualCompany()) {
  const gate = virtualReadGate(userId)
  if (gate.kind === 'skip') return null
  if (gate.kind === 'unavailable') return unavailable<{ success: false; message: string }>()
  const page = slicePage(company.members, take, skip)
  return {
    status: 200,
    body: {
      success: true as const,
      data: {
        members: page.data,
        invitations: canInvite ? company.invitations.filter(row => !row.acceptedAt) : [],
        roles: company.roles.map((role) => ({ name: role.name, label: role.label })),
      },
      total: page.total,
      hasMore: page.hasMore,
    },
  }
}

export function virtualNotificationsApi(userId: string, profileId: string, take: number, skip: number, company = getVirtualCompany()) {
  const gate = virtualReadGate(userId)
  if (gate.kind === 'skip') return null
  if (gate.kind === 'unavailable') return unavailable<{ success: false; message: string }>()
  const rows = company.notifications.filter((row) => row.userId === profileId)
  const page = slicePage(rows, take, skip)
  return { status: 200, body: { success: true as const, ...page } }
}

export function virtualRolesApi(userId: string, company = getVirtualCompany()) {
  const gate = virtualReadGate(userId)
  if (gate.kind === 'skip') return null
  if (gate.kind === 'unavailable') return unavailable<{ success: false; message: string }>()
  return { status: 200, body: { success: true as const, data: company.roles } }
}

export function virtualNotificationMarkRead(userId: string, profileId: string, id: string, company = getVirtualCompany()) {
  const gate = virtualReadGate(userId)
  if (gate.kind === 'skip') return null
  if (gate.kind === 'unavailable') return unavailable<{ success: false; message: string }>()
  const row = company.notifications.find((item) => item.id === id && item.userId === profileId)
  if (!row) return { status: 404, body: { success: false as const, message: 'غير موجود' } }
  row.read = true
  return { status: 200, body: { success: true as const, data: row } }
}

// Process-local, bounded sandboxes. Each demo entry receives an independent key.
type DemoSandbox = { company: ReturnType<typeof createVirtualCompany>; expires: number }
const demoGlobal = globalThis as typeof globalThis & { workforceDemoSandboxes?: Map<string, DemoSandbox> }
const sandboxes = demoGlobal.workforceDemoSandboxes ??= new Map<string, DemoSandbox>()
export function getVirtualCompany(key?: string) {
  if (!key) return createVirtualCompany()
  const now = Date.now()
  for (const [id, entry] of sandboxes) if (entry.expires < now) sandboxes.delete(id)
  let entry = sandboxes.get(key)
  if (!entry) {
    if (sandboxes.size >= 500) sandboxes.delete(sandboxes.keys().next().value!)
    entry = { company: createVirtualCompany(), expires: now + 24 * 60 * 60 * 1000 }
    sandboxes.set(key, entry)
  }
  return entry.company
}
