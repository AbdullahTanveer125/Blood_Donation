import React, { useEffect, useState } from 'react';
import { MdArrowOutward } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import Blog_Data from "../Blog_Data"


function Blog_Slider() {
    const [position, setPosition] = useState(0);

    const navigate = useNavigate();

    const handleReadMore = (blog) => {
        navigate('/single_blog', { state: { blog } });
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setPosition(prev => (prev + 1) % Blog_Data.length); // loops through cards
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='mt-20 w-[100%] mb-28 ml-40 overflow-hidden relative font-nunito'>

            <h1 className='ml-80 text-4xl font-extrabold mb-10'>
                <span className='text-our_red'>The LifeSaver</span> Blogs
            </h1>

            <div
                className={`flex w-[80%]  transition-transform duration-1000 ease-in-out`}
                style={{
                    transform: `translateX(-${position * 100}%)`,
                    width: `${Blog_Data.length * 100}%`,
                }}
            >
                {Blog_Data.map((blog, index) => (
                    <div key={index} className="w-full flex-shrink-0 pr-4 ">
                        <div className="card card-side shadow-lg bg-gray-00 h-72 w-full">
                            <figure className='w-[5%] h-72 rounded-l-lg'>
                                <img src={blog.image_on_slider} alt={blog.title} className='w-[%] h-full object-cover rounded-l-lg' />
                            </figure>
                            <div className="bg-gray-100 rounded-r-lg  flex flex-col justify-between w-[10%] h-full pl-16 pt-16 pr-5 pb-5">
                                <div>
                                    <p className=' text-xs text-gray-500'>{blog.date}</p>
                                    <h2 className="card-title font-extrabold mb-2">{blog.title}</h2>
                                    <div className='text-justify flex flex-row items-start justify-start'>
                                        <p className='font-thin w-[85%]'>{blog.description}</p>
                                    </div>
                                </div>
                                <div className="card-actions justify-end">
                                    <button
                                        onClick={() => handleReadMore(blog)}
                                        className="bg-our_red border-2 border-our_red text-white py-2 px-4 rounded-full hover:bg-white hover:text-our_red hover:border-2 hover:border-our_red hover:font-bold transition flex flex-row justify-center items-center gap-3"
                                    >
                                        Read More <MdArrowOutward size={20} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Blog_Slider;

























































































