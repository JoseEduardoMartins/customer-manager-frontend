import { z } from 'zod';

export const filtersSchema = z.object({
  name: z
    .string()
    .trim()
    .max(300, 'Campo pode ter no maximo 300 caracteres')
    .optional(),
  email: z
    .string()
    .trim()
    .max(150, 'Campo pode ter no maximo 150 caracteres')
    .optional()
});
