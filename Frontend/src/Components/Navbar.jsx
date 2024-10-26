import React, { useEffect } from "react";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseLargeFill } from "react-icons/ri";
import { FiSun } from "react-icons/fi";
// import Login from "./Login";
// import Logout from "./Logout";
// import { useAuth } from "../context/AuthProvider";

function Navbar() {

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
      
        <div className="px-5 navbar bg-slate-400 border-b-4  border-b-black">
          <div className="navbar-start">

            {/*---------------- Navbar for small devices --------------- */}
            <div className="dropdown lg:hidden">
              

              <div className="relative m-5">


                {/* Hamburger Icon */}
                <div
                  className={`text-3xl cursor-pointer z-50 ${menuOpen ? "hidden" : "block"}`}
                  onClick={handleMenuToggle}
                >
                  <GiHamburgerMenu />
                </div>

                {/* Menu Overlay */}
                <div
                  className={`fixed inset-0 bg-green-400 bg-opacity-90 flex flex-col items-center justify-between text-white  transition-transform duration-300 ${menuOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
                >

                  <div className="w-[100%] flex justify-between border-b-2  border-b-black bg-slate-500 px-10 py-5 ">
                    <a className=" text-2xl font-bold cursor-pointer">BloodLife</a>

                    {/* Close Icon */}
                    <div
                      className={`text-3xl self-start cursor-pointer z-50 ${menuOpen ? "block" : "hidden"}`}
                      onClick={handleMenuToggle}
                    >
                      <RiCloseLargeFill />
                    </div>

                  </div>

                  <hr />





                  {/* Menu Items */}
                  <div className="w-[100%] bg-sky-300">
                    <ul className="text-center space-y-8 text-2xl">
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


                  <div className="w-[100%] border-t-2  border-t-black p-5 flex flex-col items-center justify-between gap-2 bg-slate-200">


                    <button className="btn btn-outline btn-accent w-[50%]">Log in</button>
                    {/* <button className="btn btn-info w-[50%]">Log in</button> */}
                    <button className="btn btn-success w-[50%] text-white">Sign Up</button>
                    {/* <div className="w-[100%]">
                      
                    </div>

                    <div className="w-[100%] bg-orange-800">
                    </div> */}

                  </div>



                </div>
              </div>
























              {/* <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              > */}
              {/* {navItems} */}
              {/* <li>
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

                <div className="bg-slate-600 text-center p-5">

                  <div>
                    <button className="btn btn-info px-4 py-2"
                    >Log in</button>
                  </div>

                  <div>
                    <button className="btn btn-success px-4 py-2 mt-2">Sign Up</button>
                  </div>

                </div>


              </ul> */}
            </div>
            <a className=" text-2xl font-bold cursor-pointer">BloodLife</a>

          </div>
          {/* <a className=" text-2xl font-bold cursor-pointer">BloodLife</a> */}


          <div className="navbar-end space-x-3">
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
                  <button className="btn btn-info px-4 py-2">Log in</button>
                </li>
                <li>
                  <button className="btn btn-success px-4 py-2 ml-2">Sign Up</button>
                </li>



              </ul>
            </div>


            {/*------------ Search Box -----------------*/}

            {/* <div className="hidden md:block">
              <label className=" px-3 py-2 border rounded-md flex items-center gap-2">
                <input
                  type="text"
                  className="grow outline-none rounded-md px-1 dark:bg-slate-900 dark:text-white"
                  placeholder="Search"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </label>
            </div> */}






            {/* {authUser ? (
              <Logout />
            ) : (
              <div className="">
                <a
                  className="bg-black text-white px-3 py-2 rounded-md hover:bg-slate-800 duration-300 cursor-pointer"
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                >
                  Login
                </a>
                <Login />
              </div>
            )} */}


          </div>


          <div className="m-4"> {/* Tailwind margin class */}
            <FiSun size={20} />
          </div>





        </div>
      
    </>
  );
}

export default Navbar;




































































