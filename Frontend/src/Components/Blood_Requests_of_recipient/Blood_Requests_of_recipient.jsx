import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { useAuth } from "../../context/auth";


function Blood_Requests_of_recipient() {

    const [auth] = useAuth(); // Access the auth state


    // if (!auth || !auth.user) {
    //     console.error("Auth or user is not available");
    //     return <div>Please log in to access this page.</div>;
    // }

    // if (auth.person != "recipient") {
    //     // console.error("Welcome");
    //     // return <div>Welcome</div>;
    //     console.error("You are not recipient! Please login as Recipient to access this page.");
    //     return <div>You are not recipient! Please login as "Recipient" to access this page.</div>;
    // }

    // console.log("************AAAAAAAAAAAAAAAAA*********************************")
    // console.log(auth)
    // // get user from auth
    // const { user, recipient } = auth;
    // console.log("*************AAAAAAAAAAAA********************************")
    // console.log("user from auth", user._id, user.name, recipient.person, recipient._id, user)



    const [bloodRequests, setBloodRequests] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const recipientId = "your_recipient_id"; // Replace this with dynamic logic (e.g., localStorage, props, context)

    useEffect(() => {


        if (!auth || !auth.user) {
            console.error("Auth or user is not available");
            return <div>Please log in to access this page.</div>;
        }

        if (auth.person != "recipient") {
            // console.error("Welcome");
            // return <div>Welcome</div>;
            console.error("You are not recipient! Please login as Recipient to access this page.");
            return <div>You are not recipient! Please login as "Recipient" to access this page.</div>;
        }

        console.log("************AAAAAAAAAAAAAAAAA*********************************")
        console.log(auth)
        // get user from auth
        const { user, recipient } = auth;
        console.log("*************AAAAAAAAAAAA********************************")
        console.log("user from auth", user._id, user.name, recipient.person, recipient._id, user)


        const fetchBloodRequests = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/bloodRequest/get-specific-blood-request/${recipient._id}`);


                console.log("********* res.data ********")
                console.log(res.data)
                console.log(res.data.Blood_Request)
                console.log("********* res.data ********")


                setBloodRequests(res.data.Blood_Request);
            } catch (err) {
                setError("Failed to fetch blood requests.");
            }
        };

        fetchBloodRequests();
    }, []);


    const deleteRequest = async (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete Blood Request?");
        if (!confirmDelete) return;

        try {
            const res = await axios.delete(`http://localhost:5000/bloodRequest/delete-blood-request/${id}`);
            if (res.data.success) {
                // Filter out the deleted request from the state
                setBloodRequests((prev) =>
                    prev.filter((request) => request._id !== id)
                );
                alert("Request deleted successfully.");
                console.log("setBloodRequests", setBloodRequests)
            } else {
                alert("Failed to delete the request.");
            }
        } catch (error) {
            console.error("Error deleting request:", error);
            alert("An error occurred while deleting the request.");
        }
    };




    return (

        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-semibold text-center mb-4">Blood Requests</h2>

            {error && <p className="text-center text-red-500">{error}</p>}

            {bloodRequests.length === 0 && (
                <p className="text-center text-gray-600">No blood requests found.</p>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {bloodRequests.map((request) => (
                    <div className="max-w-sm mx-auto bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
                        <div className="p-5">
                            {/* Blood Group */}
                            <div className="flex justify-between items-center mb-10 gap-10">
                                <h2 className="text-xl font-semibold text-blue-600">
                                    {request.blood_group} Needed!
                                </h2>
                                <span
                                    className={`${request.urgency === "high"
                                        ? "badge badge-error"
                                        : "badge badge-warning"
                                        }`}
                                >
                                    {request.urgency}
                                    {/* <div className="badge badge-error gap-2">
                                    {request.urgency} request.urgency
                                </div> */}
                                </span>

                            </div>

                            {/* Patient Details */}
                            <p className="text-gray-700 text-sm mb-3">
                                <span className="font-semibold">Patient Name:</span> {request.patient_name}
                            </p>

                            {/* Hospital Information */}
                            <p className="text-gray-700 text-sm mb-3">
                                <span className="font-semibold">Hospital:</span> {request.location}
                            </p>

                            {/* Contact Information */}
                            <p className="text-gray-700 text-sm mb-3">
                                <span className="font-semibold">Contact:</span> {request.phone}
                            </p>

                            {/* Blood need date Information */}
                            <p className="text-gray-700 text-sm mb-3">
                                <span className="font-semibold">Blood need date:</span> {request.blood_need_date}
                            </p>

                            {/* Comment Information */}
                            <p className="text-gray-700 text-sm mb-3 w-40 break-words">
                                <span className="font-semibold">Comment:</span> <div className='bg-slate-200 w-[100%] p-2 text-justify'>{request.comment}</div>
                            </p>


                            {/* Call to Action */}
                            <button className="w-full bg-red-600 text-white font-semibold py-2 px-4 mt-3 rounded-lg hover:bg-red-700 transition duration-300">
                                Donate Now
                            </button>

                            <button
                                className="btn btn-danger mt-4"
                                onClick={() => deleteRequest(request._id)}
                            >
                                Delete Request
                            </button>

                        </div>
                    </div>
                ))}
            </div>
        </div>









        // <div className="container mx-auto p-4">
        //     <h2 className="text-2xl font-semibold text-center mb-4">Blood Requests</h2>

        //     {loading && <p className="text-center text-gray-600">Loading...</p>}
        //     {error && <p className="text-center text-red-500">{error}</p>}

        //     {bloodRequests.length === 0 && !loading && (
        //         <p className="text-center text-gray-600">No blood requests found.</p>
        //     )}

        //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        //         {bloodRequests.map((request) => (
        //             <div key={request._id} className="bg-white shadow-md rounded-lg p-4 border">
        //                 <h3 className="text-lg font-semibold text-red-600">Blood Group: {request.blood_group}</h3>
        //                 <p className="text-gray-700">Hospital: {request.location}</p>
        //                 <p className="text-gray-700">Phone: {request.phone}</p>
        //                 <p className="text-gray-700">Status:
        //                     <span className={`ml-2 font-bold ${request.status === "Pending" ? "text-yellow-500" : "text-green-500"}`}>
        //                         {request.status}
        //                     </span>
        //                 </p>
        //                 <p className="text-gray-500 text-sm mt-2">Requested on: {new Date(request.createdAt).toLocaleDateString()}</p>
        //             </div>
        //         ))}
        //     </div>
        // </div>
    );


}

export default Blood_Requests_of_recipient
