import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { filtersSchema } from './schemas';
import { FiltersType } from './types';

export const useFilters = () => {
  const methods = useForm<FiltersType>({
    resolver: zodResolver(filtersSchema),
    defaultValues: {
      name: undefined,
      email: undefined
    }
  });

  return {
    methods
  };
};
