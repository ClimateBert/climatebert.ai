import { CubeTransparentIcon, LightningBoltIcon, VariableIcon } from "@heroicons/react/outline"
import React, { useEffect, useRef, useState } from "react"

import Footer from "app/core/components/footer"
import { Navbar } from "app/core/components/navbar"
import { NewsSection } from "app/core/components/section/news"
import { Section } from "app/core/components/section"
import Signup from "app/mutations/signup"
import { Stats } from "app/core/components/stats"
import cn from "classnames"
import { useMutation } from "blitz"

function useInterval(callback: () => void, delay: number) {
  const savedCallback = useRef()

  // Remember the latest callback.
  useEffect(() => {
    // @ts-ignore
    savedCallback.current = callback
  }, [callback])

  // Set up the interval.
  useEffect(() => {
    function tick() {
      // @ts-expect-error
      savedCallback.current()
    }
    if (delay !== null) {
      let id = setInterval(tick, delay)
      return () => clearInterval(id)
    }
  }, [delay])
}

const SignupForm: React.FC = (): JSX.Element => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  const [success, setSuccess] = useState<string | null>(null)
  const [email, setEmail] = useState("")
  const [signup] = useMutation(Signup)

  if (success) {
    return <p className="block text-sm font-semibold text-center uppercase">{success}</p>
  }
  return (
    <div>
      <label htmlFor="email" className="block text-sm font-semibold text-center uppercase ">
        Join the waitlist to get early access
      </label>
      <div className="flex flex-col items-center justify-center max-w-md gap-4 mx-auto mt-3 md:flex-row">
        <input
          type="email"
          name="email"
          id="email"
          className="flex-grow block w-full h-12 duration-700 border rounded shadow border-coolGray-800 md:w-auto form-input hover:border-black focus:border-black focus:outline-none hover:shadow-cta focus:shadow-cta"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
        />
        <button
          disabled={loading || !!error}
          onClick={async () => {
            setLoading(true)
            try {
              const { rank } = await signup({ email })
              setSuccess(`You are number ${rank.toLocaleString("de")} on the waitlist`)
            } catch (err) {
              setError(err.message)
            } finally {
              setLoading(false)
            }
          }}
          type="button"
          className={cn(
            "block w-full  h-12 px-4 text-white uppercase duration-1000 border border-black rounded shadow md:w-auto whitespace-nowrap medium white bg-gradient-to-t from-black via-coolGray-800 to-black hover:from-coolGray-200 hover:via-white hover:to-coolGray-200 hover:text-black hover:border-black focus:outline-none hover:shadow-cta",
            {
              "animate-pulse": loading,
            }
          )}
        >
          <span>Get early access</span>
        </button>
      </div>
      {error ? <p className="text-red-600">{error.message}</p> : null}
    </div>
  )
}

export default function Home() {
  const [scroll, setScroll] = useState(typeof window !== "undefined" ? window.scrollY : 0)
  useEffect(() => {
    const cb = () => setScroll(window.scrollY)

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", cb)
    }
    return () => {
      window.removeEventListener("scroll", cb)
    }
  })

  const [tokens, setTokens] = useState(Math.floor(Date.now() / 1_000_000))
  const [requests, setRequests] = useState(Math.floor(Date.now() / 234_567_800))
  useInterval(() => {
    setTokens(tokens + Math.floor(Math.random() * 10))
    setRequests(requests + Math.floor(Math.random() * 1.1))
  }, 100)

  return (
    <div className=" bg-gray-50">
      <div className="h-screen">
        <div className="fixed inset-x-0 top-0 z-50">
          <Navbar />
        </div>
        <section className="relative z-10 ">
          <div className="relative w-full h-full">
            <div
              className="absolute z-0 w-full h-screen pointer-events-none "
              style={{
                backgroundImage: "url('/forest.jpg')",
                backgroundAttachment: "fixed",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                opacity: `${Math.min(50 + scroll / 5, 100)}%`,
              }}
            ></div>
            <div className="relative flex flex-col justify-center w-full h-screen ">
              <div className="flex flex-col justify-center space-y-4 text-center md:text-left md:space-y-6 lg:space-y-8 xl:space-y-16">
                <h2 className="p-2 text-xl text-center text-transparent bg-gradient-to-r bg-clip-text from-coolGray-800 via-coolGray-600 to-coolGray-800">
                  AI powered climate-related corporate disclosure analytics
                </h2>
                <h1 className="flex flex-col gap-3 py-4 -my-4 font-black text-center text-transparent bg-clip-text bg-gradient-to-tr from-black via-coolGray-800 to-black text-7xl sm:text-8xl md:text-9xl">
                  <span>Analyze.</span>
                  <span>Reflect.</span>
                  <span>Engage.</span>
                </h1>
                <div className="mt-12 text-black">
                  <SignupForm />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <main className="relative pt-16 pb-32 space-y-32 overflow-hidden bg-white">
        <Stats requests={requests} tokens={tokens} />
        <Section
          title="Transparency"
          description="We enable companies’ stakeholders to assess all kinds of climate-related corporate disclosures in an efficient and scalable way. This increases transparency massively."
          icon={<CubeTransparentIcon />}
          image="/iceland.jpg"
        />

        <Section
          reverse
          title="State-of-the-art AI technology"
          description="We apply state-of-the-art AI technology to assess climate-related corporate disclosures. ClimateBERT has been trained on thousands of climate-related texts, making it a powerful tool to assist you."
          icon={<VariableIcon />}
          image="/tech-wallpaper.jpg"
        />
        <Section
          title="Analyze. Reflect. Engage."
          description="Our service gives you the opportunity to have an impact. Start analyzing, get insights and draw your own conclusions. Let’s protect our planet together."
          icon={<LightningBoltIcon />}
          image="/iceland2.jpg"
        />
        <NewsSection />
      </main>
      <Footer />
    </div>
  )
}
