// jb hm form k zrye sy image ko send krty hai backend mey to hm image ki form shahid "object" hoti hai lykin mein image ko backend mey "express_formidable()" ko use kr k or schema mey  following form mey mongoDB mey store krwa raha hu
  
//     organization_photo: {
//         data: Buffer,
//         contentType: String,
//     },

// lykin jb is file mey image ko axios.get k zrye sy hali kiya hai to is ki form "buffer" hi mtlab k jis form mey mongoDB mey store hai lykin jb isi image ko formData k zrye sy backend mey send kro to image send mtlb backend mey req.files mey receive ni hoti. is k liye hm pehly get wali image ko "object" (file) ki form mey convert kry gy or is ka tarika given hai "handleSubmit" waly function mey

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



import { useAuth } from "../../context/auth";



function Add_New_Event() {

    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [phone, setPhone] = useState("");
    const [time, setTime] = useState("");
    const [date, setDate] = useState("");
    const [description, setDescription] = useState("");
    const [organization_photo, setOrganization_photo] = useState(null);


    const [auth] = useAuth(); // Access the auth state

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

    console.log("************AAAAAAAAAAAAAAAAA*********************************")
    console.log(auth)
    // get user from auth
    const { user, organization } = auth;
    console.log("*************AAAAAAAAAAAA********************************")
    console.log("user from auth", user._id, user.name, organization.person, organization._id, user)


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


                console.log("********* res.data vvvvvvvvvvvvv ********")
                console.log(res.data)
                console.log(res.data.organization_photo.profile_photo);
                setOrganization_photo(res.data.organization_photo.profile_photo);
                // console.log("organization_photo:", organization_photo)
                console.log("********* res.data vvvvvvvvvv ********")


                // setBloodRequests(res.data.Blood_Request);
            } catch (err) {
                setError("Failed to get organization profile_photo.");
            }
        };


        console.log("Updated organization_photo:>>>>>>>>>>>>>>>>>>>>>>>>>>");
        get_organization_profile_photo();
        console.log("Updated organization_photo:>>>>>>>>>", organization_photo);
    }, []);


    // Track when organization_photo updates
    useEffect(() => {
        console.log("Updated organization_photo:", organization_photo);
        console.log("data type of organization_photo:", typeof (organization_photo));
    }, [organization_photo]); // Runs when state updates




    const navigate = useNavigate();

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
                            <label htmlFor="name" className="text-sm font-medium text-gray-700">Event Name</label>
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
                            <label htmlFor="time" className="text-sm font-medium text-gray-700">Time</label>
                            <div className="input input-bordered flex items-center gap-2">
                                <div className="">
                                    <FaUserAlt />
                                </div>
                                <input
                                    type="text"
                                    value={time}
                                    onChange={function (e) { setTime(e.target.value) }}
                                    required
                                    id="time"
                                    className="grow"
                                    placeholder=""
                                />
                            </div>
                        </div>


                        <div className="flex flex-col gap-1">
                            <label htmlFor="location" className="text-sm font-medium text-gray-700">location</label>
                            <div className="input input-bordered flex items-center gap-2">
                                <div className="">
                                    <FaUserAlt />
                                </div>
                                <input
                                    type="text"
                                    value={location}
                                    onChange={function (e) { setLocation(e.target.value) }}
                                    required
                                    id="location"
                                    className="grow"
                                    placeholder=""
                                />
                            </div>
                        </div>








                        <div className="flex flex-col gap-1">
                            <label htmlFor="description" className="text-sm font-medium text-gray-700">Description</label>
                            <div className="bg-white flex items-start gap-2">

                                <textarea
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    required
                                    id="description"
                                    className="grow resize-none p-2 outline-none border-0"
                                    placeholder="Enter your description here"
                                    rows={3} // Adjust the number of rows as needed
                                ></textarea>
                            </div>
                        </div>


                        <div className="flex flex-col gap-1">
                            <label htmlFor="date" className="text-sm font-medium text-gray-700">Date</label>
                            <div className="input input-bordered flex items-center gap-2">
                                <input
                                    type="date"
                                    value={date}
                                    onChange={function (e) { setDate(e.target.value) }}
                                    required
                                    id="date"
                                    className="grow"
                                    placeholder="" />
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

export default Add_New_Event
