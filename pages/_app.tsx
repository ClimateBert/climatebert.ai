import PlausibleProvider from "next-plausible";
import React from "react";
import { AppProps } from "next/app";
import "tailwindcss/tailwind.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PlausibleProvider domain="climatebert.ai">
      <Component {...pageProps} />
    </PlausibleProvider>
  );
}
