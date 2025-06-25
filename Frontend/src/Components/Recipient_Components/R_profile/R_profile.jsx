import React, { useState } from 'react'
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { MdBloodtype } from "react-icons/md";
import { FaPersonWalkingLuggage } from "react-icons/fa6";
import { FaWeightScale } from "react-icons/fa6";
import { PiHospitalDuotone } from "react-icons/pi";
import { FaPerson } from "react-icons/fa6";
import { FaAddressBook } from "react-icons/fa6";
// import Blood_Request_on_Donor from '../D_Blood_Request/D_Blood_Request';
import { IoIosMan } from "react-icons/io";
import { useAuth } from "../../../context/auth";


function R_Profile() {


    const [auth] = useAuth();
    console.log("**** ss Auth ****",auth)
    const image = auth.user.profile_photo;


    return (
        <div className='font-nunito mb-6'>


            {/* image element */}
            <div class="bg-[url('/donor_background.png')] bg-cover bg-center h-[200px]">
            </div>


            {/* profile photo section */}
            <div className='flex flex-row items-center ml-8 justify-between pr-5'>
                <div className='flex flex-row items-center gap-8 mt-[-80px]'>

                    <div>
                        <img
                            src={image || "/default_user.jpg"}
                            alt=""
                            className='h-48 w-48 border-8 border-white rounded-full object-cover object-center'
                        />
                        <div className=' mt-2 text-center font-extrabold'>{auth.user.name}</div>
                    </div>
                    <div>
                        <div className='h-20'></div>
                        <div className=''>
                            <div className='mt-2 flex flex-row justify-center items-center gap-20'>
                                <p className='text-xl font-bold'>{auth.user.username}</p>
                                <div className='flex flex-row justify-center items-center gap-10'>
                                    <p className='flex flex-row justify-center items-center gap-1'> {auth.recipient.gender}</p>
                                    <p className='flex flex-row justify-center items-center gap-1 text-sm'> <span className='font-bold'></span> {auth.recipient.age} years</p>
                                </div>
                            </div>
                            <p className='font-nunito  text-xs text-gray-500 font-bold'>Recipient</p>
                            <div className='flex flex-col gap-2 mt-4 text-gray-600'>
                                <p className='flex flex-row items-center gap-2 font-nunito text-sm text-gray-900'> <FaPhone size={10} />+92 {auth.user.phone}</p>
                                <p className='flex flex-row items-center gap-2 font-nunito  text-sm text-gray-900'><MdEmail /> {auth.user.email}</p>
                                <p className='flex flex-row items-center gap-2 font-nunito  text-sm text-gray-900'><FaAddressBook /> {auth.recipient.address}</p>

                            </div>
                        </div>
                    </div>

                </div>


            </div>

            {/* <Blood_Request_on_Donor /> */}

        </div>
    )
}

export default R_Profile
