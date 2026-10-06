# Development review

## Assessment

The project is a compact pnpm monorepo: an Arabic RTL Next.js application and a shared Prisma/PostgreSQL package. It covers employees, departments, task boards, invitations, member activation, custom roles and notifications. It is intended for one company; public signup and team creation are closed.

Useful foundations already exist: strict TypeScript, Zod request validation, server-side permission checks, team-scoped queries, invitation expiry, email escaping and tests for pagination, foreign-key validation and mail behavior. The unit tests mock database calls, so they do not prove database constraints or complete user journeys.

Development setup and automated checks are now available. This is not a production release certification: real PostgreSQL, SMTP and browser workflow verification remain necessary.

## Improvements applied

- Removed the hard-coded JWT fallback secret. Authentication requires a configured secret of at least 32 characters.
- Replaced manual JWT verification in request middleware with the same verifier used by server/API sessions. It enforces signature and expiry and accepts tokens issued by the app.
- Removed the implicit login bypass when database configuration is missing and the fabricated setup administrator session.
- Removed issuance and acceptance of database-outage administrator sessions. An outage no longer authenticates via environment credentials or default credentials.
- Required explicit admin bootstrap credentials and stopped normal company provisioning from calling demo seeding.
- Moved the deprecated `middleware.ts` entry point to Next.js `proxy.ts`.
- Removed four redundant foreign-key lookups from task creation while retaining the original checks.
- Task edits/deletes now update the UI after server success and display an alert on rejection or network failure.
- Made Prisma CLI environment loading portable across paths containing spaces and ensured process environment overrides env files.
- Added Docker Compose with a loopback-bound PostgreSQL service, persistent volume and health check.
- Added a setup command that preserves existing configuration and creates random local secrets without printing passwords.
- Added type checking and a combined check command, plus CI that checks types, tests and production build.
- Added authentication regressions for weak secrets, issued/expired tokens, missing configuration, production demo bypass and database outage login.

## Prioritized next work

| Priority | Refinement | Evidence and intended result |
| --- | --- | --- |
| High | Unify employee creation and invited account creation | `app/api/employees/route.ts` creates a unique email profile before an account exists; `app/api/invitations/accept/route.ts` always creates another profile. An employee created before accepting an invite can collide with the unique email constraint. Reuse a same-company profile inside the acceptance transaction and test that workflow. |
| High | Make invitation acceptance atomic and handle conflicts | Expiry/acceptance are checked outside the transaction. Add a conditional transactional claim and clean conflict responses; test concurrent acceptance and existing-account behavior with PostgreSQL. |
| High | Harden salary privacy and validation | Employee responses include salary under the broad `employees.view` permission. Decide whether payroll needs its own permission, then redact at the server. Salary strings also need decimal/range validation before Prisma. |
| High | Shared login limiting | `app/api/auth/login/route.ts` uses an in-memory email/IP map. It resets on restart and is isolated per server. Use a shared store and define which reverse proxy supplies trusted client IP headers. |
| High | Database-backed and browser tests | Cover bootstrap without sample records, employee → invite → acceptance, inactive member rejection, custom role boundaries, cross-company identifiers, task assignment and denied mutations. Run against disposable PostgreSQL and a browser. |
| Medium | Predictable async UI behavior | Task mutations now show failures, but list refresh/load-more and other dashboard containers need consistent error, retry, pending and cancellation handling. Task filters currently apply only to loaded rows; move filtering to the API when complete results are expected. |
| Medium | Transaction boundaries and API errors | Employee profile and employee creation are separate writes. Group dependent writes into transactions and map Prisma conflicts/unavailability to consistent API responses. Remove remaining duplicate employee foreign-key checks. |
| Medium | Reliable notification delivery | Notification emails are attempted inline; failures are logged without retry. Use an outbox and worker when reliable delivery matters, and ensure notification failure does not turn an already-saved task into an apparent failed mutation. |
| Medium | Modal accessibility | `components/ui/modal.tsx` has Escape handling but lacks focus trapping/restoration and an accessible title connection. Add those behaviors and test keyboard navigation, RTL and small screens. |
| Medium | Complete profile/settings workflows | Profile and settings currently show information only. Decide whether editing names, changing passwords and updating company details belong in this release; add authorized server endpoints if so. |
| Medium | Provisioning and cleanup | Bootstrap runs in request paths and can restore the configured admin role/membership on process restart. Move bootstrap to an explicit operational command if admin lifecycle needs to be independent. Remove obsolete virtual fallback helpers once their screens/tests are replaced. |
| Later | Performance and observability | Add structured request errors, audit history for roles/member/task changes, and composite indexes based on measured team/status/date query patterns. Centralize duplicated pagination parsers and DTO types as routes evolve. |

## Verification and limits

- Locked dependencies installed successfully.
- Both packages pass TypeScript checks.
- 22 unit tests pass across 9 files.
- Production build passes; Cairo font fetching requires network access on a clean build.
- Compose configuration validates and local env generation succeeds.
- Local PostgreSQL migrations and database workflows were not run: Docker daemon is not running.
- Browser interaction and actual SMTP delivery were not tested.

## Next development session

Start Docker, run `pnpm db:up`, `pnpm db:deploy`, then `pnpm dev`. Sign in with the generated credentials in `apps/workforce/.env`. Work through `MANUAL_TESTS.md` on the empty development database. Prioritize the employee-before-invitation profile collision before using real employee data.

## Follow-up implementation

Login now offers an explicit Try demo action instead of bypassing authentication globally. Demo previews are identified in the dashboard and cleared by Exit demo. Arabic and English UI translations share a cookie-based preference with RTL/LTR layouts. UI now includes a navy sidebar, responsive drawer, top bar, aligned tables, employee avatars and native dialogs. Date rendering now accepts both initial server Date values and API date strings. Local PostgreSQL migrations and login/dashboard/API smoke checks have succeeded; browser checks cover demo entry, exit, language switching and the members page. Existing user-entered content and stored notification messages retain their original language.

Production demo availability follows WORKFORCE_DEMO_MODE. Demo records use a dedicated account and team; company bootstrap selects its configured owner’s team to avoid adopting the demo workspace.

The public demo now serves read-only in-memory records and requires neither PostgreSQL nor a JWT secret. Its cookie selects public samples only. Company authentication still requires configured credentials and database access.
