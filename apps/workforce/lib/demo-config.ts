/** This cookie selects public sample data only; it is never a company credential. */
export const DEMO_PREVIEW_TOKEN = 'workforce-public-sample-preview-v1'
export function isDemoModeEnabled() {
  return process.env.WORKFORCE_DEMO_MODE?.trim().toLowerCase() !== 'false'
}
