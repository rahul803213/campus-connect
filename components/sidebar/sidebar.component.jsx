import React, { useEffect } from "react";
import { BsPostcard } from "react-icons/bs";
import { MdOutlineEventSeat } from "react-icons/md";
import { FcDepartment } from "react-icons/fc";
import { CgProfile } from "react-icons/cg";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import jwtDecode from "jwt-decode";
import { useSelector } from "react-redux";
import Spinner from "../Spinner/Spinner";
import { useState } from "react";
import { setCurrentUser } from "@/redux/user/userSlice";
import { useDispatch } from "react-redux";
import Link from "next/link";
//import bceLogo from '../assets/bceLogo.gif'
export default function Sidebar() {
  // const user = localStorage.getItem("jwtToken");
  const dispatch = useDispatch();
  // const decode = jwtDecode(user);
  //  console.log(decode)
  // console.log({user:user});
  const [loading,setLoading] = useState(true);
 
     useEffect(()=> {
      setLoading(true);
      const storedUserDetails = JSON.parse(sessionStorage.getItem('userDetails'));
       if(storedUserDetails) {
         dispatch(setCurrentUser(storedUserDetails));
       }
       setLoading(false);
     },[dispatch])


  const user = useSelector((state) => state.userReducer.user);
  //setLoading(false);
  console.log(user);
  return (
    <>{ loading ? <Spinner /> :
      <div className="w-1/6  h-fit hidden sm:flex text-slate-600 bg-white flex-col items-center rounded-lg py-4">
        {/* application logo  */}
        <div className="flex p-4 w-full justify-start items-center flex flex-col ">
          <img
            className="w-10 h-10 rounded-full"
            src={user.user_profile}
            alt="Rounded avatar"
          />

          <h1 className="text-lg text-center font-bold uppercase">
            hello
            <span className="text-green-400">
              {" "}
              <br /> {user.user_name}
            </span>
          </h1>
        </div>
        <div className="flex flex-col mt-8 w-full ">
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
    }
    </>
  );
}

const Item_1 = ({ children, text }) => {
  return (
    <Link
      href={`/${text.toLowerCase()}`}
     className="flex gap-3 px-4 py-2 border border-0 w-full items-center text-lg font-medium font-serif cursor-pointer hover:border-r-4 hover:border-green-400 active:border-r-4 hover:bg-gray-900 hover:text-slate-100 ">
      {/* icons div */}
      <div className="flex justify-center">{children}</div>

      {/* content div */}
      <div className="flex justify-center">{text}</div>
    </Link>
  );
};
