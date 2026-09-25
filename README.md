# Workforce (company team & tasks)

Internal system for one company: employees, departments, tasks, members, roles, and notifications. It is not a public signup product. People join only when a company admin invites them.

## Quickstart

```bash
pnpm install
cp apps/workforce/.env.example apps/workforce/.env
pnpm db:push
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
- Optional `SITE_URL` (used to generate invite links)
- Optional `WORKFORCE_DEMO_MODE=true` to skip login for a local preview. Leave it unset or `false` for company use.

