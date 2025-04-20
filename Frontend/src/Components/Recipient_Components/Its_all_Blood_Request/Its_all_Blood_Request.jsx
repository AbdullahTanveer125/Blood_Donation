// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// import { useAuth } from "../../../context/auth";

// import { confirmAlert } from 'react-confirm-alert';
// import 'react-confirm-alert/src/react-confirm-alert.css'

// function Blood_Requests_of_recipient() {

//     const [auth] = useAuth(); // Access the auth state

//     console.log("Auth=", auth)
//     // console.log("Auth=",auth.recipient._id)

//     const [bloodRequests, setBloodRequests] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);




//     const [showFeedbackForm, setShowFeedbackForm] = useState(false);
//     const [feedbackData, setFeedbackData] = useState({
//         id: '',
//         username: '',
//         description: ''
//     });

//     const recipientId = "your_recipient_id"; // Replace this with dynamic logic (e.g., localStorage, props, context)

//     useEffect(() => {


//         // if (!auth || !auth.user) {
//         //     console.error("Auth or user is not available");
//         //     return <div>Please log in to access this page.</div>;
//         // }

//         // if (auth.person != "recipient") {
//         //     // console.error("Welcome");
//         //     // return <div>Welcome</div>;
//         //     console.error("You are not recipient! Please login as Recipient to access this page.");
//         //     return <div>You are not recipient! Please login as "Recipient" to access this page.</div>;
//         // }

//         console.log("************AAAAAAAAAAAAAAAAA*********************************")
//         console.log(auth)
//         // get user from auth
//         const { user, recipient } = auth;
//         console.log("*************AAAAAAAAAAAA********************************")
//         console.log("user from auth", user._id, user.name, recipient.person, recipient._id, user)


//         const fetchBloodRequests = async () => {
//             try {
//                 const res = await axios.get(`http://localhost:5000/bloodRequest/get-specific-blood-request/${recipient._id}`);


//                 console.log("********* res.data ********")
//                 console.log(res.data)
//                 console.log(res.data.Blood_Request)
//                 console.log("********* res.data ********")


//                 setBloodRequests(res.data.Blood_Request);
//             } catch (err) {
//                 setError("Failed to fetch blood requests.");
//             }
//         };

//         fetchBloodRequests();
//     }, []);





//     const deleteRequest = async (id) => {
//         confirmAlert({
//             title: 'Confirm Delete',
//             message: 'Is your blood request fulfilled?',
//             buttons: [
//                 {
//                     label: 'Yes',
//                     onClick: async () => {

//                         await handleFeedbackForm(id);

//                     }
//                 },
//                 {
//                     label: 'No',
//                     onClick: async () => {

//                         const confirmDelete = window.confirm("Are ypu sure to delete the Blood Request?");
//                         if (!confirmDelete) return;

//                         try {
//                             const res = await axios.delete(`http://localhost:5000/bloodRequest/delete-blood-request/${id}`);
//                             if (res.data.success) {
//                                 setBloodRequests((prev) =>
//                                     prev.filter((request) => request._id !== id)
//                                 );
//                                 alert("Request deleted successfully.");
//                             } else {
//                                 alert("Failed to delete the request.");
//                             }
//                         } catch (error) {
//                             console.error("Error deleting request:", error);
//                             alert("An error occurred while deleting the request.");
//                         }
//                     }
//                 }
//             ]
//         });
//     };

//     const handleFeedbackForm = (id) => {
//         setFeedbackData({ ...feedbackData, id });
//         setShowFeedbackForm(true); // this shows the form
//     };

//     const handleChange = (e) => {
//         setFeedbackData({ ...feedbackData, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         // feedbackData.donor_id=
//         // feedbackData.recipient_id=auth.recipient._id;

//         console.log("Feedback Data:", feedbackData);

//         feedbackData.Blood_Request_id = feedbackData.id

//         console.log("After Feedback Data:", auth.recipient._id, feedbackData.Blood_Request_id);

//         try {
//             const res = await axios.post(
//                 `http://localhost:5000/feedback/add/${auth.recipient._id}/${feedbackData.Blood_Request_id}`,
//                 feedbackData
//               );


//             console.log("res",res)
//             if (res.data.success) {

//                 if (res.data.success) {
//                     setBloodRequests((prev) =>
//                         prev.filter((request) => request._id !== feedbackData.id)
//                     );
//                     alert("Your Blood Request remove successfully.");
//                 } else {
//                     alert("Failed to delete the request.");
//                 }


//             } else {
//                 console.log("*********")
//                 console.log(res.data.message)
//                 console.log("*********")
//                 alert("Failed to add feedback and delete the blood request.");
//             }
//         } catch (error) {
//             console.error("Error in add feedback and deleting request:", error);
//             alert("An error occurred while deleting the request.");
//         }

//         // Reset and close
//         setShowFeedbackForm(false);
//         setFeedbackData({ id: '', username: '', description: '' });
//     };





//     return (

//         <div className="container mx-auto p-4">
//             <h2 className="text-2xl font-semibold text-center mb-4">Blood Requests</h2>

//             {error && <p className="text-center text-red-500">{error}</p>}

//             {bloodRequests.length === 0 && (
//                 <p className="text-center text-gray-600">No blood requests found.</p>
//             )}

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                 {bloodRequests.map((request) => (
//                     <div className="max-w-sm mx-auto bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
//                         <div className="p-5">
//                             {/* Blood Group */}
//                             <div className="flex justify-between items-center mb-10 gap-10">
//                                 <h2 className="text-xl font-semibold text-blue-600">
//                                     {request.blood_group} Needed!
//                                 </h2>
//                                 <span
//                                     className={`${request.urgency === "high"
//                                         ? "badge badge-error"
//                                         : "badge badge-warning"
//                                         }`}
//                                 >
//                                     {request.urgency}
//                                     {/* <div className="badge badge-error gap-2">
//                                     {request.urgency} request.urgency
//                                 </div> */}
//                                 </span>

//                             </div>

//                             {/* Patient Details */}
//                             <p className="text-gray-700 text-sm mb-3">
//                                 <span className="font-semibold">Patient Name:</span> {request.patient_name}
//                             </p>

//                             {/* Hospital Information */}
//                             <p className="text-gray-700 text-sm mb-3">
//                                 <span className="font-semibold">Hospital:</span> {request.location}
//                             </p>

//                             {/* Contact Information */}
//                             <p className="text-gray-700 text-sm mb-3">
//                                 <span className="font-semibold">Contact:</span> {request.phone}
//                             </p>

//                             {/* Blood need date Information */}
//                             <p className="text-gray-700 text-sm mb-3">
//                                 <span className="font-semibold">Blood need date:</span> {request.blood_need_date}
//                             </p>

//                             {/* Comment Information */}
//                             <p className="text-gray-700 text-sm mb-3 w-40 break-words">
//                                 <span className="font-semibold">Comment:</span> <div className='bg-slate-200 w-[100%] p-2 text-justify'>{request.comment}</div>
//                             </p>


//                             {/* Call to Action */}
//                             <button className="w-full bg-red-600 text-white font-semibold py-2 px-4 mt-3 rounded-lg hover:bg-red-700 transition duration-300">
//                                 Donate Now
//                             </button>

//                             <button
//                                 className="btn btn-danger mt-4"
//                                 onClick={() => deleteRequest(request._id)}
//                             >
//                                 Delete Request
//                             </button>

//                         </div>
//                     </div>
//                 ))}



//                 {showFeedbackForm && (
//                     <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
//                         <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg w-96">
//                             <h2 className="text-xl font-bold mb-4">Donor Feedback</h2>

//                             <label className="block mb-2">Donor's username:</label>
//                             <input
//                                 type="text"
//                                 name="username"
//                                 value={feedbackData.username}
//                                 onChange={handleChange}
//                                 className="w-full border border-gray-300 p-2 rounded mb-4"
//                                 required
//                             />

//                             <label className="block mb-2">Feedback:</label>
//                             <textarea
//                                 name="description"
//                                 value={feedbackData.description}
//                                 onChange={handleChange}
//                                 className="w-full border border-gray-300 p-2 rounded mb-4"
//                                 required
//                             />

//                             <div className="flex justify-end gap-4">
//                                 <button
//                                     type="button"
//                                     onClick={() => setShowFeedbackForm(false)}
//                                     className="bg-gray-400 text-white px-4 py-2 rounded"
//                                 >
//                                     Cancel
//                                 </button>
//                                 <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
//                                     Submit
//                                 </button>
//                             </div>
//                         </form>
//                     </div>
//                 )}









//             </div>
//         </div>











//     );


// }

// export default Blood_Requests_of_recipient









































































import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { useAuth } from "../../../context/auth";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

function Blood_Requests_of_recipient() {
    const [auth] = useAuth(); // Access the auth state
    const [bloodRequests, setBloodRequests] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showAll, setShowAll] = useState(false);
    const [showFeedbackForm, setShowFeedbackForm] = useState(false);
    const [feedbackData, setFeedbackData] = useState({
        id: '',
        username: '',
        description: ''
    });

    useEffect(() => {
        const { user, recipient } = auth;

        const fetchBloodRequests = async () => {
            try {
                const res = await axios.get(
                    `http://localhost:5000/bloodRequest/get-specific-blood-request/${recipient._id}`
                );
                setBloodRequests(res.data.Blood_Request);
            } catch (err) {
                setError("Failed to fetch blood requests.");
            }
        };

        fetchBloodRequests();
    }, []);

    const deleteRequest = async (id) => {
        confirmAlert({
            title: 'Confirm Delete',
            message: 'Is your blood request fulfilled?',
            buttons: [
                {
                    label: 'Yes',
                    onClick: async () => {
                        await handleFeedbackForm(id);
                    }
                },
                {
                    label: 'No',
                    onClick: async () => {
                        const confirmDelete = window.confirm("Are you sure to delete the Blood Request?");
                        if (!confirmDelete) return;

                        try {
                            const res = await axios.delete(`http://localhost:5000/bloodRequest/delete-blood-request/${id}`);
                            if (res.data.success) {
                                setBloodRequests((prev) => prev.filter((request) => request._id !== id));
                                alert("Request deleted successfully.");
                            } else {
                                alert("Failed to delete the request.");
                            }
                        } catch (error) {
                            console.error("Error deleting request:", error);
                            alert("An error occurred while deleting the request.");
                        }
                    }
                }
            ]
        });
    };

    const handleFeedbackForm = (id) => {
        setFeedbackData({ ...feedbackData, id });
        setShowFeedbackForm(true);
    };

    const handleChange = (e) => {
        setFeedbackData({ ...feedbackData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        feedbackData.Blood_Request_id = feedbackData.id;

        try {
            const res = await axios.post(
                `http://localhost:5000/feedback/add/${auth.recipient._id}/${feedbackData.Blood_Request_id}`,
                feedbackData
            );

            if (res.data.success) {
                setBloodRequests((prev) =>
                    prev.filter((request) => request._id !== feedbackData.id)
                );
                alert("Your Blood Request removed successfully.");
            } else {
                alert("Failed to add feedback and delete the blood request.");
            }
        } catch (error) {
            console.error("Error in adding feedback and deleting request:", error);
            alert("An error occurred while deleting the request.");
        }

        setShowFeedbackForm(false);
        setFeedbackData({ id: '', username: '', description: '' });
    };

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-semibold text-center mb-12">
                <span className='text-[#820000]'>Your</span> Blood Requests
            </h2>

            {error && <p className="text-center text-red-500">{error}</p>}

            {bloodRequests.length === 0 && (
                <p className="text-center text-gray-600">No blood requests found.</p>
            )}

            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {(showAll ? bloodRequests : bloodRequests.slice(0, 3)).map((request) => (
                    <div key={request._id} className="max-w-lg mx-auto bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
                        <div className="p-5 font-nunito">
                            <div className="flex justify-between items-center mb-10 gap-10">
                                <h2 className="text-xl font-bold ">
                                    {request.blood_group} Needed!
                                </h2>
                                <span
                                    className={`${request.urgency === "high"
                                        ? "text-white bg-[#820000] font-bold badge badge-error"
                                        : "badge badge-warning"
                                        }`}
                                >
                                    {request.urgency}
                                </span>
                            </div>

                            <p className="text-gray-500 text-sm mb-3">
                                <span className="font-semibold  text-gray-800 mr-2">Patient Name: </span> {request.patient_name}
                            </p>

                            <p className="text-gray-500 text-sm mb-3">
                                <span className="font-semibold  text-gray-800 mr-2">Hospital: </span> {request.location}
                            </p>

                            <p className="text-gray-500 text-sm mb-3">
                                <span className="font-semibold text-gray-800 mr-2">Contact: </span> {request.phone}
                            </p>

                            <p className="text-gray-500 text-sm mb-3">
                                <span className="font-semibold text-gray-800 mr-2">Blood need date: </span> {request.blood_need_date}
                            </p>

                            <p className="text-gray-700 text-sm mt-6 mb-3 max-w-64 break-words">
                                <span className="font-extrabold">Comment:</span>
                                <div className='w-full p-2 text-justify'>
                                    {request.comment}
                                </div>
                            </p>

                            {/* <button className="w-full bg-red-600 text-white font-semibold py-2 px-4 mt-3 rounded-lg hover:bg-red-700 transition duration-300">
                                Donate Now
                            </button> */}

                            <button
                                className="w-full py-2 rounded-md bg-[#820000] text-white font-extrabold text-[16px] mt-4 border-2 border-[#820000] hover:bg-white hover:text-[#820000] hover:border-2 hover:border-[#820000] hover:font-extrabold"
                                onClick={() => deleteRequest(request._id)}
                            >
                                Delete Request
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {bloodRequests.length > 3 && (
                <div className="text-center mt-16">
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="bg-[#820000] border-2 border-[#820000] text-white py-2 px-4 rounded   hover:bg-white hover:text-[#820000] hover:border-2 hover:border-[#820000] hover:font-bold transition"
                    >
                        {showAll ? "Show Less" : "Show All"}
                    </button>
                </div>
            )}

            {showFeedbackForm && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg w-96">
                        <h2 className="text-xl font-bold mb-4">Donor Feedback</h2>

                        <label className="block mb-2">Donor's username:</label>
                        <input
                            type="text"
                            name="username"
                            value={feedbackData.username}
                            onChange={handleChange}
                            className="w-full border border-gray-300 p-2 rounded mb-4"
                            required
                        />

                        <label className="block mb-2">Feedback:</label>
                        <textarea
                            name="description"
                            value={feedbackData.description}
                            onChange={handleChange}
                            className="w-full border border-gray-300 p-2 rounded mb-4"
                            required
                        />

                        <div className="flex justify-end gap-4">
                            <button
                                type="button"
                                onClick={() => setShowFeedbackForm(false)}
                                className="bg-gray-400 text-white px-4 py-2 rounded"
                            >
                                Cancel
                            </button>
                            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
}

export default Blood_Requests_of_recipient;
