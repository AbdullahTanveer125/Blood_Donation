import React, { useEffect, useState } from 'react'
// import Our_Feedback_Testmonials from '../Our_Feedback_Testmonials/Our_Feedback_Testmonials';
import axios from 'axios';
import D_feedback_card from '../D_feedback_card/D_feedback_card';

import { MdArrowForwardIos } from "react-icons/md";

import { useAuth } from "../../../context/auth";
import Feedback_Review_2 from '../../Feedback_Review_2/Feedback_Review_2';


function D_feedback() {


    const [auth] = useAuth(); // Access the auth state


    // if (!auth || !auth.user) {
    //     console.error("Auth or user is not available");
    //     return <div>Please log in to access this page.</div>;
    // }

    // if (auth.person != "recipient") {
    //     // console.error("Welcome");
    //     // return <div>Welcome</div>;
    //     console.error("You are not recipient! Please login as Recipient to access this page.");
    //     return <div>You are not recipient! Please login as "Recipient" to access this page.</div>;
    // }

    console.log("************D_Feedback*********************************")
    console.log(auth)
    // get user from auth
    const { user, donor } = auth;
    console.log("*************D_Feedback********************************")
    console.log("user from auth", user._id, user.name, donor.person, donor._id, user)

    const [events, setEvents] = useState([]); // Store events from MongoDB
    const [array_of_feedback, setArray_of_feedback] = useState([]); // Store feedbacks from MongoDB
    // const [currentIndex, setCurrentIndex] = useState(0); // Track which events are displayed



    // Fetch feedback from MongoDB
    useEffect(() => {
        const fetch_feedback = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/feedback/get-all-donor-feedbacks/${donor._id}`); // Your API route

                console.log("All our_feedback=", response)
                setArray_of_feedback(response.data.All_Feedbacks);
            } catch (error) {
                console.error("Error fetching All_our_feedbacks:", error);
            }
        };
        fetch_feedback();
    }, []);

    // Handle Next Slide
    // const nextSlide = () => {
    //     if (currentIndex + number_of_event_display < array_of_feedback.length) {
    //         setCurrentIndex(currentIndex + number_of_event_display);
    //     }
    // };

    // Handle Previous Slide
    // const prevSlide = () => {
    //     if (currentIndex > 0) {
    //         setCurrentIndex(currentIndex - number_of_event_display);
    //     }
    // };




    return (

        <div className='w-full font-nunito'>

            <div className=" px-16 relative w-[100%] pt-16 overflow-hidden justify-center ">


                <h1 className="text-4xl mb-5 font-extrabold text-center">
                    You <span className="text-red-600">Made an</span> Impact
                </h1>
                <div className='flex flex-row justify-center mb-14 text-sm'>
                    <p>
                        Real words from real lives you've touched through your donation.
                    </p>
                </div>




                <div className="pb-20 max-w-full">

                    <div className='flex'>
                        {(array_of_feedback.slice(0, 3)).map((event, index) => (
                            <div key={event._id} className=" px-2 w-[100%]">
                                <D_feedback_card event={event} />
                            </div>
                        ))}


                    </div>

                    {/* Show All Button */}
                    {array_of_feedback.length > 3 && (
                        <div className="flex justify-center">
                            <button
                                onClick={() => navigate('/all-feedbacks')} // replace with your actual route
                                className="bg-red-600 text-white px-6 py-2 hover:bg-white hover:text-red-600 border-2 border-red-600 transition flex flex-row justify-center items-center gap-3 rounded-full"
                            >
                                View All <MdArrowForwardIos />
                            </button>
                        </div>
                    )}

                </div>

            </div>

        </div>

    )
}

export default D_feedback
