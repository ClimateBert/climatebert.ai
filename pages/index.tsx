import {
  CubeTransparentIcon,
  LightningBoltIcon,
  VariableIcon,
} from "@heroicons/react/outline";
import React, { useEffect, useState } from "react";
import Footer from "components/footer";
import { Navbar } from "components/navbar";
import { NewsSection } from "components/section/news";
import { Section } from "components/section";
import Link from "next/link";
// import Signup from "app/mutations/signup"
import { Stats } from "components/stats";
// import { useMutation, Image } from "blitz"
import Image from "next/image";
import { Button } from "components/button";
const SignupForm: React.FC = (): JSX.Element => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  // const [signup] = useMutation(Signup)

  if (success) {
    return (
      <p className="block text-sm font-semibold text-center uppercase">
        {success}
      </p>
    );
  }
  return (
    <div>
      <label
        htmlFor="email"
        className="block text-sm font-semibold text-center uppercase "
      >
        Join the waitlist to get early access
      </label>
      <div className="flex flex-col items-center justify-center max-w-md gap-4 mx-auto mt-3 md:flex-row">
        <input
          type="email"
          name="email"
          id="email"
          className="flex-grow block w-full h-12 duration-700 border rounded shadow border-slate-800 md:w-auto form-input hover:border-black focus:border-black focus:outline-none hover:shadow-cta focus:shadow-cta"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
        />
        <Button
          state={error ? "disabled" : loading ? "loading" : undefined}
          onClick={async () => {
            setLoading(true);
            try {
              await fetch("/api/sign-up", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }),
              });
              setSuccess(
                `Successfully registered. We will get back to you soon!`
              );
            } catch (err) {
              setError(err as Error);
            } finally {
              setLoading(false);
            }
          }}
          type="button"
        >
          Get early access
        </Button>
      </div>
      {error ? <p className="text-red-600">{error.message}</p> : null}
    </div>
  );
};

export default function Home() {
  const [scroll, setScroll] = useState(
    typeof window !== "undefined" ? window.scrollY : 0
  );
  useEffect(() => {
    const cb = () => setScroll(window.scrollY);

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", cb);
    }
    return () => {
      window.removeEventListener("scroll", cb);
    };
  });

  return (
    <div className=" bg-slate-50">
      <div className="h-screen">
        <div className="fixed inset-x-0 top-0 z-50">
          <Navbar />
        </div>
        <section className="z-0 ">
          <div
            className="fixed w-screen h-screen"
            style={{
              opacity: `${Math.min(50 + scroll / 5, 100)}%`,
            }}
          >
            <Image
              src="/forest.jpg"
              alt="Forest background"
              layout="fill"
              objectFit="cover"
              className="pointer-events-none"
            />
          </div>
          <div className="relative flex flex-col justify-center w-full h-screen ">
            <div className="flex flex-col justify-center space-y-4 text-center md:text-left md:space-y-6 lg:space-y-8">
              <h2 className="p-2 text-xl text-center text-transparent bg-gradient-to-r bg-clip-text from-slate-800 via-slate-600 to-slate-800">
                AI powered climate-related corporate disclosure analytics
              </h2>
              <h1 className="flex flex-col gap-3 py-4 -my-4 font-black text-center text-slate-900 text-7xl sm:text-8xl md:text-9xl">
                <span>Analyze.</span>
                <span>Reflect.</span>
                <span>Engage.</span>
              </h1>
              <div className="px-4 mt-12 text-black">
                <SignupForm />
              </div>
            </div>
          </div>
        </section>
      </div>
      <main className="relative pt-16 pb-32 space-y-32 overflow-hidden bg-white">
        <Stats />
        <section className="relative px-4 sm:px-6 lg:px-8">
          <h1 className="block mx-auto text-base text-4xl font-extrabold leading-8 tracking-wide text-center text-gray-900 mb-14">
            What is ClimateBert about?
          </h1>
          <div className="mx-auto mt-6 prose prose-lg text-slate-500 prose-blue">
            <p>
              ClimateBert is both the name of our joint research project and of our pretrained deep learning language model for climate-related text. We leverage this language model to analyze corporate climate reporting in terms of sentiment, commitments, and specificity. That helps to better understand climate reporting on a large scale and therefore derive important implications for investors, employees or policymakers, among others.            </p>
          </div>
        </section>
        <Section
          title="Transparency to enable action"
          description="We allow corporate stakeholders to assess all types of climate-related corporate disclosures in an efficient and scalable way. This increases transparency massively, and enables climate action."
          icon={<CubeTransparentIcon />}
          image="/iceland.jpg"
        />

        <Section
          reverse
          title="State-of-the-art technology"
          description="We apply state-of-the-art technology to assess climate-related corporate disclosures. ClimateBERT has been trained on millions of climate-related text paragraphs, making it a powerful tool to assist you."
          icon={<VariableIcon />}
          image="/tech-wallpaper.jpg"
        />
        <Section
          title="Analyze to make a difference"
          description="Our service gives you the opportunity to have an impact. Start analyzing, get insights and draw your own conclusions. Let’s protect our planet together."
          icon={<LightningBoltIcon />}
          image="/header.jpg"
        />
        <NewsSection />
      </main>
      <Footer />
    </div>
  );
}
