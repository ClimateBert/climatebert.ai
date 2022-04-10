import React from "react";

import Image from "next/image";

export interface BackgroundProps {
	image: StaticImageData,
	style?: React.CSSProperties,
}

export const Background: React.FC<BackgroundProps> = (
	{ children, image, style },
): JSX.Element => {
	return (
		<div className="relative w-full h-full">
      <div style={style}>
        <Image
          src={image}
          alt="Background image"
          layout="fill" // required
          objectFit="cover" // change to suit your needs
          className="object-cover object-center pointer-events-none"
          placeholder="blur"
        />
      </div>
      <div className="relative">{children}</div>
    </div>
	);
};
