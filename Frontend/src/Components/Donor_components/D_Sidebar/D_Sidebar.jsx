import React, { useState } from 'react'

import { FaHouseDamage } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";
import { MdCastForEducation } from "react-icons/md";
import { IoIosLogOut } from "react-icons/io";

// import { AiOutlineMessage } from "react-icons/ai";
import { BiCalendarEvent } from "react-icons/bi";
import { RiTeamFill } from "react-icons/ri";
import { BiSolidMessageDots } from "react-icons/bi";
import { MdAutoDelete } from "react-icons/md";

import { useAuth } from "../../../context/auth"; // Import the useAuth hook
import { useNavigate } from "react-router-dom";

import { useLocation } from 'react-router-dom';

import { toast } from 'react-toastify';
import axios from 'axios';

function D_Sidebar() {

    const [auth, setAuth] = useAuth();
    const donor_id = auth.donor._id

    // console.log("bbbbbbbbbbbbbbbbb",donor_id)
    const navigate = useNavigate();
    const location = useLocation();
    const currentPath = location.pathname;

    const handleItemClick = (path) => {
        navigate(path);
    };



    const handleLogout = () => {
        setAuth(null); // Clear auth state
        localStorage.removeItem("auth"); // Remove auth from localStorage
        toast.success('Logout Successfully!');
        navigate("/"); // Redirect to home page
    };

    const handleDelete = async () => {
        try {
            const response = await axios.delete(`http://localhost:5000/donor/delete-donor/${donor_id}`);

            if (response.data.success) {
                // console.log("Deleted successfully:", response.data);

                toast.success('Delete Account Successfully!');
                // Navigate to /abc after successful deletion
                navigate("/")
            }
            ;
        } catch (error) {
            console.error("Error deleting:", error.response?.data || error.message);
            // Optional: Show toast or alert
            toast.error('Error in Delete Account of donor!');
        }
    };


    return (
        <div>

            {/* Sidebar - Fixed on the Left */}
            <aside className=" w-[17%] h-screen bg-[#962626] text-white fixed flex flex-col justify-between font-nunito">

                <div>

                    <h2
                        onClick={() => navigate("/donor")}
                        className="cursor-pointer text-xl font-bold mt-4 mb-4 flex flex-row gap-3 border-b-2 border-b-gray-200 p-6 pb-3  px-6 py-2 hover:bg-gray-100 hover:text-[#820000]">
                        <FaHouseDamage size={20} /> URGENT DROP
                    </h2>
                    <ul className="space-y-2 ">
                        <li
                            onClick={() => handleItemClick("/all_blood_request")}
                            className={`cursor-pointer flex flex-row items-center gap-3 text-sm px-6 py-2 
    ${currentPath === "/all_blood_request" ? "bg-white text-[#820000]" : "hover:bg-white hover:text-[#820000]"}
`}>
                            <FaSearch size={15} /> Blood Request
                        </li>

                        <li
                            onClick={() => handleItemClick("/donor_history")}
                            className={`cursor-pointer flex flex-row items-center gap-3 text-sm px-6 py-2 
    ${currentPath === "/donor_history" ? "bg-white text-[#820000]" : "hover:bg-white hover:text-[#820000]"}`}>
                            <FaHistory size={15} /> History
                        </li>

                        <li
                            onClick={() => handleItemClick("/donor_blog")}
                            className={`cursor-pointer flex flex-row items-center gap-3 text-sm px-6 py-2 
    ${currentPath === "/donor_blog" ? "bg-white text-[#820000]" : "hover:bg-white hover:text-[#820000]"}`}>
                            <MdCastForEducation size={15} /> Blogs
                        </li>

                        <li
                            onClick={() => handleItemClick("/donor_all_event")}
                            className={`cursor-pointer flex flex-row items-center gap-3 text-sm px-6 py-2 
    ${currentPath === "/donor_all_event" ? "bg-white text-[#820000]" : "hover:bg-white hover:text-[#820000]"}`}>
                            <BiCalendarEvent size={15} /> Events
                        </li>

                        <li
                            onClick={() => handleItemClick("/messanger")}
                            className={`cursor-pointer flex flex-row items-center gap-3 text-sm px-6 py-2 
    ${currentPath === "/messanger" ? "bg-white text-[#820000]" : "hover:bg-white hover:text-[#820000]"}`}>
                            <BiSolidMessageDots size={15} /> Messages
                        </li>

                        <li
                            onClick={() => handleItemClick("/donor_about_us")}
                            className={`cursor-pointer flex flex-row items-center gap-3 text-sm px-6 py-2 
    ${currentPath === "/donor_about_us" ? "bg-white text-[#820000]" : "hover:bg-white hover:text-[#820000]"}`}>
                            <RiTeamFill size={15} /> About Us
                        </li>

                        <li
                            onClick={handleDelete}
                            className={`cursor-pointer flex flex-row items-center gap-3 text-sm px-6 py-2 hover:bg-white hover:text-our_red`}>
                            <MdAutoDelete size={17} /> Delete Account
                        </li>


                    </ul>

                </div>

                <div
                    onClick={handleLogout}
                    className='mb-4 mx-4 flex flex-row justify-center items-center gap-3 bg-white text-[#820000] hover:bg-slate-300 font-extrabold py-2 rounded-full cursor-pointer'>
                     Logout
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

