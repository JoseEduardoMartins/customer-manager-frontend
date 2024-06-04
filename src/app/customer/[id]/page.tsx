'use client';

import { Button, Form, FormField } from '@/components/form';
import { useCustomer } from './useCustomer';

type CustomerDataType = {
  params: { id: number };
};

const Customer = ({ params }: CustomerDataType) => {
  const { methods, handleSubmit } = useCustomer(params);

  return (
    <main className="w-full min-h-screen bg-zinc-200 py-4 px-4">
      <div className="w-full max-w-xl m-auto flex flex-col items-center gap-y-6 mt-2">
        <a className="text-2xl font-bold" href="/#">
          Customer manager
        </a>
        <div className="w-full bg-white pt-8 pb-10 px-6 md:px-10 shadow-md rounded-lg">
          <div className="flex flex-col gap-y-4 text-[#212B36]">
            <h4 className="break-inside-avoid font-body text-xl font-bold ">
              Atualizar cliente
            </h4>
            <Form methods={methods} handleSubmit={handleSubmit}>
              <FormField label="Nome" name="name" type="text" required={true} />
              <FormField
                label="E-mail"
                name="email"
                type="email"
                placeholder="nome@email.com"
                required={true}
              />
              <Button>Atualizar cliente</Button>
            </Form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Customer;
