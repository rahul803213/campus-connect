"use client"
import { fetchUniversityApi } from '@/network/universityApi'
import React, { useEffect,useState } from 'react'
import { collegeCreateApi } from '@/network/collegeApi';

function Admin() {
    const [universities, setUniversities] = useState([]);
    const [formData,setFormData] = useState({
        name:'',
        university_id:''
    })

 useEffect(()=> {
    const fetchData = async() => {
        const data = await fetchUniversityApi();
        console.log(data);
        setUniversities(data);
    }
    fetchData();
 },[])
 
 const handlechange = (event) => {
    const { value, name } = event.target;

    setFormData({ ...formData, [name]: value });
  };

 const handleSubmit = async (e)=> {
    e.preventDefault();
     
     console.log(formData)
      const data = await collegeCreateApi(formData);

      console.log(data);


 }




  return (
    <div className="flex justify-center items-center min-h-screen">
        <div className="bg-white p-8 rounded shadow-md w-full sm:max-w-md">
            <h1 className="text-2xl font-semibold mb-4">Add College Details</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="collegeName" className="block text-sm font-medium text-gray-700">College Name:</label>
                    <input type="text" id="collegeName" name="name" required
                    onChange={handlechange}
                           className="mt-1 block w-full rounded-md shadow-sm border-gray-300 focus:border-indigo-600 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                </div>

                <div>
                <select
              id="universityId"
              name="university_id"
              required
              onChange={handlechange}
              value={formData.university_id}
              className="mt-1 block w-full rounded-md shadow-sm border-gray-300 focus:border-indigo-600 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            >
               <option value="" disabled>Select University</option>
              {universities.map(university => (
                <option key={university._id} value={university._id}>
                  {university.name}
                </option>
              ))}
            </select>                </div>

                <div>
                    <button type="submit" className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Add College
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Admin
