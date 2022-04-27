import type { AppProps } from "next/app";
import { ResultContextProvider } from "../hooks/ResultContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ResultContextProvider>
      <Component {...pageProps} />
    </ResultContextProvider>
  );
}

export default MyApp;
