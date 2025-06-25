// import React from 'react'

// import { Link } from 'react-router-dom';
// import { useAuth } from "../../context/auth";
// import Footer1 from '../Footer1';
// import Footer2 from '../Footer2';

// import { useNavigate } from 'react-router-dom';

// function Blog_1() {

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
//                 <img src="./blog1.jpg" alt="" />
//                 <h1 className='text-our_red text-4xl font-bold w-[90%] my-10'>
//                     Donating Platelets: A Practical Guide to a Critical Contribution
//                 </h1>
//                 <p>
//                     Blood consists of several components, each with a distinct and potentially lifesaving role. Platelets are a blood component that plays a critical role in <span className='font-bold'>supporting life, especially for surgery patients, transplant recipients, and anyone</span> undergoing treatment for cancer or leukemia.
//                 </p>
//                 <p className='my-10'>
//                     Despite platelets’ distinct properties, the qualifications for donating platelets are similar to those for donating whole blood. One of the benefits of this process is that it makes it easier for someone to donate more frequently than traditional blood donations. The platelet donation process takes longer than traditional blood donations but enables more platelets to be collected each visit.
//                 </p>
//                 <p>
//                     We can’t overstate the impact of platelet donations. And because of the constant need for this critical blood product, a steady pool of donors is all the more important.
//                 </p>
//                 <h1 className='text-our_red text-4xl font-bold w-[80%] my-10'>
//                     What Makes Platelets Unique?
//                 </h1>

//                 <p>
//                     Platelets are tiny cells in your blood that are responsible for forming clots and stopping bleeding. They are essential to those who have cancer, chronic diseases, and traumatic injuries. A significant side effect of cancer treatment is a lowered platelet count, putting patients at risk of life-threatening bleeding. Platelet transfusions help patients’ blood clot properly, enabling them to continue undergoing treatment.
//                 </p>
//                 <p className='my-10'>
//                     Those suffering from blood disorders can also benefit from platelet transfusions. Blood disorders and other chronic conditions can lead to low platelet counts, making platelet transfusions essential to maintaining the blood’s ability to clot. Similarly, patients undergoing major surgeries or recovering from serious injuries may require platelet transfusions to replace those lost due to extensive bleeding.
//                 </p>
//                 <h1 className='text-our_red text-4xl font-bold w-[80%] my-10'>The Need for Platelets</h1>

//                 <p className=''>
//                     <span className='font-bold'>Approximately 2 million units of platelets are transfused each year in the U.S. This breaks down to someone needing platelets every 15 seconds.</span> The need is only intensified by the fact that platelets must be used within five days of their donation. Platelets’ short shelf life means the need for donations is constant. Without a consistent pool of donors, the national platelet supply will dwindle, and patients won’t be able to receive the lifesaving treatment they need.
//                 </p>
//                 <p className='my-10'>
//                     Emergency situations can cause sudden surges in demand. So, not only does there need to be enough supply to meet ongoing needs, but there also needs to be enough to treat patients with unexpected needs and critical situations.
//                 </p>
//                 <p>
//                     Because platelet donation is a more specialized process, fewer people are aware of the need, creating a smaller pool of donors. Increasing awareness about the purpose of and need for platelet donations is essential to maintaining a sufficient supply for patients in need.
//                 </p>

//                 <h1 className='text-our_red text-4xl font-bold w-[80%] my-10'>How Platelet Donation Works</h1>

//                 <p>
//                     Platelets are collected through a process known as apheresis, during which a cell-separating machine withdraws the platelets and returns the remaining blood cells and plasma to the donor. This process allows a single donor to provide a large quantity of platelets. For comparison, <span className='font-bold'>it can take 12 to 18 whole blood donations to provide the equivalent of a single platelet donation.</span>
//                 </p>
//                 <p className='mt-10'>
//                     Here’s how the platelet collection process works: A small amount of blood is drawn from a donor’s arm and goes into the blood cell separator. The blood is rapidly spun to separate the plasma from the other blood components. The plasma cells then go into a sterile plastic bag, and the rest of the blood — your plasma, red blood cells, and white blood cells — is returned. This cycle repeats until several transfusable platelet units are collected. The amount collected could provide up to three platelet transfusions.
//                 </p>
//                 <p className='mt-10'>
//                     <span className='font-bold'>Donating platelets takes about 2.5 hours,</span> but many donors see this time as a chance to unwind from daily stress. Plus, they get the peace of mind that their donation is helping save lives. While platelet donations take longer than whole blood donations, they offer some unique benefits. Since you get your fluids and red blood cells back after donating platelets, you may feel less sluggish when you’re finished. Also, platelet donations use a smaller needle than blood donations, which some donors find to be more comfortable.
//                 </p>
//                 <p className='mt-10'>
//                     Donors can give platelets at one of our blood donation centers every seven days. <span className='font-bold'>You must be 17 years old, weigh at least 110 pounds,</span> and feel healthy to donate. To prepare for your donation, stay hydrated and eat a healthy meal on the day of your appointment.
//                 </p>
//                 <p className='my-10'>
//                     At The Blood Connection, we offer a Platelet Plus rewards system that rewards donors based on the number of donations they make in a year. You’ll receive a specific dollar amount per donation for each donor level, and your rewards status can be viewed in your Donor Portal.
//                 </p>
//                 <p className='mb-20'>
//                     Platelet donors play a crucial role in saving lives every day. Platelets’ short shelf life and constant need for platelet transfusions make having a steady supply of donors a must. If you’re considering becoming a platelet donor, we’d encourage you to make an appointment at The Blood Connection today. Your donation matters, and we are grateful for each and every person who decides to give their time — <span className='font-bold'>and platelets</span> — to help those in need.
//                 </p>








//             </div>

//             <Footer1 />
//             <Footer2 />

//         </div>
//     )
// }

// export default Blog_1


















































import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from "../../context/auth";
import Footer1 from '../Footer1';
import Footer2 from '../Footer2';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from "framer-motion";

function Blog_1() {
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
                <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12'>
                    <img
                        src="./blog1.jpg"
                        alt="Blog Banner"
                        className="w-full h-auto rounded-lg shadow-md mb-6 sm:mb-8 lg:mb-10 object-cover"
                    />

                    <h1 className='text-our_red text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 lg:mb-8 leading-tight'>
                        Donating Platelets: A Practical Guide to a Critical Contribution
                    </h1>

                    <div className="prose max-w-none space-y-5 sm:space-y-6 lg:space-y-8 text-gray-800 leading-relaxed text-sm sm:text-base">
                        <p>
                            Blood consists of several components, each with a distinct and potentially lifesaving role. Among these, platelets stand out for their unique function in clotting and their critical importance in medical treatments. Unlike whole blood donations, platelet donations require a specialized process and have specific eligibility criteria.
                        </p>
                        <p>
                            Despite platelets' distinct properties, the qualifications for donating platelets are similar to those for whole blood donation. Donors must be in good health, at least 17 years old (in most states), and meet weight requirements. However, platelet donors have additional considerations, such as avoiding aspirin for 48 hours prior to donation, as it can affect platelet function.
                        </p>
                        <p>
                            We can't overstate the impact of platelet donations. These tiny cells have a shelf life of just five days, making regular donations essential to maintaining supply. Cancer patients undergoing chemotherapy, trauma victims, and those undergoing major surgeries often depend on platelet transfusions to survive.
                        </p>

                        <h2 className='text-our_red text-xl sm:text-2xl lg:text-3xl font-bold mt-8 sm:mt-10 mb-4 sm:mb-6'>
                            What Makes Platelets Unique?
                        </h2>

                        <p>
                            Platelets are tiny cells in your blood that are responsible for forming clots to stop bleeding. Unlike red blood cells that can be stored for weeks, platelets have a very short shelf life of only five days. This makes maintaining an adequate supply particularly challenging for blood banks and hospitals.
                        </p>
                        <p>
                            Those suffering from blood disorders can also benefit from platelet transfusions. Conditions like aplastic anemia, where the bone marrow doesn't produce enough blood cells, or immune thrombocytopenia, where the immune system destroys platelets, often require regular platelet transfusions as part of treatment.
                        </p>

                        <h2 className='text-our_red text-xl sm:text-2xl lg:text-3xl font-bold mt-8 sm:mt-10 mb-4 sm:mb-6'>
                            The Need for Platelets
                        </h2>

                        <p>
                            <span className='font-bold'>Approximately 2 million units of platelets are transfused each year in the U.S. alone.</span> The demand is constant, as platelets are essential for:
                        </p>
                        <ul className='list-disc pl-5 space-y-2'>
                            <li>Cancer patients undergoing chemotherapy</li>
                            <li>Organ transplant recipients</li>
                            <li>Trauma victims with severe bleeding</li>
                            <li>Patients undergoing major surgeries</li>
                            <li>Those with blood disorders</li>
                        </ul>
                        <p>
                            Emergency situations can cause sudden surges in demand. Natural disasters, mass casualty events, or even seasonal fluctuations can strain platelet supplies. Unlike other blood products, platelets cannot be stockpiled well in advance due to their short shelf life.
                        </p>

                        <h2 className='text-our_red text-xl sm:text-2xl lg:text-3xl font-bold mt-8 sm:mt-10 mb-4 sm:mb-6'>
                            How Platelet Donation Works
                        </h2>

                        <p>
                            Platelets are collected through a process known as apheresis. This specialized donation procedure uses a sophisticated machine that separates your blood into its components, retains the platelets, and returns the remaining blood components to you. This allows for the collection of more platelets than could be obtained from a whole blood donation.
                        </p>
                        <p>
                            Here's how the platelet collection process works:
                        </p>
                        <ol className='list-decimal pl-5 space-y-2'>
                            <li>You're comfortably seated in a reclining chair</li>
                            <li>A sterile needle is placed in your arm</li>
                            <li>Blood is drawn into the apheresis machine</li>
                            <li>The machine separates and collects platelets</li>
                            <li>Other blood components are returned to you</li>
                            <li>The cycle repeats several times</li>
                        </ol>
                        <p>
                            <span className='font-bold'>Donating platelets takes about 2.5 hours</span> (compared to 10 minutes for whole blood), but the impact is profound. A single platelet donation can provide enough platelets for a full therapeutic dose for an adult patient, whereas it would take 4-6 whole blood donations to obtain the same number of platelets.
                        </p>
                        <p>
                            Donors can give platelets at one of our blood donation centers every seven days, up to 24 times a year. This frequency is possible because your body replaces platelets quickly, usually within 48 hours. Many dedicated donors schedule regular appointments to help maintain a stable supply.
                        </p>
                        <p className='pb-6 sm:pb-8 lg:pb-10'>
                            Platelet donors play a crucial role in saving lives every day. Their commitment provides hope for patients facing serious medical challenges. If you're considering becoming a platelet donor, we encourage you to contact your local blood center to learn more about the process and how you can help.
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

export default Blog_1;
