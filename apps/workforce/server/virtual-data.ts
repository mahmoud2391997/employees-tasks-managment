import { BRAND } from '@/lib/brand'
import { isDemoModeEnabled } from '@/lib/demo-config'
import { DEFAULT_ROLES } from '@/lib/permissions'
import { FALLBACK_ADMIN_ID, FALLBACK_ADMIN_PROFILE_ID, FALLBACK_COMPANY_ID } from '@/lib/sample-identity'

export const VIRTUAL_DB_UNAVAILABLE_MESSAGE = 'قاعدة البيانات غير متاحة حالياً'
export const VIRTUAL_READONLY_MESSAGE = 'وضع الدخول الافتراضي يعرض بيانات تجريبية للقراءة فقط'
export const VIRTUAL_SAMPLE_NOTE = 'بيانات تجريبية للقراءة فقط.'

const BASE_MS = Date.parse('2026-09-20T12:00:00.000Z')

function iso(offsetDays: number) {
  return new Date(BASE_MS + offsetDays * 24 * 60 * 60 * 1000).toISOString()
}

function adminEmail() {
  return 'demo@workforce.invalid'
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

export function getVirtualCompany() {
  const email = adminEmail()
  const admin: Profile = {
    id: FALLBACK_ADMIN_PROFILE_ID,
    email,
    firstName: 'Demo',
    lastName: 'User',
    role: 'ADMIN',
    teamId: FALLBACK_COMPANY_ID,
    createdAt: iso(0),
    updatedAt: iso(0),
  }
  const alex: Profile = {
    id: 'virtual-profile-alex',
    email: 'alex@demo.local',
    firstName: 'Alex',
    lastName: 'Johnson',
    role: 'EMPLOYEE',
    teamId: FALLBACK_COMPANY_ID,
    createdAt: iso(1),
    updatedAt: iso(1),
  }
  const sara: Profile = {
    id: 'virtual-profile-sara',
    email: 'sara@demo.local',
    firstName: 'Sara',
    lastName: 'Lee',
    role: 'MANAGER',
    teamId: FALLBACK_COMPANY_ID,
    createdAt: iso(2),
    updatedAt: iso(2),
  }

  const engineering: Department = {
    id: 'virtual-dept-engineering',
    teamId: FALLBACK_COMPANY_ID,
    name: 'Engineering',
    icon: null,
    managerId: null,
    manager: null,
    createdAt: iso(1),
    updatedAt: iso(1),
  }
  const hr: Department = {
    id: 'virtual-dept-hr',
    teamId: FALLBACK_COMPANY_ID,
    name: 'HR',
    icon: null,
    managerId: sara.id,
    manager: sara,
    createdAt: iso(2),
    updatedAt: iso(2),
  }
  const operations: Department = {
    id: 'virtual-dept-operations',
    teamId: FALLBACK_COMPANY_ID,
    name: 'Operations',
    icon: null,
    managerId: null,
    manager: null,
    createdAt: iso(3),
    updatedAt: iso(3),
  }

  const departments = [operations, hr, engineering]
  const profiles = [sara, alex, admin]

  const employees = [
    {
      id: 'virtual-employee-sara',
      teamId: FALLBACK_COMPANY_ID,
      profileId: sara.id,
      departmentId: hr.id,
      position: 'Team Manager',
      joinDate: iso(-40),
      salary: null as string | null,
      status: 'ACTIVE' as const,
      managerId: null as string | null,
      profile: sara,
      department: { id: hr.id, name: hr.name },
      manager: null,
      createdAt: iso(5),
      updatedAt: iso(5),
    },
    {
      id: 'virtual-employee-alex',
      teamId: FALLBACK_COMPANY_ID,
      profileId: alex.id,
      departmentId: engineering.id,
      position: 'Frontend Engineer',
      joinDate: iso(-20),
      salary: null as string | null,
      status: 'ACTIVE' as const,
      managerId: sara.id,
      profile: alex,
      department: { id: engineering.id, name: engineering.name },
      manager: { id: sara.id, firstName: sara.firstName, lastName: sara.lastName, email: sara.email },
      createdAt: iso(4),
      updatedAt: iso(4),
    },
  ]

  const tasks = [
    {
      id: 'virtual-task-kanban',
      teamId: FALLBACK_COMPANY_ID,
      title: 'Set up Kanban board',
      description: 'Drag and drop tasks between columns.',
      priority: 'URGENT' as const,
      status: 'TODO' as const,
      departmentId: engineering.id,
      assigneeId: alex.id,
      createdById: admin.id,
      dueDate: null as string | null,
      department: { id: engineering.id, name: engineering.name },
      assignee: alex,
      creator: admin,
      createdAt: iso(10),
      updatedAt: iso(10),
    },
    {
      id: 'virtual-task-ops',
      teamId: FALLBACK_COMPANY_ID,
      title: 'Prepare operations report',
      description: 'Collect weekly metrics and share the team report.',
      priority: 'LOW' as const,
      status: 'COMPLETED' as const,
      departmentId: operations.id,
      assigneeId: sara.id,
      createdById: admin.id,
      dueDate: null as string | null,
      department: { id: operations.id, name: operations.name },
      assignee: sara,
      creator: admin,
      createdAt: iso(9),
      updatedAt: iso(9),
    },
    {
      id: 'virtual-task-onboarding',
      teamId: FALLBACK_COMPANY_ID,
      title: 'Review onboarding flow',
      description: 'Validate employee creation and invitation flow end-to-end.',
      priority: 'MEDIUM' as const,
      status: 'REVIEW' as const,
      departmentId: hr.id,
      assigneeId: sara.id,
      createdById: admin.id,
      dueDate: iso(3),
      department: { id: hr.id, name: hr.name },
      assignee: sara,
      creator: admin,
      createdAt: iso(8),
      updatedAt: iso(8),
    },
    {
      id: 'virtual-task-design',
      teamId: FALLBACK_COMPANY_ID,
      title: 'Design system polish',
      description: 'Improve spacing, typography, and component consistency.',
      priority: 'HIGH' as const,
      status: 'IN_PROGRESS' as const,
      departmentId: engineering.id,
      assigneeId: alex.id,
      createdById: admin.id,
      dueDate: iso(5),
      department: { id: engineering.id, name: engineering.name },
      assignee: alex,
      creator: admin,
      createdAt: iso(7),
      updatedAt: iso(7),
    },
  ]

  const members = [
    {
      id: 'virtual-member-admin',
      userId: FALLBACK_ADMIN_ID,
      teamId: FALLBACK_COMPANY_ID,
      role: 'ADMIN',
      isActive: true,
      createdAt: iso(6),
      updatedAt: iso(6),
      user: {
        id: FALLBACK_ADMIN_ID,
        email,
        profile: admin,
      },
    },
  ]

  const invitations = [
    {
      id: 'virtual-invite-hire',
      teamId: FALLBACK_COMPANY_ID,
      email: 'new.hire@demo.local',
      role: 'EMPLOYEE',
      token: `demo-invite-${FALLBACK_COMPANY_ID}`,
      expiresAt: iso(14),
      invitedById: admin.id,
      acceptedAt: null as string | null,
      createdAt: iso(6),
      updatedAt: iso(6),
      invitedBy: { id: admin.id, email: admin.email, firstName: admin.firstName, lastName: admin.lastName },
    },
  ]

  const notifications = [
    {
      id: 'virtual-notif-task',
      userId: admin.id,
      teamId: FALLBACK_COMPANY_ID,
      type: 'TASK_ASSIGNED',
      title: 'New task assigned',
      message: 'Design system polish is ready for Alex.',
      data: null,
      read: false,
      createdAt: iso(11),
      updatedAt: iso(11),
    },
    {
      id: 'virtual-notif-invite',
      userId: admin.id,
      teamId: FALLBACK_COMPANY_ID,
      type: 'INVITATION_SENT',
      title: 'Invitation sent',
      message: 'An invitation is pending for new.hire@demo.local.',
      data: null,
      read: false,
      createdAt: iso(10),
      updatedAt: iso(10),
    },
  ]

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

export function virtualDashboardStats() {
  const { employees, departments, tasks } = getVirtualCompany()
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

export function virtualEmployeesApi(userId: string, take: number, skip: number) {
  const gate = virtualReadGate(userId)
  if (gate.kind === 'skip') return null
  if (gate.kind === 'unavailable') return unavailable<{ success: false; message: string }>()
  const page = slicePage(getVirtualCompany().employees, take, skip)
  return { status: 200, body: { success: true as const, ...page } }
}

export function virtualTasksApi(userId: string, take: number, skip: number) {
  const gate = virtualReadGate(userId)
  if (gate.kind === 'skip') return null
  if (gate.kind === 'unavailable') return unavailable<{ success: false; message: string }>()
  const page = slicePage(getVirtualCompany().tasks, take, skip)
  return { status: 200, body: { success: true as const, ...page } }
}

export function virtualDepartmentsApi(userId: string) {
  const gate = virtualReadGate(userId)
  if (gate.kind === 'skip') return null
  if (gate.kind === 'unavailable') return unavailable<{ success: false; message: string }>()
  return { status: 200, body: { success: true as const, data: getVirtualCompany().departments } }
}

export function virtualMembersApi(userId: string, take: number, skip: number, canInvite: boolean) {
  const gate = virtualReadGate(userId)
  if (gate.kind === 'skip') return null
  if (gate.kind === 'unavailable') return unavailable<{ success: false; message: string }>()
  const company = getVirtualCompany()
  const page = slicePage(company.members, take, skip)
  return {
    status: 200,
    body: {
      success: true as const,
      data: {
        members: page.data,
        invitations: canInvite ? company.invitations : [],
        roles: company.roles.map((role) => ({ name: role.name, label: role.label })),
      },
      total: page.total,
      hasMore: page.hasMore,
    },
  }
}

export function virtualNotificationsApi(userId: string, profileId: string, take: number, skip: number) {
  const gate = virtualReadGate(userId)
  if (gate.kind === 'skip') return null
  if (gate.kind === 'unavailable') return unavailable<{ success: false; message: string }>()
  const rows = getVirtualCompany().notifications.filter((row) => row.userId === profileId)
  const page = slicePage(rows, take, skip)
  return { status: 200, body: { success: true as const, ...page } }
}

export function virtualRolesApi(userId: string) {
  const gate = virtualReadGate(userId)
  if (gate.kind === 'skip') return null
  if (gate.kind === 'unavailable') return unavailable<{ success: false; message: string }>()
  return { status: 200, body: { success: true as const, data: getVirtualCompany().roles } }
}

export function virtualNotificationMarkRead(userId: string, profileId: string, id: string) {
  const gate = virtualReadGate(userId)
  if (gate.kind === 'skip') return null
  if (gate.kind === 'unavailable') return unavailable<{ success: false; message: string }>()
  const row = getVirtualCompany().notifications.find((item) => item.id === id && item.userId === profileId)
  if (!row) return { status: 404, body: { success: false as const, message: 'غير موجود' } }
  return { status: 403, body: { success: false as const, message: VIRTUAL_READONLY_MESSAGE } }
}
