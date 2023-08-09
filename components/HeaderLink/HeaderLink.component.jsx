import React from 'react'
import Link from 'next/link'
function HeaderLink({Icon,text,avatar,feed,link,...otherProps}) {
  return (
    <Link prefetch href={`${link}`} className={`flex flex-col justify-center items-center cursor-pointer 
    ${feed ? "text-black/60 hover:text-black dark:text-white/60 dark:hover:text-white lg:-mb-1.5 space-y-1" : "text-gray-500 hover:text-gray-700"} `} {...otherProps}>
    {avatar ?  <Icon className="!h-7 !w-7 lg:!-mb-1 " /> : (<Icon />)}
    <h4 className='text-sm'>{text}</h4> 
   
   
    </Link>
  )
}

export default HeaderLink
