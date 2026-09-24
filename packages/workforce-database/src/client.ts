import { ensureWorkforceDatabaseUrlEnv } from './env'
import { PrismaClient } from './generated/client'

const workforceDatabaseUrl = ensureWorkforceDatabaseUrlEnv()

declare global {
  // eslint-disable-next-line no-var
  var __workforcePrisma: PrismaClient | undefined
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

