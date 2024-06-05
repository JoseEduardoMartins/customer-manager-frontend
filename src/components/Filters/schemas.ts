import { z } from 'zod';

export const filtersSchema = z.object({
  name: z
    .string({
      message: 'string vazia'
    })
    .optional(),
  email: z
    .string({
      message: 'string vazia'
    })
    .optional()
});
