import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import { toast } from 'react-toastify';
function Login_as_a() {

    const navigate = useNavigate();

    const [selectedOption, setSelectedOption] = useState("");

    // Function to handle selection and execute logic
    const handleSelection = () => {

        // Execute corresponding function
        if (selectedOption === "option1") {
            console.log("Option 1 selected: Running Function 1");
            toast.info('Login as a "Donor"');
            navigate("/donor_login");
        } else if (selectedOption === "option2") {
            console.log("Option 2 selected: Running Function 2");
            toast.info('Login as a "Recipient"');
            navigate("/recipient_login");
        } else if (selectedOption === "option3") {
            console.log("Option 3 selected: Running Function 3");
            toast.info('Login as a "Organization"');
            navigate("/organization_login");
        }
    };



    return (
        <motion.div
            initial={{ scale: 0, opacity: 0 }} // Start from center with 0 size and opacity
            animate={{ scale: 1, opacity: 1 }} // Expand to full size
            transition={{ duration: 1, ease: "easeOut" }} // Smooth transition
            className="relative w-[100vw] h-[100vh] flex justify-center items-center bg-gray-100"
        >
            {/* bg-[url('./login_as_a3.jpg')] bg-cover bg-center */}
            {/* bg-gradient-to-br from-red-100 to-red-300 */}
            <div className="relative w-[100vw] h-[100vh] bg-[url('./LogIn.png')] bg-cover bg-center inset-0 flex flex-row justify-center items-center">

                {/* Content on top (fully visible) */}
                <div className="">

                    <div className="bg-gray-600 bg-opacity-10 backdrop-blur-lg  border-opacity-20 p-8 rounded-lg shadow-lg w-80 ">
                        <h2 className="text-2xl text-our_red font-semibold text-bg-[url('./login_as_a3.jpg')] bg-cover bg-center text-center mb-6">Login as a</h2>

                        {/* Radio Buttons */}
                        <div className="flex flex-col space-y-3">
                            <label className="flex items-center space-x-2 cursor-pointer">
                                <input
                                    type="radio"
                                    name="selection"
                                    value="option1"
                                    onChange={() => setSelectedOption("option1")}
                                    className="w-5 h-5 text-our_red focus:ring-our_red"
                                />
                                <span className="text-our_red">Donor</span>
                            </label>

                            <label className="flex items-center space-x-2 cursor-pointer">
                                <input
                                    type="radio"
                                    name="selection"
                                    value="option2"
                                    onChange={() => setSelectedOption("option2")}
                                    className="w-5 h-5 text-our_red focus:ring-our_red"
                                />
                                <span className="text-our_red">Recipient</span>
                            </label>

                            <label className="flex items-center space-x-2 cursor-pointer">
                                <input
                                    type="radio"
                                    name="selection"
                                    value="option3"
                                    onChange={() => setSelectedOption("option3")}
                                    className="w-5 h-5 text-our_red focus:ring-our_red"
                                />
                                <span className="text-our_red">Organization</span>
                            </label>
                        </div>

                        {/* Submit Button */}
                        <div className="flex flex-row justify-center items-center mt-6">
                            <button
                                onClick={handleSelection}
                                className={`px-5 py-1 text-gray-500 transition-colors duration-300 rounded-full ${selectedOption ? "bg-[#820000] border-2 border-[#820000] text-white rounded-full hover:bg-white hover:text-[#820000] hover:border-2 hover:border-[#820000] hover:font-bold transition " : "bg-gray-300 cursor-not-allowed"
                                    }`}
                                disabled={!selectedOption}
                            >
                                Submit
                            </button>
                        </div>

                    </div>

                </div>

            </div>

        </motion.div>
    )
}

export default Login_as_a


