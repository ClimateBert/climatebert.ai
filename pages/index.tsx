import { Background } from "components/background"
import Image from "next/image"
import Link from "next/link"
import { Logo } from "components/logo"
import headerImage from "../public/header.jpg"
import auroraImage from "../public/aurora.jpg"

export default function Home() {
  return (
    <div className="bg-black">
      <section className="h-screen">
        <Background image={headerImage}>
          <header className="absolute inset-x-0 hidden text-xl md:block font-lighttext-coolGray-100">
            <div className="container flex items-center justify-end mx-auto">
              <div className="flex-col flex-wrap items-center hidden w-full mx-auto md:flex md:flex-row ">
                <Link href="/">
                  <a className="flex items-center gap-4 p-6 text-lg duration-500 bg-coolGray-100 text-coolGray-900 hover:bg-black hover:bg-opacity-50 hover:text-coolGray-100">
                    <Logo />
                    <span className="font-bold">ClimateBERT</span>
                  </a>
                </Link>
              </div>
              <nav className="flex items-center justify-center gap-16 mt-8 text-2xl text-coolGray-100 ">
                <Link href="/classify">
                  <a className="duration-500 border-b-2 border-transparent hover:border-coolGray-200 hover:text-white">
                    Classify
                  </a>
                </Link>
                <Link href="/authors">
                  <a className="duration-500 border-b-2 border-transparent hover:border-coolGray-200 hover:text-white">
                    Authors
                  </a>
                </Link>
              </nav>
            </div>
          </header>

          <div className="flex justify-center h-screen text-center md:justify-end md:text-left">
            <div className="flex items-center justify-center text-coolGray-50 md:w-2/3">
              <div className="flex flex-col items-center md:items-start">
                <h2 className="hidden text-xl xl:block text-coolGray-400">
                  AI powered climate-related corporate disclosure analytics
                </h2>
                <h1 className="flex flex-col gap-2 mt-2 font-bold text-center text-7xl md:text-left md:text-6xl">
                  <span>Analyze and make a difference.</span>
                  <span>Protect our planet.</span>
                </h1>
                <div className="flex justify-center w-full mt-24">
                  <Link href="/classify">
                    <a className="px-16 py-3 text-2xl font-semibold text-black duration-500 border-2 animate-pulse-slow hover:bg-black hover:bg-opacity-80 hover:text-coolGray-100 border-coolGray-200 bg-coolGray-50">
                      GO
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Background>
      </section>
      <section />
      <section className="bg-coolGray-100">
        <div className="flex flex-col items-center justify-center md:flex-row md:p-16">
          <div className="md:w-3/5">
            <h3 className="text-4xl">Transparency</h3>
            <p className="text-coolGray-700">
              We enable companies’ stakeholders to assess all kinds of climate-related corporate
              disclosures in an efficient and scalable way. This increases transparency massively.
            </p>
          </div>
          <div className="relative h-16 md:h-full md:w-2/5 ">
            <Image src={auroraImage} alt="Background image" objectFit="fill" placeholder="blur" />
          </div>
        </div>
      </section>
      <section className="bg-coolGray-100">
        <div className="flex flex-col items-center justify-center md:flex-row-reverse md:p-16">
          <div className="md:w-3/5">
            <h3 className="text-4xl">Analyze, conclude, engage</h3>
            <p className="text-coolGray-700">
              Our service gives you the opportunity to have an impact. Start analyzing, get insights
              and draw your own conclusions. Let’s protect our planet.
            </p>
          </div>
          <div className="relative h-16 md:h-full md:w-2/5 ">
            <Image src={auroraImage} alt="Background image" objectFit="fill" placeholder="blur" />
          </div>
        </div>
      </section>
    </div>
  )
}
