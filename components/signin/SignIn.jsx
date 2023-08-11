"use client";
import React, { useState } from "react";
import { BASE_URL } from "@/ClientHelper/config";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { setCurrentUser } from "@/redux/user/userSlice";
import { useSelector, useDispatch } from "react-redux";
function Signin() {
  const dispatch = useDispatch();
  const Router = useRouter();
  const [formData, setFormData] = useState({
    email: "rahulkr705018@gmail.com",
    password: "12345",
  });
  //handle change function
  const handlechange = (event) => {
    const { value, name } = event.target;

    setFormData({ ...formData, [name]: value });
  };

  const redux_redux_user = useSelector((state) => state.userReducer.user);
  console.log({ "redux-user": redux_redux_user });

//handle submit functions
  const handleSubmit = async (event) => {
    event.preventDefault();
    const url = `${BASE_URL}/user/login`
    if (formData.email == "" || formData.password == "")
      return res.json({ error: "one of two or may both is empty" });
    try {
      const response = await fetch(
        url,

        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": BASE_URL
          },
          body: JSON.stringify(formData),
        }
      );
      const result = await response.json();
      console.log(result);
     setFormData({
      email:"pk",
      password:"pk"
     });
      dispatch(setCurrentUser(result));
       localStorage.setItem("jwtToken",result.user_token);
       sessionStorage.setItem('userDetails' ,JSON.stringify(result));
      console.log( formData );
      Router.push("/home");
    } catch (error) {
      console.error("error fetching data", error);
    }
    // console.log(formData);
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        {/* <img className="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" /> */}

        <h2 className="mt-10 text-center text-5xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium leading-6 text-gray-900 ">
              Email address
            </label>
            <div className="mt-2">
              <input
                onChange={handlechange}
                id="email"
                name="email"
                type="email"
                value={formData.email}
                autoComplete="email"
                required
                className="p-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label className="block text-sm font-medium leading-6 text-gray-900 ">
                Password
              </label>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                onChange={handlechange}
                name="password"
                value={formData.password}
                type="password"
                autoComplete="current-password"
                required
                className="p-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Not a member?
          <Link
            prefetch
            href="/register"
            className="cursor-pointer font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Register{" "}
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signin;
