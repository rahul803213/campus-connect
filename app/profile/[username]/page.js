'use client'
import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { fetchUserById } from '@/network/userApi';
import LinkedInProfile from '@/components/ProfileCopies.js/ProfileCopied';

function ProfileByName() {
    const {username} = useParams();
  //  const {username} = params.query;
  const [student,setStudent] = useState('');
  useEffect(()=>{
  const  fetchuser = async(username) => {
         const user = await fetchUserById(username);
         console.log({"student":user});
         setStudent(user);
  }
  fetchuser(username);
  },[]);
 // console.log({"student":student});
  return (
    <div>
        <LinkedInProfile user={student}/>
    </div>
  )
}

export default ProfileByName
