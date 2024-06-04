export type LabelType = { value: string; required?: boolean };

export const Label = ({ value, required }: LabelType) => {
  return (
    <label className="flex text-font-color-primary focus-within:text-primary">
      <p className="break-inside-avoid font-body text-body2 font-regular">
        {value}
        {required && '*'}
      </p>
    </label>
  );
};
