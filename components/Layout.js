import React from "react";

import Head from "next/head";

import Navbar from "./Navbar";

const Layout = ({ children, title = "Splash - Invest by Watching" }) => (
  <div className="flex h-full flex-col">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Navbar />
    <main className="mb-20 ">{children}</main>
  </div>
);

export default Layout;
