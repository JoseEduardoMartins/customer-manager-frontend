import { z } from 'zod';
import { customerSchema, customerTagSchema } from './schemas';

export type CustomerTagType = z.infer<typeof customerTagSchema>;

export type CustomerType = z.infer<typeof customerSchema>;
