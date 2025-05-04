import React from "react";

const Hero_Section11 = () => {
    return (
        <div className="font-nunito">
            {/* Hero Section with Background */}
            <section
                className="min-h-screen bg-cover bg-center flex flex-col"
                style={{ backgroundImage: "url('/landing_hero_image.png')" }} // Replace with your actual image path
            >
                {/* black layer */}
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                
                {/* Transparent Navbar */}
                <nav className="flex justify-between items-center mt-6 mx-8 pr-4 bg-white/30 backdrop-blur-md shadow-md rounded-full ">
                    <div className="text-xl font-bold text-white flex items-center gap-2">
                        <span className="text-2xl">
                            <img
                                className="w-14"
                                src="./logo.png"
                                alt=""
                            />
                        </span> URGENT DROP
                    </div>
                    <div className="hidden md:flex space-x-6 text-white font-medium">
                        <a href="#home">Home</a>
                        <a href="#about">About Us</a>
                        <a href="#guide">Guide</a>
                        <a href="#events">Events</a>
                        <a href="#faqs">FAQs</a>
                    </div>
                    <div className="flex space-x-4">
                        <button className="text-white border-2 border-red-500 px-4 py-1 rounded-full hover:bg-red-50 transition">Log In</button>
                        <button className="bg-red-500 text-white px-4 py-1 rounded-full hover:bg-red-600 transition">Sign Up</button>
                    </div>
                </nav>

                {/* Hero Text and Button with Black Overlay */}
                <div className="relative flex-1 flex items-center justify-center">

                    <div className="relative z-10 text-white text-center px-4">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">EVERY DROP COUNTS!</h1>
                        <p className="text-lg md:text-xl mb-6">Your small act of kindness can save a life today.</p>
                        <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-full shadow-lg">
                            Donate Now
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Hero_Section11;
