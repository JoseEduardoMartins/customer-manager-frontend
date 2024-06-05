import { IconType } from 'react-icons';
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
}: FormFieldType) => (
  <div className="w-full">
    <div className="w-full flex flex-col">
      {label && <Label value={label} required={required} />}
      {(type === 'text' || type === 'email') && (
        <InputText
          name={name}
          type={type}
          placeholder={placeholder}
          firstIcon={inputFirstIcon}
          lastIcon={inputLastIcon}
        />
      )}
    </div>
    <div>
      <FormFieldError name={name} />
    </div>
  </div>
);
