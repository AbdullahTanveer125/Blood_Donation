// import React from 'react'

// import { Link } from 'react-router-dom';
// import { useAuth } from "../../context/auth";
// import Footer1 from '../Footer1';
// import Footer2 from '../Footer2';

// import { useNavigate } from 'react-router-dom';

// function Blog_4() {

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
//                 <img src="./blog4.jpg" alt="" />

//                 <h1 className='text-our_red text-4xl font-bold w-[90%] my-10'>
//                     Maintaining Blood Donor Health: Tips for Optimal Well-Being
//                 </h1>

//                 <p className='mb-10'>
//                     Being a blood donor is a selfless act that makes a lifelong difference. Every one of your donations has the potential to save up to three lives. But despite the profound impact donating blood can make for others, <span className='font-bold'>it’s important to consider your health and wellness as a donor as well.</span>
//                 </p>
//                 <p>
//                     Whether you’re a regular donor or thinking about donating for the first time, taking care of yourself is essential not only for your well-being but also for the effectiveness of your contribution. Before you donate, there are a few simple steps you can take to ensure your gift doesn’t negatively affect your health.
//                 </p>
//                 <h1 className='text-our_red text-4xl font-bold w-[80%] my-10'>
//                     The Importance of Blood Donor Health
//                 </h1>

//                 <p>
//                     If you’re in good health when you show up to give blood, you’re more likely to have a smooth donation process and make a contribution that maintains a safe and reliable blood supply. A healthy national blood supply helps those needing a transfusion experience the benefits of donated blood without fear of adverse effects.
//                 </p>
//                 <p className='my-10'>
//                     To ensure you’re healthy when you donate, we start each visit by conducting a mini-physical that measures your blood pressure, hemoglobin, and pulse. Your blood pressure should be below <span className='font-bold'>180/100</span> at the time of donation. If you struggle with high blood pressure, don’t worry. You can still be eligible to donate even if you take blood pressure medication.
//                 </p>
//                 <p>
//                     Hemoglobin is important because it’s the protein in red blood cells that carries oxygen throughout the body. Low iron levels can contribute to low hemoglobin levels, making maintaining healthy iron levels essential. Your body also needs iron to generate new blood cells to replace the ones lost through donation. By checking your hemoglobin when you arrive, we’re making sure that your body is ready to donate and your blood is healthy enough to benefit potential recipients.
//                 </p>

//                 <h1 className='text-our_red text-4xl font-bold w-[80%] my-10'>
//                     4 Ways To Ensure a Successful Donation
//                 </h1>
//                 <p>
//                     As a donor, you should be looking after your health — not just to give a successful donation but to increase the overall quality of your life. At The Blood Connection, we value our donors’ well-being. We don’t just see you as a means to collect donations. Your health matters to us whether you donate or not. With clear benefits for you and those you may help, let’s look at the top four ways to make your donation smooth and easy.
//                 </p>

//                 <div className='pl-20'>
//                     <h1 className='text-our_red text-2xl font-bold w-[80%] mt-10'>
//                         1) Eat a balanced diet
//                     </h1>
//                     <p>
//                         A balanced diet promotes your overall health, helping you get more out of each day. Focus on a diet rich in fruits, vegetables, lean proteins, whole grains, and healthy fats. Ensure you eat plenty of iron-rich foods, such as spinach, beans, red meat, poultry, and fortified cereals to help keep your iron and hemoglobin levels up. Vitamin C-rich foods like oranges and bell peppers can help enhance iron absorption. Prior to any donation appointment, do your best to steer clear of iron blockers, such as coffee, tea, and chocolate, as these foods will combat your body’s ability to absorb iron.
//                     </p>

//                     <h1 className='text-our_red text-2xl font-bold w-[80%] mt-10'>
//                         2) Stay hydrated
//                     </h1>
//                     <p>
//                         You are what you eat, but what you drink matters just as much. If you’re planning to donate blood, drink plenty of fluids — especially water — in the days and hours leading up to your donation. If you’re properly hydrated, your blood donation is more likely to go smoothly, and your blood volume will stay at optimal levels.
//                     </p>
//                     <p className='mt-10'>
//                         Staying hydrated helps your blood volume return to normal faster after donating. If you’re not properly hydrated, the fluids lost during donation can cause a significant drop in your blood pressure and make you feel faint or dizzy. As a general rule, you should also steer clear of alcoholic and highly caffeinated beverages before and after you donate, as both can negatively affect your hydration levels.
//                     </p>
//                     <h1 className='text-our_red text-2xl font-bold w-[80%] mt-10'>
//                         3) Get plenty of rest
//                     </h1>
//                     <p>
//                         Getting enough rest is good for your mind, body, and soul. It also makes it easier to give blood without experiencing adverse effects. You should aim to get seven to nine hours of quality sleep each night, especially the night before your appointment. This amount of rest is especially crucial to help your body recover and regenerate after donating. Beyond its importance for blood donation, consistently getting quality sleep will help you maintain your overall health.
//                     </p>

//                     <h1 className='text-our_red text-2xl font-bold w-[80%] mt-10'>
//                         4) Be intentional about exercise
//                     </h1>
//                     <p>
//                         Exercising regularly will pay incredible dividends for your cardiovascular health and physical well-being. That being said, you should avoid working out immediately before or after donating to prevent dizziness and fatigue. Try to find an exercise routine that works for you between donations and stick with it.
//                     </p>
//                 </div>

//                 <p className='mt-10 mb-20'>
//                     Our goal at The Blood Connection is to enrich the lives of those in our community, and that includes you, our donors. We hope these steps give you a practical way to become the healthiest version of yourself — because when you’re healthy, you’re better able to help others. And if you’re a blood donor, your helpfulness can make a lifesaving difference.
//                 </p>

//             </div>

//             <Footer1 />
//             <Footer2 />


//         </div>
//     )
// }

// export default Blog_4






























import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from "../../context/auth";
import Footer1 from '../Footer1';
import Footer2 from '../Footer2';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from "framer-motion";

function Blog_4() {
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
                        src="./blog4.jpg"
                        alt="Maintaining blood donor health"
                        className="w-full h-auto rounded-lg shadow-md mb-6 sm:mb-8 lg:mb-10"
                    />

                    <h1 className='text-our_red text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 lg:mb-8 leading-tight'>
                        Maintaining Blood Donor Health: Tips for Optimal Well-Being
                    </h1>

                    <div className="prose max-w-none space-y-4 sm:space-y-5 lg:space-y-6 text-gray-800 leading-relaxed text-sm sm:text-base">
                        <p>
                            Being a blood donor is a selfless act that makes a lifelong difference. Every one of your donations has the potential to save up to three lives. But despite the profound impact donating blood can make for others, <span className='font-bold'>it's important to consider your health and wellness as a donor as well.</span>
                        </p>
                        <p>
                            Whether you're a regular donor or thinking about donating for the first time, taking care of yourself is essential not only for your well-being but also for the effectiveness of your contribution. Before you donate, there are a few simple steps you can take to ensure your gift doesn't negatively affect your health.
                        </p>

                        <h2 className='text-our_red text-xl sm:text-2xl lg:text-3xl font-bold mt-8 sm:mt-10 mb-4 sm:mb-6'>
                            The Importance of Blood Donor Health
                        </h2>

                        <p>
                            If you're in good health when you show up to give blood, you're more likely to have a smooth donation process and make a contribution that maintains a safe and reliable blood supply. A healthy national blood supply helps those needing a transfusion experience the benefits of donated blood without fear of adverse effects.
                        </p>
                        <p>
                            To ensure you're healthy when you donate, we start each visit by conducting a mini-physical that measures your blood pressure, hemoglobin, and pulse. Your blood pressure should be below <span className='font-bold'>180/100</span> at the time of donation. If you struggle with high blood pressure, don't worry. You can still be eligible to donate even if you take blood pressure medication.
                        </p>
                        <p>
                            Hemoglobin is important because it's the protein in red blood cells that carries oxygen throughout the body. Low iron levels can contribute to low hemoglobin levels, making maintaining healthy iron levels essential. Your body also needs iron to generate new blood cells to replace the ones lost through donation. By checking your hemoglobin when you arrive, we're making sure that your body is ready to donate and your blood is healthy enough to benefit potential recipients.
                        </p>

                        <h2 className='text-our_red text-xl sm:text-2xl lg:text-3xl font-bold mt-8 sm:mt-10 mb-4 sm:mb-6'>
                            4 Ways To Ensure a Successful Donation
                        </h2>
                        <p>
                            As a donor, you should be looking after your health — not just to give a successful donation but to increase the overall quality of your life. At The Blood Connection, we value our donors' well-being. We don't just see you as a means to collect donations. Your health matters to us whether you donate or not. With clear benefits for you and those you may help, let's look at the top four ways to make your donation smooth and easy.
                        </p>

                        <div className="space-y-8 sm:space-y-10 lg:space-y-12 pl-0 sm:pl-4 lg:pl-8">
                            <div>
                                <h3 className='text-our_red text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3'>
                                    1) Eat a balanced diet
                                </h3>
                                <p>
                                    A balanced diet promotes your overall health, helping you get more out of each day. Focus on a diet rich in fruits, vegetables, lean proteins, whole grains, and healthy fats. Ensure you eat plenty of iron-rich foods, such as spinach, beans, red meat, poultry, and fortified cereals to help keep your iron and hemoglobin levels up. Vitamin C-rich foods like oranges and bell peppers can help enhance iron absorption. Prior to any donation appointment, do your best to steer clear of iron blockers, such as coffee, tea, and chocolate, as these foods will combat your body's ability to absorb iron.
                                </p>
                            </div>

                            <div>
                                <h3 className='text-our_red text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3'>
                                    2) Stay hydrated
                                </h3>
                                <p>
                                    You are what you eat, but what you drink matters just as much. If you're planning to donate blood, drink plenty of fluids — especially water — in the days and hours leading up to your donation. If you're properly hydrated, your blood donation is more likely to go smoothly, and your blood volume will stay at optimal levels.
                                </p>
                                <p>
                                    Staying hydrated helps your blood volume return to normal faster after donating. If you're not properly hydrated, the fluids lost during donation can cause a significant drop in your blood pressure and make you feel faint or dizzy. As a general rule, you should also steer clear of alcoholic and highly caffeinated beverages before and after you donate, as both can negatively affect your hydration levels.
                                </p>
                            </div>

                            <div>
                                <h3 className='text-our_red text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3'>
                                    3) Get plenty of rest
                                </h3>
                                <p>
                                    Getting enough rest is good for your mind, body, and soul. It also makes it easier to give blood without experiencing adverse effects. You should aim to get seven to nine hours of quality sleep each night, especially the night before your appointment. This amount of rest is especially crucial to help your body recover and regenerate after donating. Beyond its importance for blood donation, consistently getting quality sleep will help you maintain your overall health.
                                </p>
                            </div>

                            <div>
                                <h3 className='text-our_red text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3'>
                                    4) Be intentional about exercise
                                </h3>
                                <p>
                                    Exercising regularly will pay incredible dividends for your cardiovascular health and physical well-being. That being said, you should avoid working out immediately before or after donating to prevent dizziness and fatigue. Try to find an exercise routine that works for you between donations and stick with it.
                                </p>
                            </div>
                        </div>

                        <p className='mt-8 sm:mt-10 lg:mt-12'>
                            Our goal at The Blood Connection is to enrich the lives of those in our community, and that includes you, our donors. We hope these steps give you a practical way to become the healthiest version of yourself — because when you're healthy, you're better able to help others. And if you're a blood donor, your helpfulness can make a lifesaving difference.
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

export default Blog_4;