import { ReactNode } from 'react';
import { FormProvider, UseFormReturn } from 'react-hook-form';

export type FormType = {
  methods: UseFormReturn<any>;
  className?: string;
  handleSubmit: (data: any) => void;
  children: ReactNode;
};

export const Form = ({
  methods,
  className = 'flex flex-col gap-y-6 my-2',
  handleSubmit,
  children
}: FormType) => (
  <FormProvider {...methods}>
    <form className={className} onSubmit={methods.handleSubmit(handleSubmit)}>
      {children}
    </form>
  </FormProvider>
);
