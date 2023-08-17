'use client'
import { useState } from 'react';
import { useEffect } from 'react';
import { fetchCollegesApi } from '@/network/collegeApi';
import { createDetailsApi,deleteDetailsApi,updateDetailsApi } from '@/network/detailsApi';
import { fetchDetialsApi } from '@/network/detailsApi';
import Alert from '@/components/Alert/Alert';
const StudentForm = () => {
    const [colleges, setColleges] = useState([]);
    const [message,setMessage] = useState('');
    const [messageType,setMessageType] = useState(null);
    const [details,setDetails] = useState([]);
    const [deleteLoading,setDeleteLoading] = useState(false);

   
    const [formData, setFormData] = useState({
        name:'',
        reg_email: '',
        reg_number: '',
        college_id: '',
    });

    useEffect(() => {
        const fetchColleges = async () => {
            const collegesData = await fetchCollegesApi();
            setColleges(collegesData);
        };
        const fetchData = async() => {
            const data = await fetchDetialsApi();
            console.log(data);
            setDetails(data);
        }
        fetchData();
        console.log(details);
        fetchColleges();
    }, []);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(formData);
       const data = await createDetailsApi(formData);
       if(data.success){
        setMessage(data.message);
        setMessageType('success')
       }else{
        setMessage(data.message);
        setMessageType('error')
       }
        // Call your API to submit student data
        // await submitStudentData(formData);
    };

    return (
        <div className="flex flex-col justify-center items-center min-h-screen gap-5 sm:flex-row">
        <div className='flex flex-col justify-center min-h-screen items-center'>
        {
            details.map(detail => 
               ( <div key={detail._id} className='flex flex-row gap-2 justify-center items-center'>
                     <h1>{detail.reg_email}</h1>
                     <h1>{detail.reg_number}</h1>
                     <button className='border border-red-500 p-4 font-thin rounded-full'
                      onClick={async()=> {
                        setDeleteLoading(true)
                        const data = await deleteDetailsApi(detail._id);
                        setMessage(data.message);
        setMessageType('error');
        setDeleteLoading(false);
                      }}
                     >
                     {deleteLoading? 'Deleting...' :"Delete"}
                     </button>
                     <button className='border border-green-500 p-4 font-thin rounded-full'>Update</button>
               </div>)
            )
        }
        </div>
       
            <div className="bg-white p-8 rounded shadow-md w-full sm:max-w-md">
                <h1 className="text-2xl font-semibold mb-4">Student Details</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                   

                <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                           Name:
                        </label>
                        <input
                            type="text"
                            //id="reg_email"
                            name="name"
                            required
                            onChange={handleInputChange}
                            className="mt-1 block w-full rounded-md shadow-sm border-gray-300 focus:border-indigo-600 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        />
                    </div>

                    <div>
                        <label htmlFor="reg_email" className="block text-sm font-medium text-gray-700">
                            Registration Email:
                        </label>
                        <input
                            type="email"
                            id="reg_email"
                            name="reg_email"
                            required
                            onChange={handleInputChange}
                            className="mt-1 block w-full rounded-md shadow-sm border-gray-300 focus:border-indigo-600 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        />
                    </div>

                    <div>
                        <label htmlFor="reg_number" className="block text-sm font-medium text-gray-700">
                            Registration Number:
                        </label>
                        <input
                            type="text"
                            id="reg_number"
                            name="reg_number"
                            required
                            onChange={handleInputChange}
                            className="mt-1 block w-full rounded-md shadow-sm border-gray-300 focus:border-indigo-600 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        />
                    </div>

                    <div>
                        <label htmlFor="college_id" className="block text-sm font-medium text-gray-700">
                            Select College:
                        </label>
                        <select
                            id="college_id"
                            name="college_id"
                            required
                            onChange={handleInputChange}
                            value={formData.college_id}
                            className="mt-1 block w-full rounded-md shadow-sm border-gray-300 focus:border-indigo-600 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        >
                            <option value="" disabled>Select College</option>
                            {colleges.map(college => (
                                <option key={college._id} value={college._id}>
                                    {college.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Add Student
                        </button>
                        {message && <Alert type={messageType} message={message} />}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default StudentForm;
