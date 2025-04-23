import React, { useEffect, useState } from 'react';
import axios from 'axios';
import D_Sidebar from '../Donor_components/D_Sidebar/D_Sidebar';
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";


function All_Event() {
    const [events, setEvents] = useState([]);
    const [showAll, setShowAll] = useState(false);

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


    const visibleEvents = showAll ? events : events.slice(0, 6);

    return (
        <div className='text-center font-nunito'>
            <D_Sidebar />

            <div className='ml-[17.3%] w-[83%] pt-16 px-4'>
                <h1 className='text-3xl font-bold mb-6'>All Events</h1>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-16 px-28'>
                    {visibleEvents.map(event => (
                        <div key={event._id} className='bg-white rounded-2xl shadow-md p-4'>
                            <img
                                src={event.organization_photo || './Home1.jpg'}
                                alt='event'
                                className='rounded-xl w-full h-48 object-cover mb-3'
                            />

                            <div className='flex flex-row gap-7'>

                                <p className='text-sm text-gray-500'>{event.date}</p>
                                <p className='text-sm text-gray-500'>{event.time}</p>
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
                            <button className='mt-3 border-2 border-[#820000] bg-[#820000] hover:bg-white hover:text-[#820000] text-white px-4 py-1 rounded-lg'>
                                See Profile
                            </button>
                        </div>
                    ))}
                </div>

                {!showAll && events.length > 6 && (
                    <button
                        className='mt-16 border-2 border-[#820000] bg-[#820000] text-white hover:bg-white hover:text-[#820000]  px-6 py-2 rounded-full'
                        onClick={() => setShowAll(true)}
                    >
                        See More
                    </button>
                )}
            </div>
        </div>
    );
}

export default All_Event;
