import React, { useEffect } from 'react'

import O_Sidebar from '../O_Sidebar/O_Sidebar'
import Single_Event_Details from '../../Single_Event_Details/Single_Event_Details'


import { useAuth } from "../../../context/auth";
import { useState } from 'react';
import axios from 'axios';

function O_Your_Event() {


    const [auth, setAuth] = useAuth();
    console.log("==== Auth ====", auth.organization._id)
    const organization_id = auth.organization._id

    const [event, setEvent] = useState(null);


    useEffect(() => {
        const fetchEvent = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:5000/event/get-specific-event/${organization_id}`
                );
                setEvent(response.data.modifiedEvents);
                // console.log("== Event ==", response.data)
            } catch (error) {
                console.error("Error fetching event:", error);
            }
        };

        fetchEvent();
    }, [organization_id]);

    console.log("== Event ==", event)
    return (
        <div className='font-nunito'>
            <O_Sidebar />

            <div className='ml-[17.3%] w-[82%] '>

                <div class=" bg-[url('./organization1.png')] bg-cover bg-center h-60 flex flex-col justify-center items-center text-white pt-">
                    {/* <p>Organization Name</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p> */}


                </div>


                <div>
                    {event ? (
                        <Single_Event_Details event={event[0]} />
                    ) : (
                        <p className="text-center text-our_red text-2xl mt-20 font-extrabold">Loading event details...</p>
                    )}
                </div>

            </div>
        </div>
    )
}

export default O_Your_Event




