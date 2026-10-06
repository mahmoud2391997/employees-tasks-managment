import { existsSync, readFileSync, writeFileSync } from 'node:fs'
import { randomBytes } from 'node:crypto'
import { fileURLToPath } from 'node:url'

const target = fileURLToPath(new URL('../apps/workforce/.env', import.meta.url))
if (existsSync(target)) {
  console.log('Existing apps/workforce/.env preserved.')
} else {
  const template = readFileSync(new URL('../apps/workforce/.env.example', import.meta.url), 'utf8')
  writeFileSync(target, template
    .replace('replace-with-a-random-secret-at-least-32-characters', randomBytes(32).toString('hex'))
    .replace('replace-with-your-admin-password', randomBytes(18).toString('base64url')), { mode: 0o600 })
  console.log('Created apps/workforce/.env with random local credentials. Read COMPANY_ADMIN_PASSWORD there to sign in.')
}
console.log('Next: pnpm db:up && pnpm db:deploy && pnpm dev')
