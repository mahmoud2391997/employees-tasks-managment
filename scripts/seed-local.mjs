import assert from 'node:assert/strict'
import { createRequire } from 'node:module'
import { fileURLToPath } from 'node:url'

const root = fileURLToPath(new URL('../', import.meta.url))
process.loadEnvFile(`${root}apps/workforce/.env`)
assert(['localhost', '127.0.0.1', '[::1]'].includes(new URL(process.env.WORKFORCE_DATABASE_URL).hostname), 'Seed only supports a local database')
const require = createRequire(`${root}apps/workforce/package.json`)
const bcrypt = require('bcryptjs')
const { PrismaClient } = require(`${root}packages/workforce-database/src/generated/client`)
const db = new PrismaClient()
const people = [
  ['ahmed', 'Ahmed', 'Hassan', 'Engineering', 'Software Engineer', 'EMPLOYEE'],
  ['mona', 'Mona', 'Ali', 'Engineering', 'Engineering Manager', 'MANAGER'],
  ['omar', 'Omar', 'Ibrahim', 'Operations', 'Operations Specialist', 'EMPLOYEE'],
  ['nour', 'Nour', 'Mahmoud', 'Operations', 'Operations Manager', 'MANAGER'],
  ['salma', 'Salma', 'Mostafa', 'Design', 'Product Designer', 'EMPLOYEE'],
  ['youssef', 'Youssef', 'Adel', 'Design', 'UI Designer', 'EMPLOYEE'],
]
try {
  const admin = await db.workforceUser.findUnique({ where: { email: process.env.COMPANY_ADMIN_EMAIL.trim().toLowerCase() }, include: { profile: true } })
  assert(admin?.profile?.teamId, 'Sign in as company admin once before seeding')
  const teamId = admin.profile.teamId
  const passwordHash = await bcrypt.hash('SmokeTest2026!', 12)
  await db.$transaction(async tx => {
    for (const [slug, firstName, lastName, departmentName, position, role] of people) {
      const email = `${slug}.smoke@company.local`
      const existing = await tx.workforceProfile.findUnique({ where: { email } })
      assert(!existing || existing.teamId === teamId, `Seed email belongs to another company: ${email}`)
      const department = await tx.workforceDepartment.findFirst({ where: { teamId, name: departmentName } })
        ?? await tx.workforceDepartment.create({ data: { teamId, name: departmentName } })
      const profile = await tx.workforceProfile.upsert({ where: { email }, update: {}, create: { email, firstName, lastName, role, teamId } })
      if (role === 'MANAGER' && !department.managerId) await tx.workforceDepartment.update({ where: { id: department.id }, data: { managerId: profile.id } })
      const user = await tx.workforceUser.upsert({ where: { email }, update: {}, create: { email, passwordHash, profileId: profile.id } })
      assert(user.profileId === profile.id, `Seed user profile mismatch: ${email}`)
      await tx.workforceTeamMember.upsert({ where: { userId_teamId: { userId: user.id, teamId } }, update: {}, create: { userId: user.id, teamId, role, isActive: true } })
      if (!await tx.workforceEmployee.findFirst({ where: { teamId, profileId: profile.id } })) {
        await tx.workforceEmployee.create({ data: { teamId, profileId: profile.id, departmentId: department.id, position, status: 'ACTIVE', joinDate: new Date('2026-10-01T00:00:00Z') } })
      }
    }
  })
  console.log('Ready: 6 test employees with member accounts in the admin company. Existing records preserved.')
  for (const [slug, firstName, lastName, , , role] of people) console.log(`${firstName} ${lastName}: ${slug}.smoke@company.local (${role})`)
  console.log('New test account password: SmokeTest2026!')
} finally {
  await db.$disconnect()
}
