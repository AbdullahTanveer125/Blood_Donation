import axios from 'axios';
import React, { useEffect, useState } from 'react'

import Marquee from "react-fast-marquee";

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

        <div className="text-center mt-10 bg-slate-300">
            <h1 className="text-4xl font-bold text-center mb-8 bg-slate-500">
                <span className="text-[#B01030]">Blood</span> Requests
            </h1>


            <div className="w-full "> {/* Ensures no scrollbar */}
                {/* Marquee Effect */}
                <Marquee speed={40} gradient={false} pauseOnHover={true} className="w-fit">
                    {array_of_all_blood_requests.map((request, index) => (

                        <div className="indicator bg-yellow-600 mx-5 p-1 gap-10 mt-10">

                            <span className={`indicator-item badge badge-secondary ${request.urgency == "high" ? "bg-red-700" :
                                request.urgency == "low" ? "bg-yellow-500 text-black" :
                                    "bg-green-500"}`}>{request.urgency}</span>
                            {/* <div className="bg-base-300 grid h-32 w-32 place-items-center">content</div> */}
                            <div
                                key={index}
                                className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow gap-5 text-left"
                            >


                                <div className='flex gap-2 text-lg mb-2'>
                                    <h3 className=" font-semibold">Patient:</h3>
                                    <p className=''>{request.patient_name}</p>
                                </div>


                                <p className="text-sm text-gray-700">
                                    <strong>Blood Group:</strong> {request.blood_group}
                                </p>
                                <p className="text-sm text-gray-700">
                                    <strong>Phone:</strong> {request.phone}
                                </p>

                                <p className="text-sm text-gray-700">
                                    <strong>Location:</strong> {request.location}
                                </p>
                                <p className="text-sm text-gray-700">
                                    <strong>Blood need date:</strong>{" "}
                                    {new Date(request.blood_need_date).toLocaleDateString()}
                                </p>
                                <p className="text-sm text-gray-700">
                                    <strong>Comment:</strong> {request.comment}
                                </p>



                            </div>
                        </div>


                    ))}
                </Marquee>
            </div>

            <button className="bg-red-500 text-white font-semibold py-2 px-4 rounded hover:bg-red-700 transition duration-200 mt-4">
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


