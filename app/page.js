//"use client"
import React from 'react'
import Header from 'components/Header/Header.component'
import HeaderLink from 'components/HeaderLink/HeaderLink.component'

import WelcomeLinks from 'components/WelcomeLinks/WelcomeLinks'
//import { decrement, increment, reset } from "@/redux/features/counterSlice";
//import { useAppDispatch, useAppSelector } from "@/redux/hooks";


function home() {
 // const user = UseSelector((state) => state.user.currentUser);

  //console.log(user);
  //const count = useAppSelector((state) => state.counterReducer.value);
  //const dispatch = useAppDispatch();
  return (
   
    <div className="flex flex-col   items-center">
      <Header />
      <WelcomeLinks />
    </div>
   
  )
}

export default home;

