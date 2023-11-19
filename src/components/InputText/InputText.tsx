import classNames from 'classnames';
import React, { InputHTMLAttributes, useMemo, useState } from 'react';
import { ErrorOption, FieldValues, UseFormRegister } from 'react-hook-form';

interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  register?: UseFormRegister<FieldValues>;
  error?: ErrorOption;
  filled?: boolean;
}

const InputText = React.forwardRef<HTMLInputElement, InputTextProps>(
  ({ label, error, filled, className, ...rest }, ref) => {
    const [isFocused, setIsFocused] = useState(false);

    const filledOrFocused = useMemo(() => {
      return filled || isFocused;
    }, [filled, isFocused]);

    return (
      <div className="flex w-full flex-col items-start">
        {label && filledOrFocused && (
          <span
            data-testid="input-text-label"
            className="text-sm font-medium text-custom-gray-500"
          >
            {label}
          </span>
        )}
        <input
          ref={ref}
          data-state={error ? 'error' : ''}
          className={classNames(
            'w-full border-b-2 border-custom-gray-100 bg-transparent p-2 text-lg font-medium text-custom-gray-500 placeholder-custom-gray-100 outline-none focus:placeholder-transparent data-[state=error]:border-custom-red-500 sm:text-2xl',
            className,
          )}
          placeholder={label || rest.placeholder}
          type="text"
          onFocus={() => setIsFocused(true)}
          {...rest}
          onBlur={event => {
            setIsFocused(false);
            rest.onBlur?.(event);
          }}
        />
        {error && (
          <span
            className="mt-1 text-base text-custom-red-500"
            data-testid="input-text-error"
          >
            {error.message}
          </span>
        )}
      </div>
    );
  },
);

InputText.displayName = 'InputText';

export { InputText };
