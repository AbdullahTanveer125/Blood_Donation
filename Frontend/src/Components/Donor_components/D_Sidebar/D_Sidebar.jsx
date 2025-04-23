import React from 'react'


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
                        className="cursor-pointer text-xl font-bold mb-4 flex flex-row gap-3 border-b-2 border-gray-200 p-6 pb-3">
                        <FaHouseDamage size={20} /> Dashboard
                    </h2>
                    <ul className="space-y-6 p-6">
                        <li
                            onClick={() => navigate("/all_blood_request")}
                            className="hover:text-gray-300 cursor-pointer flex flex-row items-center gap-3 text-sm">
                            <FaSearch size={15} /> Blood Request
                        </li>

                        <li className="hover:text-gray-300 cursor-pointer flex flex-row items-center gap-3 text-sm">
                            <FaHistory size={15} /> History
                        </li>

                        <li
                            onClick={() => navigate("/all_blogs")}
                            className="hover:text-gray-300 cursor-pointer flex flex-row items-center gap-3 text-sm">
                            <MdCastForEducation size={15} /> Blogs
                        </li>

                        <li
                            onClick={() => navigate("/all_event")}
                            className="hover:text-gray-300 cursor-pointer flex flex-row items-center gap-3 text-sm">
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

        </div>
    )
}

export default D_Sidebar

