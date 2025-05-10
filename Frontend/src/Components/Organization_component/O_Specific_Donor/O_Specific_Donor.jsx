import React from 'react'
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { MdBloodtype } from "react-icons/md";
import { FaPersonWalkingLuggage } from "react-icons/fa6";
// import { FaWeightScale } from "react-icons/fa6";
// import { PiHospitalDuotone } from "react-icons/pi";
import { FaAddressBook } from "react-icons/fa6";

import { useLocation } from 'react-router-dom';
import { useEffect, useState } from "react";
// import axios from "axios";
// import R_Sidebar from '../Recipient_Components/R_Sidebar/R_Sidebar';
import O_Sidebar from '../O_Sidebar/O_Sidebar';


function O_Specific_Donor() {

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
                <div className="text-xl font-bold text-our_red">Loading recipient details...</div>
            </div>
        );
    }

    return (
        <div>

            <div>
                <O_Sidebar />
            </div>

            <div className='font-nunito ml-[17.3%] w-[82%] pt-16 px-4 bg-gray-100 min-h-screen'>




                <div className="p-6 font-nunito">

                    {/* Profile Card */}
                    <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-md p-6">
                        {/* Header Section */}
                        <div className="flex items-center gap-6">
                            <img
                                src={donor?.profile_photo ? donor.profile_photo : "/user.jpg"}
                                alt="Profile"
                                className="h-32 w-32 rounded-full border-4 border-our_red"
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
                                    <FaPersonWalkingLuggage /> Weight
                                </div>
                                <div>{donor.donorDetails?.weight} kgs</div>
                            </div>

                            <div className='flex flex-row justify-between min-w-[40%]'>
                                <div className='flex flex-row justify-center items-center gap-2 font-bold'>
                                    <FaPersonWalkingLuggage /> Age
                                </div>
                                <div>{donor.donorDetails?.age} years</div>
                            </div>


                            <div className='flex flex-row justify-between min-w-[40%]'>
                                <div className='flex flex-row justify-center items-center gap-2 font-bold'>
                                    <FaAddressBook /> Address
                                </div>
                                <div>{donor.donorDetails?.address}</div>
                            </div>

                        </div>
                    </div>



                </div>


            </div>

        </div>
    )
}

export default O_Specific_Donor


