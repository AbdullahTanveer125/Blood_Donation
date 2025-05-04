import React from 'react'
import D_Sidebar from '../Donor_components/D_Sidebar/D_Sidebar'
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { MdBloodtype } from "react-icons/md";
import { FaPersonWalkingLuggage } from "react-icons/fa6";
import { FaWeightScale } from "react-icons/fa6";
import { PiHospitalDuotone } from "react-icons/pi";
import { FaAddressBook } from "react-icons/fa6";

import { useLocation } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from "axios";
import Specific_blood_request_on_donor from '../Donor_components/D_Specific_blood_request/Specific_blood_request_on_donor';


function Specific_Recipient() {

    const [user, setUser] = useState(null);
    const [recipient, setRecipient] = useState(null);
    const location = useLocation();

    console.log("Full location.state >>>", location.state);

    const { blood_request } = location.state || {};
    const recipient_id=blood_request.recipient_id;

    const [loading, setLoading] = useState(true); // <-- loading state


    console.log("Recipient ID:", blood_request.recipient_id);
    console.log("**** blood_request **** >>>>", blood_request)


    if (!recipient_id) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-red-50 to-red-100 font-nunito">
                <div className="bg-white p-10 rounded-2xl shadow-xl border border-red-200 text-center animate-pulse-slow">
                    <h1 className="text-4xl font-extrabold text-[#820000] mb-4">⚠️ Missing Recipient</h1>
                    <p className="text-xl text-gray-700 mb-6">Please delete this blood request. The recipient ID was not provided.</p>
                    <button
                        className="px-6 py-2 bg-[#820000] text-white rounded-full font-bold shadow-md hover:bg-white hover:text-[#820000] border-2 border-[#820000] transition"
                        onClick={() => window.history.back()}
                    >
                        Go Back
                    </button>
                </div>

                <style>
                    {`
                @keyframes pulse-slow {
                  0%, 100% { transform: scale(1); }
                  50% { transform: scale(1.02); }
                }
                .animate-pulse-slow {
                  animation: pulse-slow 3s ease-in-out infinite;
                }
              `}
                </style>
            </div>
        );
    }


    useEffect(() => {
        get_recipient();
    }, [blood_request]);

    async function get_recipient() {

        setLoading(true); // start loading

        try {
            console.log("When hit API",recipient_id)
            const res = await axios.get(`http://localhost:5000/recipient/get-recipient/${blood_request.recipient_id}`);

            if (res.data.success) {
                // console.log("== get recipient ==", res)
                setUser(res.data.user);
                setRecipient(res.data.recipient);
            }
        } catch (error) {
            console.error("Error in specific recipient profile:", error);
        } finally {
            setLoading(false); // stop loading after try or catch
        }
    }

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="text-xl font-bold text-[#820000]">Loading recipient details...</div>
            </div>
        );
    }

    return (
        <div>

            <div>
                <D_Sidebar />
            </div>

            <div className='font-nunito ml-[17.3%] w-[82%] pt-16 px-4 bg-gray-100 min-h-screen'>


                <div className='text-center text-lg'>
                    Contact or Chat this recipient to donate blood
                </div>


                <div className="p-6 font-nunito">

                    {/* Profile Card */}
                    <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-md p-6">
                        {/* Header Section */}
                        <div className="flex items-center gap-6">
                            <img
                                src={user?.profile_photo ? user.profile_photo : "/user.jpg"}
                                alt="Profile"
                                className="h-32 w-32 rounded-full border-4 border-[#820000] shadow-md"
                            />
                            <div>
                                <h2 className="text-2xl font-extrabold">{user?.username}</h2>
                                <p className="text-sm text-gray-600 font-semibold">recipient</p>
                                <div className="flex flex-col sm:flex-row sm:items-center gap-10 mt-2 text-sm text-gray-700">
                                    <div className="flex items-center gap-2">
                                        <FaPhone size={12} /> {user?.phone}
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <MdEmail size={12} /> {user?.email}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Divider */}
                        <hr className="my-6 border-gray-300" />

                        {/* Information Section */}
                        <div className=" flex flex-row justify-center items-center ">

                            {/* Information Section */}
                            <div className=" flex flex-col justify-center items-center gap-3 min-w-[50%]">

                                <div className='flex flex-row justify-between min-w-[100%]'>
                                    <div className='flex flex-row justify-center items-center gap-2 font-bold'>
                                        <FaRegUser /> Full Name
                                    </div>
                                    <div>{user?.name}</div>
                                </div>

                                <div className='flex flex-row justify-between min-w-[100%]'>
                                    <div className='flex flex-row justify-center items-center gap-2 font-bold'>
                                        <MdBloodtype /> Gender
                                    </div>
                                    <div>{recipient?.gender}</div>
                                </div>

                                <div className='flex flex-row justify-between min-w-[100%]'>
                                    <div className='flex flex-row justify-center items-center gap-2 font-bold'>
                                        <FaPersonWalkingLuggage /> Age
                                    </div>
                                    <div>{recipient?.age}</div>
                                </div>

                                <div className='flex flex-row justify-between min-w-[100%]'>
                                    <div className='flex flex-row justify-center items-center gap-2 font-bold'>
                                        <FaAddressBook /> Address
                                    </div>
                                    <div className='max-w-72'>{recipient?.address}</div>
                                </div>

                            </div>
                            {/* left side */}
                            {/* <div className='space-y-3 flex flex-col justify-center'>
                                <span className="flex items-center gap-2 font-extrabold">
                                    <FaRegUser /> Full Name
                                </span>

                                <span className="flex items-center gap-2 font-extrabold">
                                    <MdBloodtype /> Gender
                                </span>

                                <span className="flex items-center gap-2 font-extrabold">
                                    <FaPersonWalkingLuggage /> Age
                                </span>

                                <span className="flex items-center gap-2 font-extrabold">
                                    <FaAddressBook /> Address
                                </span>
                            </div> */}

                            {/* right side */}
                            {/* <div className='space-y-3 flex flex-col justify-center'>
                                <div>{user?.name}</div>
                                <div>{recipient?.gender}</div>
                                <div>{recipient?.age}</div>
                                <div className="text-justify italic w-3/4">
                                    {recipient?.address}
                                </div>
                            </div> */}


                            {/* <div className="flex flex-row bg-slate-400 justify-around">
                                <span className="flex items-center gap-2 font-extrabold">
                                    <FaRegUser /> Full Name
                                </span>
                                <span>{user.name}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="flex items-center gap-2 font-extrabold">
                                    <MdBloodtype /> Gender
                                </span>
                                <span>{recipient.gender}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="flex items-center gap-2 font-extrabold">
                                    <FaPersonWalkingLuggage /> Age
                                </span>
                                <span>{recipient.age}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="flex items-center gap-2 font-extrabold">
                                    <FaWeightScale /> Weight
                                </span>
                                <span>65 kg</span>
                            </div>

                            <div className="flex justify-between">
                                <span className="flex items-center gap-2 font-extrabold">
                                    <PiHospitalDuotone /> Hospital
                                </span>
                                <span>City Care Hospital</span>
                            </div>
                            <div className="flex items-start justify-between gap-4">
                                <span className="flex items-center gap-2 font-extrabold">
                                    <FaAddressBook /> Address
                                </span>
                                <span className="text-justify italic w-3/4">
                                    {recipient.address}
                                </span>
                            </div> */}
                            {/* <div className="space-y-4 text-sm text-gray-800">
                                
                            </div> */}
                        </div>
                    </div>

                    <div className="mt-6 flex justify-center">
                        <button
                            className="border-2 border-[#820000] bg-[#820000] hover:bg-white hover:text-[#820000] text-white font-bold px-6 py-2 rounded-lg shadow-md transition"
                            onClick={() => alert('Opening chat...')}
                        >
                            Chat
                        </button>
                    </div>


                </div>
                <Specific_blood_request_on_donor blood_request={blood_request} />
            </div>

        </div>
    )
}

export default Specific_Recipient
