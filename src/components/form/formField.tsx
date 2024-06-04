import { useState } from 'react';
import { IconType } from 'react-icons';
import { FormFieldError } from './formFieldError';
import { InputTag, InputText } from './input';
import { Label } from './label';
import { CustomerTagType } from '@/app/customer/types';
import { find, save } from '@/services/tag.service';
import { Button } from './button';
import { useFieldArray, useFormContext } from 'react-hook-form';

export type FormFieldType = {
  label: string;
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
  const { register, control } = useFormContext();
  const { fields, append } = useFieldArray({ control, name });

  console.log(fields);

  const [searchTitle, setSearchTitle] = useState<string>('');
  const [searchIsVisible, setSearchIsVisible] = useState<boolean>(false);
  const [searchResult, setSearchResult] = useState<CustomerTagType[]>([]);

  const handleSearch = async () => {
    if (!searchTitle) return;

    const response = await find({
      title: searchTitle
    });

    setSearchResult(response);
    setSearchIsVisible(true);
  };

  const handleSaveTag = async () => {
    const { id } = await save({
      title: searchTitle
    });

    append({
      id,
      title: searchTitle
    });

    setSearchTitle('');
    setSearchIsVisible(false);
  };

  return (
    <div className="w-full relative">
      <div className="w-full flex flex-col">
        <Label value={label} required={required} />
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
        {type === 'tag' && (
          <InputTag
            name={name}
            searchTitle={searchTitle}
            setSearchTitle={setSearchTitle}
            searchIsVisible={searchIsVisible}
            setSearchIsVisible={setSearchIsVisible}
            handleSearch={handleSearch}
          />
        )}
      </div>
      {type === 'tag' && searchIsVisible && (
        <div className="z-index z-10 border-gray-300 border rounded-lg mt-1 p-4 bg-white max-h-48 overflow-auto w-full absolute">
          {!searchResult.length && (
            <div className="mb-2">
              <div className="flex flex-row items-center justify-between">
                <h2>Nenhuma tag foi encontrada</h2>
                <Button type="button" onClick={() => handleSaveTag()}>
                  Adicionar
                </Button>
              </div>
            </div>
          )}
          {searchResult?.map((item) => (
            <div className="mb-2" key={item.id} onClick={() => append(item)}>
              <div className="flex flex-col">
                <div className="flex flex-row items-center">
                  <div className="flex items-center justify-center h-10 w-10">
                    <label className="flex items-center justify-center h-[1.125rem] w-[1.125rem] border-2 rounded cursor-pointer bg-white border-gray-600 group-hover:bg-primary-100">
                      <input
                        className="appearance-none rounded h-[1.125rem] w-0 peer border-none"
                        type="checkbox"
                        {...register(name, {
                          required,
                          value: item
                        })}
                      />
                    </label>
                  </div>
                  <label className="text-gray-800">
                    <div className="flex flex-col cursor-pointer text-body2">
                      <span>{item.title}</span>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <div>
        <FormFieldError name={name} />
      </div>
    </div>
  );
};
