import { ArrowForwardIosRounded } from '@mui/icons-material'
import React from 'react'

function WelcomeLinks() {
  return (
    <div className='flex flex-col xl:flex-row justify-center xl:justify-between xl:items-top items-center max-w-screen-xl mx-auto  w-[100%]'>
    <div className="space-y-6 xl:space-y-10">
        <h1 className="text-2xl md:text-5xl text-amber-800/80 max-w-xl !leading-snug pl-4 xl:pl-0 ">
            Welcome To Your Professional Community!
        </h1>
        <div className="space-y-4">
            <div className="intent">
            <h2 className="text-lg">Search For Collegues</h2>
            <ArrowForwardIosRounded className='text-gray-700' />
            </div>

            <div className="intent">
            <h2 className="text-lg">Find Job</h2>
            <ArrowForwardIosRounded className='text-gray-700' />
            </div>

            <div className="intent">
            <h2 className="text-lg">Learn a new Skill</h2>
            <ArrowForwardIosRounded className='text-gray-700' />
            </div>
        </div>


    </div>
    <div className=' relative xl:w-[650px] xl:h-[650px] top-14 right-5 w-80 h-80 '>
        <img src="https://rb.gy/vkzpzt" alt=""   />
    </div>
         
      
    </div>
  )
}

export default WelcomeLinks
