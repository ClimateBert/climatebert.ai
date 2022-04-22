import React, { useEffect } from "react";
import { Minus, Plus } from "react-feather";
import { useFieldArray, useFormContext } from "react-hook-form";

type TextAlignment = "left" | "center" | "right";

export interface ExpandingProps {
	disabled?: boolean,
	/**
   * Field name. Make sure this matches your schema.
   */

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
	help?: React.ReactNode,
	placeholder?: string,
	autoFocus?: boolean,
	textAlignment?: TextAlignment,
	orientation?: "row" | "col",
}

export const Expanding: React.FC<ExpandingProps> = (
	{ disabled, type, placeholder, autoFocus = false, orientation = "row" },
) => {
	const { register, formState: { isSubmitting }, control } = useFormContext();
	const keys = useFieldArray({
		control,
		name: "headerKeys",
		shouldUnregister: true,
	});
	const values = useFieldArray({
		control,
		name: "headerValues",
		shouldUnregister: true,
	});
	useEffect(
		() => {
			if (keys.fields.length === 0) {
				keys.append({});
			}
			if (values.fields.length === 0) {
				values.append({});
			}
		},
		[keys, values],
	);

	// const error = Array.isArray(errors[name])
	//   ? errors[name].join(", ")
	//   : errors[name]?.message || errors[name];

	return (
		<div className="flex w-full gap-4">
      <ul className="w-full">
        {keys.fields.map((field, i) => {
          return (
            <li
              key={field.id}
              className="flex items-end justify-between w-full h-20 gap-4"
            >
              <div
                className={`flex items-center justify-between gap-2 w-full ${
                  orientation === "col" ? "flex-col" : "flex-row"
                }`}
              >
                <div className="w-full">
                  <div className="font-semibold text-slate-800">Key</div>
                </div>

                <div className="flex items-center w-full ">
                  <div className="w-full">
                    <input
                      disabled={disabled || isSubmitting}
                      type={type}
                      placeholder={placeholder}
                      autoFocus={autoFocus}
                      className="w-full form-input"
                      {...register(`headerKeys.${i}.value`)}
                    />
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
      <ul className="w-full">
        {values.fields.map((field, i) => {
          return (
            <li
              key={field.id}
              className="flex items-end justify-between w-full h-20 gap-4"
            >
              <div
                className={`flex items-center justify-between gap-2 w-full ${
                  orientation === "col" ? "flex-col" : "flex-row"
                }`}
              >
                <div className="w-full">
                  <div className="font-semibold text-slate-800">Value</div>
                </div>

                <div className="flex items-center w-full ">
                  <div className="w-full">
                    <input
                      disabled={disabled || isSubmitting}
                      type={type}
                      placeholder={placeholder}
                      autoFocus={autoFocus}
                      className="w-full form-input"
                      {...register(`headerValues.${i}.value`)}
                    />
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>

      <ul>
        {values.fields.map((_, i) => {
          return (
            <li
              key={i}
              className="flex items-end justify-between w-full h-20 gap-4"
            >
              <button
                type="button"
                className="py-2 hover:text-slate-600 "
                onClick={() => {
                  if (i === keys.fields.length - 1) {
                    keys.append({});
                    values.append({});
                  } else {
                    keys.remove(i);
                    values.remove(i);
                  }
                }}
              >
                {i === keys.fields.length - 1 ? <Plus /> : <Minus />}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
	);
};

export default Expanding;
