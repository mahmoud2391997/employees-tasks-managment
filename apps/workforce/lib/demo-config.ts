/** This cookie selects public sample data only; it is never a company credential. */
export const DEMO_PREVIEW_TOKEN = 'workforce-public-sample-preview-v1'
export function isDemoModeEnabled() {
  const configured = (process.env.NODE_ENV === 'production' ? process.env.WORKFORCE_DEMO_MODE : process.env.DEMO_MODE ?? process.env.WORKFORCE_DEMO_MODE)?.trim().toLowerCase()
  return configured ? ['on', 'true', '1'].includes(configured) : process.env.NODE_ENV !== 'production'
}
