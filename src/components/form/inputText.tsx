import { useFormContext } from 'react-hook-form';
import { IconType } from 'react-icons';

export type InputTextType = {
  name: string;
  type?: 'text' | 'email';
  placeholder?: string;
  firstIcon?: IconType;
  lastIcon?: IconType;
};

export const InputText = ({
  name,
  type = 'text',
  placeholder,
  ...props
}: InputTextType) => {
  const { register } = useFormContext();

  return (
    <div className="flex justify-between items-center rounded-lg mt-1 p-4 max-h-14 bg-white border-2 border-neutral-600 hover:border-emerald-500 text-gray-800">
      {props.firstIcon && (
        <div className="flex text-gray-600">
          <props.firstIcon className="cursor-pointer size-6" />
        </div>
      )}
      <input
        className="flex border-0 outline-0 w-full bg-transparent"
        type={type}
        placeholder={placeholder}
        {...register(name)}
      />
      {props.lastIcon && (
        <div className="flex text-gray-600">
          <props.lastIcon className="cursor-pointer size-6" />
        </div>
      )}
    </div>
  );
};
