import React from "react";
import cn from "classnames";

export type ButtonProps = {
  state?: "loading" | "disabled";
  onClick: () => Promise<void> | void;
  type?: "button" | "submit";
};
export const Button: React.FC<ButtonProps> = ({
  state,
  onClick,
  type = "button",
  children,
}): JSX.Element => {
  return (
    <button
      disabled={state === "disabled"}
      onClick={onClick}
      type={type}
      className={cn(
        "block w-full  h-12 px-4 text-white uppercase duration-1000 border border-black rounded shadow md:w-auto whitespace-nowrap medium white bg-gradient-to-t from-black via-slate-800 to-black hover:from-slate-200 hover:via-white hover:to-slate-200 hover:text-black hover:border-black focus:outline-none hover:shadow-cta",
        {
          "animate-pulse": state === "loading",
        }
      )}
    >
      {children}
    </button>
  );
};
