// jb hm form k zrye sy image ko send krty hai backend mey to hm image ki form shahid "object" hoti hai lykin mein image ko backend mey "express_formidable()" ko use kr k or schema mey  following form mey mongoDB mey store krwa raha hu

//     organization_photo: {
//         data: Buffer,
//         contentType: String,
//     },

// lykin jb is file mey image ko axios.get k zrye sy hasil kiya hai to is ki form "buffer" hi mtlab k jis form mey mongoDB mey store hai lykin jb isi image ko formData k zrye sy backend mey send kro to image send mtlb backend mey req.files mey receive ni hoti. is k liye hm pehly get wali image ko "object" (file) ki form mey convert kry gy or is ka tarika given hai "handleSubmit" waly function mey

import "./Generate_Event.css"
import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";

import { toast } from 'react-toastify';
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



function Generate_Event() {

    const [auth] = useAuth(); // Access the auth state
    console.log("==== Auth ====", auth.organization._id)
    const organization_id = auth.organization._id

    const { user, organization } = auth;

    const [loading, setLoading] = useState(false);
    const [length, setLenght] = useState(0);

    const [events, setEvents] = useState([]);

    const navigate = useNavigate();



    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [phone, setPhone] = useState("");
    const [time, setTime] = useState("");
    const [date, setDate] = useState("");
    const [description, setDescription] = useState("");



    if (loading) {
        return <div className="min-h-screen flex justify-center items-center">Loading...</div>;
    }


    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/event/get-specific-event/${organization._id}`); // Adjust base URL if needed
                setLenght(res.data.length_of_events)
                // setEvents(res.data.All_Events);
                // console.log(res)
            } catch (err) {
                console.error('Error fetching events:', err);
            }
        };

        fetchEvents();
    }, []);


    async function handleSubmit(e) {
        e.preventDefault();

        console.log("Form submitted");

        const organization_name = user.name;

        const formData = new FormData();

        const eventDateTime = new Date(`${date}T${time}`);
        formData.append("eventDateTime", eventDateTime.toISOString());

        formData.append("organization_name", organization_name);
        formData.append("name", name);
        formData.append("location", location);
        formData.append("phone", phone);
        formData.append("time", time);
        formData.append("date", date);
        formData.append("description", description);

        // When using FormData and logging it directly to the console, you might not see its content displayed clearly because FormData is a special type of object. Instead, you can iterate over its entries and log them to see the actual key-value pairs. Let's update your handleSubmit function to log the contents of the FormData properly.

        // Log the FormData contents
        for (let [key, value] of formData.entries()) {
            console.log(`${key}: ${value}`);
        }


        // console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
        // console.log(">>>>>>>>>>>>>>>>>> formData >>>>>>>>>>>>>>>>>>>>>")
        // console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
        console.log(formData)//here



        // const DATA = {
        //     organization_name: user.name,
        //     event_name,
        //     location,
        //     phone,
        //     time,
        //     date,
        //     description
        // };
        // console.log(DATA)


        try {
            // console.log("********** organization._id *******************")
            // console.log(organization._id)
            // console.log("********** organization._id *******************")
            const res = await axios.post(`http://localhost:5000/event/add-new/${organization._id}`, formData);

            console.log("*********************************************");
            console.log("**res", res, "**res.data", res.data, "**res.data.success", res.data.success)
            console.log("*********************************************");

            if (res && res.data.success) {
                toast.success('Generate Event Successfuly!');

                navigate("/organization");
            } else {
                toast.error(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong in Add_New_Event.jsx");
        }


    };






    console.log("====== LLLLLLL=========", length)




    return (
        <>
            {length >= 1 ? (
                <div className="bg-slate-300 flex flex-row items-center justify-center min-h-[100vh]">
                    {/* <div className="flex items-center justify-center min-h-[40vh]">
                        <div className="bg-gradient-to-r from-[#820000] to-[#c92a2a] text-white px-10 py-6 rounded-2xl shadow-2xl text-3xl font-extrabold animate-pulse animate-float">
                            You already generated an event!
                        </div>
                    </div> */}

                    <div className="flex items-center justify-center min-h-[40vh]">
                        <div className="bg-gray-400 bg-gradient-to-r from-our_red to-[#c92a2a] backdrop-blur-md text-gray-200 px-14 py-10 rounded-2xl shadow-2xl text-4xl font-bold animate-float">
                            🚀 You already generated an event!
                        </div>
                    </div>

                    {/* <div className="flex items-center justify-center min-h-[40vh] animate-slideIn">
                        <div className="bg-gradient-to-r from-our_red to-[#ff4d4d] text-white px-10 py-8 rounded-3xl shadow-2xl text-4xl font-extrabold tracking-wide animate-pulse">
                            You already generated an event!
                        </div>
                    </div> */}
                    <button
                        onClick={() => navigate("/organization")}
                        className="absolute top-6 left-6 bg-our_red text-white border-2 border-our_red py-2 px-4 rounded hover:bg-white hover:text-our_red transition flex flex-row justify-center items-center gap-2">
                        <HiMiniArrowLeftStartOnRectangle size={20} className='font-extrabold' /> Go Back
                    </button>
                </div>

            ) : (


                <div className="min-h-screen font-nunito bg-[url('./bb.png')] bg-cover bg-center">
                    {/* Top-left button */}
                    <button
                        onClick={() => navigate("/organization")}
                        className="absolute top-6 left-6 bg-our_red text-white border-2 border-our_red py-2 px-4 rounded hover:bg-white hover:text-our_red transition flex flex-row justify-center items-center gap-2">
                        <HiMiniArrowLeftStartOnRectangle size={20} className='font-extrabold' /> Go Back
                    </button>

                    {/* Page Heading */}
                    <h2 className="text-4xl font-bold text-white text-center mb-12">Generate Blood Request</h2>

                    {/* Two-Column Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-10 rounded-lg">
                        {/* Left side can be image or empty */}
                        <div></div>

                        {/* Right side - Styled Form */}
                        <form
                            onSubmit={handleSubmit}
                            encType="multipart/form-data"
                            className="bg-white bg-opacity-20 backdrop-blur-md p-6 rounded-lg text-our_red grid grid-cols-1 md:grid-cols-2 gap-4"
                        >
                            {/* Event Name */}
                            <div className="flex flex-col gap-2 col-span-1">
                                <label htmlFor="name" className="text-sm font-semibold">Event Name</label>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                    id="name"
                                    placeholder="Donate Blood"
                                    className="w-full px-4 py-2 rounded bg-transparent border-2 border-our_red placeholder-gray-300 focus:outline-none"
                                />
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
                                    className="w-full px-4 py-2 rounded bg-transparent border-2 border-our_red placeholder-gray-300  focus:outline-none"
                                />
                            </div>

                            {/* Time */}
                            {/* <div className="flex flex-col gap-2 col-span-1">
                                        <label htmlFor="time" className="text-sm font-semibold">Time</label>
                                        <input
                                            type="text"
                                            value={time}
                                            onChange={(e) => setTime(e.target.value)}
                                            required
                                            id="time"
                                            placeholder="2pm"
                                            className="w-full px-4 py-2 rounded bg-transparent border-2 border-our_red placeholder-gray-300  focus:outline-none"
                                        />
                                    </div> */}


                            {/* Time */}
                            <div className="flex flex-col gap-2 col-span-1">
                                <label htmlFor="time" className="text-sm font-semibold">Time</label>
                                <input
                                    type="time"
                                    value={time}
                                    onChange={(e) => setTime(e.target.value)}
                                    required
                                    id="time"
                                    placeholder="2pm"
                                    className="w-full px-4 py-2 rounded bg-transparent border-2 border-our_red placeholder-gray-300  focus:outline-none"
                                />
                            </div>


                            {/* Location */}
                            <div className="flex flex-col gap-2 col-span-1">
                                <label htmlFor="location" className="text-sm font-semibold">Location</label>
                                <input
                                    type="text"
                                    value={location}
                                    onChange={(e) => setLocation(e.target.value)}
                                    required
                                    id="location"
                                    placeholder="Edhi Center"
                                    className="w-full px-4 py-2 rounded bg-transparent border-2 border-our_red placeholder-gray-300  focus:outline-none"
                                />
                            </div>

                            {/* Date */}
                            <div className="flex flex-col gap-2 col-span-1">
                                <label htmlFor="date" className="text-sm font-semibold">Date</label>
                                <input
                                    type="date"
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                    required
                                    id="date"
                                    className="w-full px-4 py-2 rounded bg-transparent border-2 border-our_red text-our_red placeholder-our_red focus:outline-none"
                                />
                            </div>

                            {/* Description */}
                            <div className="flex flex-col gap-2 col-span-1 md:col-span-2">
                                <label htmlFor="description" className="text-sm font-semibold">Description</label>
                                <textarea
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    required
                                    id="description"
                                    placeholder="Describe your event"
                                    rows={4}
                                    className="w-full px-4 py-2 rounded bg-transparent border-2 border-our_red placeholder-gray-300  focus:outline-none resize-none"
                                ></textarea>
                            </div>



                            {/* Submit Button */}
                            <div className="col-span-1 md:col-span-2">
                                <button
                                    type="submit"
                                    className="w-full text-white bg-our_red hover:bg-white hover:text-our_red border border-our_red py-2 px-4 rounded font-bold transition"
                                >
                                    Create Event
                                </button>
                            </div>
                        </form>
                    </div>

                </div>

            )}
        </>
    );

}

export default Generate_Event
