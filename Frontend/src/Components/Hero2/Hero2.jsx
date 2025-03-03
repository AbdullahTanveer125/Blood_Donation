import React, { useState } from 'react'
// import  from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { MdBloodtype } from "react-icons/md";
import { FaPersonWalkingLuggage } from "react-icons/fa6";
import { FaWeightScale } from "react-icons/fa6";
import { PiHospitalDuotone } from "react-icons/pi";
import { FaAddressBook } from "react-icons/fa6";

function Hero2() {


    const [isChecked, setIsChecked] = useState(false);
    const [counter, setCounter] = useState(59);

    // const counter=59

    const handleToggle = () => {
        setIsChecked((prev) => !prev);
    };


    return (
        <div className='flex flex-row p-2 rounded-lg pb-4 min-h-screen gap-4'>

            <div className='border-gray-500 bg-white border-r-2 w-[25%] p-5 space-y-4 flex flex-col items-center justify-between'>

                <div>

                    <img src="./image.png" alt="" className='"w-20 h-52 rounded-full  ' />
                    <p className='text-xl font-semibold text-center pt-5 '>User Name</p>
                    <p className='bg-[#5c1212] text-white py-1 text-center rounded-lg'> Donor </p>
                </div>

                <button className='bg-[#5c1212] text-white py-1 px-12 text-center rounded-lg'>Chat</button>
                {/* <img src="./design1.png" alt="" className='w-28 opacity-50' /> */}



            </div>

            <div className="w-[55%] p-5 bg-white bg-[url('./h8.png')] bg-cover bg-center">
                <div className='flex flex-row justify-between'>

                    <div className=' space-y-4'>
                        <p className='text-2xl'>User Details</p>
                        {/* <p>Donor</p>
                        <p>Male</p> */}

                        <div>

                            <p className='flex flex-row text-xs gap-3 font-thin italic'> <FaPhoneAlt /> 030929203031</p>
                            <p className='flex flex-row text-xs gap-3 font-thin italic'> <MdEmail /> abbhai125420@gmail.com</p>
                            <p className='text-xs font-thin italic bg-[#5c1212] text-white  inline-block py-1 px-4 rounded-lg'>Male</p>

                        </div>

                    </div>

                    <div>
                        <img src="./gold.png" alt="" className='w-6' />
                    </div>

                </div>

                <div className='mt-32 space-y-3 py-5 px-20 bg-gray-100 shadow-lg shadow-gray-400 rounded-xl'>
                    <div className='flex flex-row justify-between items-center'>
                        <p className='flex flex-row gap-3 items-center'>
                            <FaRegUser /> Full Name
                        </p>
                        <p className=' italic font-sans'>Abdullah Tanveer</p>
                    </div>

                    <div className='flex flex-row justify-between items-center'>
                        <p className='flex flex-row gap-3 items-center'>
                            <MdBloodtype /> Blood Group
                        </p>
                        <p className=' italic font-sans'>A+</p>
                    </div>

                    <div className='flex flex-row justify-between items-center'>
                        <p className='flex flex-row gap-3 items-center'>
                            <FaPersonWalkingLuggage /> Age
                        </p>
                        <p className=' italic font-sans'>52</p>
                    </div>

                    <div className='flex flex-row justify-between items-center'>
                        <p className='flex flex-row gap-3 items-center'>
                            <FaWeightScale /> Weight
                        </p>
                        <p className=' italic font-sans'>87</p>
                    </div>

                    <div className='flex flex-row justify-between items-center'>
                        <p className='flex flex-row gap-3 items-center'>
                            <PiHospitalDuotone /> Narest hospital
                        </p>
                        <p className=' italic font-sans'>Jinnah</p>
                    </div>

                    <div className=''>
                        <p className='flex flex-row gap-3 items-center'>
                            <FaAddressBook /> Address
                        </p>
                        <p className='pl-20 italic font-sans'>Lorem ipsum dolor sit amet consec tetur adipisng elit</p>
                    </div>


                </div>
            </div>

            <div className="flex flex-col justify-between w-[20%] bg-white bg-[url('./b3.png')] bg-cover bg-center pt-5">

                <div className='flex flex-col items-center gap-3'>

                    <input
                        type="checkbox"
                        className="toggle toggle-info"
                        checked={isChecked}
                        onChange={handleToggle}
                    />
                    <p>Toggle is {isChecked ? "ON (true)" : "OFF (false)"}</p>

                </div>

                <div className='p-2 pb-10'>


                    <div className="grid grid-flow-col gap-2 text-center auto-cols-max">
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



        </div >
    )
}

export default Hero2
