import React from 'react'

import { FaPhoneFlip } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLink } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaUserAlt } from "react-icons/fa";
import { FaHouseDamage } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";
import { MdCastForEducation } from "react-icons/md";
import { IoIosLogOut } from "react-icons/io";
import { AiOutlineMessage } from "react-icons/ai";

import Blood_donation_steps_1 from '../../Landing_page_components/Blood_donation_steps_1/Blood_donation_steps_1';
import O_Sidebar from '../O_Sidebar/O_Sidebar';

import { useAuth } from "../../../context/auth";

function O_profile() {

    const [auth] = useAuth();
    console.log("**** ooooooooooooo Auth ****", auth)
    const image = auth.user.profile_photo;

    return (
        <div className='font-nunito mb-5'>


            <div className=''>

                <div class=" bg-cover bg-center h-60 flex flex-col justify-center items-center text-white pt-"
                    style={{ backgroundImage: `url(${image})` }}
                >
                    {/* <p>{auth.user.name}</p>
                    <p>The Edhi Foundation is a non-profit social welfare organization based in Pakistan.</p> */}
                </div>


                <div className='mt-3 flex flex-row justify-center items-center bg-slate-00'>
                    <div className='flex flex-col justify-center items-center bg-blue-00'>
                        <p className='font-bold text-3xl'>{auth.user.name}</p>
                        <p className='flex flex-row justify-center items-center text-gray-600 gap-1 text-center font-nunito text-sm w-80'> {auth.organization.location}</p>

                        <div className='mt-2 text-sm flex flex-row justify-center items-center gap-16 bg-orange-00'>
                            <p className='flex flex-row justify-center items-center gap-1 text-gray-700'> <FaPhoneFlip size={10} />+92 {auth.user.phone}</p>
                            <p className='flex flex-row justify-center items-center gap-1 text-gray-600'><FaLink size={13}/>{auth.organization.website_url}</p>
                            {/* <p className='flex flex-row justify-center items-center gap-1 text-gray-700'><FaUserAlt /> {auth.user.username}</p> */}
                            <p className='flex flex-row justify-center items-center gap-1 text-gray-600'> <MdEmail size={15} /> {auth.user.email}</p>
                        </div>

                    </div>
                </div>
                {/* <div className=' p-2 flex flex-row justify-between items-cente pl-5'>
                    <div className=''>

                        <div className='flex flex-col gap-2'>
                            <p className='font-bold text-2xl'>{auth.user.name}</p>
                            <p className='flex flex-row items-center text-gray-800 gap-1 font-nunito text-sm'> <FaLocationDot size={10} /> {auth.organization.location}</p>

                            <div className='flex flex-row'>
                                <div className='flex flex-row items-center gap-2 border-2 pr-2 text-sm mt-2'>
                                    <span className='bg-[#820000] text-white px-3 py-1 rounded-l-md'>URL</span>
                                    <p className='text-gray-500 font-nunito'>{auth.organization.website_url}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='bg-orange-00 flex flex-col justify-cente items-start gap- pr-52 '>
                        <div className='font-bold'>{auth.user.username}</div>
                        <div className='flex flex-row justify-center items-center gap-8 text-xs text-gray-600'>
                            <p className='flex flex-row justify-center items-center gap-1 text-gray-700'> <FaPhoneFlip size={10} />+92 {auth.user.phone}</p>
                            <p className='flex flex-row items-center gap-1'> <MdEmail size={15} /> {auth.user.email}</p>
                        </div>

                    </div>
                </div> */}


            </div>



        </div>
    )
}

export default O_profile
















// {/* Main Section */}
// <div className='flex flex-row gap-2 mt-3'>
// {/* <div className='bg-gray-400 w-[20%] h-screen sticky top-0'>side bar</div> */}

// <aside className=" w-[20%] h-screen sticky top-0 bg-[#dcdcdc] border-r-2 border-r-gray-400 flex flex-col justify-between">

//     <div>

//         <h2 className="text-xl font-bold mb-4 flex flex-row gap-3 border-b-2 border-gray-300 shadow-md p-6 pb-3">
//             <FaHouseDamage size={20} /> Dashboard
//         </h2>
//         <ul className="space-y-6 p-6">
//             <li className="hover:text-gray-300 cursor-pointer flex flex-row items-center gap-3 text-sm">
//                 <FaSearch size={15} /> Search
//             </li>

//             <li className="hover:text-gray-300 cursor-pointer flex flex-row items-center gap-3 text-sm">
//                 <FaHistory size={15} /> History
//             </li>

//             <li className="hover:text-gray-300 cursor-pointer flex flex-row items-center gap-3 text-sm">
//                 <MdCastForEducation size={15} /> Blogs
//             </li>

//             <li className="hover:text-gray-300 cursor-pointer flex flex-row items-center gap-3 text-sm">
//                 <FaSearch size={15} /> Events
//             </li>

//             <li className="hover:text-gray-300 cursor-pointer flex flex-row items-center gap-3 text-sm">
//                 <AiOutlineMessage size={15} /> Messages
//             </li>

//             <li className="hover:text-gray-300 cursor-pointer text-sm pt-5"

//             >
//                 {/* <div className=' flex flex-row justify-center items-center gap-3 bg-[#934d4d] py-2 rounded-lg'>
//                 <IoIosLogOut size={20} /> Logout
//             </div> */}
//             </li>
//         </ul>

//     </div>

//     <div className='mb-4 mx-4 flex flex-row justify-center items-center gap-3 bg-[#934d4d] py-2 rounded-md'>
//         <IoIosLogOut size={20} /> Logout
//     </div>
//     {/* <div className='flex flex-col items-center pb-8'>
//     <img src="./lifeline.png" alt="" className='w-20' />
//     <p>Blood_Linked_In</p>
// </div> */}
// </aside>





// <div className=' w-[80%] '>
//     <Blood_donation_steps_1 />
// </div>
// </div>
