import { MenuIcon, XIcon } from "@heroicons/react/outline";

import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import { Logo } from "components/logo";
import React from "react";
import cn from "classnames";
import { useRouter } from "next/router";

export const Navbar: React.FC = (): JSX.Element => {
  const router = useRouter();

  const pages: { name: string; href: string }[] = [
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
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  {pages.map((page) => (
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
                  ))}
                </div>
              </div>

              <div className="flex items-center -mr-2 sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-slate-500 hover:bg-slate-100 focus:outline-none ">
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

              {pages.map((page) => (
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
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
