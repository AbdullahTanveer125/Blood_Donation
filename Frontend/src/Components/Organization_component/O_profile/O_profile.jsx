import React from 'react'

import { FaPhoneFlip } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

import { FaLocationDot } from "react-icons/fa6";
import { FaHouseDamage } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";
import { MdCastForEducation } from "react-icons/md";
import { IoIosLogOut } from "react-icons/io";
import { AiOutlineMessage } from "react-icons/ai";

import Blood_donation_steps_1 from '../../Landing_page_components/Blood_donation_steps_1/Blood_donation_steps_1';
import O_Sidebar from '../O_Sidebar/O_Sidebar';


function O_profile() {
    return (
        <div className='font-nunito mb-40'>


            <div className=''>

                <div class=" bg-[url('./organization1.png')] bg-cover bg-center h-60 flex flex-col justify-center items-center text-white pt-">
                    <p>Organization Name</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                </div>

                <div className=' p-2 flex flex-row justify-between items-center pl-5'>
                    <div className=''>

                        <div className='flex flex-col gap-2'>
                            <p className='font-bold'>Organization Name</p>
                            <p className='flex flex-row items-center text-gray-800 gap-1 font-nunito text-sm'> <FaLocationDot size={10} /> College Road, Township Block C Phase 1 Johar Town, Lahore, 54770</p>

                            <div className='flex flex-row'>
                                <div className='flex flex-row items-center gap-2 border-2 pr-2 text-sm mt-2'>
                                    <span className='bg-[#820000] text-white px-3 py-1 rounded-l-md'>URL</span>
                                    <p className='text-gray-500 font-nunito'>www.facebook.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className=' flex flex-col justify-center items-center gap-7 pr-6 '>
                        <div className='font-bold'>User Name</div>
                        <div className='flex flex-row justify-center items-center gap-6 text-sm'>
                            <p className='flex flex-row justify-center items-center gap-3 text-gray-700'> <FaPhoneFlip size={15}/> 0309-9014620</p>
                            <p className='flex flex-row items-center gap-3'> <MdEmail size={15} /> abbhai125420@gmail.com</p>
                        </div>

                    </div>
                </div>


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
