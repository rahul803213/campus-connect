"use client";
import React from "react";
import HeaderLink from "../HeaderLink/HeaderLink.component";
//import { useRouter } from "next/navigation";
import { ExploreSharp, Margin } from "@mui/icons-material";
import Link from "next/link";
import { GroupSharp } from "@mui/icons-material";
import { OndemandVideoSharp } from "@mui/icons-material";
import { BusinessCenterSharp } from "@mui/icons-material";
import AccountCircleSharpIcon from "@mui/icons-material/AccountCircleSharp";

function Header() {
 // const Router = useRouter();
 

// const handleClick = value => () => Router.push(value);

 
  return (
    <header className="flex justify-between items-center py-4 w-full sm:w-[80%] border border-green-400 ">
      <Link href={'/'} className="flex flex-col relative w-36 h-10 cursor-pointer">
       <h2 className="uppercase text-3xl text-center font-bold" >campus<span className="text-blue-900">connect.</span></h2>
       <h1 className="font-bold " style={{letterSpacing:"8px"}}>connect.share.grow</h1>
      </Link>
      <div className="flex items-center sm:divide-x divide-gray-300">
        <div className="hidden sm:flex space-x-8 pr-4">
          <HeaderLink Icon={ExploreSharp}  text="Discover" link="/home" />
          <HeaderLink Icon={GroupSharp} text="People" link="/search"/>

          <HeaderLink Icon={OndemandVideoSharp} text="Learning" link="/course"/>
          <HeaderLink Icon={BusinessCenterSharp} text="Jobs" link="/student"/>
          <HeaderLink Icon={AccountCircleSharpIcon} link="/profile" text="Profile"   />
        </div>
        <div className="pl-5">
          <Link
            className="text-blue-700 
    font-semibold rounded-full border border-2
     border-blue-600 px-5 py-1.5 transition-all hover:bg-blue-600 hover:text-white"
            href={"/signin"}
          >
            Sign In
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
