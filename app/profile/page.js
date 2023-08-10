"use client"
import React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Header from '@/components/Header/Header.component'
import Profile from '@/components/Profile/profile.component'
import { setCurrentUser } from '@/redux/user/userSlice'
function Page() {

  const dispatch = useDispatch();
  useEffect(() => {
   
    const storedUserDetails = JSON.parse(sessionStorage.getItem('userDetails'));
  if(storedUserDetails) {
    dispatch(setCurrentUser(storedUserDetails));
  }
  }, [dispatch]);
  return (
    <div className='flex flex-col w-full items-center gap-10'>
    <Header />
      <Profile />
    </div>
  )
}

export default Page
