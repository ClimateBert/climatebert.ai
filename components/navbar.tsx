import { CogIcon, DocumentSearchIcon, MenuIcon, SpeakerphoneIcon, XIcon } from "@heroicons/react/outline";

import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import { Logo } from "components/logo";
import React, { Fragment } from "react";
import cn from "classnames";
import { useRouter } from "next/router";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/solid";

type Page = { name: string, href: string };

export const Navbar: React.FC = (): JSX.Element => {
	const router = useRouter();

	const pages: (
			| Page
			| {
				name: string,
				menu: (Page & { description?: string, icon?: JSX.Element })[],
			}
	)[] = [
		{ name: "Analyzer", href: "/analyzer" },
		{
			name: "Research",
			menu: [
				{
					name: `Corporate climate disclosures`,
					href: "/TODO:",
					icon: <DocumentSearchIcon />,
				},
				{
					name: "Climate Awareness in NLP Research",
					href: "/TODO:",
					icon: <SpeakerphoneIcon />,
				},
				{
					name: "Language Model for Climate-Related Text",
					href: "/TODO:",
					icon: <DocumentSearchIcon />,
				},
			],
		},
		{ name: "Language Model", href: "/language-model" },
		{
			name: "Popover",
			menu: [
				{
					name: "Hello World",
					href: "/hello-world",
					description: "Hello world is something that we like blabla",
					icon: <CogIcon />,
				},
				{
					name: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum",
					href: "/hello-world",
					description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
				},
			],
		},
		{ name: "About", href: "/about" },
		{ name: "Team", href: "/team" },
	];

	return (
		<Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex justify-between w-full">
                <Link href="/">
                  <a className="flex items-center flex-shrink-0 duration-300 text-slate-800 hover:text-black">
                    <Logo />
                    <h2 className="block p-2 text-xl font-medium transition duration-500 ease-in-out transform cursor-pointer">
                      ClimateBert
                    </h2>
                  </a>
                </Link>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8 ">
                  {pages.map((page) =>
                    "href" in page ? (
                      <Link key={page.name} href={page.href}>
                        <a
                          className={cn(
                            "inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2 ",
                            {
                              "border-primary-500 text-slate-900":
                                router.pathname === page.href,
                              "border-transparent text-slate-500 hover:border-slate-300 border-b-2 hover:text-slate-700":
                                router.pathname !== page.href,
                            }
                          )}
                        >
                          {page.name}
                        </a>
                      </Link>
                    ) : (
                      <Popover className="relative">
                        {({ open }) => (
                          <>
                            <Popover.Button
                              className={cn(
                                "h-full inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2 ",
                                {
                                  "border-primary-500 text-slate-900": open,
                                  "border-transparent text-slate-500 hover:border-slate-300 border-b-2 hover:text-slate-700":
                                    !open,
                                }
                              )}
                            >
                              <span>{page.name}</span>
                              <ChevronDownIcon
                                className={`${
                                  open
                                    ? "rotate-180 text-primary-500"
                                    : "text-gray-300"
                                }
                                  ml-2 h-5 w-5  group-hover:text-opacity-80 transition ease-in-out duration-150`}
                                aria-hidden="true"
                              />
                            </Popover.Button>
                            <Transition
                              as={Fragment}
                              enter="transition ease-out duration-200"
                              enterFrom="opacity-0 translate-y-1"
                              enterTo="opacity-100 translate-y-0"
                              leave="transition ease-in duration-150"
                              leaveFrom="opacity-100 translate-y-0"
                              leaveTo="opacity-0 translate-y-1"
                            >
                              <Popover.Panel className="absolute z-10 w-screen max-w-sm px-4 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0 lg:max-w-md">
                                <div className="overflow-hidden rounded shadow-lg ring-1 ring-black ring-opacity-5">
                                  <div className="relative grid gap-8 bg-white p-7 ">
                                    {page.menu.map((item) => (
                                      <a
                                        key={item.name}
                                        href={item.href}
                                        className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                                      >
                                        <div className="flex items-center justify-center flex-shrink-0 w-6 h-6 text-gray-700">
                                          {item.icon}
                                        </div>
                                        <div className="ml-4">
                                          <p className="text-sm font-medium text-gray-900">
                                            {item.name}
                                          </p>
                                          <p className="text-sm text-gray-500">
                                            {item.description}
                                          </p>
                                        </div>
                                      </a>
                                    ))}
                                  </div>
                                </div>
                              </Popover.Panel>
                            </Transition>
                          </>
                        )}
                      </Popover>
                    )
                  )}
                </div>
              </div>

              <div className="flex items-center -mr-2 sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded text-slate-400 hover:text-slate-500 hover:bg-slate-100 focus:outline-none ">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block w-6 h-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block w-6 h-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="pt-2 pb-3 space-y-1">
              {/* Current: "bg-primary-50 border-primary-500 text-primary-700", Default: "border-transparent text-slate-500 hover:bg-slate-50 hover:border-slate-300 hover:text-slate-700" */}

              {pages.map((page) =>
                "href" in page ? (
                  <Disclosure.Button
                    key={page.name}
                    as="a"
                    href={page.href}
                    className={cn(
                      "block py-2 pl-3 pr-4 text-base font-medium  border-l-4   ",
                      {
                        "border-primary-500 text-primary-700":
                          router.pathname === page.href,
                        "text-slate-500 border-transparent hover:text-slate-700":
                          router.pathname !== page.href,
                      }
                    )}
                  >
                    {page.name}
                  </Disclosure.Button>
                ) : (
                  <Disclosure>
                    {({ open }) => (
                      <>
                        <Disclosure.Button
                          className={cn(
                            "block py-2 pl-3 pr-4 text-base font-medium  border-l-4 flex justify-between items-center w-full  ",
                            {
                              "border-primary-500 text-primary-700": open,
                              "text-slate-500 border-transparent hover:text-slate-700":
                                !open,
                            }
                          )}
                        >
                          <span>{page.name}</span>
                          <ChevronUpIcon
                            className={`${
                              open
                                ? "-rotate-180 text-primary-500"
                                : "text-gray-300"
                            } w-5 h-5 transition duration-300  transform `}
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="px-4 text-sm text-gray-500 bg-gray-50">
                          {page.menu.map((item) => (
                            <Link href={item.href} key={item.href}>
                              <a className="flex items-center justify-between py-2 transition duration-150 ease-in-out focus:outline-none">
                                <p className="text-sm font-medium text-gray-900">
                                  {item.name}
                                </p>
                                <p className="text-sm text-gray-500">
                                  {item.description}
                                </p>
                              </a>
                            </Link>
                          ))}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                )
              )}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
	);
};
