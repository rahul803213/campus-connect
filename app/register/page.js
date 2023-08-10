"use client"
import SignUpPage from '@/components/signUp/SignUpPage'
import Header from '@/components/Header/Header.component'
import React from 'react'
SignUpPage
function register() {
  return (
    <div className="flex flex-col   items-center gap-10">
      <Header />
      <SignUpPage />
    </div>
  )
}

export default register
