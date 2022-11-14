import React, { useState } from "react";
import Image from "next/image";

const Showcase = () => {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({
    email: "",
  });

  const validateEmail = (emailAddress) => {
    let isValid = true;
    if (typeof emailAddress !== "undefined" && emailAddress !== "") {
      const pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );

      if (!pattern.test(emailAddress)) {
        isValid = false;
        setErrors({ email: "Please enter a valid email address" });
      }
    }
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmail(email)) {
      console.log("submitting: ", email);
    }
  };

  const handleChange = (e) => {
    console.log("onChange: ", e.target.value);
    setEmail(e.target.value);
  };

  return (
    <div className="flex flex-col justify-around md:flex-row">
      <div className="showcase-left self-center">
        <h1 className="max-w-md text-center font-Do-Hyeon text-xl5 sm:text-left">
          Invest by Watching Your Favorite Content
        </h1>
        <p className="py-6 text-center font-ProtoMono-LightShadow text-xl2 sm:text-left">
          Experience the benefits of Web3
        </p>
        <div className="flex flex-col items-center justify-center px-3 sm:flex-row sm:px-0">
          <input
            className="w-full rounded-xl border-2 border-black bg-white p-4 placeholder:font-ProtoMono-SemiBold sm:w-auto sm:flex-1"
            type="email"
            id="email"
            defaultValue=""
            placeholder="Enter Email"
            onChange={handleChange}
          />
          <button
            type="submit"
            onClick={handleSubmit}
            className="mt-2 w-full rounded-xl border-b-4 border-black bg-white p-4 font-ProtoMono-SemiBold hover:border-b-2 sm:mt-0 sm:ml-3 sm:w-auto sm:flex-none"
          >
            Stay Updated
          </button>
        </div>
        <span className="font-ProtoMono-Light text-red-500">
          {errors.email}
        </span>
      </div>
      <div className="showcase-right self-start">
        <Image
          alt="Coins"
          src="/images/coins-illustration.svg"
          width={220}
          height={220}
          priority
          className="hidden md:block"
        />
        <Image
          alt="Video"
          src="/images/right-showcase-illustration.svg"
          width={620}
          height={620}
          priority
          className="mx-3 block pt-3"
        />
      </div>
    </div>
  );
};

export default Showcase;
