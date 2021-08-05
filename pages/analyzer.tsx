import { Navbar } from "components/navbar"

export default function Analyze() {
  return (
    <div className="h-screen bg-coolGray-50">
      <Navbar />

      <div className="flex items-center justify-center h-screen">
        <div className="container mx-auto">
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form action="/api/classify" method="POST">
              <div className="shadow sm:roun sm:overflow-hidden">
                <div className="px-4 py-5 space-y-6 bg-white sm:p-6">
                  <div>
                    <label
                      htmlFor="paragraph"
                      className="block mt-1 text-sm font-medium text-coolGray-700"
                    >
                      Copy a paragraph from a report here
                      <textarea
                        id="paragraph"
                        name="paragraph"
                        rows={5}
                        className="block w-full mt-3 border rounded shadow-sm border-coolGray-300 focus:ring-yellow-400 focus:border-yellow-400 sm:text-sm"
                        placeholder="DEAR SHAREHOLDERS,
                      2020 was a year like no other. When we started out, we were looking forward to a great year of sport, with
                      the UEFA EURO 2020 and the Olympic Games in Tokyo at its core. And with the strong development adidas
                      has seen over the last four years, we were well on track to achieving all the long-term targets we had set
                      out in our strategy ‘Creating the New’."
                        defaultValue=""
                      />
                    </label>
                  </div>
                </div>
                <div className="px-4 py-3 text-right bg-coolGray-50 sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-black bg-yellow-400 border border-transparent rounded shadow-sm hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                  >
                    Analyze
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
