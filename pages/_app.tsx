import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "@components/Layout";
import { extendTheme, ThemeConfig } from "@chakra-ui/react";

import "@fontsource/figtree/400.css";
import "@fontsource/figtree/500.css";
import "@fontsource/figtree/700.css";

const chakraTheme: ThemeConfig = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: "#0E0D37",
        overflowX: "hidden",
      },
    },
  },
  fonts: {
    heading: `'Figtree', sans-serif`,
    body: `'Figtree', sans-serif`,
  },
  colors: {
    brand: {
      darkBlue: "#0E0D37",
      purple: "#7554FA",
      lightPurple: "#E7CBFD",
      brightBlue: "#70DFFD",
      white: "#FAFAFA",
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={chakraTheme}>
      <Layout title="Splash - Invest by Watching">
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
