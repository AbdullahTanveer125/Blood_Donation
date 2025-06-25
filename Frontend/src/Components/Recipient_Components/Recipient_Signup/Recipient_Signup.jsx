// import React, { useState } from 'react'
// import { useNavigate } from "react-router-dom";

// import { Link } from "react-router-dom";
// import { toast } from 'react-toastify';
// import axios from 'axios';

// import { FaKey } from "react-icons/fa";
// import { FaUserAlt } from "react-icons/fa";
// import { FaCity } from "react-icons/fa6";
// import { FaRegAddressBook } from "react-icons/fa6";
// import { FaPhoneVolume } from "react-icons/fa6";
// import { MdEmail } from "react-icons/md";
// import { GiWeight } from "react-icons/gi";
// import { FaPerson } from "react-icons/fa6";
// import { IoArrowUndo } from "react-icons/io5";



// function Recipient_Signup() {



//     const [name, setName] = useState("");
//     const [gender, setGender] = useState("");
//     const [age, setAge] = useState("");
//     // const [weight, setWeight] = useState("");
//     // const [blood_group, setBlood_group] = useState("");
//     const [phone, setPhone] = useState("");
//     const [address, setAddress] = useState("");
//     // const [nearest_hospital, setNearest_hospital] = useState("");
//     // const [last_time_donation_date, setLast_time_donation_date] = useState("");
//     const [profile_photo, setProfile_photo] = useState(null);
//     const [email, setEmail] = useState("");
//     const [username, setUsername] = useState("");
//     const [password, setPassword] = useState("");



//     const navigate = useNavigate();

//     async function handleSubmit(e) {
//         e.preventDefault();

//         console.log("Form submitted");


//         const formData = new FormData();
//         formData.append("name", name);
//         formData.append("gender", gender);
//         formData.append("age", age);
//         // formData.append("weight", weight);
//         // formData.append("blood_group", blood_group);
//         formData.append("phone", phone);
//         formData.append("address", address);
//         // formData.append("nearest_hospital", nearest_hospital);
//         // formData.append("last_time_donation_date", last_time_donation_date);
//         formData.append("email", email);
//         formData.append("username", username);
//         formData.append("password", password);
//         formData.append("person", "recipient");
//         // formData.append("profile_photo", profile_photo);
//         if (profile_photo) {
//             formData.append("profile_photo", profile_photo);
//         }

//         // console.log(last_time_donation_date);

//         // When using FormData and logging it directly to the console, you might not see its content displayed clearly because FormData is a special type of object. Instead, you can iterate over its entries and log them to see the actual key-value pairs. Let's update your handleSubmit function to log the contents of the FormData properly.

//         // Log the FormData contents
//         for (let [key, value] of formData.entries()) {
//             console.log(`${key}: ${value}`);
//         }

//         console.log(formData)//here

//         try {
//             const res = await axios.post(`http://localhost:5000/recipient/signup`, formData);

//             console.log("*********************************************");
//             console.log("**res", res, "**res.data", res.data, "**res.data.success", res.data.success)
//             console.log("*********************************************");

//             if (res && res.data.success) {
//                 toast.success('Register Successfuly!');
//                 navigate("/recipient_login");
//             } else {
//                 toast.error(res.data.message);
//             }
//         } catch (error) {
//             console.log(error);
//             toast.error("Something went wrong");
//         }
//     };








//     return (
//         <div className='font-nunito'>
//             <div className='my-10 text-justify  flex flex-col items-start justify-center relative z-30'>
//                 <button
//                     onClick={() => navigate("/")}
//                     className="ml-10 bg-white  text-our_red  rounded-full w-8 h-8 hover:bg-white hover:text-our_red hover:border-2 hover:border-our_red hover:font-bold transition flex flex-row justify-center items-center gap-3">
//                     <IoArrowUndo size={20} />
//                 </button>
//             </div>

//             <div className="pt-10 min-h-screen absolute inset-0 bg-[url('/LogIn.png')] bg-cover bg-center z-0">



//                 <div className="  hero-content flex-col lg:flex-row gap-10 justify-center items-center w-[100vw]">

//                     <div className="pl-8 w-[90%] md:w-[80%] lg:w-[35%] text-center lg:text-left">
//                         <div className='bg-blue-00 min-w-[50%] position z-40 relative'>
//                             <h1 className='text-2xl font-extrabold'><span className='text-our_red'>Every Drop</span>  Counts!</h1>
//                             <p>Your small act of kindness can save a life today.</p>
//                         </div>

//                     </div>

//                     <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl shadow-2xl shadow-gray-400 w-[90%] md:w-[80%] lg:w-[60%] card shrink-0 flex items-center"
//                     >
//                         <form onSubmit={handleSubmit} encType="multipart/form-data"
//                             className="p-5 ">

//                             <div className=' grid grid-cols-1 md:grid-cols-2 gap-4'>

//                                 <div className="flex flex-col gap-1">
//                                     <label htmlFor="name" className="text-sm font-medium text-gray-700">Name</label>
//                                     <div className="input input-bordered flex items-center gap-2 rounded-full">
//                                         <div className="">
//                                             <FaUserAlt size={10} />
//                                         </div>
//                                         {/* <input
//                                             type="text"
//                                             value={name}
//                                             onChange={function (e) { setName(e.target.value) }}
//                                             required
//                                             id="name"
//                                             className="grow border-none"
//                                             placeholder=""
//                                         /> */}

//                                         <input
//                                             type="text"
//                                             value={name}
//                                             onChange={(e) => {
//                                                 const input = e.target.value;
//                                                 // Allow only letters and spaces
//                                                 const onlyLettersAndSpaces = input.replace(/[^a-zA-Z\s]/g, '');
//                                                 // Limit to 25 characters
//                                                 if (onlyLettersAndSpaces.length <= 25) {
//                                                     setName(onlyLettersAndSpaces);
//                                                 }
//                                             }}

//                                             required
//                                             id="name"
//                                             className="border-none"
//                                             placeholder="Name"
//                                         />
//                                     </div>
//                                 </div>



//                                 <div className="flex flex-col gap-1">
//                                     <label htmlFor="gender" className="text-sm font-medium text-gray-700">Gender</label>
//                                     <select
//                                         className="select select-bordered w-full max-w-xs  rounded-full"
//                                         value={gender}
//                                         onChange={(e) => {
//                                             setGender(e.target.value);
//                                             console.log(gender)
//                                         }}
//                                         required
//                                     >
//                                         <option disabled selected></option>
//                                         <option>male</option>
//                                         <option>Female</option>
//                                     </select>
//                                 </div>


//                                 {/* <div className="flex flex-col gap-1">
//                                 <label htmlFor="gender" className="text-sm font-medium text-gray-700">Gender</label>
//                                 <select
//                                     className="select select-bordered w-full max-w-xs"
//                                     value={gender}
//                                     onChange={(e) => setGender(e.target.value)}
//                                     required
//                                 >
//                                     <option disabled selected>Your Gender?</option>
//                                     <option>Male</option>
//                                     <option>Female</option>
//                                 </select>

//                             </div> */}

//                                 <div className="flex flex-col gap-1">
//                                     <label htmlFor="age" className="text-sm font-medium text-gray-700">Age</label>
//                                     <div className="input input-bordered flex items-center gap-2 rounded-full">
//                                         <div className="">
//                                             <FaPerson size={15} />
//                                         </div>
//                                         {/* <input
//                                             type="text"
//                                             value={age}
//                                             onChange={function (e) { setAge(e.target.value) }}
//                                             required
//                                             id="age"
//                                             className="grow border-none"
//                                             placeholder=""
//                                         /> */}

//                                         <input
//                                             type="text"
//                                             value={age}
//                                             onChange={(e) => {
//                                                 const input = e.target.value;
//                                                 const numbersOnly = input.replace(/[^0-9]/g, ''); // Remove non-numeric characters
//                                                 if (numbersOnly.length <= 2) {
//                                                     setAge(numbersOnly); // Only set if it's 1 or 2 digits
//                                                 }
//                                             }}
//                                             required
//                                             id="age"
//                                             className="grow border-none"
//                                             placeholder="Age"
//                                         />
//                                     </div>
//                                 </div>



//                                 <div className="flex flex-col gap-1">
//                                     <label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone</label>
//                                     <div className="input input-bordered flex items-center gap-2 rounded-full">
//                                         <div className="">
//                                             <FaPhoneVolume size={10} />
//                                         </div>
//                                         {/* <input
//                                             type="text"
//                                             value={phone}
//                                             onChange={function (e) { setPhone(e.target.value) }}
//                                             required
//                                             id="phone"
//                                             className="grow border-none"
//                                             placeholder=""
//                                         /> */}

//                                         <input
//                                             type="text"
//                                             value={phone}
//                                             onChange={(e) => {
//                                                 const input = e.target.value;
//                                                 const numbersOnly = input.replace(/[^0-9]/g, ''); // Remove non-numeric characters
//                                                 if (numbersOnly.length <= 11) {
//                                                     setPhone(numbersOnly); // Only allow up to 11 digits
//                                                 }
//                                             }}
//                                             required
//                                             id="phone"
//                                             className="grow border-none"
//                                             placeholder="Phone"
//                                         />
//                                     </div>
//                                 </div>

//                                 <div className="flex flex-col gap-1">
//                                     <label htmlFor="address" className="text-sm font-medium text-gray-700">Address</label>
//                                     <div className="input input-bordered flex items-center gap-2 rounded-full">
//                                         <div className="">
//                                             <FaRegAddressBook size={15} />
//                                         </div>
//                                         <input
//                                             type="text"
//                                             value={address}
//                                             onChange={function (e) { setAddress(e.target.value) }}
//                                             required
//                                             id="address"
//                                             className="grow border-none"
//                                             placeholder=""
//                                         />
//                                     </div>
//                                 </div>



//                                 <div className="flex flex-col gap-1">
//                                     <label htmlFor="profile_photo" className="text-sm font-medium text-gray-700">Profile photo</label>
//                                     <input
//                                         type="file"
//                                         // value={profile_photo}
//                                         onChange={function (e) { console.log(e.target.files); setProfile_photo(e.target.files[0]) }}// Use files[0] to get the first selected file
//                                         name="image"
//                                         accept="image/*"
//                                         placeholder="choose an image"
//                                         required
//                                         className="file-input file-input-bordered w-full max-w-xs"
//                                     />
//                                 </div>




//                                 <div className="flex flex-col gap-1">
//                                     <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
//                                     <div className="input input-bordered flex items-center gap-2 rounded-full">
//                                         <div className="">
//                                             <MdEmail size={15} />
//                                         </div>
//                                         <input
//                                             type="text"
//                                             value={email}
//                                             onChange={function (e) { setEmail(e.target.value) }}
//                                             required
//                                             id="email"
//                                             className="grow border-none"
//                                             placeholder=""
//                                         />
//                                     </div>
//                                 </div>

//                                 <div className="flex flex-col gap-1">
//                                     <label htmlFor="username" className="text-sm font-medium text-gray-700">Username</label>
//                                     <div className="input input-bordered flex items-center gap-2 rounded-full">
//                                         <div className="">
//                                             <FaUserAlt size={15} />
//                                         </div>
//                                         <input
//                                             type="text"
//                                             value={username}
//                                             onChange={function (e) { setUsername(e.target.value) }}
//                                             required
//                                             id="username"
//                                             className="grow border-none"
//                                             placeholder=""
//                                         />
//                                     </div>
//                                 </div>

//                                 <div className="flex flex-col gap-1">
//                                     <label htmlFor="password" className="text-sm font-medium text-gray-700">Password</label>
//                                     <div className="input input-bordered flex items-center gap-2 rounded-full">
//                                         <div className="">
//                                             <FaKey size={15} />
//                                         </div>
//                                         <input
//                                             type="password"
//                                             value={password}
//                                             onChange={function (e) { setPassword(e.target.value) }}
//                                             required
//                                             id="password"
//                                             className="grow border-none"
//                                             placeholder=""
//                                         />
//                                     </div>
//                                 </div>
//                             </div>

//                             <div className="mt-6 w-[90%]  text-center">
//                                 <button type="submit" className="bg-our_red border-2 border-our_red text-white  font-nunito font-bold py-2 px-14 rounded-full hover:bg-white hover:text-our_red hover:border-2 hover:border-our_red hover:font-bold transition"
//                                 >Register</button>
//                                 <p className="text-xs mt-2">
//                                     Are you already register?{" "}
//                                     <Link to="/recipient_login" className="text-our_red font-bold hover:underline">
//                                         Login
//                                     </Link>
//                                 </p>
//                             </div>
//                         </form>

//                     </div>
//                 </div>

//             </div>





//         </div>
//     )





// }

// export default Recipient_Signup



































import React, { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
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



// import {
//     FaKey, FaUserAlt, FaPhoneVolume, FaPerson,
//     FaRegAddressBook, MdEmail, IoArrowUndo
// } from "react-icons/all";

function Recipient_Signup() {
    const [formData, setFormData] = useState({
        name: "",
        gender: "",
        age: "",
        phone: "",
        address: "",
        profile_photo: null,
        email: "",
        username: "",
        password: ""
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleFileChange = (e) => {
        setFormData(prev => ({
            ...prev,
            profile_photo: e.target.files[0]
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData();
        for (const key in formData) {
            if (formData[key] !== null && formData[key] !== "") {
                data.append(key, formData[key]);
            }
        }
        data.append("person", "recipient");

        try {
            const res = await axios.post(`http://localhost:5000/recipient/signup`, data);
            if (res.data.success) {
                toast.success('Registered Successfully!');
                navigate("/recipient_login");
            } else {
                toast.error(res.data.message || "Registration failed");
            }
        } catch (error) {
            console.error(error);
            toast.error(error.response?.data?.message || "Something went wrong");
        }
    };

    return (
        <div className='font-nunito min-h-screen bg-[url("/LogIn.png")] bg-cover bg-center bg-no-repeat'>
            {/* Back Button */}
            <div className='pt-10 pl-4 sm:pl-10 relative z-30'>
                <button
                    onClick={() => navigate("/")}
                    className="bg-white text-our_red rounded-full w-8 h-8 hover:bg-white hover:text-our_red hover:border-2 hover:border-our_red hover:font-bold transition flex items-center justify-center"
                >
                    <IoArrowUndo size={20} />
                </button>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-8 sm:py-12 flex flex-col lg:flex-row items-center justify-center gap-8 sm:gap-12 lg:gap-16">
                {/* Left Side - Motivational Text */}
                <div className="w-full lg:w-1/3 text-center lg:text-left bg-white bg-opacity-70 backdrop-blur-sm p-6 rounded-xl shadow-lg">
                    <h1 className='text-2xl sm:text-3xl font-extrabold mb-4'>
                        <span className='text-our_red'>Every Drop</span> Counts!
                    </h1>
                    <p className='text-sm sm:text-base'>
                        Register as a recipient to connect with blood donors who can help save lives.
                    </p>
                </div>

                {/* Right Side - Form */}
                <div className="w-full lg:w-2/3 max-w-4xl">
                    <div className="bg-white bg-opacity-80 backdrop-blur-lg rounded-xl shadow-2xl p-6 sm:p-8">
                        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-our_red">
                            Recipient Registration
                        </h2>

                        <form onSubmit={handleSubmit} encType="multipart/form-data">
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6'>
                                {/* Name */}
                                <div className="form-control">
                                    {/* <label className="label">
                                        <span className="label-text">Full Name</span>
                                    </label> */}
                                    <div className="input input-bordered flex items-center gap-2 rounded-full">
                                        <FaUserAlt size={14} className="text-gray-500" />
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={(e) => {
                                                const input = e.target.value;
                                                const onlyLetters = input.replace(/[^a-zA-Z\s]/g, '');
                                                if (onlyLetters.length <= 25) {
                                                    handleChange({
                                                        target: {
                                                            name: "name",
                                                            value: onlyLetters
                                                        }
                                                    });
                                                }
                                            }}
                                            required
                                            placeholder="Full Name"
                                            className="w-full border-none focus:outline-none"
                                        />
                                    </div>
                                </div>

                                {/* Gender */}
                                <div className="form-control">
                                    {/* <label className="label">
                                        <span className="label-text">Gender</span>
                                    </label> */}
                                    <select
                                        name="gender"
                                        value={formData.gender}
                                        onChange={handleChange}
                                        required
                                        className="select select-bordered w-full rounded-full"
                                    >
                                        <option value="" disabled>Select Gender</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                    </select>
                                </div>

                                {/* Age */}
                                <div className="form-control">
                                    {/* <label className="label">
                                        <span className="label-text">Age</span>
                                    </label> */}
                                    <div className="input input-bordered flex items-center gap-2 rounded-full">
                                        <FaPerson size={14} className="text-gray-500" />
                                        <input
                                            type="number"
                                            name="age"
                                            value={formData.age}
                                            onChange={(e) => {
                                                const input = e.target.value;
                                                if (input === "" || (input >= 1 && input <= 120)) {
                                                    handleChange({
                                                        target: {
                                                            name: "age",
                                                            value: input
                                                        }
                                                    });
                                                }
                                            }}
                                            required
                                            min="1"
                                            max="120"
                                            placeholder="Age"
                                            className="w-full border-none focus:outline-none"
                                        />
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="form-control">
                                    {/* <label className="label">
                                        <span className="label-text">Phone Number</span>
                                    </label> */}
                                    <div className="input input-bordered flex items-center gap-2 rounded-full">
                                        <FaPhoneVolume size={14} className="text-gray-500" />
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={(e) => {
                                                const input = e.target.value.replace(/\D/g, '');
                                                if (input.length <= 11) {
                                                    handleChange({
                                                        target: {
                                                            name: "phone",
                                                            value: input
                                                        }
                                                    });
                                                }
                                            }}
                                            required
                                            placeholder="Phone Number"
                                            className="w-full border-none focus:outline-none"
                                        />
                                    </div>
                                </div>

                                {/* Address */}
                                <div className="form-control md:col-span-2">
                                    {/* <label className="label">
                                        <span className="label-text">Address</span>
                                    </label> */}
                                    <div className="input input-bordered flex items-center gap-2 rounded-full">
                                        <FaRegAddressBook size={14} className="text-gray-500" />
                                        <input
                                            type="text"
                                            name="address"
                                            value={formData.address}
                                            onChange={handleChange}
                                            required
                                            placeholder="Full Address"
                                            className="w-full border-none focus:outline-none"
                                        />
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="form-control">
                                    {/* <label className="label">
                                        <span className="label-text">Email</span>
                                    </label> */}
                                    <div className="input input-bordered flex items-center gap-2 rounded-full">
                                        <MdEmail size={16} className="text-gray-500" />
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            placeholder="Email"
                                            className="w-full border-none focus:outline-none"
                                        />
                                    </div>
                                </div>

                                {/* Username */}
                                <div className="form-control">
                                    {/* <label className="label">
                                        <span className="label-text">Username</span>
                                    </label> */}
                                    <div className="input input-bordered flex items-center gap-2 rounded-full">
                                        <FaUserAlt size={14} className="text-gray-500" />
                                        <input
                                            type="text"
                                            name="username"
                                            value={formData.username}
                                            onChange={(e) => {
                                                const input = e.target.value;
                                                if (input.length <= 20) {
                                                    handleChange({
                                                        target: {
                                                            name: "username",
                                                            value: input
                                                        }
                                                    });
                                                }
                                            }}
                                            required
                                            placeholder="Username"
                                            className="w-full border-none focus:outline-none"
                                        />
                                    </div>
                                </div>

                                {/* Password */}
                                <div className="form-control">
                                    {/* <label className="label">
                                        <span className="label-text">Password</span>
                                    </label> */}
                                    <div className="input input-bordered flex items-center gap-2 rounded-full">
                                        <FaKey size={14} className="text-gray-500" />
                                        <input
                                            type="password"
                                            name="password"
                                            value={formData.password}
                                            onChange={handleChange}
                                            required
                                            minLength="6"
                                            placeholder="Password"
                                            className="w-full border-none focus:outline-none"
                                        />
                                    </div>
                                </div>

                                {/* Profile Photo */}
                                <div className="form-control md:col-span-2">
                                    {/* <label className="label">
                                        <span className="label-text">Profile Photo</span>
                                    </label> */}
                                    <input
                                        type="file"
                                        name="profile_photo"
                                        onChange={handleFileChange}
                                        accept="image/*"
                                        required
                                        className="file-input file-input-bordered w-full"
                                    />
                                </div>
                            </div>

                            {/* Submit Button */}
                            <div className="mt-8 text-center">
                                <button
                                    type="submit"
                                    className="btn bg-our_red hover:bg-red-700 text-white rounded-full px-8 py-3 font-bold transition-all duration-300 transform hover:scale-105"
                                >
                                    Register Now
                                </button>
                                <p className="text-sm mt-4">
                                    Already registered?{" "}
                                    <Link
                                        to="/recipient_login"
                                        className="text-our_red font-bold hover:underline"
                                    >
                                        Login here
                                    </Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Recipient_Signup;