import { useRouter } from 'next/navigation';
import { Button, Form, FormField } from '../form';
import { FiltersType } from './types';
import { useFilters } from './useFilters';

export type FiltersDataType = {
  handleSubmit: (data: FiltersType) => void;
};

export const Filters = ({ handleSubmit }: FiltersDataType) => {
  const router = useRouter();
  const { methods } = useFilters();

  return (
    <div className="w-full p-4 shadow-md rounded-lg">
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
        <Button
          type="button"
          onClick={() => {
            methods.reset();
            handleSubmit({});
          }}
        >
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
