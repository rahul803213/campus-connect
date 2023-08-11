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
    <header className="flex justify-between items-center py-2 w-full md:w-[80%] px-2 h-[70px] md:h-[90px] mb-6 border border-green-300">
      <Link href={'/'} className="flex flex-col cursor-pointer items-start">
       <h2 className="uppercase text-sm sm:text-2xl font-bold" >campus<span className="text-blue-900">connect.</span></h2>
       <h1 className="font-bold tracking-widest sm:tracking-[5px] " >connect.share.grow.</h1>
      </Link>
      <div className="flex items-center justify-between gap-8 h-full">
        <div className="hidden lg:flex gap-6 p-2 items-center">
          <HeaderLink Icon={ExploreSharp}  text="Discover" link="/home" />
          <HeaderLink Icon={GroupSharp} text="People" link="/search"/>

          <HeaderLink Icon={OndemandVideoSharp} text="Learning" link="/course"/>
          <HeaderLink Icon={BusinessCenterSharp} text="Jobs" link="/student"/>
          <HeaderLink Icon={AccountCircleSharpIcon} link="/profile" text="Profile"   />
        </div>
        <div className="flex-1 flex items-center h-full" >
          <Link
            className="text-blue-700 font-semibold rounded-lg border border-2
            border-blue-700 px-4 py-2 transition-all hover:bg-blue-700 hover:text-white hover:border-blue-700"
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
