import React from "react"
import Link from "next/link"
import { Logo } from "./logo"

const NavbarLink = ({ href, label }: { href: string; label: string }): JSX.Element => {
  return (
    <Link href={href}>
      <a className="px-4 py-1 text-base transition duration-500 ease-in-out transform rounded-md text-coolGray-600 focus:outline-none hover:text-black ">
        {label}
      </a>
    </Link>
  )
}

export const Navbar: React.FC = (): JSX.Element => {
  return (
    <nav className="container items-center mx-auto md:h-20 md:-mb-20">
      <div className="transition duration-500 ease-in-out transform text-coolGray-700 ">
        <div className="flex flex-col flex-wrap p-5 mx-auto md:items-center md:flex-row">
          <Link href="/">
            <a className="pr-2 lg:pr-8 lg:px-6 focus:outline-none">
              <div className="inline-flex items-center">
                <Logo />
                <h2 className="block p-2 text-xl font-medium text-black transition duration-500 ease-in-out transform cursor-pointer hover:text-coolGray-500 lg:text-x lg:mr-8">
                  ClimateBert
                </h2>
              </div>
            </a>
          </Link>
          <div className="flex flex-wrap items-center justify-center text-base md:ml-auto md:mr-auto">
            <div className="items-center inline-block list-none md:inline-flex">
              <NavbarLink href="/analyzer" label="Analyzer" />
              <NavbarLink href="/language-model" label="Language Model" />
              <NavbarLink href="/about" label="About" />
              <NavbarLink href="/authors" label="Authors" />
            </div>
          </div>
          <Link href="https://github.com/ClimateBert/climatebert.ai">
            <a className="inline-flex justify-center w-auto text-black transition duration-500 ease-in-out transform focus:outline-none hover:text-gray-800">
              <svg
                className="w-6 h-6 text-gray-700 fill-current dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9 1.4.3 2.6.4 3.8.4 8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1-8.4 1.9-15.9 2.7-22.6 2.7-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1 10.5 0 20-3.4 25.6-6 2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8 0 0 1.6-.5 5-.5 8.1 0 26.4 3.1 56.6 24.1 17.9-5.1 37-7.6 56.1-7.7 19 .1 38.2 2.6 56.1 7.7 30.2-21 48.5-24.1 56.6-24.1 3.4 0 5 .5 5 .5 12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5 1.2 0 2.6-.1 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z" />
              </svg>
            </a>
          </Link>
        </div>
      </div>
    </nav>
  )
}
