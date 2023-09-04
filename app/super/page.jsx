'use client'
import React, { useState,useEffect } from 'react'
import Link from 'next/link'
import { fetchUserById,fetchAllUserApi } from '@/network/userApi'
import { fetchUniversityApi } from '@/network/universityApi'
import { fetchCollegesApi } from '@/network/collegeApi'


const AdminPage =  () => {
    // filterData state have the data, helps to find the student
    const [filterData, setFilterData] = useState({
        university: [],
        college: [],
        branch: "",
    })
    useEffect(() => {
        const fetchStudent = async () => { 
           {
                const students = await fetchAllUserApi();
                console.log(students);
             }
        };
        const universityFetch = async() => {
            const universityDetails = await fetchUniversityApi();
            console.log(universityDetails);
            setFilterData({...filterData,university:universityDetails});
            console.log(filterData);
            const CollegeDetails = await fetchCollegesApi();
            // console.log(universityDetails);
             setFilterData({...filterData,college:CollegeDetails});

        }
        const collegeFetch = async() => {
           
        }
        fetchStudent();
        collegeFetch();
        universityFetch();
      
    },[filterData.branch]);

 async  function handleSelect (e) {
        if(e.target.name === 'university'){
            setFilterData({
                university: e.target.value,
                college: '',
                branch: '',
            })
        } else if(e.target.name === 'college') {
            setFilterData({
                ...filterData,
                college: e.target.value,
                branch: '',
            })
        } else {
            setFilterData({
                ...filterData,
                [e.target.name] : e.target.value,
            })

        }

    }



const Items = ['universities','college','students','posts']
const name = 'Ayush'

// const universityData = [
//     'aku','beu','aktu',
// ]

// const collegeData = [
//     {
//         name: 'beu',
//         list: ['bhagalpur college of engineering', 'muzzaffurpur college of engineering', 'baktiyarpur college of engineering',]
//     },
//     {
//         name: 'aku',
//         list: ['patna medical college', 'nalanda college of engineering']
//     }
// ]

const branchData = [
    {
        name: 'bhagalpur college of engineering',
        list: [
            'computer science  & engineering', 'electrical engineering', 'electronic & communication engineering', 'mechanical engineering', 'civil engineering',
        ]
    },
    {
        name: 'muzzaffurpur college of engineering',
        list: [
            'computer science & engineering', 'electrical engineering', 'electronic & communication engineering', 'mechanical engineering', 'civil engineering','leather engineering', 'information technology',
        ]
    },
]

// const students = [
//     {
//         rollNo: 1,
//         regNo: 19105108001,
//         name: 'Aman Kumar',
//         fatherName: 'manoj kumar',
//         motherName: 'mamta devi',
//         phoneNo: '0123456789',
//         address: 'laptaNagar, NagarHaveli',
//     },
//     {
//         rollNo: 2,
//         regNo: 19105108002,
//         name: 'manav Kumar',
//         fatherName: 'manohar kumar',
//         motherName: 'mamta devi',
//         phoneNo: '0123456789',
//         address: 'laptaNagar, NagarHaveli',
//     },
//     {
//         rollNo: 3,
//         regNo: 19105108003,
//         name: 'abhay Kumar',
//         fatherName: 'rishav kumar',
//         motherName: 'mamta devi',
//         phoneNo: '0123456789',
//         address: 'laptaNagar, NagarHaveli',
//     },
//     {
//         rollNo: 4,
//         regNo: 19105108004,
//         name: 'rahul Kumar',
//         fatherName: 'aman kumar',
//         motherName: 'mamta devi',
//         phoneNo: '0123456789',
//         address: 'laptaNagar, NagarHaveli',
//     }
// ]

const universities = [
    {
        name: 'beu',
        colleges: [
            {
                name: 'bhagalpur college of engineering',
                branchs: [
                    {
                        name: 'computer science & engineering',
                        students: [
                            {
                                rollNo: 1,
                                regNo: 19105108001,
                                name: 'anmol Kumar',
                                fatherName: 'rishav kumar',
                                motherName: 'mamta devi',
                                phoneNo: '0123456789',
                                address: 'laptaNagar, NagarHaveli',
                            },
                            {
                                rollNo: 2,
                                regNo: 19105108002,
                                name: 'ayush Kumar',
                                fatherName: 'rishav kumar',
                                motherName: 'mamta devi',
                                phoneNo: '0123456789',
                                address: 'laptaNagar, NagarHaveli',
                            },
                            {
                                rollNo: 3,
                                regNo: 19105108003,
                                name: 'abhay Kumar',
                                fatherName: 'rishav kumar',
                                motherName: 'mamta devi',
                                phoneNo: '0123456789',
                                address: 'laptaNagar, NagarHaveli',
                            },
                            {
                                rollNo: 4,
                                regNo: 19105108004,
                                name: 'rahul Kumar',
                                fatherName: 'aman kumar',
                                motherName: 'mamta devi',
                                phoneNo: '0123456789',
                                address: 'laptaNagar, NagarHaveli',
                            }
                        ]
                    },
                    {
                        name: 'civil engineering',
                        students: [
                            {
                                rollNo: 1,
                                regNo: 19101108001,
                                name: 'arya Kumar',
                                fatherName: 'rishav kumar',
                                motherName: 'mamta devi',
                                phoneNo: '0123456789',
                                address: 'laptaNagar, NagarHaveli',
                            },
                            {
                                rollNo: 2,
                                regNo: 19101108002,
                                name: 'ankit Kumar',
                                fatherName: 'rishav kumar',
                                motherName: 'mamta devi',
                                phoneNo: '0123456789',
                                address: 'laptaNagar, NagarHaveli',
                            },
                            {
                                rollNo: 3,
                                regNo: 19101108003,
                                name: 'gaurav Kumar',
                                fatherName: 'rishav kumar',
                                motherName: 'mamta devi',
                                phoneNo: '0123456789',
                                address: 'laptaNagar, NagarHaveli',
                            },
                            {
                                rollNo: 4,
                                regNo: 19101108004,
                                name: 'vinit Kumar',
                                fatherName: 'aman kumar',
                                motherName: 'mamta devi',
                                phoneNo: '0123456789',
                                address: 'laptaNagar, NagarHaveli',
                            }
                        ],
                    }
                ],
            }
        ],
    }
]

let data = null
let students = null
console.log('filterData : ',filterData)

if(filterData.branch !== '') {
    data = universities.filter((uni) => {
        if(uni.name === filterData.university){
            return uni.colleges.filter((coll) => {
                if(coll.name === filterData.college) {
                    return coll.branchs.filter((bran) => {
                        if(bran.name === filterData.branch){
                            console.log(bran)
                            
                            return bran.students
                        }
                    })
                }
            })
        }
    })
    console.log('data :- '  ,data[0].colleges[0].branchs)

    students = data[0].colleges[0].branchs[0].students
}


// let college = filterData.college
//   if(filterData.university !== '') {
//     college = collegeData.filter((item) => item.name === filterData.university) 
//   }

// let branch = filterData.branch
//   if(filterData.college !== '') {
//     branch = branchData.filter(item => item.name === filterData.college)
//   }

//   console.log('college name :- ', college[0]?.list)
//   console.log('branch name :-', branch[0]?.list)

  return (
<>
  <div className=" w-full h-full flex flex-col">
    {/* header of page */}
    <header className=" w-full h-auto flex flex-wrap justify-between px-10 py-6">
        {/* logo */}
        <div className="flex justify-center items-center rounded-lg w-[150px] h-[150px]">
            <img 
              src='' 
              alt="logo" 
              className='w-full h-full object-cover rounded-lg'
            />
        </div>

        {/* userProfile */}
        <div className="flex flex-col items-center justify-between  rounded-lg w-[150px] h-[150px] bg-white">
            <div className=" rounded-lg relative w-[130px] h-[130px]">
                <img 
                    src='' 
                    alt="adminProfile" 
                    className='w-full h-full object-cover rounded-lg bg-transparent relative'
                />
                <div className='absolute font-semibold text-blue-800 left-1 bottom-1 z-10 border border-blue-300 rounded-full bg-white w-[20px] h-[20px] flex items-center justify-center'>{name.slice(0,1)}</div>
            </div>
            <Link 
              href='/signUp'
              className='text-xs text-indigo-500 font-serif underline '
            >Logout </Link>
        </div>
    </header>

    <main className="flex flex-wrap  rounded-lg flex-1">
        {/* sidebar */}
        <div className=" flex-col  w-1/5 hidden md:flex">
            {
                Items.map((item) => (
                    <Item key={item}>{item}</Item>
                ))
            }
        </div>

        <div className='flex flex-col flex-1  '>
            <h1 className='text-gray-900 font-semibold text-2xl px-4'>filters :</h1>
            <div className="flex flex-wrap flex-1  py-2 justify-evenly">

                <select 
                    name="university" 
                    id='university'
                    className='border border-green-400 basis-[250px] max-h-[40px] rounded-md px-2'
                    onChange={handleSelect}
                >
                    <option >Select University</option>
                    {filterData.university.map((el) => (
                        <option value={el._id} key={el._id} >{el.name.toUpperCase()}</option>
                    ))}
                </select>

                <Info name={'college'} list={filterData.college}   handleSelect={handleSelect}/>
                {/* <Info name={'branch'} list={branch[0]?.list} handleSelect={handleSelect}/>  */}

            </div>
        </div>

    </main>
 
  </div>    
    
</>
  )
}

export default AdminPage

const Item = ({children}) => {
    return (
<>
    <div className="flex flex-wrap flex-1 capitalize p-2 font-serif cursor-pointer px-4 hover:bg-green-200 hover:text-gray-600 border-b-2 rounded-tr-lg border-white hover:border-b-green-600">
        {children}
    </div>
</>
    )
}

const Info = ({name, list, handleSelect }) => {
    return (
<>
    <select 
        id={list._id} 
        name={name}
        className='border border-green-400 basis-[250px] rounded-md px-2 max-h-[40px]'
        onChange={handleSelect}
    >
        <option >{`Select ${list ? name : 'more'} `}</option>
        {list?.map((el) => (
            <option value={el._id} key={el._id} >{el.name}</option>
        ))}
    </select>

  
</>
    )
}

