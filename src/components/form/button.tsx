import { ReactNode } from 'react';

export type ButtonType = {
  children: ReactNode;
  type?: 'submit' | 'button';
  onClick?: () => void;
};

export const Button = ({ children, type = 'submit', onClick }: ButtonType) => {
  return (
    <button
      type={type}
      onClick={() => type === 'button' && onClick!()}
      className="flex
        space-x-2
        items-center
        border
        rounded-lg
        hover:rounded-lg
        hover:shadow-none
        disabled:shadow-none
        disabled:text-state-disabled/[0.8]
        hover:disabled:text-state-disabled/[0.8]
        transition
        duration-300
        ease-in-out
        border-transparent
        disabled:bg-state-disabled-background/[0.24]
        hover:disabled:bg-state-disabled-background/[0.24]
        bg-lime-600
        hover:bg-lime-500
        text-white
        shadow-md-primary
        hover:text-white
        px-5
        py-3
        text-button-lg
        font-bold
        max-h-12
        justify-center"
    >
      <span>{children}</span>
    </button>
  );
};
