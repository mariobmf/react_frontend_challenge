import { ButtonHTMLAttributes } from 'react';
import { Spinner } from '../Spinner';
import classNames from 'classnames';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  isLoading?: boolean;
}

export function Button({ label, isLoading, className, ...rest }: ButtonProps) {
  return (
    <button
      className="flex items-center justify-center rounded-full bg-custom-cyan-500 p-4 text-xl font-bold text-white hover:opacity-70 disabled:bg-custom-gray-50 disabled:text-custom-gray-200"
      {...rest}
    >
      {isLoading ? (
        <div className="flex items-center justify-center">
          <Spinner />
        </div>
      ) : (
        label
      )}
    </button>
  );
}
