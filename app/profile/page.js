"use client"
import React from 'react'
import { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'
import Header from '@/components/Header/Header.component'
import Profile from '@/components/Profile/profile.component'

import { setCurrentUser } from '@/redux/user/userSlice'
function P() {
  const Router = useRouter();
  if (Router.isFallback) {
    <h1>Data is loading</h1>;
  }
  const isLoggedIn = useSelector(state => state.userReducer.LoggedIn)
 
  const dispatch = useDispatch();
  useEffect(() => {
   
    const storedUserDetails = JSON.parse(sessionStorage.getItem('userDetails'));
  if(storedUserDetails) {
    dispatch(setCurrentUser(storedUserDetails));
  }
  }, [dispatch]);
  return (
    <>
      {
        isLoggedIn ?  <div className='flex flex-col w-full items-center gap-10'>
    
    <Profile />
  </div> 
  :
  Router.push('/reglogin') //earlier signin
      }
    </>
   
  )
}

export default P
