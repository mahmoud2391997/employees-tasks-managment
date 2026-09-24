# Workforce (Team & Task Management)

This repository is the **separate Workforce system** (employees / departments / tasks / team members / roles / notifications), decoupled from the ERP.

## Quickstart

```bash
pnpm install
cp apps/workforce/.env.example apps/workforce/.env
pnpm db:push
pnpm dev
```

- Workforce runs on `http://localhost:3001`

## Env
- `WORKFORCE_DATABASE_URL`
- `WORKFORCE_JWT_SECRET`
- Optional `SITE_URL` (used to generate invite links)

