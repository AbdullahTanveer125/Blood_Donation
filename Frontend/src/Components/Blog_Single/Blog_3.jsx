// import React from 'react'

// import { Link } from 'react-router-dom';
// import { useAuth } from "../../context/auth";
// import Footer2 from '../Footer2';
// import Footer1 from '../Footer1';

// import { useNavigate } from 'react-router-dom';

// function Blog_3() {

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
//                 <img src="./blog3.jpg" alt="" />

//                 <h1 className='text-our_red text-4xl font-bold w-[%] my-10'>
//                     Blood Donation Myths Busted: Separating Fact from Fiction
//                 </h1>

//                 <p>
//                     Donating blood is a generous act that saves countless lives each day. But despite its life-saving impact, blood donation is surrounded by numerous myths that keep far too many potential donors from donating. As a result, these misconceptions can have devastating implications for the national blood supply, reducing available blood products and keeping patients from getting the transfusions they desperately need.
//                 </p>
//                 <p className='my-10'>
//                     It’s important to separate fact from fiction to dispel people’s apprehensions about donating. By sharing the truth about blood donation, we seek to empower people with accurate information so they can make a properly informed decision about whether or not to give blood. When you come to The Blood Connection, we aim to equip you with the facts and information you need to donate without hesitation and feel confident in your decision.
//                 </p>

//                 <img src="./donation5.jpg" alt="" />

//                 <h1 className='text-our_red text-4xl font-bold w-[80%] my-10'>7 Common Misconceptions About Blood Donations</h1>

//                 <div className='pl-20'>
//                     <h1 className='text-our_red text-2xl font-bold w-[80%] mt-10'>1) Myth: It takes a long time to donate.</h1>
//                     <p>
//                         <span className='font-bold'>Fact:</span> Blood donation is an efficient process that only takes about an hour from start to finish. When you walk into a donation center, you’ll complete a brief mini-physical before donating to confirm your eligibility. The actual donation only takes about 10 minutes. Once your donation is complete, you’ll be asked to stay at the center for a few minutes for monitoring. You can enjoy a beverage and snack while you wait and then be on your way.
//                     </p>

//                     <h1 className='text-our_red text-2xl font-bold w-[80%] mt-10'>2) Myth: Donating blood hurts.</h1>
//                     <p>
//                         <span className='font-bold'>Fact:</span> The discomfort you’ll feel when donating is very minimal. There will be a slight pinch when the needle goes in, but you shouldn’t feel a thing after that. The Blood Connection’s skilled team will ensure you have a comfortable experience from start to finish.
//                     </p>

//                     <h1 className='text-our_red text-2xl font-bold w-[80%] mt-10'>3) Myth: If you don’t have a rare blood type, your donation isn’t needed.</h1>
//                     <p>
//                         <span className='font-bold'>Fact:</span> Your donation is valuable regardless of your blood type. Common blood types are needed by more people, meaning more donations are required to maintain a steady supply. And for rare types, there’s a smaller pool of donors. Long story short, your single donation — no matter your blood type — can save up to three lives, and that’s worth doing.
//                     </p>

//                     <h1 className='text-our_red text-2xl font-bold w-[80%] mt-10'>4) Myth: You can’t donate if you’re on medication.</h1>
//                     <p>
//                         <span className='font-bold'>Fact:</span> Most medications don’t disqualify you as a donor. More often, the medical condition that warrants the medication is the factor that impacts your eligibility. Of course, certain medicines, including anticoagulants, antiplatelet drugs, and some acne treatments, may render you ineligible to donate. If you’re unsure how your medication impacts your ability to donate, talk to a team member at your local donation center.
//                     </p>

//                     <h1 className='text-our_red text-2xl font-bold w-[80%] mt-10'>5) Myth: Donating will deplete your own blood supply.</h1>
//                     <p>
//                         <span className='font-bold'>Fact:</span> The average adult human body contains about 10 pints of blood. When you donate blood, only one of those pints is collected, leaving plenty for you to resume your day as usual. Your plasma levels can return to normal in as little as 24 hours. Red blood cells take about four to six weeks to completely replenish, which is why you can donate every 56 days. Ultimately, donating blood will not deplete your own blood supply in the long term due to the human body’s ability to quickly regenerate blood cells.
//                     </p>

//                     <h1 className='text-our_red text-2xl font-bold w-[80%] mt-10'>6) Myth: Donating blood can make you sick.</h1>
//                     <p>
//                         <span className='font-bold'>Fact:</span> If you’re healthy when you walk into your donation center, you’ll walk out the same way. Our donation centers follow strict protocols to keep the equipment sterile, and we work hard to make sure the donation process is safe for every donor. Of course, it’s possible to experience lightheadedness or mild fatigue immediately after donating, but you’ll be provided a snack and drink to help ease those symptoms. In most instances, these symptoms pass quickly and on their own.
//                     </p>

//                     <h1 className='text-our_red text-2xl font-bold w-[80%] mt-10'>7) Myth: There are plenty of donors already.</h1>
//                     <p>
//                         <span className='font-bold'>Fact:</span> Someone needs blood in the U.S. every two seconds, meaning there is always a need for more blood. On top of the constant need, blood has a limited shelf life, making maintaining an adequate supply even more challenging. A steady national blood supply helps meet both anticipated and unanticipated demand. Seasonal fluctuations and emergencies can cause shortages, making it difficult for people to get the lifesaving resources they need. A consistent group of regular donors ensures a reliable blood supply that can support emergency surgeries and ongoing treatments.
//                     </p>
//                 </div>

//                 <p className='mt-10 mb-20'>
//                     Every donation matters, whether you give once or become a regular donor. Our priority is to keep you informed and comfortable throughout the entire donation process so that you can walk into our donation centers feeling confident about your life-saving decision.
//                 </p>

//             </div>

//             <Footer1 />
//             <Footer2 />


//         </div>
//     )
// }

// export default Blog_3
































import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from "../../context/auth";
import Footer1 from '../Footer1';
import Footer2 from '../Footer2';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from "framer-motion";

function Blog_3() {
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
            <main className="flex-grow">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
                    <img
                        src="./blog3.jpg"
                        alt="Blood donation myths"
                        className="w-full h-auto rounded-lg shadow-md mb-6 sm:mb-8 lg:mb-10"
                    />

                    <h1 className='text-our_red text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 lg:mb-8 leading-tight'>
                        Blood Donation Myths Busted: Separating Fact from Fiction
                    </h1>

                    <div className="prose max-w-none space-y-4 sm:space-y-5 lg:space-y-6 text-gray-800 leading-relaxed text-sm sm:text-base">
                        <p>
                            Donating blood is a generous act that saves countless lives each day. But despite its life-saving impact, blood donation is surrounded by numerous myths that keep far too many potential donors from donating. As a result, these misconceptions can have devastating implications for the national blood supply, reducing available blood products and keeping patients from getting the transfusions they desperately need.
                        </p>
                        <p>
                            It's important to separate fact from fiction to dispel people's apprehensions about donating. By sharing the truth about blood donation, we seek to empower people with accurate information so they can make a properly informed decision about whether or not to give blood. When you come to The Blood Connection, we aim to equip you with the facts and information you need to donate without hesitation and feel confident in your decision.
                        </p>

                        <img
                            src="./donation5.jpg"
                            alt="Blood donation process"
                            className="w-full h-auto rounded-lg shadow-md my-6 sm:my-8 lg:my-10"
                        />

                        <h2 className='text-our_red text-xl sm:text-2xl lg:text-3xl font-bold mt-8 sm:mt-10 mb-4 sm:mb-6'>
                            7 Common Misconceptions About Blood Donations
                        </h2>

                        <div className="space-y-8 sm:space-y-10 lg:space-y-12 pl-0 sm:pl-4 lg:pl-8">
                            <div>
                                <h3 className='text-our_red text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3'>
                                    1) Myth: It takes a long time to donate.
                                </h3>
                                <p>
                                    <span className='font-bold'>Fact:</span> Blood donation is an efficient process that only takes about an hour from start to finish. When you walk into a donation center, you'll complete a brief mini-physical before donating to confirm your eligibility. The actual donation only takes about 10 minutes. Once your donation is complete, you'll be asked to stay at the center for a few minutes for monitoring. You can enjoy a beverage and snack while you wait and then be on your way.
                                </p>
                            </div>

                            <div>
                                <h3 className='text-our_red text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3'>
                                    2) Myth: Donating blood hurts.
                                </h3>
                                <p>
                                    <span className='font-bold'>Fact:</span> The discomfort you'll feel when donating is very minimal. There will be a slight pinch when the needle goes in, but you shouldn't feel a thing after that. The Blood Connection's skilled team will ensure you have a comfortable experience from start to finish.
                                </p>
                            </div>

                            <div>
                                <h3 className='text-our_red text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3'>
                                    3) Myth: If you don't have a rare blood type, your donation isn't needed.
                                </h3>
                                <p>
                                    <span className='font-bold'>Fact:</span> Your donation is valuable regardless of your blood type. Common blood types are needed by more people, meaning more donations are required to maintain a steady supply. And for rare types, there's a smaller pool of donors. Long story short, your single donation — no matter your blood type — can save up to three lives, and that's worth doing.
                                </p>
                            </div>

                            <div>
                                <h3 className='text-our_red text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3'>
                                    4) Myth: You can't donate if you're on medication.
                                </h3>
                                <p>
                                    <span className='font-bold'>Fact:</span> Most medications don't disqualify you as a donor. More often, the medical condition that warrants the medication is the factor that impacts your eligibility. Of course, certain medicines, including anticoagulants, antiplatelet drugs, and some acne treatments, may render you ineligible to donate. If you're unsure how your medication impacts your ability to donate, talk to a team member at your local donation center.
                                </p>
                            </div>

                            <div>
                                <h3 className='text-our_red text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3'>
                                    5) Myth: Donating will deplete your own blood supply.
                                </h3>
                                <p>
                                    <span className='font-bold'>Fact:</span> The average adult human body contains about 10 pints of blood. When you donate blood, only one of those pints is collected, leaving plenty for you to resume your day as usual. Your plasma levels can return to normal in as little as 24 hours. Red blood cells take about four to six weeks to completely replenish, which is why you can donate every 56 days. Ultimately, donating blood will not deplete your own blood supply in the long term due to the human body's ability to quickly regenerate blood cells.
                                </p>
                            </div>

                            <div>
                                <h3 className='text-our_red text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3'>
                                    6) Myth: Donating blood can make you sick.
                                </h3>
                                <p>
                                    <span className='font-bold'>Fact:</span> If you're healthy when you walk into your donation center, you'll walk out the same way. Our donation centers follow strict protocols to keep the equipment sterile, and we work hard to make sure the donation process is safe for every donor. Of course, it's possible to experience lightheadedness or mild fatigue immediately after donating, but you'll be provided a snack and drink to help ease those symptoms. In most instances, these symptoms pass quickly and on their own.
                                </p>
                            </div>

                            <div>
                                <h3 className='text-our_red text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3'>
                                    7) Myth: There are plenty of donors already.
                                </h3>
                                <p>
                                    <span className='font-bold'>Fact:</span> Someone needs blood in the U.S. every two seconds, meaning there is always a need for more blood. On top of the constant need, blood has a limited shelf life, making maintaining an adequate supply even more challenging. A steady national blood supply helps meet both anticipated and unanticipated demand. Seasonal fluctuations and emergencies can cause shortages, making it difficult for people to get the lifesaving resources they need. A consistent group of regular donors ensures a reliable blood supply that can support emergency surgeries and ongoing treatments.
                                </p>
                            </div>
                        </div>

                        <p className='mt-8 sm:mt-10 lg:mt-12'>
                            Every donation matters, whether you give once or become a regular donor. Our priority is to keep you informed and comfortable throughout the entire donation process so that you can walk into our donation centers feeling confident about your life-saving decision.
                        </p>
                    </div>
                </div>
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

export default Blog_3;