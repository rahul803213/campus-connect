"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { useSelector } from "react-redux";
const SignUpPage = () => {
  const url = "http://localhost:4000/user/register";
  const Router = useRouter();
  const user = useSelector(state => state.userReducer);
  console.log({user_sign_up:user});
  const [formData, setFormData] = useState({
    username: "",
    file: "",
    email: "",
    password: "",
    confirm_password: "",
    phone_number: "",
    branch: "",
    roll_number: "",
    session: "",
    registration_number: " ",
    college_name: "",
  });

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.files[0],
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fd = new FormData();
    console.log(formData);
    for (const key in formData) {
      if (formData.hasOwnProperty(key)) {
        fd.append(key, formData[key]);
      }
    }
    // fd.append('image',profile_picture);
    fetch(url, {
      method: "POST",

      body: fd,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Data successfully sent:", data);
        Router.push("/home");
        // Handle the response data here
      })
      .catch((error) => {
        console.error("Error sending data:", error);
        // Handle errors here
      });
    // save formdata in backend and navigate to home page
    console.log("submit button clicked", formData);
  };
  return (
    <div className="w-full h-full flex flex-wrap ">
      <div className="w-full bg-slate-200 rounded-lg flex flex-col">
        <div className="w-full flex flex-col md:flex-row">
          <div className="w-full sm:w-2/5 flex rounded-l-lg bg-gradient-to-tr from-sky-200 to-violet-200 h-full flex-col items-center justify-center py-4">
            <div className="flex flex-col  items-center w-full gap-6 py-4">
              <div className="flex justify-center items-center rounded-full">
                <img
                  src="https://cdni.iconscout.com/illustration/premium/thumb/sign-up-page-1886582-1598253.png"
                  alt="profile"
                  className="w-[100px] lg:w-[150px] h-[100px] lg:h-[150px] object-cover rounded-full hover:drop-shadow-xl cursor-pointer"
                />
              </div>
              <div className="flex flex-col w-full items-center p-2">
                <h4 className="mt-2 text-center text-base font-semibold font-serif lg:text-lg text-violet-800">
                  Lets get you setUp here
                </h4>
                <p className="m-4 font-serif text-sm lg:text-base text-slate-600 ">
                  It takes couple of minutes to setup for you{" "}
                </p>
              </div>

              <BsFillArrowUpRightCircleFill className="w-[30px] h-[30px] text-slate-100" />
            </div>
          </div>

          <div className="w-full sm:w-3/5 px-2 md:px-4 py-4 flex rounded-r-lg flex-col">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col w-full gap-2 py-4"
            >
              <h2 className="text-sm md:text-base text-slate-600  p-4 font-serif drop-shadow-lg">
                Personal Details
              </h2>
              <FormField
                name="username"
                data={formData.username}
                type="text"
                handleChange={handleChange}
              />
              <FormField
                name="email"
                data={formData.email}
                type="email"
                handleChange={handleChange}
              />
              <FormField
                name="file"
                data={formData.file}
                type="file"
                handleChange={handleFileChange}
              />
              <FormField
                name="password"
                data={formData.password}
                type="password"
                handleChange={handleChange}
              />
              <FormField
                name="confirm_password"
                data={formData.confirm_password}
                type="text"
                handleChange={handleChange}
              />

              <FormField
                name="phone_number"
                data={formData.phone_number}
                type="tel"
                handleChange={handleChange}
              />

              <h2 className="text-sm md:text-base text-slate-600 p-4 font-serif drop-shadow-lg">
                Academic Details
              </h2>
              <FormField
                name="college_name"
                data={formData.college_name}
                type="text"
                handleChange={handleChange}
              />
              <FormField
                name="branch"
                data={formData.branch}
                type="text"
                handleChange={handleChange}
              />
              <FormField
                name="roll_number"
                data={formData.roll_number}
                type="text"
                handleChange={handleChange}
              />
              <FormField
                name="session"
                data={formData.session}
                type="text"
                handleChange={handleChange}
              />
              <FormField
                name="registration_number"
                data={formData.registration_number}
                type="text"
                handleChange={handleChange}
              />
              <div className="w-full p-4 flex justify-end items-end">
                <button className="border py-3 px-8 rounded-md font-serif text-sm md:text-md font-bold cursor-pointer hover:bg-blue-900 hover:text-slate-200 border-2 border-blue-900 hover:border-slate-100">
                  signup
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;

function FormField(props) {
  return (
    <>
      <div className="w-full lg:max-w-[250px] mx-auto font-serif text-xs lg:text-sm ">
        <label htmlFor={props.name} className="uppercase text-slate-500">
          {props.name}
        </label>
        <input
          type={props.type}
          name={props.name}
          // value={props.data}
          onChange={props.handleChange}
          className="w-full text-slate-400 focus:text-slate-600 font-base p-2 outline-none border-b-2 border-slate-300 focus:border-slate-900 rounded-md transition-all bg-slate-200"
        />
      </div>
    </>
  );
}
