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
import { IoArrowUndo } from "react-icons/io5";






function Donor_SignUp() {

    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [gender, setGender] = useState("");
    const [age, setAge] = useState("");
    const [weight, setWeight] = useState("");
    const [blood_group, setBlood_group] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [nearest_hospital, setNearest_hospital] = useState("");
    const [last_time_donation_date, setLast_time_donation_date] = useState("");
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
        formData.append("weight", weight);
        formData.append("blood_group", blood_group);
        formData.append("phone", phone);
        formData.append("address", address);
        formData.append("nearest_hospital", nearest_hospital);
        formData.append("last_time_donation_date", last_time_donation_date);
        formData.append("email", email);
        formData.append("username", username);
        formData.append("password", password);
        formData.append("person", "donor");
        // formData.append("profile_photo", profile_photo);
        if (profile_photo) {
            formData.append("profile_photo", profile_photo);
        }

        console.log(last_time_donation_date);

        // When using FormData and logging it directly to the console, you might not see its content displayed clearly because FormData is a special type of object. Instead, you can iterate over its entries and log them to see the actual key-value pairs. Let's update your handleSubmit function to log the contents of the FormData properly.

        // Log the FormData contents
        for (let [key, value] of formData.entries()) {
            console.log(`${key}: ${value}`);
        }

        console.log(formData)//here

        try {
            const res = await axios.post(`http://localhost:5000/donor/signup`, formData);

            console.log("*********************************************");
            console.log("**res", res, "**res.data", res.data, "**res.data.success", res.data.success)
            console.log("*********************************************");

            if (res && res.data.success) {
                toast.success(res.data && res.data.success);//  line:35
                // toast.success(res.data.success && res.data);//  line:36
                navigate("/donor_login");
            } else {
                toast.error(res.data);
            }
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
        }
    };








    return (
        <div className='font-nunito'>
            <div className='-10 ml-9 text-justify  flex flex-col items-start justify-start'>
                {/* <p className='w-[70%]'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, libero odio odit dolores expedita saepe magnam consequatur id nostrum labore a ipsum iste quasi at possimus, accusantium culpa mollitia! Placeat!
                </p> */}
                <button
                    onClick={() => navigate("/")}
                    className="mt-10 bg-[#820000] border-2 border-[#820000] text-white py-2 px-4 rounded hover:bg-white hover:text-[#820000] hover:border-2 hover:border-[#820000] hover:font-bold transition flex flex-row justify-center items-center gap-3">
                    <IoArrowUndo size={20} /> Back to Home
                </button>
            </div>
            {/* <button
                onClick={() => handleReadMore(blog)}
                className="ml-5 bg-[#820000] border-2 border-[#820000] text-white py-2 px-4 rounded hover:bg-white hover:text-[#820000] hover:border-2 hover:border-[#820000] hover:font-bold transition flex flex-row justify-center items-center gap-3">
                <IoArrowUndo size={20} /> Back to Home
            </button> */}

            <div className="hero min-h-screen flex flex-row">



                <div className=" p-3 w-full flex flex-row justify-between items-center mx-[5%]">

                    <img src="/signup.png" alt="" className='w-[30%] h-[10%]' />


                    <div className="bg-slate-50 card shadow-2xl flex items-center">
                        <form onSubmit={handleSubmit} encType="multipart/form-data"
                            className=" card-body ">

                            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                                <div className="flex flex-col gap-1">
                                    {/* <label htmlFor="name" className="text-sm font-medium text-gray-700">Name</label> */}
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
                                            placeholder="Name"
                                        />
                                    </div>
                                </div>



                                <div className="flex flex-col gap-1">
                                    {/* <label htmlFor="gender" className="text-sm font-medium text-gray-700">Gender</label> */}
                                    <select
                                        className="select select-bordered w-full max-w-xs"
                                        value={gender}
                                        onChange={(e) => {
                                            setGender(e.target.value);
                                            console.log(gender)
                                        }}
                                        required

                                    >
                                        <option value="" disabled>
                                            Select Gender
                                        </option>
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
                                    {/* <label htmlFor="age" className="text-sm font-medium text-gray-700">Age</label> */}
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
                                            placeholder="Age"
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-col gap-1">
                                    {/* <label htmlFor="weight" className="text-sm font-medium text-gray-700">Weight</label> */}
                                    <div className="input input-bordered flex items-center gap-2">
                                        <div className="">
                                            <GiWeight size={20} />
                                        </div>
                                        <input
                                            type="text"
                                            value={weight}
                                            onChange={function (e) { setWeight(e.target.value) }}
                                            required
                                            id="weight"
                                            className="grow"
                                            placeholder="Weight"
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-col gap-1">
                                    {/* <label htmlFor="bloodGroup" className="text-sm font-medium text-gray-700">Blood Group</label> */}
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

                                        <option value="" disabled>
                                            Blood Group
                                        </option>
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
                                    {/* <label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone</label> */}
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
                                            placeholder="Phone"
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-col gap-1">
                                    {/* <label htmlFor="address" className="text-sm font-medium text-gray-700">Address</label> */}
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
                                            placeholder="Address"
                                        />
                                    </div>
                                </div>








                                <div className="flex flex-col gap-1">
                                    {/* <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label> */}
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
                                            placeholder="Email"
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-col gap-1">
                                    {/* <label htmlFor="username" className="text-sm font-medium text-gray-700">Username</label> */}
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
                                            placeholder="User Name"
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-col gap-1">
                                    {/* <label htmlFor="password" className="text-sm font-medium text-gray-700">Password</label> */}
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
                                            placeholder="Password"
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-col gap-1">
                                    <label htmlFor="nearest_hospital" className="text-sm font-medium text-gray-700">Nearest hospital</label>
                                    <select
                                        className="select select-bordered w-full max-w-xs"
                                        value={nearest_hospital}
                                        onChange={(e) => setNearest_hospital(e.target.value)}
                                        required
                                        placeholder="kk"//not work
                                    >
                                        <option value="" disabled>

                                        </option>
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
                                    <label htmlFor="donationDate" className="text-sm font-medium text-gray-700">Last Time Donation Date (optional)</label>
                                    <div className="input input-bordered flex items-center gap-2">
                                        <input
                                            type="date"
                                            value={last_time_donation_date}
                                            onChange={function (e) { setLast_time_donation_date(e.target.value) }}
                                            required
                                            id="donationDate"
                                            className="grow"
                                            placeholder="Last" />
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



                            </div>


                            <div className="mt-20 w-[90%]  text-center">
                                <button type="submit" className="bg-red-600 border-2 border-red-600 text-white  font-nunito font-bold py-2 px-14 rounded hover:bg-white hover:text-[#820000] hover:border-2 hover:border-[#820000] hover:font-bold transition"
                                >Register</button>
                            </div>
                        </form>

                    </div>





                </div>

            </div>

            <hr />
            <div>
                AAAAAAAAAAA


            </div>


        </div>
    )


}

export default Donor_SignUp
