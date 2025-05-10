import React, { useState } from 'react'
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { MdBloodtype } from "react-icons/md";
import { FaPersonWalkingLuggage } from "react-icons/fa6";
import { FaWeightScale } from "react-icons/fa6";
import { PiHospitalDuotone } from "react-icons/pi";
import { FaAddressBook } from "react-icons/fa6";
import Blood_Request_on_Donor from '../D_Blood_Request/D_Blood_Request';
import { IoIosMan } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";

import { useAuth } from "../../../context/auth";

function D_profile() {

    const [auth] = useAuth();
    // console.log("**** ss Auth ****",auth)

    

    const [isChecked, setIsChecked] = useState(false);
    const [counter, setCounter] = useState(59);

    const handleToggle = () => {
        setIsChecked((prev) => !prev);
    };

    const image = auth.user.profile_photo;

    return (
        <div className='font-nunito'>


            {/* image element */}
            <div class="bg-[url('/donor_background.png')] bg-cover bg-center h-[200px]">
            </div>


            {/* profile photo section */}
            <div className='flex flex-row items-center ml-8 justify-between pr-5'>
                <div className='flex flex-row items-center gap-8 mt-[-80px]'>

                    <div>
                        <img
                            src={image || "/abdullah.png"}
                            alt=""
                            className='h-48 border-8 border-white rounded-full'
                        />
                    </div>
                    <div className=' mt-4'>
                        <div className='h-20'></div>
                        <div className='bg-slate-00'>
                            <div className='flex flex-row justify-center items-center gap-20'>

                                <div className='text-2xl font-bold'>{auth.user.username}</div>
                                <div className='flex flex-row justify-center items-center gap-3'>
                                    <MdBloodtype /> <span className='text-gray-500'> {auth.donor.blood_group} </span>
                                </div>
                                <div className='flex flex-row justify-center items-center gap-3'>
                                    <IoIosMan /> <span className='text-gray-500'> {auth.donor.age} yrs</span>
                                </div>
                                <div className='flex flex-row justify-center items-center gap-3'>
                                    <FaWeightScale size={13} /> <span className='text-gray-500'> {auth.donor.weight} kg </span>
                                </div>
                            </div>
                            <p className='text-sm text-gray-500 font-bold'>Donor</p>
                            <div className='mt-3'>
                                <p className='flex flex-row items-center gap-2 font-nunito text-xs text-gray-900'>
                                    <FaPhone size={10} /> <span className='text-gray-500'>+92 {auth.user.phone} </span>
                                </p>
                                <p className='flex flex-row items-center gap-2 font-nunito  text-xs text-gray-900'>
                                    <MdEmail /> <span className='text-gray-500'>{auth.user.email} </span>
                                </p>
                                <p className='flex flex-row items-center gap-2 font-nunito  text-xs text-gray-900'>
                                    <IoLocationSharp /> <span className='text-gray-500'>{auth.donor.address} </span>
                                </p>


                            </div>
                        </div>
                    </div>

                </div>

                <div className=''>
                    <div className='flex flex-col justify-end items-center gap-3 font-nunito text-sm'>
                        Availability
                        <input
                            type="checkbox"
                            className="toggle toggle-success"
                            checked={isChecked}
                            onChange={handleToggle}
                        />
                        {/* <input type="checkbox" className="toggle toggle-success" /> */}
                        <p> {isChecked ? "" : ""}</p>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default D_profile
