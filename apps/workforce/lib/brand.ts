export const BRAND = {
  name: 'رِواق',
  englishName: 'Riwaq',
  tagline: 'مكتبك الافتراضي',
  description: 'مساحة مشتركة تجمع الأقسام والفرق والمهام في مكان واحد.',
  logo: '/brand/riwaq.svg',
} as const

export function companyDisplayName() {
  const configured = process.env.COMPANY_NAME?.trim()
  return configured && configured !== 'الشركة' ? configured : BRAND.name
}
