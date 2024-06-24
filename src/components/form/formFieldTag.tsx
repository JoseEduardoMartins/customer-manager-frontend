import { useFieldArray, useFormContext } from 'react-hook-form';
import { FaTrashAlt } from 'react-icons/fa';
import { FormFieldError } from './formFieldError';
import { Label } from './label';

export type FormFieldTagType = {
  label?: string;
  name: string;
  type: 'text';
  placeholder?: string;
  required?: boolean;
};

export const FormFieldTag = ({
  label,
  name,
  type,
  placeholder,
  required = false
}: FormFieldTagType) => {
  const { control, register } = useFormContext();
  const { fields, append, remove } = useFieldArray({ control, name });

  return (
    <div className="w-full">
      <div className="w-full flex flex-col">
        <div className="flex flex-row justify-between">
          {label && <Label value={label} required={required} />}
          <p
            className="cursor-pointer text-emerald-500 hover:text-emerald-400"
            onClick={() => append({ title: '' })}
          >
            Adicionar
          </p>
        </div>
        {fields?.map((field, index) => (
          <div
            className="w-full flex flex-row items-center justify-between gap-4"
            key={field.id}
          >
            <div className="w-full flex flex-col">
              <div className="flex justify-between items-center rounded-lg mt-1 p-4 max-h-14 bg-white border-2 border-neutral-600 hover:border-emerald-500 text-gray-800">
                <input
                  className="flex border-0 outline-0 w-full bg-transparent disabled:cursor-not-allowed disabled:text-font-color-disabled"
                  type={type}
                  placeholder={placeholder}
                  {...register(`${name}[${index}].title`)}
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
