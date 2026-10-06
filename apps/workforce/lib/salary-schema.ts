import { z } from 'zod'

// Decimal(65,30) storage: accept nonnegative monetary values with up to two decimal places.
export const salarySchema = z.union([z.number().finite(), z.string().trim()])
  .transform(String)
  .refine((value) => /^\d{1,12}(\.\d{1,2})?$/.test(value), 'Invalid salary')
