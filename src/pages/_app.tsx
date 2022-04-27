import type { AppProps } from "next/app";

import { ResultContextProvider } from "../hooks/ResultContext";

import { PageContainer } from "../styles/pages/_app";
import ThemeProvider from "../styles/theme/themeProvider";
import GlobalStyle from "../styles/global";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <PageContainer>
        <ResultContextProvider>
          <Component {...pageProps} />
        </ResultContextProvider>
      </PageContainer>
    </ThemeProvider>
  );
}

export default MyApp;
