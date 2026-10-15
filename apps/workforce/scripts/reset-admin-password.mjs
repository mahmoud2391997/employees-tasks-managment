import process from 'node:process'
import { createRequire } from 'node:module'
import bcrypt from 'bcryptjs'

// Operator-only recovery. This is run during a deployment, never exposed as
// an HTTP endpoint. Remove the opt-in environment flag after recovery.
if (process.env.WORKFORCE_RESET_ADMIN_PASSWORD !== 'true') process.exit(0)
const email = process.env.COMPANY_ADMIN_EMAIL?.trim().toLowerCase()
const password = process.env.COMPANY_ADMIN_PASSWORD ?? ''
if (!email || !email.includes('@') || password.length < 16) {
  throw new Error('Admin recovery requires a valid COMPANY_ADMIN_EMAIL and password of at least 16 characters')
}
const keys = process.env.WORKFORCE_DATABASE_SOURCE === 'neon'
  ? ['POSTGRES_PRISMA_URL', 'DATABASE_URL']
  : ['WORKFORCE_DATABASE_URL', 'WORKFORCE_POSTGRES_PRISMA_URL', 'WORKFORCE_POSTGRES_URL', 'WORKFORCE_POSTGRES_URL_NON_POOLING', 'POSTGRES_PRISMA_URL', 'POSTGRES_URL', 'POSTGRES_URL_NON_POOLING', 'DATABASE_URL']
const url = keys.map(key => process.env[key]?.trim()).find(Boolean)
if (!url) throw new Error('Admin recovery requires a configured database')
const require = createRequire(import.meta.url)
const { PrismaClient } = require('../../../packages/workforce-database/src/generated/client')
const prisma = new PrismaClient({ datasources: { db: { url } } })
try {
  const user = await prisma.workforceUser.findUnique({ where: { email }, select: { id: true } })
  if (!user) throw new Error('Configured administrator account does not exist')
  const team = await prisma.workforceTeam.findFirst({ where: { ownerId: user.id }, select: { id: true } })
  if (!team) throw new Error('Recovery is restricted to the configured company owner')
  const passwordHash = await bcrypt.hash(password, 12)
  await prisma.workforceUser.update({ where: { id: user.id }, data: { passwordHash,authVersion:{increment:1} } })
  console.log('Configured company administrator password reset successfully')
} finally {
  await prisma.$disconnect()
}
