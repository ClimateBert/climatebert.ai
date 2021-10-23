import { Navbar } from "app/core/components/navbar"
import {
  CubeTransparentIcon,
  VariableIcon,
  LightningBoltIcon,
  MailIcon,
  NewspaperIcon,
} from "@heroicons/react/outline"
import { Section } from "app/core/components/section"
import Footer from "app/core/components/footer"
import { useEffect, useState } from "react"
import { NewsSection } from "app/core/components/section/news"

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

  const tokens = Math.floor(Date.now() / 1000_000_000).toLocaleString("de") + "m"
  const requests = Math.floor(Date.now() / 1_513_792_561).toLocaleString("de") + "k"

  return (
    <div className="bg-gray-50">
      <div className="h-screen">
        <div className="relative w-full h-full ">
          <div
            className="absolute z-0 w-screen h-screen pointer-events-none "
            style={{
              backgroundImage: "url('/hero.png')",
              backgroundAttachment: "fixed",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              opacity: `${Math.min(10 + scroll / 5, 100)}%`,
            }}
          ></div>
          <div className="fixed inset-x-0 top-0 z-50">
            <Navbar />
          </div>
          <section className="relative z-10 h-screen mt-16">
            <div className="relative flex flex-col justify-center h-full pt-16 -mt-16">
              <div className="flex justify-center text-center md:text-left">
                <div className="flex items-center justify-start text-coolGray-50">
                  <div className="flex flex-col items-center">
                    <h1 className="flex flex-col gap-3 py-4 -my-4 font-black text-center text-transparent bg-clip-text bg-gradient-to-tr from-black via-coolGray-900 to-black text-7xl sm:text-8xl md:text-9xl">
                      <span>Analyze.</span>
                      <span>Reflect.</span>
                      <span>Engage.</span>
                    </h1>
                    <div className="mt-12 text-black">
                      <label htmlFor="email" className="block text-sm text-center uppercase">
                        Join the waitlist to get early access
                      </label>
                      <div className="flex flex-col items-center justify-center w-full gap-4 mt-3 md:flex-row">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          className="block h-12 px-4 duration-700 border border-gray-500 rounded shadow form-input hover:border-black focus:border-black focus:outline-none hover:shadow-cta focus:shadow-cta"
                          placeholder="Enter your email"
                        />
                        <button
                          type="button"
                          className="block w-full h-12 px-4 font-medium text-white uppercase duration-1000 border border-black rounded shadow bg-gradient-to-t from-black via-coolGray-800 to-black hover:from-white hover:via-coolGray-100 hover:to-white hover:text-black hover:border-black focus:outline-none hover:shadow-cta"
                        >
                          <span>Get early access</span>
                        </button>
                      </div>
                    </div>
                    <h2 className="p-2 mt-8 text-xl text-coolGray-600">
                      AI powered climate-related corporate disclosure analytics
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <main className="relative pt-16 pb-32 space-y-32 overflow-hidden bg-white">
        <section className="relative">
          <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <dl className="bg-white rounded shadow-lg sm:grid sm:grid-cols-3">
              <div className="flex flex-col p-6 text-center border-b border-gray-100 sm:border-0 sm:border-r">
                <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">
                  Requests
                </dt>
                <dd className="order-1 text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-400">
                  {requests}
                </dd>
              </div>
              <div className="flex flex-col p-6 text-center border-t border-b border-gray-100 sm:border-0 sm:border-l sm:border-r">
                <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">
                  Tokens analyzed
                </dt>
                <dd className="order-1 text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-400">
                  {tokens}
                </dd>
              </div>
              <div className="flex flex-col p-6 text-center border-t border-gray-100 sm:border-0 sm:border-l">
                <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">
                  Denk dir was aus
                </dt>
                <dd className="order-1 text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-400">
                  100k
                </dd>
              </div>
            </dl>
          </div>
        </section>
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
