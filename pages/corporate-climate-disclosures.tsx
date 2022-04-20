import { ClipboardCheckIcon, ClipboardCopyIcon } from "@heroicons/react/outline";
import Footer from "components/footer";
import { Navbar } from "components/navbar";
import cn from "classnames";
import { useState } from "react";
export default function CorporateClimateDisclosures() {
	const citationCommitments = `@techreport{bklw2022cheaptalkcommitments,
    title={Cheap Talk in Corporate Climate Commitments: The Role of Active Institutional Ownership, Signaling, Materiality, and Sentiment},
    author={Bingler, Julia Anna and Kraus, Mathias and Leippold, Markus and Webersinke, Nicolas},
    type = {Working Paper},
    institution={Available at SSRN 3998435},
    year={2022}
}`;

	const citationCheapTalk = `@article{bklw2022cheaptalkcherrypicking,
    title = {Cheap talk and cherry-picking: What ClimateBert has to say on corporate climate risk disclosures},
    journal = {Finance Research Letters},
    pages = {102776},
    year = {2022},
    issn = {1544-6123},
    doi = {https://doi.org/10.1016/j.frl.2022.102776},
    url = {https://www.sciencedirect.com/science/article/pii/S1544612322000897},
    author = {Julia Anna Bingler and Mathias Kraus and Markus Leippold and Nicolas Webersinke},
    keywords = {Climate-risk disclosure, Voluntary reporting, TCFD recommendations, Natural language processing},
    abstract = {Disclosure of climate-related financial risks greatly helps investors assess companies’ preparedness for climate change. Voluntary disclosures such as those based on the recommendations of the Task Force for Climate-related Financial Disclosures (TCFD) are being hailed as an effective measure for better climate risk management. We ask whether this expectation is justified. We do so by training ClimateBERT, a deep neural language model fine-tuned based on the language model BERT. In analyzing the disclosures of TCFD-supporting firms, ClimateBERT comes to the sobering conclusion that the firms’ TCFD support is mostly cheap talk and that firms cherry-pick to report primarily non-material climate risk information.}
}`;

	const [copiedCommitments, setCopiedCommitments] = useState(false);
	const [copiedCheapTalk, setCopiedCheapTalk] = useState(false);

	return (
		<>
      <Navbar />

      <div className="relative px-4 py-8 space-y-8 md:space-y-16 xl:space-y-32 sm:px-6 lg:px-8 lg:py-20">
        <section>
          <h1 className="block mx-auto text-base text-4xl font-extrabold leading-8 tracking-wide text-center text-gray-900 uppercase mb-14">
            Corporate climate disclosures
          </h1>
          <p className="container mx-auto prose prose-lg text-slate-500 prose-blue">

            Dinge dinge
          </p>
        </section>
        <section>
          <span className="block mb-2 text-base font-semibold tracking-wide text-center text-transparent uppercase bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-400">
            Paper
          </span>
          <h2 className="block mx-auto text-base text-4xl font-extrabold leading-8 tracking-wide text-center text-gray-900 mb-14">
            Cheap Talk in Corporate Climate Commitments
          </h2>
          <div className="mx-auto mt-6 prose prose-lg text-slate-500 prose-blue">
            <p>Lorem ipsum doloret.</p>
            <p>Lorem doloret!</p>
            <h2>TCFD Classification Model Weights</h2>
            <p>
              The finetuned TCFD category model with text classification head is
              publicly available on 🤗 Hugging Face Hub:{" "}
              <a
                href="https://huggingface.co/climatebert/tba"
                target="_blank"
                rel="noreferrer"
              >
                huggingface.co/climatebert/tba
              </a>
            </p>
            <h2>BibTeX entry and citation info</h2>
            <div className="flex flex-col items-center justify-center">
              <pre className="container">{citationCommitments}</pre>
              <button
                aria-label="Copy to clipboard"
                className={cn(
                  "p-2 transition duration-200 transform text-primary-600 focus:outline-none hover:text-slate-900",
                  {
                    "text-white": copiedCommitments,
                    "text-slate-700": !copiedCommitments,
                  }
                )}
                onClick={(e) => {
                  const tmp = document.createElement("textarea");
                  tmp.innerText = citationCommitments;
                  document.body.appendChild(tmp);
                  tmp.select();
                  document.execCommand("copy");
                  e.currentTarget.focus();
                  setCopiedCommitments(true);
                  setCopiedCheapTalk(false);
                  tmp.parentNode?.removeChild(tmp);
                }}
              >
                {copiedCommitments ? (
                  <div className="flex items-center gap-2 text-slate-600">
                    <ClipboardCheckIcon className="w-6 h-6" />
                    <span className="whitespace-nowrap">
                      Copied to clipboard
                    </span>
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
        </section>
        <section>
          <span className="block mb-2 text-base font-semibold tracking-wide text-center text-transparent uppercase bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-400">
            Paper
          </span>
          <h2 className="block mx-auto text-base text-4xl font-extrabold leading-8 tracking-wide text-center text-gray-900 mb-14">
            Cheap Talk and Cherry Picking
          </h2>
          <div className="mx-auto mt-6 prose prose-lg text-slate-500 prose-blue">
            <p>Lorem ipsum doloret.</p>
            <p>Lorem doloret!</p>
            <h2>TCFD Classification Model Weights</h2>
            <p>
              The finetuned TCFD category model with text classification head is
              publicly available on 🤗 Hugging Face Hub:{" "}
              <a
                href="https://huggingface.co/climatebert/tba"
                target="_blank"
                rel="noreferrer"
              >
                huggingface.co/climatebert/tba
              </a>
            </p>
            <h2>BibTeX entry and citation info</h2>
            <div className="flex flex-col items-center justify-center">
              <pre className="container">{citationCheapTalk}</pre>
              <button
                aria-label="Copy to clipboard"
                className={cn(
                  "p-2 transition duration-200 transform text-primary-600 focus:outline-none hover:text-slate-900",
                  {
                    "text-white": copiedCheapTalk,
                    "text-slate-700": !copiedCheapTalk,
                  }
                )}
                onClick={(e) => {
                  const tmp = document.createElement("textarea");
                  tmp.innerText = citationCheapTalk;
                  document.body.appendChild(tmp);
                  tmp.select();
                  document.execCommand("copy");
                  e.currentTarget.focus();
                  setCopiedCheapTalk(true);
                  setCopiedCommitments(false);
                  tmp.parentNode?.removeChild(tmp);
                }}
              >
                {copiedCheapTalk ? (
                  <div className="flex items-center gap-2 text-slate-600">
                    <ClipboardCheckIcon className="w-6 h-6" />
                    <span className="whitespace-nowrap">
                      Copied to clipboard
                    </span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <ClipboardCopyIcon className="w-6 h-6" />
                    <span className="whitespace-nowrap">Copy citation</span>
                  </div>
                )}
              </button>
            </div>
          </div>{" "}
        </section>
      </div>
      <Footer />
    </>
	);
}
