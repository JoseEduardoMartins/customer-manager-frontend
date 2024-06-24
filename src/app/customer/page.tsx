'use client';

import { Button, Form, FormField, FormFieldTag } from '@/components/form';
import { useCustomer } from './useCustomer';

const Customer = () => {
  const { methods, handleSubmit } = useCustomer();

  return (
    <main className="w-full min-h-screen bg-neutral-800 py-4 px-4">
      <div className="w-full max-w-xl m-auto flex flex-col items-center gap-y-6 mt-2">
        <a className="text-white text-2xl font-bold" href="/">
          Customer manager
        </a>
        <div className="w-full pt-8 pb-10 px-6 md:px-10 shadow-md rounded-lg">
          <div className="flex flex-col gap-y-4 text-[#212B36]">
            <h4 className="break-inside-avoid font-body text-xl font-bold text-white">
              Criar novo cliente
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
              <FormFieldTag
                label="Tags"
                name="tags"
                type="text"
                required={true}
              />
              <Button>Criar cliente</Button>
            </Form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Customer;
