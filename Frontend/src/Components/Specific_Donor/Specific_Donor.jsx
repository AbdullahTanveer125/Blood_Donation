import React from 'react'
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
import R_Sidebar from '../Recipient_Components/R_Sidebar/R_Sidebar';


function Specific_Donor() {

    const [user, setUser] = useState(null);
    const [recipient, setRecipient] = useState(null);
    const location = useLocation();
    const donor = location.state || {};

    const [loading, setLoading] = useState(false); // <-- loading state


    // console.log("****** ddddd **** >>>>>>:", donor);


    // useEffect(() => {
    //     get_recipient();
    // }, [recipient_id]);

    // async function get_recipient() {

    //     setLoading(true); // start loading

    //     try {
    //         const res = await axios.get(`http://localhost:5000/donor/get-donor/${donor_id}`);

    //         if (res.data.success) {
    //             // console.log("== get recipient ==", res)
    //             setUser(res.data.user);
    //             setRecipient(res.data.recipient);
    //         }
    //     } catch (error) {
    //         console.error("Error in specific recipient profile:", error);
    //     } finally {
    //         setLoading(false); // stop loading after try or catch
    //     }
    // }

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
                <R_Sidebar />
            </div>

            <div className='font-nunito ml-[17.3%] w-[82%] pt-16 px-4 bg-gray-100 min-h-screen'>


                <div className='text-center text-lg'>
                    Contact or Chat this donor to donate blood
                </div>


                <div className="p-6 font-nunito">

                    {/* Profile Card */}
                    <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-md p-6">
                        {/* Header Section */}
                        <div className="flex items-center gap-6">
                            <img
                                src={donor?.profile_photo ? donor.profile_photo : "/user.jpg"}
                                alt="Profile"
                                className="h-32 w-32 rounded-full border-4 border-[#820000]"
                            />
                            <div>
                                <h2 className="text-2xl font-extrabold">{donor?.username}</h2>
                                <p className="text-sm text-gray-600 font-semibold">donor</p>
                                <div className="flex flex-col sm:flex-row sm:items-center gap-10 mt-2 text-sm text-gray-700">
                                    <div className="flex items-center gap-2">
                                        <FaPhone size={12} /> {donor?.phone}
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <MdEmail size={12} /> {donor?.email}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Divider */}
                        <hr className="my-6 border-gray-300" />

                        {/* Information Section */}
                        <div className=" flex flex-col justify-center items-center gap-3 ">

                            <div className='flex flex-row justify-between min-w-[40%]'>
                                <div className='flex flex-row justify-center items-center gap-2 font-bold'>
                                    <FaRegUser /> Full Name
                                </div>
                                <div>{donor?.name}</div>
                            </div>

                            <div className='flex flex-row justify-between min-w-[40%]'>
                                <div className='flex flex-row justify-center items-center gap-2 font-bold'>
                                    <MdBloodtype /> Gender
                                </div>
                                <div>{donor.donorDetails?.gender}</div>
                            </div>

                            <div className='flex flex-row justify-between min-w-[40%]'>
                                <div className='flex flex-row justify-center items-center gap-2 font-bold'>
                                    <FaPersonWalkingLuggage /> Age
                                </div>
                                <div>{donor.donorDetails?.age}</div>
                            </div>

                            <div className='flex flex-row justify-between min-w-[40%]'>
                                <div className='flex flex-row justify-center items-center gap-2 font-bold'>
                                    <FaAddressBook /> Address
                                </div>
                                <div>{donor.donorDetails?.address}</div>
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
                            {/* <div className='space-y-2 mt-2 flex flex-col justify-center'>
                                <div>{donor?.name}</div>
                                <div>{donor.donorDetails?.gender}</div>
                                <div>{donor.donorDetails?.age}</div>
                                <div className="text-justify italic w-3/4">
                                    {donor.donorDetails?.address}
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


            </div>

        </div>
    )
}

export default Specific_Donor
