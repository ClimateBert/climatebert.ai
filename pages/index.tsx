import { Background } from "components/background"
import Link from "next/link"
import { Logo } from "components/logo"
import { FAULogo } from "components/logos/fau"
import { UZHLogo } from "components/logos/uzh"
import { ETHZLogo } from "components/logos/ethz"
import headerImage from "../public/header.jpg"
import footer from "../public/footer.jpg"
import iceland from "../public/iceland.jpg"
import tech from "../public/tech-wallpaper.jpg"
import iceland2 from "../public/iceland2.jpg"

export default function Home() {
  return (
    <div className="bg-coolGray-100">
      <section className="h-screen bg-black">
        <Background image={headerImage}>
          <div className="bg-gradient-to-tr from-transparent via-transparent to-black">
            <header className="absolute inset-x-0 hidden text-xl font-light md:block text-coolGray-100">
              <div className="container flex items-center justify-end mx-auto">
                <div className="flex-col flex-wrap items-center hidden w-full mx-auto md:flex md:flex-row ">
                  <Link href="/">
                    <a className="flex items-center gap-4 p-6 text-lg duration-500 bg-coolGray-100 text-coolGray-900 hover:bg-black hover:bg-opacity-50 hover:text-coolGray-100">
                      <Logo />
                      <span className="font-bold">ClimateBERT</span>
                    </a>
                  </Link>
                </div>
                <nav className="flex items-center justify-center gap-16 mt-8 text-xl lg:text-2xl text-coolGray-100 ">
                  <Link href="/analyzer">
                    <a className="duration-500 border-b-2 border-transparent whitespace-nowrap hover:border-coolGray-200 hover:text-white">
                      Analyzer
                    </a>
                  </Link>
                  <Link href="/language-model">
                    <a className="duration-500 border-b-2 border-transparent whitespace-nowrap hover:border-coolGray-200 hover:text-white">
                      Language Model
                    </a>
                  </Link>
                  <Link href="/about">
                    <a className="duration-500 border-b-2 border-transparent whitespace-nowrap hover:border-coolGray-200 hover:text-white">
                      About
                    </a>
                  </Link>
                  <Link href="/authors">
                    <a className="duration-500 border-b-2 border-transparent whitespace-nowrap hover:border-coolGray-200 hover:text-white">
                      Authors
                    </a>
                  </Link>
                </nav>
              </div>
            </header>

            <div className="flex flex-col justify-center h-screen">
              <div className="flex justify-center text-center md:text-left">
                <div className="hidden md:block md:w-1/2" />
                <div className="flex items-center justify-start md:-ml-72 md:w-1/2 text-coolGray-50">
                  <div className="flex flex-col items-center md:items-start">
                    <h2 className="hidden text-xl bg-black bg-opacity-50 shadow-xl xl:block text-coolGray-400">
                      AI powered climate-related corporate disclosure analytics
                    </h2>
                    <h1 className="flex flex-col gap-3 mt-2 font-bold tracking-tight text-center md:text-left md:text-6xl">
                      <span className="text-7xl md:hidden">Analyze</span>
                      <span className="text-3xl md:hidden">Make a Difference</span>
                      <span className="hidden mt-2 text-6xl capitalize md:block">
                        Analyze and make a difference
                      </span>
                    </h1>
                  </div>
                </div>
              </div>
              <div className="mx-auto mt-20">
                <Link href="/analyzer">
                  <a className="inline-flex justify-center py-3 text-2xl font-semibold text-black duration-500 border-2 w-72 hover:bg-black hover:bg-opacity-80 hover:text-coolGray-100 border-coolGray-200 bg-coolGray-50">
                    Start Now
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </Background>
      </section>
      <section />
      <section>
        <Background image={iceland}>
          <div className="bg-gradient-to-tr bg-opacity-70 bg-coolGray-100 from-coolGray-100 via-coolGray-100 to-transparent">
            <div className="container mx-auto">
              <div className="p-12 xl:w-1/2 md:py-48 ">
                <h2 className="text-4xl font-bold text-coolGray-900">Transparency</h2>
                <p className="mt-4 text-lg font-light text-coolGray-800">
                  We enable companies’ stakeholders to assess all kinds of climate-related corporate
                  disclosures in an efficient and scalable way. This increases transparency
                  massively.
                </p>
              </div>
            </div>
          </div>
        </Background>
      </section>
      <section>
        <Background image={tech}>
          <div className="bg-opacity-70 bg-coolGray-900 bg-gradient-to-tl from-black via-coolGray-900 to-transparent">
            <div className="container flex flex-row-reverse w-full mx-auto">
              <div className="p-12 xl:w-1/2 md:py-48 md:text-right">
                <h2 className="text-4xl font-bold text-coolGray-100">
                  State-of-the-art AI technology
                </h2>
                <p className="mt-4 text-lg font-light t text-coolGray-200">
                  We apply state-of-the-art AI technology to assess climate-related corporate
                  disclosures. ClimateBERT has been trained on thousands of climate-related texts,
                  making it a powerful tool to assist you.
                </p>
              </div>
            </div>
          </div>
        </Background>
      </section>
      <section>
        <Background image={iceland2}>
          <div className="bg-gradient-to-tr bg-opacity-70 bg-coolGray-100 from-coolGray-100 via-coolGray-100 to-transparent">
            <div className="container mx-auto">
              <div className="p-12 xl:w-1/2 md:py-48">
                <h2 className="text-4xl font-bold text-coolGray-900">Analyze, conclude, engage</h2>
                <p className="mt-4 text-lg font-light text-coolGray-800">
                  Our service gives you the opportunity to have an impact. Start analyzing, get
                  insights and draw your own conclusions. Let’s protect our planet together.
                </p>
              </div>
            </div>
          </div>
        </Background>
      </section>
      <footer className="bg-black">
        <Background image={footer}>
          <div className="p-16 bg-gradient-to-tr from-black via-transparent to-black">
            <div className="container px-4 py-12 mx-auto sm:px-6 lg:px-8">
              <div className="grid w-40 grid-cols-1 gap-4 mx-auto sm:w-full sm:grid-cols-3 lg:gap-24 sm:gap-8 sm md:gap-16 xl:gap-32 text-coolGray-200">
                <Link href="https://ethz.ch">
                  <a className="hover:text-white">
                    <ETHZLogo />
                  </a>
                </Link>
                <Link href="https://fau.de">
                  <a className="hover:text-white">
                    <FAULogo />
                  </a>
                </Link>
                <Link href="https://uzh.ch">
                  <a className="hover:text-white">
                    <UZHLogo />
                  </a>
                </Link>
              </div>
            </div>

            <div className="container px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
              <div className="flex justify-center">
                <nav className="flex flex-col space-y-4 sm:flex-row sm:space-x-8 sm:space-y-0">
                  <Link href="/analyzer">
                    <a className="text-coolGray-300 whitespace-nowrap hover:text-coolGray-100">
                      Analyzer
                    </a>
                  </Link>
                  <Link href="/language-model">
                    <a className="text-coolGray-300 whitespace-nowrap hover:text-coolGray-100">
                      Language Model
                    </a>
                  </Link>
                  <Link href="/about">
                    <a className="text-coolGray-300 whitespace-nowrap hover:text-coolGray-100">
                      About
                    </a>
                  </Link>
                  <Link href="/authors">
                    <a className="text-coolGray-300 whitespace-nowrap hover:text-coolGray-100">
                      Authors
                    </a>
                  </Link>
                  <Link href="mailto:info@climatebert.ai">
                    <a className="text-coolGray-300 whitespace-nowrap hover:text-coolGray-100">
                      Contact
                    </a>
                  </Link>
                </nav>
              </div>

              <p className="mt-8 text-center text-coolGray-400">
                © {new Date().getFullYear()} All rights reserved.
              </p>
            </div>
          </div>
        </Background>
      </footer>
    </div>
  )
}
