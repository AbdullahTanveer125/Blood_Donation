import React, { useEffect } from "react";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseLargeFill } from "react-icons/ri";
import { FiSun } from "react-icons/fi";
// import Login from "./Login";
// import Logout from "./Logout";
// import { useAuth } from "../context/AuthProvider";
import image11 from '../../../../public/user.jpg'

import { useAuth } from "../../../context/auth";


function Donor_navbar() {


    const [auth] = useAuth(); // Access the auth state

    console.log("************AAAAAAAAAAAAAAAAA*********************************")
    console.log(auth)
    // get user from auth
    const { user, donor } = auth;
    console.log("*************AAAAAAAAAAAA********************************")
    console.log("user from auth", user._id, user.name, donor.person, donor._id, user)

    if (!auth || !auth.user) {
        console.error("Auth or user is not available");
        return <div>Please log in to access this page.</div>;
    }

    if (auth.person != "donor") {
        // console.error("Welcome");
        // return <div>Welcome</div>;
        console.error("You are not Donor! Please login as Donor to access this page.");
        return <div>You are not Donor! Please login as "Donor" to access this page.</div>;
    }







    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
    };


    // const [authUser, setAuthUser] = useAuth();
    // const [theme, setTheme] = useState(
    //   localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
    // );
    // const element = document.documentElement;
    // useEffect(() => {
    //   if (theme === "dark") {
    //     element.classList.add("dark");
    //     localStorage.setItem("theme", "dark");
    //     document.body.classList.add("dark");
    //   } else {
    //     element.classList.remove("dark");
    //     localStorage.setItem("theme", "light");
    //     document.body.classList.remove("dark");
    //   }
    // }, [theme]);

    // const [sticky, setSticky] = useState(false);
    // useEffect(() => {
    //   const handleScroll = () => {
    //     if (window.scrollY > 0) {
    //       setSticky(true);
    //     } else {
    //       setSticky(false);
    //     }
    //   };
    //   window.addEventListener("scroll", handleScroll);
    //   return () => {
    //     window.removeEventListener("scroll", handleScroll);
    //   };
    // }, []);

    const navItems = (
        <>
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="/course">Blood Tips</a>
            </li>
            <li>
                <a>Contact Us</a>
            </li>
            <li>
                <a>About Us</a>
            </li>
            <li>
                <a>Support Us</a>
            </li>
            <li>
                <button className="btn btn-info px-4 py-2">Log in</button>
            </li>
            <li>
                <button className="btn btn-success px-4 py-2 ml-2">Sign Up</button>
            </li>



        </>
    );



    return (
        <>

            <div className="px-5 navbar bg-[#EE8A9E] fixed ">
                <div className="w-[100%] flex justify-between navbar-start">

                    <div className="flex gap-4">
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src={image11} />
                        </div>
                        <a className=" text-2xl font-bold cursor-pointer">BloodLife</a>
                    </div>

                    {/*---------------- Navbar for small devices --------------- */}
                    <div className="dropdown lg:hidden">


                        <div className="flex flex-col items-center justify-between relative m-5">


                            {/* Hamburger Icon */}
                            <div
                                className={` text-3xl cursor-pointer z-50 ${menuOpen ? "hidden" : "block"}`}
                                onClick={handleMenuToggle}
                            >
                                <GiHamburgerMenu />
                            </div>

                            {/* Menu Overlay */}
                            <div
                                className={`fixed inset-0  bg-opacity-100 flex flex-col items-center justify-between   transition-transform duration-300 ${menuOpen ? 'translate-x-0' : 'translate-x-full'
                                    }`}
                            >

                                <div className="w-[100%] flex justify-between border-b-4  border-b-[#B01030] bg-[#EE8A9E] px-10 py-5 ">
                                    <div className="flex gap-4">
                                        <div className="w-10 rounded-full">
                                            <img
                                                alt="Tailwind CSS Navbar component"
                                                src={image11} />
                                        </div>
                                        <a className=" text-2xl font-bold cursor-pointer">BloodLife</a>
                                    </div>


                                    {/* Close Icon */}
                                    <div
                                        className={`text-black text-3xl self-start cursor-pointer z-50 ${menuOpen ? "block" : "hidden"}`}
                                        onClick={handleMenuToggle}
                                    >
                                        <RiCloseLargeFill />
                                    </div>

                                </div>

                                <hr />





                                {/* Menu Items */}
                                <div className="w-[100%] ">
                                    <ul className=" text-center space-y-8 text-2xl">
                                        <li>
                                            <a href="#" onClick={handleMenuToggle}>
                                                Home
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" onClick={handleMenuToggle}>
                                                About
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" onClick={handleMenuToggle}>
                                                Services
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" onClick={handleMenuToggle}>
                                                Contact
                                            </a>
                                        </li>
                                    </ul>
                                </div>


                                <div className="w-[100%] border-t-4  border-t-[#B01030] p-5 flex flex-col items-center justify-between gap-2 bg-slate-200">


                                    <button className=" border border-black px-4 py-2 w-[50%]">Log in</button>
                                    <button className="bg-[#B01030] text-gray-50 w-[50%]  px-6 py-3 ml-2">Logout</button>

                                </div>



                            </div>

                        </div>



                    </div>


                </div>


                <div className=" hidden lg:flex navbar-end space-x-3">
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {/* {navItems} */}
                            <li>
                                <a href="/">Home</a>
                            </li>
                            <li>
                                <a href="/course">Blood Tips</a>
                            </li>
                            <li>
                                <a>Contact Us</a>
                            </li>
                            <li>
                                <a>About Us</a>
                            </li>
                            <li>
                                <a>Support Us</a>
                            </li>
                            <li>
                                <button className=" border border-black px-4 py-2">Log in</button>
                                {/* <button className=" text-red-700 btn btn-outline btn-accent px-4 py-0">Log in</button> */}
                            </li>
                            <li>
                                <button className="bg-[#B01030] text-gray-50 px-6 py-3 ml-2">Logout</button>
                            </li>



                        </ul>
                    </div>




                </div>


            </div>

        </>
    );




}

export default Donor_navbar
