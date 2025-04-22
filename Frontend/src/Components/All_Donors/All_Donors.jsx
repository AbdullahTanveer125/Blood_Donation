// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { HiMiniArrowLeftStartOnRectangle } from "react-icons/hi2";
// import { MdBloodtype } from "react-icons/md";
// import { FaPhone } from "react-icons/fa";
// import { Link } from "react-router-dom";


// function All_Donors() {
//     const [allDonors, setAllDonors] = useState([]);
//     const [visibleCount, setVisibleCount] = useState(9); // 3 rows initially

//     async function fetchDonors() {
//         try {
//             const res = await axios.get("http://localhost:5000/donor/get-all-donor"); // Update the endpoint if needed

//             if (res.data.success) {
//                 setAllDonors(res.data.All_Donors || []);
//                 console.log("** res **:", res);
//                 console.log("Donors fetched:", res.data.All_Donors);
//             } else {
//                 alert("Server Error: Something is wrong in All_Donors component!")
//             }

//         } catch (error) {
//             console.error("Error fetching donors:", error);
//         }
//     }

//     useEffect(() => {
//         fetchDonors();
//     }, []);

//     const handleSeeMore = () => {
//         setVisibleCount(prev => prev + 6); // show 2 more rows
//     };

//     const isAllVisible = visibleCount >= allDonors.length;

//     return (
//         <div className="text-center mt-10 font-nunito pt-24">
//             <button className="absolute top-6 left-6 bg-[#820000] text-white border-2 border-[#820000] py-2 px-4 rounded hover:bg-white hover:text-[#820000] transition flex flex-row justify-center items-center gap-2 mb-10">
//                 <HiMiniArrowLeftStartOnRectangle size={20} /> Go Back
//             </button>

//             <h1 className="text-4xl font-extrabold text-center mb-8">
//                 <span className="text-[#820000]">All </span> Donors
//             </h1>

//             <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 px-6">
//                 {allDonors.slice(0, visibleCount).map((donor, index) => (
//                     <div key={index} className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
//                         <div className='flex flex-row gap-4 items-center mb-5'>
//                             <img src={donor.profile_photo || "./user.jpg"} alt="Profile" className='w-12 h-12 rounded-full object-cover' />
//                             <div>
//                                 <p className='font-bold'>{donor.username}</p>
//                                 <p className='text-xs text-gray-500'>{donor.donorDetails.gender}</p>
//                             </div>
//                         </div>

//                         <div className='text-left flex flex-col gap-2 text-gray-600 text-sm'>
//                             <p><strong>Email:</strong> {donor.email}</p>
//                             <p className='flex items-center gap-1'><FaPhone size={12} /> {donor.phone}</p>
//                             <p><strong>Age:</strong> {donor.donorDetails.age}</p>
//                             <p><strong>Weight:</strong> {donor.donorDetails.weight} kg</p>
//                             <p className='flex items-center gap-1 text-lg text-black'>
//                                 {/* <MdBloodtype /> */}
//                                 Blood Group: {donor.donorDetails.blood_group}</p>
//                         </div>


//                         <Link
//                             to="/specific_blood_request"
//                             state={donor}
//                             className="font-bold flex justify-center items-center gap-3 border-2 border-[#820000] bg-[#820000] text-white py-2 rounded-md hover:bg-white hover:text-[#820000] transition mt-10"
//                         >
//                             See Profile
//                         </Link>
//                     </div>
//                 ))}
//             </div>

//             <button
//                 onClick={handleSeeMore}
//                 disabled={isAllVisible}
//                 className={`mt-10 px-6 py-2 font-semibold rounded transition duration-200 ${isAllVisible
//                     ? "bg-gray-400 text-white cursor-not-allowed"
//                     : "bg-[#820000] text-white hover:bg-white hover:text-[#820000] border border-[#820000]"
//                     }`}
//             >
//                 {isAllVisible ? "No More Donors" : "See More"}
//             </button>
//         </div>
//     );
// }

// export default All_Donors;






























































import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { HiMiniArrowLeftStartOnRectangle } from "react-icons/hi2";
import { MdBloodtype } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";

function All_Donors() {
    const [allDonors, setAllDonors] = useState([]);
    const [visibleCount, setVisibleCount] = useState(9); // 3 rows initially
    const [loading, setLoading] = useState(true); // loading state

    async function fetchDonors() {
        try {
            setLoading(true); // Start loading
            const res = await axios.get("http://localhost:5000/donor/get-all-donor");
            if (res.data.success) {
                setAllDonors(res.data.All_Donors || []);
            } else {
                alert("Server Error: Something is wrong in All_Donors component!");
            }
        } catch (error) {
            console.error("Error fetching donors:", error);
        } finally {
            setLoading(false); // Stop loading
        }
    }

    useEffect(() => {
        fetchDonors();
    }, []);

    const handleSeeMore = () => {
        setVisibleCount(prev => prev + 6); // show 2 more rows
    };

    const isAllVisible = visibleCount >= allDonors.length;

    return (
        <div className="text-center mt-10 font-nunito pt-24 min-h-screen">
            <button className="absolute top-6 left-6 bg-[#820000] text-white border-2 border-[#820000] py-2 px-4 rounded hover:bg-white hover:text-[#820000] transition flex flex-row justify-center items-center gap-2 mb-10">
                <HiMiniArrowLeftStartOnRectangle size={20} /> Go Back
            </button>

            <h1 className="text-4xl font-extrabold text-center mb-8">
                <span className="text-[#820000]">All </span> Donors
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
                        {allDonors.slice(0, visibleCount).map((donor, index) => (
                            <div key={index} className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
                                <div className='flex flex-row gap-4 items-center mb-5'>
                                    <img src={donor.profile_photo || "./user.jpg"} alt="Profile" className='w-12 h-12 rounded-full object-cover' />
                                    <div>
                                        <p className='font-bold'>{donor.username}</p>
                                        <p className='text-xs text-gray-500'>{donor.donorDetails.gender}</p>
                                    </div>
                                </div>

                                <div className='text-left flex flex-col gap-2 text-gray-600 text-sm'>
                                    <p><strong>Email:</strong> {donor.email}</p>
                                    <p className='flex items-center gap-1'><FaPhone size={12} /> {donor.phone}</p>
                                    <p><strong>Age:</strong> {donor.donorDetails.age}</p>
                                    <p><strong>Weight:</strong> {donor.donorDetails.weight} kg</p>
                                    <p className='flex items-center gap-1 text-lg text-black'>
                                        Blood Group: {donor.donorDetails.blood_group}
                                    </p>
                                </div>

                                <Link
                                    to="/specific_blood_request"
                                    state={donor}
                                    className="font-bold flex justify-center items-center gap-3 border-2 border-[#820000] bg-[#820000] text-white py-2 rounded-md hover:bg-white hover:text-[#820000] transition mt-10"
                                >
                                    See Profile
                                </Link>
                            </div>
                        ))}
                    </div>

                    <button
                        onClick={handleSeeMore}
                        disabled={isAllVisible}
                        className={`mt-10 px-6 py-2 font-semibold rounded transition duration-200 ${isAllVisible
                            ? "bg-gray-400 text-white cursor-not-allowed"
                            : "bg-[#820000] text-white hover:bg-white hover:text-[#820000] border border-[#820000]"
                            }`}
                    >
                        {isAllVisible ? "No More Donors" : "See More"}
                    </button>
                </>
            )}
        </div>
    );
}

export default All_Donors;
