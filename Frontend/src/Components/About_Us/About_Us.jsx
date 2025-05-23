import React from 'react';
import { FaLinkedin, FaEnvelope, FaGithub } from 'react-icons/fa';
import Our_Score from '../Our_Score/Our_Score';
import Our_feedback from '../Landing_page_components/Our_feedback/Our_feedback';
import Footer1 from '../Footer1';
import Footer2 from '../Footer2';


import { Link } from 'react-router-dom';
import { useAuth } from "../../context/auth";

const teamMembers = [
    {
        name: 'Fatima Almas',
        role: 'UI / UX Designer',
        description: 'Passionate about crafting intuitive UI experiences.',
        image: './fatima.png',
        linkedin: '#',
        email: '#',
        github: '#',
    },
    {
        name: 'Abdullah Tanveer',
        role: 'Full-Stack Developer',
        description: 'Loves building scalable and secure APIs.',
        image: './abdullah.png',
        linkedin: '#',
        email: '#',
        github: '#',
    },
    {
        name: 'Amna Aqeel',
        role: 'Full-Stack Developer',
        description: 'Focuses on user-centric and accessible designs.',
        image: './fatima.png',
        linkedin: '#',
        email: '#',
        github: '#',
    },
];

function About_Us() {


    const [auth] = useAuth();
    // console.log("DDDDDDD=", auth)

    return (

        <div>

            <div className="font-nunito text-center bg-white ">


                {!auth && (
                    <nav className="flex justify-between items-center mt-3 mx-8 pr-4 bg-[#820000] backdrop-blur-md shadow-md rounded-full ">
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
                            <Link to="/">Home</Link>
                            <Link to="/about_us">About Us</Link>
                            <Link to="/all_blogs">Blogs</Link>
                            <Link to="/events">Events</Link>
                            <Link to="/faqs">FAQs</Link>
                        </div>
                        <div className="flex space-x-4">
                            <button
                                onClick={() => navigate('/login_as_a')}
                                className="text-white border-2 border-white px-4 py-1 rounded-full hover:bg-red-50 hover:text-[#820000] transition">Log In</button>
                            <button
                                onClick={() => navigate('/signup_as_a')}
                                className="bg-white text-[#820000] px-4 py-1 rounded-full hover:bg-gray-200 transition">Sign Up</button>
                        </div>
                    </nav>
                )}





                <div className=' flex flex-row pt-10 pl-52 mb-10'>
                    <h1 className='text-2xl font-extrabold '>Heading of About Us</h1>
                </div>
                {/* Intro Paragraph */}
                <p className="max-w-3xl mx-auto text-lg text-justify">
                    Welcome to our platform! We are committed to making a difference by connecting donors and recipients in need.
                </p>

                {/* Our Mission */}
                <div className='my-16'>
                    <h2 className="text-3xl font-extrabold mb-4">
                        <span className='text-our_red'> Our </span> Mission
                    </h2>
                    <p className="max-w-3xl mx-auto text-base text-justify">
                        Our mission is to create a reliable and compassionate community that supports life-saving donations with ease, trust, and speed.
                    </p>
                </div>

                {/* Image Section */}
                <div className="flex justify-center">
                    <img src="/Home2.jpg" alt="Our Mission" className="w-full max-w-4xl rounded-xl shadow-lg" />
                </div>

                {/* Two-Line Summary */}
                <div className="max-w-2xl mx-auto my-16 text-justify">
                    <p>
                        We believe in using technology for good. Our team is small but mighty — passionate about innovation and empathy.
                    </p>
                    <p>
                        Together, we’re building a bridge between those who want to help and those who need it the most.
                    </p>
                </div>


                <Our_Score />


                {/* Meet Our Team */}
                <div className='mt-28'>
                    <h2 className="text-3xl font-extrabold  mb-8">
                        <span className='text-our_red'> Meet </span>  Our Team</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="bg-white rounded-xl shadow-lg p-6 space-y-4 text-left">
                                <img src={member.image} alt={member.name} className="w-full h-56 object-cover rounded-lg" />
                                <h3 className="text-xl font-bold">{member.name}</h3>
                                <p className="text-sm font-semibold text-our_red">{member.role}</p>
                                <p className="text-gray-600 text-sm">{member.description}</p>
                                <div className="flex gap-4 mt-2">
                                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                                        <FaLinkedin size={20} className="text-our_red hover:text-black" />
                                    </a>
                                    <a href={`mailto:${member.email}`}>
                                        <FaEnvelope size={20} className="text-our_red hover:text-black" />
                                    </a>
                                    <a href={member.github} target="_blank" rel="noopener noreferrer">
                                        <FaGithub size={20} className="text-our_red hover:text-black" />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>



            </div>


            <Our_feedback />

            <Footer1 />
            <Footer2 />

        </div>

    );
}

export default About_Us;
