import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-[100vh] w-[100vw]">
      {/* <div id="header">
      <div id="logo" className='font-nato'>splash</div>
      <div id="menu">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div> */}
      <div
        className="absolute left-0 top-0  z-0 h-full w-full"
        style={{
          background: "url(/images/splash-bg-home.svg)",
          backgroundSize: "140%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top",
        }}
      ></div>
    </div>
  );
}
