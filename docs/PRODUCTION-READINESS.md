# Employees and tasks — readiness review

Date: 2026-10-15. Branch: `prod-readiness/employees-runtime`. Status: development candidate, NOT approved production.

## Implemented and evidence
- E0: based on codex/riwaq-identity, without merging it into main. Upstream differences: 491fe0a Riwaq identity/demo; 41fcb08 Neon/Vercel env guide; b163bc3 Neon migration deployment; 58a1e8e bundled Prisma engine; f03f8ef operator admin recovery. Logo/identity changed; Vercel optional files preserved. Operator password recovery retained and now invalidates sessions.
- E1: own-name/password edits require current password; password changes increment authVersion, invalidate old sessions and clear cookie. Admin edits company name/contact/address with permission/team isolation and metadata audit. Origin checked. New additive migrations.
- E2: server-side scoped search/filter/pagination; query restrictions combine with existing permissions before pagination, including demo fixtures.
- E3: task mutation and notification insert share one transaction. Durable pending queue, claim before SMTP, stable Message-ID, attempt metadata, ambiguity held for reconciliation. SMTP unavailable leaves pending. No personal email content logged by adapter.
- E4/E5: production demo off unless explicit WORKFORCE_DEMO_MODE; startup requires strong secrets, PostgreSQL and HTTPS site URL; nonroot VPS Docker. Cairo font build still requires network access to Google.
- Initial identity-base check observed 52 passed; latest full `pnpm check` typecheck +58/58 tests passed. Separate production-config test passed. Earlier main baseline was 46, which is not the selected identity base.

## Not complete / limits
E3 automatic retries of ambiguous SMTP are deliberately disabled; operator reconciliation/retry UI still missing. E6: 57/57 local compose API/database checks passed with isolated interactive demo explicitly enabled, then disabled again (demo endpoint403). SMTP-catcher invitation journey and full manual checklist remain pending; unit tests do not substitute for them. CI execution was not assumed, account billing/settings untouched.

## Blocked on owner
Confirm Riwaq versus Al Kawther canonical identity/base branch (E0); decide separate payroll visibility permission (E7), public demo and mail provider. Existing salary visibility still follows employees.view; no payroll permission invented.

## Reproduce
Node 22: `pnpm check`; `node --test scripts/production-config.test.mjs`; `pnpm build`. Apply additive migrations with `pnpm db:deploy` on a NEW local DB; start with private local configuration, SMTP disabled, then `pnpm verify:local`. Verification refuses non-local database/application URLs.

## Shared VPS delivery
`infra/` is copied identically into each existing repository at the owner's request; run ONE copy only. Set PROJECTS_DIR to the absolute directory containing checkouts named factory, clinic, employees, feed-site and medical-site. Private environment files and backup keys belong outside all repositories. One internal PostgreSQL service contains separate factory, clinic and workforce databases/users. Caddy routes five hostnames. Containers run without root, with persistent volumes and health checks.

No production deployment, DNS, production database, real messages, payments, merges to main, or GitHub settings changes were performed. Local fixtures are synthetic. Production demo defaults OFF, following the latest written instruction. HTTPS issuance cannot be verified without approved domains. See infra/RUNBOOK.md for setup, backup, scheduling, rollback and hardening.

## Blocked on owner — shared
Choose domains, VPS size/region, off-server backup destination, retention, acceptable loss/recovery time, email provider and whether a public demo is approved. Confirm repository visibility and business/privacy content. These decisions are not inferred from old documents.

## Remaining verification — shared
A successful build or unit test is not operational acceptance. The final local-stack evidence below distinguishes executed checks from pending checks. No real-user trial has been performed. Automatic application rollback, SMTP-catcher invitation/password-reset journeys and physical-device acceptance must not be assumed passed unless explicitly recorded below.

## Executed local stack / recovery evidence
2026-10-15: all five images built successfully. One PostgreSQL16 service, three databases and distinct roles; inspect showed {"5432/tcp":null}, no published database port. A temporary loopback-only test forwarder was used for database acceptance, never added to production compose. All five apps returned200 through placeholder hostnames on the local Caddy proxy. Factory bootstrap created only its supplied synthetic administrator; clinic owner and synthetic roles were created through protected setup/user APIs; workforce used the explicit synthetic administrator configuration.

Encrypted backup restored all three databases with table-count comparison and file checksum validation; recovery_seconds=6 and snapshot_age_seconds=20 for the small synthetic snapshot. Corrupted ciphertext was rejected. Separate restored-app project reached healthy status, all five proxy routes returned200; restored workforce login and protected factory/clinic attachment byte checks passed. Database restoration needed --role=<app-role> and copied volumes needed UID/GID1000; see infra/RUNBOOK.md. Live TLS, offsite transfer, real backup schedule and production-scale recovery time remain unverified.

Additional executed local account acceptance: company contact/address persisted; own password changed; old session returned401; new login succeeded. The 57-check script was updated to preserve multiple cookies and test interactive sample edits separately from real-record denial (the old read-only-demo assumption was stale).
