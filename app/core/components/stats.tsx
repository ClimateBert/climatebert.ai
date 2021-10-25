import React from "react"

export interface StatsProps {
  tokens: number
  requests: number
}

export const Stats: React.FC<StatsProps> = ({ tokens, requests }): JSX.Element => {
  return (
    <section className="relative">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 ">
        <dl className="bg-white rounded shadow-xl sm:grid sm:grid-cols-3">
          <div className="flex flex-col p-6 text-center border-b border-gray-100 sm:border-0 sm:border-r ">
            <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">Requests</dt>
            <dd className="order-1 text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-400">
              {requests.toLocaleString("de")}
            </dd>
          </div>
          <div className="flex flex-col p-6 text-center border-t border-b border-gray-100 sm:border-0 sm:border-l sm:border-r">
            <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">
              Tokens analyzed
            </dt>
            <dd className="order-1 text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-400">
              {tokens.toLocaleString("de")}
            </dd>
          </div>
          <div className="flex flex-col p-6 text-center border-t border-gray-100 sm:border-0 sm:border-l">
            <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">
              Paragraphs trained on
            </dt>
            <dd className="order-1 text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-400">
              1.6M
            </dd>
          </div>
        </dl>
      </div>
    </section>
  )
}
