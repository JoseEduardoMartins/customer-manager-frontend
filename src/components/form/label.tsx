export type LabelType = { value: string; required?: boolean };

export const Label = ({ value, required }: LabelType) => {
  return (
    <label className="flex">
      <p className="text-white">
        {value}
        {required && '*'}
      </p>
    </label>
  );
};
