import React from 'react';
import { useLocation } from 'react-router-dom';
import Footer1 from '../Footer1';
import Footer2 from '../Footer2';


function Blog_Single() {

    const location = useLocation();
    const blog = location.state?.blog;

    if (!blog) return <p>No blog data found</p>;



    return (

        <div className='font-nunito'>


            <div className="max-w-4xl mx-auto px-6 py-12 font-nunito text-gray-800">
                {/* Main Blog Heading */}
                <h1 className="text-4xl font-extrabold mb-10 text-center">
                    <span className='text-[#820000]'> This is </span>Blog Section

                </h1>

                <p className='text-sm'>{blog.date}</p>
                <h1 className='text-2xl mb-3 font-bold font-nunito'>{blog.title}</h1>

                {/* First Paragraph */}
                <p className="text-lg mb-6 text-justify">
                    {blog.paragraph_1}
                </p>

                {/* First Image */}
                <img src={blog.image_on_page_1} alt="Blood donation process" className="rounded-lg mb-8 w-[80%] object-cover h-96" />

                {/* Subheading */}
                <h2 className="text-2xl font-bold mb-4">{blog.heading_2}</h2>

                {/* Paragraph after subheading */}
                <p className="text-lg mb-6">
                    {blog.line_1}
                </p>

                <p>
                    {blog.paragraph_2}
                </p>

                {/* Second Image */}
                <img src={blog.image_on_page_2} alt="Donor smiling after donation" className="rounded-lg my-8 w-[80%] object-cover h-96" />

                {/* Two Line Standalone Section */}
                <div className="mb-6">
                    <p className="italic text-lg">{blog.line_2}</p>
                    <p className="italic text-lg">{blog.line_3}</p>
                </div>

                {/* Final Paragraph */}
                <p className="text-lg">
                    {blog.line_4}
                </p>

                <p className='my-10'>
                    {blog.paragraph_3}
                </p>
            </div>



            <Footer1 />
            <Footer2 />

        </div>

    );
}

export default Blog_Single;
