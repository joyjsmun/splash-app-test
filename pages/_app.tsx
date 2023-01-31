import React from "react";
import "../styles/globals.css";
import Layout from "../components/Layout";
import type { AppProps } from "next/app";
import { createTheme, NextUIProvider, Theme } from "@nextui-org/react";
import { globalCss } from "@nextui-org/react";

const theme = createTheme({
  type: "light", // it could be "light" or "dark"
  theme: {
    colors: {
      // brand colors
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

      secondaryLight: "$cyan200",
      secondaryLightHover: "$cyan300",
      secondaryLightActive: "$cyan400",
      secondaryLightContrast: "$cyan600",
      secondary: "#70DFFD",
      secondaryBorder: "$cyan500",
      secondaryBorderHover: "$cyan600",
      secondarySolidHover: "$cyan700",
      secondarySolidContrast: "$white",
      secondaryShadow: "$cyan500",

      gradient: "linear-gradient(to right, $brightBlue, $purple)",
      // link: '#5E1DAD',

      // custom colors
      brightBlue: "#70DFFD",
      spWhite: "#FAFAFA",
      lightPurple: "#E7CBFD",
      purple: "#7554FA",
      darkBlue: "#0E0D37",
      // myColor: '#ff4ecd'

      // backgroundColor: "#70DFFD",

      // ...  more colors
    },
    space: {},
    fonts: {},
  },
});

const globalStyles = globalCss({
  html: { margin: 0, background: "#0E0D37" },
});

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();
  return (
    <NextUIProvider theme={theme}>
      <Layout title="Splash - Invest by Watching">
        <Component {...pageProps} />
      </Layout>
    </NextUIProvider>
  );
}

export default MyApp;
