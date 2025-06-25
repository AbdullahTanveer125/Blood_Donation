// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// import { Link } from 'react-router-dom';

// import { FaLocationDot } from "react-icons/fa6";
// import { FaPhoneAlt } from "react-icons/fa";
// import Footer1 from '../Components/Footer1';
// import Footer2 from '../Components/Footer2';

// import { motion, AnimatePresence } from "framer-motion";

// import { useNavigate } from 'react-router-dom';

// function Landing_Events() {
//     const [events, setEvents] = useState([]);
//     const [visibleCount, setVisibleCount] = useState(6);
//     const [loading, setLoading] = useState(false);

//     const navigate = useNavigate();

//     useEffect(() => {
//         fetchEvents();
//     }, []);

//     async function fetchEvents() {
//         setLoading(true);
//         try {
//             const response = await axios.get(`http://localhost:5000/event/get-all`);
//             setEvents(response.data.All_Events || []);
//         } catch (error) {
//             console.error("Error fetching All Events", error);
//         } finally {
//             setLoading(false);
//         }
//     }


//     // Your time formatter
//     function formatTime(timeString) {
//         const [hours, minutes] = timeString.split(':');
//         const date = new Date();
//         date.setHours(hours);
//         date.setMinutes(minutes);

//         return date.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit', hour12: true });
//     }

//     // Your date formatter
//     function formatDate(dateString) {
//         const date = new Date(dateString);
//         return date.toLocaleDateString('en-US', {
//             year: 'numeric',
//             month: 'long',
//             day: 'numeric',
//         });
//     }


//     // Now apply to all events
//     const formattedEvents = events.map(event => {
//         return {
//             ...event,
//             display_time: formatTime(event.time),
//             display_date: formatDate(event.date),
//         };
//     });

//     console.log("aaaaaaaaaaaaa", formattedEvents);

//     const handleShowMore = () => {
//         setVisibleCount(prev => prev + 6);
//     };

//     const isAllVisible = visibleCount >= events.length;
//     const eventsToShow = formattedEvents.slice(0, visibleCount);





//     const [showLoginForm, setShowLoginForm] = useState(false);
//     const [showSignupForm, setShowSignupForm] = useState(false);
//     const [selectedOption, setSelectedOption] = useState("");

//     const handleLoginSubmit = () => {
//         if (selectedOption === "option1") navigate("/donor_login");
//         else if (selectedOption === "option2") navigate("/recipient_login");
//         else if (selectedOption === "option3") navigate("/organization_login");
//     };

//     const handleSignupSubmit = () => {
//         if (selectedOption === "option1") navigate("/donor_signup");
//         else if (selectedOption === "option2") navigate("/recipient_signup");
//         else if (selectedOption === "option3") navigate("/organization_signup");
//     };

//     const renderForm = (type) => (
//         <motion.div
//             className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-10 backdrop-blur-sm"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//         >
//             <motion.div
//                 initial={{ scale: 0 }}
//                 animate={{ scale: 1 }}
//                 exit={{ scale: 0 }}
//                 transition={{ duration: 0.4, ease: "easeOut" }}
//                 className="bg-white backdrop-blur-lg border border-white/20 p-8 rounded-lg shadow-lg w-80 relative"
//             >
//                 <button
//                     className="absolute top-2 right-3 text-xl font-bold"
//                     onClick={() => {
//                         setShowLoginForm(false);
//                         setShowSignupForm(false);
//                         setSelectedOption("");
//                     }}
//                 >
//                     ×
//                 </button>

//                 <h2 className="text-2xl text-our_red font-bold text-center mb-6">
//                     {type === "login" ? "Login as a" : "Sig Up as a"}
//                 </h2>

//                 <div className="flex flex-col space-y-3">
//                     {["Donor", "Recipient", "Organization"].map((role, idx) => {
//                         const value = `option${idx + 1}`;
//                         return (
//                             <label key={value} className="flex items-center space-x-2 cursor-pointer">
//                                 <input
//                                     type="radio"
//                                     name={`${type}_selection`}
//                                     value={value}
//                                     onChange={() => setSelectedOption(value)}
//                                     checked={selectedOption === value}
//                                     className="w-5 h-5 text-our_red focus:ring-our_red"
//                                 />
//                                 <span className="text-our_red">{role}</span>
//                             </label>
//                         );
//                     })}
//                 </div>

//                 <div className="flex justify-center mt-6">
//                     <button
//                         onClick={type === "login" ? handleLoginSubmit : handleSignupSubmit}
//                         disabled={!selectedOption}
//                         className={`px-5 py-1 text-sm rounded-full transition duration-300 ${selectedOption
//                             ? "bg-[#820000] border border-[#820000] text-white hover:bg-white hover:text-[#820000] hover:font-bold"
//                             : "bg-gray-300 text-gray-500 cursor-not-allowed"
//                             }`}
//                     >
//                         Submit
//                     </button>
//                 </div>
//             </motion.div>
//         </motion.div>
//     );

//     return (
//         <div className="bg-slate-50 font-nunito">




//             <nav className="flex justify-between items-center mt-3 mx-8 pr-4 bg-our_red backdrop-blur-md shadow-md rounded-full ">
//                 <div className="text-xl font-bold text-white flex items-center gap-2">
//                     <span className="text-2xl">
//                         <img
//                             className="w-14"
//                             src="./logo.png"
//                             alt=""
//                         />
//                     </span> URGENT DROP
//                 </div>
//                 <div className="hidden md:flex space-x-6 text-white font-medium">
//                     <Link to="/">Home</Link>
//                     <Link to="/about_us">About Us</Link>
//                     <Link to="/all_blogs">Blogs</Link>
//                     <Link to="/all_events">Events</Link>
//                     {/* <Link to="/faqs">FAQs</Link> */}
//                 </div>
//                 <div className="flex space-x-4">
//                     <button
//                         onClick={() => setShowLoginForm(true)}
//                         className="text-white border-2 border-white px-4 py-1 rounded-full hover:bg-red-50 hover:text-[#820000] transition">Log In</button>
//                     <button
//                         onClick={() => setShowSignupForm(true)}
//                         className="bg-white text-[#820000] px-4 py-1 rounded-full hover:bg-gray-200 transition">Sign Up</button>
//                 </div>
//             </nav>



//             <div className='min-h-[200px] pl-28 mb-10'>

//                 <h2 className="text-center text-2xl font-bold mt-16">Upcoming Events</h2>

//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                     {eventsToShow.map((event, index) => (
//                         <div key={index} className="bg-slate-0 shadow-lg rounded-lg overflow-hidden w-[70%] mt-20">
//                             <img src={event.organization_photo || "/organization_default_photo.jpg"} alt="event" className="w-full h-48 object-cover" />
//                             <div className="p-4">
//                                 <h3 className="font-bold text-lg text-center mb-4">{event.organization_name}</h3>


//                                 <div className='space-y-2'>
//                                     <p className="text-xs text-gray-600 flex flex-row items-center gap-10">
//                                         <p>{event.display_date}</p>
//                                         <p>{event.display_time}</p>

//                                     </p>
//                                     <p className="text-xs text-gray-600 flex flex-row items-center gap-2"><FaLocationDot /> {event.location}</p>
//                                     <p className="text-xs text-gray-600 flex flex-row  items-center gap-2"><FaPhoneAlt /> +92 {event.phone}</p>
//                                     <p className="pt-4 text-xs">{event.description}</p>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>


//             </div>

//             {!loading && (
//                 <div className="mt-8 mb-20 text-center ">
//                     <button
//                         onClick={handleShowMore}
//                         disabled={isAllVisible}
//                         className={`px-6 py-2 rounded ${isAllVisible
//                             ? "bg-gray-400 cursor-not-allowed text-white"
//                             : "bg-our_red hover:bg-blue-700 text-white"
//                             }`}
//                     >
//                         {isAllVisible ? "No More Events" : "Show More"}
//                     </button>
//                 </div>
//             )}


//             {/* Forms */}
//             <AnimatePresence>{showLoginForm && renderForm("login")}</AnimatePresence>
//             <AnimatePresence>{showSignupForm && renderForm("signup")}</AnimatePresence>

//             <Footer1 />
//             <Footer2 />

//         </div>
//     );
// }

// export default Landing_Events;
































import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";

// import { FaLocationDot, FaPhoneAlt } from "react-icons/fa";
import { FaBars, FaTimes } from 'react-icons/fa';
import Footer1 from '../Components/Footer1';
import Footer2 from '../Components/Footer2';
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from 'react-router-dom';

function Landing_Events() {
    const [events, setEvents] = useState([]);
    const [visibleCount, setVisibleCount] = useState(6);
    const [loading, setLoading] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [showLoginForm, setShowLoginForm] = useState(false);
    const [showSignupForm, setShowSignupForm] = useState(false);
    const [selectedOption, setSelectedOption] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        fetchEvents();
    }, []);

    async function fetchEvents() {
        setLoading(true);
        try {
            const response = await axios.get(`http://localhost:5000/event/get-all`);
            setEvents(response.data.All_Events || []);
        } catch (error) {
            console.error("Error fetching All Events", error);
        } finally {
            setLoading(false);
        }
    }

    function formatTime(timeString) {
        const [hours, minutes] = timeString.split(':');
        const date = new Date();
        date.setHours(hours);
        date.setMinutes(minutes);
        return date.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit', hour12: true });
    }

    function formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    }

    const formattedEvents = events.map(event => ({
        ...event,
        display_time: formatTime(event.time),
        display_date: formatDate(event.date),
    }));

    const handleShowMore = () => {
        setVisibleCount(prev => prev + 6);
    };

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const handleLoginSubmit = () => {
        if (selectedOption === "option1") navigate("/donor_login");
        else if (selectedOption === "option2") navigate("/recipient_login");
        else if (selectedOption === "option3") navigate("/organization_login");
    };

    const handleSignupSubmit = () => {
        if (selectedOption === "option1") navigate("/donor_signup");
        else if (selectedOption === "option2") navigate("/recipient_signup");
        else if (selectedOption === "option3") navigate("/organization_signup");
    };

    const renderForm = (type) => (
        <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-10 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="bg-white backdrop-blur-lg border border-white/20 p-6 sm:p-8 rounded-lg shadow-lg w-[90%] max-w-md relative"
            >
                <button
                    className="absolute top-2 right-3 text-xl font-bold"
                    onClick={() => {
                        setShowLoginForm(false);
                        setShowSignupForm(false);
                        setSelectedOption("");
                    }}
                >
                    ×
                </button>

                <h2 className="text-xl sm:text-2xl text-our_red font-bold text-center mb-6">
                    {type === "login" ? "Login as a" : "Sign Up as a"}
                </h2>

                <div className="flex flex-col space-y-3">
                    {["Donor", "Recipient", "Organization"].map((role, idx) => {
                        const value = `option${idx + 1}`;
                        return (
                            <label key={value} className="flex items-center space-x-2 cursor-pointer">
                                <input
                                    type="radio"
                                    name={`${type}_selection`}
                                    value={value}
                                    onChange={() => setSelectedOption(value)}
                                    checked={selectedOption === value}
                                    className="w-4 h-4 sm:w-5 sm:h-5 text-our_red focus:ring-our_red"
                                />
                                <span className="text-sm sm:text-base text-our_red">{role}</span>
                            </label>
                        );
                    })}
                </div>

                <div className="flex justify-center mt-6">
                    <button
                        onClick={type === "login" ? handleLoginSubmit : handleSignupSubmit}
                        disabled={!selectedOption}
                        className={`px-4 sm:px-5 py-1 text-sm rounded-full transition duration-300 ${selectedOption
                            ? "bg-[#820000] border border-[#820000] text-white hover:bg-white hover:text-[#820000] hover:font-bold"
                            : "bg-gray-300 text-gray-500 cursor-not-allowed"
                            }`}
                    >
                        Submit
                    </button>
                </div>
            </motion.div>
        </motion.div>
    );

    const isAllVisible = visibleCount >= events.length;
    const eventsToShow = formattedEvents.slice(0, visibleCount);

    return (
        <div className="bg-slate-50 font-nunito min-h-screen flex flex-col">
            {/* Navigation */}
            <nav className="flex justify-between items-center px-3 sm:p-4 mx-4 sm:mx-6 md:py-1 mt-3 md:mx-8 bg-[#820000] backdrop-blur-md shadow-md rounded-full relative z-50">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <img className="w-10 sm:w-12 md:w-14" src="./logo.png" alt="Logo" />
                    <span className="text-sm sm:text-xl md:text-2xl font-bold text-white">URGENT DROP</span>
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex space-x-4 lg:space-x-6 text-white font-medium">
                    <Link to="/" className="hover:text-gray-200 transition">Home</Link>
                    <Link to="/about_us" className="hover:text-gray-200 transition">About Us</Link>
                    <Link to="/all_blogs" className="hover:text-gray-200 transition">Blogs</Link>
                    <Link to="/all_events" className="hover:text-gray-200 transition">Events</Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white text-xl"
                    onClick={toggleMobileMenu}
                    aria-label="Toggle menu"
                >
                    {mobileMenuOpen ? <FaTimes /> : <FaBars />}
                </button>

                {/* Desktop Buttons */}
                <div className="hidden md:flex space-x-2 sm:space-x-3 md:space-x-4">
                    <button
                        onClick={() => setShowLoginForm(true)}
                        className="text-white border border-white px-3 sm:px-4 py-1 rounded-full hover:bg-red-50 hover:text-[#820000] transition text-sm sm:text-base"
                    >
                        Log In
                    </button>
                    <button
                        onClick={() => setShowSignupForm(true)}
                        className="bg-white text-[#820000] px-3 sm:px-4 py-1 rounded-full hover:bg-gray-200 transition text-sm sm:text-base"
                    >
                        Sign Up
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-[#820000] text-white mx-4 rounded-b-lg overflow-hidden mt-3"
                    >
                        <div className="flex flex-col space-y-4 p-4">
                            <Link
                                to="/"
                                className="hover:text-gray-200 transition"
                                onClick={toggleMobileMenu}
                            >
                                Home
                            </Link>
                            <Link
                                to="/about_us"
                                className="hover:text-gray-200 transition"
                                onClick={toggleMobileMenu}
                            >
                                About Us
                            </Link>
                            <Link
                                to="/all_blogs"
                                className="hover:text-gray-200 transition"
                                onClick={toggleMobileMenu}
                            >
                                Blogs
                            </Link>
                            <Link
                                to="/all_events"
                                className="hover:text-gray-200 transition"
                                onClick={toggleMobileMenu}
                            >
                                Events
                            </Link>
                            <div className="flex space-x-4 pt-2">
                                <button
                                    onClick={() => {
                                        setShowLoginForm(true);
                                        toggleMobileMenu();
                                    }}
                                    className="text-white border border-white px-3 py-1 rounded-full hover:bg-red-50 hover:text-[#820000] transition text-sm"
                                >
                                    Log In
                                </button>
                                <button
                                    onClick={() => {
                                        setShowSignupForm(true);
                                        toggleMobileMenu();
                                    }}
                                    className="bg-white text-[#820000] px-3 py-1 rounded-full hover:bg-gray-200 transition text-sm"
                                >
                                    Sign Up
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Main Content */}
            <main className="flex-grow px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
                <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 sm:mb-12">Upcoming Events</h2>

                {loading ? (
                    <div className="flex justify-center items-center min-h-[200px]">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#820000]"></div>
                    </div>
                ) : (
                    <>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
                            {eventsToShow.map((event, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                    className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                                >
                                    <img
                                        src={event.organization_photo || "/organization_default_photo.jpg"}
                                        alt={event.organization_name}
                                        className="w-full h-48 sm:h-56 object-cover"
                                    />
                                    <div className="p-4 sm:p-6">
                                        <h3 className="font-bold text-lg sm:text-xl text-center mb-4 text-[#820000]">
                                            {event.organization_name}
                                        </h3>

                                        <div className="space-y-3 sm:space-y-4">
                                            <div className="flex justify-between text-sm sm:text-base text-gray-600">
                                                <p>{event.display_date}</p>
                                                <p>{event.display_time}</p>
                                            </div>
                                            <p className="flex items-center gap-2 text-sm sm:text-base text-gray-600">
                                                <FaLocationDot className="text-[#820000]" /> {event.location}
                                            </p>
                                            <p className="flex items-center gap-2 text-sm sm:text-base text-gray-600">
                                                <FaPhoneAlt className="text-[#820000]" /> +92 {event.phone}
                                            </p>
                                            <p className="pt-4 text-sm sm:text-base text-gray-700">
                                                {event.description}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {!loading && events.length > 0 && (
                            <div className="mt-10 sm:mt-12 text-center">
                                <button
                                    onClick={handleShowMore}
                                    disabled={isAllVisible}
                                    className={`px-6 py-2 sm:px-8 sm:py-3 rounded-full transition ${isAllVisible
                                        ? "bg-gray-300 cursor-not-allowed text-gray-500"
                                        : "bg-[#820000] hover:bg-[#6a0000] text-white"
                                        }`}
                                >
                                    {isAllVisible ? "No More Events" : "Show More"}
                                </button>
                            </div>
                        )}
                    </>
                )}

                {!loading && events.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-lg sm:text-xl text-gray-600">No upcoming events found</p>
                    </div>
                )}
            </main>

            {/* Forms */}
            <AnimatePresence>{showLoginForm && renderForm("login")}</AnimatePresence>
            <AnimatePresence>{showSignupForm && renderForm("signup")}</AnimatePresence>

            <Footer1 />
            <Footer2 />
        </div>
    );
}

export default Landing_Events;