import React from 'react'


import { FaHouseDamage } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";
import { MdCastForEducation } from "react-icons/md";
import { IoIosLogOut } from "react-icons/io";
// import { LuMessageCircleMore } from "react-icons/lu";
// import { LuMessageSquareMore } from "react-icons/lu";  
import { AiOutlineMessage } from "react-icons/ai";
import { BiCalendarEvent } from "react-icons/bi";
import { RiTeamFill } from "react-icons/ri";
import { BiSolidMessageDots } from "react-icons/bi";

import { useAuth } from "../../../context/auth"; // Import the useAuth hook
import { useNavigate } from "react-router-dom";

function D_Sidebar() {

    const [auth, setAuth] = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        setAuth(null); // Clear auth state
        localStorage.removeItem("auth"); // Remove auth from localStorage
        navigate("/"); // Redirect to home page
    };


    return (
        <div>

            {/* Sidebar - Fixed on the Left */}
            <aside className=" w-[17%] h-screen bg-[#820000] text-white fixed flex flex-col justify-between font-nunito">

                <div>

                    <h2
                        onClick={() => navigate("/donor")}
                        className="cursor-pointer text-xl font-bold mb-4 flex flex-row gap-3 border-b-2 border-b-gray-200 p-6 pb-3  px-6 py-2 hover:bg-gray-100 hover:text-[#820000]">
                        <FaHouseDamage size={20} /> Dashboard
                    </h2>
                    <ul className="space-y-2 ">
                        <li
                            onClick={() => navigate("/all_blood_request")}
                            className="cursor-pointer flex flex-row items-center gap-3 text-sm px-6 py-2 hover:bg-white hover:text-[#820000]">
                            <FaSearch size={15} /> Blood Request
                        </li>

                        <li
                            onClick={() => navigate("/donor_history")}
                            className=" cursor-pointer flex flex-row items-center gap-3 text-sm  px-6 py-2 hover:bg-white hover:text-[#820000]">
                            <FaHistory size={15} /> History
                        </li>

                        <li
                            onClick={() => navigate("/donor_blog")}
                            className="cursor-pointer flex flex-row items-center gap-3 text-sm px-6 py-2 hover:bg-white hover:text-[#820000]">
                            <MdCastForEducation size={15} /> Blogs
                        </li>

                        <li
                            onClick={() => navigate("/donor_all_event")}
                            className=" cursor-pointer flex flex-row items-center gap-3 text-sm  px-6 py-2 hover:bg-white hover:text-[#820000]">
                            <BiCalendarEvent size={15} /> Events
                        </li>

                        <li
                            onClick={() => navigate("/messanger")}
                            className=" cursor-pointer flex flex-row items-center gap-3 text-sm  px-6 py-2 hover:bg-white hover:text-[#820000]">
                            <BiSolidMessageDots  size={15} /> Messages
                        </li>

                        <li
                            onClick={() => navigate("/donor_about_us")}
                            className=" cursor-pointer flex flex-row items-center gap-3 text-sm  px-6 py-2 hover:bg-white hover:text-[#820000]">
                            <RiTeamFill size={15} /> About Us
                        </li>


                    </ul>

                </div>

                <div
                    onClick={handleLogout}
                    className='mb-4 mx-4 flex flex-row justify-center items-center gap-3 bg-white text-[#820000] hover:bg-slate-300 font-bold py-2 rounded-md cursor-pointer'>
                    <IoIosLogOut size={20} /> Logout
                </div>
                {/* <div className='flex flex-col items-center pb-8'>
                            <img src="./lifeline.png" alt="" className='w-20' />
                            <p>Blood_Linked_In</p>
                        </div> */}
            </aside>

        </div>
    )
}

export default D_Sidebar

