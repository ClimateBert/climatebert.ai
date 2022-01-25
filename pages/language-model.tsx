import {
  ClipboardCheckIcon,
  ClipboardCopyIcon,
} from "@heroicons/react/outline";
import Footer from "components/footer";
import { Navbar } from "components/navbar";
import cn from "classnames";
import { useState } from "react";
export default function LanguageModel() {
  const citation = `@article{wkbl2021,
  title={ClimateBERT: A Pretrained Language Model for Climate-Related Text},
  author={Webersinke, Nicolas and Kraus, Mathias and Bingler, Julia and Leippold, Markus},
  journal={arXiv preprint arXiv:2110.12010},
  year={2021}
}`;

  const [copied, setCopied] = useState(false);

  return (
    <>
      <Navbar />

      <div className="relative px-4 py-8 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto text-lg">
          <h1>
            <span className="block text-base font-semibold tracking-wide text-center text-transparent uppercase bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-400">
              Language Model
            </span>
            <span className="block mt-2 text-3xl font-extrabold leading-8 tracking-tight text-center text-gray-900 sm:text-4xl">
              ClimateBERT
            </span>
          </h1>
        </div>
        <div className="mx-auto mt-6 prose prose-lg text-gray-500 prose-blue">
          <p>
            ClimateBERT is the name of our transformer-based language model
            adapted for use for climate-related text and has been fine-tuned on
            various downstream tasks.
          </p>
          <p>
            Using the{" "}
            <a
              href="https://huggingface.co/distilroberta-base"
              target="_blank"
              rel="noreferrer"
            >
              DistilRoBERTa model
            </a>{" "}
            as starting point, the ClimateBERT Language Model is additionally
            pretrained on a text corpus comprising climate-related research
            paper abstracts, corporate and general news and reports from
            companies. The underlying methodology can be found in our{" "}
            <a
              href="https://arxiv.org/abs/2110.12010"
              target="_blank"
              rel="noreferrer"
            >
              language model research paper
            </a>
            .
          </p>
          <h2>Language Model Weights</h2>
          <p>
            The pretrained domain-adapted language models with masked language
            model head are publicly available on 🤗 Hugging Face Hub:
            <ol role="list">
              <li>
                ClimateBERT<sub>F</sub>:{" "}
                <a
                  href="https://huggingface.co/climatebert/distilroberta-base-climate-f"
                  target="_blank"
                  rel="noreferrer"
                >
                  huggingface.co/climatebert/distilroberta-base-climate-f
                </a>
              </li>
              <li>
                ClimateBERT<sub>S</sub>:{" "}
                <a
                  href="https://huggingface.co/climatebert/distilroberta-base-climate-s"
                  target="_blank"
                  rel="noreferrer"
                >
                  huggingface.co/climatebert/distilroberta-base-climate-s
                </a>
              </li>
              <li>
                ClimateBERT<sub>D</sub>:{" "}
                <a
                  href="https://huggingface.co/climatebert/distilroberta-base-climate-d"
                  target="_blank"
                  rel="noreferrer"
                >
                  huggingface.co/climatebert/distilroberta-base-climate-d
                </a>
              </li>
              <li>
                ClimateBERT<sub>D+S</sub>:{" "}
                <a
                  href="https://huggingface.co/climatebert/distilroberta-base-climate-d-s"
                  target="_blank"
                  rel="noreferrer"
                >
                  huggingface.co/climatebert/distilroberta-base-climate-d-s
                </a>
              </li>
            </ol>
          </p>
          <h2>BibTeX entry and citation info</h2>
          <div className="flex flex-col items-center justify-center">
            <pre className="container">{citation}</pre>
            <button
              aria-label="Copy to clipboard"
              className={cn(
                "p-2 transition duration-200 transform text-primary-600 focus:outline-none hover:text-coolGray-900",
                {
                  "text-white": copied,
                  "text-coolGray-700": !copied,
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
                <div className="flex items-center gap-2 text-coolGray-600">
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
