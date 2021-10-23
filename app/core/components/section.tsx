import React from "react"

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
          <div className="py-8 md:py-16 lg:py-24 xl:py-32">
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
          <div
            className={`${
              reverse ? "pr-4 -ml-48 sm:pr-6 md:-ml-16" : "pl-4 -mr-48 sm:pl-6 md:-mr-16"
            } lg:px-0 lg:m-0 lg:relative lg:h-full`}
          >
            {/*  eslint-disable-next-line @next/next/no-img-element */}

            <img
              className={`w-full shadow-xl rounded-md ring-1 ring-black ring-opacity-5 lg:absolute ${
                reverse ? "lg:right-0" : "lg:left-0"
              } lg:h-full lg:w-auto lg:max-w-none`}
              src={image}
              alt="Feature image"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
