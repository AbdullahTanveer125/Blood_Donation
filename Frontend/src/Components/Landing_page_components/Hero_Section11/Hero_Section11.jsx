// import React, { useState } from "react";
// import { Link, useNavigate } from 'react-router-dom';
// import { motion, AnimatePresence } from "framer-motion";

// const Hero_Section11 = () => {
//   const navigate = useNavigate();
//   const [showLoginForm, setShowLoginForm] = useState(false);
//   const [showSignupForm, setShowSignupForm] = useState(false);
//   const [selectedOption, setSelectedOption] = useState("");

//   const handleLoginSubmit = () => {
//     if (selectedOption === "option1") navigate("/donor_login");
//     else if (selectedOption === "option2") navigate("/recipient_login");
//     else if (selectedOption === "option3") navigate("/organization_login");
//   };

//   const handleSignupSubmit = () => {
//     if (selectedOption === "option1") navigate("/donor_signup");
//     else if (selectedOption === "option2") navigate("/recipient_signup");
//     else if (selectedOption === "option3") navigate("/organization_signup");
//   };

//   const renderForm = (type) => (
//     <motion.div
//       className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-10 backdrop-blur-sm"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//     >
//       <motion.div
//         initial={{ scale: 0 }}
//         animate={{ scale: 1 }}
//         exit={{ scale: 0 }}
//         transition={{ duration: 0.4, ease: "easeOut" }}
//         className="bg-white backdrop-blur-lg border border-white/20 p-8 rounded-lg shadow-lg w-80 relative"
//       >
//         <button
//           className="absolute top-2 right-3 text-xl font-bold"
//           onClick={() => {
//             setShowLoginForm(false);
//             setShowSignupForm(false);
//             setSelectedOption("");
//           }}
//         >
//           ×
//         </button>

//         <h2 className="text-2xl text-our_red font-bold text-center mb-6">
//           {type === "login" ? "Login as a" : "Sign Up as a"}
//         </h2>

//         <div className="flex flex-col space-y-3">
//           {["Donor", "Recipient", "Organization"].map((role, idx) => {
//             const value = `option${idx + 1}`;
//             return (
//               <label key={value} className="flex items-center space-x-2 cursor-pointer">
//                 <input
//                   type="radio"
//                   name={`${type}_selection`}
//                   value={value}
//                   onChange={() => setSelectedOption(value)}
//                   checked={selectedOption === value}
//                   className="w-5 h-5 text-our_red focus:ring-our_red"
//                 />
//                 <span className="text-our_red">{role}</span>
//               </label>
//             );
//           })}
//         </div>

//         <div className="flex justify-center mt-6">
//           <button
//             onClick={type === "login" ? handleLoginSubmit : handleSignupSubmit}
//             disabled={!selectedOption}
//             className={`px-5 py-1 text-sm rounded-full transition duration-300 ${
//               selectedOption
//                 ? "bg-[#820000] border border-[#820000] text-white hover:bg-white hover:text-[#820000] hover:font-bold"
//                 : "bg-gray-300 text-gray-500 cursor-not-allowed"
//             }`}
//           >
//             Submit
//           </button>
//         </div>
//       </motion.div>
//     </motion.div>
//   );

//   return (
//     <div className="font-nunito relative">
//       {/* Hero Section */}
//       <section
//         className="min-h-screen bg-cover bg-center flex flex-col"
//         style={{ backgroundImage: "url('/landing_hero_image.png')" }}
//       >
//         <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

//         <nav className="flex justify-between items-center mt-3 mx-8 pr-4 bg-white/50 backdrop-blur-md shadow-md rounded-full relative z-10">
//           <div className="pl-2 text-xl font-bold text-white flex items-center gap-2">
//             <img className="w-14" src="./logo.png" alt="Logo" />
//             <span className="tracking-wider">URGENT DROP</span>
//           </div>
//           <div className="hidden md:flex space-x-6 text-white font-medium">
//             <Link to="/">Home</Link>
//             <Link to="/about_us">About Us</Link>
//             <Link to="/all_blogs">Blogs</Link>
//             <Link to="/all_events">Events</Link>
//           </div>
//           <div className="flex space-x-4">
//             <button
//               onClick={() => setShowLoginForm(true)}
//               className="text-white font px-4 py-1 rounded-full hover:bg-red-50 hover:text-[#820000] transition"
//             >
//               Log In
//             </button>
//             <button
//               onClick={() => setShowSignupForm(true)}
//               className="bg-our_red text-white px-6 py-1 rounded-full hover:bg-red-600 transition"
//             >
//               Sign Up
//             </button>
//           </div>
//         </nav>

//         <div className="relative flex-1 flex items-center justify-center z-10">
//           <div className="text-white text-center px-4">
//             <h1 className="text-4xl md:text-5xl font-bold mb-4">EVERY DROP COUNTS!</h1>
//             <p className="text-lg md:text-xl mb-6">Your small act of kindness can save a life today.</p>
//             <button className="bg-our_red hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-full shadow-lg">
//               Donate Now
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Forms */}
//       <AnimatePresence>{showLoginForm && renderForm("login")}</AnimatePresence>
//       <AnimatePresence>{showSignupForm && renderForm("signup")}</AnimatePresence>
//     </div>
//   );
// };

// export default Hero_Section11;
























import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion";

const Hero_Section11 = () => {
  const navigate = useNavigate();
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showSignupForm, setShowSignupForm] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // New state for mobile menu

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

        <h2 className="text-xl sm:text-2xl text-our_red font-bold text-center mb-4 sm:mb-6">
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

        <div className="flex justify-center mt-4 sm:mt-6">
          <button
            onClick={type === "login" ? handleLoginSubmit : handleSignupSubmit}
            disabled={!selectedOption}
            className={`px-4 py-1 sm:px-5 text-sm rounded-full transition duration-300 ${selectedOption
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
    <div className="font-nunito relative">
      {/* Hero Section */}
      <section
        className="min-h-screen bg-cover bg-center flex flex-col"
        style={{ backgroundImage: "url('/landing_hero_image.png')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

        {/* Navigation */}
        <nav className="flex justify-between items-center px-2 md:mt-4 md:py-1 mx-4 sm:mx-6 mt-3 md:mx-8 md:pr-4 bg-white/50 backdrop-blur-md shadow-md rounded-full relative z-10">
          <div className="flex items-center gap-1 sm:gap-2">
            <img className="w-10 sm:w-12 md:w-14" src="./logo.png" alt="Logo" />
            <span className="text-xs sm:text-base md:text-lg font-bold text-white tracking-wider">URGENT DROP</span>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              className="text-white"
              onClick={toggleMobileMenu}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-4 lg:space-x-6 text-white font-medium">
            <Link to="/" className="hover:text-gray-200 transition">Home</Link>
            <Link to="/about_us" className="hover:text-gray-200 transition">About Us</Link>
            <Link to="/all_blogs" className="hover:text-gray-200 transition">Blogs</Link>
            <Link to="/all_events" className="hover:text-gray-200 transition">Events</Link>
          </div>

          {/* Auth Buttons */}
          <div className="hidden sm:flex space-x-2 sm:space-x-3 md:space-x-4">
            <button
              onClick={() => setShowLoginForm(true)}
              className="text-white text-sm sm:text-base px-3 sm:px-4 py-1 rounded-full hover:bg-red-50 hover:text-[#820000] transition"
            >
              Log In
            </button>
            <button
              onClick={() => setShowSignupForm(true)}
              className="bg-our_red text-white text-sm sm:text-base px-4 sm:px-6 py-1 rounded-full hover:bg-red-600 transition"
            >
              Sign Up
            </button>
          </div>
        </nav>

        {/* Mobile Menu (shown when hamburger is clicked) */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="md:hidden absolute top-20 left-0 right-0 z-40 bg-white/90 backdrop-blur-md mx-4 rounded-lg shadow-lg p-4"
            >
              <div className="flex flex-col space-y-4 text-center">
                <Link
                  to="/"
                  className="text-[#820000] hover:bg-[#820000] hover:text-white py-2 rounded transition"
                  onClick={toggleMobileMenu}
                >
                  Home
                </Link>
                <Link
                  to="/about_us"
                  className="text-[#820000] hover:bg-[#820000] hover:text-white py-2 rounded transition"
                  onClick={toggleMobileMenu}
                >
                  About Us
                </Link>
                <Link
                  to="/all_blogs"
                  className="text-[#820000] hover:bg-[#820000] hover:text-white py-2 rounded transition"
                  onClick={toggleMobileMenu}
                >
                  Blogs
                </Link>
                <Link
                  to="/all_events"
                  className="text-[#820000] hover:bg-[#820000] hover:text-white py-2 rounded transition"
                  onClick={toggleMobileMenu}
                >
                  Events
                </Link>
                <button
                  onClick={() => {
                    setShowLoginForm(true);
                    toggleMobileMenu();
                  }}
                  className="text-[#820000] hover:bg-[#820000] hover:text-white py-2 rounded transition"
                >
                  Log In
                </button>
                <button
                  onClick={() => {
                    setShowSignupForm(true);
                    toggleMobileMenu();
                  }}
                  className="bg-[#820000] text-white py-2 rounded hover:bg-red-700 transition"
                >
                  Sign Up
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Hero Content */}
        <div className="relative flex-1 flex items-center justify-center z-10 px-4">
          <div className="text-white text-center max-w-3xl">
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">EVERY DROP COUNTS!</h1>
            <p className="text-sm md:text-xl mb-4 sm:mb-6">Your small act of kindness can save a life today.</p>
            <button className="bg-our_red hover:bg-red-700 text-white font-semibold py-2 sm:py-3 px-5 sm:px-6 rounded-full shadow-lg text-sm sm:text-base">
              Donate Now
            </button>
          </div>
        </div>
      </section>

      {/* Forms */}
      <AnimatePresence>{showLoginForm && renderForm("login")}</AnimatePresence>
      <AnimatePresence>{showSignupForm && renderForm("signup")}</AnimatePresence>
    </div>
  );
};

export default Hero_Section11;