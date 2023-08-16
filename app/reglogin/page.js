"use client";
import React, { use, useEffect, useState } from "react";
import Header from "components/Header/Header.component";
import Login from "@/components/signin/login";
import { useRouter } from "next/navigation";
import {  useSelector } from "react-redux";

function SignIn() {
  //const isLoggedIn = useSelector((state) => state.userReducer.user);
  const Router = useRouter();
  
  return (
    <>
   
    <div className="flex flex-col md:flex-row justify-center gap-6 items-center max-w-screen-xl mx-auto w-full md:gap-4 lg:gap-10 h-auto md:h-[500px] md:px-[50px] mb-[50px] md:mb-[80px] " >
      {/* yahan image sahi krna hai */}
      <div className=" w-full md:w-1/2 h-full w-80 h-80 ">
        <img
          src="https://images.template.net/82880/free-studying-illustration-tmpqs.jpg"
          alt="signIn"
          className="w-full h-full object-cover"
        />
      </div>
      <Login />
    </div>
    </>
  );
}

export default SignIn;
