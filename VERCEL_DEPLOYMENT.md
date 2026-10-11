# Deploy Riwaq to Vercel with Neon PostgreSQL

## Hosting settings

Use the existing Vercel project, connected to this Git repository. Root Directory: `apps/workforce`. Node.js: 24.x on Vercel (local Node.js 22 is also supported). Install command: `npx --yes pnpm@12.3.4 install --frozen-lockfile`. The committed Vercel configuration sets Build Command to `npx --yes pnpm@12.3.4 run deploy:build`.

This command applies committed Prisma migrations before building the app. A failed migration stops the deployment. The ordinary `build` command remains available for the public demo. Use a separate database for test/preview and production; migrations affect the database before a deployment becomes live.

## Free database

Create a Neon Free project via the Vercel Marketplace (https://vercel.com/marketplace/neon/neon), connect it to the Vercel project and select the deployment environments to configure. The integration supplies `POSTGRES_PRISMA_URL` / `DATABASE_URL`, which this app recognizes automatically. For manual configuration, use `WORKFORCE_DATABASE_URL` with the pooled connection string. Keep `sslmode=require` in the URL. This application uses Prisma's PostgreSQL connector; it does not need the Neon JavaScript driver.

Both runtime and migrations recognize the provider aliases. `WORKFORCE_DATABASE_URL`, when configured, takes precedence unless `WORKFORCE_DATABASE_SOURCE=neon` explicitly selects the provider connection.

## Environment variables

Set these in Vercel for the target environment, then redeploy. Do not commit actual credentials.

| Variable | Value / purpose |
| --- | --- |
| `WORKFORCE_DATABASE_SOURCE` | `neon`, to select the connected Neon database even if an older shared URL exists |
| `WORKFORCE_DATABASE_URL` | Neon pooled connection URL; optional when the integration supplies `POSTGRES_PRISMA_URL` / `DATABASE_URL` |
| `WORKFORCE_JWT_SECRET` | Random secret, at least 32 characters |
| `WORKFORCE_DEMO_MODE` | `false`, to test real persistent accounts and records |
| `COMPANY_NAME` | `رِواق`, or your company name |
| `COMPANY_ADMIN_EMAIL` | Your administrator login email |
| `COMPANY_ADMIN_PASSWORD` | Initial administrator password, at least 8 characters |
| `SITE_URL` | Actual public HTTPS origin, without a path, used in emailed links |
| `SMTP_HOST` | Your mail provider's SMTP hostname |
| `SMTP_PORT` | Usually `587` for STARTTLS, or `465` for implicit TLS |
| `SMTP_SECURE` | `false` with port 587; `true` with port 465 |
| `SMTP_USER` | SMTP login from your mail provider |
| `SMTP_PASS` | SMTP credential from your mail provider |
| `SMTP_FROM` | Verified sender, for example `Riwaq <sender@your-domain.com>` |

Optional: `COMPANY_ADMIN_FIRST_NAME`, `COMPANY_ADMIN_LAST_NAME`.

Generate the JWT secret locally with `openssl rand -hex 32`. The admin password is only used when creating the initial user; changing this environment variable will not reset an existing user's password. SMTP and `SITE_URL` are required for production invitations; without them inviting employees returns a configuration error.

## Acceptance checks after deployment

1. Sign in with the configured administrator. Company and default roles are provisioned on first login.
2. Create a department, an employee and a task; reload and sign in in another browser session to confirm database persistence.
3. Invite an address you control, accept the emailed invitation, and verify employee and department-manager permissions in separate sessions.
4. Assign a task to the employee, update its status as that employee, and confirm the administrator sees the update.
5. Verify notifications and sign-out; confirm the demo button is hidden.

The public demo stores sample records in memory and cannot establish that the production database works. A successful build or unit test also does not replace these live checks.
