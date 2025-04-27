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

import { useAuth } from "../../../context/auth";
import user_image from "../../../../public/abdullah.png"

function D_profile() {

    const [auth] = useAuth();
    // console.log("**** ss Auth ****",auth)


    const [isChecked, setIsChecked] = useState(false);
    const [counter, setCounter] = useState(59);

    // const user=auth.user
    // const donor=auth.donor

    // console.log(donor,"**** ss Auth ****",user)

    const handleToggle = () => {
        setIsChecked((prev) => !prev);
    };

    // console.log("***** User Image *****",auth.user.profile_photo)

    // Suppose 'image' is your received image object
const image = auth.user.profile_photo;

    // Step 1: Convert buffer data to a base64 string
const base64String = btoa(
    new Uint8Array(image.data.data)
      .reduce((data, byte) => data + String.fromCharCode(byte), '')
  );
  
  // Step 2: Create the Data URL
  const imageUrl = `data:${image.contentType};base64,${base64String}`;
  


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
                            src={imageUrl || "/abdullah.png"}
                            alt=""
                            className='h-48 border-8 border-white rounded-full'
                        />
                    </div>
                    <div>
                        <div className='h-20'></div>
                        <div>
                            <p className='text-xl font-bold'>{auth.user.username}</p>
                            <p className='font-nunito  text-sm text-gray-600 font-bold'>Donor</p>
                            <div className='flex flex-row items-center gap-6'>
                                <p className='flex flex-row items-center gap-2 font-nunito text-xs text-gray-900'> <FaPhone size={10} /> {auth.user.phone}</p>
                                <p className='flex flex-row items-center gap-2 font-nunito  text-xs text-gray-900'><MdEmail /> {auth.user.email}</p>

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



            {/* information section */}
            <div className='h-[320px] bg-gray-00 flex flex-row justify-between pt-10'>
                <div className='w-[3%] flex flex-row justify-center items-center'>
                    {/* <img
                        src="./blood2.png"
                        alt=""
                        className='w-32 h-40 opacity-'
                    /> */}
                </div>

                <div className='bg-slate-00 flex flex-col justify-center space-y-3  pl-6 w-[500px] font-nunito text-sm'
                >
                    <div className='flex flex-row justify-between items-center'>
                        <p className='flex flex-row gap-3 items-center'>
                            <FaRegUser /> Full Name
                        </p>
                        <p className=' '>{auth.user.name}</p>
                    </div>

                    <div className='flex flex-row justify-between items-center'>
                        <p className='flex flex-row gap-3 items-center'>
                            <MdBloodtype /> Blood Group
                        </p>
                        <p className=' '>{auth.donor.blood_group}</p>
                    </div>

                    <div className='flex flex-row justify-between items-center'>
                        <p className='flex flex-row gap-3 items-center'>
                            <FaPersonWalkingLuggage /> Age
                        </p>
                        <p className='  '>{auth.donor.age}</p>
                    </div>

                    <div className='flex flex-row justify-between items-center'>
                        <p className='flex flex-row gap-3 items-center'>
                            <FaWeightScale /> Weight
                        </p>
                        <p className=' '>{auth.donor.weight}</p>
                    </div>

                    <div className='flex flex-row justify-between items-center'>
                        <p className='flex flex-row gap-3 items-center'>
                            <PiHospitalDuotone /> Nearest hospital
                        </p>
                        <p className=' '>{auth.donor.nearest_hospital}</p>
                    </div>

                    <div className=' flex flex-row justify-between items-start gap-4'>
                        <p className='flex flex-row gap-3 items-center'>
                            <FaAddressBook /> Address
                        </p>
                        <p className='pt- italic text-right w-80'>
                            {auth.donor.address}
                        </p>
                    </div>


                </div>

                <div className='flex flex-row items-end pr-3'>
                    <div className="grid grid-flow-col gap-2 text-center auto-cols-max font-nunito">
                        <div className="flex flex-col items-center p-2 bg-neutral rounded-box text-neutral-content text-xs">
                            <span className="countdown font-mono text-sm">
                                <span style={{ "--value": 15 }}></span>
                            </span>
                            days
                        </div>
                        <div className="flex flex-col items-center p-2 bg-neutral rounded-box text-neutral-content text-xs">
                            <span className="countdown font-mono text-sm">
                                <span style={{ "--value": 10 }}></span>
                            </span>
                            hours
                        </div>
                        <div className="flex flex-col items-center p-2 bg-neutral rounded-box text-neutral-content text-xs">
                            <span className="countdown font-mono text-sm">
                                <span style={{ "--value": 24 }}></span>
                            </span>
                            min
                        </div>
                        <div className="flex flex-col items-center p-2 bg-neutral rounded-box text-neutral-content text-xs">
                            <span className="countdown font-mono text-sm">
                                {/* <span style={{ "--value:" counter}}></span> */}
                                <span style={{ "--value": counter }}></span>
                            </span>
                            sec
                        </div>
                    </div>
                </div>
            </div>

            {/* image element */}
            {/* image element */}

            {/* <Blood_Request_on_Donor /> */}

        </div>
    )
}

export default D_profile
