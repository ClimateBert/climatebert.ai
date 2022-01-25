import React from "react";
import cn from "classnames";

export interface LogoProps {
  color?: string;
}

export const Logo: React.FC<LogoProps> = ({ color }): JSX.Element => {
  return (
    <div className={cn("w-10 h-10 flex items-center justify-center", color)}>
      <svg
        className="w-full h-full stroke-current"
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.13 28.5c7.594 0 13.75-6.156 13.75-13.75S22.724 1 15.13 1 1.38 7.156 1.38 14.75 7.536 28.5 15.13 28.5z"
          stroke="stroke-current"
        />
        <path
          d="M1.38 14.75h27.49M15.13 1v27.5M5.4 24.47c6.487-4.187 12.97-4.187 19.45 0M5.4 5.03c6.487 4.187 12.97 4.187 19.45 0M15.13 28.5c9.167-9.167 9.167-18.333 0-27.5M15.13 1c-9.167 9.167-9.167 18.333 0 27.5M15.13 1c-13.753 9.167-13.753 18.333 0 27.5M15.13 1c-4.587 9.167-4.587 18.333 0 27.5M15.13 28.5c13.747-9.167 13.747-18.333 0-27.5M15.13 28.5c4.58-9.167 4.58-18.333 0-27.5"
          stroke="stroke-current"
          strokeMiterlimit="10"
        />
      </svg>
    </div>
  );
};
