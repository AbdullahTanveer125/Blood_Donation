import React, { useState } from 'react'
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { MdBloodtype } from "react-icons/md";
import { FaPersonWalkingLuggage } from "react-icons/fa6";
import { FaWeightScale } from "react-icons/fa6";
import { PiHospitalDuotone } from "react-icons/pi";
import { FaAddressBook } from "react-icons/fa6";
function D_profile() {

    const [isChecked, setIsChecked] = useState(false);
    const [counter, setCounter] = useState(59);

    // const counter=59

    const handleToggle = () => {
        setIsChecked((prev) => !prev);
    };




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
                            src="./fatima.png"
                            alt=""
                            className='h-48 border-8 border-white rounded-full'
                        />
                    </div>
                    <div>
                        <div className='h-20'></div>
                        <div>
                            <p className='text-xl font-bold'>User Name</p>
                            <p className='font-nunito  text-sm text-gray-600'>Donor</p>
                            <div className='flex flex-row items-center gap-6'>
                                <p className='flex flex-row items-center gap-2 font-nunito text-xs text-gray-600'> <FaPhone size={10} /> 0309-9014620</p>
                                <p className='flex flex-row items-center gap-2 font-nunito  text-xs text-gray-600'><MdEmail /> abbhai125420@gmail.com</p>
                                <p className='flex flex-row items-center gap-3 font-nunito text-xs text-gray-600'>write some other </p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className=''>
                    <div className='flex flex-col justify-end items-center gap-3 font-nunito text-sm'>

                        <input
                            type="checkbox"
                            className="toggle toggle-info"
                            checked={isChecked}
                            onChange={handleToggle}
                        />
                        <p>Toggle is {isChecked ? "ON (true)" : "OFF (false)"}</p>

                    </div>
                </div>
            </div>



            {/* information section */}
            <div className='h-[320px] bg-gray-00 flex flex-row justify-between pt-10'>
                <div className='w-[20%] flex flex-row justify-center items-center'>
                    <img
                        src="./blood2.png"
                        alt=""
                        className='w-32 h-40 opacity-'
                    />
                </div>

                <div className='bg-slate-00 flex flex-col justify-center space-y-3 border-l-8 border-gray-200 pl-6 w-[500px] font-nunito text-sm'
                >
                    <div className='flex flex-row justify-between items-center'>
                        <p className='flex flex-row gap-3 items-center'>
                            <FaRegUser /> Full Name
                        </p>
                        <p className=' italic'>Abdullah Tanveer</p>
                    </div>

                    <div className='flex flex-row justify-between items-center'>
                        <p className='flex flex-row gap-3 items-center'>
                            <MdBloodtype /> Blood Group
                        </p>
                        <p className=' italic'>A+</p>
                    </div>

                    <div className='flex flex-row justify-between items-center'>
                        <p className='flex flex-row gap-3 items-center'>
                            <FaPersonWalkingLuggage /> Age
                        </p>
                        <p className=' italic '>52</p>
                    </div>

                    <div className='flex flex-row justify-between items-center'>
                        <p className='flex flex-row gap-3 items-center'>
                            <FaWeightScale /> Weight
                        </p>
                        <p className=' italic'>87</p>
                    </div>

                    <div className='flex flex-row justify-between items-center'>
                        <p className='flex flex-row gap-3 items-center'>
                            <PiHospitalDuotone /> Narest hospital
                        </p>
                        <p className=' italic'>Jinnah</p>
                    </div>

                    <div className=''>
                        <p className='flex flex-row gap-3 items-center'>
                            <FaAddressBook /> Address
                        </p>
                        <p className='pl-20 italic'>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, aperiam. Temporibus reiciendis repellat quaerat quos voluptas.
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

        </div>
    )
}

export default D_profile
