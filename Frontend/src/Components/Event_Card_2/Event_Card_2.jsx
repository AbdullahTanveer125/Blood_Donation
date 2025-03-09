import React, { useEffect, useState } from 'react';
import axios from 'axios';

import image111 from "../../../public/Home2.jpg"
import { IoLocationOutline } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";

function Event_Card_2({event}) {
    

    
    
        // const deleteEvent = async (id) => {
        //     const confirmDelete = window.confirm("Are you sure you want to delete Blood Request?");
        //     if (!confirmDelete) return;
    
        //     try {
        //         const res = await axios.delete(`http://localhost:5000/event/delete-single-event/${id}`);
        //         if (res.data.success) {
        //             // Filter out the deleted request from the state
        //             setArray_of_events((prev) =>
        //                 prev.filter((request) => request._id !== id)
        //             );
        //             alert("Request deleted successfully.");
        //             console.log("setArray_of_events", setArray_of_events)
        //         } else {
        //             alert("Failed to delete the request.");
        //         }
        //     } catch (error) {
        //         console.error("Error deleting request:", error);
        //         alert("An error occurred while deleting the request.");
        //     }
        // };
    
    
    
        return (
            <div className='flex flex-row rounded-full shadow-MD'>
                
                <div className=' max-w-[30%]'>
                    <img src="/Home2.jpg" alt="" className='h-full rounded-xl'/>
                </div>

                <div className='relative flex flex-col flex-grow bg-white p-4 shadow-lg rounded-lg pl-9'>
                    

                    <div className='flex flex-row gap-5  font-nunito font-medium text-sm text-gray-400 mb-'>
                        <div>  {event.date} </div>
                        <div>  {event.time} </div>
                    </div>

                    <div>
                        <div className='text-xl font-bold my-2 text-gray-700'> {event.organization_name} </div>
                        <div className=' mb-1'><span className='text-gray-400 text-sm font-sans flex flex-row items-center gap-2'><IoLocationOutline /> {event.location} </span></div>
                        {/* <div>Location: <span className='text-gray-700 font-sans'> {event.location} </span></div> */}
                        <div> <span className='text-gray-400 text-sm font-sans flex flex-row items-center gap-2'><FaPhone size={10}/> +92{event.phone} </span></div>
                        {/* <div className='mt-2'>Description:</div> */}
                        <div className='font-sans mt-5 mb-14'> {event.description} </div>
                        
                        
                        <button className="mt-6 bg-[#B01030] text-gray-50 px-6 py-2 absolute bottom-5 right-5 rounded-md shadow-md">Sign Up</button>
                        
                    </div>

                </div>
    
    
            </div>
        )
    

    
}

export default Event_Card_2
