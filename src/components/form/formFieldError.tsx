import { useFormContext } from 'react-hook-form';
import { IoIosWarning } from 'react-icons/io';

export type FormFieldErrorType = { name: string };

export const FormFieldError = ({ name }: FormFieldErrorType) => {
  const {
    formState: { errors }
  } = useFormContext();

  return (
    <>
      {errors[name] && (
        <div className="flex flex-row items-center m-2 ml-0 space-x-1 text-red-600">
          <IoIosWarning />
          <div
            className="break-inside-avoid font-body text-caption font-regular  flex flex-col items-start mt-1"
            role="alert"
          >
            {errors[name].message}
          </div>
        </div>
      )}
    </>
  );
};
