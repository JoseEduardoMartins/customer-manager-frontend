import { save } from '@/services/customer.service';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { customerSchema } from './schemas';
import { CustomerType } from './types';

export const useCustomer = () => {
  const router = useRouter();

  const methods = useForm<CustomerType>({
    resolver: zodResolver(customerSchema),
    defaultValues: {
      name: '',
      email: '',
      tags: []
    }
  });

  const handleSubmit = async (data: CustomerType) => {
    console.log(data);

    await save(data);
    router.push('/');
  };

  return {
    methods,
    handleSubmit
  };
};
