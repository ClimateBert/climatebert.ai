import { NextPage } from "next"
import { Background } from "components/background"
import backgroundImage from "../public/wasted.png"

/*
State

Step 0:
form with file upload
    - Add button to use text directly -> switch out file upload with textarea

Step 1:
file has been uploaded and pdf converted
    - display progress and spinner

Step 2:
Report has been classsified
    - display graphs and classes as json <code>
    


*/

export const Classify: NextPage = () => {
  return (
    <Background image={backgroundImage}>
      <div className="flex items-center justify-center w-screen h-screen">
        <form action="#" method="POST">
          <div className=" sm:overflow-hidden">
            <div className="px-4 py-5 space-y-6 bg-white bg-opacity-50 sm:p-6">
              <div className="flex justify-center px-6 pt-5 pb-6 mt-1 border border-dashed border-coolGray-300">
                <div className="space-y-1 text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-12 h-12 mx-auto text-Gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  <div className="flex text-sm text-coolGray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative font-medium bg-white cursor-pointer text-amber-600 hover:text-amber-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                    >
                      <span>Upload a report</span>
                      <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </Background>
  )
}

export default Classify
