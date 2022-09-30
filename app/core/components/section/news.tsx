import { ArrowNarrowRightIcon } from "@heroicons/react/outline"
import Link from "next/link"

export const NewsSection: React.FC = (): JSX.Element => {
  const posts = [
    {
      title: "Financial Times",
      href: "https://www.ft.com/content/8fa51ec0-0396-477a-9d06-0854995621f5",
      description:
        "If you say the word “green activist” to a corporate executive, Greta Thunberg may spring to mind — and provoke fear. Today, however, there is another force to watch: robots.",
      date: "March 18, 2021",
    },
    {
      title: "Bloomberg",
      href: "https://www.bloomberg.com/news/articles/2021-03-12/the-risk-of-letting-big-finance-write-its-own-climate-rules",
      description:
        "The industry is pushing for voluntary standards, but the stakes may be too high to wait and see if it that’s enough.",
      date: "March 12, 2021",
    },
    {
      title: "Climate Risk Review",
      href: "https://www.climateriskreview.com/p/researchers-set-an-nlp-model-loose",
      description:
        "Researchers set an NLP model loose on TCFD disclosures. It found scant evidence of useful climate information",
      date: "March 4, 2021",
    },
    {
      title: "The Geneva Observer",
      href: "https://www.thegenevaobserver.com/post/beware-greenwashers-a-i-will-spot-you",
      description: "AI and deep learning can instantly spot corporate greenwashing",
      date: "April 15, 2021",
    },
    {
      title: "NZZ",
      href: "https://www.nzz.ch/finanzen/fonds/warum-ethische-anlagen-bei-tabakaktien-zu-ueberrenditen-fuehren-ld.1643077",
      description: "Ethische Anleger nützen den Aktienrenditen von umweltschädlichen Firmen",
      date: "September 17, 2021",
    },
  ]
  return (
    <div className="px-4 pt-16 pb-20 bg-white sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            News
          </h2>
        </div>
        <div className="grid gap-16 pt-10 mt-6 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
          {posts.map((post) => (
            <div key={post.title}>
              <p className="text-sm text-gray-500">
                <time dateTime={new Date(post.date).toISOString()}>{post.date}</time>
              </p>
              <a href="#" className="block mt-2">
                <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                <p className="mt-3 text-base text-gray-500">{post.description}</p>
              </a>
              <div className="mt-3">
                <Link href={post.href}>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center space-x-2 text-base font-semibold "
                  >
                    <span className="text-transparent uppercase bg-clip-text bg-gradient-to-tr from-primary-600 to-secondary-400">
                      Read Article
                    </span>
                    <ArrowNarrowRightIcon className="w-4 h-4 fill-current text-secondary-400" />
                  </a>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
