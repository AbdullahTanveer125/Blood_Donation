import React from "react";
import Blog_Data from "../Blog_Data"
import { useNavigate } from 'react-router-dom';
import Footer1 from "../Footer1";
import Footer2 from "../Footer2";

const Blog_All = () => {

	const navigate = useNavigate();

	const handleReadMore = (blog) => {
		navigate('/single_blog', { state: { blog } });
	};


	return (
		<div className="flex flex-col font-nunito">
			{/* Hero Section */}
			<div className="relative h-[550px] w-full">
				<img
					src="/donation2.jpg"
					alt="Hero"
					className="w-full h-full object-cover"
				/>
				<div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center text-white px-4">
					<h1 className="text-4xl md:text-5xl font-bold mb-4">
						Welcome to Our Blogs
					</h1>
					<p className="text mb-6 max-w-2xl">
						Discover powerful stories, expert advice, and updates about the world of blood donation.
					</p>
					<button className="bg-[#b02525] border-2 border-[#b02525] text-white py-2 px-4 rounded hover:bg-white hover:text-[#820000] hover:border-2 hover:border-[#820000] hover:font-bold transition flex flex-row justify-center items-center gap-3">
						Explore Now
					</button>
				</div>
			</div>

			{/* Section Heading */}
			<h2 className="text-4xl font-extrabold text-center my-14">
				<span className="text-[#820000]"> All </span> Blogs
			</h2>

			{/* Blog Grid */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 px-28 pb-16">
				{Blog_Data.map((blog) => (
					<div key={blog.id} className="w-[70%] mx-auto border rounded-2xl overflow-hidden shadow-md ">
						{/* <img src={blog.image_on_slider} alt={blog.title} className="w-full h-40 object-cover" /> */}

						<div className="relative w-full h-40">
							<img
								src={blog.image_on_slider}
								alt={blog.title}
								className="w-full h-full object-cover"
							/>
							{/* Black overlay */}
							{/* <div className="absolute inset-0 bg-black bg-opacity-50"></div> */}
							<div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-black/0"></div>


							{/* Bottom-left text */}
							<div className="absolute bottom-2 left-2 text-white text-xs font-bold">
								{blog.date}
							</div>
						</div>

						<div className="p-4 flex flex-col md:flex-row justify-between items-center gap-4">
							<div className="flex-1 text-left relative pb-14">
								<h3 className="text-xl font-extrabold">{blog.title}</h3>
								<p className="text-gray-600 mt-2">{blog.description}</p>

								<button
									onClick={() => handleReadMore(blog)}
									className="bg-[#820000] border-2 border-[#820000] text-white py-2 px-4 rounded hover:bg-white hover:text-[#820000] hover:border-2 hover:border-[#820000] hover:font-bold transition flex flex-row justify-center items-center gap-3 absolute bottom-0 right-0">
									Read More
								</button>
							</div>

						</div>
					</div>
				))}
			</div>

			<Footer1 />
			<Footer2 />
		</div>
	);
};

export default Blog_All;
