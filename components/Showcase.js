import React from "react";
import Image from "next/image";

const Showcase = () => {
  const handleClick = (e) => {
    console.log("clicked");
  };

  return (
    <div className="flex justify-around">
      <div className="showcase-left self-center">
        <h1 className="max-w-md font-Do-Hyeon text-xl5">
          Invest by Watching Your Favorite Content
        </h1>
        <p className="py-6 font-ProtoMono-LightShadow text-xl2">
          Experience the benefits of Web3
        </p>
        <div className="flex">
          <input
            className="flex-1 rounded-xl border-2 border-black bg-white p-4 placeholder:font-ProtoMono-SemiBold"
            type="text"
            id="firstName"
            defaultValue=""
            placeholder="Enter Email"
          />
          <button
            type="submit"
            onClick={handleClick}
            className="ml-3 rounded-xl border-b-4 border-black bg-white p-4 font-ProtoMono-SemiBold hover:border-b-2"
          >
            Stay Updated
          </button>
        </div>
      </div>
      <div className="showcase-right self-start">
        <Image
          alt="Coins"
          src="/images/coins-illustration.svg"
          width={220}
          height={220}
          priority
        />
        <Image
          alt="Video"
          src="/images/right-showcase-illustration.svg"
          width={620}
          height={620}
          priority
        />
      </div>
    </div>
  );
};

export default Showcase;
