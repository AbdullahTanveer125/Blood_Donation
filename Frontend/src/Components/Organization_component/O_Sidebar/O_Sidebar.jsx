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
import { MdAutoDelete } from "react-icons/md";

import { useAuth } from "../../../context/auth"; // Import the useAuth hook
import { useNavigate } from "react-router-dom";

import { useLocation } from 'react-router-dom';

import { toast } from 'react-toastify';
import axios from 'axios';


function O_Sidebar() {

    const [auth, setAuth] = useAuth();
    const organization_id = auth.organization._id
    console.log("DDDDDDDDDDDDDDDDDD====", organization_id)

    const navigate = useNavigate();

    const location = useLocation();
    const currentPath = location.pathname;

    const handleItemClick = (path) => {
        navigate(path);
    };

    const handleLogout = () => {
        setAuth(null); // Clear auth state
        localStorage.removeItem("auth"); // Remove auth from localStorage
        toast.success('Logout Successfuly!');
        navigate("/"); // Redirect to home page
    };

    const handleDelete = async () => {
        try {
            const response = await axios.delete(`http://localhost:5000/organization/delete-organization/${organization_id}`);

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
            toast.error('Error in Delete Account of organization!');
        }
    };



    return (
        <div>

            {/* Sidebar - Fixed on the Left */}
            <aside className=" w-[17%] h-screen bg-[#820000] text-white fixed flex flex-col justify-between font-nunito">

                <div>

                    <h2
                        onClick={() => navigate("/organization")}
                        className="cursor-pointer text-xl font-bold mb-4 flex flex-row gap-3 border-b-2 border-gray-200 p-6 pb-3">
                        <FaHouseDamage size={20} /> URGENT DROP
                    </h2>
                    <ul className="space-y-2">
                        <li
                            onClick={() => handleItemClick("/generate_event")}
                            className={`cursor-pointer flex flex-row items-center gap-3 text-sm px-6 py-2
    ${currentPath === "/generate_event" ? "bg-white text-[#820000]" : "hover:bg-white hover:text-[#820000]"}
`}
                        >
                            <FaSearch size={15} /> Generate Event
                        </li>

                        <li
                            onClick={() => handleItemClick("/organization_all_donors")}
                            className={`cursor-pointer flex flex-row items-center gap-3 text-sm px-6 py-2 
    ${currentPath === "/organization_all_donors" ? "bg-white text-[#820000]" : "hover:bg-white hover:text-[#820000]"}
`}>
                            <FaHistory size={15} /> Donors
                        </li>

                        <li
                            onClick={() => handleItemClick("/organization_blog")}
                            className={`cursor-pointer flex flex-row items-center gap-3 text-sm px-6 py-2 
    ${currentPath === "/organization_blog" ? "bg-white text-[#820000]" : "hover:bg-white hover:text-[#820000]"}
`}>
                            <MdCastForEducation size={15} /> Blogs
                        </li>

                        <li
                            onClick={() => handleItemClick("/organization_your_event")}
                            className={`cursor-pointer flex flex-row items-center gap-3 text-sm px-6 py-2 
    ${currentPath === "/organization_your_event" ? "bg-white text-[#820000]" : "hover:bg-white hover:text-[#820000]"}
`}>
                            <FaSearch size={15} /> Your Event
                        </li>

                        <li
                            onClick={() => handleItemClick("/organization_about_us")}
                            className={`cursor-pointer flex flex-row items-center gap-3 text-sm px-6 py-2 
    ${currentPath === "/organization_about_us" ? "bg-white text-[#820000]" : "hover:bg-white hover:text-[#820000]"}
`}>
                            <FaSearch size={15} /> About Us
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
                    className='mb-4 mx-4 flex flex-row justify-center items-center gap-3 bg-white text-[#820000] hover:bg-slate-300 font-bold py-2 rounded-full cursor-pointer'>
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

export default O_Sidebar
