import React, { useEffect, useState } from 'react';
import axios from 'axios';
import D_Sidebar from '../D_Sidebar/D_Sidebar';
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { RiArrowRightUpLine } from "react-icons/ri";

function D_All_Event() {

    const navigate = useNavigate();

    const [events, setEvents] = useState([]);
    const [showAll, setShowAll] = useState(false);
    const [loading, setLoading] = useState(false);


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






    useEffect(() => {
        const fetchEvents = async () => {
            setLoading(true)
            try {
                const res = await axios.get('http://localhost:5000/event/get-all'); // Adjust base URL if needed
                setEvents(res.data.All_Events);
                console.log(res.data.All_Events)
                setLoading(false);
            } catch (err) {
                console.error('Error fetching events:', err);
                setLoading(false);
            }
        };

        fetchEvents();
    }, []);


    const visibleEvents = showAll ? formattedEvents : formattedEvents.slice(0, 6);


    const handle_see_profile_click = (e, organization_id) => {
        e.preventDefault(); // Prevent default link behavior

        navigate("/specific_organization", { state: { organization_id } });

        // const confirmDonate = window.confirm("Are you sure to donate blood?");
        // if (confirmDonate) {
        // }
        // If "No", do nothing (alert automatically closes)
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center mt-32 gap-2">
                <div className="w-4 h-4 bg-our_red rounded-full animate-[ping_1s_infinite]"></div>
                <div className="w-4 h-4 bg-our_red rounded-full animate-[ping_1s_infinite_200ms]"></div>
                <div className="w-4 h-4 bg-our_red rounded-full animate-[ping_1s_infinite_400ms]"></div>
            </div>
        )
    }

    return (
        <div className='text-center font-nunito'>
            <D_Sidebar />

            <div className='ml-[17.3%] w-[83%] pt-16 px-4'>
                <h1 className='text-3xl font-bold mb-6'>Upcoming Events</h1>
                <div className='flex flex-row justify-center mb-10'>
                    <p className='w-[40%]'>Stay informed and join hands with organizations hosting blood donation events in your area.</p>

                </div>
                {/* Check if events array is empty */}
                {events.length === 0 ? (
                    <div className="text-2xl text-gray-600 font-semibold mt-20">
                        There is no Event.
                    </div>
                ) : (
                    <>
                        <div className='grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 px-28'>
                            {visibleEvents.map(event => (
                                <div key={event._id} className='bg-gray-200 rounded-2xl shadow-xl flex flex-row gap-5'>

                                    <img
                                        src={event.organization_photo || './Home1.jpg'}
                                        alt='event'
                                        className='rounded-xl w-[30%] h-full object-cover mb-3'
                                    />

                                    <div className='p-4'>

                                        <div className='font-extrabold text-lg mb-4'>{event.name}</div>
                                        <div className='flex flex-row gap-7'>

                                            <p className='text-xs text-gray-500'>{event.display_date}</p>
                                            <p className='text-xs text-gray-500'>{event.display_time}</p>
                                        </div>
                                        <div className='flex flex-col items-start my-'>
                                            <h2 className='text-lg font-extrabold'>{event.organization_name}</h2>
                                            <p className='text-xs text-gray-600 flex flex-row justify-center items-center gap-2'>
                                                <FaLocationDot /> {event.location}
                                            </p>
                                            <p className='text-xs text-gray-600 flex flex-row justify-center items-center gap-2'>
                                                <FaPhoneAlt /> {event.phone}
                                            </p>
                                        </div>
                                        <p className='text-sm text-gray-700 mt-5 text-justify'>{event.description}</p>

                                        {/* <button className='mt-3 border-2 border-our_red bg-our_red hover:bg-white hover:text-our_red text-white px-4 py-1 rounded-lg'>
                                        See Profile
                                    </button> */}


                                        <div className='flex flex-row justify-end items-center gap-2'>
                                            <Link
                                                onClick={(e) => handle_see_profile_click(e, event.organization_id)} // or whatever the recipient_id is
                                                className="mt-3 flex justify-center items-center gap-3 border-2 border-our_red bg-our_red text-white py-1 px-4 rounded-full  hover:bg-white hover:text-our_red transition font-bold"
                                            >
                                                See Profile <RiArrowRightUpLine size={20} />
                                            </Link>
                                        </div>
                                    </div>

                                </div>
                            ))}
                        </div>

                        {/* See More button only if more than 6 events */}
                        {!showAll && events.length > 6 && (
                            <button
                                className='mt-16 border-2 border-our_red bg-our_red text-white hover:bg-white hover:text-our_red  px-6 py-2 rounded-full'
                                onClick={() => setShowAll(true)}
                            >
                                See More
                            </button>
                        )}
                    </>
                )}
            </div>
        </div>
    );


    // return (
    //     <div className='text-center font-nunito'>
    //         <D_Sidebar />

    //         <div className='ml-[17.3%] w-[83%] pt-16 px-4'>
    //             <h1 className='text-3xl font-bold mb-6'>All Events</h1>

    //             <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-16 px-28'>
    //                 {visibleEvents.map(event => (
    //                     <div key={event._id} className='bg-white rounded-2xl shadow-md p-4'>
    //                         <img
    //                             src={event.organization_photo || './Home1.jpg'}
    //                             alt='event'
    //                             className='rounded-xl w-full h-48 object-cover mb-3'
    //                         />

    //                         <div className='flex flex-row gap-7'>

    //                             <p className='text-sm text-gray-500'>{event.date}</p>
    //                             <p className='text-sm text-gray-500'>{event.time}</p>
    //                         </div>


    //                         <div className='flex flex-col items-start my-5'>
    //                             <h2 className='text-lg font-extrabold'>{event.organization_name}</h2>
    //                             <p className='text-sm text-gray-600 flex flex-row justify-center items-center gap-2'>
    //                                 <FaLocationDot /> {event.location}
    //                             </p>
    //                             <p className='text-sm text-gray-600  flex flex-row justify-center items-center gap-2'>
    //                                 <FaPhoneAlt /> {event.phone}
    //                             </p>
    //                         </div>

    //                         <p className='text-sm text-gray-700 mt-2 text-justify'>{event.description}</p>
    //                         <button className='mt-3 border-2 border-our_red bg-our_red hover:bg-white hover:text-our_red text-white px-4 py-1 rounded-lg'>
    //                             See Profile
    //                         </button>
    //                     </div>
    //                 ))}
    //             </div>

    //             {!showAll && events.length > 6 && (
    //                 <button
    //                     className='mt-16 border-2 border-our_red bg-our_red text-white hover:bg-white hover:text-our_red  px-6 py-2 rounded-full'
    //                     onClick={() => setShowAll(true)}
    //                 >
    //                     See More
    //                 </button>
    //             )}
    //         </div>
    //     </div>
    // );
}

export default D_All_Event;
