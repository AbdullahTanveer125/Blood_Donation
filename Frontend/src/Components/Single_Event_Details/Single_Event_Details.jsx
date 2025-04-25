import React from 'react';
import { FaPhone, FaMapMarkerAlt, FaEnvelope, FaClock, FaCalendarAlt } from "react-icons/fa";

const Single_Event_Details = ({ event }) => {
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
                        <FaCalendarAlt className="" /> <span>{event.date}</span>
                    </p>
                    <p className="flex items-center gap-2 text-gray-700">
                        <FaClock className="" /> <span>{event.time}</span>
                    </p>
                </div>
            </div>

            <div className="mt-6">
                <h3 className="text-xl font-semibold mb-2">Description</h3>
                <p className="text-gray-700 leading-relaxed">{event.description}</p>
            </div>
        </div>
    );
};

export default Single_Event_Details;
