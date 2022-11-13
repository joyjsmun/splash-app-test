import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="flex justify-around py-9">
      <div className="">
        <Link
          href="/"
          className="text-primary mb-6 text-center text-5xl font-bold text-black"
        >
          {/* <div className="relative">
            <span className="z-10 font-ProtoMono-SemiBold">Splash</span>
            <span className="absolute right-1 font-ProtoMono-SemiBoldShadow  ">
              Splash
            </span>
          </div> */}

          <div
            className="absolute left-0 top-0  h-full w-full"
            style={{
              background: "url(/images/splash-logo.svg)",
              backgroundSize: "20%",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "top",
            }}
          ></div>
        </Link>
      </div>
      <div className="flex items-center justify-between">
        <div className="mx-6">
          <Link
            href="/"
            className="text-md hover:text-primary mb-6 text-center font-bold "
          >
            Home
          </Link>
        </div>
        <div className="mx-6">
          <Link
            href="/streamer"
            className="text-md hover:text-primary mb-6 text-center font-bold "
          >
            Streamer Toolbox
          </Link>
        </div>
        <div>
          <Link
            href="/streams"
            className="text-md hover:text-primary mb-6 text-center font-bold "
          >
            Stream Manager
          </Link>
        </div>
      </div>
      <div>
        {/* <Input
          placeholder="Search"
          className="input w-full max-w-xs rounded-md bg-gray-800 text-white"
        /> */}
      </div>
      {/* <Button
        label="Connect Wallet"
        primary
        onClick={() => alert("clicked!")}
      /> */}
    </nav>
  );
};

export default Navbar;
