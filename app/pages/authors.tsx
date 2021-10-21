import { GetStaticProps, NextPage } from "next"
import React from "react"
import Image from "next/image"
import Link from "next/link"

import { FAULogo } from "app/core/components/logos/fau"
import { UZHLogo } from "app/core/components/logos/uzh"
import { ETHZLogo } from "app/core/components/logos/ethz"
import { Navbar } from "app/core/components/navbar"

type Uni = "fau" | "eth" | "uzh"

type Author = {
  name: string
  title: string
  image: string
  description: string
  social: {
    github?: string
    linkedIn?: string
  }

  uni: Uni

  department: string
}

const UniLogo = (uni: Uni): JSX.Element => {
  switch (uni) {
    case "fau":
      return <FAULogo />
    case "eth":
      return <ETHZLogo />
    case "uzh":
      return <UZHLogo />
    default:
      throw new Error(`Unknown university`)
  }
}

export interface AuthorsPageProps {
  authors: Author[]
}
const AuthorsPage: NextPage<AuthorsPageProps> = ({ authors }) => {
  return (
    <div className="h-screen bg-gray-50">
      <Navbar />
      <div className="container grid grid-cols-1 gap-16 p-8 mx-auto mt-20 md:grid-cols-2 xl:grid-cols-4">
        {authors.map((author) => (
          <div key={author.name} className="relative overflow-hidden bg-white rounded shadow-xl">
            <div
              className="relative z-10 h-80"
              style={{ clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 5vw), 0 100%" }}
            >
              <Image
                objectFit="cover"
                layout="fill"
                className="w-full "
                src={author.image}
                alt="Profile image"
              />
            </div>
            <div className="relative z-50 flex flex-row-reverse items-center justify-between px-6 -mt-10">
              <Link href={author.department}>
                <a className="h-10 p-2 bg-white rounded-sm lg:bg-transparent">
                  {UniLogo(author.uni)}
                </a>
              </Link>
            </div>
            <div className="relative p-4 mt-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 ">{author.name}</h2>
              <h3 className="mt-2 italic text-gray-600">{author.title}</h3>
              <p className="mt-6 text-gray-500 dark:text-gray-400 lg:max-w-md">
                Proin luctus malesuada lobortis. Curabitur sit amet enim odio. Morbi sit amet nisl
                commodo, posuere eros id, pulvinar diam. Donec eget tortor nec metus ornare
                eleifend. Donec non mauris quis est maximus gravida. Aenean sit amet fermentum
                velit. In dapibus magna sed odio fringilla aliquet.
              </p>
            </div>

            <footer className="absolute inset-x-0 bottom-0 flex items-center justify-center gap-2 p-4">
              {author.social.linkedIn ? (
                <Link href={author.social.linkedIn}>
                  <a aria-label="LinkedIn">
                    <svg
                      className="w-6 h-6 text-gray-700 fill-current dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M417.2 64H96.8C79.3 64 64 76.6 64 93.9V415c0 17.4 15.3 32.9 32.8 32.9h320.3c17.6 0 30.8-15.6 30.8-32.9V93.9C448 76.6 434.7 64 417.2 64zM183 384h-55V213h55v171zm-25.6-197h-.4c-17.6 0-29-13.1-29-29.5 0-16.7 11.7-29.5 29.7-29.5s29 12.7 29.4 29.5c0 16.4-11.4 29.5-29.7 29.5zM384 384h-55v-93.5c0-22.4-8-37.7-27.9-37.7-15.2 0-24.2 10.3-28.2 20.3-1.5 3.6-1.9 8.5-1.9 13.5V384h-55V213h55v23.8c8-11.4 20.5-27.8 49.6-27.8 36.1 0 63.4 23.8 63.4 75.1V384z" />
                    </svg>
                  </a>
                </Link>
              ) : null}
              {author.social.github ? (
                <Link href={author.social.github}>
                  <a aria-label="LinkedIn">
                    <svg
                      className="w-6 h-6 text-gray-700 fill-current dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9 1.4.3 2.6.4 3.8.4 8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1-8.4 1.9-15.9 2.7-22.6 2.7-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1 10.5 0 20-3.4 25.6-6 2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8 0 0 1.6-.5 5-.5 8.1 0 26.4 3.1 56.6 24.1 17.9-5.1 37-7.6 56.1-7.7 19 .1 38.2 2.6 56.1 7.7 30.2-21 48.5-24.1 56.6-24.1 3.4 0 5 .5 5 .5 12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5 1.2 0 2.6-.1 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z" />
                    </svg>
                  </a>
                </Link>
              ) : null}
            </footer>
          </div>
        ))}
      </div>
    </div>
  )
}
export default AuthorsPage
export const getStaticProps: GetStaticProps<AuthorsPageProps> = () => {
  return {
    props: {
      authors: [
        {
          name: "Julia Anna Bingler",
          title: "Doctoral Researcher, ETH Zürich",
          social: { linkedIn: "https://ch.linkedin.com/in/jubingler" },
          description: "abc",

          department:
            "https://resec.ethz.ch/people/person-detail.MjQ5OTkw.TGlzdC8zMDI2LC0yMDk5NTM5OTY=.html",
          image: "/authors/julia_anna_bingler.jpg",
          uni: "eth",
        },
        {
          name: "Mathias Kraus",
          title: "Professor for Data Analytics, University of Erlangen-Nuremberg",
          social: {
            linkedIn: " https://de.linkedin.com/in/mathias-kraus-639431113",
          },

          description: "abc",
          department: "https://www.data-analytics.rw.fau.eu/about-us/",
          image: "/authors/mathias_kraus.jpg",
          uni: "fau",
        },
        {
          name: "Markus Leippold",
          title: "Professor of Financial Engineering, University of Zurich",
          social: {
            linkedIn: "https://ch.linkedin.com/in/markus-leippold-578bb95",
          },
          description: "abc",
          department: "https://www.bf.uzh.ch/en/persons/leippold-markus/detail",
          image: "/authors/markus_leippold.jpg",
          uni: "uzh",
        },
        {
          name: "Nicolas Webersinke",
          title: "Research Associate, University of Erlangen-Nuremberg",
          social: {
            linkedIn: "https://de.linkedin.com/in/nicolas-webersinke-6b45a6150/",
            github: "https://github.com/webersni",
          },
          description: "abc",
          department: "https://www.lfb.rw.fau.de/person/nicolas-webersinke/",
          image: "/authors/nicolas_webersinke.jpg",
          uni: "fau",
        },
      ],
    },
  }
}
