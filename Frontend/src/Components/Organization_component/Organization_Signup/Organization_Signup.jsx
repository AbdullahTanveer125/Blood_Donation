import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";
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
import { IoArrowUndo } from "react-icons/io5";
import { FaLink } from "react-icons/fa";


function Organization_Signup() {


    const [name, setName] = useState("");
    const [gender, setGender] = useState("");
    const [website_url, setWebsite_url] = useState("");
    // const [weight, setWeight] = useState("");
    // const [blood_group, setBlood_group] = useState("");
    const [phone, setPhone] = useState("");
    const [location, setLocation] = useState("");
    // const [nearest_hospital, setNearest_hospital] = useState("");
    // const [last_time_donation_date, setLast_time_donation_date] = useState("");
    const [profile_photo, setProfile_photo] = useState(null);
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");



    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();

        console.log("Form submitted");


        const formData = new FormData();
        formData.append("name", name);
        formData.append("gender", gender);
        formData.append("website_url", website_url);
        // formData.append("weight", weight);
        // formData.append("blood_group", blood_group);
        formData.append("phone", phone);
        formData.append("location", location);
        // formData.append("nearest_hospital", nearest_hospital);
        // formData.append("last_time_donation_date", last_time_donation_date);
        formData.append("email", email);
        formData.append("username", username);
        formData.append("password", password);
        formData.append("person", "organization");
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
            const res = await axios.post(`http://localhost:5000/organization/signup`, formData);

            console.log("*********************************************");
            console.log("**res", res, "**res.data", res.data, "**res.data.success", res.data.success)
            console.log("*********************************************");

            if (res && res.data.success) {
                toast.success('Register Successfully!');//  line:35
                // toast.success(res.data.success && res.data);//  line:36
                navigate("/organization_login");
            } else {
                toast.error(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
        }
    };








    return (
        <div className='font-nunito'>
            <div className='my-10 text-justify  flex flex-col items-start justify-center relative z-30'>
                <button
                    onClick={() => navigate("/")}
                    className="ml-10 bg-white  text-our_red  rounded-full w-8 h-8 hover:bg-white hover:text-our_red hover:border-2 hover:border-our_red hover:font-bold transition flex flex-row justify-center items-center gap-3">
                    <IoArrowUndo size={20} />
                </button>
            </div>

            <div className="hero min-h-screen absolute inset-0 bg-[url('/LogIn.png')] bg-cover bg-center z-0">



                <div className=" hero-content flex-col lg:flex-row gap-10 justify-center items-center w-[100vw]">

                    <div className="pl-8 w-[90%] md:w-[80%] lg:w-[35%] text-center lg:text-left">
                        <div className='bg-blue-00 min-w-[50%] position z-40 relative'>
                            <h1 className='text-2xl font-extrabold'><span className='text-our_red'>Every Drop</span>  Counts!</h1>
                            <p>Your small act of kindness can save a life today.</p>
                        </div>

                    </div>

                    <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl shadow-2xl shadow-gray-400 w-[90%] md:w-[80%] lg:w-[60%] card shrink-0 flex items-center"
                    >
                        <form onSubmit={handleSubmit} encType="multipart/form-data"
                            className=" p-5 ">


                            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                                <div className="flex flex-col gap-1">
                                    <label htmlFor="name" className="text-sm font-medium text-gray-700">Name</label>
                                    <div className="input input-bordered flex items-center gap-2 rounded-full">
                                        <div className="">
                                            <FaUserAlt />
                                        </div>
                                        <input
                                            type="text"
                                            value={name}
                                            onChange={function (e) { setName(e.target.value) }}
                                            required
                                            id="name"
                                            className="grow border-none"
                                            placeholder=""
                                        />
                                    </div>
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
                                    <label htmlFor="website_url" className="text-sm font-medium text-gray-700">website url</label>
                                    <div className="input input-bordered flex items-center gap-2 rounded-full">
                                        <div className="">
                                            <FaLink />
                                        </div>
                                        <input
                                            type="text"
                                            value={website_url}
                                            onChange={function (e) { setWebsite_url(e.target.value) }}
                                            required
                                            id="website_url"
                                            className="grow border-none"
                                            placeholder=""
                                        />
                                    </div>
                                </div>



                                <div className="flex flex-col gap-1">
                                    <label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone</label>
                                    <div className="input input-bordered flex items-center gap-2 rounded-full">
                                        <div className="">
                                            <FaPhoneVolume />
                                        </div>
                                        <input
                                            type="text"
                                            value={phone}
                                            onChange={function (e) { setPhone(e.target.value) }}
                                            required
                                            id="phone"
                                            className="grow border-none"
                                            placeholder=""
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-col gap-1">
                                    <label htmlFor="location" className="text-sm font-medium text-gray-700">Location</label>
                                    <div className="input input-bordered flex items-center gap-2 rounded-full">
                                        <div className="">
                                            <FaRegAddressBook size={20} />
                                        </div>
                                        <input
                                            type="text"
                                            value={location}
                                            onChange={function (e) { setLocation(e.target.value) }}
                                            required
                                            id="location"
                                            className="grow border-none"
                                            placeholder=""
                                        />
                                    </div>
                                </div>



                                <div className="flex flex-col gap-1">
                                    <label htmlFor="profile_photo" className="text-sm font-medium text-gray-700 rounded-full">Profile photo</label>
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
                                    <div className="input input-bordered flex items-center gap-2 rounded-full">
                                        <div className="">
                                            <MdEmail size={20} />
                                        </div>
                                        <input
                                            type="text"
                                            value={email}
                                            onChange={function (e) { setEmail(e.target.value) }}
                                            required
                                            id="email"
                                            className="grow border-none"
                                            placeholder=""
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-col gap-1">
                                    <label htmlFor="username" className="text-sm font-medium text-gray-700">Username</label>
                                    <div className="input input-bordered flex items-center gap-2 rounded-full">
                                        <div className="">
                                            <FaUserAlt size={20} />
                                        </div>
                                        <input
                                            type="text"
                                            value={username}
                                            onChange={function (e) { setUsername(e.target.value) }}
                                            required
                                            id="username"
                                            className="grow border-none"
                                            placeholder=""
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-col gap-1">
                                    <label htmlFor="password" className="text-sm font-medium text-gray-700">Password</label>
                                    <div className="input input-bordered flex items-center gap-2 rounded-full">
                                        <div className="">
                                            <FaKey size={20} />
                                        </div>
                                        <input
                                            type="password"
                                            value={password}
                                            onChange={function (e) { setPassword(e.target.value) }}
                                            required
                                            id="password"
                                            className="grow border-none"
                                            placeholder=""
                                        />
                                    </div>
                                </div>

                            </div>

                            <div className="mt-20 w-full p-2 text-center">
                                <button type="submit" className="bg-our_red border-2 border-our_red text-white  font-nunito font-bold py-2 px-8 rounded-full hover:bg-white hover:text-our_red hover:border-2 hover:border-our_red hover:font-bold transition"
                                >Register</button>
                                <p className="text-xs mt-2">
                                    Are you already register?{" "}
                                    <Link to="/recipient_signup" className="text-our_red font-bold hover:underline">
                                        Login
                                    </Link>
                                </p>
                            </div>
                        </form>

                    </div>
                </div>

            </div>




        </div>
    )




}

export default Organization_Signup
