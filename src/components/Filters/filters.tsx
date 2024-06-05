import { useRouter } from 'next/navigation';
import { Button, Form, FormField } from '../form';
import { FiltersType as FilterSubmitType } from './types';
import { useFilters } from './useFilters';

export type FiltersType = {
  handleSubmit: (data: FilterSubmitType) => void;
};

export const Filters = ({ handleSubmit }: FiltersType) => {
  const router = useRouter();
  const { methods } = useFilters();

  console.log(methods.formState.errors);

  return (
    <div className='w-full bg-white p-4 shadow-md rounded-lg text-black"'>
      <Form
        methods={methods}
        handleSubmit={handleSubmit}
        className="w-full flex flex-row items-center gap-4"
      >
        <FormField
          name="name"
          type="text"
          placeholder="Digite um nome ..."
          required={false}
        />
        <FormField
          name="email"
          type="email"
          placeholder="Digite um e-mail ..."
          required={false}
        />
        <Button type="button" onClick={() => methods.reset()}>
          Limpar
        </Button>
        <Button>Buscar</Button>
        <Button type="button" onClick={() => router.push('/customer')}>
          Cadastrar
        </Button>
      </Form>
    </div>
  );
};
