import Head from "next/head";
import Image from "next/image";

import Showcase from "../components/Showcase";

export default function Home() {
  return (
    <div className="h-full w-[100vw]">
      <Showcase />
    </div>
  );
}
