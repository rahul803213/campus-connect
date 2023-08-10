"use client";
import React from "react";
import Header from "components/Header/Header.component";
import { useSelector, useDispatch } from "react-redux";
import WelcomeLinks from "components/WelcomeLinks/WelcomeLinks";
//import { decrement, increment, reset } from "@/redux/features/counterSlice";
//import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useEffect } from "react";
import { setCurrentUser } from "@/redux/user/userSlice";
function Home() {
  const user = useSelector((state) => state.userReducer.user);
  const dispatch = useDispatch();
  useEffect(() => {
    const storedUserDetails = JSON.parse(sessionStorage.getItem("userDetails"));
    if (storedUserDetails) {
      dispatch(setCurrentUser(storedUserDetails));
    }
  }, [dispatch]);
  console.log(user);
  //const count = useAppSelector((state) => state.counterReducer.value);
  //const dispatch = useAppDispatch();
  return (
    <div className="flex flex-col   items-center">
      <Header />
      <WelcomeLinks />
    </div>
  );
}

export default Home;
