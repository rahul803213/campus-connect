"use client";
import React from "react";
import Header from "components/Header/Header.component";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import WelcomeLinks from "components/WelcomeLinks/WelcomeLinks";
import { getTokenFromLocal,removeTokenFromLocalMeansLogout } from "@/ClientHelper/authHelper";
//import { decrement, increment, reset } from "@/redux/features/counterSlice";
//import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useEffect } from "react";
import { removeCurrentUser, setCurrentUser } from "@/redux/user/userSlice";
function Home() {
  const user = useSelector((state) => state.userReducer.user);
  const Router = useRouter();
  const dispatch = useDispatch();
  const {
    isFallback,
} = useRouter();


  useEffect(() => {
    
    const token = getTokenFromLocal();
    console.log(token);
    if(!token) {
      removeTokenFromLocalMeansLogout();
      dispatch(removeCurrentUser());
      
    }
        // dispatch(setCurrentUser({}));
        // sessionStorage.setItem("userDetails",null);
     else{   const storedUserDetails = JSON.parse(sessionStorage.getItem("userDetails"));
    if (storedUserDetails) {
      dispatch(setCurrentUser(storedUserDetails));
    }
    }
  }, [dispatch]);
  console.log(user);
  //const count = useAppSelector((state) => state.counterReducer.value);
  //const dispatch = useAppDispatch();
  if (isFallback) {
    return <h1>Fallback</h1>;
}
  return (
    <div className="flex flex-col items-center  px-2 relative">
      <WelcomeLinks />
    </div>
  );
}

export default Home;
