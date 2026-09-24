import { createRequire } from 'node:module'
import { ensureWorkforceDatabaseUrlEnv } from './env'
import type { PrismaClient as PrismaClientType } from './generated/client'

const workforceDatabaseUrl = ensureWorkforceDatabaseUrlEnv()
const require = createRequire(import.meta.url)
const { PrismaClient } = require('./generated/client') as typeof import('./generated/client')

declare global {
  // eslint-disable-next-line no-var
  var __workforcePrisma: PrismaClientType | undefined
}

export const prisma =
  global.__workforcePrisma ??
  new PrismaClient(
    workforceDatabaseUrl
      ? {
          datasources: {
            db: { url: workforceDatabaseUrl },
          },
        }
      : undefined,
  )

if (process.env.NODE_ENV !== 'production') global.__workforcePrisma = prisma

