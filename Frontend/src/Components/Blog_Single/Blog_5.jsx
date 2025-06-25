// import React from 'react'

// import { Link } from 'react-router-dom';
// import { useAuth } from "../../context/auth";
// import Footer1 from '../Footer1';
// import Footer2 from '../Footer2';

// import { useNavigate } from 'react-router-dom';

// function Blog_5() {

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
//                 <img src="./blog5.jpg" alt="" />

//                 <h1 className='text-our_red text-4xl font-bold w-[%] my-10'>
//                     The Human Side of Blood Donation: Personal Stories from Recipients
//                 </h1>

//                 <p>
//                     Behind every pint of donated blood lies an incredible story, one of lives touched by the generosity of strangers. But every blood donation is more than a random act of kindness. It’s a connection forged between individuals, creating a culture of generosity and gratitude.
//                 </p>
//                 <p className='my-10'>
//                     At The Blood Connection, our goal is to help everyone who needs blood have access to it. This is a big goal, and we realize it’s unattainable without the generosity of donors. From mothers dealing with complications during childbirth to children battling leukemia, <span className='font-bold'>there are countless people in need of this life-saving resource.</span> We are immensely grateful to have witnessed many recipients get the critical transfusions they need. These are their stories.
//                 </p>

//                 <h1 className='text-our_red text-4xl font-bold w-[80%] my-10'>The Gift of Life</h1>

//                 <p>
//                     For many, blood transfusions are a life-saving gift. Whether suffering from an ongoing condition or a victim of an unexpected accident, countless individuals find themselves in life-or-death situations that require blood donations for survival.
//                 </p>
//                 <p className='my-10'>
//                     Kristen’s time of need came during the birth of her first child. After a smooth pregnancy, she experienced a placental abruption during delivery, which led to a massive hemorrhage. She needed transfusions immediately, and ended up <span className='font-bold'>receiving 28 units of platelets, plasma, and whole blood.</span>
//                 </p>
//                 <p className='my-10'>
//                     “I just remember them bringing bag after bag after bag,” <span className='font-bold'>Kristen shared.</span> Her transfusions continued after being moved to the ICU. As scary as the whole experience was, Kristen looks back and knows that she wouldn’t have survived without those transfusions. <span className='font-bold'>“It’s been such a humbling experience to realize that the blood other people gave me saved my life.”</span>
//                 </p>
//                 <p className='my-10'>
//                     Thanks to the generosity of donors, Luca and his family have experienced the hope that only blood donations can provide. <span className='font-bold'>“When your child has been diagnosed with cancer, you feel absolutely helpless,”</span> said Luca’s parents. “We’re so thankful that he’s here and that he has people who donate blood.”
//                 </p>
//                 <p className='my-10'>
//                     Luca’s parents urge people to donate, even if the impact of a single donation seems insignificant. Their journey through cancer with Luca has taught them that every donation counts. <span className='font-bold'>“You just don’t understand how much of an impact you’re making on people by donating.”</span>
//                 </p>

//                 <h1 className='text-our_red text-4xl font-bold w-[80%] my-10'>
//                     From Despair to Hope
//                 </h1>

//                 <p>
//                     During the pandemic, the world was searching for anything and everything that would help those who fell critically ill from <span className='font-bold'>COVID-19.</span> The Blood Connection rose to the occasion and became the first blood center to offer antibody testing during the pandemic. By collecting donations from recovered <span className='font-bold'>COVID-19</span> patients, we were able to acquire a blood product, known as convalescent plasma, that had antibodies to help those struggling to fight the virus.
//                 </p>
//                 <p className='my-10'>
//                     But as soon as Lisa started to lose hope, a doctor approached her with some great news: they had a donor for her. <span className='font-bold'>“I can’t even tell you, my heart just filled with hope,”</span> Lisa said. “I knew that somebody cared enough to go and donate.” As the transfusion began, Lisa immediately felt it working in her body. <span className='font-bold'>“I looked up at the bag, and it was just a bag of gold.”</span>
//                 </p>


//             </div>

//             <Footer1 />
//             <Footer2 />

//         </div>
//     )
// }

// export default Blog_5































import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from "../../context/auth";
import Footer1 from '../Footer1';
import Footer2 from '../Footer2';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from "framer-motion";

function Blog_5() {
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
                        src="./blog5.jpg"
                        alt="Human side of blood donation"
                        className="w-full h-auto rounded-lg shadow-md mb-6 sm:mb-8 lg:mb-10"
                    />

                    <h1 className='text-our_red text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 lg:mb-8 leading-tight'>
                        The Human Side of Blood Donation: Personal Stories from Recipients
                    </h1>

                    <div className="prose max-w-none space-y-4 sm:space-y-5 lg:space-y-6 text-gray-800 leading-relaxed text-sm sm:text-base">
                        <p>
                            Behind every pint of donated blood lies an incredible story, one of lives touched by the generosity of strangers. But every blood donation is more than a random act of kindness. It's a connection forged between individuals, creating a culture of generosity and gratitude.
                        </p>
                        <p>
                            At The Blood Connection, our goal is to help everyone who needs blood have access to it. This is a big goal, and we realize it's unattainable without the generosity of donors. From mothers dealing with complications during childbirth to children battling leukemia, <span className='font-bold'>there are countless people in need of this life-saving resource.</span> We are immensely grateful to have witnessed many recipients get the critical transfusions they need. These are their stories.
                        </p>

                        <h2 className='text-our_red text-xl sm:text-2xl lg:text-3xl font-bold mt-8 sm:mt-10 mb-4 sm:mb-6'>
                            The Gift of Life
                        </h2>

                        <p>
                            For many, blood transfusions are a life-saving gift. Whether suffering from an ongoing condition or a victim of an unexpected accident, countless individuals find themselves in life-or-death situations that require blood donations for survival.
                        </p>
                        <p>
                            Kristen's time of need came during the birth of her first child. After a smooth pregnancy, she experienced a placental abruption during delivery, which led to a massive hemorrhage. She needed transfusions immediately, and ended up <span className='font-bold'>receiving 28 units of platelets, plasma, and whole blood.</span>
                        </p>
                        <p>
                            "I just remember them bringing bag after bag after bag," <span className='font-bold'>Kristen shared.</span> Her transfusions continued after being moved to the ICU. As scary as the whole experience was, Kristen looks back and knows that she wouldn't have survived without those transfusions. <span className='font-bold'>"It's been such a humbling experience to realize that the blood other people gave me saved my life."</span>
                        </p>
                        <p>
                            Thanks to the generosity of donors, Luca and his family have experienced the hope that only blood donations can provide. <span className='font-bold'>"When your child has been diagnosed with cancer, you feel absolutely helpless,"</span> said Luca's parents. "We're so thankful that he's here and that he has people who donate blood."
                        </p>
                        <p>
                            Luca's parents urge people to donate, even if the impact of a single donation seems insignificant. Their journey through cancer with Luca has taught them that every donation counts. <span className='font-bold'>"You just don't understand how much of an impact you're making on people by donating."</span>
                        </p>

                        <h2 className='text-our_red text-xl sm:text-2xl lg:text-3xl font-bold mt-8 sm:mt-10 mb-4 sm:mb-6'>
                            From Despair to Hope
                        </h2>

                        <p>
                            During the pandemic, the world was searching for anything and everything that would help those who fell critically ill from <span className='font-bold'>COVID-19.</span> The Blood Connection rose to the occasion and became the first blood center to offer antibody testing during the pandemic. By collecting donations from recovered <span className='font-bold'>COVID-19</span> patients, we were able to acquire a blood product, known as convalescent plasma, that had antibodies to help those struggling to fight the virus.
                        </p>
                        <p>
                            But as soon as Lisa started to lose hope, a doctor approached her with some great news: they had a donor for her. <span className='font-bold'>"I can't even tell you, my heart just filled with hope,"</span> Lisa said. "I knew that somebody cared enough to go and donate." As the transfusion began, Lisa immediately felt it working in her body. <span className='font-bold'>"I looked up at the bag, and it was just a bag of gold."</span>
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

export default Blog_5;