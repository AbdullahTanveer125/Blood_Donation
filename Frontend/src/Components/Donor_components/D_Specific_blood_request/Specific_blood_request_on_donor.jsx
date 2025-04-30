import React from 'react'
import { useLocation } from "react-router-dom";

import { useAuth } from "../../../context/auth"; // Import the useAuth hook
import axios from 'axios';

function Specific_blood_request_on_donor({ blood_request }) {


    const [auth, setAuth] = useAuth();
    // console.log("******* Auth ******", auth.donor._id)
    const donor_id = auth.donor._id

    // const { state } = useLocation(); // access the passed `request` object
    // console.log("******* State ******", state)

    // fallback if state is undefined
    // if (!state) {
    //     return <div className="text-center mt-10 text-red-500">No request data found.</div>;
    // }

    // console.log("State=",state)

    const { patient_name, phone, comment, location, blood_group, blood_need_date } = blood_request;

    const notify_Recipient = async () => {
        try {

            const confirmDonate = window.confirm("Are you sure, you already donated this blood request?");
            if (confirmDonate) {

                const res = await axios.post("http://localhost:5000/notification/send", {
                    donor_id,
                    donor_username: auth.user.username,
                    recipient_id: blood_request.recipient_id,
                    blood_request_id: blood_request._id,
                    message: "I fulfilled your blood request. Please confirm it."
                });
                console.log("Notification sent:", res.data);


            }

        } catch (error) {
            console.error("Failed to send notification:", error);
        }
    };




    return (
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-2xl p-6 border border-gray-200 mt-10">
            <h2 className="text-2xl font-semibold mb-4 text-center">
                <span className='text-[#820000]'>Blood </span> Request Information</h2>
            <div className="space-y-2 text-gray-700">
                <p><span className="font-medium">patient_name:</span> {patient_name}</p>
                <p><span className="font-medium">Phone:</span> {phone}</p>
                {/* <p><span className="font-medium">Email:</span> {email}</p> */}
                <p><span className="font-medium">Location:</span> {location}</p>
                <p><span className="font-medium">Blood Group:</span> <span className="text-red-500 font-semibold">{blood_group}</span></p>
                <p><span className="font-medium">Date:</span> {blood_need_date}</p>
            </div>

            <button
                className='border-2 border-[#820000] bg-[#820000] text-[white] hover:bg-white hover:text-[#820000] px-4 m-3'
                onClick={() => notify_Recipient()}>
                I Fulfilled the Request
            </button>
        </div>
    )
}

export default Specific_blood_request_on_donor
