import { findById, update } from '@/services/customer.service';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useLayoutEffect } from 'react';
import { UseFormReturn, useForm } from 'react-hook-form';
import { customerSchema } from '../schemas';
import { CustomerType } from '../types';

type UseCustomerType = {
  id: number;
};

type UseCustomerResponseType = {
  methods: UseFormReturn<CustomerType>;
  handleSubmit: (data: CustomerType) => void;
};

export const useCustomer = ({
  id
}: UseCustomerType): UseCustomerResponseType => {
  const router = useRouter();

  const methods = useForm<CustomerType>({
    resolver: zodResolver(customerSchema),
    defaultValues: {
      name: '',
      email: ''
    }
  });

  const loadCustomer = async () => {
    try {
      const { name, email, tags } = await findById(id);

      methods.reset({ name, email, tags });
    } catch (error) {
      alert('error');
    }
  };

  const handleSubmit = async (data: CustomerType) => {
    await update(id, data);
    router.push('/');
  };

  useLayoutEffect(() => {
    loadCustomer();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return {
    methods,
    handleSubmit
  };
};
