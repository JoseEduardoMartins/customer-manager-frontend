import { useFieldArray, useFormContext } from 'react-hook-form';
import { IoIosArrowDown, IoIosArrowUp, IoIosCloseCircle } from 'react-icons/io';

export type InputSelectType = {
  name: string;
  searchTitle: string;
  setSearchTitle: (data: string) => void;
  searchIsVisible: boolean;
  setSearchIsVisible: (data: boolean) => void;
  handleSearch: () => void;
};

export const InputTag = ({
  name,
  searchTitle,
  setSearchTitle,
  searchIsVisible,
  setSearchIsVisible,
  handleSearch
}: InputSelectType) => {
  const { control, getValues } = useFormContext();
  const { fields, remove } = useFieldArray({ control, name });

  return (
    <div className="flex border justify-between items-center rounded-lg space-x-3 mt-1 p-4 max-h-14 border-gray-500/[.32] pr-2 pl-0">
      <div className="flex flex-wrap inline-flex relative w-full">
        {fields?.map((field, index) => (
          <div
            key={field.id}
            className="flex justify-between items-center rounded-full cursor-default px-2 py-1.5 bg-lime-100 text-lime-700 ml-1 my-1 max-h-8 gap-2"
          >
            <p className="break-inside-avoid font-body text-body2 font-regular break-all ">
              {getValues(`${name}[${index}].title`)}
            </p>
            <IoIosCloseCircle
              className="cursor-pointer"
              onClick={() => remove(index)}
            />
          </div>
        ))}
        <input
          className="flex flex-grow border-0 outline-0 font-regular text-font-color-primary placeholder:text-font-color-disabled disabled:text-font-color-disabled disabled:cursor-not-allowed disabled:bg-transparent text-body1 ml-2 w-0 min-w-[50px]"
          onChange={(e) => {
            setSearchTitle(e.target.value);
            handleSearch();
          }}
          value={searchTitle}
        />
      </div>
      {searchIsVisible && (
        <IoIosArrowUp
          className="cursor-pointer size-6 text-gray-500"
          onClick={() => setSearchIsVisible(false)}
        />
      )}
      {!searchIsVisible && (
        <IoIosArrowDown
          className="cursor-pointer size-6 text-gray-500"
          onClick={() => setSearchIsVisible(true)}
        />
      )}
      {/* {title && (
        <FaPlus
          className="cursor-pointer text-gray-500"
          onClick={() => {
            append({ title });
            setTitle('');
          }}
        />
      )} */}
    </div>
  );
};
