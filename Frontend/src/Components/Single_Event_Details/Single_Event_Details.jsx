import React from 'react';
import { FaPhone, FaMapMarkerAlt, FaEnvelope, FaClock, FaCalendarAlt } from "react-icons/fa";

const Single_Event_Details = ({ event }) => {


    console.log("**** Time ======", event.time)
    console.log("**** Date ======", event.date)

    function formatTime(timeString) {
        const [hours, minutes] = timeString.split(':');
        const date = new Date();
        date.setHours(hours);
        date.setMinutes(minutes);

        return date.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit', hour12: true });
    }
    // const time = "15:30";
    const display_time = (formatTime(event.time)); // like 3:30 PM

    function formatDate(dateString) {
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, '0');   // 25
        const month = String(date.getMonth() + 1).padStart(2, '0'); // 04 (months are 0-based)
        const year = date.getFullYear(); // 2025

        return `${day}/${month}/${year}`;
    }

    // const date = "2025-04-25T19:00:00.000Z";
    const display_date=(formatDate(event.date)); // like 25/04/2025
    

    return (
        <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-8 mt-10 border border-gray-200">

            <div className='text-center'>
                <h2 className="text-3xl font-bold mb-4">{event.name}</h2>
            </div>

            <p className="text-gray-600 text-md mb-2">
                <strong>Organized by:</strong> {event.organization_name}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                <div className="space-y-3">
                    <p className="flex items-center gap-2 text-gray-700">
                        <FaPhone className="" /> <span>{event.phone}</span>
                    </p>
                    {/* <p className="flex items-center gap-2 text-gray-700">
                        <FaEnvelope className="text-[#820000]" /> <span>{event.email}</span>
                    </p> */}
                    <p className="flex items-center gap-2 text-gray-700">
                        <FaMapMarkerAlt className="" /> <span>{event.location}</span>
                    </p>
                </div>

                <div className="space-y-3">
                    <p className="flex items-center gap-2 text-gray-700">
                        <FaCalendarAlt className="" /> <span>{display_date}</span>
                    </p>
                    <p className="flex items-center gap-2 text-gray-700">
                        <FaClock className="" /> <span>{display_time}</span>
                    </p>
                </div>
            </div>

            <div className="mt-6">
                <h3 className="text-xl font-semibold mb-2">Description:</h3>
                <p className="text-gray-700 leading-relaxed pl-28">{event.description}</p>
            </div>
        </div>
    );
};

export default Single_Event_Details;
