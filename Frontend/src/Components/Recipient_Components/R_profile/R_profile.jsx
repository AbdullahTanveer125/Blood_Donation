import React, { useState } from 'react'
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { MdBloodtype } from "react-icons/md";
import { FaPersonWalkingLuggage } from "react-icons/fa6";
import { FaWeightScale } from "react-icons/fa6";
import { PiHospitalDuotone } from "react-icons/pi";
import { FaAddressBook } from "react-icons/fa6";
// import Blood_Request_on_Donor from '../D_Blood_Request/D_Blood_Request';

import { useAuth } from "../../../context/auth";


function R_Profile() {


    const [auth] = useAuth();
    console.log("**** ss Auth ****",auth)
    const image = auth.user.profile_photo;


    return (
        <div className=''>


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
                            className='h-48 border-8 border-white rounded-full  w-full object-cover object-center'
                        />
                    </div>
                    <div>
                        <div className='h-20'></div>
                        <div>
                            <p className='text-xl font-bold'>{auth.user.username}</p>
                            <p className='font-nunito  text-sm text-gray-600 font-bold'>Recipient</p>
                            <div className='flex flex-row items-center gap-6'>
                                <p className='flex flex-row items-center gap-2 font-nunito text-xs text-gray-900'> <FaPhone size={10} />+92 {auth.user.phone}</p>
                                <p className='flex flex-row items-center gap-2 font-nunito  text-xs text-gray-900'><MdEmail /> {auth.user.email}</p>

                            </div>
                        </div>
                    </div>

                </div>


            </div>



            {/* information section */}
            <div className='h-[320px] bg-gray-00 flex flex-row justify-around items-center pt-6'>


                <div className='bg-slate-00 flex flex-col justify-center space-y-3  ml-36 w-[500px] font-nunito text-sm '
                >
                    <div className='flex flex-row justify-between items-center'>
                        <p className='flex flex-row gap-3 items-center'>
                            <FaRegUser /> Full Name
                        </p>
                        <p className=' '>Abdullah Tanveer</p>
                    </div>

                    <div className='flex flex-row justify-between items-center'>
                        <p className='flex flex-row gap-3 items-center'>
                            <MdBloodtype /> Gender
                        </p>
                        <p className=' '>Male</p>
                    </div>

                    <div className='flex flex-row justify-between items-center'>
                        <p className='flex flex-row gap-3 items-center'>
                            <FaPersonWalkingLuggage /> Age
                        </p>
                        <p className='  '>52</p>
                    </div>


                    <div className=' flex flex-row justify-between items-start gap-4'>
                        <p className='flex flex-row gap-3 items-center'>
                            <FaAddressBook /> Address
                        </p>
                        <p className='pt- italic text-right w-80'>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, aperiam. Temporibus reiciendis repellat quaerat quos voluptas.
                        </p>
                    </div>


                </div>

                <div>
                    aaaaa
                </div>


            </div>

            {/* image element */}
            {/* image element */}

            {/* <Blood_Request_on_Donor /> */}

        </div>
    )
}

export default R_Profile
