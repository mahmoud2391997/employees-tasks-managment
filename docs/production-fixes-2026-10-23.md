# Employee production fixes — 23 October 2026

Candidate based on production/main `01b359f`. No production deployment or production data access was performed.

## Resulting behavior

- A manager sees tasks they created **or** tasks assigned to them. Company scope remains outside that OR. Employees and custom roles continue to see only their assigned tasks. Existing mutation and department assignment restrictions remain in force.
- A new invitation defaults to EMPLOYEE, regardless of role ordering. If EMPLOYEE is absent, the form requires an explicit choice rather than choosing the first privileged role. A successful invitation resets the choice to the safe default.
- Login uses an atomic PostgreSQL reservation shared by every server instance. Each normalized email has five attempts per fixed 15-minute window, including successful attempts. Success does not clear concurrent attempts; a blocked request does not extend the window. The database clock determines expiry. Forwarded IP changes do not create a new budget. Email keys are SHA-256 digests, not cleartext addresses.
- Missing/unavailable limiter storage returns 503 with Retry-After:60 and issues no session. Exhausted budgets return 429 with the remaining window. There is no in-memory fallback. Existing signed-in sessions do not consult this table.
- Each reservation also deletes at most 100 records expired more than one day ago. Active windows are not pruned. This is an account guard, not a substitute for platform traffic/abuse controls.

The query uses parameterized Prisma raw SQL and PostgreSQL ON CONFLICT for a single atomic reservation; no new provider, SDK or credential is required. References: [PostgreSQL UPSERT](https://www.postgresql.org/docs/16/sql-insert.html), [Prisma 6 parameterized raw queries](https://www.prisma.io/docs/orm/v6/prisma-client/using-raw-sql/raw-queries).

## Release prerequisites — not executed on production

1. Review and approve the candidate and the five-total-attempts policy. Existing behavior counted failures and reset on success; this candidate deliberately keeps successful attempts in the fixed window to avoid reset races.
2. Apply migration `202610230001_shared_login_limit` to the selected database before activating the new app. Existing Vercel deploy:build already runs migrate:deploy. Do not run that production command merely to test locally.
3. The runtime database role needs INSERT, UPDATE, SELECT and DELETE on WorkforceLoginAttempt. Verify permissions and monitor 503/429 rates in staging. A migration or privilege omission intentionally prevents new login; it never bypasses authentication.
4. Validate HTTPS, real role accounts and delivery on the approved staging deployment. Production owner approval is still required before deployment. No DNS, Vercel settings or secrets were changed here.
5. Roll back application code if needed; keep the additive limiter table. Do not delete unrelated data or migrations during rollback.

## Executed evidence

- TypeScript and 83 unit/regression tests in 28 files passed.
- Production webpack build passed. The final build also restores Next's generated type references after the separate development-browser check.
- Six migrations, including the new table/index, applied to a fresh disposable local PostgreSQL database.
- 53 local API/database assertions passed against **two independent production server processes** sharing that database. Sixteen concurrent guesses with rotating forwarded IPs and email case variants yielded exactly five 401 responses and eleven 429 responses. Throttling survived a server restart; expiry reopened the budget. A renamed limiter table produced 503 and no cookie even with valid account credentials. Successful login did not clear the budget. Expired records were pruned while an active account's counter remained intact.
- Actual manager, employee, custom role and second-company fixtures verified task list totals/pagination/search, own-assignment filtering, initial server HTML, dashboard, edit restrictions, salary redaction and persisted task status after app restart. Cross-company fixture tasks deliberately linked the manager profile to prove that the outer company condition survives the OR.
- Existing local functional suite: 57 checks passed. Existing HTTPS/TLS local mail catcher and reconciliation suite: 37 checks passed. No external messages were sent.
- Browser check on a separate **development** server: real synthetic manager login, assigned task and its filter, dashboard counts, and a synthetic administrator's invitation default of EMPLOYEE. No browser invitation was submitted. The production API checks above sent an explicit configured HTTPS Origin over loopback HTTP; these are not public TLS acceptance.
- Local encrypted recovery rehearsal passed: a stopped synthetic PostgreSQL cluster was archived, encrypted with AES-256-GCM, decrypted and started as a separate local cluster. Counts for 12 models, five task records and ten limiter records matched. Corrupted ciphertext was rejected before extraction. This was a cold physical fixture backup using the same local PostgreSQL binary, not the production Docker/offsite backup procedure.

## Reproduce isolated acceptance

Use Node 22, the pinned pnpm, and a fresh local disposable database whose name contains `mail_acceptance_fixes`. Never point the harness at a shared or production database. Keep SMTP_HOST unset.

```sh
pnpm install --frozen-lockfile
pnpm check
pnpm build
# Set WORKFORCE_DATABASE_URL to the new disposable loopback database first.
pnpm db:deploy
pnpm verify:fixes:local
pnpm verify:mail:local
node --test scripts/production-config.test.mjs infra/scripts/crypt.test.mjs
```

The fixes harness binds localhost ports 4441 and 4442, seeds only synthetic accounts, temporarily renames the limiter table to simulate outage, then stops its servers. KEEP_FIXTURE_SERVERS=true retains processes until interrupted for optional local inspection; its private temporary fixture file contains generated test credentials and must never be committed or shared. The harness does not send email. Mail acceptance uses only its own local TLS catcher.

## Outstanding external acceptance

Public HTTPS and actual Vercel rollout, runtime database privileges, real mail provider delivery and worker scheduling, offsite backup transfer and production-scale recovery remain unverified. The default development command also encounters the pre-existing Next16 Turbopack/custom-webpack mismatch; the browser check explicitly used next dev --webpack. No unrelated development-server configuration change is bundled with these three fixes. Attendance and payroll runs are outside this candidate.
