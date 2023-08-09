"use client";
import React, { use, useEffect, useState } from "react";
import Header from "components/Header/Header.component";
import Signin from "components/signin/SignIn";
//import SignInPage from "components/signin/login";

function SignIn() {
  return (
    <div className="flex flex-col   items-center">

<Header />

<div className='flex flex-col xl:flex-row justify-center xl:justify-between xl:items-top items-center max-w-screen-xl mx-auto  w-[100%]'>
   
<div className=' relative xl:w-[650px] xl:h-[650px] top-14  w-80 h-80 '>
 <img src="https://images.template.net/82880/free-studying-illustration-tmpqs.jpg" alt=""   />
</div>
   <Signin /> 



</div>

    </div>
   
  );
}

export default SignIn;
