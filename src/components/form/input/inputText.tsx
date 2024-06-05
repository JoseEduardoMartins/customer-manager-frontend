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
    <div className="flex border justify-between items-center rounded-lg text-font-color-primary placeholder:text-font-color-disabled text-body1 focus-within:outline-none focus-within:ring-inset focus-within:ring-1 space-x-3 mt-1 p-4 max-h-14 border-gray-500/[.32] hover:border-gray-800 focus-within:border-primary focus-within:ring-primary text-gray-800">
      {props.firstIcon && (
        <div className="flex text-gray-600">
          <props.firstIcon className="cursor-pointer size-6" />
        </div>
      )}
      <input
        className="flex border-0 outline-0 w-full bg-transparent disabled:cursor-not-allowed disabled:text-font-color-disabled"
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
