import React from "react";
import Blog_Data from "../Blog_Data"
import { useNavigate } from 'react-router-dom';
import Footer1 from "../Footer1";
import Footer2 from "../Footer2";


import { Link } from 'react-router-dom';
import { useAuth } from "../../context/auth";

const Blog_All = () => {


	const [auth] = useAuth();
	// console.log("DDDDDDD=", auth)

	const navigate = useNavigate();

	const handleReadMore = (blog) => {
		navigate(`/${blog.url}`, { state: { blog } });
	};


	return (
		<div className="flex flex-col font-nunito ">

			{/* 
			{!auth && (

				<nav className="flex justify-between items-center mt- mx-8 pr-4 bg-white/30 backdrop-blur-md shadow-md rounded-full ">
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
							className="text-white border-2 border-red-500 px-4 py-1 rounded-full hover:bg-red-50 hover:text-red-500 transition">Log In</button>
						<button
							onClick={() => navigate('/signup_as_a')}
							className="bg-red-500 text-white px-4 py-1 rounded-full hover:bg-red-600 transition">Sign Up</button>
					</div>
				</nav>
			)} */}


			{/* Hero Section */}
			<div className="relative h-[620px] w-full">
				<img
					src="/donation2.jpg"
					alt="Hero"
					className="w-full h-full object-cover"
				/>


				<div className="absolute inset-0 bg-black bg-opacity-50 text-white px-4">


					{!auth && (

						<nav className="flex justify-between items-center mt-3 mx-8 pr-4 bg-white/30 backdrop-blur-md shadow-md rounded-full ">
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
								<Link to="/all_events">Events</Link>
								{/* <Link to="/faqs">FAQs</Link> */}
							</div>
							<div className="flex space-x-4">
								<button
									onClick={() => navigate('/login_as_a')}
									className="text-white border-2 border-white px-4 py-1 rounded-full hover:bg-red-50 hover:text-[#b02525] transition">Log In</button>
								<button
									onClick={() => navigate('/signup_as_a')}
									className="bg-[#b02525] text-white px-4 py-1 rounded-full hover:bg-red-600 transition">Sign Up</button>
							</div>
						</nav>
					)}

					<div className=" h-full flex flex-col items-center justify-center  text-center">
						<h1 className="text-4xl md:text-5xl font-bold mb-4">
							Welcome to Our Blogs
						</h1>
						<p className="text mb-6 max-w-2xl">
							Discover powerful stories, expert advice, and updates about the world of blood donation.
						</p>
						<button className="bg-[#b02525] border-2 border-[#b02525] text-white py-2 px-4 rounded hover:bg-white hover:text-our_red hover:border-2 hover:border-our_red hover:font-bold transition flex flex-row justify-center items-center gap-3">
							Explore Now
						</button>
					</div>
				</div>
			</div>

			{/* Section Heading */}
			<h2 className="text-4xl font-extrabold text-center my-14">
				<span className="text-our_red"> All </span> Blogs
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

						<div className=" min-h-[250px] p-4 flex flex-col gap-4">
							<div className=" flex-1 text-left relative pb-14">
								<div>
									<h3 className="text-xl font-extrabold">{blog.title}</h3>
									<p className="text-gray-500 mt-2">{blog.description}</p>
								</div>

								<div className="">
									<button
										onClick={() => handleReadMore(blog)}
										className=" bg-our_red border-2 border-our_red text-white py-2 px-4 rounded hover:bg-white hover:text-our_red hover:border-2 hover:border-our_red hover:font-bold transition flex flex-row justify-center items-center gap-3 absolute bottom-0 right-0">
										Read More
									</button>
								</div>
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
