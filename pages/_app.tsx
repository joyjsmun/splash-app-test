import React from "react";
import "../styles/globals.css";
import Layout from "../components/Layout";
import type { AppProps } from "next/app";
import { createTheme, NextUIProvider, Theme } from "@nextui-org/react";

const theme = createTheme({
  type: "light", // it could be "light" or "dark"
  theme: {
    colors: {
      // brand colors
      brightBlue: "#70DFFD",
      white: "#FAFAFA",
      lightPurple: "#E7CBFD",
      purple: "#7554FA",
      darkPurple: "#0E0D37",

      primaryLight: "#E7CBFD",
      primaryLightHover: "$purple300",
      primaryLightActive: "$purple400",
      primaryLightContrast: "$purple600",
      primary: "#7554FA",
      primaryBorder: "$purple500",
      primaryBorderHover: "$purple600",
      primarySolidHover: "$purple700",
      primarySolidContrast: "$white",
      primaryShadow: "$purple500",

      gradient:
        "linear-gradient(112deg, $brightBlue -25%, $lightPurple -10%, $purple500 80%)",
      // link: '#5E1DAD',

      // you can also create your own color
      // myColor: '#ff4ecd'

      // backgroundColor: "#70DFFD",

      // ...  more colors
    },
    space: {},
    fonts: {},
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout title="Splash - Invest by Watching">
      <NextUIProvider theme={theme}>
        <Component {...pageProps} />
      </NextUIProvider>
    </Layout>
  );
}

export default MyApp;
