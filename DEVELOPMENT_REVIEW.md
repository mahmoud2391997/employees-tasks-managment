# Functionality verification — 2026-10-06

The core implemented workflows pass local checks against PostgreSQL and the running app. This report supersedes the earlier development review.

## Fixes applied

- Invitation acceptance reuses existing employee profiles, claims invitations conditionally within the transaction, and returns 409 for account/profile conflicts. Repeated acceptance is rejected.
- Employee creation writes the profile and employee in one transaction, rejects existing employee records, and removes duplicate foreign-key lookups.
- Salary creation/editing rejects malformed, negative, nonfinite, overlong, and excess-precision values before Prisma writes.
- Department creation/editing validates managers against the current company.
- Invitations and member reactivation cannot grant roles beyond the actor’s permissions. Reactivation cannot move an account from another company.
- Demo task editing returns 403 before any database access. Demo notification updates are disabled and return 403; real notification rows only change in the UI after server success.
- Task edits can clear descriptions, due dates, departments, and assignees.
- A failed notification side effect does not make an already-saved task mutation appear unsuccessful; errors are logged.
- Dashboard form requests recover from connection failures. Employee/department/role deletion, member actions, and notification updates report rejected requests.
- Arabic chart status labels use the normal UI font.

## Automated and local checks

- TypeScript checks for both packages; 35 passing unit/regression tests for authentication, demo, pagination, foreign keys, mail, invitation/profile reuse, and permissions.
- Production Next.js build and the same 57 local workflow checks against the built production server.
- `pnpm verify:local`: 57 live page/API/database checks, including nine authenticated pages, employee and department CRUD, employee-to-invitation acceptance, duplicate creation rejection, task CRUD and optional-field clearing, persisted notifications and mark-read, custom role CRUD and permission enforcement, member removal/reactivation, and demo read/write behavior.
- Local verification is restricted to loopback application/database hosts, requires SMTP disabled, and cleans up only its disposable fixture IDs. It reads existing local admin credentials without printing them.
- Browser checks: Arabic pages, task department filtering, read-only role dialog, English/Arabic navigation and members layout. Native dialogs support Escape, focus trapping, and focus return.

## Remaining limits and planned refinements

- Actual SMTP delivery and the Vercel environment have not been certified by these local checks. Production needs working database, JWT, admin bootstrap, SMTP, and site URL settings for company/invitation flows. Public demo needs none of those.
- Profile and settings pages are informational; editing company details, names, and passwords is not implemented. Public signup/team creation is intentionally disabled for this single-company application.
- Search/filtering currently applies to loaded rows; load more before expecting matches outside those rows. Server-side filtering is a future improvement.
- Login throttling is in-memory per process; distributed enforcement needs a shared store.
- Salary visibility follows employees.view; a separate payroll permission requires a product decision.
- Employee creation uses serializable transactions to reject concurrent duplicate creation; the local checks exercise two simultaneous requests.
- Notifications have no durable retry/outbox. Errors after task save are logged.
- Exhaustive device, concurrent-load, outage, and production-service testing remain outside this local verification.
