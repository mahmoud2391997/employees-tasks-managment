export function resolveWorkforceDatabaseUrl(): string | null {
  // Select the newly connected provider without overwriting a legacy shared URL.
  if (process.env.WORKFORCE_DATABASE_SOURCE === 'neon') {
    return process.env.POSTGRES_PRISMA_URL?.trim() || process.env.DATABASE_URL?.trim() || null
  }

  const candidates = [
    process.env.WORKFORCE_DATABASE_URL,
    process.env.WORKFORCE_POSTGRES_PRISMA_URL,
    process.env.WORKFORCE_POSTGRES_URL,
    process.env.WORKFORCE_POSTGRES_URL_NON_POOLING,
    process.env.POSTGRES_PRISMA_URL,
    process.env.POSTGRES_URL,
    process.env.POSTGRES_URL_NON_POOLING,
    process.env.DATABASE_URL,
  ]

  for (const candidate of candidates) {
    const value = candidate?.trim()
    if (value) return value
  }

  return null
}

/** Mutates process.env so Prisma's env("WORKFORCE_DATABASE_URL") succeeds. */
export function ensureWorkforceDatabaseUrlEnv(): string | null {
  const resolved = resolveWorkforceDatabaseUrl()
  if (resolved && (process.env.WORKFORCE_DATABASE_SOURCE === 'neon' || !process.env.WORKFORCE_DATABASE_URL?.trim())) {
    process.env.WORKFORCE_DATABASE_URL = resolved
  }
  return resolved
}

