// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { FaLocationDot } from "react-icons/fa6";
// import { FaPhone } from "react-icons/fa";
// import { MdDateRange, MdBloodtype } from "react-icons/md";
// import { Link } from "react-router-dom";
// import { HiMiniArrowLeftStartOnRectangle } from "react-icons/hi2";
// import D_Sidebar from '../Donor_components/D_Sidebar/D_Sidebar';


// function All_Blood_Request() {
//     const [allRequests, setAllRequests] = useState([]);
//     const [visibleCount, setVisibleCount] = useState(9); // show 3 rows initially (3 x 3)

//     async function fetchRequests() {
//         try {
//             const res = await axios.get(`http://localhost:5000/bloodRequest/get-all-blood-request`);
//             setAllRequests(res.data.All_Blood_Requests || []);
//             console.log("Array of blood requests=", allRequests)
//         } catch (error) {
//             console.error("Error fetching blood requests:", error);
//         }
//     }

//     useEffect(() => {
//         fetchRequests();
//     }, []);



//     const handleSeeMore = () => {
//         setVisibleCount(prev => prev + 6); // show 2 more rows
//     };

//     const isAllVisible = visibleCount >= allRequests.length;

//     return (
//         <div className="text-center font-nunito">
//             <D_Sidebar />
//             {/* <button className="absolute top-6 left-6 bg-[#820000] text-white border-2 border-[#820000] py-2 px-4 rounded hover:bg-white hover:text-[#820000] transition flex flex-row justify-center items-center gap-2 mb-10">
//                 <HiMiniArrowLeftStartOnRectangle size={20} className='font-extrabold' /> Go Back
//             </button> */}

//             <div className='ml-[17.3%] w-[83%] pt-16'>

//                 {/* make search button */}
//                 <div>

//                 </div>

//                 <h1 className="text-4xl font-extrabold text-center mb-8">
//                     <span className="text-[#820000]">All </span> Blood Requests
//                 </h1>

//                 <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 px-6">
//                     {allRequests.slice(0, visibleCount).map((request, index) => (
//                         <div key={index} className="relative bg-white shadow-lg rounded-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
//                             <span className={`absolute top-3 right-3 badge badge-secondary px-3 py-1 text-white rounded-full text-xs ${request.urgency === "high" ? "bg-[#820000] border border-[#820000]" : request.urgency === "low" ? "bg-green-600" : "bg-yellow-500"}`}>
//                                 {request.urgency}
//                             </span>

//                             <div className='flex flex-row gap-4 items-center mb-5'>
//                                 <img src="./user.jpg" alt="" className='w-12 rounded-full' />
//                                 <div className='text-start'>
//                                     <p className='font-bold'>{request.patient_name} </p>
//                                     <p className='text-xs text-gray-500'>some text</p>
//                                 </div>
//                             </div>

//                             <div className='flex flex-col gap-2 text-left'>
//                                 <div className='flex items-center gap-2 text-sm text-gray-500'><FaLocationDot size={13} /> {request.location}</div>
//                                 <div className='flex items-center gap-2 text-sm text-gray-500'><FaPhone size={13} /> {request.phone}</div>
//                             </div>

//                             <div className='my-2 flex flex-wrap gap-6 text-gray-500 text-sm'>
//                                 <div className='flex items-center gap-2'><MdDateRange /> {new Date(request.blood_need_date).toLocaleDateString()}</div>
//                                 <div className='flex items-center gap-2 '><MdBloodtype /> {request.blood_group}</div>
//                             </div>

//                             <div className='text-justify text-sm font-nunito mb-6'>
//                                 {request.comment}
//                             </div>

//                             <Link
//                                 to="/specific_blood_request"
//                                 state={request}
//                                 className="flex justify-center items-center gap-3 bg-[#820000] text-white py-2 rounded-md hover:bg-red-800 transition"
//                             >
//                                 Donate
//                             </Link>
//                         </div>
//                     ))}
//                 </div>

//                 <button
//                     onClick={handleSeeMore}
//                     disabled={isAllVisible}
//                     className={`mt-10 px-6 py-2 font-semibold rounded transition duration-200 ${isAllVisible
//                         ? "bg-gray-400 text-white cursor-not-allowed"
//                         : "bg-[#820000] text-white hover:bg-white hover:text-[#820000] border border-[#820000]"
//                         }`}
//                 >
//                     {isAllVisible ? "No More Requests" : "See More"}
//                 </button>


//             </div>



//         </div>
//     );
// }

// export default All_Blood_Request;































































// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { FaLocationDot } from "react-icons/fa6";
// import { FaPhone } from "react-icons/fa";
// import { MdDateRange, MdBloodtype } from "react-icons/md";
// import { Link } from "react-router-dom";
// import D_Sidebar from '../Donor_components/D_Sidebar/D_Sidebar';

// function All_Blood_Request() {
//     const [allRequests, setAllRequests] = useState([]);
//     const [filteredRequests, setFilteredRequests] = useState([]);
//     const [visibleCount, setVisibleCount] = useState(9);
//     const [showSearchForm, setShowSearchForm] = useState(false);
//     const [blood_group, setBlood_group] = useState("");
//     const [location, setLocation] = useState("");

//     async function fetchRequests() {
//         try {
//             const res = await axios.get(`http://localhost:5000/bloodRequest/get-all-blood-request`);
//             setAllRequests(res.data.All_Blood_Requests || []);
//         } catch (error) {
//             console.error("Error fetching blood requests:", error);
//         }
//     }

//     useEffect(() => {
//         fetchRequests();
//     }, []);

//     const handleSeeMore = () => {
//         setVisibleCount(prev => prev + 6);
//     };

//     const isAllVisible = visibleCount >= allRequests.length;

//     const handleSearch = async () => {
//         try {
//             const res = await axios.get(`http://localhost:5000/bloodRequest/get-all-blood-request`);
//             const all = res.data.All_Blood_Requests || [];
//             const filtered = all.filter(req =>
//                 req.blood_group === blood_group && req.location === location
//             );
//             setFilteredRequests(filtered);
//             setShowSearchForm(false);
//         } catch (error) {
//             console.error("Error filtering requests:", error);
//         }
//     };

//     return (
//         <div className="text-center font-nunito">
//             <D_Sidebar />

//             {showSearchForm && (
//                 <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//                     <div className="bg-white p-8 rounded-lg w-[400px]">
//                         <h2 className="text-xl font-bold text-center mb-6 text-[#820000]">Search Blood Request</h2>
//                         <div className="flex flex-col gap-4">
//                             <div className="flex flex-col gap-2">
//                                 <label className="text-sm font-semibold">Blood Group</label>
//                                 <select
//                                     className="w-full px-4 py-2 rounded border-2 border-[#820000] text-[#820000] focus:outline-none"
//                                     value={blood_group}
//                                     onChange={(e) => setBlood_group(e.target.value)}
//                                 >
//                                     <option value="">Select</option>
//                                     <option>A+</option>
//                                     <option>A-</option>
//                                     <option>B+</option>
//                                     <option>B-</option>
//                                     <option>O+</option>
//                                     <option>O-</option>
//                                     <option>AB+</option>
//                                     <option>AB-</option>
//                                 </select>
//                             </div>
//                             <div className="flex flex-col gap-2">
//                                 <label className="text-sm font-semibold">Location</label>
//                                 <select
//                                     className="w-full px-4 py-2 rounded border-2 border-[#820000] text-[#820000] focus:outline-none"
//                                     value={location}
//                                     onChange={(e) => setLocation(e.target.value)}
//                                 >
//                                     <option value="">Select</option>
//                                     <option>Jinnah</option>
//                                     <option>Service</option>
//                                     <option>Childern</option>
//                                     <option>Other</option>
//                                 </select>
//                             </div>
//                             <div className="flex justify-between mt-4">
//                                 <button
//                                     className="px-4 py-2 bg-[#820000] text-white rounded hover:bg-red-700"
//                                     onClick={handleSearch}
//                                 >
//                                     Search
//                                 </button>
//                                 <button
//                                     className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
//                                     onClick={() => setShowSearchForm(false)}
//                                 >
//                                     Cancel
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             )}

//             <div className='ml-[17.3%] w-[83%] pt-16'>
//                 <div className="text-right mb-6">
//                     <button
//                         className="px-6 py-2 font-semibold bg-[#820000] text-white rounded hover:bg-white hover:text-[#820000] border border-[#820000] transition"
//                         onClick={() => setShowSearchForm(true)}
//                     >
//                         Search Request
//                     </button>
//                 </div>

//                 <h1 className="text-4xl font-extrabold text-center mb-8">
//                     <span className="text-[#820000]">All </span> Blood Requests
//                 </h1>

//                 <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 px-6">
//                     {(filteredRequests.length > 0 ? filteredRequests : allRequests.slice(0, visibleCount)).map((request, index) => (
//                         <div key={index} className="relative bg-white shadow-lg rounded-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
//                             <span className={`absolute top-3 right-3 badge badge-secondary px-3 py-1 text-white rounded-full text-xs ${request.urgency === "high" ? "bg-[#820000] border border-[#820000]" : request.urgency === "low" ? "bg-green-600" : "bg-yellow-500"}`}>
//                                 {request.urgency}
//                             </span>

//                             <div className='flex flex-row gap-4 items-center mb-5'>
//                                 <img src="./user.jpg" alt="" className='w-12 rounded-full' />
//                                 <div className='text-start'>
//                                     <p className='font-bold'>{request.patient_name} </p>
//                                     <p className='text-xs text-gray-500'>some text</p>
//                                 </div>
//                             </div>

//                             <div className='flex flex-col gap-2 text-left'>
//                                 <div className='flex items-center gap-2 text-sm text-gray-500'><FaLocationDot size={13} /> {request.location}</div>
//                                 <div className='flex items-center gap-2 text-sm text-gray-500'><FaPhone size={13} /> {request.phone}</div>
//                             </div>

//                             <div className='my-2 flex flex-wrap gap-6 text-gray-500 text-sm'>
//                                 <div className='flex items-center gap-2'><MdDateRange /> {new Date(request.blood_need_date).toLocaleDateString()}</div>
//                                 <div className='flex items-center gap-2 '><MdBloodtype /> {request.blood_group}</div>
//                             </div>

//                             <div className='text-justify text-sm font-nunito mb-6'>
//                                 {request.comment}
//                             </div>

//                             <Link
//                                 to="/specific_blood_request"
//                                 state={request}
//                                 className="flex justify-center items-center gap-3 bg-[#820000] text-white py-2 rounded-md hover:bg-red-800 transition"
//                             >
//                                 Donate
//                             </Link>
//                         </div>
//                     ))}
//                 </div>

//                 {filteredRequests.length === 0 && (
//                     <button
//                         onClick={handleSeeMore}
//                         disabled={isAllVisible}
//                         className={`mt-10 px-6 py-2 font-semibold rounded transition duration-200 ${isAllVisible
//                             ? "bg-gray-400 text-white cursor-not-allowed"
//                             : "bg-[#820000] text-white hover:bg-white hover:text-[#820000] border border-[#820000]"
//                             }`}
//                     >
//                         {isAllVisible ? "No More Requests" : "See More"}
//                     </button>
//                 )}

//             </div>
//         </div>
//     );
// }

// export default All_Blood_Request;



















































































import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { MdDateRange, MdBloodtype } from "react-icons/md";
import { Link } from "react-router-dom";
import D_Sidebar from '../Donor_components/D_Sidebar/D_Sidebar';
import { useNavigate } from 'react-router-dom';



function All_Blood_Request() {

    const navigate = useNavigate();

    const [allRequests, setAllRequests] = useState([]);
    const [filteredRequests, setFilteredRequests] = useState(null); // null = no search performed
    const [visibleCount, setVisibleCount] = useState(9);
    const [showSearchForm, setShowSearchForm] = useState(false);
    const [blood_group, setBlood_group] = useState("");
    const [location, setLocation] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchRequests();
    }, []);

    async function fetchRequests() {
        setLoading(true)
        try {
            const res = await axios.get(`http://localhost:5000/bloodRequest/get-all-blood-request`);
            console.log("Check==========", res.data.All_Blood_Request)
            setAllRequests(res.data.All_Blood_Requests || []);
        } catch (error) {
            console.error("Error fetching blood requests:", error);
        } finally {
            setLoading(false)
        }
    }

    const handleSeeMore = () => {
        setVisibleCount(prev => prev + 6);
    };

    const isAllVisible = visibleCount >= allRequests.length;

    const handleSearch = async () => {
        setLoading(true);
        try {
            // const res = await axios.get(`http://localhost:5000/bloodRequest/get-all-blood-request`);
            // const all = res.data.All_Blood_Requests || [];

            // const filtered = all.filter(req =>
            //     req.blood_group === blood_group && req.location === location
            // );


            const filtered = allRequests.filter(req =>
                (blood_group === "" || req.blood_group === blood_group) &&
                (location === "" || req.location === location)
            );


            setTimeout(() => {
                setFilteredRequests(filtered); // set empty array if no match
                setLoading(false);
                setShowSearchForm(false);
            }, 1000);
        } catch (error) {
            console.error("Error filtering requests:", error);
            setLoading(false);
        }
    };

    // Determine which requests to show
    const requestsToShow = filteredRequests !== null
        ? filteredRequests
        : allRequests.slice(0, visibleCount);


    const handleDonateClick = (e, recipient_id, blood_request) => {
        e.preventDefault(); // Prevent default link behavior
        
        console.log("<<<<<<< blood_group >>>>>>",blood_request)
        const confirmDonate = window.confirm("Are you sure to donate blood?");
        if (confirmDonate) {
            navigate("/specific_recipient", {
                state: {
                    recipient_id,
                    blood_request,
                }
            });
        }
        // If "No", do nothing (alert automatically closes)
    };


    console.log("Array of blood group=", allRequests)


    return (
        <div className="text-center font-nunito">
            <D_Sidebar />

            {showSearchForm && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-8 rounded-lg w-[400px]">
                        <h2 className="text-xl font-bold text-center mb-6 text-[#820000]">Search Blood Request</h2>
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-semibold">Blood Group</label>
                                <select
                                    className="w-full px-4 py-2 rounded border-2 border-[#820000] text-[#820000] focus:outline-none"
                                    value={blood_group}
                                    onChange={(e) => setBlood_group(e.target.value)}
                                >
                                    <option value="">Select</option>
                                    <option>A+</option>
                                    <option>A-</option>
                                    <option>B+</option>
                                    <option>B-</option>
                                    <option>O+</option>
                                    <option>O-</option>
                                    <option>AB+</option>
                                    <option>AB-</option>
                                </select>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-semibold">Location</label>
                                <select
                                    className="w-full px-4 py-2 rounded border-2 border-[#820000] text-[#820000] focus:outline-none"
                                    value={location}
                                    onChange={(e) => setLocation(e.target.value)}
                                >
                                    <option value="">Select</option>
                                    <option>Jinnah</option>
                                    <option>Service</option>
                                    <option>Childern</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <div className="flex justify-between mt-4">
                                <button
                                    className="px-4 py-2 bg-[#820000] text-white rounded hover:bg-red-700"
                                    onClick={handleSearch}
                                >
                                    Search
                                </button>
                                <button
                                    className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                                    onClick={() => setShowSearchForm(false)}
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <div className='ml-[17.3%] w-[83%] pt-16'>
                <div className="mb-20">
                    <button
                        className="px-6 py-2 font-semibold bg-[#820000] text-white rounded hover:bg-white hover:text-[#820000] border border-[#820000] transition"
                        onClick={() => setShowSearchForm(true)}
                    >
                        Search Request
                    </button>
                </div>

                <h1 className="text-4xl font-extrabold text-center mb-8">
                    <span className="text-[#820000]">All </span> Blood Requests
                </h1>

                {loading ? (
                    <div className="flex justify-center items-center mt-32 gap-2">
                        <div className="w-4 h-4 bg-[#820000] rounded-full animate-[ping_1s_infinite]"></div>
                        <div className="w-4 h-4 bg-[#820000] rounded-full animate-[ping_1s_infinite_200ms]"></div>
                        <div className="w-4 h-4 bg-[#820000] rounded-full animate-[ping_1s_infinite_400ms]"></div>
                    </div>
                ) : (
                    <>
                        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 px-6">
                            {requestsToShow.map((request, index) => (
                                <div key={index} className="relative bg-white shadow-lg rounded-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
                                    <span className={`absolute top-3 right-3 badge badge-secondary px-3 py-1 text-white rounded-full text-xs ${request.urgency === "high" ? "bg-[#820000] border border-[#820000]" : request.urgency === "low" ? "bg-green-600" : "bg-yellow-500"}`}>
                                        {request.urgency}
                                    </span>

                                    <div className='flex flex-row gap-4 items-center mb-5'>
                                        <img src={request.profile_photo || "/user.jpg"} alt="" className='w-12 rounded-full' />
                                        <div className='text-start'>
                                            <p className='font-bold'>{request.patient_name} </p>
                                            <p className='text-xs text-gray-500'>some text</p>
                                        </div>
                                    </div>

                                    <div className='flex flex-col gap-2 text-left'>
                                        <div className='flex items-center gap-2 text-sm text-gray-500'><FaLocationDot size={13} /> {request.location}</div>
                                        <div className='flex items-center gap-2 text-sm text-gray-500'><FaPhone size={13} /> {request.phone}</div>
                                    </div>

                                    <div className='my-2 flex flex-wrap gap-6 text-gray-500 text-sm'>
                                        <div className='flex items-center gap-2'><MdDateRange /> {new Date(request.blood_need_date).toLocaleDateString()}</div>
                                        <div className='flex items-center gap-2 '><MdBloodtype /> {request.blood_group}</div>
                                    </div>

                                    <div className='text-justify text-sm font-nunito mb-6'>
                                        {request.comment}
                                    </div>

                                    <Link
                                        onClick={(e) => handleDonateClick(e, request.recipient_id, request)} // or whatever the recipient_id is
                                        className="flex justify-center items-center gap-3 bg-[#820000] text-white py-2 rounded-md hover:bg-red-800 transition"
                                    >
                                        Donate
                                    </Link>
                                </div>
                            ))}
                        </div>

                        {filteredRequests !== null && requestsToShow.length === 0 && !loading && (
                            <p className="text-center text-gray-500 mt-10 text-lg">No match result.</p>
                        )}

                        {filteredRequests === null && (
                            <button
                                onClick={handleSeeMore}
                                disabled={isAllVisible}
                                className={`mt-10 px-6 py-2 font-semibold rounded transition duration-200 ${isAllVisible
                                    ? "bg-gray-400 text-white cursor-not-allowed"
                                    : "bg-[#820000] text-white hover:bg-white hover:text-[#820000] border border-[#820000]"
                                    }`}
                            >
                                {isAllVisible ? "No More Requests" : "See More"}
                            </button>
                        )}
                    </>
                )}
            </div>
        </div>
    );
}

export default All_Blood_Request;
