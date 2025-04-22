import React, { useState } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Footer1 from '../Footer1';
import Footer2 from '../Footer2';
import axios from 'axios';


function Contact_Us() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        comment: '',
    });

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));

    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        setFormData({ name: '', email: '', phone: '', comment: '' });

        try {
            const response = await axios.post('http://localhost:5000/contact', formData); // adjust the URL if needed
            console.log('Server response:', response.data);



            if (response.data.success) {
                // Reset form on success
                setFormData({ name: '', email: '', phone: '', comment: '' });
                alert('Message submitted successfully!');
            }

        } catch (error) {
            console.error('Error submitting the contact_us form:', error);
            alert('Something went wrong in contact_us form. Please try again later.');
        }
    };

    return (
        <div className="font-nunito">

            {/* Heading & Description */}
            {/* <div className="text-center py-12 px-4">
                <h1 className="text-4xl font-extrabold">
                    <span className=' text-[#820000]'> Contact </span> Us</h1>
                <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
                    We'd love to hear from you! Reach out for any questions, feedback, or just to say hi.
                </p>
            </div> */}

            {/* Social + Form with Background Image */}
            <div className="relative">
                <div className="absolute inset-0 bg-[url('./Home1.jpg')] bg-cover bg-center z-0" />
                <div className="absolute inset-0 bg-black opacity-40 z-0" />

                <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-10">

                        {/* Social Links */}
                        <div className="flex flex-col justify-center space-y-6 text-center md:text-left">
                            <h2 className="text-3xl font-bold text-[#ffdddd]">Connect With Us</h2>
                            <p className="text-gray-300">
                                Follow us on social media to stay updated!
                            </p>
                            <div className="flex justify-center md:justify-start gap-6 text-2xl text-white">
                                <a href="#"><FaFacebookF className="hover:text-[#820000]" /></a>
                                <a href="#"><FaTwitter className="hover:text-[#820000]" /></a>
                                <a href="#"><FaInstagram className="hover:text-[#820000]" /></a>
                                <a href="#"><FaLinkedin className="hover:text-[#820000]" /></a>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <form onSubmit={handleSubmit}  encType="multipart/form-data" className="space-y-4 text-left">
                            <h2 className="text-2xl font-bold text-white mb-4">Send us a message</h2>

                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 rounded bg-white bg-opacity-20 placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-white"
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 rounded bg-white bg-opacity-20 placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-white"
                            />
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 rounded bg-white bg-opacity-20 placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-white"
                            />
                            <textarea
                                name="comment"
                                placeholder="Your Message"
                                rows="4"
                                value={formData.comment}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 rounded bg-white bg-opacity-20 placeholder-white text-white resize-none focus:outline-none focus:ring-2 focus:ring-white"
                            />
                            <button
                                type="submit"
                                className="w-full text-white bg-[#820000] hover:bg-white hover:text-[#820000] border border-[#820000] font-bold py-2 px-4 rounded transition"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Disclaimer */}
            <div className="text-center text-sm py-8 px-4 mt-10">
                <strong className='font-extrabold text-lg'>Disclaimer: </strong> Your information is secure with us. We will never misuse or share your data with third parties.
            </div>

            <div className='mt-16'>
                <Footer1 />
                <Footer2 />
            </div>
        </div>
    );
}

export default Contact_Us;
