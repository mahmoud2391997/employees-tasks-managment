import { afterEach, describe, expect, it, vi } from 'vitest'
import { ensureWorkforceDatabaseUrlEnv, resolveWorkforceDatabaseUrl } from '../../../packages/workforce-database/src/env'

afterEach(() => vi.unstubAllEnvs())

describe('database deployment selection', () => {
  it('keeps the explicit URL by default', () => {
    vi.stubEnv('WORKFORCE_DATABASE_SOURCE', '')
    vi.stubEnv('WORKFORCE_DATABASE_URL', 'postgresql://legacy.example/app')
    vi.stubEnv('POSTGRES_PRISMA_URL', 'postgresql://neon.example/app')
    expect(resolveWorkforceDatabaseUrl()).toBe('postgresql://legacy.example/app')
  })
  it('uses the selected Neon connection for Prisma despite a legacy shared URL', () => {
    vi.stubEnv('WORKFORCE_DATABASE_SOURCE', 'neon')
    vi.stubEnv('WORKFORCE_DATABASE_URL', 'postgresql://legacy.example/app')
    vi.stubEnv('POSTGRES_PRISMA_URL', 'postgresql://neon.example/app')
    expect(ensureWorkforceDatabaseUrlEnv()).toBe('postgresql://neon.example/app')
    expect(process.env.WORKFORCE_DATABASE_URL).toBe('postgresql://neon.example/app')
  })
  it('refuses to fall back to the legacy database when selected Neon is missing', () => {
    vi.stubEnv('WORKFORCE_DATABASE_SOURCE', 'neon')
    vi.stubEnv('WORKFORCE_DATABASE_URL', 'postgresql://legacy.example/app')
    vi.stubEnv('POSTGRES_PRISMA_URL', '')
    vi.stubEnv('DATABASE_URL', '')
    expect(resolveWorkforceDatabaseUrl()).toBeNull()
  })
})
