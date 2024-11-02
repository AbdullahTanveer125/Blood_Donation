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




function SignUp() {

    const [name, setName] = useState("");
    const [gender, setGender] = useState("aa");
    const [age, setAge] = useState("");
    const [weight, setWeight] = useState("");
    const [blood_group, setBlood_group] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [last_time_donation_date, setLast_time_donation_date] = useState("");
    const [photo, setPhoto] = useState(null);
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
        formData.append("city", city);
        formData.append("last_time_donation_date", last_time_donation_date);
        formData.append("email", email);
        formData.append("username", username);
        formData.append("password", password);
        // formData.append("photo", photo);
        if (photo) {
            formData.append("photo", photo);
        }

        console.log(last_time_donation_date);

        // When using FormData and logging it directly to the console, you might not see its content displayed clearly because FormData is a special type of object. Instead, you can iterate over its entries and log them to see the actual key-value pairs. Let's update your handleSubmit function to log the contents of the FormData properly.

        // Log the FormData contents
        for (let [key, value] of formData.entries()) {
            console.log(`${key}: ${value}`);
        }

        console.log(formData)//here

        try {
            const res = await axios.post(`http://localhost:5000/signup`, formData);

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


            <div className="bg-red-700 hero min-h-screen">
                <div className="bg-slate-400 hero-content flex-col lg:flex-row-reverse">
                    <div className="w-[90%] md:w-[80%] lg:w-[35%] text-center bg-slate-600 lg:text-left">

                        <div className='text-center'
                        // className='bg-teal-200' style={{ borderRadius: "25% 25% 0% 71% / 0% 0% 25% 68%", border: "5px solid #1a73e8" }}
                        >

                            {/* <h1 className="text-5xl font-bold text-center">Register Now!</h1> */}
                            <img src="/image2.png" alt="" className='h-96 lg:h-auto mx-auto' />
                        </div>

                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>

                    <div className="w-[90%] md:w-[80%] lg:w-[60%] card bg-base-100 shrink-0 shadow-2xl flex items-center bg-green-200">
                        <form onSubmit={handleSubmit} encType="multipart/form-data"
                            className="bg-zinc-500 card-body grid grid-cols-1 md:grid-cols-2 gap-4">


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
                                    onChange={(e) => {setGender(e.target.value);
                                        console.log(gender)}}
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
                                <label htmlFor="weight" className="text-sm font-medium text-gray-700">Weight</label>
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
                                <label htmlFor="donationDate" className="text-sm font-medium text-gray-700">Last Time Donation Date</label>
                                <div className="input input-bordered flex items-center gap-2">
                                    <input
                                        type="date"
                                        value={last_time_donation_date}
                                        onChange={function (e) { setLast_time_donation_date(e.target.value) }}
                                        required
                                        id="donationDate"
                                        className="grow"
                                        placeholder="" />
                                </div>
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="photo" className="text-sm font-medium text-gray-700">Photo</label>
                                <input
                                    type="file"
                                    // value={photo}
                                    onChange={function (e) { console.log(e.target.files); setPhoto(e.target.files[0]) }}// Use files[0] to get the first selected file
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

                            <div className="mt-6 w-[90%] bg-yellow-700 text-center">
                                <button type="submit" className="btn w-[50%] font-bold text-3xl btn-primary hover:bg-blue-700 hover:text-white">Register</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>



        </div>
    )
}

export default SignUp;
