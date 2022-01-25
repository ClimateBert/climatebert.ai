import { Navbar } from "components/navbar";
import Footer from "components/footer";
import Link from "next/link";

export default function About() {
  return (
    <>
      <Navbar />

      <div className="relative px-4 py-8 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto text-lg max-w-prose">
          <h1>
            <span className="block text-base font-semibold tracking-wide text-center text-transparent uppercase bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-400">
              About
            </span>
            <span className="block mt-2 text-3xl font-extrabold leading-8 tracking-tight text-center text-slate-900 sm:text-4xl">
              ClimateBert
            </span>
          </h1>
        </div>
        <div className="mx-auto mt-6 prose prose-lg text-slate-500 prose-blue">
          <p>
            <strong>Climatebert.ai</strong> is a joint research project of{" "}
            <strong>Julia Anna Bingler</strong> from ETH Zürich,{" "}
            <strong>Mathias Kraus</strong> and{" "}
            <strong>Nicolas Webersinke</strong> from FAU Erlangen-Nürnberg, and{" "}
            <strong>Markus Leippold</strong> from University of Zürich. For more
            information about the authors and their background, see{" "}
            <Link href="/authors">
              <a>Authors</a>
            </Link>
            .
          </p>
          <p>
            Our project started in 2019 with the overall aim to make
            climate-related unstructured textual information from various
            sources available for research, policy-making, financial supervisory
            authorities, and financial analysts. As a first step, we trained the
            model to analyze climate-related disclosures of companies (see our
            working paper on{" "}
            <a
              href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3796152"
              target="_blank"
              rel="noreferrer"
            >
              SSRN
            </a>
            ). Ever since then, ClimateBERT has constantly evolved.
          </p>
          <h2>Language Model</h2>
          <p>
            ClimateBERT is the name of our transformer-based language model
            adapted for use for climate-related text and has been fine-tuned on
            various downstream tasks.
          </p>
          <p>
            See{" "}
            <Link href="/language-model">
              <a>Language Model</a>
            </Link>{" "}
            for more information on our language model.
          </p>
          <h2>Downstream Tasks</h2>
          <p>
            So far, ClimateBERT has been fine-tuned on six downstream tasks. It
            is able to
            <ol role="list">
              <li>detect climate content in text files,</li>
              <li>assess the sentiment of this content,</li>
              <li>fact-check climate-related claims,</li>
              <li>
                assign a climate disclosure category to the climate-related
                content based on the four categories of the recommendations of
                the{" "}
                <a
                  href="https://www.fsb-tcfd.org/publications/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Task Force on Climate-related Financial Disclosures (TCFD)
                </a>
                ,
              </li>
              <li>
                identify whether climate-related content is a commitment for
                climate action, and
              </li>
              <li>
                to assess whether climate-related content is rather specific or
                unspecific boilerplate language.
              </li>
            </ol>
          </p>
          <p>
            The additional downstream tasks that ClimateBERT has been trained on
            since our first steps could serve various use cases. For example, it
            could aid financial supervisors in assessing the state of corporate
            climate risk disclosures. Or it could support governments in their
            recent activities to detect corporate greenwashing activities.
            Financial analysts might use ClimateBERT to identify the climate
            risk and opportunities that a company.
          </p>
          <h2>Carbon Footprint</h2>
          <p>
            Training deep neural networks in general and large language models,
            in particular, has a significant carbon footprint already today. If
            the LM research trends continue, this detrimental climate impact
            will increase considerably. We acknowledge that our work is part of
            this trend. To see how we address this sensitive topic in detail,
            see the respective section on carbon footprint in our research
            papers.
          </p>
          <p>
            In general, we would have liked to train and run our models on
            servers powered by renewable energy. This first best option was
            unfortunately not available. In order to speed up the energy system
            transformation required to achieve the global climate targets, we
            contribute our part by donating Euro 100 to atmosfair. We explicitly
            refrain from calling this donation a CO<sub>2</sub> compensation,
            and we refrain from a solution based on afforestation. See the
            appendix of our language model research paper for a more detailed
            statement on the matter.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
