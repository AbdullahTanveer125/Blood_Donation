import React, { useEffect, useState } from 'react';
import axios from 'axios';

import image111 from "../../../public/Home2.jpg"
import { IoLocationOutline } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";

function Event_Card({event}) {
    
    
    
        return (
            <div className='flex flex-row rounded  p-1'>
                
                <div className=' max-w-[30%]'>
                    <img src="/Home2.jpg" alt="" className='h-full rounded-xl'/>
                </div>

                <div className='relative flex flex-col flex-grow bg-slate-100 p-4 shadow-lg rounded-lg pl-9'>
                    

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
                        
                        
                        <button className="mt-6 bg-[#820000] text-gray-50 px-6 py-2 absolute bottom-5 right-5 rounded-md shadow-md">Sign Up</button>
                        
                    </div>

                </div>
    
    
            </div>
        )
    

    
}

export default Event_Card
