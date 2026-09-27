# Workforce (company team & tasks)

Internal system for one company: employees, departments, tasks, members, roles, and notifications. It is not a public signup product. People join only when a company admin invites them.

## Quickstart

```bash
pnpm install
cp apps/workforce/.env.example apps/workforce/.env
pnpm db:migrate
pnpm dev
```

- Workforce runs on `http://localhost:3001`
- Sign in with `COMPANY_ADMIN_EMAIL` / `COMPANY_ADMIN_PASSWORD`
- Add coworkers from الأعضاء using an invitation link

## Env
- `WORKFORCE_DATABASE_URL`
- `WORKFORCE_JWT_SECRET`
- `COMPANY_NAME`
- `COMPANY_ADMIN_EMAIL`
- `COMPANY_ADMIN_PASSWORD` (at least 8 characters; used only when the admin account is first created)
- `SITE_URL` (public https origin; required in production so invite and notification links are correct)
- `SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE`, `SMTP_USER`, `SMTP_PASS`, and `SMTP_FROM` (required in production; invitations and in-app notifications are emailed through this SMTP server)
- Optional `WORKFORCE_DEMO_MODE=true` to skip login for a local preview. Leave it unset or `false` for company use. Do not enable it in production.

