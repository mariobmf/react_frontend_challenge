import { ButtonHTMLAttributes } from "react";
import { Spinner } from "../Spinner";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  isLoading?: boolean;
}

export function Button({ label, isLoading, ...rest }: ButtonProps) {
  return (
    <button
      className="flex text-xl items-center justify-center bg-custom-cyan-500 text-white font-bold rounded-full p-4 hover:opacity-70 disabled:text-custom-gray-200 disabled:bg-custom-gray-50"
      {...rest}
    >
      {isLoading ? (
        <div className="flex items-center justify-center">
          <Spinner className="h-7 w-7 animate-spin fill-custom-cyan-500 text-gray-50" />
        </div>
      ) : (
        label
      )}
    </button>
  );
}
