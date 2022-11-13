import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="flex justify-between px-24 py-24">
      <div className="logo">
        <Link
          href="/"
          className="text-primary mb-6 text-center text-5xl font-bold text-black"
        >
          <div className="relative">
            <span className="z-10 font-ProtoMono-SemiBold">Splash</span>
            <span className="absolute right-1 font-ProtoMono-SemiBoldShadow  ">
              Splash
            </span>
          </div>
        </Link>
      </div>
      <div className="flex items-center justify-between">
        <div className="mx-6">
          <Link
            href="/twitter"
            className="text-md hover:text-primary mb-6 text-center font-bold "
          >
            <Image
              alt="Twitter"
              src="/images/twitter.svg"
              width={30}
              height={30}
            />
          </Link>
        </div>
        <div className="mx-6">
          <Link
            href="/discord"
            className="text-md hover:text-primary mb-6 text-center font-bold "
          >
            <Image
              alt="Discord"
              src="/images/discord.svg"
              width={30}
              height={30}
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
