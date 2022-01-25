import React, { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { AlertTriangle } from "react-feather";

export interface InputProps {
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

  defaultValue?: boolean;
}

export const Toggle: React.FC<InputProps> = ({
  label,
  description,
  name,
  defaultValue,
}) => {
  const {
    register,
    formState: { errors },
    setValue,
    watch,
  } = useFormContext();
  const error = Array.isArray(errors[name])
    ? errors[name].join(", ")
    : errors[name]?.message || errors[name];

  useEffect(() => {
    if (defaultValue) {
      setValue(name, defaultValue);
    }
  }, [defaultValue, name, setValue]);

  const state = watch(name, defaultValue);
  return (
    <div>
      <li className="flex items-center justify-between py-3 ">
        {/* Left */}
        <div>
          <div className="font-semibold text-gray-800">{label}</div>
          <div className="text-sm">{description}</div>
        </div>
        {/* Right */}
        <div className="flex items-center ml-4">
          <div className="mr-2 text-sm italic text-gray-400">
            {state ? "On" : "Off"}
          </div>
          <div className="form-switch" onClick={() => setValue(name, !state)}>
            <input {...register(name)} type="checkbox" className="sr-only" />
            <label className="bg-gray-400" htmlFor={name}>
              <span className="bg-white shadow-sm" aria-hidden="true"></span>
              <span className="sr-only">{label}</span>
            </label>
          </div>
        </div>
      </li>

      {error ? (
        <div className="flex items-center pt-2 pb-4 space-x-1 text-sm text-error">
          <AlertTriangle className="w-4 h-4" />
          <p>
            <span className="font-semibold">Error:</span> {error}
          </p>
        </div>
      ) : null}
    </div>
  );
};
