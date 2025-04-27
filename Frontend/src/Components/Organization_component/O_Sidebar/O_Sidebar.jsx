import React from 'react'


import { FaHouseDamage } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";
import { MdCastForEducation } from "react-icons/md";
import { IoIosLogOut } from "react-icons/io";
// import { LuMessageCircleMore } from "react-icons/lu";
// import { LuMessageSquareMore } from "react-icons/lu";  
import { AiOutlineMessage } from "react-icons/ai";
import { LuLogOut } from "react-icons/lu";

import { useAuth } from "../../../context/auth"; // Import the useAuth hook
import { useNavigate } from "react-router-dom";




function O_Sidebar() {

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
                        onClick={() => navigate("/organization")}
                        className="cursor-pointer text-xl font-bold mb-4 flex flex-row gap-3 border-b-2 border-gray-200 p-6 pb-3">
                        <FaHouseDamage size={20} /> Dashboard
                    </h2>
                    <ul className="space-y-6 p-6">
                        <li
                            onClick={() => navigate("/generate_event")}
                            className="hover:text-gray-300 cursor-pointer flex flex-row items-center gap-3 text-sm">
                            <FaSearch size={15} /> Generate Event
                        </li>

                        <li
                            onClick={() => navigate("/organization_all_donors")} className="hover:text-gray-300 cursor-pointer flex flex-row items-center gap-3 text-sm">
                            <FaHistory size={15} /> Donors
                        </li>

                        <li
                            onClick={() => navigate("/organization_blog ")}
                            className="hover:text-gray-300 cursor-pointer flex flex-row items-center gap-3 text-sm">
                            <MdCastForEducation size={15} /> Blogs
                        </li>

                        <li
                            onClick={() => navigate("/organization_your_event")}
                            className="hover:text-gray-300 cursor-pointer flex flex-row items-center gap-3 text-sm">
                            <FaSearch size={15} /> Your Event
                        </li>

                        <li
                            onClick={() => navigate("/organization_about_us")}
                            className="hover:text-gray-300 cursor-pointer flex flex-row items-center gap-3 text-sm">
                            <FaSearch size={15} /> About Us
                        </li>

                        
                    </ul>

                </div>

                <div
                    onClick={handleLogout}
                    className='mb-4 mx-4 flex flex-row justify-center items-center gap-3 bg-white text-[#820000] hover:bg-slate-300 font-bold py-2 rounded-md cursor-pointer'>
                    <LuLogOut size={20} /> Logout
                </div>
                {/* <div className='flex flex-col items-center pb-8'>
                                    <img src="./lifeline.png" alt="" className='w-20' />
                                    <p>Blood_Linked_In</p>
                                </div> */}
            </aside>


        </div>
    )
}

export default O_Sidebar
