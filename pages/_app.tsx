import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "@components/Layout";
import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThirdwebProvider, ChainId } from "@thirdweb-dev/react";

import "@fontsource/figtree/400.css";
import "@fontsource/figtree/500.css";
import "@fontsource/figtree/700.css";

const chakraTheme: ThemeConfig = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: "#111827",
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
      // brightBlue: "#70DFFD",
      brightBlue: "#00c9ff",
      white: "#FAFAFA",
      gray: "#7C7A85",
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  //const desiredChainId = ChainId.Polygon;
  const desiredChainId = ChainId.Mumbai;
  // Create a client
  const queryClient = new QueryClient();
  return (
    <ChakraProvider resetCSS theme={chakraTheme}>
      <ThirdwebProvider desiredChainId={desiredChainId}>
        <QueryClientProvider client={queryClient}>
          <Layout title="Splash - Invest by Watching">
            <Component {...pageProps} />
          </Layout>
        </QueryClientProvider>
      </ThirdwebProvider>
    </ChakraProvider>
  );
}

export default MyApp;
