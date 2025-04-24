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

import { useAuth } from "../../../context/auth"; // Import the useAuth hook
import { useNavigate } from "react-router-dom";
import R_Profile from "../R_profile/R_profile";
import R_Steps from "../R_Steps/R_Steps";
import Blood_Requests_of_recipient from "../Its_all_Blood_Request/Its_all_Blood_Request";
import Event_Section from "../../Event_Section/Event_Section";
import Blog_Slider from "../../Blog_Slider/Blog_Slider";
import R_Sidebar from "../R_Sidebar/R_Sidebar";






function Recipient_Hero_Section() {

    const [auth, setAuth] = useAuth();
    // console.log("**** Auth *****", auth.recipient._id)


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

    const navigate = useNavigate();

    const handleLogout = () => {
        setAuth(null); // Clear auth state
        localStorage.removeItem("auth"); // Remove auth from localStorage
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




    return (

        <div className="flex h-screen">
            
            <R_Sidebar />

            {/* Main Content - Scrollable */}
            <main className="ml-[17.3%] w-[83%] ">

                {/* <D_profile /> */}




                



                <R_Profile />
                <R_Steps />
                <Blood_Requests_of_recipient />
                
                <Event_Section />
                <Blog_Slider />
                <R_Steps />

                
            </main>
        </div>

    )
}

export default Recipient_Hero_Section





