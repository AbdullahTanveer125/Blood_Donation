// import React, { useState } from "react";
// import Blog_Data from "../Blog_Data"
// import { useNavigate } from 'react-router-dom';
// import Footer1 from "../Footer1";
// import Footer2 from "../Footer2";


// import { RiArrowRightUpLine } from "react-icons/ri";
// import { Link } from 'react-router-dom';
// import { useAuth } from "../../context/auth";

// import { motion, AnimatePresence } from "framer-motion";

// const Blog_All = () => {


// 	const [auth] = useAuth();
// 	// console.log("DDDDDDD=", auth)

// 	const navigate = useNavigate();

// 	const handleReadMore = (blog) => {
// 		navigate(`/${blog.url}`, { state: { blog } });
// 	};



// 	const [showLoginForm, setShowLoginForm] = useState(false);
// 	const [showSignupForm, setShowSignupForm] = useState(false);
// 	const [selectedOption, setSelectedOption] = useState("");

// 	const handleLoginSubmit = () => {
// 		if (selectedOption === "option1") navigate("/donor_login");
// 		else if (selectedOption === "option2") navigate("/recipient_login");
// 		else if (selectedOption === "option3") navigate("/organization_login");
// 	};

// 	const handleSignupSubmit = () => {
// 		if (selectedOption === "option1") navigate("/donor_signup");
// 		else if (selectedOption === "option2") navigate("/recipient_signup");
// 		else if (selectedOption === "option3") navigate("/organization_signup");
// 	};

// 	const renderForm = (type) => (
// 		<motion.div
// 			className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-10 backdrop-blur-sm"
// 			initial={{ opacity: 0 }}
// 			animate={{ opacity: 1 }}
// 			exit={{ opacity: 0 }}
// 		>
// 			<motion.div
// 				initial={{ scale: 0 }}
// 				animate={{ scale: 1 }}
// 				exit={{ scale: 0 }}
// 				transition={{ duration: 0.4, ease: "easeOut" }}
// 				className="bg-white backdrop-blur-lg border border-white/20 p-8 rounded-lg shadow-lg w-80 relative"
// 			>
// 				<button
// 					className="absolute top-2 right-3 text-xl font-bold"
// 					onClick={() => {
// 						setShowLoginForm(false);
// 						setShowSignupForm(false);
// 						setSelectedOption("");
// 					}}
// 				>
// 					×
// 				</button>

// 				<h2 className="text-2xl text-our_red font-bold text-center mb-6">
// 					{type === "login" ? "Login as a" : "Sig Up as a"}
// 				</h2>

// 				<div className="flex flex-col space-y-3">
// 					{["Donor", "Recipient", "Organization"].map((role, idx) => {
// 						const value = `option${idx + 1}`;
// 						return (
// 							<label key={value} className="flex items-center space-x-2 cursor-pointer">
// 								<input
// 									type="radio"
// 									name={`${type}_selection`}
// 									value={value}
// 									onChange={() => setSelectedOption(value)}
// 									checked={selectedOption === value}
// 									className="w-5 h-5 text-our_red focus:ring-our_red"
// 								/>
// 								<span className="text-our_red">{role}</span>
// 							</label>
// 						);
// 					})}
// 				</div>

// 				<div className="flex justify-center mt-6">
// 					<button
// 						onClick={type === "login" ? handleLoginSubmit : handleSignupSubmit}
// 						disabled={!selectedOption}
// 						className={`px-5 py-1 text-sm rounded-full transition duration-300 ${selectedOption
// 							? "bg-[#820000] border border-[#820000] text-white hover:bg-white hover:text-[#820000] hover:font-bold"
// 							: "bg-gray-300 text-gray-500 cursor-not-allowed"
// 							}`}
// 					>
// 						Submit
// 					</button>
// 				</div>
// 			</motion.div>
// 		</motion.div>
// 	);


// 	return (
// 		<div className="flex flex-col font-nunito ">

// 			{/* 
// 			{!auth && (

// 				<nav className="flex justify-between items-center mt- mx-8 pr-4 bg-white/30 backdrop-blur-md shadow-md rounded-full ">
// 					<div className="text-xl font-bold text-white flex items-center gap-2">
// 						<span className="text-2xl">
// 							<img
// 								className="w-14"
// 								src="./logo.png"
// 								alt=""
// 							/>
// 						</span> URGENT DROP
// 					</div>
// 					<div className="hidden md:flex space-x-6 text-white font-medium">
// 						<Link to="/">Home</Link>
// 						<Link to="/about_us">About Us</Link>
// 						<Link to="/all_blogs">Blogs</Link>
// 						<Link to="/events">Events</Link>
// 						<Link to="/faqs">FAQs</Link>
// 					</div>
// 					<div className="flex space-x-4">
// 						<button
// 							onClick={() => navigate('/login_as_a')}
// 							className="text-white border-2 border-red-500 px-4 py-1 rounded-full hover:bg-red-50 hover:text-red-500 transition">Log In</button>
// 						<button
// 							onClick={() => navigate('/signup_as_a')}
// 							className="bg-red-500 text-white px-4 py-1 rounded-full hover:bg-red-600 transition">Sign Up</button>
// 					</div>
// 				</nav>
// 			)} */}


// 			{/* Hero Section */}
// 			<div className="relative h-[620px] w-full">
// 				<img
// 					src="/donation2.jpg"
// 					alt="Hero"
// 					className="w-full h-full object-cover"
// 				/>


// 				<div className="absolute inset-0 bg-black bg-opacity-50 text-white px-4">


// 					{!auth && (

// 						<nav className="flex justify-between items-center mt-3 mx-8 pr-4 bg-white/30 backdrop-blur-md shadow-md rounded-full ">
// 							<div className="text-xl font-bold text-white flex items-center gap-2">
// 								<span className="text-2xl">
// 									<img
// 										className="w-14"
// 										src="./logo.png"
// 										alt=""
// 									/>
// 								</span> URGENT DROP
// 							</div>
// 							<div className="hidden md:flex space-x-6 text-white font-medium">
// 								<Link to="/">Home</Link>
// 								<Link to="/about_us">About Us</Link>
// 								<Link to="/all_blogs">Blogs</Link>
// 								<Link to="/all_events">Events</Link>
// 								{/* <Link to="/faqs">FAQs</Link> */}
// 							</div>
// 							<div className="flex space-x-4">
// 								<button
// 									onClick={() => setShowLoginForm(true)}
// 									className="text-white border-2 border-white px-4 py-1 rounded-full hover:bg-red-50 hover:text-[#b02525] transition">Log In</button>
// 								<button
// 									onClick={() => setShowSignupForm(true)}
// 									className="bg-[#b02525] text-white px-4 py-1 rounded-full hover:bg-red-600 transition">Sign Up</button>
// 							</div>
// 						</nav>
// 					)}

// 					<div className=" h-full flex flex-col items-center justify-center  text-center">
// 						<h1 className="text-4xl md:text-5xl font-bold mb-4">
// 							Welcome to Our Blogs
// 						</h1>
// 						<p className="text mb-6 max-w-2xl">
// 							Discover powerful stories, expert advice, and updates about the world of blood donation.
// 						</p>
// 						<button className="bg-[#b02525] border-2 border-[#b02525] text-white py-2 px-4 rounded hover:bg-white hover:text-our_red hover:border-2 hover:border-our_red hover:font-bold transition flex flex-row justify-center items-center gap-3">
// 							Explore Now
// 						</button>
// 					</div>
// 				</div>
// 			</div>

// 			{/* Section Heading */}
// 			<h2 className="text-4xl font-extrabold text-center my-14">
// 				<span className="text-our_red"> All </span> Blogs
// 			</h2>

// 			{/* Blog Grid */}
// 			<div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 px-28 pb-16">
// 				{Blog_Data.map((blog) => (
// 					<div key={blog.id} className="w-[70%] mx-auto border rounded-2xl overflow-hidden shadow-md ">
// 						{/* <img src={blog.image_on_slider} alt={blog.title} className="w-full h-40 object-cover" /> */}

// 						<div className="relative w-full h-40">
// 							<img
// 								src={blog.image_on_slider}
// 								alt={blog.title}
// 								className="w-full h-full object-cover"
// 							/>
// 							{/* Black overlay */}
// 							{/* <div className="absolute inset-0 bg-black bg-opacity-50"></div> */}
// 							<div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-black/0"></div>


// 							{/* Bottom-left text */}
// 							<div className="absolute bottom-2 left-2 text-white text-xs font-bold">
// 								{blog.date}
// 							</div>
// 						</div>

// 						<div className=" min-h-[250px] p-4 flex flex-col gap-4">
// 							<div className=" flex-1 text-left relative pb-14">
// 								<div>
// 									<h3 className="text-xl font-extrabold">{blog.title}</h3>
// 									<p className="text-gray-500 mt-2">{blog.description}</p>
// 								</div>

// 								<div className="">
// 									<button
// 										onClick={() => handleReadMore(blog)}
// 										className=" bg-our_red border-2 border-our_red text-white py-2 px-4 rounded-full hover:bg-white hover:text-our_red hover:border-2 hover:border-our_red hover:font-bold transition flex flex-row justify-center items-center gap-1 absolute bottom-0 right-0">
// 										Read More <RiArrowRightUpLine size={20}/>
// 									</button>
// 								</div>
// 							</div>

// 						</div>
// 					</div>
// 				))}
// 			</div>
// 			{/* Forms */}
// 			<AnimatePresence>{showLoginForm && renderForm("login")}</AnimatePresence>
// 			<AnimatePresence>{showSignupForm && renderForm("signup")}</AnimatePresence>

// 			<Footer1 />
// 			<Footer2 />
// 		</div>
// 	);
// };

// export default Blog_All;














































import React, { useState } from "react";
import Blog_Data from "../Blog_Data"
import { useNavigate } from 'react-router-dom';
import Footer1 from "../Footer1";
import Footer2 from "../Footer2";
import { RiArrowRightUpLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { useAuth } from "../../context/auth";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from 'react-icons/fa';

const Blog_All = () => {
	const [auth] = useAuth();
	const navigate = useNavigate();
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [showLoginForm, setShowLoginForm] = useState(false);
	const [showSignupForm, setShowSignupForm] = useState(false);
	const [selectedOption, setSelectedOption] = useState("");

	const handleReadMore = (blog) => {
		navigate(`/${blog.url}`, { state: { blog } });
	};

	const toggleMobileMenu = () => {
		setMobileMenuOpen(!mobileMenuOpen);
	};

	const handleLoginSubmit = () => {
		if (selectedOption === "option1") navigate("/donor_login");
		else if (selectedOption === "option2") navigate("/recipient_login");
		else if (selectedOption === "option3") navigate("/organization_login");
	};

	const handleSignupSubmit = () => {
		if (selectedOption === "option1") navigate("/donor_signup");
		else if (selectedOption === "option2") navigate("/recipient_signup");
		else if (selectedOption === "option3") navigate("/organization_signup");
	};

	const renderForm = (type) => (
		<motion.div
			className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-10 backdrop-blur-sm"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<motion.div
				initial={{ scale: 0 }}
				animate={{ scale: 1 }}
				exit={{ scale: 0 }}
				transition={{ duration: 0.4, ease: "easeOut" }}
				className="bg-white backdrop-blur-lg border border-white/20 p-6 sm:p-8 rounded-lg shadow-lg w-[90%] max-w-md relative"
			>
				<button
					className="absolute top-2 right-3 text-xl font-bold"
					onClick={() => {
						setShowLoginForm(false);
						setShowSignupForm(false);
						setSelectedOption("");
					}}
				>
					×
				</button>

				<h2 className="text-xl sm:text-2xl text-our_red font-bold text-center mb-6">
					{type === "login" ? "Login as a" : "Sign Up as a"}
				</h2>

				<div className="flex flex-col space-y-3">
					{["Donor", "Recipient", "Organization"].map((role, idx) => {
						const value = `option${idx + 1}`;
						return (
							<label key={value} className="flex items-center space-x-2 cursor-pointer">
								<input
									type="radio"
									name={`${type}_selection`}
									value={value}
									onChange={() => setSelectedOption(value)}
									checked={selectedOption === value}
									className="w-4 h-4 sm:w-5 sm:h-5 text-our_red focus:ring-our_red"
								/>
								<span className="text-sm sm:text-base text-our_red">{role}</span>
							</label>
						);
					})}
				</div>

				<div className="flex justify-center mt-6">
					<button
						onClick={type === "login" ? handleLoginSubmit : handleSignupSubmit}
						disabled={!selectedOption}
						className={`px-4 sm:px-5 py-1 text-sm rounded-full transition duration-300 ${selectedOption
							? "bg-[#820000] border border-[#820000] text-white hover:bg-white hover:text-[#820000] hover:font-bold"
							: "bg-gray-300 text-gray-500 cursor-not-allowed"
							}`}
					>
						Submit
					</button>
				</div>
			</motion.div>
		</motion.div>
	);

	return (
		<div className="flex flex-col font-nunito">
			{/* Hero Section */}
			<div className="relative h-[400px] sm:h-[500px] md:h-[620px] w-full">
				<img
					src="/donation2.jpg"
					alt="Hero"
					className="w-full h-full object-cover"
				/>
				<div className="absolute inset-0 bg-black bg-opacity-50 text-white px-4 sm:px-6 md:px-8">
					{/* Navigation */}
					{!auth && (
						<>
							<nav className="flex justify-between items-center p-3 sm:p-4 py-1 mt-3 md:py-1 bg-white/30 backdrop-blur-md shadow-md rounded-full">
								<div className="flex items-center gap-2">
									<img className="w-10 sm:w-12 md:w-14" src="./logo.png" alt="Logo" />
									<span className="text-sm sm:text-xl md:text-2xl font-bold text-white">URGENT DROP</span>
								</div>

								{/* Desktop Navigation */}
								<div className="hidden md:flex space-x-4 lg:space-x-6 text-white font-medium">
									<Link to="/" className="hover:text-gray-200 transition">Home</Link>
									<Link to="/about_us" className="hover:text-gray-200 transition">About Us</Link>
									<Link to="/all_blogs" className="hover:text-gray-200 transition">Blogs</Link>
									<Link to="/all_events" className="hover:text-gray-200 transition">Events</Link>
								</div>

								{/* Mobile Menu Button */}
								<button
									className="md:hidden text-white text-xl"
									onClick={toggleMobileMenu}
									aria-label="Toggle menu"
								>
									{mobileMenuOpen ? <FaTimes /> : <FaBars />}
								</button>

								{/* Desktop Auth Buttons */}
								<div className="hidden md:flex space-x-2 sm:space-x-3">
									<button
										onClick={() => setShowLoginForm(true)}
										className="text-white border border-white px-3 sm:px-4 py-1 rounded-full hover:bg-red-50 hover:text-[#b02525] transition text-sm sm:text-base"
									>
										Log In
									</button>
									<button
										onClick={() => setShowSignupForm(true)}
										className="bg-[#b02525] text-white px-3 sm:px-4 py-1 rounded-full hover:bg-red-600 transition text-sm sm:text-base"
									>
										Sign Up
									</button>
								</div>
							</nav>

							{/* Mobile Menu */}
							<AnimatePresence>
								{mobileMenuOpen && (
									<motion.div
										initial={{ opacity: 0, height: 0 }}
										animate={{ opacity: 1, height: 'auto' }}
										exit={{ opacity: 0, height: 0 }}
										transition={{ duration: 0.3 }}
										className="md:hidden bg-[#820000]/90 text-white mx-4 rounded-b-lg overflow-hidden mt-2"
									>
										<div className="flex flex-col space-y-4 p-4">
											<Link
												to="/"
												className="hover:text-gray-200 transition"
												onClick={toggleMobileMenu}
											>
												Home
											</Link>
											<Link
												to="/about_us"
												className="hover:text-gray-200 transition"
												onClick={toggleMobileMenu}
											>
												About Us
											</Link>
											<Link
												to="/all_blogs"
												className="hover:text-gray-200 transition"
												onClick={toggleMobileMenu}
											>
												Blogs
											</Link>
											<Link
												to="/all_events"
												className="hover:text-gray-200 transition"
												onClick={toggleMobileMenu}
											>
												Events
											</Link>
											<div className="flex space-x-4 pt-2">
												<button
													onClick={() => {
														setShowLoginForm(true);
														toggleMobileMenu();
													}}
													className="text-white border border-white px-3 py-1 rounded-full hover:bg-red-50 hover:text-[#b02525] transition text-sm"
												>
													Log In
												</button>
												<button
													onClick={() => {
														setShowSignupForm(true);
														toggleMobileMenu();
													}}
													className="bg-[#b02525] text-white px-3 py-1 rounded-full hover:bg-red-600 transition text-sm"
												>
													Sign Up
												</button>
											</div>
										</div>
									</motion.div>
								)}
							</AnimatePresence>
						</>
					)}

					<div className="h-full flex flex-col items-center justify-center text-center px-4">
						<h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
							Welcome to Our Blogs
						</h1>
						<p className="text-sm sm:text-base mb-6 max-w-2xl">
							Discover powerful stories, expert advice, and updates about the world of blood donation.
						</p>
						<button className="bg-[#b02525] border-2 border-[#b02525] text-white py-2 px-4 rounded hover:bg-white hover:text-our_red hover:border-2 hover:border-our_red hover:font-bold transition flex flex-row justify-center items-center gap-3">
							Explore Now
						</button>
					</div>
				</div>
			</div>

			{/* Section Heading */}
			<h2 className="text-3xl sm:text-4xl font-extrabold text-center my-10 sm:my-14">
				<span className="text-our_red">All</span> Blogs
			</h2>

			{/* Blog Grid */}
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pb-12 sm:pb-16">
				{Blog_Data.map((blog) => (
					<div key={blog.id} className="w-full max-w-md mx-auto border rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
						<div className="relative w-full h-40 sm:h-48 md:h-56">
							<img
								src={blog.image_on_slider}
								alt={blog.title}
								className="w-full h-full object-cover"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-black/0"></div>
							<div className="absolute bottom-2 left-2 text-white text-xs font-bold">
								{blog.date}
							</div>
						</div>

						<div className="min-h-[200px] sm:min-h-[250px] p-4 sm:p-5 flex flex-col gap-3 sm:gap-4">
							<div className="flex-1 text-left relative pb-12 sm:pb-14">
								<div>
									<h3 className="text-lg sm:text-xl font-extrabold">{blog.title}</h3>
									<p className="text-gray-500 text-sm sm:text-base mt-2 line-clamp-3">
										{blog.description}
									</p>
								</div>

								<div className="absolute bottom-0 right-0">
									<button
										onClick={() => handleReadMore(blog)}
										className="bg-our_red border-2 border-our_red text-white py-1 sm:py-2 px-3 sm:px-4 rounded-full hover:bg-white hover:text-our_red hover:border-2 hover:border-our_red hover:font-bold transition flex flex-row justify-center items-center gap-1 text-sm sm:text-base"
									>
										Read More <RiArrowRightUpLine size={18} className="hidden sm:block" />
									</button>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>

			{/* Forms */}
			<AnimatePresence>{showLoginForm && renderForm("login")}</AnimatePresence>
			<AnimatePresence>{showSignupForm && renderForm("signup")}</AnimatePresence>

			<Footer1 />
			<Footer2 />
		</div>
	);
};

export default Blog_All;