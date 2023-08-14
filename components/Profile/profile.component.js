"use client"
import React from 'react'
import {BiEdit} from 'react-icons/bi'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useSelector } from 'react-redux';



const Profile = () => {
    const followerCount = useSelector(state => state.userReducer.user.user_follower_count)
    const user = useSelector(state => state.userReducer.user);
    const profile_uri=user.user_profile;
    console.log(profile_uri);
    const data = {
        college: 'COLLEGE',
        branch: 'BRANCH',
        rollNo: 'ROLLNO',
        regNo: 'REGISTRATION NO',
        course: 'COURSE',
        session: 'SESSION',
        name: 'Developer',
        email: 'EMAIL NO',
        contact: 'CONTACT ',
        address: 'ADDRESS',
        dob: 'DOB',
        fatherName: 'FATHER NAME',
        motherName: 'MOTHER NAME',

    }

    const handleChangeProfile = () => {
        console.log('changing function runs')
    }
  return (
    <div className='p-2 w-[90%] flex flex-col  '>
        {/* personal detail with image */}
        <div className='w-full h-fit flex flex-col  sm:items-center mb-10'>
            {/* image section */}
            <div className='flex flex-col items-center w-full bg-white rounded-lg drop-shadow-lg pb-[80px] sm:pb-[150px]'>
                <div className='relative w-full h-[150px] sm:h-[250px] bg-slate-100'>
                    <img 
                      src='https://media.licdn.com/dms/image/D4D16AQFYInI92MvQBw/profile-displaybackgroundimage-shrink_350_1400/0/1683095854548?e=1697068800&v=beta&t=7-OQihOlvV0g6CiFP3Gx0IuN6W9bbsiUmV0stApOjew'
                      alt="bgprofile" 
                      className='w-full h-full rounded-md object-clip'
                    />

                    <div className='flex flex-col gap-4 absolute w-[100px] h-[100px] sm:w-[200px] sm:h-[200px]  rounded-full  -translate-y-2/3 left-[100px]'>
             {profile_uri ? <img src={profile_uri} className='w-full h-full object-cover rounded-full bg-white' /> :<AccountCircleIcon className='w-full h-full object-cover rounded-full bg-white'/> }           
                    <h4 className='text-center font-bold text-2xl'>
                        {user.user_name}
                    </h4>
                    <h3>follower count is: {followerCount}</h3>
                    </div>
                </div>
            </div>

            {/* personal details */}
            <div className='flex flex-col flex-1 p-2 justify-center w-full sm:w-1/2   items-end gap-4 bg-slate-100 '>
                <Details details={'Academic Details'}>
                    <div className='flex flex-col sm:flex-wrap sm:flex-row sm:justify-between sm:gap-x-4  w-full px-4 py-2'>
                        <Item2 name='college' value={user.user_college}/>
                        <Item2 name='branch' value={user.user_email} />
                        <Item2 name='course' value={data.course} />
                        <Item2 name='session' value={data.session} />
                        <Item2 name='rollno' value={data.rollNo} />
                        <Item2 name='regno' value={data.regNo} />
                    </div>
                </Details>
                <Details details={'Personal Details'}>
                    <div className='flex flex-col sm:flex-wrap sm:flex-row sm:justify-between sm:gap-x-4 w-full px-4 py-2'>
                        <Item2 name='father Name' value={data.fatherName} />
                        <Item2 name='mother Name' value={data.motherName} />
                        <Item2 name='email' value='example@gmail.com'/>
                        <Item2 name='contact' value='0123456789'/>
                        <Item2 name='DOB' value={data.dob} />
                        <Item2 name='Address' value={data.address}/>
                    </div>
                </Details>
                <div 
                  className='flex items-center border-2 cursor-pointer gap-4 p-2 rounded-lg shadow-sm hover:shadow-lg hover:shadow-green-200 hover:border-green-700 text-slate-400 hover:text-slate-600 '
                  onClick={handleChangeProfile}
                >
                    <p className='text-sm font-base'>Edit Profile</p>
                    <BiEdit style={{fontSize: '25px'}} className='text-slate-500'/>
                </div>

            </div>
        </div>

        {/* extra things can be added here */}
        {/* <div>
            <h5>your works goes here</h5>
        </div> */}
    </div>
  )
}
export default Profile


const Item2 = ({name, value}) => {
    // capitalise the given string (only first letter capital of word, their is no predefined function to do )
    const Name = name.charAt(0).toUpperCase() + name.slice(1) 

    return (
        <p className='text-xs sm:text-sm text-slate-400 my-1 block'>
        <span className='text-slate-500 text-sm sm:text-base  font-serif'>{Name} &#58; </span> 
        {value}
      </p>
    )
}

const Details = ({children,details}) => {
return(
<div className='flex flex-col w-full font-serif'>
    <h2 className='text-base sm:text-lg font-normal text-slate-600 p-2 '>{details}</h2>
    {children}
</div>
)
}
