import React from "react"

import Head from "next/head"

import Navbar from "./Navbar"

type LayoutProps = {
  children: React.ReactNode
  title: string
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div className="flex h-full flex-col">
    <Navbar />
    <main className="mb-20 ">{children}</main>
    {/* Footer */}
  </div>
)

export default Layout
