import React from "react";
import Link from "next/link";
import { BiLeftArrowAlt } from "react-icons/bi";

const Error = () => {
  return (
    <div className="w-[100%] h-[70%] flex justify-center items-center relative">
      <div className="w-full h-full">
        <img
          src="/ErrorPageBG.avif"
          alt="BG"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="absolute z-10 bg-transparent text-white top-1/4 flex flex-col items-center gap-2">
        <p className="text-base font-normal mb-2">404</p>
        <p className="font-serif font-bold text-2xl md:text-5xl">
          Page not found
        </p>
        <p className="text-gray-100 text-sm md:text-xl mx-4 sm:mx-0 text-center">
          Sorry, we couldn't found the page you're looking for
        </p>
        <Link
          href="/"
          className="flex gap-2 items-center text-lg mt-2 hover:text-white hover:font-bold cursor-pointer transition-all"
        >
          <BiLeftArrowAlt />
          <p>Back to the Home</p>
        </Link>
      </div>
    </div>
  );
};

export default Error;
