// import React, { useState } from "react";
// import { FaLinkedin, FaEnvelope, FaGithub } from 'react-icons/fa';
// import Our_Score from '../Our_Score/Our_Score';
// import Our_feedback from '../Landing_page_components/Our_feedback/Our_feedback';
// import Footer1 from '../Footer1';
// import Footer2 from '../Footer2';


// import { Link } from 'react-router-dom';
// import { useAuth } from "../../context/auth";
// import { motion, AnimatePresence } from "framer-motion";
// import { useNavigate } from 'react-router-dom';

// const teamMembers = [
//     {
//         name: 'Fatima Almas',
//         role: 'UI / UX Designer',
//         description: 'Passionate about crafting intuitive UI experiences.',
//         image: './fatima.png',
//         linkedin: '#',
//         email: '#',
//         github: '#',
//     },
//     {
//         name: 'Abdullah Tanveer',
//         role: 'Full-Stack Developer',
//         description: 'Loves building scalable and secure APIs.',
//         image: './abdullah.png',
//         linkedin: '#',
//         email: '#',
//         github: '#',
//     },
//     {
//         name: 'Amna Aqeel',
//         role: 'Full-Stack Developer',
//         description: 'Focuses on user-centric and accessible designs.',
//         image: './amna.jpeg',
//         linkedin: '#',
//         email: '#',
//         github: '#',
//     },
// ];

// function About_Us() {


//     const [auth] = useAuth();
//     // console.log("DDDDDDD=", auth)
//     const navigate = useNavigate();

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

//         <div>

//             <div className="font-nunito text-center bg-white mb-40">


//                 {!auth && (
//                     <nav className="flex justify-between items-center mt-3 mx-8 pr-4 bg-[#820000] backdrop-blur-md shadow-md rounded-full ">
//                         <div className="text-xl font-bold text-white flex items-center gap-2">
//                             <span className="text-2xl">
//                                 <img
//                                     className="w-14"
//                                     src="./logo.png"
//                                     alt=""
//                                 />
//                             </span> URGENT DROP
//                         </div>
//                         <div className="hidden md:flex space-x-6 text-white font-medium">
//                             <Link to="/">Home</Link>
//                             <Link to="/about_us">About Us</Link>
//                             <Link to="/all_blogs">Blogs</Link>
//                             <Link to="/all_events">Events</Link>
//                             {/* <Link to="/faqs">FAQs</Link> */}
//                         </div>
//                         <div className="flex space-x-4">
//                             <button
//                                 onClick={() => setShowLoginForm(true)}
//                                 className="text-white border-2 border-white px-4 py-1 rounded-full hover:bg-red-50 hover:text-[#820000] transition">Log In</button>
//                             <button
//                                 onClick={() => setShowSignupForm(true)}
//                                 className="bg-white text-[#820000] px-4 py-1 rounded-full hover:bg-gray-200 transition">Sign Up</button>
//                         </div>
//                     </nav>
//                 )}





//                 <div className=' flex flex-row justify-center pt-20 mb-'>
//                     <h1 className='text-3xl font-extrabold '>
//                         <span className="text-our_red">About</span> Us
//                     </h1>
//                 </div>
//                 {/* Intro Paragraph */}
//                 <div className="flex flex-row justify-center">
//                     <p className="max-w-3xl mx-auto text-sm w-[50%] text-center mb-10">
//                     Welcome to our platform! We are committed to making a difference by connecting donors and recipients in need. 
//                     {/* Discover our purpose, our passion, and the people behind the cause. */}
//                     Discover our purpose, our passion, and the people behind the cause.
//                 </p>
//                 </div>


//                 {/* Image Section */}
//                 <div className="flex justify-center my-10">
//                     <img src="/Home2.jpg" alt="Our Mission" className="w-full max-w-4xl rounded-xl shadow-lg" />
//                 </div>


//                 {/* Our Mission */}
//                 <div className='bg-green-00 flex flex-row justify-center it'>
//                     <div className=' w-[50%] my-16 flex flex-row justify-center items-center gap-0'>
//                         <h2 className="bg-orange-00 w-[70%] text-2xl font-extrabold mb-4">
//                             <span className='text-our_red'> Our Mission</span>
//                         </h2>
//                         <p className="w-[50%] mx-auto text-base text-justify">
//                             To create a reliable, accessible, and secure platform that bridges the gap between blood donors and those in urgent need—empowering communities to save lives through voluntary blood donation.
//                         </p>
//                     </div>
//                 </div>



//                 {/* Our Vision */}
//                 <div className='bg-green-00 flex flex-row justify-center it'>
//                     <div className=' w-[50%] my-1 flex flex-row justify-center items-center '>

//                         <p className="w-[50%] mx-auto text-base text-justify">
//                             A world where no life is lost due to lack of blood, where donation is a norm, and every individual has timely access to safe and compatible blood, regardless of location or background.
//                         </p>
//                         <h2 className="bg-orange-00 w-[70%] text-2xl font-extrabold mb-4">
//                             <span className='text-our_red'> Our Vision</span>
//                         </h2>

//                     </div>
//                 </div>


//                 <Our_Score />


//                 {/* Meet Our Team */}
//                 <div className='mt-28'>
//                     <h2 className="text-3xl font-extrabold  mb-8">
//                         <span className='text-our_red'> Meet </span>  Our Team
//                     </h2>

//                     <div className='flex flex-row justify-center mb-5'>
//                         <p className='w-[50%] '>
//                             We are a passionate team committed to revolutionizing blood donation by simplifying the process of finding and connecting with donors.
//                         </p>

//                     </div>
//                     <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
//                         {teamMembers.map((member, index) => (
//                             <div key={index} className="bg-white rounded-xl shadow-lg p-6 space-y-4 text-left">
//                                 <img src={member.image} alt={member.name} className="w-full h-56 object-cover rounded-lg" />

//                                 <div className='text-center'>
//                                     <h3 className="text-xl font-bold">{member.name}</h3>
//                                     <p className="text-sm font-semibold text-gray-400">{member.role}</p>
//                                     {/* <p className="text-gray-600 text-sm">{member.description}</p> */}

//                                     <div className="flex flex-row justify-center gap-4 mt-10">
//                                         <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
//                                             <FaLinkedin size={20} className="text-gray-600 hover:text-black" />
//                                         </a>
//                                         <a href={`mailto:${member.email}`}>
//                                             <FaEnvelope size={20} className="text-gray-600 hover:text-black" />
//                                         </a>
//                                         <a href={member.github} target="_blank" rel="noopener noreferrer">
//                                             <FaGithub size={20} className="text-gray-600 hover:text-black" />
//                                         </a>
//                                     </div>

//                                 </div>

//                             </div>
//                         ))}
//                     </div>
//                 </div>



//             </div>
//             {/* Forms */}
//             <AnimatePresence>{showLoginForm && renderForm("login")}</AnimatePresence>
//             <AnimatePresence>{showSignupForm && renderForm("signup")}</AnimatePresence>

//             {/* <Our_feedback /> */}

//             <Footer1 />
//             <Footer2 />

//         </div>

//     );
// }

// export default About_Us;
















































import React, { useState } from "react";
import { FaLinkedin, FaEnvelope, FaGithub, FaBars, FaTimes } from 'react-icons/fa';
import Our_Score from '../Our_Score/Our_Score';
import Our_feedback from '../Landing_page_components/Our_feedback/Our_feedback';
import Footer1 from '../Footer1';
import Footer2 from '../Footer2';
import { Link } from 'react-router-dom';
import { useAuth } from "../../context/auth";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from 'react-router-dom';

const teamMembers = [
    {
        name: 'Fatima Almas',
        role: 'UI / UX Designer',
        description: 'Passionate about crafting intuitive UI experiences.',
        image: './fatima.png',
        linkedin: '#',
        email: '#',
        github: '#',
    },
    {
        name: 'Abdullah Tanveer',
        role: 'Full-Stack Developer',
        description: 'Loves building scalable and secure APIs.',
        image: './abdullah.png',
        linkedin: '#',
        email: '#',
        github: '#',
    },
    {
        name: 'Amna Aqeel',
        role: 'Full-Stack Developer',
        description: 'Focuses on user-centric and accessible designs.',
        image: './amna.jpeg',
        linkedin: '#',
        email: '#',
        github: '#',
    },
];

function About_Us() {
    const [auth] = useAuth();
    const navigate = useNavigate();
    const [showLoginForm, setShowLoginForm] = useState(false);
    const [showSignupForm, setShowSignupForm] = useState(false);
    const [selectedOption, setSelectedOption] = useState("");
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
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

    return (
        <div className="font-nunito">
            {/* Navigation */}
            {!auth && (
                <>
                    <nav className="flex justify-between items-center px-3 py-1 mx-4 sm:mx-6 md:py-1 mt-3 md:mx-8 bg-[#820000] backdrop-blur-md shadow-md rounded-full">
                        <div className="flex items-center gap-2">
                            <img className="w-10 sm:w-12 md:w-14" src="./logo.png" alt="Logo" />
                            <span className="text-sm sm:text-xl md:text-2xl font-bold text-white">URGENT DROP</span>
                        </div>

                        {/* Desktop Navigation */}
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

                        {/* Desktop Auth Buttons */}
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
                </>
            )}

            {/* Rest of your content remains the same */}
            <div className="text-center bg-white px-4 sm:px-6 md:px-8">
                {/* About Us Header */}
                <div className="pt-12 sm:pt-16 md:pt-20 mb-8">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold">
                        <span className="text-our_red">About</span> Us
                    </h1>
                    <p className="mt-4 text-sm sm:text-base max-w-3xl mx-auto">
                        Welcome to our platform! We are committed to making a difference by connecting donors and recipients in need.
                        Discover our purpose, our passion, and the people behind the cause.
                    </p>
                </div>

                {/* Mission Image */}
                <div className="my-8 sm:my-10 md:my-12">
                    <img
                        src="/Home2.jpg"
                        alt="Our Mission"
                        className="w-full max-w-4xl rounded-lg sm:rounded-xl shadow-lg mx-auto"
                    />
                </div>

                {/* Mission Section */}
                <div className="md:max-w-[50%] my-10 sm:my-12 md:my-16 max-w-6xl mx-auto ">
                    <div className="bg-orane-300 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-10 p-4 sm:p-6">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-center md:text-right">
                            <span className='text-our_red'>Our Mission</span>
                        </h2>
                        <p className="text-sm sm:text-base md:w-1/2 text-justify">
                            To create a reliable, accessible, and secure platform that bridges the gap between blood donors and those in urgent need—empowering communities to save lives through voluntary blood donation.
                        </p>
                    </div>
                </div>

                {/* Vision Section */}
                <div className="my-10 sm:my-12 md:max-w-[50%] md:my-16 max-w-6xl mx-auto">
                    <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-6 md:gap-10 p-4 sm:p-6">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold md:w-1/2 text-center md:text-left md:order-1">
                            <span className='text-our_red'>Our Vision</span>
                        </h2>
                        <p className="text-sm sm:text-base md:w-1/2 text-justify md:order-2">
                            A world where no life is lost due to lack of blood, where donation is a norm, and every individual has timely access to safe and compatible blood, regardless of location or background.
                        </p>

                    </div>
                </div>

                {/* Our Score Component */}
                <Our_Score />

                {/* Team Section */}
                <div className="mt-16 sm:mt-20 md:mt-28 max-w-7xl mx-auto mb-20">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-6 sm:mb-8">
                        <span className='text-our_red'>Meet</span> Our Team
                    </h2>
                    <p className="text-sm sm:text-base max-w-2xl mx-auto mb-8 sm:mb-10 text-justify md:text-center">
                        We are a passionate team committed to revolutionizing blood donation by simplifying the process of finding and connecting with donors.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 px-4 sm:px-6">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-4 sm:p-6">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-48 sm:h-56 object-cover rounded-lg mb-4"
                                />
                                <div className="text-center">
                                    <h3 className="text-lg sm:text-xl font-bold">{member.name}</h3>
                                    <p className="text-xs sm:text-sm text-gray-500 mb-3">{member.role}</p>
                                    <div className="flex justify-center gap-4 mt-4">
                                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#0077b5]">
                                            <FaLinkedin size={18} />
                                        </a>
                                        <a href={`mailto:${member.email}`} className="text-gray-600 hover:text-[#D44638]">
                                            <FaEnvelope size={18} />
                                        </a>
                                        <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black">
                                            <FaGithub size={18} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Forms */}
            <AnimatePresence>{showLoginForm && renderForm("login")}</AnimatePresence>
            <AnimatePresence>{showSignupForm && renderForm("signup")}</AnimatePresence>

            {/* Footer Components */}
            <Footer1 />
            <Footer2 />
        </div>
    );
}

export default About_Us;












































// import React, { useState } from "react";
// import { FaLinkedin, FaEnvelope, FaGithub } from 'react-icons/fa';
// import Our_Score from '../Our_Score/Our_Score';
// import Our_feedback from '../Landing_page_components/Our_feedback/Our_feedback';
// import Footer1 from '../Footer1';
// import Footer2 from '../Footer2';
// import { Link } from 'react-router-dom';
// import { useAuth } from "../../context/auth";
// import { motion, AnimatePresence } from "framer-motion";
// import { useNavigate } from 'react-router-dom';

// const teamMembers = [
//     {
//         name: 'Fatima Almas',
//         role: 'UI / UX Designer',
//         description: 'Passionate about crafting intuitive UI experiences.',
//         image: './fatima.png',
//         linkedin: '#',
//         email: '#',
//         github: '#',
//     },
//     {
//         name: 'Abdullah Tanveer',
//         role: 'Full-Stack Developer',
//         description: 'Loves building scalable and secure APIs.',
//         image: './abdullah.png',
//         linkedin: '#',
//         email: '#',
//         github: '#',
//     },
//     {
//         name: 'Amna Aqeel',
//         role: 'Full-Stack Developer',
//         description: 'Focuses on user-centric and accessible designs.',
//         image: './amna.jpeg',
//         linkedin: '#',
//         email: '#',
//         github: '#',
//     },
// ];

// function About_Us() {
//     const [auth] = useAuth();
//     const navigate = useNavigate();
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
//                 className="bg-white backdrop-blur-lg border border-white/20 p-6 sm:p-8 rounded-lg shadow-lg w-[90%] max-w-md relative"
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

//                 <h2 className="text-xl sm:text-2xl text-our_red font-bold text-center mb-6">
//                     {type === "login" ? "Login as a" : "Sign Up as a"}
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
//                                     className="w-4 h-4 sm:w-5 sm:h-5 text-our_red focus:ring-our_red"
//                                 />
//                                 <span className="text-sm sm:text-base text-our_red">{role}</span>
//                             </label>
//                         );
//                     })}
//                 </div>

//                 <div className="flex justify-center mt-6">
//                     <button
//                         onClick={type === "login" ? handleLoginSubmit : handleSignupSubmit}
//                         disabled={!selectedOption}
//                         className={`px-4 sm:px-5 py-1 text-sm rounded-full transition duration-300 ${selectedOption
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
//         <div className="font-nunito">
//             {/* Navigation */}
//             {!auth && (
//                 <nav className="flex flex-col sm:flex-row justify-between items-center p-3 sm:p-4 mx-4 sm:mx-6 md:py-1 mt-3 md:mx-8 bg-[#820000] backdrop-blur-md shadow-md rounded-full">
//                     <div className="flex items-center gap-2 mb-2 sm:mb-0">
//                         <img className="w-10 sm:w-12 md:w-14" src="./logo.png" alt="Logo" />
//                         <span className="text-lg sm:text-xl md:text-2xl font-bold text-white">URGENT DROP</span>
//                     </div>
//                     <div className="hidden md:flex space-x-4 lg:space-x-6 text-white font-medium">
//                         <Link to="/" className="hover:text-gray-200 transition">Home</Link>
//                         <Link to="/about_us" className="hover:text-gray-200 transition">About Us</Link>
//                         <Link to="/all_blogs" className="hover:text-gray-200 transition">Blogs</Link>
//                         <Link to="/all_events" className="hover:text-gray-200 transition">Events</Link>
//                     </div>
//                     <div className="flex space-x-2 sm:space-x-3 md:space-x-4">
//                         <button
//                             onClick={() => setShowLoginForm(true)}
//                             className="text-white border border-white px-3 sm:px-4 py-1 rounded-full hover:bg-red-50 hover:text-[#820000] transition text-sm sm:text-base"
//                         >
//                             Log In
//                         </button>
//                         <button
//                             onClick={() => setShowSignupForm(true)}
//                             className="bg-white text-[#820000] px-3 sm:px-4 py-1 rounded-full hover:bg-gray-200 transition text-sm sm:text-base"
//                         >
//                             Sign Up
//                         </button>
//                     </div>
//                 </nav>
//             )}

//             <div className="text-center bg-white px-4 sm:px-6 md:px-8">
//                 {/* About Us Header */}
//                 <div className="pt-12 sm:pt-16 md:pt-20 mb-8">
//                     <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold">
//                         <span className="text-our_red">About</span> Us
//                     </h1>
//                     <p className="mt-4 text-sm sm:text-base max-w-3xl mx-auto">
//                         Welcome to our platform! We are committed to making a difference by connecting donors and recipients in need.
//                         Discover our purpose, our passion, and the people behind the cause.
//                     </p>
//                 </div>

//                 {/* Mission Image */}
//                 <div className="my-8 sm:my-10 md:my-12">
//                     <img
//                         src="/Home2.jpg"
//                         alt="Our Mission"
//                         className="w-full max-w-4xl rounded-lg sm:rounded-xl shadow-lg mx-auto"
//                     />
//                 </div>

//                 {/* Mission Section */}
//                 <div className="my-10 sm:my-12 md:my-16 max-w-6xl mx-auto">
//                     <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 p-4 sm:p-6">
//                         <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold md:w-1/2 text-center md:text-right">
//                             <span className='text-our_red'>Our Mission</span>
//                         </h2>
//                         <p className="text-sm sm:text-base md:w-1/2 text-justify">
//                             To create a reliable, accessible, and secure platform that bridges the gap between blood donors and those in urgent need—empowering communities to save lives through voluntary blood donation.
//                         </p>
//                     </div>
//                 </div>

//                 {/* Vision Section */}
//                 <div className="my-10 sm:my-12 md:my-16 max-w-6xl mx-auto">
//                     <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 p-4 sm:p-6">
//                         <p className="text-sm sm:text-base md:w-1/2 text-justify md:order-2">
//                             A world where no life is lost due to lack of blood, where donation is a norm, and every individual has timely access to safe and compatible blood, regardless of location or background.
//                         </p>
//                         <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold md:w-1/2 text-center md:text-left md:order-1">
//                             <span className='text-our_red'>Our Vision</span>
//                         </h2>
//                     </div>
//                 </div>

//                 {/* Our Score Component */}
//                 <Our_Score />

//                 {/* Team Section */}
//                 <div className="mt-16 sm:mt-20 md:mt-28 max-w-7xl mx-auto">
//                     <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-6 sm:mb-8">
//                         <span className='text-our_red'>Meet</span> Our Team
//                     </h2>
//                     <p className="text-sm sm:text-base max-w-2xl mx-auto mb-8 sm:mb-10">
//                         We are a passionate team committed to revolutionizing blood donation by simplifying the process of finding and connecting with donors.
//                     </p>
//                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 px-4 sm:px-6">
//                         {teamMembers.map((member, index) => (
//                             <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-4 sm:p-6">
//                                 <img
//                                     src={member.image}
//                                     alt={member.name}
//                                     className="w-full h-48 sm:h-56 object-cover rounded-lg mb-4"
//                                 />
//                                 <div className="text-center">
//                                     <h3 className="text-lg sm:text-xl font-bold">{member.name}</h3>
//                                     <p className="text-xs sm:text-sm text-gray-500 mb-3">{member.role}</p>
//                                     <div className="flex justify-center gap-4 mt-4">
//                                         <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#0077b5]">
//                                             <FaLinkedin size={18} />
//                                         </a>
//                                         <a href={`mailto:${member.email}`} className="text-gray-600 hover:text-[#D44638]">
//                                             <FaEnvelope size={18} />
//                                         </a>
//                                         <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black">
//                                             <FaGithub size={18} />
//                                         </a>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>

//             {/* Forms */}
//             <AnimatePresence>{showLoginForm && renderForm("login")}</AnimatePresence>
//             <AnimatePresence>{showSignupForm && renderForm("signup")}</AnimatePresence>

//             {/* Footer Components */}
//             <Footer1 />
//             <Footer2 />
//         </div>
//     );
// }

// export default About_Us;