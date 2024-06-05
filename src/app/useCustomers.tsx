import {
  CustomerFindResponse,
  find,
  remove
} from '@/services/customer.service';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FaPencilAlt, FaTrashAlt } from 'react-icons/fa';

export const useCustomers = () => {
  const router = useRouter();

  const [customers, setCustomers] = useState<CustomerFindResponse[]>([]);

  const createCustomer = (customer: CustomerFindResponse) => ({
    ...customer,
    options: (
      <div className="flex flex-row justify-center gap-6">
        <FaPencilAlt
          title="Editar"
          className="cursor-pointer text-lime-600"
          onClick={() => router.push(`/customer/${customer.id}`)}
        />
        <FaTrashAlt
          title="Deletar"
          className="cursor-pointer text-red-600"
          onClick={() => removeCustomer(customer.id)}
        />
      </div>
    )
  });

  const removeCustomer = async (id: number) => {
    try {
      await remove(id);
      await loadCustomers();
    } catch (error) {
      alert('error');
    }
  };

  const loadCustomers = async (filters = {}) => {
    try {
      const response = await find([...Object.entries(filters)]);

      const customerList = response.map(createCustomer);

      setCustomers(customerList);
    } catch (error) {
      alert('error');
    }
  };

  useEffect(() => {
    loadCustomers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { customers, loadCustomers };
};
