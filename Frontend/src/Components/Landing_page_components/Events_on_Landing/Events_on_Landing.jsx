import React, { useEffect, useState } from 'react'
import Event_card from '../../Event_card/Event_card'
import axios from 'axios';

function Events_on_Landing({number_of_event_display}) {

    const [events, setEvents] = useState([]); // Store events from MongoDB
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

    // Handle Next Slide
    const nextSlide = () => {
        if (currentIndex + number_of_event_display < events.length) {
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

            <div className=" px-16 relative w-100% pt-16 overflow-hidden justify-center">

{/* Left Gradient Overlay */}
<div className="ml-[-40px] absolute left-10 top-0 h-full w-[500px] bg-gradient-to-r from-slate-400 via-transparent to-transparent opacity-50 pointer-events-none"></div>


                <h1 className="text-4xl mb-6 font-bold text-center">
                    <span className="text-[#B01030]">All Events</span> of Organizations
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




                        {events.map((event, index) => (

                            <div key={event._id} className="w-[33.33%] flex-shrink-0">

                                <Event_card event={event} />

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
                        disabled={currentIndex + number_of_event_display >= events.length}
                    >
                        ❯
                    </button>
                </div>
            </div>














            {/* 
            <div className=" pt-16 relative w-full">

                <h1 className='text-4xl mb-6 font-bold text-center'>
                    <span className='text-[#B01030]'>All Events</span> of Organizations
                </h1>

                <div className=" carousel flex gap-2 px-8 justify-center "
                    // style={{
                    //     transform: `translateX(-${currentIndex * 33.33}%)`, // Moves slides based on index
                    // }}
                >
                    {events.slice(currentIndex, currentIndex + 3).map((event, index) => (
                        <div key={event._id} className="carousel-item w-[30%] flex-shrink-0">
                            <Event_card event={event} />
                        </div>
                    ))}
                </div> */}

            {/* Navigation Arrows */}
            {/* <div className="absolute left-5 right-5 top-1/2 flex justify-between">
                    <button onClick={prevSlide} className="btn btn-circle disabled:opacity-50" disabled={currentIndex === 0}>
                        ❮
                    </button>
                    <button onClick={nextSlide} className="btn btn-circle disabled:opacity-50" disabled={currentIndex + 3 >= events.length}>
                        ❯
                    </button>
                </div>
            </div> */}







            {/* *****************************************************************
*****************************************************************
*****************************************************************
***************************************************************** */}


            {/* <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
                        className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
                        className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">

                    <Event_card />
                    <Event_card />
                    <Event_card />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">

                    <Event_card />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div> */}






        </div>
    )
}

export default Events_on_Landing
