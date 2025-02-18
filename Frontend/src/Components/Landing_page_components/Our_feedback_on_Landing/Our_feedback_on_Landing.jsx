import React, { useEffect, useState } from 'react'
import Our_Feedback_Testmonials from '../Our_Feedback_Testmonials/Our_Feedback_Testmonials';
import axios from 'axios';

function Our_feedback_on_Landing() {

    const [array_of_our_feedback, setArray_of_our_feedback] = useState([]); // Store events from MongoDB
    const [currentIndex, setCurrentIndex] = useState(0); // Track which events are displayed


    // Fetch our_feedback from MongoDB
    useEffect(() => {
        const fetch_our_feedback = async () => {
            try {
                const response = await axios.get("http://localhost:5000/our_feedback/get-all"); // Your API route

                console.log("All our_feedback=", response)
                setArray_of_our_feedback(response.data.All_our_feedbacks);
            } catch (error) {
                console.error("Error fetching All_our_feedbacks:", error);
            }
        };
        fetch_our_feedback();
    }, []);

    // Handle Next Slide
    const nextSlide = () => {
        if (currentIndex + 3 < array_of_our_feedback.length) {
            setCurrentIndex(currentIndex + 3);
        }
    };

    // Handle Previous Slide
    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 3);
        }
    };


    return (
        <div className='w-full'>

            <div className=" px-16 relative w-100% pt-16 overflow-hidden justify-center">

                {/* Left Gradient Overlay */}
                <div className="ml-[-40px] absolute left-10 top-0 h-full w-[500px] bg-gradient-to-r from-slate-400 via-transparent to-transparent opacity-50 pointer-events-none"></div>


                <h1 className="text-4xl mb-6 font-bold text-center">
                    <span className="text-[#B01030]">Testimonials</span> / FeedBacks
                </h1>

                {/* Carousel Wrapper with Animation */}
                <div className=" pb-20 overflow-hidden max-w-full ">


                    {/* Left Gradient Overlay */}
                    {/* <div className="absolute left-10 top-0 h-full w-[500px] bg-gradient-to-r from-slate-400 via-transparent to-transparent opacity-50 pointer-events-none"></div> */}


                    <div
                        className="flex gap-4 transition-transform duration-500 ease-in-out"
                        style={{
                            transform: `translateX(-${currentIndex * 33.33}%)`, // Moves slides based on index
                        }}
                    >




                        {array_of_our_feedback.map((event, index) => (

                            <div key={event._id} className="w-[33.33%] flex-shrink-0">

                                <Our_Feedback_Testmonials event={event} />

                            </div>
                        ))}

                    </div>
                    {/* Right Gradient Overlay */}
                    <div className="absolute right-0 top-0 h-full w-[500px] bg-gradient-to-l from-slate-400 via-transparent to-transparent opacity-50 pointer-events-none"></div>
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
                        disabled={currentIndex + 3 >= array_of_our_feedback.length}
                    >
                        ❯
                    </button>
                </div>
            </div>


        </div>
    )

}

export default Our_feedback_on_Landing
