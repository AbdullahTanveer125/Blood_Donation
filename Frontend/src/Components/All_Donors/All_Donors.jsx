// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { HiMiniArrowLeftStartOnRectangle } from "react-icons/hi2";
// import { MdBloodtype } from "react-icons/md";
// import { FaPhone } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import R_Sidebar from '../Recipient_Components/R_Sidebar/R_Sidebar';

// function All_Donors() {
//     const [allDonors, setAllDonors] = useState([]);
//     const [visibleCount, setVisibleCount] = useState(9); // 3 rows initially
//     const [loading, setLoading] = useState(true); // loading state

//     async function fetchDonors() {
//         try {
//             setLoading(true); // Start loading
//             const res = await axios.get("http://localhost:5000/donor/get-all-donor");
//             if (res.data.success) {
//                 setAllDonors(res.data.All_Donors || []);
//             } else {
//                 alert("Server Error: Something is wrong in All_Donors component!");
//             }
//         } catch (error) {
//             console.error("Error fetching donors:", error);
//         } finally {
//             setLoading(false); // Stop loading
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

//         <div>

//             <div>
//                 <R_Sidebar />
//             </div>


//             <div className='ml-[17.3%] w-[83%] pt-5'>
//                 <div className="text-center mt-10 font-nunito pt-2 min-h-screen">


//                     <h1 className="text-4xl font-extrabold text-center mb-8">
//                         <span className="text-[#820000]">All </span> Donors
//                     </h1>

//                     {loading ? (
//                         <div className="flex justify-center items-center mt-32 gap-2">
//                             <div className="w-4 h-4 bg-[#820000] rounded-full animate-[ping_1s_infinite]"></div>
//                             <div className="w-4 h-4 bg-[#820000] rounded-full animate-[ping_1s_infinite_200ms]"></div>
//                             <div className="w-4 h-4 bg-[#820000] rounded-full animate-[ping_1s_infinite_400ms]"></div>
//                         </div>







//                     ) : (
//                         <>
//                             <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 px-6">
//                                 {allDonors.slice(0, visibleCount).map((donor, index) => (
//                                     <div key={index} className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
//                                         <div className='flex flex-row gap-4 items-center mb-5'>
//                                             <img src={donor.profile_photo || "./user.jpg"} alt="Profile" className='w-12 h-12 rounded-full object-cover' />
//                                             <div>
//                                                 <p className='font-bold'>{donor.username}</p>
//                                                 <p className='text-xs text-gray-500'>{donor.donorDetails.gender}</p>
//                                             </div>
//                                         </div>

//                                         <div className='text-left flex flex-col gap-2 text-gray-600 text-sm'>
//                                             <p><strong>Email:</strong> {donor.email}</p>
//                                             <p className='flex items-center gap-1'><FaPhone size={12} /> {donor.phone}</p>
//                                             <p><strong>Age:</strong> {donor.donorDetails.age}</p>
//                                             <p><strong>Weight:</strong> {donor.donorDetails.weight} kg</p>
//                                             <p className='flex items-center gap-1 text-lg text-black'>
//                                                 Blood Group: {donor.donorDetails.blood_group}
//                                             </p>
//                                         </div>

//                                         <Link
//                                             to="/specific_blood_request"
//                                             state={donor}
//                                             className="font-bold flex justify-center items-center gap-3 border-2 border-[#820000] bg-[#820000] text-white py-2 rounded-md hover:bg-white hover:text-[#820000] transition mt-10"
//                                         >
//                                             See Profile
//                                         </Link>
//                                     </div>
//                                 ))}
//                             </div>

//                             <button
//                                 onClick={handleSeeMore}
//                                 disabled={isAllVisible}
//                                 className={`mt-10 px-6 py-2 font-semibold rounded transition duration-200 ${isAllVisible
//                                     ? "bg-gray-400 text-white cursor-not-allowed"
//                                     : "bg-[#820000] text-white hover:bg-white hover:text-[#820000] border border-[#820000]"
//                                     }`}
//                             >
//                                 {isAllVisible ? "No More Donors" : "See More"}
//                             </button>
//                         </>
//                     )}
//                 </div>
//             </div>


//         </div>

//     );
// }

// export default All_Donors;





















































import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";
import R_Sidebar from '../Recipient_Components/R_Sidebar/R_Sidebar';


import { FaSearch } from "react-icons/fa";

function All_Donors() {
    const [allDonors, setAllDonors] = useState([]);
    const [filteredDonors, setFilteredDonors] = useState(null);
    const [visibleCount, setVisibleCount] = useState(9);
    const [loading, setLoading] = useState(true);

    // Search-related state
    const [showSearchForm, setShowSearchForm] = useState(false);
    const [blood_group, setBlood_group] = useState("");
    const [nearest_hospital, setNearest_hospital] = useState("");

    async function fetchDonors() {
        try {
            setLoading(true);
            const res = await axios.get("http://localhost:5000/donor/get-all-donor");
            if (res.data.success) {
                // console.log("res===",res)
                setAllDonors(res.data.All_Donors || []);
            } else {
                alert("Server Error: Something is wrong in All_Donors component!");
            }
        } catch (error) {
            console.error("Error fetching donors:", error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchDonors();
    }, []);

    const handleSeeMore = () => {
        setVisibleCount(prev => prev + 6);
    };

    const isAllVisible = visibleCount >= (filteredDonors || allDonors).length;

    const handleSearch = () => {
        setLoading(true);
        const filtered = allDonors.filter(donor =>
            (blood_group === "" || donor.donorDetails.blood_group === blood_group) &&
            (nearest_hospital === "" || donor.donorDetails.nearest_hospital === nearest_hospital)
        );
        setTimeout(() => {
            setFilteredDonors(filtered);
            setLoading(false);
            setShowSearchForm(false);
        }, 1000);
    };

    const donorsToShow = filteredDonors !== null ? filteredDonors.slice(0, visibleCount) : allDonors.slice(0, visibleCount);

    return (
        <div>
            <R_Sidebar />

            {showSearchForm && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-8 rounded-lg w-[400px]">
                        <h2 className="text-xl font-bold text-center mb-6 text-our_red">Search Donors</h2>
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-semibold">Blood Group</label>
                                <select
                                    className="w-full px-4 py-2 rounded border-2 border-our_red text-our_red focus:outline-none"
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
                                    className="w-full px-4 py-2 rounded border-2 border-our_red text-our_red focus:outline-none"
                                    value={nearest_hospital}
                                    onChange={(e) => setNearest_hospital(e.target.value)}
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
                                    className="px-4 py-2 bg-our_red text-white rounded hover:bg-red-700"
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

            <div className='ml-[17.3%] w-[82%] pt-5'>
                <div className="text-center mt-10 font-nunito pt-2 min-h-screen">

                    <div className="mb-20">
                        <h1 className='text-2xl font-extrabold'><span className='text-our_red'>Search</span> Donors</h1>

                        <div className='flex flex-row justify-center my-4'>

                            <div
                                onClick={() => setShowSearchForm(true)}
                                className=' w-80 border-2 border-our_red rounded-full h-10 flex flex-row justify-end items-center px-5 hover:cursor-text'><FaSearch color='#820000' /></div>

                        </div>


                    </div>


                    {loading ? (
                        <div className="flex justify-center items-center mt-32 gap-2">
                            <div className="w-4 h-4 bg-our_red rounded-full animate-[ping_1s_infinite]"></div>
                            <div className="w-4 h-4 bg-our_red rounded-full animate-[ping_1s_infinite_200ms]"></div>
                            <div className="w-4 h-4 bg-our_red rounded-full animate-[ping_1s_infinite_400ms]"></div>
                        </div>
                    ) : (
                        <>
                            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 px-6">
                                {donorsToShow.map((donor, index) => (
                                    <div key={index} className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">

                                        {/* {console.log("************ DDonor **",donor)} */}
                                        <div className='flex flex-row gap-4 items-center mb-5'>
                                            <img
                                                src={donor.profile_photo || "/fatima.png"}
                                                alt="Profile"
                                                className='w-12 h-12 rounded-full object-cover'
                                            />
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

                                            <p><strong>Blood Group:</strong> {donor.donorDetails.blood_group} </p>
                                            <p><strong>Location:</strong> {donor.donorDetails.nearest_hospital} </p>
                                        </div>

                                        <Link
                                            to="/specific_donor"
                                            state={donor}
                                            className="font-bold flex justify-center items-center gap-3 border-2 border-our_red bg-our_red text-white py-2 rounded-md hover:bg-white hover:text-our_red transition mt-10"
                                        >
                                            See Profile
                                        </Link>
                                    </div>
                                ))}
                            </div>

                            {filteredDonors !== null && donorsToShow.length === 0 && !loading && (
                                <p className="text-center text-gray-500 mt-10 text-lg">No match result.</p>
                            )}

                            {filteredDonors === null && (
                                <button
                                    onClick={handleSeeMore}
                                    disabled={isAllVisible}
                                    className={`mt-10 px-6 py-2 font-semibold rounded transition duration-200 ${isAllVisible
                                        ? "bg-gray-400 text-white cursor-not-allowed"
                                        : "bg-our_red text-white hover:bg-white hover:text-our_red border border-our_red"
                                        }`}
                                >
                                    {isAllVisible ? "No More Donors" : "See More"}
                                </button>
                            )}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default All_Donors;
