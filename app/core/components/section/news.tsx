import { ArrowNarrowRightIcon } from "@heroicons/react/outline"

export const NewsSection: React.FC = (): JSX.Element => {
  const posts = [
    {
      title: "ClimateBert language model",
      href: "https://www.linkedin.com/posts/markus-leippold-578bb95_climatebert-climatefever-climatechange-activity-6857023720192536576--h0M",
      description:
        "Excited to release soon our ClimateBert language model, a pretrained language model for climate-related text. It’s joint work with great colleagues: Julia Anna Bingler, Mathias Kraus, and Nicolas Webersinke. ",
      date: "Oct 21, 2021",
    },
  ]
  return (
    <div className="px-4 pt-16 pb-20 bg-white sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">News</h2>
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
                <a
                  href={post.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-base font-semibold text-transparent uppercase bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600"
                >
                  Read more
                  <ArrowNarrowRightIcon className="w-4 h-4 fill-current" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
