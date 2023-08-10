import React from 'react'
import {BsPostcard} from 'react-icons/bs'
import {MdOutlineEventSeat} from 'react-icons/md'
import {FcDepartment} from 'react-icons/fc'
import {CgProfile} from 'react-icons/cg'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useSelector } from 'react-redux'
import jwtDecode from 'jwt-decode';

//import bceLogo from '../assets/bceLogo.gif'
export default function Sidebar() {
 // const user = localStorage.getItem("jwtToken");
// const decode = jwtDecode(user);
//  console.log(decode)
 // console.log({user:user});
  return (
<>
  <div className="w-[20vw]  h-fit flex text-slate-600 bg-white flex-col items-center rounded-lg py-4">
    {/* application logo  */}
    <div className='flex p-4 w-full justify-start items-center flex flex-col '>
    <AccountCircleIcon  className='m-4'/>
       <h1 className='text-lg text-center font-bold uppercase'>hello </h1>
    </div>
    <div className='flex flex-col mt-8 w-full '>
        <Item_1 text="Posts">
            <BsPostcard />
        </Item_1>
        <Item_1 text="Events">
            <MdOutlineEventSeat />
        </Item_1>
        <Item_1 text="Department">
            <FcDepartment />
        </Item_1>
        <Item_1 text="Profile">
            <CgProfile />
        </Item_1>
    </div>
  </div>
</>
  )
}

const Item_1 = ({children,text}) => {
  return (
    <div className='flex gap-3 px-4 py-2 border border-0 w-full items-center text-lg font-medium font-serif cursor-pointer hover:border-r-4 hover:border-green-400 active:border-r-4 hover:bg-white hover:text-slate-900 '>
        {/* icons div */}
        <div className='flex justify-center'>
            {children}
        </div>

        {/* content div */}
        <div className='flex justify-center'>
            {text}
        </div>
    </div>
  )
}
