// import React from 'react'

// import { Link } from 'react-router-dom';
// import { useAuth } from "../../context/auth";
// import Footer1 from '../Footer1';
// import Footer2 from '../Footer2';

// import { useNavigate } from 'react-router-dom';

// function Blog_2() {

//     const [auth] = useAuth();
//     // console.log("DDDDDDD=", auth)
//     const navigate = useNavigate();

//     return (
//         <div className='font-nunito'>


//             {!auth && (
//                 <nav className="flex justify-between items-center mt-3 mx-8 pr-4 bg-[#820000] backdrop-blur-md shadow-md rounded-full ">
//                     <div className="text-xl font-bold text-white flex items-center gap-2">
//                         <span className="text-2xl">
//                             <img
//                                 className="w-14"
//                                 src="./logo.png"
//                                 alt=""
//                             />
//                         </span> URGENT DROP
//                     </div>
//                     <div className="hidden md:flex space-x-6 text-white font-medium">
//                         <Link to="/">Home</Link>
//                         <Link to="/about_us">About Us</Link>
//                         <Link to="/all_blogs">Blogs</Link>
//                         <Link to="/all_events">Events</Link>
//                         {/* <Link to="/faqs">FAQs</Link> */}
//                     </div>
//                     <div className="flex space-x-4">
//                         <button
//                             onClick={() => navigate('/login_as_a')}
//                             className="text-white border-2 border-white px-4 py-1 rounded-full hover:bg-red-50 hover:text-[#820000] transition">Log In</button>
//                         <button
//                             onClick={() => navigate('/signup_as_a')}
//                             className="bg-white text-[#820000] px-4 py-1 rounded-full hover:bg-gray-200 transition">Sign Up</button>
//                     </div>
//                 </nav>
//             )}

//             <div className='max-w-4xl mx-auto px-6 py-12'>
//                 <img src="./blog2.jpg" alt="" />
//                 <h1 className='text-our_red text-4xl font-bold my-10'>
//                     Stories of Lives Transformed by Blood Donation
//                 </h1>

//                 <p>
//                     Few people ever anticipate needing blood transfusions, <span className='font-bold'>yet it’s a reality that many face every day.</span> Thanks to the generosity of donors, countless recipients have received blood transfusions that helped them survive life-threatening challenges and situations.
//                 </p>
//                 <p className='my-10'>
//                     The sacrifices made to supply those transfusions do not go unnoticed by recipients or their families. Many gain a new perspective and appreciation for life. Some even go on to become donors. Regardless of their response, it’s undeniable that their lives have been deeply touched and changed by the kindness of strangers.
//                 </p>
//                 <h1 className='text-our_red text-4xl font-bold w-[80%] my-10'>An Unexpected Need</h1>

//                 <p>
//                     Many mothers have a smooth pregnancy, only to end up in the emergency room due to childbirth complications. Kay was one of those mothers. When she was 20 years old, she went in to have a Cesarean section, during which her heart stopped. She was in the operating room for over an hour and received four pints of blood. That blood, along with the heroic work of the doctors and nurses, saved her life.
//                 </p>
//                 <p className='my-10'>
//                     Today, Kay is a regular blood donor. <span className='font-bold'>She’s been donating since 1979,</span> hoping to make the same impact on others that four random strangers made in her life all those years ago. She knows that by giving just one donation, she can save up to three lives.
//                 </p>
//                 <p>
//                     When asked what she would say to the donors who saved her life, Kay shared the simple but powerful message, <span className='font-bold'>“Thank you so much for loving someone enough to give.”</span>
//                 </p>
//                 <h1 className='text-our_red text-4xl font-bold w-[80%] my-10'>A Fight With Cancer</h1>

//                 <p>
//                     Jeff’s story looks a little different. <span className='font-bold'>Over 20 years ago,</span> he was diagnosed with a tumor in his colon. He received a transfusion for the first time during surgery to remove the cancer. That lifesaving medical intervention saved his life and allowed him to go on and build a family.
//                 </p>
//                 <p className='my-10'>
//                     Then, right before the start of the pandemic, Jeff found out he had another tumor in his pelvis. He immediately began aggressive chemotherapy, with each treatment requiring another blood transfusion. Jeff’s condition eventually required the amputation of his right leg, and that operation required even more transfusions.
//                 </p>
//                 <p className='mb-20'>
//                     Throughout Jeff’s journey with cancer, he’s experienced the lifesaving impact blood transfusions can have time and time again. He knows that if it weren’t for the generosity of donors, he would not be living the life he is today. When thanking his donors, Jeff said he’s grateful that <span className='font-bold'>“My wife can have a husband, and my kids can have a father.”</span>
//                 </p>

//             </div>

//             <Footer1 />
//             <Footer2 />

//         </div>
//     )
// }

// export default Blog_2










import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from "../../context/auth";
import Footer1 from '../Footer1';
import Footer2 from '../Footer2';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from "framer-motion";

function Blog_2() {
    const [auth] = useAuth();
    const navigate = useNavigate();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [showLoginForm, setShowLoginForm] = useState(false);
    const [showSignupForm, setShowSignupForm] = useState(false);
    const [selectedOption, setSelectedOption] = useState("");

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
        <div className='font-nunito min-h-screen flex flex-col'>
            {/* Navigation */}
            {!auth && (
                <>
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
                </>
            )}

            {/* Blog Content */}
            <main className="flex-grow max-w-4xl mx-auto px-4 sm:px-6 py-8 md:py-12">
                <img
                    src="./blog2.jpg"
                    alt="Blood donation transforming lives"
                    className="w-full h-auto rounded-lg shadow-md"
                />

                <h1 className='text-our_red text-2xl sm:text-3xl md:text-4xl font-bold my-6 md:my-10'>
                    Stories of Lives Transformed by Blood Donation
                </h1>

                <p className='text-base md:text-lg leading-relaxed'>
                    Few people ever anticipate needing blood transfusions, <span className='font-bold'>yet it's a reality that many face every day.</span> Thanks to the generosity of donors, countless recipients have received blood transfusions that helped them survive life-threatening challenges and situations.
                </p>

                <p className='my-6 md:my-10 text-base md:text-lg leading-relaxed'>
                    The sacrifices made to supply those transfusions do not go unnoticed by recipients or their families. Many gain a new perspective and appreciation for life. Some even go on to become donors. Regardless of their response, it's undeniable that their lives have been deeply touched and changed by the kindness of strangers.
                </p>

                <h2 className='text-our_red text-xl sm:text-2xl md:text-3xl font-bold my-6 md:my-10'>
                    An Unexpected Need
                </h2>

                <p className='text-base md:text-lg leading-relaxed'>
                    Many mothers have a smooth pregnancy, only to end up in the emergency room due to childbirth complications. Kay was one of those mothers. When she was 20 years old, she went in to have a Cesarean section, during which her heart stopped. She was in the operating room for over an hour and received four pints of blood. That blood, along with the heroic work of the doctors and nurses, saved her life.
                </p>

                <p className='my-6 md:my-10 text-base md:text-lg leading-relaxed'>
                    Today, Kay is a regular blood donor. <span className='font-bold'>She's been donating since 1979,</span> hoping to make the same impact on others that four random strangers made in her life all those years ago. She knows that by giving just one donation, she can save up to three lives.
                </p>

                <p className='text-base md:text-lg leading-relaxed'>
                    When asked what she would say to the donors who saved her life, Kay shared the simple but powerful message, <span className='font-bold'>"Thank you so much for loving someone enough to give."</span>
                </p>

                <h2 className='text-our_red text-xl sm:text-2xl md:text-3xl font-bold my-6 md:my-10'>
                    A Fight With Cancer
                </h2>

                <p className='text-base md:text-lg leading-relaxed'>
                    Jeff's story looks a little different. <span className='font-bold'>Over 20 years ago,</span> he was diagnosed with a tumor in his colon. He received a transfusion for the first time during surgery to remove the cancer. That lifesaving medical intervention saved his life and allowed him to go on and build a family.
                </p>

                <p className='my-6 md:my-10 text-base md:text-lg leading-relaxed'>
                    Then, right before the start of the pandemic, Jeff found out he had another tumor in his pelvis. He immediately began aggressive chemotherapy, with each treatment requiring another blood transfusion. Jeff's condition eventually required the amputation of his right leg, and that operation required even more transfusions.
                </p>

                <p className='mb-12 md:mb-20 text-base md:text-lg leading-relaxed'>
                    Throughout Jeff's journey with cancer, he's experienced the lifesaving impact blood transfusions can have time and time again. He knows that if it weren't for the generosity of donors, he would not be living the life he is today. When thanking his donors, Jeff said he's grateful that <span className='font-bold'>"My wife can have a husband, and my kids can have a father."</span>
                </p>
            </main>

            {/* Forms */}
            <AnimatePresence>{showLoginForm && renderForm("login")}</AnimatePresence>
            <AnimatePresence>{showSignupForm && renderForm("signup")}</AnimatePresence>

            {/* Footer */}
            <Footer1 />
            <Footer2 />
        </div>
    );
}

export default Blog_2;