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





function Add_Feedback() {

    const [recipient_name, setRecipient_name] = useState("");
    const [comment, setComment] = useState("");
    const [rating, setRating] = useState("");

    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();

        console.log("Form submitted");


        const DATA = {
            recipient_name,
            comment,
            rating
        };
        console.log(DATA)


        try {
            const res = await axios.post(`http://localhost:5000/add-feedback`, DATA);

            console.log("*********************************************");
            console.log("**res", res, "**res.data", res.data, "**res.data.success", res.data.success)
            console.log("*********************************************");

            if (res && res.data.success) {
                toast.success(res.data && res.data.success);//  line:35
                // toast.success(res.data.success && res.data);//  line:36

                navigate("/all_feedbacks");
            } else {
                toast.error(res.data);
            }
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong in Add Add feedback.jsx");
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
                            <label htmlFor="recipient_name" className="text-sm font-medium text-gray-700">recipient Name</label>
                            <div className="input input-bordered flex items-center gap-2">
                                <div className="">
                                    <FaUserAlt />
                                </div>
                                <input
                                    type="text"
                                    value={recipient_name}
                                    onChange={function (e) { setRecipient_name(e.target.value) }}
                                    required
                                    id="recipient_name"
                                    className="grow"
                                    placeholder=""
                                />
                            </div>
                        </div>






                        <div className="flex flex-col gap-1">
                            <label htmlFor="rating" className="text-sm font-medium text-gray-700">Rating</label>
                            <div className="input input-bordered flex items-center gap-2">
                                <div className="">
                                    <MdEmail size={20} />
                                </div>
                                <input
                                    type="text"
                                    value={rating}
                                    onChange={function (e) { setRating(e.target.value) }}
                                    required
                                    id="rating"
                                    className="grow"
                                    placeholder=""
                                />
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
                            >Add Feedback</button>



                        </div>
                    </form>

                </div>


            </div>





        </div>
    )
}

export default Add_Feedback;
