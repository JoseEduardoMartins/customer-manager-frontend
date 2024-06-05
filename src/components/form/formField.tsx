import { useFieldArray, useFormContext } from 'react-hook-form';
import { IconType } from 'react-icons';
import { FaTrashAlt } from 'react-icons/fa';
import { FormFieldError } from './formFieldError';
import { InputText } from './input';
import { Label } from './label';

export type FormFieldType = {
  label?: string;
  name: string;
  type: 'text' | 'email' | 'tag';
  placeholder?: string;
  required?: boolean;
  inputFirstIcon?: IconType;
  inputLastIcon?: IconType;
};

export const FormField = ({
  label,
  name,
  type,
  placeholder,
  required = false,
  inputFirstIcon,
  inputLastIcon
}: FormFieldType) => {
  const { control, register } = useFormContext();
  const { fields, append, remove } = useFieldArray({ control, name });

  return (
    <div className="w-full">
      <div className="w-full flex flex-col">
        <div className="flex flex-row justify-between">
          {label && <Label value={label} required={required} />}
          {type === 'tag' && (
            <p
              className="cursor-pointer text-lime-600"
              onClick={() => append({ title: '' })}
            >
              Adicionar
            </p>
          )}
        </div>
        {type === 'email' && (
          <InputText
            name={name}
            type={type}
            placeholder={placeholder}
            required={required}
            firstIcon={inputFirstIcon}
            lastIcon={inputLastIcon}
          />
        )}
        {type === 'text' && (
          <InputText
            name={name}
            placeholder={placeholder}
            required={required}
            firstIcon={inputFirstIcon}
            lastIcon={inputLastIcon}
          />
        )}
        {type === 'tag' &&
          fields?.map((field, index) => (
            <div
              className="w-full flex flex-row items-center justify-between gap-4"
              key={field.id}
            >
              <div className="w-full flex flex-col">
                <div className="flex border justify-between items-center rounded-lg text-font-color-primary placeholder:text-font-color-disabled text-body1 focus-within:outline-none focus-within:ring-inset focus-within:ring-1 space-x-3 mt-1 p-4 max-h-14 border-gray-500/[.32] hover:border-gray-800 focus-within:border-primary focus-within:ring-primary text-gray-800">
                  <input
                    className="flex border-0 outline-0 w-full bg-transparent disabled:cursor-not-allowed disabled:text-font-color-disabled"
                    type={type}
                    placeholder={placeholder}
                    {...register(`${name}[${index}].title`, {
                      required
                    })}
                  />
                </div>
                <FormFieldError name={`${name}[${index}].title`} />
              </div>
              <FaTrashAlt
                className="w-10 cursor-pointer text-red-500 size-5 basis-1/4"
                onClick={() => remove(index)}
              />
            </div>
          ))}
      </div>
      <div>
        <FormFieldError name={name} />
      </div>
    </div>
  );
};
