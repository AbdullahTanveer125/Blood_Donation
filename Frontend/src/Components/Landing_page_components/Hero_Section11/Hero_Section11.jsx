// import React from "react";

// import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';


// const Hero_Section11 = () => {

//     const navigate = useNavigate();


//     return (
//         <div className="font-nunito">
//             {/* Hero Section with Background */}
//             <section
//                 className="min-h-screen bg-cover bg-center flex flex-col"
//                 style={{ backgroundImage: "url('/landing_hero_image.png')" }} // Replace with your actual image path
//             >
//                 {/* black layer */}
//                 <div className="absolute inset-0 bg-black bg-opacity-50"></div>

//                 {/* Transparent Navbar */}
//                 <nav className="flex justify-between items-center mt-3 mx-8 pr-4 bg-white/50 backdrop-blur-md shadow-md rounded-full ">
//                     <div className="text-xl font-bold text-white flex items-center gap-2">
//                         <span className="text-2xl">
//                             <img
//                                 className="w-14"
//                                 src="./logo.png"
//                                 alt=""
//                             />
//                         </span> <span className="tracking-wider">URGENT DROP</span> 
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
//                             className="text-white font px-4 py-1 rounded-full hover:bg-red-50 hover:text-[#820000] transition">Log In</button>
//                         <button
//                             onClick={() => navigate('/signup_as_a')}
//                             className="bg-[#820000] text-white px-4 py-1 rounded-full hover:bg-red-600 transition">Sign Up</button>
//                     </div>
//                 </nav>

//                 {/* Hero Text and Button with Black Overlay */}
//                 <div className="relative flex-1 flex items-center justify-center">

//                     <div className="relative z-10 text-white text-center px-4">
//                         <h1 className="text-4xl md:text-5xl font-bold mb-4">EVERY DROP COUNTS!</h1>
//                         <p className="text-lg md:text-xl mb-6">Your small act of kindness can save a life today.</p>
//                         <button className="bg-[#962626] hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-full shadow-lg shadow-white/0">
//                             Donate Now
//                         </button>
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// };

// export default Hero_Section11;



































// import React, { useState } from "react";
// import { Link } from 'react-router-dom';
// import { motion, AnimatePresence } from "framer-motion";
// import { useNavigate } from 'react-router-dom';

// const Hero_Section11 = () => {
//   const navigate = useNavigate();
//   const [showLoginForm, setShowLoginForm] = useState(false);
//   const [selectedOption, setSelectedOption] = useState("");

//   const handleLoginSubmit = () => {
//     if (selectedOption === "option1") navigate("/donor_login");
//     else if (selectedOption === "option2") navigate("/recipient_login");
//     else if (selectedOption === "option3") navigate("/organization_login");
//   };

//   return (
//     <div className="font-nunito relative">
//       {/* Hero Section Background */}
//       <section
//         className="min-h-screen bg-cover bg-center flex flex-col"
//         style={{ backgroundImage: "url('/landing_hero_image.png')" }}
//       >
//         {/* black overlay */}
//         <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

//         {/* Navbar */}
//         <nav className="flex justify-between items-center mt-3 mx-8 pr-4 bg-white/50 backdrop-blur-md shadow-md rounded-full relative z-10">
//           <div className="text-xl font-bold text-white flex items-center gap-2">
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
//               className="text-white font px-4 py-1 border-2 border-white rounded-full hover:bg-red-50 hover:text-[#820000] transition"
//             >
//               Log In
//             </button>
//             <button
//               onClick={() => navigate('/signup_as_a')}
//               className="bg-[#820000] text-white px-4 py-1 rounded-full hover:bg-red-600 transition"
//             >
//               Sign Up
//             </button>
//           </div>
//         </nav>

//         {/* Hero text */}
//         <div className="relative flex-1 flex items-center justify-center z-10">
//           <div className="text-white text-center px-4">
//             <h1 className="text-4xl md:text-5xl font-bold mb-4">EVERY DROP COUNTS!</h1>
//             <p className="text-lg md:text-xl mb-6">Your small act of kindness can save a life today.</p>
//             <button className="bg-[#962626] hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-full shadow-lg">
//               Donate Now
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Login Form Modal */}
//       <AnimatePresence>
//         {showLoginForm && (
//           <motion.div
//             className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-10 backdrop-blur-sm"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//           >
//             <motion.div
//               initial={{ scale: 0 }}
//               animate={{ scale: 1 }}
//               exit={{ scale: 0 }}
//               transition={{ duration: 0.4, ease: "easeOut" }}
//               className="bg-white backdrop-blur-lg border border-white/20 p-8 rounded-lg shadow-lg w-80 relative"
//             >
//               <button
//                 className="absolute top-2 right-3  text-xl font-bold"
//                 onClick={() => setShowLoginForm(false)}
//               >
//                 ×
//               </button>

//               <h2 className="text-2xl text-our_red font-bold text-center mb-6">Login as a</h2>

//               <div className="flex flex-col space-y-3">
//                 {[
//                   { label: "Donor", value: "option1" },
//                   { label: "Recipient", value: "option2" },
//                   { label: "Organization", value: "option3" },
//                 ].map((option) => (
//                   <label key={option.value} className="flex items-center space-x-2 cursor-pointer">
//                     <input
//                       type="radio"
//                       name="selection"
//                       value={option.value}
//                       onChange={() => setSelectedOption(option.value)}
//                       checked={selectedOption === option.value}
//                       className="w-5 h-5 text-our_red focus:ring-our_red"
//                     />
//                     <span className="text-our_red">{option.label}</span>
//                   </label>
//                 ))}
//               </div>

//               <div className="flex justify-center mt-6">
//                 <button
//                   onClick={handleLoginSubmit}
//                   disabled={!selectedOption}
//                   className={`px-5 py-1 text-sm rounded-full transition duration-300 ${
//                     selectedOption
//                       ? "bg-[#820000] border border-[#820000] text-white hover:bg-white hover:text-[#820000] hover:font-bold"
//                       : "bg-gray-300 text-gray-500 cursor-not-allowed"
//                   }`}
//                 >
//                   Submit
//                 </button>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
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
        className="bg-white backdrop-blur-lg border border-white/20 p-8 rounded-lg shadow-lg w-80 relative"
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

        <h2 className="text-2xl text-our_red font-bold text-center mb-6">
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
                  className="w-5 h-5 text-our_red focus:ring-our_red"
                />
                <span className="text-our_red">{role}</span>
              </label>
            );
          })}
        </div>

        <div className="flex justify-center mt-6">
          <button
            onClick={type === "login" ? handleLoginSubmit : handleSignupSubmit}
            disabled={!selectedOption}
            className={`px-5 py-1 text-sm rounded-full transition duration-300 ${
              selectedOption
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

        <nav className="flex justify-between items-center mt-3 mx-8 pr-4 bg-white/50 backdrop-blur-md shadow-md rounded-full relative z-10">
          <div className="text-xl font-bold text-white flex items-center gap-2">
            <img className="w-14" src="./logo.png" alt="Logo" />
            <span className="tracking-wider">URGENT DROP</span>
          </div>
          <div className="hidden md:flex space-x-6 text-white font-medium">
            <Link to="/">Home</Link>
            <Link to="/about_us">About Us</Link>
            <Link to="/all_blogs">Blogs</Link>
            <Link to="/all_events">Events</Link>
          </div>
          <div className="flex space-x-4">
            <button
              onClick={() => setShowLoginForm(true)}
              className="text-white font px-4 py-1 border-2 border-white rounded-full hover:bg-red-50 hover:text-[#820000] transition"
            >
              Log In
            </button>
            <button
              onClick={() => setShowSignupForm(true)}
              className="bg-[#820000] text-white px-4 py-1 rounded-full hover:bg-red-600 transition"
            >
              Sign Up
            </button>
          </div>
        </nav>

        <div className="relative flex-1 flex items-center justify-center z-10">
          <div className="text-white text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">EVERY DROP COUNTS!</h1>
            <p className="text-lg md:text-xl mb-6">Your small act of kindness can save a life today.</p>
            <button className="bg-[#962626] hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-full shadow-lg">
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
