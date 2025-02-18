import React, { useState } from "react";
import { motion } from "framer-motion";

function Login_as_a() {

    const [selectedOption, setSelectedOption] = useState("");

    // Function to handle selection and execute logic
    const handleSelection = (option) => {
        setSelectedOption(option);

        // Execute corresponding function
        if (option === "option1") {
            console.log("Option 1 selected: Running Function 1");
        } else if (option === "option2") {
            console.log("Option 2 selected: Running Function 2");
        } else if (option === "option3") {
            console.log("Option 3 selected: Running Function 3");
        }
    };



    return (
        <motion.div
      initial={{ scale: 0, opacity: 0 }} // Start from center with 0 size and opacity
      animate={{ scale: 1, opacity: 1 }} // Expand to full size
      transition={{ duration: 1, ease: "easeOut" }} // Smooth transition
      className="relative w-[100vw] h-[100vh] flex justify-center items-center bg-gray-100"
    >
            <div className="relative w-[100vw] h-[100vh]">
                {/* Background Image with Opacity using ::before */}
                {/* <div
                    className="absolute inset-0 bg-[url('/bg-1.png')] bg-cover bg-center opacity-50"
                ></div> */}
                <div
                    className="absolute inset-0 bg-[url('/bg-3.png')] bg-cover bg-center "
                ></div>

                {/* Content on top (fully visible) */}
                <div className="relative z-10 p-10  justify-center items-center">

                    <div className='ml-[50%] w-[50%] h-[400px] mt-[6%] bg-green-300 p-3'>
                        {/* <h1 className="text-black text-5xl font-bold">Write some like heading</h1> */}

                        <div className="flex flex-col items-center justify-center  bg-gray-100 ">

                            <h1 className="text-black text-5xl font-bold">Write some like heading</h1>

                            <div className="bg-amber-300 p-8 rounded-lg shadow-lg w-96">
                                <h2 className="text-2xl font-semibold text-center mb-6">Select an Option to Login as a</h2>

                                {/* Radio Buttons */}
                                <div className="flex flex-col space-y-3">
                                    <label className="flex items-center space-x-2 cursor-pointer">
                                        <input
                                            type="radio"
                                            name="selection"
                                            value="option1"
                                            onChange={() => handleSelection("option1")}
                                            className="w-5 h-5 text-blue-600 focus:ring-blue-500"
                                        />
                                        <span className="text-gray-700">Donor</span>
                                    </label>

                                    <label className="flex items-center space-x-2 cursor-pointer">
                                        <input
                                            type="radio"
                                            name="selection"
                                            value="option2"
                                            onChange={() => handleSelection("option2")}
                                            className="w-5 h-5 text-green-600 focus:ring-green-500"
                                        />
                                        <span className="text-gray-700">Recipient</span>
                                    </label>

                                    <label className="flex items-center space-x-2 cursor-pointer">
                                        <input
                                            type="radio"
                                            name="selection"
                                            value="option3"
                                            onChange={() => handleSelection("option3")}
                                            className="w-5 h-5 text-red-600 focus:ring-red-500"
                                        />
                                        <span className="text-gray-700">Organization</span>
                                    </label>
                                </div>

                                {/* Submit Button */}
                                <button
                                    className={`mt-6 w-full py-2 text-white font-semibold rounded-lg transition-colors duration-300 ${selectedOption ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-400 cursor-not-allowed"
                                        }`}
                                    disabled={!selectedOption}
                                >
                                    Submit
                                </button>
                            </div>
                        </div>


                    </div>

                </div>

            </div>

            </motion.div>
    )
}

export default Login_as_a
