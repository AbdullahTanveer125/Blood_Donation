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
                            <p className='font-nunito  text-sm text-gray-600 font-bold'>Donor</p>
                            <div className='flex flex-row items-center gap-6'>
                                <p className='flex flex-row items-center gap-2 font-nunito text-xs text-gray-900'> <FaPhone size={10} /> 0309-9014620</p>
                                <p className='flex flex-row items-center gap-2 font-nunito  text-xs text-gray-900'><MdEmail /> abbhai125420@gmail.com</p>
                                
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
                        <p className=' '>Abdullah Tanveer</p>
                    </div>

                    <div className='flex flex-row justify-between items-center'>
                        <p className='flex flex-row gap-3 items-center'>
                            <MdBloodtype /> Blood Group
                        </p>
                        <p className=' '>A+</p>
                    </div>

                    <div className='flex flex-row justify-between items-center'>
                        <p className='flex flex-row gap-3 items-center'>
                            <FaPersonWalkingLuggage /> Age
                        </p>
                        <p className='  '>52</p>
                    </div>

                    <div className='flex flex-row justify-between items-center'>
                        <p className='flex flex-row gap-3 items-center'>
                            <FaWeightScale /> Weight
                        </p>
                        <p className=' '>87</p>
                    </div>

                    <div className='flex flex-row justify-between items-center'>
                        <p className='flex flex-row gap-3 items-center'>
                            <PiHospitalDuotone /> Nearest hospital
                        </p>
                        <p className=' '>Jinnah</p>
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
