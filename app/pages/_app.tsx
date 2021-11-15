import "tailwindcss/tailwind.css"

import {
  AppProps,
  ErrorBoundary,
  ErrorComponent,
  ErrorFallbackProps,
  useQueryErrorResetBoundary,
  Head,
} from "blitz"
import PlausibleProvider from "next-plausible"

export default function App({ Component, pageProps }: AppProps) {
  const getLayout = Component.getLayout || ((page) => page)

  return (
    <PlausibleProvider domain="climatebert.ai">
      <Head>
        <title>AI powered climate-related corporate disclosure analytics</title>
        <meta
          name="description"
          content="AI powered climate-related corporate disclosure analytics"
        />
      </Head>
      <ErrorBoundary
        FallbackComponent={RootErrorFallback}
        onReset={useQueryErrorResetBoundary().reset}
      >
        {getLayout(<Component {...pageProps} />)}
      </ErrorBoundary>
    </PlausibleProvider>
  )
}

function RootErrorFallback({ error }: ErrorFallbackProps) {
  return <ErrorComponent statusCode={error.statusCode || 400} title={error.message || error.name} />
}
