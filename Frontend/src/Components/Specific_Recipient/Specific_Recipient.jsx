import React from 'react'
import D_Sidebar from '../Donor_components/D_Sidebar/D_Sidebar'
import R_Profile from '../Recipient_Components/R_profile/R_profile'
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { MdBloodtype } from "react-icons/md";
import { FaPersonWalkingLuggage } from "react-icons/fa6";
import { FaWeightScale } from "react-icons/fa6";
import { PiHospitalDuotone } from "react-icons/pi";
import { FaAddressBook } from "react-icons/fa6";



function Specific_Recipient() {
    return (
        <div>

            <div>
                <D_Sidebar />
            </div>

            <div className='ml-[17.3%] w-[83%] pt-16 px-4 bg-gray-100 min-h-screen'>

                <div className="p-6 font-nunito">

                    {/* Profile Card */}
                    <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-md p-6">
                        {/* Header Section */}
                        <div className="flex items-center gap-6">
                            <img
                                src="/fatima.png"
                                alt="Profile"
                                className="h-32 w-32 rounded-full border-4 border-[#820000] shadow-md"
                            />
                            <div>
                                <h2 className="text-2xl font-extrabold">User Name</h2>
                                <p className="text-sm text-gray-600 font-semibold">Recipient</p>
                                <div className="flex flex-col sm:flex-row sm:items-center gap-2 mt-2 text-sm text-gray-700">
                                    <div className="flex items-center gap-2">
                                        <FaPhone size={12} /> 0309-9014620
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <MdEmail size={12} /> abbhai125420@gmail.com
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Divider */}
                        <hr className="my-6 border-gray-300" />

                        {/* Information Section */}
                        <div className="grid md:grid-cols-2 gap-28">
                            <div className="space-y-4 text-sm text-gray-800">
                                <div className="flex justify-between">
                                    <span className="flex items-center gap-2 font-extrabold">
                                        <FaRegUser /> Full Name
                                    </span>
                                    <span>Abdullah Tanveer</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="flex items-center gap-2 font-extrabold">
                                        <MdBloodtype /> Gender
                                    </span>
                                    <span>Male</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="flex items-center gap-2 font-extrabold">
                                        <FaPersonWalkingLuggage /> Age
                                    </span>
                                    <span>52</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="flex items-center gap-2 font-extrabold">
                                        <FaWeightScale /> Weight
                                    </span>
                                    <span>65 kg</span>
                                </div>
                            </div>

                            <div className="space-y-4 text-sm text-gray-800">
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
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, aperiam. Temporibus reiciendis repellat quaerat quos voluptas.
                                    </span>
                                </div>
                            </div>
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

export default Specific_Recipient
