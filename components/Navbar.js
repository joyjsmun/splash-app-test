import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="max-w-100vw flex-col pt-20 pb-10 pl-20 pr-24 sm:flex-row md:flex md:justify-between">
      <div className="logo">
        <Link
          href="/"
          className="text-primary text-5xl mb-6 text-center text-center text-xl5 font-bold  text-black"
        >
          <Image
            alt="Twitter"
            src="/images/splash-logo.png"
            width={320}
            height={320}
            priority
            className="pl-9 sm:pl-0"
          />
        </Link>
      </div>
      <div className="flex items-center justify-center md:justify-between">
        <div className="mx-6">
          <Link
            href="/twitter"
            className="text-md hover:text-primary mb-6 text-center font-bold hover:opacity-70"
          >
            <Image
              alt="Twitter"
              src="/images/twitter.svg"
              width={30}
              height={30}
              priority
            />
          </Link>
        </div>
        <div className="mx-6">
          <Link
            href="/discord"
            className="text-md hover:text-primary mb-6 text-center font-bold hover:opacity-70"
          >
            <Image
              alt="Discord"
              src="/images/discord.svg"
              width={30}
              height={30}
              priority
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
