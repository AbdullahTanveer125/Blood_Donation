// jb hm form k zrye sy image ko send krty hai backend mey to hm image ki form shahid "object" hoti hai lykin mein image ko backend mey "express_formidable()" ko use kr k or schema mey  following form mey mongoDB mey store krwa raha hu

//     organization_photo: {
//         data: Buffer,
//         contentType: String,
//     },

// lykin jb is file mey image ko axios.get k zrye sy hasil kiya hai to is ki form "buffer" hi mtlab k jis form mey mongoDB mey store hai lykin jb isi image ko formData k zrye sy backend mey send kro to image send mtlb backend mey req.files mey receive ni hoti. is k liye hm pehly get wali image ko "object" (file) ki form mey convert kry gy or is ka tarika given hai "handleSubmit" waly function mey

import React, { useEffect, useState } from 'react'
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



function Generate_Event() {

    const [auth] = useAuth(); // Access the auth state
    console.log("==== Auth ====", auth.organization._id)
    const organization_id = auth.organization._id

    const [event, setEvent] = useState(null);
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchEvent = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:5000/event/get-specific-event/${organization_id}`
                );

                // if(response.data.success){
                //     if(response.data.)
                // }
                setEvent(response.data.modifiedEvents);
                console.log("== Event ==", response.data.modifiedEvents)
            } catch (error) {
                console.error("Error fetching event:", error);
            } finally {
                setLoading(false); // ✅ Important
            }
        };

        fetchEvent();
    }, [organization_id]);


    // useEffect(() => {
    //     const check_event = () => {
    //         console.log("********************************")
    //         console.log("********************************")

    //         console.log("Event lenght=",event.length)
    //         console.log("********************************")
    //         console.log("********************************")
    //         if (event && event.length === 1) {
    //             return (
    //                 <div className="min-h-screen flex flex-col justify-center items-center bg-[url('./bb.png')] bg-cover bg-center font-nunito">
    //                     <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-md text-center">
    //                         <h2 className="text-2xl font-bold text-[#820000] mb-4">You already generated the event.</h2>
    //                         <p className="mb-6 text-gray-700">Only one event is allowed per organization.</p>
    //                         <button
    //                             onClick={() => navigate("/organization")}
    //                             className="bg-[#820000] text-white px-6 py-2 rounded hover:bg-white hover:text-[#820000] border-2 border-[#820000] transition"
    //                         >
    //                             Return to Dashboard
    //                         </button>
    //                     </div>
    //                 </div>
    //             );
    //         }
    //     };

    //     check_event();
    // }, [organization_id]);

    if (loading) {
        return <div className="min-h-screen flex justify-center items-center">Loading...</div>;
    }

    if (event && event.length >= 1) {
        return (
            <div className="relative min-h-screen font-nunito">
                {/* Blurred background */}
                <div className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-0" />

                {/* Message box */}
                <div className="absolute inset-0 z-10 flex justify-center items-center">
                    <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-xl max-w-lg w-full text-center">
                        <h2 className="text-2xl font-bold text-[#820000] mb-4">You already generated the event.</h2>
                        <p className="mb-6 text-gray-700">Only one event is allowed per organization.</p>
                        <button
                            onClick={() => navigate("/organization")}
                            className="bg-[#820000] text-white px-6 py-2 rounded hover:bg-white hover:text-[#820000] border-2 border-[#820000] transition"
                        >
                            Return to Dashboard
                        </button>
                    </div>
                </div>
            </div>
        );
    }







    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [phone, setPhone] = useState("");
    const [time, setTime] = useState("");
    const [date, setDate] = useState("");
    const [description, setDescription] = useState("");
    const [organization_photo, setOrganization_photo] = useState(null);




    if (!auth || !auth.user) {
        console.error("Auth or user is not available");
        return <div>Please log in to access this page.</div>;
    }

    if (auth.person != "organization") {
        // console.error("Welcome");
        // return <div>Welcome</div>;
        console.error("You are not organization! Please login as organization to access this page.");
        return <div>You are not organization! Please login as "organization" to access this page.</div>;
    }

    // console.log("************AAAAAAAAAAAAAAAAA*********************************")
    // console.log(auth)
    // get user from auth
    const { user, organization } = auth;
    // console.log("*************AAAAAAAAAAAA********************************")
    // console.log("user from auth", user._id, user.name, organization.person, organization._id, user)


    // const get_organization_profile_photo = async () => {
    //     try {
    //         const res = await axios.get(`http://localhost:5000/organization/photo/${user._id}`);


    //         console.log("********* res.data vvvvvvvvvvvvv ********")
    //         console.log(res.data)
    //         console.log(res.data.organization_photo.profile_photo);
    //         setOrganization_photo(res.data.organization_photo.profile_photo);
    //         // console.log("organization_photo:", organization_photo)
    //         console.log("********* res.data vvvvvvvvvv ********")


    //         // setBloodRequests(res.data.Blood_Request);
    //     } catch (err) {
    //         setError("Failed to get organization profile_photo.");
    //     }
    // };

    useEffect(() => {

        const get_organization_profile_photo = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/organization/photo/${user._id}`);


                // console.log("********* res.data vvvvvvvvvvvvv ********")
                // console.log(res.data)
                // console.log(res.data.organization_photo.profile_photo);
                setOrganization_photo(res.data.organization_photo.profile_photo);
                // console.log("organization_photo:", organization_photo)
                // console.log("********* res.data vvvvvvvvvv ********")


                // setBloodRequests(res.data.Blood_Request);
            } catch (err) {
                setError("Failed to get organization profile_photo.");
            }
        };


        // console.log("Updated organization_photo:>>>>>>>>>>>>>>>>>>>>>>>>>>");
        get_organization_profile_photo();
        // console.log("Updated organization_photo:>>>>>>>>>", organization_photo);
    }, []);


    // Track when organization_photo updates
    useEffect(() => {
        // console.log("Updated organization_photo:", organization_photo);
        console.log("data type of organization_photo:", typeof (organization_photo));
    }, [organization_photo]); // Runs when state updates




    

    async function handleSubmit(e) {
        e.preventDefault();

        console.log("Form submitted");

        const organization_name = user.name;

        const formData = new FormData();
        formData.append("organization_name", organization_name);
        formData.append("name", name);
        formData.append("location", location);
        formData.append("phone", phone);
        formData.append("time", time);
        formData.append("date", date);
        formData.append("description", description);

        // Function to convert buffer data to a File object
        function bufferToFile(bufferData, fileName = "image.jpg") {
            // Convert Uint8Array to Blob
            const blob = new Blob([new Uint8Array(bufferData.data)], { type: bufferData.contentType });

            // Convert Blob to File
            const file = new File([blob], fileName, { type: bufferData.contentType });

            return file;
        }

        const convertedFile = bufferToFile(organization_photo, "uploaded_image.jpg");

        console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
        console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
        console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
        console.log("chect it:", convertedFile); // Now it behaves like a File object

        setOrganization_photo(convertedFile)
        console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
        console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
        console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
        console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
        console.log("chect it organization_photo:", organization_photo);

        // if (organization_photo) {
        //     console.log("Before appending to FormData:", organization_photo);
        // }

        // formData.append("organization_photo", organization_photo);
        if (organization_photo) {
            console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
            console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
            console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
            console.log("organization_photo", organization_photo)
            console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
            console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
            console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")

            formData.append("organization_photo", convertedFile);
        }


        console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
        console.log(">>>>>>>>>>>>>>>>>> formData >>>>>>>>>>>>>>>>>>>>>")
        console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
        console.log(formData)//here

        // Ensure the file is properly appended
        // if (organization_photo instanceof File) {
        //     formData.append("organization_photo", organization_photo);
        // } else {
        //     console.warn("organization_photo is not a valid file:", organization_photo);
        // }
        // console.log(date);

        // When using FormData and logging it directly to the console, you might not see its content displayed clearly because FormData is a special type of object. Instead, you can iterate over its entries and log them to see the actual key-value pairs. Let's update your handleSubmit function to log the contents of the FormData properly.

        // Log the FormData contents
        for (let [key, value] of formData.entries()) {
            console.log(`${key}: ${value}`);
        }


        console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
        console.log(">>>>>>>>>>>>>>>>>> formData >>>>>>>>>>>>>>>>>>>>>")
        console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
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
            console.log("********** organization._id *******************")
            console.log(organization._id)
            console.log("********** organization._id *******************")
            const res = await axios.post(`http://localhost:5000/event/add-new/${organization._id}`, formData);

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
            toast.error("Something went wrong in Add_New_Event.jsx");
        }


    };











    return (
        <div className="min-h-screen font-nunito bg-[url('./bb.png')] bg-cover bg-center">
            {/* Top-left button */}
            <button
                onClick={() => navigate("/organization")}
                className="absolute top-6 left-6 bg-[#820000] text-white border-2 border-[#820000] py-2 px-4 rounded hover:bg-white hover:text-[#820000] transition flex flex-row justify-center items-center gap-2">
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
                    className="bg-white bg-opacity-20 backdrop-blur-md p-6 rounded-lg text-[#820000] grid grid-cols-1 md:grid-cols-2 gap-4"
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
                            className="w-full px-4 py-2 rounded bg-transparent border-2 border-[#820000] placeholder-gray-300 focus:outline-none"
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
                            className="w-full px-4 py-2 rounded bg-transparent border-2 border-[#820000] placeholder-gray-300  focus:outline-none"
                        />
                    </div>

                    {/* Time */}
                    <div className="flex flex-col gap-2 col-span-1">
                        <label htmlFor="time" className="text-sm font-semibold">Time</label>
                        <input
                            type="text"
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                            required
                            id="time"
                            placeholder="2pm"
                            className="w-full px-4 py-2 rounded bg-transparent border-2 border-[#820000] placeholder-gray-300  focus:outline-none"
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
                            className="w-full px-4 py-2 rounded bg-transparent border-2 border-[#820000] placeholder-gray-300  focus:outline-none"
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
                            className="w-full px-4 py-2 rounded bg-transparent border-2 border-[#820000] text-[#820000] placeholder-[#820000] focus:outline-none"
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
                            className="w-full px-4 py-2 rounded bg-transparent border-2 border-[#820000] placeholder-gray-300  focus:outline-none resize-none"
                        ></textarea>
                    </div>



                    {/* Submit Button */}
                    <div className="col-span-1 md:col-span-2">
                        <button
                            type="submit"
                            className="w-full text-white bg-[#820000] hover:bg-white hover:text-[#820000] border border-[#820000] py-2 px-4 rounded font-bold transition"
                        >
                            Create Event
                        </button>
                    </div>
                </form>
            </div>

        </div>
    );
}

export default Generate_Event;
