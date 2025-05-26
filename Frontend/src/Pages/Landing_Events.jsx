import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';

import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import Footer1 from '../Components/Footer1';
import Footer2 from '../Components/Footer2';

import { useNavigate } from 'react-router-dom';

function Landing_Events() {
    const [events, setEvents] = useState([]);
    const [visibleCount, setVisibleCount] = useState(6);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        fetchEvents();
    }, []);

    async function fetchEvents() {
        setLoading(true);
        try {
            const response = await axios.get(`http://localhost:5000/event/get-all`);
            setEvents(response.data.All_Events || []);
        } catch (error) {
            console.error("Error fetching All Events", error);
        } finally {
            setLoading(false);
        }
    }


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

    console.log("aaaaaaaaaaaaa", formattedEvents);

    const handleShowMore = () => {
        setVisibleCount(prev => prev + 6);
    };

    const isAllVisible = visibleCount >= events.length;
    const eventsToShow = formattedEvents.slice(0, visibleCount);


    return (
        <div className="bg-slate-50 font-nunito">




            <nav className="flex justify-between items-center mt-3 mx-8 pr-4 bg-our_red backdrop-blur-md shadow-md rounded-full ">
                <div className="text-xl font-bold text-white flex items-center gap-2">
                    <span className="text-2xl">
                        <img
                            className="w-14"
                            src="./logo.png"
                            alt=""
                        />
                    </span> URGENT DROP
                </div>
                <div className="hidden md:flex space-x-6 text-white font-medium">
                    <Link to="/">Home</Link>
                    <Link to="/about_us">About Us</Link>
                    <Link to="/all_blogs">Blogs</Link>
                    <Link to="/all_events">Events</Link>
                    {/* <Link to="/faqs">FAQs</Link> */}
                </div>
                <div className="flex space-x-4">
                    <button
                        onClick={() => navigate('/login_as_a')}
                        className="text-white border-2 border-white px-4 py-1 rounded-full hover:bg-red-50 hover:text-[#820000] transition">Log In</button>
                    <button
                        onClick={() => navigate('/signup_as_a')}
                        className="bg-white text-[#820000] px-4 py-1 rounded-full hover:bg-gray-200 transition">Sign Up</button>
                </div>
            </nav>



            <div className='min-h-[200px] pl-28 mb-10'>

                <h2 className="text-center text-2xl font-bold mt-16">Upcoming Events</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {eventsToShow.map((event, index) => (
                        <div key={index} className="bg-slate-0 shadow-lg rounded-lg overflow-hidden w-[70%] mt-20">
                            <img src={event.organization_photo || "/organization_default_photo.jpg"} alt="event" className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h3 className="font-bold text-lg text-center mb-4">{event.organization_name}</h3>


                                <div className='space-y-2'>
                                    <p className="text-xs text-gray-600 flex flex-row items-center gap-10">
                                        <p>{event.display_date}</p>
                                        <p>{event.display_time}</p>

                                    </p>
                                    <p className="text-xs text-gray-600 flex flex-row items-center gap-2"><FaLocationDot /> {event.location}</p>
                                    <p className="text-xs text-gray-600 flex flex-row  items-center gap-2"><FaPhoneAlt /> +92 {event.phone}</p>
                                    <p className="pt-4 text-xs">{event.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>


            </div>

            {!loading && (
                <div className="mt-8 mb-20 text-center ">
                    <button
                        onClick={handleShowMore}
                        disabled={isAllVisible}
                        className={`px-6 py-2 rounded ${isAllVisible
                            ? "bg-gray-400 cursor-not-allowed text-white"
                            : "bg-our_red hover:bg-blue-700 text-white"
                            }`}
                    >
                        {isAllVisible ? "No More Events" : "Show More"}
                    </button>
                </div>
            )}

            <Footer1 />
            <Footer2 />

        </div>
    );
}

export default Landing_Events;
