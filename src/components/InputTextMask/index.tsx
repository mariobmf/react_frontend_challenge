import React, {
  ChangeEvent,
  InputHTMLAttributes,
  useCallback,
  useMemo,
  useState,
} from 'react';
import { UseFormRegister, FieldValues, ErrorOption } from 'react-hook-form';
import classNames from 'classnames';
import { cpf, cell_phone, undefined_mask } from './masks';

type MaskType = 'cpf' | 'cell_phone';

interface InputTextMaskProps extends InputHTMLAttributes<HTMLInputElement> {
  mask: MaskType;
  label?: string;
  register?: UseFormRegister<FieldValues>;
  error?: ErrorOption;
  filled?: boolean;
}

const InputTextMask = React.forwardRef<HTMLInputElement, InputTextMaskProps>(
  (
    { mask, prefix, label, filled, onChange, error, className, ...rest },
    ref,
  ) => {
    const [isFocused, setIsFocused] = useState(false);

    const filledOrFocused = useMemo(() => {
      return filled || isFocused;
    }, [filled, isFocused]);

    const handleKeyUp = useCallback(
      (e: ChangeEvent<HTMLInputElement>) => {
        switch (mask) {
          case 'cpf':
            cpf(e);
            break;
          case 'cell_phone':
            cell_phone(e);
            break;
          default:
            undefined_mask(e);
            break;
        }
        return e;
      },
      [mask],
    );

    const applyMask = (event: ChangeEvent<HTMLInputElement>) => {
      if (typeof onChange === 'undefined') {
        handleKeyUp(event);
      } else {
        onChange?.(handleKeyUp(event));
      }
    };

    return (
      <div className="flex w-full flex-col items-start">
        {label && filledOrFocused && (
          <span
            data-state={filledOrFocused ? 'active' : ''}
            className="text-sm font-medium text-custom-gray-100 focus:text-custom-gray-500 data-[state=active]:text-custom-gray-500"
          >
            {label}
          </span>
        )}
        <input
          onChange={applyMask}
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
          <span className="mt-1 text-base text-custom-red-500">
            {error.message}
          </span>
        )}
      </div>
    );
  },
);

InputTextMask.displayName = 'InputTextMask';

export { InputTextMask };
