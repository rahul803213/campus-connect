import React from 'react'
import SendMailTeacher from '@/components/SendMailTeacher/SendMailTeacher'
function Page() {
  return (
    <>
   
    <div className="flex flex-col w-full h-full gap-4 justify-center items-center sm:flex-row" >
      {/* yahan image sahi krna hai */}
      <div className="w-1/2 h-1/2 ">
        <img
          src="/sy.jpg"
          alt="signIn"
          className="w-full h-full object-cover"
        />
      </div>
      <SendMailTeacher />
    </div>
    </>
  )
}

export default Page
