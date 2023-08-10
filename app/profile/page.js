"use client"
import React from 'react'
import Header from '@/components/Header/Header.component'
import Profile from '@/components/Profile/profile.component'
function page() {
  return (
    <div className='flex flex-col w-full items-center gap-10'>
    <Header />
      <Profile />
    </div>
  )
}

export default page
