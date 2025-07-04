import React, { useState, useEffect } from "react";
import axios from "axios";

import { FaHouseDamage } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";
import { MdCastForEducation } from "react-icons/md";
import { IoIosLogOut } from "react-icons/io";
// import { LuMessageCircleMore } from "react-icons/lu";
// import { LuMessageSquareMore } from "react-icons/lu";  
import { AiOutlineMessage } from "react-icons/ai";
import { MdAutoDelete } from "react-icons/md";

import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/auth";

import { useLocation } from 'react-router-dom';

import { toast } from 'react-toastify';

function R_Sidebar() {

    const navigate = useNavigate();
    const [auth, setAuth] = useAuth();
    // console.log("**** Auth *****", auth.recipient._id)
    const recipient_id=auth.recipient._id
    console.log("DDDDDDDDDDDDDDDDDD====",recipient_id)


    const [donor_username, setDonor_username] = useState("");
    const [current_notification_id, setCurrent_notification_id] = useState("");
    const [variable_change_to_get_notifications, setVariable_change_to_get_notifications] = useState(1);


    const [notifications, setNotifications] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility

    const [showFeedbackForm, setShowFeedbackForm] = useState(false);
    const [feedbackData, setFeedbackData] = useState({
        username: "",
        description: ''
    });


    const [blood_request_id, setBlood_request_id] = useState("");



    const location = useLocation();
    const currentPath = location.pathname;

    const handleItemClick = (path) => {
        navigate(path);
    };


    useEffect(() => {
        // Define the async function inside useEffect
        const fetchNotifications = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/notification/get/${auth.recipient._id}`);
                setNotifications(res.data.notifications); // Store the notifications in state
            } catch (error) {
                console.error("Failed to fetch notifications:", error);
            }
        };

        // Call the fetch function
        if (auth.recipient._id) {
            fetchNotifications();
        }
    }, [auth.recipient._id, variable_change_to_get_notifications]); // Dependency array (rerun when recipient_id changes)

    console.log("***** All Notifications *****", notifications)


    const handleLogout = () => {
        setAuth(null); // Clear auth state
        localStorage.removeItem("auth"); // Remove auth from localStorage
        toast.success('Logout Successfuly!');
        navigate("/"); // Redirect to home page
    };

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen); // Toggle the modal visibility
    };


    const handleYes = (notification) => {
        console.log("Yes clicked for:", notification);
        // Add your logic here

        setIsModalOpen(!isModalOpen);
        setFeedbackData({ ...feedbackData, });

        setFeedbackData({
            ...feedbackData,
            username: notification.donor_username,
        });

        setBlood_request_id(notification.blood_request_id);
        setCurrent_notification_id(notification._id);

        setDonor_username(notification.donor_username)
        setShowFeedbackForm(true); // this shows the form

    };

    console.log("*******8 Notification id *******", current_notification_id)

    const handleNo = async (notification) => {
        console.log("No clicked for:", notification);
        setCurrent_notification_id(notification._id);
        // console.log("current_notification_id:", current_notification_id);
        // Add your logic here

        // other_function_of_No(notification._id);
        try {
            const res_2 = await axios.delete(
                `http://localhost:5000/notification/delete/${notification._id}`
            );

            if (res_2.data.success) {

                setVariable_change_to_get_notifications(variable_change_to_get_notifications + 1);
                alert("notification deleted successfully.");

            } else {
                console.log("*********");
                console.log("Error message:", res_2.data.message);
                console.log("*********");
                alert(" issue in delete notification in No handle function.");
            }
        } catch (error) {
            console.error("Error in delete notification in No handle function:", error);
            alert("An error occurred while delete notification in No handle function.");
        }
    };


    const handleChange = (e) => {
        setFeedbackData({ ...feedbackData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // feedbackData.donor_id=
        // feedbackData.recipient_id=auth.recipient._id;

        console.log("Feedback Data:", feedbackData);
        console.log("blood_Request_id:", blood_request_id);

        try {
            const res = await axios.post(
                `http://localhost:5000/feedback/add/${auth.recipient._id}/${blood_request_id}`,
                feedbackData
            );


            console.log("res", res)
            if (res.data.success) {

                try {
                    const res_2 = await axios.delete(
                        `http://localhost:5000/notification/delete/${current_notification_id}`
                    );

                    if (res_2.data.success) {

                        setVariable_change_to_get_notifications(variable_change_to_get_notifications + 1)
                        alert("Feedback added and notification deleted successfully.");
                    } else {
                        console.log("*********");
                        console.log("Error message:", res_2.data.message);
                        console.log("*********");
                        alert("Add feedback but issue in delete notification.");
                    }
                } catch (error) {
                    console.error("Error in delete notification:", error);
                    alert("An error occurred while delete notification.");
                }
            } else {
                console.log("*********")
                console.log(res.data.message)
                console.log("*********")
                alert("Failed to add feedback.");
            }
        } catch (error) {
            console.error("Error in add feedback:", error);
            alert("An error occurred while add feedback.");
        }

        // Reset and close
        setShowFeedbackForm(false);
        // setFeedbackData({ id: '', username: '', description: '' });
    };

    const handleDelete = async () => {
        try {
            const response = await axios.delete(`http://localhost:5000/recipient/delete-recipient/${recipient_id}`);

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
            toast.error('Error in Delete Account of recipient!');
        }
    };








    return (
        <div>

            {/* Sidebar - Fixed on the Left */}
            <aside className=" w-[17%] h-screen bg-[#820000] text-white fixed flex flex-col justify-between font-nunito">

                <div>

                    <h2
                        onClick={() => navigate("/recipient")}
                        className="cursor-pointer text-xl font-bold mb-4 flex flex-row gap-3 border-b-2 border-b-gray-200 p-6 pb-3  hover:bg-gray-100 hover:text-[#820000]">
                        <FaHouseDamage size={20} /> URGENT DROP
                    </h2>
                    <ul className="space-y-2">


                        <li
                            onClick={() => handleItemClick("/generate_blood_request")}
                            className={`cursor-pointer flex flex-row items-center gap-3 text-sm px-6 py-2 
    ${currentPath === "/generate_blood_request" ? "bg-white text-[#820000]" : "hover:bg-white hover:text-[#820000]"}
`}>
                            <FaHistory size={15} /> Generate Request
                        </li>

                        <li
                            onClick={() => handleItemClick("/all_donors")}
                            className={`cursor-pointer flex flex-row items-center gap-3 text-sm px-6 py-2 
    ${currentPath === "/all_donors" ? "bg-white text-[#820000]" : "hover:bg-white hover:text-[#820000]"}
`}>
                            <FaSearch size={15} /> Donors
                        </li>


                        <li
                            onClick={() => handleItemClick("/recipient_blog")}
                            className={`cursor-pointer flex flex-row items-center gap-3 text-sm px-6 py-2 
    ${currentPath === "/recipient_blog" ? "bg-white text-[#820000]" : "hover:bg-white hover:text-[#820000]"}
`}>
                            <MdCastForEducation size={15} /> Blogs
                        </li>

                        <li
                            onClick={() => handleItemClick("/recipient_all_event")}
                            className={`cursor-pointer flex flex-row items-center gap-3 text-sm px-6 py-2 
    ${currentPath === "/recipient_all_event" ? "bg-white text-[#820000]" : "hover:bg-white hover:text-[#820000]"}
`}>
                            <FaSearch size={15} /> Events
                        </li>

                        <li
                            onClick={() => handleItemClick("/messanger")}
                            className={`cursor-pointer flex flex-row items-center gap-3 text-sm px-6 py-2 
    ${currentPath === "/messanger" ? "bg-white text-[#820000]" : "hover:bg-white hover:text-[#820000]"}
`}>
                            <AiOutlineMessage size={15} /> Messages
                        </li>

                        <li
                            onClick={() => handleItemClick("/recipient_about_us")}
                            className={`cursor-pointer flex flex-row items-center gap-3 text-sm px-6 py-2 
    ${currentPath === "/recipient_about_us" ? "bg-white text-[#820000]" : "hover:bg-white hover:text-[#820000]"}
`}>
                            <AiOutlineMessage size={15} /> About Us
                        </li>

                        <li className="cursor-pointer flex flex-row items-center gap-3 text-sm px-6 py-2 hover:bg-white hover:text-[#820000]"
                            onClick={toggleModal}
                        >
                            <AiOutlineMessage size={15} />
                            <div className="flex flex-row justify-between w-full">
                                Notification
                                <span className="px-1 rounded-full bg-white text-our_red font-extrabold"
                                >{notifications.length}</span>
                            </div>
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











            {/* Modal for Notifications */}
            {isModalOpen && (
                <div className="z-10 fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white rounded-lg p-6 w-[50%] h-[70%] overflow-y-auto">
                        <h3 className="text-xl font-semibold mb-4 text-center text-[#820000]">
                            Notifications
                        </h3>
                        {notifications.length > 0 ? (
                            <ul>
                                {notifications.map((notification, index) => (
                                    <li
                                        key={index}
                                        className="py-4 border-gray-500 border-b-2"
                                    >
                                        <div>{notification.donor_username}</div>
                                        <p className="text-gray-400">{notification.message}</p>
                                        <div className="text-gray-400 text-[9px]">
                                            {new Date(notification.createdAt).toLocaleString()}
                                        </div>

                                        {/* Yes/No buttons */}
                                        <div className="mt-2 flex gap-4">
                                            <button
                                                onClick={() => handleYes(notification)}
                                                className="px-4 py-1 bg-green-500 text-white rounded"
                                            >
                                                Yes
                                            </button>
                                            <button
                                                onClick={() => handleNo(notification)}
                                                className="px-4 py-1 bg-red-500 text-white rounded"
                                            >
                                                No
                                            </button>
                                        </div>

                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p>No notifications available.</p>
                        )}
                        <button
                            onClick={toggleModal} // Close the modal
                            className="mt-4 px-4 py-2 bg-[#820000] text-white rounded-md w-full"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}



            {showFeedbackForm && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg w-96">
                        <h2 className="text-xl font-bold mb-4">Give Feedback to "{donor_username}"</h2>

                        {/* <div className="mb-3">{donor_username}</div> */}
                        <label className="block mb-2 text-gray-500">Feedback:</label>
                        <textarea
                            name="description"
                            value={feedbackData.description}
                            onChange={handleChange}
                            className="w-full border border-gray-300 p-2 rounded mb-4"
                            required
                        />

                        <div className="flex justify-end gap-4">
                            <button
                                type="button"
                                onClick={() => setShowFeedbackForm(false)}
                                className="bg-gray-400 text-white px-4 py-2 rounded"
                            >
                                Cancel
                            </button>
                            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            )}



        </div>
    )
}

export default R_Sidebar
