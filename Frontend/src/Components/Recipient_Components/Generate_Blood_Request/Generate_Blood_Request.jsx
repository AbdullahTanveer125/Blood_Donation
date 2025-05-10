import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

import toast from 'react-hot-toast';
import axios from 'axios';

import { FaKey } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { FaCity } from "react-icons/fa6";
import { FaRegAddressBook } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { GiWeight } from "react-icons/gi";
import { FaPerson } from "react-icons/fa6";
import { HiMiniArrowLeftStartOnRectangle } from "react-icons/hi2";


import { useAuth } from "../../../context/auth";



function Generate_Blood_Request() {

    const [auth] = useAuth(); // Access the auth state

    if (!auth || !auth.user) {
        console.error("Auth or user is not available");
        return <div>Please log in to access this page.</div>;
    }

    if (auth.person != "recipient") {
        // console.error("Welcome");
        // return <div>Welcome</div>;
        console.error("You are not recipient! Please login as Recipient to access this page.");
        return <div>You are not recipient! Please login as "Recipient" to access this page.</div>;
    }

    console.log("************AAAAAAAAAAAAAAAAA*********************************")
    console.log(auth)
    // get user from auth
    const { user, recipient } = auth;
    console.log("*************AAAAAAAAAAAA********************************")
    console.log("user from auth", user._id, user.name, recipient.person, recipient._id, user)




    const [patient_name, setPatient_name] = useState("");
    const [blood_group, setBlood_group] = useState("");
    const [location, setLocation] = useState("");
    const [urgency, setUrgency] = useState("");
    const [phone, setPhone] = useState("");
    const [blood_need_date, setBlood_need_date] = useState("");
    const [comment, setComment] = useState("");

    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();

        console.log("Form submitted");


        const DATA = {
            patient_name,
            blood_group,
            location,
            urgency,
            phone,
            blood_need_date,
            comment
        };
        console.log(DATA)


        try {
            const res = await axios.post(`http://localhost:5000/bloodRequest/add-new/${recipient._id}`, DATA);

            console.log("*********************************************");
            console.log("**res", res, "**res.data", res.data, "**res.data.success", res.data.success)
            console.log("*********************************************");

            if (res && res.data.success) {
                toast.success(res.data && res.data.success);//  line:35
                // toast.success(res.data.success && res.data);//  line:36

                // navigate("/all_feedbacks");
            } else {
                toast.error(res.data);
            }
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong in Add_New_Blood_Request.jsx");
        }


    };









    return (
        <div className="min-h-screen font-nunito bg-[url('./bb.png')] bg-cover bg-center">
            {/* Top-left button */}
            <button className="absolute top-6 left-6 bg-our_red text-white border-2 border-our_red py-2 px-4 rounded hover:bg-white hover:text-our_red transition flex flex-row justify-center items-center gap-2">
                <HiMiniArrowLeftStartOnRectangle size={20} className='font-extrabold'/> Go Back
            </button>

            {/* Page Heading */}
            <h2 className="text-4xl font-bold text-white text-center mb-12">Generate Blood Request</h2>

            {/* Two-Column Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-10 rounded-lg ">
                {/* Left child - Empty */}
                <div></div>

                {/* Right child - Form */}
                <form
                    onSubmit={handleSubmit}
                    encType="multipart/form-data"
                    className="bg-white bg-opacity-20 backdrop-blur-md p-6 rounded-lg text-our_red grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                    {/* Patient Name */}
                    <div className="flex flex-col gap-2 col-span-1">
                        <label htmlFor="patient_name" className="text-sm font-semibold">Patient Name</label>
                        <input
                            type="text"
                            value={patient_name}
                            onChange={(e) => setPatient_name(e.target.value)}
                            required
                            id="patient_name"
                            placeholder="Ali ahmad"
                            className="w-full px-4 py-2 rounded bg-transparent border-2 border-our_red placeholder-gray-300 focus:outline-none"
                        />
                    </div>

                    {/* Blood Group */}
                    <div className="flex flex-col gap-2 col-span-1">
                        <label htmlFor="bloodGroup" className="text-sm font-semibold">Blood Group</label>
                        <select
                            className="w-full px-4 py-2 rounded bg-transparent border-2 border-our_red text-our_red placeholder-gray-300 focus:outline-none"
                            value={blood_group}
                            onChange={(e) => setBlood_group(e.target.value)}
                            required
                            placeholder="Blood Group"
                        >
                            <option disabled value=""></option>
                            <option>A+</option>
                            <option>A-</option>
                            <option>B+</option>
                            <option>B-</option>
                            <option>O+</option>
                            <option>O-</option>
                            <option>AB+</option>
                            <option>AB-</option>
                        </select>
                    </div>

                    {/* Location */}
                    <div className="flex flex-col gap-2 col-span-1">
                        <label htmlFor="location" className="text-sm font-semibold">Location</label>
                        <select
                            className="w-full px-4 py-2 rounded bg-transparent border-2 border-our_red text-our_red placeholder-our_red focus:outline-none"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            required
                        >
                            <option disabled value=""></option>
                            <option>Jinnah</option>
                            <option>Service</option>
                            <option>Childern</option>
                            <option>Other</option>
                        </select>
                    </div>

                    {/* Urgency */}
                    <div className="flex flex-col gap-2 col-span-1">
                        <label htmlFor="urgency" className="text-sm font-semibold">Urgency</label>
                        <select
                            className="w-full px-4 py-2 rounded bg-transparent border-2 border-our_red text-our_red placeholder-our_red focus:outline-none"
                            value={urgency}
                            onChange={(e) => setUrgency(e.target.value)}
                            required
                        >
                            <option disabled value=""></option>
                            <option>high</option>
                            <option>low</option>
                        </select>
                    </div>

                    {/* Phone */}
                    <div className="flex flex-col gap-2 col-span-1">
                        <label htmlFor="phone" className="text-sm font-semibold">Phone</label>
                        <input
                            type="text"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                            id="phone"
                            placeholder="03099014620"
                            className="w-full px-4 py-2 rounded bg-transparent border-2 border-our_red placeholder-gray-300 focus:outline-none"
                        />
                    </div>

                    {/* Blood Need Date */}
                    <div className="flex flex-col gap-2 col-span-1">
                        <label htmlFor="blood_need_date" className="text-sm font-semibold">Blood Need Date</label>
                        <input
                            type="date"
                            value={blood_need_date}
                            onChange={(e) => setBlood_need_date(e.target.value)}
                            required
                            id="blood_need_date"
                            className="w-full px-4 py-2 rounded bg-transparent border-2 border-our_red text-our_red placeholder-gray-300 focus:outline-none"
                        />
                    </div>

                    {/* Comment */}
                    <div className="flex flex-col gap-2 col-span-1 md:col-span-2">
                        <label htmlFor="comment" className="text-sm font-semibold">Comment</label>
                        <textarea
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            required
                            id="comment"
                            placeholder="Enter your message here"
                            rows={4}
                            className="w-full px-4 py-2 rounded bg-transparent border-2 border-our_red placeholder-gray-300 focus:outline-none resize-none"
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div className="col-span-1 md:col-span-2">
                        <button
                            type="submit"
                            className="w-full text-white bg-our_red hover:bg-white hover:text-our_red border border-our_red py-2 px-4 rounded font-bold transition"
                        >
                            Create Blood Request
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Generate_Blood_Request;
