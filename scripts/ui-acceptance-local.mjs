// Runs on an explicitly disposable localhost DB; never a live application.
process.env.WORKFORCE_UI_ACCEPTANCE='1'
await import('./mail-acceptance-local.mjs')
