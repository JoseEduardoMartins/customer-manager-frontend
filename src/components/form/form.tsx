import { ReactNode } from 'react';
import { FormProvider, UseFormReturn } from 'react-hook-form';

export type FormType = {
  methods: UseFormReturn<any>;
  handleSubmit: (data: any) => void;
  children: ReactNode;
};

export const Form = ({ methods, handleSubmit, children }: FormType) => (
  <FormProvider {...methods}>
    <form
      className="flex flex-col gap-y-6 my-2"
      onSubmit={methods.handleSubmit(handleSubmit)}
    >
      {children}
    </form>
  </FormProvider>
);
