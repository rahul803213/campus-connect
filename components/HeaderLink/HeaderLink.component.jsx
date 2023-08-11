import React from 'react'
import Link from 'next/link'
function HeaderLink({Icon,text,avatar,feed,link,...otherProps}) {
  return (
    <Link prefetch href={`${link}`} className={`flex flex-col justify-center items-center cursor-pointer
    ${feed ? "text-black/60 hover:text-black lg:-mb-1.5 space-y-1" : "text-slate-100 sm:text-gray-500 sm:hover:text-gray-800 hover:text-slate-300"} `} {...otherProps}>
      {avatar ?  <Icon className="!h-7 !w-7 lg:!-mb-1 " /> : (<Icon />)}
      <h4 className='hidden sm:block sm:text-sm '>{text}</h4> 
   
   
    </Link>
  )
}

export default HeaderLink
