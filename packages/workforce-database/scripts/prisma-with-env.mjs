import { spawnSync } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'

function parseDotenv(contents) {
  /** @type {Record<string, string>} */
  const out = {}
  for (const line of contents.split(/\r?\n/)) {
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith('#')) continue
    const eq = trimmed.indexOf('=')
    if (eq === -1) continue
    const key = trimmed.slice(0, eq).trim()
    let value = trimmed.slice(eq + 1).trim()
    if (!key) continue

    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1)
    }
    out[key] = value
  }
  return out
}

function loadEnvFile(filePath) {
  try {
    if (!fs.existsSync(filePath)) return {}
    const contents = fs.readFileSync(filePath, 'utf8')
    return parseDotenv(contents)
  } catch {
    return {}
  }
}

const packageDir = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..')
const repoRoot = path.resolve(packageDir, '..', '..')

const rootEnv = loadEnvFile(path.join(repoRoot, '.env'))
const workforceEnv = loadEnvFile(path.join(repoRoot, 'apps', 'workforce', '.env'))

const extraEnv = { ...rootEnv, ...workforceEnv }

const prismaBin =
  process.platform === 'win32'
    ? path.join(packageDir, 'node_modules', '.bin', 'prisma.cmd')
    : path.join(packageDir, 'node_modules', '.bin', 'prisma')

const args = process.argv.slice(2)
const result = spawnSync(prismaBin, args, {
  cwd: packageDir,
  stdio: 'inherit',
  env: { ...process.env, ...extraEnv },
})

process.exit(result.status ?? 1)

