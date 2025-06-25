import React, { useEffect, useState } from 'react'
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

import { toast } from 'react-toastify';
import { useAuth } from "../../../context/auth";
import axios from 'axios';

function D_profile() {

    const [auth, setAuth] = useAuth();
    const donor_id = auth.donor._id
    console.log("**** ss Auth ****",auth)



    const [isChecked, setIsChecked] = useState(false);
    const [temprory, setTemprory] = useState(false);
    const [change, setChange] = useState(1);
    const [counter, setCounter] = useState(59);
    const [array_length, setArray_length] = useState(false);


    useEffect(() => {
        fetchRequests();
    }, []);

    async function fetchRequests() {
        try {
            const res = await axios.get(`http://localhost:5000/bloodRequest/get-donor-blood-request/${auth.donor._id}`);
            console.log("Check==========", res.data.Blood_Request)
            setArray_length(res.data.Blood_Request.length)
        } catch (error) {
            console.error("Error fetching blood requests:", error);
        } finally {
            setLoading(false)
        }
    }






    console.log("ttttttttttttttttttt", temprory)
    // const handleToggle = () => {
    //     setIsChecked((prev) => !prev);
    // };

    // Initialize toggle with backend value
    useEffect(() => {
        if (auth?.donor?.availability !== undefined) {
            setIsChecked(auth.donor.availability);
            setTemprory(auth.donor.availability)
        }
        console.log("in useEffect of get avalability", auth)
    }, []);

    // Initialize toggle with backend value
    // useEffect(() => {
    //     const new_value = !temprory
    //     // setTemprory(new_value)
    //     // setIsChecked()

    //     console.log("in useEffect of get avalability", auth)
    // }, [change]);

    const handleToggle = async () => {
        const newAvailability = temprory;


        try {
            const res = await axios.post(`http://localhost:5000/donor/availability/${donor_id}`, { availability: newAvailability });
            // console.log("DDDDDDDDDDDDDDDDDDDDDDD", res)

            if (res.data.success) {
                console.log("res.data.donor.availability",res.data.donor.availability)
                toast.success('Update availability!');
                setIsChecked(res.data.donor.availability)
                // setIsChecked(temprory)
                setTemprory(res.data.donor.availability)
setAuth(prev => ({
  ...prev,
  donor: {
    ...prev.donor,
    availability: res.data.donor.availability
  }
}));


                // setChange(change + 1)
                console.log("<<<<< check >>>", res.data.donor.availability)
                console.log("<<<<< check >>>", isChecked)
            } else {
                toast.error('Server Error... Not Update!');
                throw new Error('Failed to update availability');
            }
        } catch (err) {
            console.error(err);
            setIsChecked(!newAvailability); // Revert if error
        }
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
                            src={image || "/default_user.jpg"}
                            alt=""
                            className='h-48 w-48 border-8 border-white rounded-full'
                        />
                        <div className='font-bold text-center text-2xl'>{auth.user.name}</div>
                    </div>
                    <div className=' mt-4'>
                        <div className='h-20'></div>
                        <div className='bg-slate-00'>
                            <div className='flex flex-row justify-center items-center gap-20'>

                                <div className='text-2xl font-bold'>{auth.user.username}</div>
                                <div className='flex flex-row justify-center items-center gap-3'>
                                    <MdBloodtype /> <span className='text-gray-500 text-sm'> {auth.donor.blood_group} </span>
                                </div>
                                <div className='flex flex-row justify-center items-center gap-3'>
                                    <IoIosMan size={15} /> <span className='text-gray-500 text-sm'> {auth.donor.age} years</span>
                                </div>
                                <div className='flex flex-row justify-center items-center gap-3'>
                                    <FaWeightScale size={12} /> <span className='text-gray-500 text-sm'> {auth.donor.weight} kg </span>
                                </div>
                            </div>
                            <p className='text-sm text-gray-500 font-bold'>Donor</p>
                            <div className='mt-3'>
                                <p className='flex flex-row items-center gap-2 font-nunito text-sm text-gray-900'>
                                    <FaPhone size={10} /> <span className='text-gray-500'>+92 {auth.user.phone} </span>
                                </p>
                                <p className='flex flex-row items-center gap-2 font-nunito  text-sm text-gray-900'>
                                    <MdEmail /> <span className='text-gray-500'>{auth.user.email} </span>
                                </p>
                                <p className='flex flex-row items-center gap-2 font-nunito  text-sm text-gray-900'>
                                    <IoLocationSharp /> <span className='text-gray-500'>{auth.donor.address} </span>
                                </p>


                            </div>
                        </div>
                    </div>

                </div>

                <div className=''>
                    {/* <input type="checkbox" defaultChecked className="toggle toggle-success" /> */}
                    <div className='flex flex-col justify-end items-center gap-3 font-nunito text-sm'>
                        Availability
                        {/* <input
                            type="checkbox"
                            className="toggle toggle-success"
                            defaultChecked
                            checked={isChecked}
                            onChange={handleToggle}
                        /> */}
                        <input type="checkbox" defaultChecked className="toggle toggle-success"
                            checked={temprory}
                            onChange={handleToggle}
                        />
                        {/* <input type="checkbox" className="toggle toggle-success" /> */}
                        <p className='text-gray-600'> {temprory}
                            {temprory == true ? 'true' : 'false'}
                        </p>

                    </div>
                    <div className='w-12 h-12'>
                        {array_length > 4 && array_length <= 10 && (
                            <img src="/gold.png" alt="First" />
                        )}
                        {array_length > 10 && array_length <= 15 && (
                            <img src="/black.png" alt="Second" />
                        )}
                        {array_length > 15 && (
                            <img src="/gold.png" alt="Third" />
                        )}
                    </div>

                </div>
            </div>

        </div>
    )
}

export default D_profile
