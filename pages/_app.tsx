import React from "react";
import "../styles/globals.css";
import Layout from "../components/Layout";
import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout title="Splash - Invest by Watching">
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
    </Layout>
  );
}

export default MyApp;
