import React, { useEffect, useState } from 'react';
import axios from 'axios';

import image111 from "../../../public/Home2.jpg"
import { IoLocationOutline } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { RiArrowRightUpLine } from "react-icons/ri";

import { useNavigate } from "react-router-dom";


function Event_Card({event}) {
    
    const navigate = useNavigate();

    
        return (
            <div className='flex flex-row rounded font-nunito  p-1'>
                
                <div className=' max-w-[30%]'>
                    <img src="/Home2.jpg" alt="" className='h-full rounded-xl'/>
                </div>

                <div className='relative flex flex-col flex-grow bg-slate-100 p-4 shadow-lg rounded-lg pl-9'>
                    

                    <div className='flex flex-row gap-5 font-medium text-sm text-gray-500 mb-'>
                        <div>  {event.display_date} </div>
                        <div>  {event.display_time} </div>
                    </div>

                    <div>
                        <div className='text-xl font-extrabold my-2'> {event.organization_name} </div>
                        <div className=' mb-1'><span className='text-gray-500 text-sm font-sans flex flex-row items-center gap-2'><IoLocationOutline /> {event.location} </span></div>
                        {/* <div>Location: <span className='text-gray-700 font-sans'> {event.location} </span></div> */}
                        <div> <span className='text-gray-500 text-sm font-sans flex flex-row items-center gap-2'><FaPhone size={10}/> +92{event.phone} </span></div>
                        {/* <div className='mt-2'>Description:</div> */}
                        <div className='mt-5 mb-14 text-black'> {event.description} </div>
                        
                        
                        <button 
                        onClick={() => navigate("/donor_all_event")}
                        className="mt-6 bg-our_red text-gray-50 px-6 py-2 absolute bottom-5 right-5 rounded-md shadow-md flex flex-row justify-center items-center gap-2">View More <RiArrowRightUpLine size={20}/></button>
                        
                    </div>

                </div>
    
    
            </div>
        )
    

    
}

export default Event_Card
