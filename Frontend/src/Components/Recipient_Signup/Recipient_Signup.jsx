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




function Recipient_Signup() {



    const [name, setName] = useState("");
    const [gender, setGender] = useState("");
    const [age, setAge] = useState("");
    // const [weight, setWeight] = useState("");
    // const [blood_group, setBlood_group] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    // const [nearest_hospital, setNearest_hospital] = useState("");
    // const [last_time_donation_date, setLast_time_donation_date] = useState("");
    const [profile_photo, setProfile_photo] = useState(null);
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");



    // const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();

        console.log("Form submitted");


        const formData = new FormData();
        formData.append("name", name);
        formData.append("gender", gender);
        formData.append("age", age);
        // formData.append("weight", weight);
        // formData.append("blood_group", blood_group);
        formData.append("phone", phone);
        formData.append("address", address);
        // formData.append("nearest_hospital", nearest_hospital);
        // formData.append("last_time_donation_date", last_time_donation_date);
        formData.append("email", email);
        formData.append("username", username);
        formData.append("password", password);
        // formData.append("profile_photo", profile_photo);
        if (profile_photo) {
            formData.append("profile_photo", profile_photo);
        }

        // console.log(last_time_donation_date);

        // When using FormData and logging it directly to the console, you might not see its content displayed clearly because FormData is a special type of object. Instead, you can iterate over its entries and log them to see the actual key-value pairs. Let's update your handleSubmit function to log the contents of the FormData properly.

        // Log the FormData contents
        for (let [key, value] of formData.entries()) {
            console.log(`${key}: ${value}`);
        }

        console.log(formData)//here

        try {
            const res = await axios.post(`http://localhost:5000/recipient/signup`, formData);

            console.log("*********************************************");
            console.log("**res", res, "**res.data", res.data, "**res.data.success", res.data.success)
            console.log("*********************************************");

            if (res && res.data.success) {
                toast.success(res.data && res.data.success);//  line:35
                // toast.success(res.data.success && res.data);//  line:36
                // navigate("/login");
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
            <div className='m-12'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, libero odio odit dolores expedita saepe magnam consequatur id nostrum labore a ipsum iste quasi at possimus, accusantium culpa mollitia! Placeat!
            </div>

            <div className="bg-slate-200 hero min-h-screen">
                ggggggggggg
                <div className='m-12'>AAAAAAsdjkkkkkkkkkkk
                    <p>asddddddddd</p>qqqq
                </div>


                <div className=" hero-content flex-col lg:flex-row-reverse">

                    <div className="w-[90%] md:w-[80%] lg:w-[35%] text-center lg:text-left">

                        <div className='text-center'
                        // className='bg-teal-200' style={{ borderRadius: "25% 25% 0% 71% / 0% 0% 25% 68%", border: "5px solid #1a73e8" }}
                        >

                            {/* <h1 className="text-5xl font-bold text-center">Register Now!</h1> */}
                            <img src="/donor register image.png" alt="" className='h-96 lg:h-auto mx-auto' />
                        </div>

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
                                <label htmlFor="gender" className="text-sm font-medium text-gray-700">Gender</label>
                                <select
                                    className="select select-bordered w-full max-w-xs"
                                    value={gender}
                                    onChange={(e) => {
                                        setGender(e.target.value);
                                        console.log(gender)
                                    }}
                                    required
                                >
                                    <option disabled selected></option>
                                    <option>male</option>
                                    <option>Female</option>
                                </select>
                            </div>


                            {/* <div className="flex flex-col gap-1">
                                <label htmlFor="gender" className="text-sm font-medium text-gray-700">Gender</label>
                                <select
                                    className="select select-bordered w-full max-w-xs"
                                    value={gender}
                                    onChange={(e) => setGender(e.target.value)}
                                    required
                                >
                                    <option disabled selected>Your Gender?</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                </select>

                            </div> */}

                            <div className="flex flex-col gap-1">
                                <label htmlFor="age" className="text-sm font-medium text-gray-700">Age</label>
                                <div className="input input-bordered flex items-center gap-2">
                                    <div className="">
                                        <FaPerson size={20} />
                                    </div>
                                    <input
                                        type="text"
                                        value={age}
                                        onChange={function (e) { setAge(e.target.value) }}
                                        required
                                        id="age"
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
                                <label htmlFor="profile_photo" className="text-sm font-medium text-gray-700">Profile photo</label>
                                <input
                                    type="file"
                                    // value={profile_photo}
                                    onChange={function (e) { console.log(e.target.files); setProfile_photo(e.target.files[0]) }}// Use files[0] to get the first selected file
                                    name="image"
                                    accept="image/*"
                                    placeholder="choose an image"
                                    required
                                    className="file-input file-input-bordered w-full max-w-xs"
                                />
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
                                <label htmlFor="username" className="text-sm font-medium text-gray-700">Username</label>
                                <div className="input input-bordered flex items-center gap-2">
                                    <div className="">
                                        <FaUserAlt size={20} />
                                    </div>
                                    <input
                                        type="text"
                                        value={username}
                                        onChange={function (e) { setUsername(e.target.value) }}
                                        required
                                        id="username"
                                        className="grow"
                                        placeholder=""
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="password" className="text-sm font-medium text-gray-700">Password</label>
                                <div className="input input-bordered flex items-center gap-2">
                                    <div className="">
                                        <FaKey size={20} />
                                    </div>
                                    <input
                                        type="password"
                                        value={password}
                                        onChange={function (e) { setPassword(e.target.value) }}
                                        required
                                        id="password"
                                        className="grow"
                                        placeholder=""
                                    />
                                </div>
                            </div>

                            <div className="mt-6 w-[90%]  text-center">
                                <button type="submit" className="bg-[#24599e] border-0 text-white btn w-[50%] font-bold text-2xl hover:bg-[#888b8e] hover:text-black"
                                    style={{
                                        boxShadow: "0 0 16px 2px #074799",
                                    }}
                                >Register</button>
                            </div>
                        </form>

                    </div>
                </div>
                ggggggggggg
            </div>

            <hr />
            <div>
                AAAAAAAAAAA


            </div>


        </div>
    )





}

export default Recipient_Signup
