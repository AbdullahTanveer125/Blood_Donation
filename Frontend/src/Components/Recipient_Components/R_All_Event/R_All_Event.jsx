import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import R_Sidebar from '../R_Sidebar/R_Sidebar';
import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';

function R_All_Event() {

    const navigate = useNavigate();

    const [events, setEvents] = useState([]);
    const [showAll, setShowAll] = useState(false);


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
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();

        return `${day}/${month}/${year}`;
    }

    // Now apply to all events
    const formattedEvents = events.map(event => {
        return {
            ...event,
            display_time: formatTime(event.time),
            display_date: formatDate(event.date),
        };
    });

    // console.log("AAABBBBBB====",formattedEvents);



    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const res = await axios.get('http://localhost:5000/event/get-all'); // Adjust base URL if needed
                setEvents(res.data.All_Events);
                console.log(res.data.All_Events)
            } catch (err) {
                console.error('Error fetching events:', err);
            }
        };

        fetchEvents();
    }, []);


    const visibleEvents = showAll ? formattedEvents : formattedEvents.slice(0, 6);

    const handle_see_profile_click = (e, organization_id) => {
        e.preventDefault(); // Prevent default link behavior

        navigate("/recipient_specific_organization", { state: { organization_id } });

        // const confirmDonate = window.confirm("Are you sure to donate blood?");
        // if (confirmDonate) {
        // }
        // If "No", do nothing (alert automatically closes)
    };

    return (
        <div className='text-center font-nunito'>
            <R_Sidebar />

            <div className='ml-[17.3%] w-[82%] pt-16 px-4'>
                <h1 className='text-3xl font-bold mb-6'>All Events</h1>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-16 px-28'>
                    {visibleEvents.map(event => (
                        <div key={event._id} className='bg-white rounded-2xl shadow-md p-4'>
                            <img
                                src={event.organization_photo || './Home1.jpg'}
                                alt='event'
                                className='rounded-xl w-full h-48 object-cover mb-3'
                            />

                            <div className='font-extrabold text-lg mb-4'>{event.name}</div>

                            <div className='flex flex-row gap-7'>

                                <p className='text-sm text-gray-500'>{event.display_date}</p>
                                <p className='text-sm text-gray-500'>{event.display_time}</p>
                            </div>


                            <div className='flex flex-col items-start my-5'>
                                <h2 className='text-lg font-extrabold'>{event.organization_name}</h2>
                                <p className='text-sm text-gray-600 flex flex-row justify-center items-center gap-2'>
                                    <FaLocationDot /> {event.location}
                                </p>
                                <p className='text-sm text-gray-600  flex flex-row justify-center items-center gap-2'>
                                    <FaPhoneAlt /> {event.phone}
                                </p>
                            </div>

                            <p className='text-sm text-gray-700 mt-2 text-justify'>{event.description}</p>


                            <Link
                                onClick={(e) => handle_see_profile_click(e, event.organization_id)} // or whatever the recipient_id is
                                className="mt-3 flex justify-center items-center gap-3 border-2 border-our_red bg-our_red text-white py-2 rounded-md  hover:bg-white hover:text-our_red transition font-bold"
                            >
                                See Profile
                            </Link>

                        </div>
                    ))}
                </div>

                {!showAll && events.length > 6 && (
                    <button
                        className='mt-16 border-2 border-our_red bg-our_red text-white hover:bg-white hover:text-our_red  px-6 py-2 rounded-full'
                        onClick={() => setShowAll(true)}
                    >
                        See More
                    </button>
                )}
            </div>
        </div>
    );
}

export default R_All_Event;
