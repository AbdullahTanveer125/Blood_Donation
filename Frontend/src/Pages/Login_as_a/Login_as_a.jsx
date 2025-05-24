import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Login_as_a() {

    const navigate = useNavigate();

    const [selectedOption, setSelectedOption] = useState("");

    // Function to handle selection and execute logic
    const handleSelection = () => {

        // Execute corresponding function
        if (selectedOption === "option1") {
            console.log("Option 1 selected: Running Function 1");
            navigate("/donor_login");
        } else if (selectedOption === "option2") {
            console.log("Option 2 selected: Running Function 2");
            navigate("/recipient_login");
        } else if (selectedOption === "option3") {
            console.log("Option 3 selected: Running Function 3");
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
            <div className="relative w-[100vw] h-[100vh] bg-[url('./check4.png')] bg-cover bg-center inset-0 flex flex-row justify-center items-center">

                {/* Content on top (fully visible) */}
                <div className="">

                    <div className="bg-gray-500 bg-opacity-10 backdrop-blur-lg border border-black border-opacity-20 p-8 rounded-lg shadow-lg w-96">
                        <h2 className="text-2xl font-semibold text-bg-[url('./login_as_a3.jpg')] bg-cover bg-center text-center mb-6">Login as a</h2>

                        {/* Radio Buttons */}
                        <div className="flex flex-col space-y-3">
                            <label className="flex items-center space-x-2 cursor-pointer">
                                <input
                                    type="radio"
                                    name="selection"
                                    value="option1"
                                    onChange={() => setSelectedOption("option1")}
                                    className="w-5 h-5 text-blue-600 focus:ring-blue-500"
                                />
                                <span className="text-black">Donor</span>
                            </label>

                            <label className="flex items-center space-x-2 cursor-pointer">
                                <input
                                    type="radio"
                                    name="selection"
                                    value="option2"
                                    onChange={() => setSelectedOption("option2")}
                                    className="w-5 h-5 text-green-600 focus:ring-green-500"
                                />
                                <span className="text-black">Recipient</span>
                            </label>

                            <label className="flex items-center space-x-2 cursor-pointer">
                                <input
                                    type="radio"
                                    name="selection"
                                    value="option3"
                                    onChange={() => setSelectedOption("option3")}
                                    className="w-5 h-5 text-red-600 focus:ring-red-500"
                                />
                                <span className="text-black">Organization</span>
                            </label>
                        </div>

                        {/* Submit Button */}
                        <button
                            onClick={handleSelection}
                            className={`mt-6 w-full py-2 text-black font-semibold rounded-lg transition-colors duration-300 ${selectedOption ? "bg-[#820000] border-2 border-[#820000] text-white py-2 px-4 rounded hover:bg-white hover:text-[#820000] hover:border-2 hover:border-[#820000] hover:font-bold transition " : "bg-gray-400 cursor-not-allowed"
                                }`}
                            disabled={!selectedOption}
                        >
                            Submit
                        </button>
                    </div>

                </div>

            </div>

        </motion.div>
    )
}

export default Login_as_a
