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
              <div className="container flex items-center justify-between px-4 py-8 mx-auto">
                <Link href="/">
                  <a className="flex items-center gap-2 duration-500 border-b-2 border-transparent whitespace-nowrap hover:border-coolGray-200 hover:text-white">
                    <Logo />
                    <span className="font-bold">ClimateBERT</span>
                  </a>
                </Link>

                <nav className="flex items-center justify-center gap-4 text-xl duration-500 lg:gap-8 xl:gap-16 lg:text-2xl text-coolGray-100 ">
                  <Link href="/analyzer">
                    <a className="border-b-2 border-transparent whitespace-nowrap hover:border-coolGray-200 hover:text-white">
                      Analyzer
                    </a>
                  </Link>
                  <Link href="/language-model">
                    <a className="border-b-2 border-transparent whitespace-nowrap hover:border-coolGray-200 hover:text-white">
                      Language Model
                    </a>
                  </Link>
                  <Link href="/about">
                    <a className="border-b-2 border-transparent whitespace-nowrap hover:border-coolGray-200 hover:text-white">
                      About
                    </a>
                  </Link>
                  <Link href="/authors">
                    <a className="border-b-2 border-transparent whitespace-nowrap hover:border-coolGray-200 hover:text-white">
                      Authors
                    </a>
                  </Link>
                  <Link href="https://github.com/ClimateBert/climatebert.ai">
                    <a className="inline-flex justify-center border-b-2 border-transparent whitespace-nowrap hover:border-coolGray-200 hover:text-white">
                      <svg
                        className="w-6 h-6 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9 1.4.3 2.6.4 3.8.4 8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1-8.4 1.9-15.9 2.7-22.6 2.7-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1 10.5 0 20-3.4 25.6-6 2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8 0 0 1.6-.5 5-.5 8.1 0 26.4 3.1 56.6 24.1 17.9-5.1 37-7.6 56.1-7.7 19 .1 38.2 2.6 56.1 7.7 30.2-21 48.5-24.1 56.6-24.1 3.4 0 5 .5 5 .5 12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5 1.2 0 2.6-.1 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z" />
                      </svg>
                    </a>
                  </Link>
                </nav>
              </div>
            </header>

            <div className="flex flex-col justify-center h-screen">
              <div className="flex justify-center text-center md:text-left">
                <div className="flex items-center justify-start text-coolGray-50">
                  <div className="flex flex-col items-center">
                    <h2 className="p-2 text-xl shadow-xl bg-opacity-20 text-coolGray-300">
                      AI powered climate-related corporate disclosure analytics
                    </h2>
                    <h1 className="flex flex-col gap-3 mt-2 font-bold tracking-tight text-center text-7xl md:tracking-wider">
                      <span>Analyze</span>
                      <span>Reflect</span>
                      <span>Engage</span>
                    </h1>
                    <div className="mt-20">
                      <Link href="/analyzer">
                        <a className="inline-flex justify-center py-3 text-2xl font-semibold text-black duration-500 border-2 w-72 hover:bg-black hover:bg-opacity-80 hover:text-coolGray-100 border-coolGray-200 bg-coolGray-50">
                          Start Now
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
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
