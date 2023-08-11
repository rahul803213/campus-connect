import React from 'react'
import {IoNewspaperOutline} from 'react-icons/io5'


export default function NewsHighlight(props) {
  return (
<>
  <div className=" w-full  h-fit flex flex-col justify-start items-start text-slate-800 bg-white rounded-lg font-serif">
    {/* heading section */}
    <div className='flex p-2 lg:p-4 gap-3 items-center flex-wrap'>
        {/* heading-icon */}
        <div className='flex justify-center items-center w-[30px] h-[30px] '>
            <IoNewspaperOutline style={{width: '100%', height: '100%', }}/>
        </div>
        <h2 className='font-semibold text-base'>{props.name}</h2>
    </div>
    <News> 
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa omnis ab perferendis deleniti, aspernatur </p>
    </News>
    <News>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa omnis ab perferendis deleniti, aspernatur </p>
    </News>    
  </div>
</>
  )
}

const News = ({children}) => {
  return (
<>  
  <div className="flex p-2 mx-4 my-2 rounded-lg bg-slate-100 text-center text-sm text-slate-600">
    {children}
  </div>
</>
  )
}
