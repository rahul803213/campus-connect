"use client"
import React, { useState } from 'react';
import { SendVerificationMailApi } from '@/network/userApi';
import Alert from '../Alert/Alert';

function SendMail() {
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [message,setMessage] = useState('');
  const [messageType,setMessageType] = useState(null);
  const [loading,setLoading] = useState(false);
  const handleChange = (event) => {
    const { name,value } = event.target;
    setRegistrationNumber({[name]:value});
    console.log(registrationNumber);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
        // Call your API function to send the confirmation mail
        const response = await SendVerificationMailApi(registrationNumber);
        console.log('Mail sent successfully:', response);
        if(response.success){
           setMessageType('success');
           setMessage(response.message);
        }
        else{
          setMessageType('error');
           setMessage(response.message);
        }
        // Handle success or show a message to the user
      } catch (error) {
        console.error('Error sending mail:', error);
        // Handle error or show an error message to the user
      }
     setLoading(false);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      {/* Rest of your JSX code */}
      <h2 className=" text-center text-center text-xl lg:text-4xl font-extrabold tracking-tight text-gray-700 font-serif capitalize ">
         Enter Your Registration Number
        </h2>
      <form className="flex flex-col space-y-6 py-2" onSubmit={handleSubmit}>
        {/* ... */}
        <div>
          {/* <label className="block text-lg font-medium leading-6 text-gray-900">
            Registration Number
          </label> */}
          <div className="mt-2">
            <input
              id="registrationNumber"
              name="registrationNumber"
              type="text"
              autoComplete="off"
             // value={registrationNumber}
              onChange={handleChange}
              className="p-4 block w-full font-bold rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        
        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-800"
          >
            {loading ? 'Sending Mail...':'Send Confirmation Mail'}
          </button>
        </div>
        {message && <Alert message={message} type={messageType} />}
      </form>
    </div>
  );
}

export default SendMail;
