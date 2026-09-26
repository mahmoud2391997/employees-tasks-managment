import bcrypt from 'bcryptjs'

import { prisma } from '@/server/db'
import { DEFAULT_ROLES } from '@/lib/permissions'

const DEMO_TEAM_NAME = 'Demo Team'

type CompanyConfig = {
  name: string
  email: string
  password: string
  firstName: string
  lastName: string
}

function companyConfig(): CompanyConfig | null {
  const email = process.env.COMPANY_ADMIN_EMAIL?.trim().toLowerCase() || 'admin@company.local'
  const password = process.env.COMPANY_ADMIN_PASSWORD ?? 'change-me-please'
  if (!email || password.length < 8) return null
  return {
    name: process.env.COMPANY_NAME?.trim() || 'الشركة',
    email,
    password,
    firstName: process.env.COMPANY_ADMIN_FIRST_NAME?.trim() || 'مدير',
    lastName: process.env.COMPANY_ADMIN_LAST_NAME?.trim() || 'الشركة',
  }
}

function isUniqueConstraintError(error: unknown): boolean {
  return typeof error === 'object' && error !== null && 'code' in error && (error as { code?: unknown }).code === 'P2002'
}

async function provisionCompanyOnce(config: CompanyConfig) {
  const existingUser = await prisma.workforceUser.findUnique({
    where: { email: config.email },
    select: { id: true },
  })
  const passwordHash = existingUser ? null : await bcrypt.hash(config.password, 12)

  await prisma.$transaction(async (tx) => {
    let user = await tx.workforceUser.findUnique({
      where: { email: config.email },
      select: { id: true, email: true, profileId: true },
    })
    if (!user) {
      user = await tx.workforceUser.create({
        data: {
          email: config.email,
          passwordHash: passwordHash ?? (await bcrypt.hash(config.password, 12)),
        },
        select: { id: true, email: true, profileId: true },
      })
    }

    let team = await tx.workforceTeam.findFirst({
      orderBy: [{ createdAt: 'asc' }],
      select: { id: true, name: true },
    })
    if (!team) {
      team = await tx.workforceTeam.create({
        data: { name: config.name, ownerId: user.id },
        select: { id: true, name: true },
      })
    } else {
      const name = team.name === DEMO_TEAM_NAME ? config.name : team.name
      await tx.workforceTeam.update({
        where: { id: team.id },
        data: { name, ownerId: user.id },
      })
      team = { id: team.id, name }
    }

    const profile = await tx.workforceProfile.upsert({
      where: { email: config.email },
      update: { role: 'ADMIN', teamId: team.id },
      create: {
        email: config.email,
        firstName: config.firstName,
        lastName: config.lastName,
        role: 'ADMIN',
        teamId: team.id,
      },
      select: { id: true },
    })

    if (user.profileId !== profile.id) {
      await tx.workforceUser.update({ where: { id: user.id }, data: { profileId: profile.id } })
    }

    await tx.workforceTeamMember.upsert({
      where: { userId_teamId: { userId: user.id, teamId: team.id } },
      update: { role: 'ADMIN', isActive: true },
      create: { userId: user.id, teamId: team.id, role: 'ADMIN', isActive: true },
    })

    await tx.workforceCustomRole.createMany({
      data: Object.entries(DEFAULT_ROLES).map(([name, def]) => ({
        teamId: team.id,
        name,
        label: def.label,
        permissions: def.permissions as unknown as any,
      })),
      skipDuplicates: true,
    })
  })
}

async function provisionCompany() {
  const config = companyConfig()
  if (!config) return

  let lastError: unknown
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      await provisionCompanyOnce(config)
      return
    } catch (error) {
      lastError = error
      if (!isUniqueConstraintError(error)) throw error
    }
  }
  throw lastError
}

let companyReady = false
let companyInFlight: Promise<void> | null = null

/** Creates the single company and its admin when env is configured. Further teams are not created. */
export function ensureCompany(): Promise<void> {
  if (companyReady) return Promise.resolve()
  if (!companyInFlight) {
    companyInFlight = provisionCompany()
      .then(() => {
        companyReady = true
      })
      .finally(() => {
        companyInFlight = null
      })
  }
  return companyInFlight
}
