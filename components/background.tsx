import React from "react"

import Image from "next/image"

export interface BackgroundProps {
  image: string
}

export const Background: React.FC<BackgroundProps> = ({ children, image }): JSX.Element => {
  return (
    <div className="relative w-full h-full">
      <Image
        src={image}
        alt="Background image"
        layout="fill" // required
        objectFit="cover" // change to suit your needs
        className="object-cover object-center pointer-events-none"
      />
      <div className="relative">{children}</div>
    </div>
  )
}
