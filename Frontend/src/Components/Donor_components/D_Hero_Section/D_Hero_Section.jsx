import React from 'react'
import Donor_Event_Section from '../D_Event_Section/D_Event_Section'
import Events_on_Landing from '../../Landing_page_components/Events_on_Landing/Events_on_Landing'
import Hero2 from '../../Hero2/Hero2'
import All_Blood_Requests from '../../All_Blood_Requests'
import Blood_Request_on_Donor from '../D_Blood_Request/D_Blood_Request'
import Blood_donation_steps_1 from '../../Landing_page_components/Blood_donation_steps_1/Blood_donation_steps_1'
import Blood_donation_steps_2 from '../../Landing_page_components/Blood_donation_steps_2/Blood_donation_steps_2'
import Process_Steps_3 from '../../Landing_page_components/Process_Steps_3/Process_Steps_3'
import Process_Steps from '../D_Process_Steps/D_Process_Steps'
import D_why_donate_blood from '../D_why_donate_blood/D_why_donate_blood'
import D_feedback from '../D_feedback/D_feedback'
import Feedback_Review_2 from '../../Feedback_Review_2/Feedback_Review_2'

import { FaHouseDamage } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";
import { MdCastForEducation } from "react-icons/md";
import { IoIosLogOut } from "react-icons/io";
// import { LuMessageCircleMore } from "react-icons/lu";
// import { LuMessageSquareMore } from "react-icons/lu";  
import { AiOutlineMessage } from "react-icons/ai";

import { useAuth } from "../../../context/auth"; // Import the useAuth hook
import { useNavigate } from "react-router-dom";
import D_profile from '../D_profile/D_profile'



function Donor_Hero_Section() {

    const [auth, setAuth] = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        setAuth(null); // Clear auth state
        localStorage.removeItem("auth"); // Remove auth from localStorage
        navigate("/"); // Redirect to home page
    };


    return (

        <div className="flex h-screen">
            {/* Sidebar - Fixed on the Left */}
            <aside className=" w-[17%] h-screen bg-[#5c1212] text-white fixed flex flex-col justify-between">

                <div>

                    <h2 className="text-xl font-bold mb-4 flex flex-row gap-3 border-b-2 border-gray-200 p-6 pb-3">
                        <FaHouseDamage size={20} /> Dashboard
                    </h2>
                    <ul className="space-y-6 p-6">
                        <li className="hover:text-gray-300 cursor-pointer flex flex-row items-center gap-3 text-sm">
                            <FaSearch size={15} /> Search
                        </li>

                        <li className="hover:text-gray-300 cursor-pointer flex flex-row items-center gap-3 text-sm">
                            <FaHistory size={15} /> History
                        </li>

                        <li className="hover:text-gray-300 cursor-pointer flex flex-row items-center gap-3 text-sm">
                            <MdCastForEducation size={15} /> Blogs
                        </li>

                        <li className="hover:text-gray-300 cursor-pointer flex flex-row items-center gap-3 text-sm">
                            <FaSearch size={15} /> Events
                        </li>

                        <li className="hover:text-gray-300 cursor-pointer flex flex-row items-center gap-3 text-sm">
                            <AiOutlineMessage size={15} /> Messages
                        </li>

                        <li className="hover:text-gray-300 cursor-pointer text-sm pt-5"
                            onClick={handleLogout}
                        >
                            {/* <div className=' flex flex-row justify-center items-center gap-3 bg-[#934d4d] py-2 rounded-lg'>
                                <IoIosLogOut size={20} /> Logout
                            </div> */}
                        </li>
                    </ul>

                </div>

                <div className='mb-4 mx-4 flex flex-row justify-center items-center gap-3 bg-[#934d4d] py-2 rounded-md'>
                    <IoIosLogOut size={20} /> Logout
                </div>
                {/* <div className='flex flex-col items-center pb-8'>
                    <img src="./lifeline.png" alt="" className='w-20' />
                    <p>Blood_Linked_In</p>
                </div> */}
            </aside>

            {/* Main Content - Scrollable */}
            <main className="ml-[17.3%] w-[83%] ">

                <D_profile />
                {/* <Hero2 /> */}
                {/* <Blood_donation_steps_1 /> */}
                {/* <Donor_Event_Section /> */}
                {/* <Blood_Request_on_Donor /> */}
                {/* <Blood_donation_steps_1 />
                <Blood_donation_steps_2 />
                <Process_Steps_3 /> */}
                {/* <Process_Steps /> */}
                {/* <D_why_donate_blood /> */}
                {/* <D_feedback number_of_event_display={1} /> */}
                {/* <Feedback_Review_2 /> */}


            </main>
        </div>

    )
}

export default Donor_Hero_Section
