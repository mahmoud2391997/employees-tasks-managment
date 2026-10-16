/** Browser mutations must come from the configured site. The sole machine endpoint
 * authenticates its own strong bearer secret and does not use session cookies. */
export function allowsApiOrigin(input: {
  method: string; pathname: string; origin: string | null;
  requestUrl: string; siteUrl?: string; production: boolean;
}) {
  if (!input.pathname.startsWith('/api/') || ['GET', 'HEAD', 'OPTIONS'].includes(input.method)) return true
  if (input.pathname === '/api/internal/outbox' && input.method === 'POST') return true
  if (!input.origin) return false
  try {
    const expected = new URL(input.siteUrl || (input.production ? '' : input.requestUrl))
    if (input.production && expected.protocol !== 'https:') return false
    return input.origin === expected.origin
  } catch { return false }
}
