import React, { useEffect, useState } from 'react';
import axios from 'axios';

import image111 from "../../../public/Home2.jpg"

function Event_card({ event }) {




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
        <div>
            <div className=" max-h-[600px] card border-2 border-gray-400 max-w-96 shadow-xl">
                <figure className='h-[200px]'>
                    <img className='h-[200px] w-full'
                        src={event.organization_photo ? event.organization_photo : image111}
                        alt="Organization Photo"
                    // height={"400px"}
                    // width={"350px"}
                    />

                </figure>

                {/* <div>{request.organization_photo}</div> */}
                <div className="p-2  card-body">
                    <h1 className="text-2xl font-bold py-2 text-center bg-[#EE8A9E] bg-opacity-70">{event.organization_name}</h1>


                    {/* <p><span className='font-bold'>Organzation Name:</span> {event.organization_name}</p> */}
                    {/* <p><span className='font-bold'>Event Name:</span> {request.name}</p> */}

                    <div className='pl-6'>
                        <p><span className='font-bold'>Date:</span> {event.date} </p>
                        <p><span className='font-bold'>Time:</span> {event.time} </p>
                        <p><span className='font-bold'>Location:</span> {event.location} </p>
                        <p><span className='font-bold'>Phone:</span> {event.phone} </p>
                        <p className='font-bold'>Description:</p>
                        <p className='pl-5'> {event.description} </p>
                    </div>

                    {/* <div className=" card-actions justify-end ">
                        <button className="px-4 py-2 mt-4 bg-[#B01030] text-white  rounded-lg"
                        // onClick={() => deleteEvent(request._id)}
                        >
                            Delete Request
                        </button>

                         
                    </div> */}
                </div>
            </div>



        </div>
    )
}

export default Event_card
