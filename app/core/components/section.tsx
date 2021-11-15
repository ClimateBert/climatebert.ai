import React from "react"
import { Image } from "blitz"
export interface SectionProps {
  image: string
  title: string
  description: string
  icon: React.ReactNode
  reverse?: boolean
}
export const Section: React.FC<SectionProps> = ({
  icon,
  title,
  description,
  image,
  reverse,
}): JSX.Element => {
  return (
    <div className="relative">
      <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
        <div
          className={`max-w-xl px-4 mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0 ${
            reverse ? "lg:col-start-2" : ""
          }`}
        >
          <div className="py-4 md:py-8 lg:py-12 xl:py-16">
            <div>
              <span className="flex items-center justify-center w-12 h-12 rounded bg-gradient-to-tr from-primary-600 to-secondary-400">
                <div className="w-6 h-6 text-white" aria-hidden="true">
                  {icon}
                </div>
              </span>
            </div>
            <div className="mt-6">
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">{title}</h2>
              <p className="mt-4 text-lg text-gray-500">{description}</p>
            </div>
          </div>
        </div>
        <div className={`mt-12 sm:mt-16 lg:mt-0 ${reverse ? "lg:col-start-1" : ""}`}>
          <div className="w-full shadow-2xl lg:px-0 lg:m-0 lg:relative lg:h-full lg:max-w-none">
            <Image
              layout="fill"
              objectFit="cover"
              src={image}
              alt="Feature image"
              className="rounded "
            />
          </div>
        </div>
      </div>
    </div>
  )
}
