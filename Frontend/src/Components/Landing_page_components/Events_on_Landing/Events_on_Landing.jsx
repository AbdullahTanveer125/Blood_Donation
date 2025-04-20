import React, { useEffect, useState } from 'react'
// import Event_card from '../../Event_card__/Event_card'
import axios from 'axios';
// import Event_Card from '../../E';
// import Event_Card from '../../Event_Card/Event_Card';

// import Event_Card from '../../';

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

            <div className=" px-16 relative w-[100%] pt-16 overflow-hidden justify-center">


                <h1 className="text-4xl mb-20 font-bold text-center">
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




                        {events.map((event, index) => (

                            <div key={event._id} className="px-20 w-[100%] flex-shrink-0">

                                <Event_Card event={event} />

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
                        disabled={currentIndex + number_of_event_display >= events.length}
                    >
                        ❯
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Events_on_Landing
