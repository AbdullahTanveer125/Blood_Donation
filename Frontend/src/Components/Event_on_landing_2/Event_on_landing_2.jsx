import React, { useEffect, useState } from 'react'
// import Event_card from '../../Event_card/Event_card'
import axios from 'axios';
import Event_Card_2 from '../Event_Card_2/Event_Card_2';

function Event_on_landing_2() {


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
        <div>
            <h1 className="text-4xl mt-24 mb-16 font-bold text-center">
                <span className="text-[#B01030]">All Events</span> of Organizations
            </h1>

            <div className="carousel w-full mb-16">



                {events.map((event, index) => (
                    <div
                        key={index}
                        id={`slide${index}`}
                        className="carousel-item relative w-full flex items-center"
                    >
                        {/* Left Button */}
                        <a
                            href={`#slide${index === 0 ? events.length - 1 : index - 1}`}
                            className="btn btn-circle absolute left-2 z-10"
                        >
                            ❮
                        </a>

                        {/* Image */}
                        {/* <div className="w-full flex justify-center">
                        <img src={image.url} alt={`Slide ${index}`} className="w-3/4" />
                    </div> */}
                        <div className='px-20'>
                            <Event_Card_2 event={event} />
                        </div>

                        {/* Right Button */}
                        <a
                            href={`#slide${(index + 1) % events.length}`}
                            className="btn btn-circle absolute right-2 z-10"
                        >
                            ❯
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Event_on_landing_2
