import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { MdDateRange, MdBloodtype } from "react-icons/md";
import { Link } from "react-router-dom";
import { HiMiniArrowLeftStartOnRectangle } from "react-icons/hi2";


function All_Blood_Request() {
    const [allRequests, setAllRequests] = useState([]);
    const [visibleCount, setVisibleCount] = useState(9); // show 3 rows initially (3 x 3)

    async function fetchRequests() {
        try {
            const res = await axios.get(`http://localhost:5000/bloodRequest/get-all-blood-request`);
            setAllRequests(res.data.All_Blood_Requests || []);
            console.log("Array of blood requests=", allRequests)
        } catch (error) {
            console.error("Error fetching blood requests:", error);
        }
    }

    useEffect(() => {
        fetchRequests();
    }, []);



    const handleSeeMore = () => {
        setVisibleCount(prev => prev + 6); // show 2 more rows
    };

    const isAllVisible = visibleCount >= allRequests.length;

    return (
        <div className="text-center mt-10 font-nunito pt-24">

            <button className="absolute top-6 left-6 bg-[#820000] text-white border-2 border-[#820000] py-2 px-4 rounded hover:bg-white hover:text-[#820000] transition flex flex-row justify-center items-center gap-2 mb-10">
                <HiMiniArrowLeftStartOnRectangle size={20} className='font-extrabold' /> Go Back
            </button>

            <h1 className="text-4xl font-extrabold text-center mb-8">
                <span className="text-[#820000]">All </span> Blood Requests
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 px-6">
                {allRequests.slice(0, visibleCount).map((request, index) => (
                    <div key={index} className="relative bg-white shadow-lg rounded-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
                        <span className={`absolute top-3 right-3 badge badge-secondary px-3 py-1 text-white rounded-full text-xs ${request.urgency === "high" ? "bg-[#820000] border border-[#820000]" : request.urgency === "low" ? "bg-green-600" : "bg-yellow-500"}`}>
                            {request.urgency}
                        </span>

                        <div className='flex flex-row gap-4 items-center mb-5'>
                            <img src="./user.jpg" alt="" className='w-12 rounded-full' />
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

                        <Link
                            to="/specific_blood_request"
                            state={request}
                            className="flex justify-center items-center gap-3 bg-[#820000] text-white py-2 rounded-md hover:bg-red-800 transition"
                        >
                            Donate
                        </Link>
                    </div>
                ))}
            </div>

            <button
                onClick={handleSeeMore}
                disabled={isAllVisible}
                className={`mt-10 px-6 py-2 font-semibold rounded transition duration-200 ${isAllVisible
                    ? "bg-gray-400 text-white cursor-not-allowed"
                    : "bg-[#820000] text-white hover:bg-white hover:text-[#820000] border border-[#820000]"
                    }`}
            >
                {isAllVisible ? "No More Requests" : "See More"}
            </button>
        </div>
    );
}

export default All_Blood_Request;
