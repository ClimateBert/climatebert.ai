import React from "react";

export const FancyHover: React.FC = ({ children }): JSX.Element => {
	return (
		<div className="relative block max-w-md p-px mx-auto overflow-hidden transition duration-300 transform border border-transparent rounded shadow-sm hover:scale-105 group hover:shadow-xl">
      <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-primary-400 group-hover:scale-x-100"></div>
      <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-primary-400 group-hover:scale-y-100"></div>
      <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-primary-400 group-hover:scale-x-100"></div>
      <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-primary-400 group-hover:scale-y-100"></div>
      <div className="relative">{children}</div>
    </div>
	);
};
