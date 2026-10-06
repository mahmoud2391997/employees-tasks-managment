# Workforce

Arabic, RTL employee and task management for a single company. Next.js App Router and React provide the dashboard and API; Prisma stores data in PostgreSQL. Access is invitation-only, with built-in and custom permission roles.

## Local development

Requirements: Node.js 22, pnpm 12.3.4, and PostgreSQL (or Docker with its daemon running).

```bash
nvm use
npm install --global pnpm@12.3.4
pnpm install --frozen-lockfile
pnpm dev:setup
pnpm db:up
pnpm db:deploy
pnpm dev
```

Open http://localhost:3001. Read `COMPANY_ADMIN_EMAIL` and the generated `COMPANY_ADMIN_PASSWORD` in `apps/workforce/.env` to sign in. Setup preserves an existing env file and never prints passwords. Company provisioning happens on the first authenticated request/login; normal mode starts without demo employees or tasks.

The Compose database uses local port 5433 to avoid conflicting with a default PostgreSQL installation.

If you already run PostgreSQL, omit `db:up` and set `WORKFORCE_DATABASE_URL` to your development database before applying migrations. `db:down` stops the Compose database and preserves its volume.

## Commands

| Command | Purpose |
| --- | --- |
| `pnpm dev` | Generate Prisma client and start Next.js on port 3001 |
| `pnpm check` | Generate client, check both packages, run unit tests |
| `pnpm build` | Build the production app |
| `pnpm start` | Serve a previously built app |
| `pnpm db:migrate` | Create/apply a migration after schema changes |
| `pnpm db:deploy` | Apply committed migrations |

CI runs `check` and `build`. The Cairo font is fetched from Google during the build, so the build requires network access.

## Structure

- `apps/workforce/app`: pages and API route handlers.
- `apps/workforce/components`: dashboard features and shared UI.
- `apps/workforce/server`: authentication, provisioning, notifications and mail.
- `apps/workforce/lib`: permissions, middleware and email privacy.
- `packages/workforce-database`: schema, migrations and generated Prisma client.
- `apps/workforce/tests`: unit tests with mocked database access.

## Configuration

Use `apps/workforce/.env.example` as a reference. `pnpm dev:setup` creates a local env with random secrets.

- `WORKFORCE_DATABASE_URL`: PostgreSQL connection URL.
- `WORKFORCE_JWT_SECRET`: random secret of at least 32 characters; required for authentication. Rotating it invalidates sessions.
- `COMPANY_NAME`, `COMPANY_ADMIN_EMAIL`, `COMPANY_ADMIN_PASSWORD`: company/admin bootstrap configuration. Password must contain at least 8 characters and is used when the admin is first created; changing the env does not reset an existing password.
- Optional `COMPANY_ADMIN_FIRST_NAME` and `COMPANY_ADMIN_LAST_NAME`.
- `SITE_URL`: public HTTPS origin for production invitation/notification links.
- `SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE`, `SMTP_USER`, `SMTP_PASS`, `SMTP_FROM`: production mail configuration. Local development may omit SMTP; invitation links remain available in the app.
- `WORKFORCE_DEMO_MODE=true`: explicit local demo mode with seeded examples and login bypass. Use a disposable local database. Never enable it in production.

Missing database configuration no longer grants a setup/admin session. Database outages do not authenticate via env credentials. Legacy virtual data helpers remain for existing tests/screens, but normal login no longer issues those sessions.

See [DEVELOPMENT_REVIEW.md](DEVELOPMENT_REVIEW.md) for review findings and the prioritized backlog, and [MANUAL_TESTS.md](MANUAL_TESTS.md) for workflow checks. Development tooling is ready; real database and browser acceptance checks are still required before release.
