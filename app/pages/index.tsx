import { Navbar } from "app/core/components/navbar"
import {
  CubeTransparentIcon,
  VariableIcon,
  LightningBoltIcon,
  MailIcon,
} from "@heroicons/react/outline"
import { Section } from "app/core/components/section"
import Footer from "app/core/components/footer"
import image from "public/hero.png"
import Image from "next/image"
import { useEffect, useState } from "react"

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

  return (
    <>
      <div className="h-screen">
        <div className="relative w-full h-full ">
          <div
            className="absolute w-screen h-screen"
            style={{
              backgroundImage: "url('/hero.png')",
              backgroundAttachment: "fixed",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              opacity: `${Math.min(10 + scrollY / 5, 100)}%`,
            }}
          ></div>
          <div className="relative z-10 h-screen">
            <Navbar />
            <div className="relative flex flex-col justify-center h-full pt-16 -mt-16">
              <div className="flex justify-center text-center md:text-left">
                <div className="flex items-center justify-start text-coolGray-50">
                  <div className="flex flex-col items-center space-y-16">
                    <h1 className="flex flex-col gap-3 font-black text-center text-black text-7xl sm:text-9xl">
                      <span>Analyze.</span>
                      <span>Reflect.</span>
                      <span>Engage.</span>
                    </h1>
                    <div className="text-black">
                      <label htmlFor="email" className="block text-sm text-center uppercase">
                        Join the waitlist to get early access
                      </label>
                      <div className="flex flex-col items-center justify-center gap-4 mt-3 md:flex-row">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          className="h-12 px-4 duration-700 border border-gray-500 rounded-sm shadow form-input hover:border-black focus:border-black hover:shadow-2xl focus:outline-none"
                          placeholder="Enter your email"
                        />
                        <button
                          type="button"
                          className="h-12 px-4 font-medium text-white uppercase duration-700 bg-black border border-gray-500 rounded-sm shadow hover:bg-white hover:text-black hover:border-black focus:outline-none hover:shadow-2xl"
                        >
                          <span>Get early access</span>
                        </button>
                      </div>
                    </div>
                    <h2 className="p-2 text-xl text-coolGray-600">
                      AI powered climate-related corporate disclosure analytics
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <main>
        <div className="relative pt-16 pb-32 space-y-32 overflow-hidden bg-white">
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
        </div>
      </main>
      <Footer />
    </>
  )
}
