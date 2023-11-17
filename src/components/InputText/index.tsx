import classNames from 'classnames';
import React, { InputHTMLAttributes, useMemo, useState } from 'react';
import { ErrorOption, FieldValues, UseFormRegister } from 'react-hook-form';

interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  register?: UseFormRegister<FieldValues>;
  error?: ErrorOption;
  blockAndEdit?: boolean;
  filled?: boolean;
}

const InputText = React.forwardRef<HTMLInputElement, InputTextProps>(
  ({ label, error, filled, className, blockAndEdit, ...rest }, ref) => {
    const [isFocused, setIsFocused] = useState(false);

    const filledOrFocused = useMemo(() => {
      return filled || isFocused;
    }, [filled, isFocused]);

    return (
      <div className="flex w-full flex-col items-start" tabIndex={0}>
        {label && filledOrFocused && (
          <span
            data-state={filledOrFocused ? 'active' : ''}
            className="text-sm font-medium text-custom-gray-100 focus:text-custom-gray-500 data-[state=active]:text-custom-gray-500"
          >
            {label}
          </span>
        )}
        <input
          ref={ref}
          data-state={error ? 'error' : ''}
          className={classNames(
            'w-full border-b-2 border-custom-gray-100 bg-transparent p-2 text-2xl font-medium text-custom-gray-500 placeholder-custom-gray-100 outline-none focus:placeholder-transparent data-[state=error]:border-custom-red-500',
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
          <span className="mt-1 text-base text-custom-red-500">
            {error.message}
          </span>
        )}
      </div>
    );
  },
);

InputText.displayName = 'InputText';

export { InputText };
