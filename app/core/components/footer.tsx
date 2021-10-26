import { ETHZLogo } from "./logos/ethz"
import { FAULogo } from "./logos/fau"
import { Link } from "blitz"
import React from "react"
import { UZHLogo } from "./logos/uzh"
import { string } from "zod"

export default function Footer() {
  const social: { name: string; icon: React.ReactNode; href: string }[] = [
    {
      name: "github",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9 1.4.3 2.6.4 3.8.4 8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1-8.4 1.9-15.9 2.7-22.6 2.7-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1 10.5 0 20-3.4 25.6-6 2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8 0 0 1.6-.5 5-.5 8.1 0 26.4 3.1 56.6 24.1 17.9-5.1 37-7.6 56.1-7.7 19 .1 38.2 2.6 56.1 7.7 30.2-21 48.5-24.1 56.6-24.1 3.4 0 5 .5 5 .5 12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5 1.2 0 2.6-.1 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z" />
        </svg>
      ),
      href: "https://github.com/ClimateBert",
    },
  ]
  const navigation: { name: string; href: string }[] = [
    {
      name: "Analyzer",
      href: "/analyzer",
    },
    {
      name: "Language Model",
      href: "/language-model",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Authors",
      href: "/authors",
    },
    {
      name: "Imprint",
      href: "/imprint",
    },
    {
      name: "Privacy Policy",
      href: "/privacy",
    },
    {
      name: "Contact",
      href: "mailto:hello@climatebert.ai",
    },
  ]
  return (
    <footer className="bg-coolGray-900">
      <div className="px-4 py-12 mx-auto overflow-hidden max-w-7xl sm:px-6 lg:px-8">
        <div className="container px-4 py-12 mx-auto sm:px-6 lg:px-8">
          <div className="grid w-40 grid-cols-1 gap-4 mx-auto text-coolGray-200 sm:w-full sm:grid-cols-3 lg:gap-24 sm:gap-8 sm md:gap-16 xl:gap-32">
            <Link href="https:ethz.ch">
              <a target="_blank" rel="noreferrer" className="hover:text-coolGray-100">
                <ETHZLogo />
              </a>
            </Link>
            <Link href="https:fau.de">
              <a target="_blank" rel="noreferrer" className="hover:text-coolGray-100">
                <FAULogo />
              </a>
            </Link>
            <Link href="https:uzh.ch">
              <a target="_blank" rel="noreferrer" className="hover:text-coolGray-100">
                <UZHLogo />
              </a>
            </Link>
          </div>
        </div>
        <nav className="flex flex-wrap justify-center -mx-5 -my-2" aria-label="Footer">
          {navigation.map((item) => (
            <div key={item.name} className="px-5 py-2">
              <a href={item.href} className="text-base text-gray-400 hover:text-gray-100">
                {item.name}
              </a>
            </div>
          ))}
        </nav>
        <div className="flex justify-center mt-8 space-x-6">
          {social.map((item) => (
            <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-100">
              <span className="sr-only">{item.name}</span>
              <div className="w-6 h-6 fill-current">{item.icon}</div>
            </a>
          ))}
        </div>
        <p className="mt-8 text-base text-center text-gray-400">
          &copy; {new Date().getUTCFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  )
}
