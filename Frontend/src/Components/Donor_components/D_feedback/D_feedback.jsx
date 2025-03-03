import React, { useEffect, useState } from 'react'
// import Our_Feedback_Testmonials from '../Our_Feedback_Testmonials/Our_Feedback_Testmonials';
import axios from 'axios';
import D_feedback_card from '../D_feedback_card/D_feedback_card';


import { useAuth } from "../../../context/auth";
import Feedback_Review_2 from '../../Feedback_Review_2/Feedback_Review_2';
import Event_Card_2 from '../../Event_Card_2/Event_Card_2';

function D_feedback({ number_of_event_display }) {


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
    const [currentIndex, setCurrentIndex] = useState(0); // Track which events are displayed

    // Fetch events from MongoDB
    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await axios.get("http://localhost:5000/event/get-all"); // Your API route

                console.log("All Events=", response)
                setEvents(response.data.All_Events);
            } catch (error) {
                console.error("Error fetching events:", error);
            }
        };
        fetchEvents();
    }, []);


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
    const nextSlide = () => {
        if (currentIndex + number_of_event_display < array_of_feedback.length) {
            setCurrentIndex(currentIndex + number_of_event_display);
        }
    };

    // Handle Previous Slide
    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - number_of_event_display);
        }
    };




    return (

        <div className='w-full'>

            <div className=" px-16 relative w-[100%] pt-16 overflow-hidden justify-center">


                <h1 className="text-4xl mb-6 font-bold text-center">
                    <span className="text-[#B01030]">All Events</span> of Organizations
                </h1>

                {/* Carousel Wrapper with Animation */}
                <div className=" pb-20 overflow-hidden max-w-full ">


                 


                    <div
                        className="flex gap-4 transition-transform duration-500 ease-in-out"
                        style={{
                            transform: `translateX(-${currentIndex * 100}%)`, // Moves slides based on index
                        }}
                    >




                        {array_of_feedback.map((event, index) => (

                            <div key={event._id} className="bg-blue-400 flex flex-row justify-center items-center px-20 w-[100%] ">

                                <Feedback_Review_2 event={event} />

                            </div>
                        ))}

                    </div>
                    
                </div>


                {/* Navigation Arrows */}
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <button
                        onClick={prevSlide}
                        className="btn btn-circle disabled:opacity-50"
                        disabled={currentIndex === 0}
                    >
                        ❮
                    </button>
                    <button
                        onClick={nextSlide}
                        className="btn btn-circle disabled:opacity-50"
                        disabled={currentIndex + number_of_event_display >= array_of_feedback.length}
                    >
                        ❯
                    </button>
                </div>
            </div>

        </div>

    )
}

export default D_feedback
