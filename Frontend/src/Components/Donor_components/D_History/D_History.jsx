import React, { useEffect, useState } from 'react';
import D_Sidebar from '../D_Sidebar/D_Sidebar'

import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { MdDateRange, MdBloodtype } from "react-icons/md";

import { Link } from "react-router-dom";

import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../../../context/auth";

function D_History() {

    const [auth] = useAuth();
    // console.log("**** ss Auth ****",auth)
    console.log("**** ss (donor _id) ss ****", auth.donor._id)


    const navigate = useNavigate();

    const [allRequests, setAllRequests] = useState([]);
    const [blood_group, setBlood_group] = useState("");
    // const [location, setLocation] = useState("");
    const [loading, setLoading] = useState(false);
    const [array_length, setArray_length] = useState(false);

    useEffect(() => {
        fetchRequests();
    }, []);

    async function fetchRequests() {
        setLoading(true)
        try {
            const res = await axios.get(`http://localhost:5000/bloodRequest/get-donor-blood-request/${auth.donor._id}`);
            console.log("Check==========", res.data.Blood_Request)
            setArray_length(res.data.Blood_Request.length)
            setAllRequests(res.data.Blood_Request || []);
        } catch (error) {
            console.error("Error fetching blood requests:", error);
        } finally {
            setLoading(false)
        }
    }





    return (
        <div>

            <D_Sidebar />

            <div>

                <div className='ml-[17.3%] w-[83%] pt-16 text-center'>

                    <h1 className="text-4xl font-extrabold text-center mb-8">
                        <span className="text-our_red">Your Donated</span> Blood Requests
                    </h1>

                    <p>You donate blood requests = <span>{array_length}</span></p>

                    {loading ? (
                        <div className="flex justify-center items-center mt-32 gap-2">
                            <div className="w-4 h-4 bg-our_red rounded-full animate-[ping_1s_infinite]"></div>
                            <div className="w-4 h-4 bg-our_red rounded-full animate-[ping_1s_infinite_200ms]"></div>
                            <div className="w-4 h-4 bg-our_red rounded-full animate-[ping_1s_infinite_400ms]"></div>
                        </div>
                    ) : (
                        <>

                            <div className='flex flex-col items-center justify-center'>

                                <div className="mt-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 px-6">
                                    {allRequests.map((request, index) => (
                                        <div key={index} className="relative bg-white shadow-lg rounded-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
                                            <span className={`absolute top-3 right-3 badge badge-secondary px-3 py-1 text-white rounded-full text-xs ${request.urgency === "high" ? "bg-our_red border border-our_red" : request.urgency === "low" ? "bg-green-600" : "bg-yellow-500"}`}>
                                                {request.urgency}
                                            </span>

                                            <div className='flex flex-row gap-4 items-center mb-5'>
                                                <img src={request.profile_photo || "/user.jpg"} alt="" className='w-12 rounded-full' />
                                                <div className='text-start'>
                                                    <p className='font-bold'>{request.patient_name} </p>
                                                    <p className='text-xs text-gray-500'>some text</p>
                                                </div>
                                            </div>

                                            <div className='flex flex-col gap-2 text-left'>
                                                <div className='flex items-center gap-2 text-sm text-gray-500'><FaLocationDot size={13} /> {request.location}</div>
                                                <div className='flex items-center gap-2 text-sm text-gray-500'><FaPhone size={13} /> {request.phone}</div>
                                            </div>

                                            <div className='my-2 flex flex-wrap gap-6 text-gray-500 text-sm'>
                                                <div className='flex items-center gap-2'><MdDateRange /> {new Date(request.blood_need_date).toLocaleDateString()}</div>
                                                <div className='flex items-center gap-2 '><MdBloodtype /> {request.blood_group}</div>
                                            </div>

                                            <div className='text-justify text-sm font-nunito mb-6'>
                                                {request.comment}
                                            </div>


                                        </div>
                                    ))}
                                </div>


                            </div>



                        </>
                    )}
                </div>

            </div>

        </div>
    )
}

export default D_History
