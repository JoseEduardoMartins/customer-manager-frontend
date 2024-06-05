import { z } from 'zod';
import { filtersSchema } from './schemas';

export type FiltersType = z.infer<typeof filtersSchema>;
