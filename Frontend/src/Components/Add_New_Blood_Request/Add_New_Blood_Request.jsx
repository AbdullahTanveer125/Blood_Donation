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



import { useAuth } from "../../context/auth";



function Add_New_Blood_Request() {


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
        <div>


            <div className='bg-orange-600 flex flex-col justify-center items-center'>

                <div className='m-12'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, libero odio odit dolores expedita saepe magnam consequatur id nostrum labore a ipsum iste quasi at possimus, accusantium culpa mollitia! Placeat!
                </div>


                <div className="bg-slate-300 w-[90%] md:w-[80%] lg:w-[60%] card shrink-0 shadow-2xl flex items-center"
                    style={{
                        boxShadow: "0 0 36px 2px #074799",
                    }}
                >
                    <form onSubmit={handleSubmit} encType="multipart/form-data"
                        className=" card-body grid grid-cols-1 md:grid-cols-2 gap-4">


                        <div className="flex flex-col gap-1">
                            <label htmlFor="patient_name" className="text-sm font-medium text-gray-700">Patient Name</label>
                            <div className="input input-bordered flex items-center gap-2">
                                <div className="">
                                    <FaUserAlt />
                                </div>
                                <input
                                    type="text"
                                    value={patient_name}
                                    onChange={function (e) { setPatient_name(e.target.value) }}
                                    required
                                    id="patient_name"
                                    className="grow"
                                    placeholder=""
                                />
                            </div>
                        </div>



                        <div className="flex flex-col gap-1">
                            <label htmlFor="bloodGroup" className="text-sm font-medium text-gray-700">Blood Group</label>
                            <select
                                className="select select-bordered w-full max-w-xs"
                                value={blood_group}
                                // onChange={(e) => setBlood_group(e.target.value) }
                                onChange={(e) => {
                                    setBlood_group(e.target.value);
                                    console.log(blood_group)
                                }}
                                required
                            >
                                <option disabled selected></option>
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


                        <div className="flex flex-col gap-1">
                            <label htmlFor="location" className="text-sm font-medium text-gray-700">Location</label>
                            <select
                                className="select select-bordered w-full max-w-xs"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                                required
                                placeholder="kk"//not work
                            >
                                <option disabled selected></option>
                                <option>Jinnah</option>
                                <option>Service</option>
                                <option>Childern</option>
                                <option>other</option>
                                <option>other</option>
                                <option>other</option>
                                <option>other</option>
                                <option>other</option>
                            </select>
                        </div>


                        <div className="flex flex-col gap-1">
                            <label htmlFor="urgency" className="text-sm font-medium text-gray-700">Urgency</label>
                            <select
                                className="select select-bordered w-full max-w-xs"
                                value={urgency}
                                onChange={(e) => {
                                    setUrgency(e.target.value);
                                    console.log(urgency)
                                }}
                                required
                            >
                                <option disabled selected></option>
                                <option>high</option>
                                <option>low</option>
                            </select>
                        </div>


                        <div className="flex flex-col gap-1">
                            <label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone</label>
                            <div className="input input-bordered flex items-center gap-2">
                                <div className="">
                                    <FaPhoneVolume />
                                </div>
                                <input
                                    type="text"
                                    value={phone}
                                    onChange={function (e) { setPhone(e.target.value) }}
                                    required
                                    id="phone"
                                    className="grow"
                                    placeholder=""
                                />
                            </div>
                        </div>



                        <div className="flex flex-col gap-1">
                            <label htmlFor="blood_need_date" className="text-sm font-medium text-gray-700">blood need date</label>
                            <div className="input input-bordered flex items-center gap-2">
                                <input
                                    type="date"
                                    value={blood_need_date}
                                    onChange={function (e) { setBlood_need_date(e.target.value) }}
                                    required
                                    id="blood_need_date"
                                    className="grow"
                                    placeholder="" />
                            </div>
                        </div>






                        <div className="flex flex-col gap-1">
                            <label htmlFor="comment" className="text-sm font-medium text-gray-700">Comment</label>
                            <div className="bg-white flex items-start gap-2">

                                <textarea
                                    value={comment}
                                    onChange={(e) => setComment(e.target.value)}
                                    required
                                    id="comment"
                                    className="grow resize-none p-2 outline-none border-0"
                                    placeholder="Enter your Comment here"
                                    rows={3} // Adjust the number of rows as needed
                                ></textarea>
                            </div>
                        </div>






                        <div className="mt-6 w-[90%]  text-center">
                            <button type="submit" className="bg-[#24599e] border-0 text-white btn w-[80%] font-bold text-1xl hover:bg-[#888b8e] hover:text-black"
                                style={{
                                    boxShadow: "0 0 16px 2px #074799",
                                }}
                            >Create Blood Request</button>



                        </div>
                    </form>

                </div>


            </div>





        </div>
    )

}

export default Add_New_Blood_Request
