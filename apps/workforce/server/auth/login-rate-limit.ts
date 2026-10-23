import { createHash } from 'node:crypto'
import { prisma } from '@/server/db'

type Attempt = { attempts: number; retryAfterSeconds: number }

/** A single PostgreSQL upsert reserves attempts across all instances, before authentication.
 * Successful attempts also count until expiry: clearing on success could erase concurrent failures.
 * Use the database clock so instance clock skew cannot reset or extend the window.
 */
export async function reserveLoginAttempt(email: string) {
  const key = createHash('sha256').update(email.trim().toLowerCase()).digest('hex')
  const [attempt] = await prisma.$queryRaw<Attempt[]>`
    WITH expired AS (
      DELETE FROM "WorkforceLoginAttempt"
      WHERE "key" IN (
        SELECT "key" FROM "WorkforceLoginAttempt"
        WHERE "expiresAt" < statement_timestamp() - interval '1 day' AND "key" <> ${key}
        ORDER BY "expiresAt" LIMIT 100
      ) AND "expiresAt" < statement_timestamp() - interval '1 day'
    )
    INSERT INTO "WorkforceLoginAttempt" ("key", "attempts", "expiresAt")
    VALUES (${key}, 1, statement_timestamp() + interval '15 minutes')
    ON CONFLICT ("key") DO UPDATE SET
      "attempts" = CASE WHEN "WorkforceLoginAttempt"."expiresAt" <= statement_timestamp()
        THEN 1 ELSE LEAST("WorkforceLoginAttempt"."attempts" + 1, 6) END,
      "expiresAt" = CASE WHEN "WorkforceLoginAttempt"."expiresAt" <= statement_timestamp()
        THEN statement_timestamp() + interval '15 minutes' ELSE "WorkforceLoginAttempt"."expiresAt" END
    RETURNING "attempts", CEIL(GREATEST(0,
      EXTRACT(EPOCH FROM ("expiresAt" - statement_timestamp()))))::integer AS "retryAfterSeconds"
  `
  if (!attempt) throw new Error('Login limiter unavailable')
  return { allowed: attempt.attempts <= 5, retryAfterSeconds: Math.max(1, attempt.retryAfterSeconds) }
}
