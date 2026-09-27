export function canViewAllEmails(input: { permissions: readonly string[]; role?: string | null }) {
  return input.permissions.includes('members.invite') || input.role === 'ADMIN'
}

export function redactEmailForViewer(email: string | null | undefined, viewerEmail: string, canViewAll: boolean) {
  if (!email) return null
  if (canViewAll) return email
  return email === viewerEmail ? email : null
}

