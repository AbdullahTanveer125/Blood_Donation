// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// import image111 from "../../../public/Home2.jpg"
// import { IoLocationOutline } from "react-icons/io5";
// import { FaPhone } from "react-icons/fa6";
// import { RiArrowRightUpLine } from "react-icons/ri";

// import { useNavigate } from "react-router-dom";


// function Event_Card({event}) {
    
//     const navigate = useNavigate();

    
//         return (
//             <div className='flex flex-row rounded font-nunito  p-1'>
                
//                 <div className=' max-w-[30%]'>
//                     <img src="/Home2.jpg" alt="" className='h-full rounded-xl'/>
//                 </div>

//                 <div className='relative flex flex-col flex-grow bg-slate-50 p-4 shadow-lg rounded-lg pl-9'>
                    

//                     <div className='flex flex-row gap-5 font-medium text-sm text-gray-500 mb-'>
//                         <div>  {event.display_date} </div>
//                         <div>  {event.display_time} </div>
//                     </div>

//                     <div>
//                         <div className='text-xl font-extrabold my-2'> {event.organization_name} </div>
//                         <div className=' mb-1'><span className='text-gray-500 text-sm font-sans flex flex-row items-center gap-2'><IoLocationOutline /> {event.location} </span></div>
//                         {/* <div>Location: <span className='text-gray-700 font-sans'> {event.location} </span></div> */}
//                         <div> <span className='text-gray-500 text-sm font-sans flex flex-row items-center gap-2'><FaPhone size={10}/> +92{event.phone} </span></div>
//                         {/* <div className='mt-2'>Description:</div> */}
//                         <div className='mt-5 mb-14 text-black'> {event.description} </div>
                        
                        
//                         <button 
//                         onClick={() => navigate("/donor_all_event")}
//                         className="mt-6 bg-our_red text-gray-50 px-6 py-2 absolute bottom-5 right-5 rounded-full shadow-md flex flex-row justify-center items-center gap-2">View More <RiArrowRightUpLine size={20}/></button>
                        
//                     </div>

//                 </div>
    
    
//             </div>
//         )
    

    
// }

// export default Event_Card










































import React from 'react';
import { IoLocationOutline } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { RiArrowRightUpLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

function Event_Card({ event }) {
    const navigate = useNavigate();

    return (
        <div className='flex flex-col md:flex-row rounded-lg font-nunito shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300'>
            {/* Image Section */}
            <div className='md:w-1/3 lg:w-2/5 xl:w-1/3 h-48 md:h-auto overflow-hidden'>
                <img 
                    src={event.image || "/Home2.jpg"} 
                    alt={event.organization_name} 
                    className='w-full h-full object-cover'
                    onError={(e) => {
                        e.target.onerror = null; 
                        e.target.src = "/Home2.jpg";
                    }}
                />
            </div>

            {/* Content Section */}
            <div className='flex-grow bg-slate-50 p-4 md:p-6 relative'>
                {/* Date and Time */}
                <div className='flex flex-row gap-3 sm:gap-5 text-xs sm:text-sm text-gray-500 mb-2 flex-wrap'>
                    <div className='flex items-center'>
                        <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path>
                        </svg>
                        {event.display_date}
                    </div>
                    <div className='flex items-center'>
                        <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"></path>
                        </svg>
                        {event.display_time}
                    </div>
                </div>

                {/* Organization Name */}
                <h3 className='text-lg sm:text-xl font-extrabold my-1 line-clamp-1'>{event.organization_name}</h3>

                {/* Location and Phone */}
                <div className='space-y-1 mb-3'>
                    <div className='text-gray-500 text-xs sm:text-sm flex items-center gap-2'>
                        <IoLocationOutline className="flex-shrink-0" />
                        <span className='line-clamp-1'>{event.location}</span>
                    </div>
                    <div className='text-gray-500 text-xs sm:text-sm flex items-center gap-2'>
                        <FaPhone size={10} className="flex-shrink-0" />
                        <span>+92{event.phone}</span>
                    </div>
                </div>

                {/* Description */}
                <div className='text-sm sm:text-base text-gray-700 mb-12 sm:mb-14 line-clamp-3'>
                    {event.description}
                </div>
                
                {/* View More Button */}
                <button 
                    onClick={() => navigate("/donor_all_event")}
                    className="absolute bottom-4 right-4 bg-our_red text-white px-4 py-1 sm:px-6 sm:py-2 rounded-full shadow-md hover:bg-[#700000] transition-colors duration-300 flex items-center gap-1 sm:gap-2 text-xs sm:text-sm"
                >
                    View More <RiArrowRightUpLine size={16} className="mt-0.5" />
                </button>
            </div>
        </div>
    );
}

export default Event_Card;