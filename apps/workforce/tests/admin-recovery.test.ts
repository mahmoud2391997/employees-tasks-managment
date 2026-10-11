import { describe, expect, it } from 'vitest'
import { spawnSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'

const script = fileURLToPath(new URL('../scripts/reset-admin-password.mjs', import.meta.url))

describe('operator administrator recovery', () => {
  it('does not access a database unless recovery is explicitly enabled', () => {
    const result = spawnSync(process.execPath, [script], {
      env: { ...process.env, WORKFORCE_RESET_ADMIN_PASSWORD: 'false', COMPANY_ADMIN_EMAIL: '', COMPANY_ADMIN_PASSWORD: '', WORKFORCE_DATABASE_URL: 'invalid' },
      encoding: 'utf8',
    })
    expect(result.status).toBe(0)
    expect(result.stdout).toBe('')
  })

  it('rejects missing recovery credentials before accessing the database', () => {
    const result = spawnSync(process.execPath, [script], {
      env: { ...process.env, WORKFORCE_RESET_ADMIN_PASSWORD: 'true', COMPANY_ADMIN_EMAIL: '', COMPANY_ADMIN_PASSWORD: '', WORKFORCE_DATABASE_URL: 'invalid' },
      encoding: 'utf8',
    })
    expect(result.status).not.toBe(0)
    expect(result.stderr).toContain('Admin recovery requires a valid COMPANY_ADMIN_EMAIL')
    expect(result.stderr).not.toContain('PrismaClientInitializationError')
  })
})
