import React, { useState } from 'react'
import { Link } from "react-router-dom";
// import { useForm } from "react-hook-form";

import axios from "axios";
import { useAuth } from "../../../context/auth";

import { FaCircleUser } from "react-icons/fa6";

import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { MdEmail } from "react-icons/md";
import { FaKey } from "react-icons/fa";

import { IoArrowUndo } from "react-icons/io5";

function Recipient_login() {

    const navigate = useNavigate();

    // const {
    //   register,
    //   handleSubmit,
    //   formState: { errors },
    // } = useForm();

    // const onSubmit = async (data) => {
    //   const userInfo = {
    //     email: data.email,
    //     password: data.password,
    //   };
    //   await axios
    //     .post("http://localhost:5000/donor-login", userInfo)
    //     .then((res) => {
    //       console.log(res.data);
    //       if (res.data) {
    //         toast.success("Loggedin Successfully");
    //         document.getElementById("my_modal_3").close();
    //         setTimeout(() => {
    //           window.location.reload();
    //           localStorage.setItem("Users", JSON.stringify(res.data.user));
    //         }, 1000);
    //       }
    //     })
    //     .catch((err) => {
    //       if (err.response) {
    //         console.log(err);
    //         toast.error("Error: " + err.response.data.message);
    //         setTimeout(() => {}, 2000);
    //       }
    //     });
    // };



    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [auth, setAuth] = useAuth();

    // const navigate = useNavigate();
    // const location = useLocation();

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            // const res = await axios.post(`${process.env.REACT_APP_API}/user/login`, {
            //   email: email,
            //   password,
            // });
            const res = await axios.post(`http://localhost:5000/recipient/login`, {
                email: email,
                password,
            });

            console.log("*********************************************");
            console.log("**res", res, "**res.data", res.data, "**res.data.success", res.data.success)
            console.log("*********************************************");

            if (res && res.data.success) {
                // toast.success(res.data && res.data.success);//  line:35
                // toast.success(res.data.success && res.data);//  line:36

                // const { send_recipient, token } = res.data;
                // Store auth data in context and local storage
                // setAuth({ user: send_recipient, token });


                const { send_user, send_recipient, person, token } = res.data;

                // Update auth state and localStorage
                const updatedAuth = {
                    user: send_user,
                    recipient: send_recipient,
                    person,
                    token
                };
                setAuth(updatedAuth);
                localStorage.setItem("auth", JSON.stringify(updatedAuth));

                console.log("Updated Auth State:", updatedAuth);

                console.log("**************auth*******************")
                console.log(auth)
                console.log("**************auth**********************")

                // setAuth({
                //   // ...auth,
                //   user: res.data.RECIPIENT,
                //   token: res.data.token,
                // });

                toast.success('Login Successfuly!');
                navigate("/recipient");
                // navigate(location.state || "/");//is sy agr login ni hai to pehly login krwa kr phir usi page pr byj dy ga jisy access krna ho ga
                // localStorage.setItem("auth", JSON.stringify(res.data))

            } else {
                toast.error(res.data.message);
            }
        } catch (error) {
            console.log("********error*******", error, "***********");
            // toast.error("Something went wrong");
            toast.error(error.response.data.message);
            // toast.error('This is an error message!');
        }
    };







    return (
        <div className="min-h-screen font-nunito">
            <div className='my-10 text-justify  flex flex-col items-start justify-center relative z-30'>
                <button
                    onClick={() => navigate("/")}
                    className="ml-10 bg-white  text-our_red  rounded-full w-8 h-8 hover:bg-white hover:text-our_red hover:border-2 hover:border-our_red hover:font-bold transition flex flex-row justify-center items-center gap-3">
                    <IoArrowUndo size={20} />
                </button>
            </div>

            {/* Black overlay */}
            <div className="absolute inset-0 bg-[url('/LogIn.png')] bg-cover bg-center z-0"></div>

            {/* <img
                src="/LogIn.png"
                className="absolute inset-0 w-full h-full object-cover blur-m"
                alt="Background"
            /> */}


            <div className=" bg-green-0 p-3 flex flex-row justify-center items-center gap-10 relative z-20 w-[85%]"
            >

                <div className='bg-blue-00 min-w-[50%] pl-40 position z-40 relative'>
                    <h1 className='text-2xl font-extrabold'><span className='text-our_red'>Every Drop</span>  Counts!</h1>
                    <p>Your small act of kindness can save a life today.</p>
                </div>


                <div className='bg-white bg-opacity-10 backdrop-blur-lg rounded-xl shadow-2xl shadow-gray-400 p-8 pb-16 ml-20 w-full max-w-md'>

                    <form onSubmit={handleSubmit} encType="multipart/form-data"
                        className="h-96 pb-6">

                        <div className='flex flex-row justify-center mb-5 text-2xl font-extrabold'>
                            <h1 ><FaCircleUser size={30} color='' /></h1>
                        </div>

                        <div className='text-center space-y-1 mb-16'>
                            <p className='text-2xl font-extrabold mb-[-4px]'>WELCOME</p>
                            <p>Login to your account to continue</p>
                        </div>

                        <div className='space-y-7'>

                            <div className="flex flex-col gap-1">
                                {/* <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label> */}
                                <div className="flex items-center gap-2 border border-gray-300 bg-white bg-opacity-5 backdrop-blur-sm px-5 py-1 w-full rounded-full">
                                    <div className="">
                                        <MdEmail size={20} />
                                    </div>
                                    <input
                                        type="text"
                                        value={email}
                                        onChange={function (e) { setEmail(e.target.value) }}
                                        required
                                        id="email"
                                        className="pb-1 bg-transparent   focus:outline-none border-none w-full"
                                        placeholder="Email"
                                    />
                                </div>
                            </div>


                            <div className="flex items-center gap-2 border border-gray-300 bg-white bg-opacity-5 backdrop-blur-sm px-5 py-1 rounded-full">

                                <FaKey size={20} />
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    id="password"
                                    className="pb-1 bg-transparent border-none focus:outline-none w-full"
                                    placeholder="Password"
                                />
                            </div>
                        </div>

                        <div className="mt-16 text-center">
                            <button type="submit" className="rounded-full bg-our_red border-2 border-our_red text-white  font-nunito font-bold py-2 px-8 hover:bg-white hover:text-our_red hover:border-2 hover:border-our_red hover:font-bold transition"
                            >Login</button>
                            <p className="text-xs mt-2">
                                Don't have an account?{" "}
                                <Link to="/recipient_signup" className="text-our_red font-bold hover:underline">
                                    Sign Up
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>


            </div>


        </div>




    );

}

export default Recipient_login
