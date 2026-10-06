export const BRAND = {
  name: 'أعلاف الكوثر',
  legalName: 'بحار الجوبة للتجارة ش.م.م',
  logo: '/brand/al-kawther-feeds.png',
  registrationNumber: '1219471',
  taxIdentificationNumber: '1383870',
  address: 'سناو، محافظة شمال الشرقية، سلطنة عمان',
  email: 'alkawthercattlefeed@gmail.com',
  phone: '+968 93990766',
  postalCode: '325',
  poBox: '333',
} as const

export function companyDisplayName() {
  const configured = process.env.COMPANY_NAME?.trim()
  return configured && configured !== 'الشركة' ? configured : BRAND.name
}
