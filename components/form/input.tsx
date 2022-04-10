import React, { useEffect } from "react";
import { AlertTriangle } from "react-feather";
import { useFormContext } from "react-hook-form";

type TextAlignment = "left" | "center" | "right";

export interface InputProps {
	disabled?: boolean,
	/**
   * Field name. Make sure this matches your schema.
   */
	name: string,
	description?: string,
	/**
   * Field label.
   */
	label: string,
	hideLabel?: boolean,
	/**
   *  Field type. Doesn't include radio buttons and checkboxes
   */
	type?: "text" | "password" | "email" | "number" | "date" | "datetime-local",
	iconLeft?: React.ReactNode,
	defaultValue?: string | number,
	help?: React.ReactNode,
	placeholder?: string,
	autoFocus?: boolean,
	textAlignment?: TextAlignment,
	orientation?: "row" | "col",
}

export const Input: React.FC<InputProps> = (
	{
		disabled,
		label,
		description,
		name,
		type,
		defaultValue,
		placeholder,
		autoFocus = false,
		orientation = "row",
	},
) => {
	const { register, formState: { isSubmitting, errors }, setValue } = useFormContext();

	const error = Array.isArray(errors[name]) ? errors[name].join(", ") : errors[name]?.message || errors[name];
	useEffect(
		() => {
			if (defaultValue) {
				setValue(name, defaultValue);
			}
		},
		[defaultValue, name, setValue],
	);
	return (
		<div>
      <li
        className={`flex items-center justify-between py-3 gap-2 ${
          orientation === "col" ? "flex-col" : "flex-row"
        }`}
      >
        <div className="w-full">
          <div className="font-semibold text-slate-800">{label}</div>
          <div className="text-sm">{description}</div>
        </div>

        <div className="flex items-center w-full ">
          <div className="w-full">
            <input
              id={name}
              disabled={disabled || isSubmitting}
              {...register(name)}
              type={type}
              placeholder={placeholder}
              autoFocus={autoFocus}
              className="w-full form-input"
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
      </li>
    </div>
	);
};

export default Input;
