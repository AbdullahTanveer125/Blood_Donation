import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { useAuth } from "../../context/auth";

import image111 from "../../../public/Home2.jpg"

import { Buffer } from "buffer";//mongoDB store image in buffer for but when image get in frontend then image is display in buffer form. So, need to convert "Buffer to toString('base64')" to display image. but good approach is convert image form from "Buffer to toString('base64')" in backend and then send to frontend 


function Events_of_Organization() {

    const [auth] = useAuth(); // Access the auth state

    const [array_of_events, setArray_of_events] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);



    useEffect(() => {

        if (!auth || !auth.user) {
            console.error("Auth or user is not available");
            return <div>Please log in to access this page.</div>;
        }

        if (auth.person != "organization") {
            // console.error("Welcome");
            // return <div>Welcome</div>;
            console.error("You are not organization! Please login as organization to access this page.");
            return <div>You are not organization! Please login as "organization" to access this page.</div>;
        }

        console.log("**************************************")
        console.log(auth)
        console.log("**************************************")

        // get user from auth
        const { user, organization } = auth;
        console.log("*************AAAAAAAAAAAA********************************")
        console.log("user from auth", user._id, user.name, organization.person, organization._id, user)


        const fetchEvents = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/event/get-specific-event/${organization._id}`);


                console.log("********* res.data ********")
                console.log(res.data)
                console.log(res.data.EVENT)
                console.log("organization._id=", organization._id)
                console.log("********* res.data ********")


                setArray_of_events(res.data.modifiedEvents);
            } catch (err) {
                setError("Failed to fetch blood requests.");
            }
        };

        fetchEvents();
    }, []);


    const deleteEvent = async (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete Blood Request?");
        if (!confirmDelete) return;

        try {
            const res = await axios.delete(`http://localhost:5000/event/delete-single-event/${id}`);
            if (res.data.success) {
                // Filter out the deleted request from the state
                setArray_of_events((prev) =>
                    prev.filter((request) => request._id !== id)
                );
                alert("Request deleted successfully.");
                console.log("setArray_of_events", setArray_of_events)
            } else {
                alert("Failed to delete the request.");
            }
        } catch (error) {
            console.error("Error deleting request:", error);
            alert("An error occurred while deleting the request.");
        }
    };

    console.log("Array of Events=", array_of_events)



    return (
        <div>


            {error && <p className="text-center text-red-500">{error}</p>}

            {array_of_events.length === 0 && (
                <p className="text-center text-gray-600">No event found.</p>
            )}



            <div className="card bg-base-100 w-96 shadow-xl">

                {array_of_events.map((request) => (

                    <div className="card bg-base-100 w-96 shadow-xl">
                        <figure>
                            <img className='h-14 w-36'
                                // src={`data:${request.organization_photo.contentType};base64,${Buffer.from(request.organization_photo.data.data).toString("base64")}`}

                                src={request.organization_photo}
                                alt="Organization Photo"
                            // height="300"
                            // width={"350px"}
                            />

                        </figure>

                        {/* <div>{request.organization_photo}</div> */}
                        <div className="card-body">
                            <h1 className="text-4xl text-center bg-slate-400">{request.organization_name}</h1>
                            <p>If a dog chews shoes whose shoes does he choose?</p>


                            <p><span className='font-bold'>Organzation Name:</span> {request.organization_name}</p>
                            {/* <p><span className='font-bold'>Event Name:</span> {request.name}</p> */}
                            <p><span className='font-bold'>Date:</span> {request.date}</p>
                            <p><span className='font-bold'>Time:</span> {request.time}</p>
                            <p><span className='font-bold'>Location:</span> {request.location}</p>
                            <p><span className='font-bold'>Phone:</span> {request.phone}</p>
                            <p className='font-bold'>Description:</p>
                            <p className='pl-5'> {request.description}</p>

                            <div className="card-actions justify-end ">
                                <button className="btn btn-danger mt-4 bg-red-600"
                                    onClick={() => deleteEvent(request._id)}
                                >
                                    Delete Request
                                </button>

                                {/* <button className="btn btn-primary">Buy Now</button> */}
                            </div>
                        </div>
                    </div>

                ))}
            </div>

        </div>
    )
}

export default Events_of_Organization
