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





function bloodRequest() {


    const [name, setName] = useState("");
    const [blood_group, setBlood_group] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [blood_need_date, setblood_need_date] = useState("");
    const [email, setEmail] = useState("");
    const [priority, setPriority] = useState("");
    const [comment, setComment] = useState("");



    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();

        console.log("Form submitted");


        // const formData = new FormData();
        // formData.append("name", name);
        // formData.append("email", email);
        // formData.append("phone", phone);
        // formData.append("blood_group", blood_group);
        // formData.append("address", address);
        // formData.append("city", city);
        // formData.append("priority", priority);
        // formData.append("blood_need_date", blood_need_date);
        // formData.append("comment", comment);

        const DATA = {
            name,
            email,
            phone,
            blood_group,
            address,
            city,
            priority,
            blood_need_date,
            comment,
        };
        console.log(DATA)

        // const DATA = {
        //     name: "John Doe",
        //     email: "john.doe@example.com",
        //     phone: "1234567890",
        //     blood_group: "O+",
        //     address: "123 Main St",
        //     city: "Somewhere",
        //     comment: "Urgent need",
        //     priority: "High",
        //     blood_need_date: "2024-12-31",
        // };


        // console.log(blood_need_date);

        // When using FormData and logging it directly to the console, you might not see its content displayed clearly because FormData is a special type of object. Instead, you can iterate over its entries and log them to see the actual key-value pairs. Let's update your handleSubmit function to log the contents of the FormData properly.

        // Log the FormData contents
        // for (let [key, value] of formData.entries()) {
        //     console.log(`${key}: ${value}`);
        // }

        // console.log(formData)//here

        try {
            const res = await axios.post(`http://localhost:5000/add-bloodRequest`, DATA);

            console.log("*********************************************");
            console.log("**res", res, "**res.data", res.data, "**res.data.success", res.data.success)
            console.log("*********************************************");

            if (res && res.data.success) {
                toast.success(res.data && res.data.success);//  line:35
                // toast.success(res.data.success && res.data);//  line:36
                
                navigate("/all_blood_requests");
            } else {
                toast.error(res.data);
            }
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
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
                            <label htmlFor="name" className="text-sm font-medium text-gray-700">Name</label>
                            <div className="input input-bordered flex items-center gap-2">
                                <div className="">
                                    <FaUserAlt />
                                </div>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={function (e) { setName(e.target.value) }}
                                    required
                                    id="name"
                                    className="grow"
                                    placeholder=""
                                />
                            </div>
                        </div>



                        <div className="flex flex-col gap-1">
                            <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                            <div className="input input-bordered flex items-center gap-2">
                                <div className="">
                                    <MdEmail size={20} />
                                </div>
                                <input
                                    type="text"
                                    value={email}
                                    onChange={function (e) { setEmail(e.target.value) }}
                                    required
                                    id="email"
                                    className="grow"
                                    placeholder=""
                                />
                            </div>
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
                            <label htmlFor="bloodGroup" className="text-sm font-medium text-gray-700">Blood Group</label>
                            <select
                                className="select select-bordered w-full max-w-xs"
                                value={blood_group}
                                onChange={(e) => setBlood_group(e.target.value)}
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
                            <label htmlFor="address" className="text-sm font-medium text-gray-700">Address</label>
                            <div className="input input-bordered flex items-center gap-2">
                                <div className="">
                                    <FaRegAddressBook size={20} />
                                </div>
                                <input
                                    type="text"
                                    value={address}
                                    onChange={function (e) { setAddress(e.target.value) }}
                                    required
                                    id="address"
                                    className="grow"
                                    placeholder=""
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-1">
                            <label htmlFor="city" className="text-sm font-medium text-gray-700">City</label>
                            <div className="input input-bordered flex items-center gap-2">
                                <div className="">
                                    <FaCity size={20} />
                                </div>
                                <input
                                    type="text"
                                    value={city}
                                    onChange={function (e) { setCity(e.target.value) }}
                                    required
                                    id="city"
                                    className="grow"
                                    placeholder=""
                                />
                            </div>
                        </div>



                        <div className="flex flex-col gap-1">
                            <label htmlFor="priority" className="text-sm font-medium text-gray-700">Priority</label>
                            <select
                                className="select select-bordered w-full max-w-xs"
                                value={priority}
                                onChange={(e) => {
                                    setPriority(e.target.value);
                                    console.log(priority)
                                }}
                                required
                            >
                                <option disabled selected></option>
                                <option>high</option>
                                <option>low</option>
                            </select>
                        </div>
















                        <div className="flex flex-col gap-1">
                            <label htmlFor="donationDate" className="text-sm font-medium text-gray-700">Blood Need Date</label>
                            <div className="input input-bordered flex items-center gap-2">
                                <input
                                    type="date"
                                    value={blood_need_date}
                                    onChange={function (e) { setblood_need_date(e.target.value) }}
                                    required
                                    id="donationDate"
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
                                    placeholder="Enter your comment here"
                                    rows={3} // Adjust the number of rows as needed
                                ></textarea>
                            </div>
                        </div>






                        <div className="mt-6 w-[90%]  text-center">
                            <button type="submit" className="bg-[#24599e] border-0 text-white btn w-[50%] font-bold text-2xl hover:bg-[#888b8e] hover:text-black"
                                style={{
                                    boxShadow: "0 0 16px 2px #074799",
                                }}
                            >Add</button>



                        </div>
                    </form>

                </div>


            </div>


            {/* <button type="text"
                onClick={function (e) { navigate("/All_blood_Request") }}
                className="bg-[#24599e] border-0 text-white btn w-[50%] font-bold text-2xl hover:bg-[#888b8e] hover:text-black"
                style={{
                    boxShadow: "0 0 16px 2px #074799",
                }}
            >Navigat Test</button> */}


        </div>
    )
}

export default bloodRequest;
