"use client";
import React, { use, useEffect, useState } from "react";
import Header from "components/Header/Header.component";
import Signin from "components/signin/SignIn";
import { useRouter } from "next/navigation";
import {  useSelector } from "react-redux";

function SignIn() {
  const user = useSelector((state) => state.userReducer.user);
  const Router = useRouter();
  return (
    <div className="flex flex-col md:flex-row justify-center gap-6 items-center max-w-screen-xl mx-auto w-full border border-2 border-blue-600 md:gap-4 lg:gap-10 h-[490px]" >
      {/* yahan image sahi krna hai */}
      <div className=" md:w-1/2 h-full w-80 h-80 border border-red-400">
        <img
          src="https://images.template.net/82880/free-studying-illustration-tmpqs.jpg"
          alt="signIn"
          className="w-full h-full object-cover"
        />
      </div>
      <Signin />
    </div>
  );
}

export default SignIn;
