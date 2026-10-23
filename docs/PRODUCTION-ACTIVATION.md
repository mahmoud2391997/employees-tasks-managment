# Production activation — 23 October 2026

## Software release scope

The employee application supports departments, employees, tasks, role permissions and manual invitation links. Attendance and payroll runs are outside this release. Salary read/write permissions remain separate.

The readiness follow-up pins Next.js16.4.1, closing the dependency advisories GHSA-2464-fhr4-w9xw, GHSA-p3m5-59mp-jv5r and GHSA-673q-mjm6-r5xr. The production dependency audit reports no known vulnerabilities after the update; this is not a guarantee against future disclosures.

`GET /api/health` returns200 with `{"status":"ok"}` only when the runtime database can be queried and its current role has SELECT/INSERT/UPDATE/DELETE privileges on the shared login-limit table. Missing infrastructure returns503. Responses are not cached and reveal no database diagnostics or employee data. This probe is infrastructure health, not certification of email delivery, backups or staff acceptance. Configure an approved uptime service to monitor it; no third-party monitor was created automatically.

## Onboarding before email is selected

The owner explicitly has not selected an email provider. Production therefore defaults the invitation form to **Private invitation link** when SMTP is unavailable. An authorized administrator enters the intended email and role, chooses Create invitation link, and shares the resulting private link directly with that person through an approved channel. The UI states that no email is sent. The default role is EMPLOYEE.

Manual links use the same members.invite authorization, company scope, role-grant limits, random192-bit token, seven-day expiry and single-use acceptance as emailed invitations. HTTPS SITE_URL is still required. Duplicate pending invitations and active accounts are rejected. There is no anonymous signup or invitation endpoint. Anyone obtaining an invitation token can exercise it, so administrators must distribute it privately to the intended recipient.

API clients must opt in with `delivery:"link"`. Omitting delivery preserves the previous email behavior: if SMTP is missing, email invitation creation fails503 without a saved invitation. Failed delivery still rolls back an emailed invitation. The interface disables the email option when it is unavailable; no fallback falsely claims that a message was sent.

## External services deliberately not activated

- **Email:** owner has not selected a provider. Enter approved SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_PASS and SMTP_FROM directly in private production settings. Confirm SITE_URL. Never paste credentials into chat or commit them. Test delivery only to a specifically authorized recipient. In-app notifications and manual onboarding work independently.
- **Notification worker:** once the sender is approved, configure a strong NOTIFICATION_OUTBOX_SECRET and an approved scheduler to POST `/api/internal/outbox` using `Authorization: Bearer <secret>`. Review pending messages before enabling it; do not bulk-send historical notifications unintentionally. Uncertain deliveries require reconciliation, never blind retry.
- **Offsite backup:** owner will identify existing company storage. The local encrypted recovery rehearsal passed, but no production/offsite backup schedule is certified. Establish destination, encryption-key custody, retention, acceptable data loss and recovery time, then configure and test the existing operator backup/restore procedure appropriate to the actual deployment. The repository's Docker/VPS runbook must not be assumed to be running on Vercel.
- **Staff acceptance:** the authorized owner should sign in without sharing a password, onboard designated testers, and validate the actual company roles, contact details and salary access. Do this with agreed test records; automated synthetic acceptance does not replace staff approval.

These are explicit operating prerequisites, not claims of missing software fixes. Until offsite recovery and staff acceptance are approved, classify the release as software-ready for controlled onboarding rather than unrestricted operational certification.

## Verified follow-up

- 89 unit/regression tests in30 files and TypeScript checks passed.
- Production webpack build passed with Next.js16.4.1.
- 64 assertions against two local production servers sharing a disposable PostgreSQL database passed, including a complete manual invitation/acceptance journey, repeated-token denial, unauthorized creation denial, health failure during a simulated missing limiter table, concurrent throttling, restart persistence and cross-company isolation.
- 57 functional/database checks and37 HTTPS/TLS mail-catcher checks passed after the update. No external messages were sent.
- React review: the client receives only an email-availability boolean, never SMTP credentials; existing server permission checks remain authoritative; form controls have labels and explicit delivery state; the existing request wrapper resets forms on network failure.

After release, verify the exact main commit and Vercel deployment, GET the live infrastructure probe, inspect runtime errors and open the isolated demo invitation form. Do not generate production company invitations or test real account passwords automatically.
