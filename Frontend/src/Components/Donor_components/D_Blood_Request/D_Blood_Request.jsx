import axios from 'axios';
import React, { useEffect, useState } from 'react'

import Marquee from "react-fast-marquee";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import { MdBloodtype } from "react-icons/md";

import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Blood_Request_on_Donor() {

    const [array_of_all_blood_requests, setArray_of_all_blood_requests] = useState([]);



    async function fetch_all_blood_requests() {
        try {
            // console.log("** Before Hit API **")
            // console.log("res=", res)
            const res = await axios.get(`http://localhost:5000/bloodRequest/get-all-blood-request`);
            console.log("** After Hit API **")
            console.log("res=", res.data.All_Blood_Requests)

            setArray_of_all_blood_requests(res.data.All_Blood_Requests)
            console.log(array_of_all_blood_requests)
            // const array_of_users = res.data.data
            // console.log("array=", array_of_users)

        } catch (error) {
            // setError(error);
            console.log("*** Error ***\n")
            console.log(error)
            console.log("\n*** Error ***")
            // setLoading(false);
        }
    }

    useEffect(function () {
        fetch_all_blood_requests()
    }, [])


    
    

    return (

        <div className="text-center mt-10 ">
            <h1 className="text-4xl font-bold text-center mb-8 ">
                <span className="text-[#B01030]">Blood</span> Requests
            </h1>


            <div className="w-full "> {/* Ensures no scrollbar */}
                {/* Marquee Effect */}
                <Marquee speed={40} gradient={false} pauseOnHover={true} className="w-fit">
                    {array_of_all_blood_requests.map((request, index) => (

                        <div className="w-[300px] indicator mx-5 p-1 gap-10 mt-10">

                            <span className={`py-2 indicator-item badge badge-secondary ${request.urgency == "high" ? "bg-red-700 border-red-700" :
                                request.urgency == "low" ? "bg-green-600 border-green-600" :
                                    "bg-green-500"}`}>{request.urgency}</span>
                            {/* <div className="bg-base-300 grid h-32 w-32 place-items-center">content</div> */}
                            <div
                                key={index}
                                className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow gap-5 text-left"
                            >



                                {/* ********************************************
                ********************************************
                ********************************************
                ******************************************** */}


                                <div className='flex flex-row gap-4 items-center mb-5'>
                                    <div>
                                        <img
                                            src="./user.jpg"
                                            alt=""
                                            className='w-12 rounded-full'
                                        />
                                    </div>
                                    <div>
                                        <p>User Name</p>
                                        <p className='text-xs text-gray-500'>some text</p>
                                    </div>

                                </div>

                                <div className='flex flex-col gap-2'>
                                    <div className='flex flex-row items-center gap-2 font-nunito text-gray-500 text-sm'>
                                        <FaLocationDot size={13} /> Jinnah Hospital
                                    </div>
                                    <div className='flex flex-row items-center gap-2 font-nunito  text-gray-500  text-sm'>
                                        <FaPhone size={10} /> 0309-9014620
                                    </div>
                                </div>

                                <div className='my-2 flex flex-row items-center gap-6 text-gray-500 font-nunito text-sm'>
                                    <div className='flex flex-row items-center gap-2'>
                                        <MdDateRange /> feb 10, 2015
                                    </div>

                                    <div className='flex flex-row items-center gap-2'>
                                        <MdBloodtype /> A+
                                    </div>
                                    {/* <div className='flex flex-row items-center gap-2'>
                                        time
                                    </div> */}
                                </div>

                                <div className='font-nunito text-justify mt-7 mb-14 '>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum modi quia ullam, fugiat sunt dolor!
                                </div>

                                {/* <div className='mb- mx- flex flex-row justify-center items-center gap-3 bg-[#820000] text-white py-2 rounded-md'
                                onClick={() => go_to_specific_blood_request(request)}
                                >
                                    Donate
                                </div> */}

                                {/* 💡 Can I send data through a <Link> like props instead of state?

❌ Short answer: No, <Link> cannot pass props directly like a component.
Props are only passed between parent and child components, not through routing (<Link>). */}
                                <Link
                                    to="/specific_blood_request"
                                    state={request}
                                    className="mb-4 mx-2 flex flex-row justify-center items-center gap-3 bg-[#820000] text-white py-2 rounded-md cursor-pointer"
                                >
                                    Donate
                                </Link>

                                {/* ********************************************
                ********************************************
                ********************************************
                ******************************************** */}
                            </div>
                        </div>


                    ))}
                </Marquee>
            </div>

            <button className="bg-red-500 text-white font-semibold py-2 px-4 rounded hover:bg-red-700 transition duration-200 mt-14">
                See All Blood Requests
            </button>
        </div>












        // <div className='text-center mt-10'>

        //     <h1 className='text-4xl font-bold text-center mb-8'>
        //         <span className='text-[#B01030]'>Blood</span> Requests
        //     </h1>

        //     <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 p-4">
        //         {array_of_all_blood_requests.map((request, index) => (

        //             <div className="indicator">
        //                 <span className="indicator-item  bg-red-700 badge badge-secondary">{request.urgency}</span>
        //                 {/* <div className="bg-base-300 grid h-32 w-32 place-items-center">content</div> */}
        //                 <div
        //                     key={index}
        //                     className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow"
        //                 >


        //                     <div className='flex gap-3'>
        //                         <h3 className="text-lg font-semibold  mb-2">Patient =</h3>
        //                         <p>{request.patient_name}</p>
        //                     </div>


        //                     <p className="text-sm text-gray-700">
        //                         <strong>Blood Group:</strong> {request.blood_group}
        //                     </p>
        //                     <p className="text-sm text-gray-700">
        //                         <strong>Phone:</strong> {request.phone}
        //                     </p>

        //                     <p className="text-sm text-gray-700">
        //                         <strong>Location:</strong> {request.location}
        //                     </p>
        //                     <p className="text-sm text-gray-700">
        //                         <strong>Blood need date:</strong>{" "}
        //                         {new Date(request.blood_need_date).toLocaleDateString()}
        //                     </p>
        //                     <p className="text-sm text-gray-700">
        //                         <strong>Comment:</strong> {request.comment}
        //                     </p>



        //                 </div>
        //             </div>

        //             // <div>
        //             //     <span className="indicator-item badge badge-secondary">typing…</span>


        //             // </div>
        //         ))}


        //     </div>

        //     <button
        //         // onClick={handleDeleteAll}
        //         className="bg-red-500 text-white font-semibold py-2 px-4 rounded hover:bg-red-700 transition duration-200"
        //     >
        //         See All Blood Requests
        //     </button>



        // </div>
    )
}

export default Blood_Request_on_Donor


