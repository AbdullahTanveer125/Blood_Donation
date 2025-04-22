import React, { useEffect, useState } from 'react'
import Our_Feedback_Card from '../Our_Feedback_Card/Our_Feedback_Card';
import axios from 'axios';

function Our_feedback() {

    const [array_of_our_feedback, setArray_of_our_feedback] = useState([]); // Store events from MongoDB
    const [currentIndex, setCurrentIndex] = useState(0); // Track which events are displayed


    // Fetch our_feedback from MongoDB
    useEffect(() => {
        const fetch_our_feedback = async () => {
            try {
                const response = await axios.get("http://localhost:5000/user/get_our_feedback_user"); // Your API route

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
        // <div className='w-full'>

        //     <div className=" px-16 relative w-100% pt-16 overflow-hidden justify-center">



        //         <h1 className="text-4xl mb-6 font-bold text-center">
        //             <span className="text-[#B01030]">Testimonials</span> / FeedBacks
        //         </h1>

        //         {/* Carousel Wrapper with Animation */}
        //         <div className=" pb-20 overflow-hidden max-w-full ">



        //             <div
        //                 className="flex gap-4 transition-transform duration-500 ease-in-out"
        //                 style={{
        //                     transform: `translateX(-${currentIndex * 33.33}%)`, // Moves slides based on index
        //                 }}
        //             >




        //                 {array_of_our_feedback.map((event, index) => (

        //                     <div key={event._id} className=" flex flex-row justify-center w-[33.33%] flex-shrink-0">

        //                         <Our_Feedback_Card event={event} />

        //                     </div>
        //                 ))}

        //             </div>

        //         </div>


        //         {/* Navigation Arrows */}
        //         <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
        //             <button
        //                 onClick={prevSlide}
        //                 className="btn btn-circle disabled:opacity-50"
        //                 disabled={currentIndex === 0}
        //             >
        //                 ❮
        //             </button>
        //             <button
        //                 onClick={nextSlide}
        //                 className="btn btn-circle disabled:opacity-50"
        //                 disabled={currentIndex + 3 >= array_of_our_feedback.length}
        //             >
        //                 ❯
        //             </button>
        //         </div>
        //     </div>


        // </div>


























        <div className='w-full'>

            <div className=" px-16 relative w-[100%] pt-16 overflow-hidden justify-center ">


                <h1 className="text-4xl mb-16 font-bold text-center">
                    <span className="text-[#820000]">Your</span> Feedbacks
                </h1>




                <div className="pb-20 max-w-full">

                    <div className='flex'>
                        {(array_of_our_feedback.slice(0, 3)).map((event, index) => (
                            <div key={event._id} className=" px-2 w-[100%]">
                                <Our_Feedback_Card event={event} />
                            </div>
                        ))}


                    </div>

                    {/* Show All Button */}
                    {array_of_our_feedback.length > 3 && (
                        <div className="flex justify-center">
                            <button
                                onClick={() => navigate('/all-feedbacks')} // replace with your actual route
                                className="bg-[#820000] text-white px-6 py-2 rounded hover:bg-[#9a4b4b] transition"
                            >
                                Show All
                            </button>
                        </div>
                    )}

                </div>









                {/* Carousel Wrapper with Animation */}
                {/* <div className=" pb-20 overflow-hidden max-w-full ">


                 


                    <div
                        className=""
                    >




                        {array_of_feedback.map((event, index) => (

                            <div key={event._id} className="bg-blue-400 flex flex-row justify-center items-center px-20 w-[100%] ">

                                <Feedback_Review_2 event={event} />



                            </div>
                        ))}

                    </div>
                    
                </div> */}


                {/* Navigation Arrows */}
                {/* <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
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
                </div> */}
            </div>

        </div>
    )

}

export default Our_feedback
