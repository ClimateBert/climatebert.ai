import { Navbar } from "app/core/components/navbar"

export default function Analyzer() {
  // console.log(router)
  return (
    <div className="relative w-screen h-screen bg-coolGray-900">
      <Navbar />
      <div className="flex items-center justify-center h-full pt-16 -mt-16">
        <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:py-16 lg:px-8 ">
          <h2 className="inline text-3xl font-extrabold tracking-tight text-gray-100 sm:block sm:text-4xl">
            Coming soon
          </h2>
          <p className="inline text-3xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-400 sm:block sm:text-4xl ">
            Get notified as soon as we launch!
          </p>
          <form action="#" className="mt-8 sm:max-w-xl sm:mx-auto lg:mx-0">
            <div className="sm:flex">
              <div className="flex-1 min-w-0">
                <label htmlFor="email" className="sr-only">
                  email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="block w-full px-4 py-3 text-base text-gray-900 placeholder-gray-500 border-0 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-400 focus:ring-offset-gray-900"
                />
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <button
                  type="submit"
                  className="block w-full px-4 py-3 font-medium text-white uppercase rounded bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-600 hover:to-secondary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-400 focus:ring-offset-gray-900"
                >
                  get early access
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
