import React from "react";

export const Stats: React.FC = (): JSX.Element => {
	return (
		<section className="relative">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 ">
        <dl className="bg-white rounded shadow-xl sm:grid sm:grid-cols-2">
          <div className="flex flex-col p-6 text-center border-t border-b border-slate-100 sm:border-0 sm:border-l sm:border-r">
            <dt className="order-2 mt-2 text-lg font-medium leading-6 text-slate-500">
              Parameters
            </dt>
            <dd className="order-1 text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-400">
              82,350,916
            </dd>
          </div>
          <div className="flex flex-col p-6 text-center border-t border-slate-100 sm:border-0 sm:border-l">
            <dt className="order-2 mt-2 text-lg font-medium leading-6 text-slate-500">
              Paragraphs trained on
            </dt>
            <dd className="order-1 text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-400">
              1,662,206
            </dd>
          </div>
        </dl>
      </div>
    </section>
	);
};
