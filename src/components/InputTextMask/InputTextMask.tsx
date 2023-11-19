import React, {
  ChangeEvent,
  InputHTMLAttributes,
  useCallback,
  useMemo,
  useState,
} from 'react';
import { UseFormRegister, FieldValues, ErrorOption } from 'react-hook-form';
import classNames from 'classnames';
import { cpf, cell_phone } from './masks';

type MaskType = 'cpf' | 'cell_phone';

interface InputTextMaskProps extends InputHTMLAttributes<HTMLInputElement> {
  mask: MaskType;
  label?: string;
  register?: UseFormRegister<FieldValues>;
  error?: ErrorOption;
  filled?: boolean;
}

const MASKS = {
  cpf,
  cell_phone,
};

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
        MASKS[mask](e);
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
            className="text-sm font-medium text-custom-gray-500"
            data-testid="input-text-label"
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

InputTextMask.displayName = 'InputTextMask';

export { InputTextMask };
