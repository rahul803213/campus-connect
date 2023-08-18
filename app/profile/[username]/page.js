'use client'
import React from 'react'
import { useParams } from 'next/navigation'

function ProfileByName() {
    const {username} = useParams();
  //  const {username} = params.query;
  return (
    <div>
        I am {username}
    </div>
  )
}

export default ProfileByName
