import React from 'react'
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from "axios";
import D_Sidebar from '../D_Sidebar/D_Sidebar';

import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { MdBloodtype } from "react-icons/md";
import { FaPersonWalkingLuggage } from "react-icons/fa6";
import { FaWeightScale } from "react-icons/fa6";
import { PiHospitalDuotone } from "react-icons/pi";
import { FaAddressBook } from "react-icons/fa6";


function Specific_Organization() {


    const [user, setUser] = useState(null);
    const [organization, setOrganization] = useState(null);
    const location = useLocation();

    const { organization_id } = location.state || {};

    const [loading, setLoading] = useState(true); // <-- loading state


    console.log("** organization ID:", organization_id);


    useEffect(() => {
        get_organization();
    }, [organization_id]);

    async function get_organization() {

        setLoading(true); // start loading

        try {
            const res = await axios.get(`http://localhost:5000/organization/get-organization/${organization_id}`);

            if (res.data.success) {
                console.log("== get organization ==", res)
                setUser(res.data.user);
                setOrganization(res.data.organization);
            }
        } catch (error) {
            console.error("Error in specific organization profile:", error);
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

            <div className="'font-nunito ml-[17.3%] w-[82%] pt-16 px-4 bg-gray-100 min-h-screen bg-[url('/specific.png')] bg-cover bg-center">


                {/* <div className='text-center text-lg'>
                    Contact or Chat this recipient to donate blood
                </div> */}


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
                                <p className="text-sm text-gray-600 font-semibold">organization</p>
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
                                        <FaRegUser /> Website URL
                                    </div>
                                    <div>{organization?.website_url}</div>
                                </div>


                                <div className='flex flex-row justify-between min-w-[100%]'>
                                    <div className='flex flex-row justify-center items-center gap-2 font-bold'>
                                        <FaAddressBook /> Address
                                    </div>
                                    <div className='max-w-72'>{organization?.location}</div>
                                </div>

                            </div>

                        </div>
                    </div>

                    {/* <div className="mt-6 flex justify-center">
                        <button
                            className="border-2 border-[#820000] bg-[#820000] hover:bg-white hover:text-[#820000] text-white font-bold px-6 py-2 rounded-lg shadow-md transition"
                            onClick={() => alert('Opening chat...')}
                        >
                            Chat
                        </button>
                    </div> */}


                </div>


            </div>



        </div>
    )
}

export default Specific_Organization
