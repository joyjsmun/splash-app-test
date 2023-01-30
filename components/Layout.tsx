import React from "react";

import Head from "next/head";

import Navigation from "./Navigation";
import { Box } from "./Box";

type LayoutProps = {
  children: React.ReactNode;
  title: string;
};

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <Box
    css={{
      maxW: "100%",
    }}
  >
    <Navigation />
    <main>{children}</main>
    {/* Footer */}
  </Box>
);

export default Layout;
