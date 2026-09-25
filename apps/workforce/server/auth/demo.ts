import bcrypt from 'bcryptjs'

import { prisma } from '@/server/db'
import { DEFAULT_ROLES, type Permission } from '@/lib/permissions'

const DEMO_EMAIL = 'demo@example.com'
const DEMO_TEAM_NAME = 'Demo Team'

export type DemoSession = {
  userId: string
  email: string
  profile: {
    id: string
    email: string
    firstName: string | null
    lastName: string | null
    role: string
    teamId: string | null
  }
  permissions: Permission[]
}

export function isDemoModeEnabled() {
  return process.env.WORKFORCE_DEMO_MODE !== 'false'
}

async function ensureDefaultRoles(teamId: string) {
  await prisma.workforceCustomRole.createMany({
    data: Object.entries(DEFAULT_ROLES).map(([name, def]) => ({
      teamId,
      name,
      label: def.label,
      permissions: def.permissions as unknown as any,
    })),
    skipDuplicates: true,
  })
}

function isUniqueConstraintError(error: unknown): boolean {
  return typeof error === 'object' && error !== null && 'code' in error && (error as { code?: unknown }).code === 'P2002'
}

const userSelect = { id: true, email: true, profileId: true } as const

async function buildDemoSessionOnce(): Promise<DemoSession> {
  const alreadyExists = await prisma.workforceUser.findUnique({
    where: { email: DEMO_EMAIL },
    select: { id: true },
  })
  const passwordHash = alreadyExists ? null : await bcrypt.hash('demo-password', 10)

  const created = await prisma.$transaction(async (tx) => {
    const existingUser = await tx.workforceUser.findUnique({
      where: { email: DEMO_EMAIL },
      select: userSelect,
    })
    const user =
      existingUser ??
      (await tx.workforceUser.create({
        data: {
          email: DEMO_EMAIL,
          passwordHash: passwordHash ?? (await bcrypt.hash('demo-password', 10)),
        },
        select: userSelect,
      }))

    let team = await tx.workforceTeam.findFirst({
      where: { ownerId: user.id, name: DEMO_TEAM_NAME },
      select: { id: true, name: true },
      orderBy: [{ createdAt: 'asc' }],
    })
    if (!team) {
      team = await tx.workforceTeam.create({
        data: { name: DEMO_TEAM_NAME, ownerId: user.id },
        select: { id: true, name: true },
      })
    }

    const profile = await tx.workforceProfile.upsert({
      where: { email: DEMO_EMAIL },
      update: {},
      create: { email: DEMO_EMAIL, firstName: 'Demo', lastName: 'User', role: 'ADMIN', teamId: team.id },
      select: { id: true, email: true, firstName: true, lastName: true, role: true, teamId: true },
    })

    // Keep profile linked to the demo team and admin role.
    if (profile.teamId !== team.id || profile.role !== 'ADMIN') {
      await tx.workforceProfile.update({ where: { id: profile.id }, data: { teamId: team.id, role: 'ADMIN' } })
    }

    if (user.profileId !== profile.id) {
      await tx.workforceUser.update({ where: { id: user.id }, data: { profileId: profile.id } })
    }

    await tx.workforceTeamMember.upsert({
      where: { userId_teamId: { userId: user.id, teamId: team.id } },
      update: { role: 'ADMIN', isActive: true },
      create: { userId: user.id, teamId: team.id, role: 'ADMIN', isActive: true },
    })

    return { user, team, profile }
  })

  await ensureDefaultRoles(created.team.id)

  // Lightweight seed so the UI isn't empty on first run.
  const existingDepartments = await prisma.workforceDepartment.count({ where: { teamId: created.team.id } })
  if (existingDepartments === 0) {
    await prisma.workforceDepartment.createMany({
      data: [
        { teamId: created.team.id, name: 'Engineering' },
        { teamId: created.team.id, name: 'HR' },
      ],
    })
  }

  const existingEmployees = await prisma.workforceEmployee.count({ where: { teamId: created.team.id } })
  if (existingEmployees === 0) {
    const depts = await prisma.workforceDepartment.findMany({
      where: { teamId: created.team.id },
      select: { id: true, name: true },
      orderBy: [{ createdAt: 'asc' }],
    })
    const engineeringId = depts.find((d) => d.name.toLowerCase().includes('engineer'))?.id ?? depts[0]?.id ?? null
    const hrId = depts.find((d) => d.name.toLowerCase() === 'hr')?.id ?? depts[1]?.id ?? null

    const alex = await prisma.workforceProfile.upsert({
      where: { email: 'alex@demo.local' },
      update: { teamId: created.team.id, role: 'EMPLOYEE', firstName: 'Alex', lastName: 'Johnson' },
      create: { email: 'alex@demo.local', teamId: created.team.id, role: 'EMPLOYEE', firstName: 'Alex', lastName: 'Johnson' },
      select: { id: true },
    })
    const sara = await prisma.workforceProfile.upsert({
      where: { email: 'sara@demo.local' },
      update: { teamId: created.team.id, role: 'MANAGER', firstName: 'Sara', lastName: 'Lee' },
      create: { email: 'sara@demo.local', teamId: created.team.id, role: 'MANAGER', firstName: 'Sara', lastName: 'Lee' },
      select: { id: true },
    })

    await prisma.workforceEmployee.createMany({
      data: [
        {
          teamId: created.team.id,
          profileId: alex.id,
          departmentId: engineeringId,
          position: 'Frontend Engineer',
          status: 'ACTIVE',
        },
        {
          teamId: created.team.id,
          profileId: sara.id,
          departmentId: hrId,
          position: 'Team Manager',
          status: 'ACTIVE',
        },
      ],
    })

    const demoCreatorId = created.profile.id
    await prisma.workforceTask.createMany({
      data: [
        {
          teamId: created.team.id,
          title: 'Design system polish',
          description: 'Improve spacing, typography, and component consistency.',
          priority: 'HIGH',
          status: 'IN_PROGRESS',
          departmentId: engineeringId,
          assigneeId: alex.id,
          createdById: demoCreatorId,
          dueDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
        },
        {
          teamId: created.team.id,
          title: 'Review onboarding flow',
          description: 'Validate employee creation and invitation flow end-to-end.',
          priority: 'MEDIUM',
          status: 'REVIEW',
          departmentId: hrId,
          assigneeId: sara.id,
          createdById: demoCreatorId,
          dueDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        },
        {
          teamId: created.team.id,
          title: 'Set up Kanban board',
          description: 'Drag & drop tasks between columns.',
          priority: 'URGENT',
          status: 'TODO',
          departmentId: engineeringId,
          assigneeId: alex.id,
          createdById: demoCreatorId,
        },
      ],
    })
  }

  const perms = [...DEFAULT_ROLES.ADMIN.permissions]

  return {
    userId: created.user.id,
    email: created.user.email,
    profile: {
      id: created.profile.id,
      email: created.profile.email,
      firstName: created.profile.firstName,
      lastName: created.profile.lastName,
      role: 'ADMIN',
      teamId: created.team.id,
    },
    permissions: perms,
  }
}

async function buildDemoSession(): Promise<DemoSession> {
  let lastError: unknown
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      return await buildDemoSessionOnce()
    } catch (error) {
      lastError = error
      if (!isUniqueConstraintError(error)) throw error
    }
  }
  throw lastError
}

let demoSessionInFlight: Promise<DemoSession> | null = null

export function getOrCreateDemoSession(): Promise<DemoSession> {
  if (!demoSessionInFlight) {
    demoSessionInFlight = buildDemoSession().finally(() => {
      demoSessionInFlight = null
    })
  }
  return demoSessionInFlight
}

