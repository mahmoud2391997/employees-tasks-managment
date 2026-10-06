/** Keep forms responsive when the connection fails; callers handle this like an API error. */
export async function apiFetch(input: RequestInfo | URL, init?: RequestInit): Promise<Response> {
  try {
    return await fetch(input, init)
  } catch {
    return Response.json({ success: false, message: 'تعذر الاتصال بالخادم' }, { status: 503 })
  }
}
