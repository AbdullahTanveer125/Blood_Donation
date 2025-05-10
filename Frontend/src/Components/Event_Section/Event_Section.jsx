import React, { useEffect, useState } from 'react'
// import Event_card from '../../Event_card/Event_card'
import axios from 'axios';
import Event_Card from '../Event_card/Event_card';
// import Event_Card_2 from '../Event_Card/Event_Card';
// import Event_Card from '../Event_Card/Event_Card.jsx';

function Event_Section() {


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
// console.log("KKKKKKKKKK=======",events)


    // Your time formatter
    function formatTime(timeString) {
        const [hours, minutes] = timeString.split(':');
        const date = new Date();
        date.setHours(hours);
        date.setMinutes(minutes);

        return date.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit', hour12: true });
    }

    // Your date formatter
    function formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    }
    

    // Now apply to all events
    const formattedEvents = events.map(event => {
        return {
            ...event,
            display_time: formatTime(event.time),
            display_date: formatDate(event.date),
        };
    });

    console.log(formattedEvents);




    return (
        <div className='font-nunito px-40'>
            <h1 className="text-4xl mt-24 mb-10 font-extrabold text-center">
                <span className="text-our_red">Upcoming</span> Events
            </h1>

            <div className="carousel w-full mb-16">



                {formattedEvents.map((event, index) => (
                    <div
                        key={index}
                        id={`slide${index}`}
                        className=" carousel-item relative w-full flex items-center  pt-10"
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
                            <Event_Card event={event} />
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

export default Event_Section
