"use client"
import React from 'react'
import { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'
import Header from '@/components/Header/Header.component'
import Profile from '@/components/Profile/profile.component'
import LinkedInProfile from '@/components/ProfileCopies.js/ProfileCopied';

import { setCurrentUser } from '@/redux/user/userSlice'
function P() {
  const Router = useRouter();
  
  const isLoggedIn = useSelector(state => state.userReducer.LoggedIn)
 
  const dispatch = useDispatch();
  useEffect(() => {
   
    const storedUserDetails = JSON.parse(sessionStorage.getItem('userDetails'));
  if(storedUserDetails) {
    dispatch(setCurrentUser(storedUserDetails));
  }
  if(!isLoggedIn ){
    
    Router.push('/reglogin')
  }
  }, [dispatch,Router,isLoggedIn]);
  return (
    <>
      {
          <div className='flex flex-col w-full items-center gap-10'>
    
    <Profile />
  </div> 
  //earlier signin
      }
    </>
   
  )
}

export default P
