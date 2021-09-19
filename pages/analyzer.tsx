import React, { useEffect, useState } from "react"
import { Navbar } from "components/navbar"
import cn from "classnames"
import { useRouter } from "next/dist/client/router"

export default function Analyze() {
  const maxTokens = 4000
  const [content, setContent] = useState("")
  const [usedTokens, setUsedTokens] = useState(0)
  const [error, setError] = useState<string | undefined>(undefined)
  const [result, setResult] = useState<Record<string, number> | undefined>(undefined)

  useEffect(() => {
    setUsedTokens(content === "" ? 0 : content.split(" ").length)
  }, [content])

  const router = useRouter()
  return (
    <div className="h-screen bg-coolGray-50">
      <Navbar />

      <div className="flex items-center justify-center h-screen">
        <div className="container mx-auto">
          <div className="mt-5 md:mt-0 md:col-span-2">
            <div className="shadow sm:roun sm:overflow-hidden">
              {!result ? (
                <form>
                  <div className="px-4 py-5 space-y-6 bg-white sm:p-6">
                    <div>
                      <label
                        htmlFor="paragraph"
                        className="block mt-1 text-sm font-medium text-coolGray-700"
                      >
                        Copy a paragraph from a report here
                        <span
                          className={cn("ml-4 text-xs px-2 border py-1 bg-gray-100 rounded", {
                            "text-red-600 bg-transparent border-red-200": usedTokens > maxTokens,
                          })}
                        >
                          {usedTokens} / {maxTokens} tokens used
                        </span>
                        <textarea
                          id="paragraph"
                          name="paragraph"
                          rows={5}
                          onChange={(e) => {
                            setContent(e.currentTarget.value)
                          }}
                          className="block w-full mt-3 border rounded shadow-sm border-coolGray-300 focus:ring-emerald-400 focus:border-emerald-400 sm:text-sm"
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
                </form>
              ) : (
                <div className="p-6 bg-white">
                  <code>{JSON.stringify(result, null, 2)}</code>
                </div>
              )}
              <div className="flex items-center justify-between px-4 py-3 text-right bg-coolGray-50 sm:px-6">
                <span className="text-red-500">{error}</span>
                {!result ? (
                  <button
                    type="submit"
                    onClick={async () => {
                      if (usedTokens > maxTokens) {
                        setError(
                          `Currently you can only submit ${maxTokens} at a time. Please contact us at "info@climatebert.ai" if you required more.`,
                        )
                        return
                      }

                      const res = await fetch("/api/classify", {
                        method: "POST",
                        body: JSON.stringify({ content }),
                      })
                      if (!res.ok) {
                        setError(await res.text())
                      } else {
                        setError(undefined)
                        setResult(await res.json())
                      }
                    }}
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-black border border-transparent rounded shadow-sm bg-emerald-400 hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                  >
                    Analyze
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => router.reload()}
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-black border border-transparent rounded shadow-sm bg-emerald-400 hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                  >
                    Analyze again
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
