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
              <span className="flex items-center justify-center w-12 h-12 rounded-md bg-blue-600">
                <div className="w-6 h-6 text-white" aria-hidden="true">
                  {icon}
                </div>
              </span>
            </div>
            <div className="mt-6">
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">{title}</h2>
              <p className="mt-4 text-lg text-gray-500">{description}</p>
              {/* <div className="mt-6">
                <a
                  href="#"
                  className="inline-flex px-4 py-2 text-base font-medium text-white border border-transparent rounded-md shadow-sm bg-blue-600 hover:bg-blue-700"
                >
                  Get started
                </a>
              </div> */}
            </div>
          </div>
          {/* <div className="pt-6 mt-8 border-t border-gray-200">
            <blockquote>
              <div>
                <p className="text-base text-gray-500">
                  &ldquo;Cras velit quis eros eget rhoncus lacus ultrices sed diam. Sit orci risus
                  aenean curabitur donec aliquet. Mi venenatis in euismod ut.&rdquo;
                </p>
              </div>
              <footer className="mt-3">
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    <img
                      className="w-6 h-6 rounded-full"
                      src="https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                      alt=""
                    />
                  </div>
                  <div className="text-base font-medium text-gray-700">
                    Marcia Hill, Digital Marketing Manager
                  </div>
                </div>
              </footer>
            </blockquote>
          </div>  */}
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
