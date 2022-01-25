import React, { useEffect } from "react";
import { AlertTriangle } from "react-feather";
import { useFormContext } from "react-hook-form";

export interface TextAreaProps {
  disabled?: boolean;
  /**
   * Field name. Make sure this matches your schema.
   */
  name: string;

  description?: string;

  /**
   * Field label.
   */
  label: string;

  hideLabel?: boolean;

  iconLeft?: React.ReactNode;

  defaultValue?: string | number;
  help?: React.ReactNode;

  placeholder?: string;
  autoFocus?: boolean;
  rows?: number;
}

export const TextArea: React.FC<TextAreaProps> = ({
  disabled,
  label,
  description,
  name,
  defaultValue,
  placeholder,
  autoFocus = false,
  rows = 5,
}) => {
  const {
    register,
    formState: { isSubmitting, errors },
    setValue,
  } = useFormContext();

  const error = Array.isArray(errors[name])
    ? errors[name].join(", ")
    : errors[name]?.message || errors[name];
  useEffect(() => {
    if (defaultValue) {
      setValue(name, defaultValue);
    }
  }, [defaultValue, name, setValue]);
  return (
    <div className="flex flex-col items-center justify-between gap-4 py-3 ">
      <div className="w-full">
        <div className="font-semibold text-gray-800">{label}</div>
        <div className="text-sm">{description}</div>
      </div>

      <div className="flex items-center w-full">
        <div className="w-full">
          <textarea
            rows={rows}
            id={name}
            disabled={disabled || isSubmitting}
            {...register(name)}
            placeholder={placeholder}
            autoFocus={autoFocus}
            className="w-full border border-gray-200 rounded-sm form-input bg-gray-50 focus:outline-none focus:ring-0 focus:ring-transparent focus:shadow-sm"
          />
          {error ? (
            <div className="flex items-center pt-2 pb-4 space-x-1 text-sm text-red-500">
              <AlertTriangle className="w-4 h-4" />
              <p>
                <span className="font-semibold">Error:</span> {error}
              </p>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};
