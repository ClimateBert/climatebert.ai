import { Navbar } from "app/core/components/navbar"

export default function Analyzer() {
  // console.log(router)
  return (
    <div className="relative w-screen h-screen">
      <Navbar />
      <div className="flex items-center justify-center h-full pt-16 -mt-16">
        <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:py-16 lg:px-8 ">
          <h2 className="inline text-3xl font-extrabold tracking-tight text-gray-900 sm:block sm:text-4xl">
            Coming soon
          </h2>
          <p className="inline text-3xl font-extrabold tracking-tight text-blue-600 sm:block sm:text-4xl ">
            Get notified as soon as we launch!
          </p>
          <form className="mt-8 sm:flex">
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="w-full px-5 py-3 placeholder-gray-500 border-gray-300 rounded-sm focus:ring-blue-500 focus:border-blue-500 sm:max-w-xs"
              placeholder="Enter your email"
            />
            <div className="mt-3 rounded-sm shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
              <button
                type="submit"
                className="flex items-center justify-center w-full px-10 py-3 text-base font-medium text-white bg-blue-600 border border-transparent rounded-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Notify me
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
