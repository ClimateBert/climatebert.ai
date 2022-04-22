import { Navbar } from "components/navbar";
import Footer from "components/footer";
import Link from "next/link";

export default function Imprint() {
	return (
		<>
      <Navbar />

      <div className="relative px-4 py-8 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto text-lg max-w-prose">
          <h1>
            <span className="block text-base font-semibold tracking-wide text-center text-transparent uppercase bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-400">
              Imprint
            </span>
          </h1>
        </div>
        <div className="mx-auto mt-6 prose prose-lg text-slate-500 prose-blue">
          <h2>Information pursuant to Sect. 5 German Telemedia Act (TMG)</h2>
          <p>
            <strong>Climatebert - Bingler Kraus Leippold Webersinke GbR</strong>
            <br />
            Treibberg 9<br />
            90403 Nürnberg
          </p>
          <p>
            <strong>Represented by:</strong>
            <br />
            Julia Anna Bingler
            <br />
            Mathias Kraus
            <br />
            Markus Leippold
            <br />
            Nicolas Webersinke
          </p>
          <h2>Contact</h2>
          <p>
            Phone: +49 1601551312
            <br />
            E-mail: hello@climatebert.ai
          </p>
          <h2>EU dispute resolution</h2>
          <p>
            The European Commission provides a platform for online dispute
            resolution (ODR):
            <Link href="https://ec.europa.eu/consumers/odr/">
              <a target="_blank" rel="noreferrer">
                ec.europa.eu/consumers/odr
              </a>
            </Link>
            <br />
            Our e-mail address can be found above in the site notice.
          </p>
          <h2>
            Dispute resolution proceedings in front of a consumer arbitration
            board
          </h2>
          <p>
            We are not willing or obliged to participate in dispute resolution
            proceedings in front of a consumer arbitration board.
          </p>
        </div>
      </div>
      <Footer />
    </>
	);
}
