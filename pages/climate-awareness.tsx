import { ClipboardCheckIcon, ClipboardCopyIcon } from "@heroicons/react/outline";
import Footer from "components/footer";
import { Navbar } from "components/navbar";
import cn from "classnames";
import { useState } from "react";
export default function ClimateAwareness() {
  const citation = `@article{todo,
  journal={arXiv preprint arXiv:2110.12010},
  year={2021}
}`;

  const [copied, setCopied] = useState(false);

  return (
    <>
      <Navbar />

      <div className="relative px-4 py-8 sm:px-6 lg:px-8 lg:py-20">
        <h1 className="block mx-auto text-base text-4xl font-extrabold leading-8 tracking-wide text-center text-gray-900 uppercase mb-14">
          Climate Awareness in NLP Research
        </h1>
        <div className="mx-auto mt-6 prose prose-lg text-slate-500 prose-blue">
          <p>
            Lorem ipsum.
          </p>
          <h2>BibTeX entry and citation info</h2>
          <div className="flex flex-col items-center justify-center">
            <pre className="container">{citation}</pre>
            <button
              aria-label="Copy to clipboard"
              className={cn(
                "p-2 transition duration-200 transform text-primary-600 focus:outline-none hover:text-slate-900",
                {
                  "text-white": copied,
                  "text-slate-700": !copied,
                }
              )}
              onClick={(e) => {
                const tmp = document.createElement("textarea");
                tmp.innerText = citation;
                document.body.appendChild(tmp);
                tmp.select();
                document.execCommand("copy");
                e.currentTarget.focus();
                setCopied(true);
                tmp.parentNode?.removeChild(tmp);
              }}
            >
              {copied ? (
                <div className="flex items-center gap-2 text-slate-600">
                  <ClipboardCheckIcon className="w-6 h-6" />
                  <span className="whitespace-nowrap">Copied to clipboard</span>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <ClipboardCopyIcon className="w-6 h-6" />
                  <span className="whitespace-nowrap">Copy citation</span>
                </div>
              )}
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
