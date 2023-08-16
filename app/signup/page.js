import React from 'react'
import SendMail from '@/components/SendVerificationMail/SendVerificationMail'
function Page() {
  return (
    <>
   
    <div className="flex flex-row w-full h-full gap-4 justify-center items-center" >
      {/* yahan image sahi krna hai */}
      <div className="w-1/2 h-1/2 ">
        <img
          src="https://images.template.net/82880/free-studying-illustration-tmpqs.jpg"
          alt="signIn"
          className="w-full h-full object-cover"
        />
      </div>
      <SendMail />
    </div>
    </>
  )
}

export default Page
