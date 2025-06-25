// import React, { useState } from 'react'
// import { Link } from "react-router-dom";
// // import { useForm } from "react-hook-form";

// import axios from "axios";
// import { useAuth } from "../../../context/auth";


// import { MdEmail } from "react-icons/md";
// import { FaCircleUser } from "react-icons/fa6";
// import { ImKey } from "react-icons/im";

// import { useNavigate } from 'react-router-dom';

// import { IoArrowUndo } from "react-icons/io5";
// import { toast } from 'react-toastify';


// function Organization_Login() {

//     const navigate = useNavigate();

//     // const {
//     //   register,
//     //   handleSubmit,
//     //   formState: { errors },
//     // } = useForm();

//     // const onSubmit = async (data) => {
//     //   const userInfo = {
//     //     email: data.email,
//     //     password: data.password,
//     //   };
//     //   await axios
//     //     .post("http://localhost:5000/donor-login", userInfo)
//     //     .then((res) => {
//     //       console.log(res.data);
//     //       if (res.data) {
//     //         toast.success("Loggedin Successfully");
//     //         document.getElementById("my_modal_3").close();
//     //         setTimeout(() => {
//     //           window.location.reload();
//     //           localStorage.setItem("Users", JSON.stringify(res.data.user));
//     //         }, 1000);
//     //       }
//     //     })
//     //     .catch((err) => {
//     //       if (err.response) {
//     //         console.log(err);
//     //         toast.error("Error: " + err.response.data.message);
//     //         setTimeout(() => {}, 2000);
//     //       }
//     //     });
//     // };



//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [auth, setAuth] = useAuth();

//     // const navigate = useNavigate();
//     // const location = useLocation();

//     async function handleSubmit(e) {
//         e.preventDefault();
//         try {
//             // const res = await axios.post(`${process.env.REACT_APP_API}/user/login`, {
//             //   email: email,
//             //   password,
//             // });
//             const res = await axios.post(`http://localhost:5000/organization/login`, {
//                 email: email,
//                 password,
//             });

//             console.log("*********************************************");
//             console.log("**res", res, "**res.data", res.data, "**res.data.success", res.data.success)
//             console.log("*********************************************");

//             if (res && res.data.success) {
//                 toast.success(res.data && res.data.success);//  line:35
//                 // toast.success(res.data.success && res.data);//  line:36

//                 const { send_user, send_organization, person, token } = res.data;

//                 // Update auth state and localStorage
//                 const updatedAuth = {
//                     user: send_user,
//                     organization: send_organization,
//                     person,
//                     token
//                 };
//                 setAuth(updatedAuth);
//                 localStorage.setItem("auth", JSON.stringify(updatedAuth));

//                 console.log("Updated Auth State:", updatedAuth);

//                 console.log("**************auth AAAA*******************")
//                 console.log(auth)
//                 console.log("**************auth AAA**********************")

//                 // setAuth({
//                 //   // ...auth,
//                 //   user: res.data.send_donor,
//                 //   token: res.data.token,
//                 // });

//                 toast.success('Login Successfuly!');
//                 navigate("/organization");
//                 // navigate(location.state || "/");//is sy agr login ni hai to pehly login krwa kr phir usi page pr byj dy ga jisy access krna ho ga


//                 // localStorage.setItem("auth", JSON.stringify(res.data))

//                 // console.log("**************Auth*******************")
//                 // console.log(auth)
//                 // console.log("**************Auth**********************")






//             } else {
//                 toast.error(res.data.message);
//             }
//         } catch (error) {
//             console.log("********error*******", error, "***********");
//             // toast.error("Something went wrong");
//             toast.error(error.response.data.message);
//         }
//     };







//     return (

//         <div className="min-h-screen font-nunito">

//             <div className='my-10 text-justify  flex flex-col items-start justify-center relative z-30'>
//                 <button
//                     onClick={() => navigate("/")}
//                     className="ml-10 bg-white  text-our_red  rounded-full w-8 h-8 hover:bg-white hover:text-our_red hover:border-2 hover:border-our_red hover:font-bold transition flex flex-row justify-center items-center gap-3">
//                     <IoArrowUndo size={20} />
//                 </button>
//             </div>


//             <div className="absolute inset-0 bg-[url('/LogIn.png')] bg-cover bg-center z-0"></div>

//             <div className=" bg-green-0 p-3 flex flex-row justify-center items-center gap-10 relative z-20 w-[85%]"
//             >

//                 <div className='bg-blue-00 min-w-[50%] pl-40 position z-40 relative'>
//                     <h1 className='text-2xl font-extrabold'><span className='text-our_red'>Every Drop</span>  Counts!</h1>
//                     <p>Your small act of kindness can save a life today.</p>
//                 </div>


//                 <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl shadow-2xl shadow-gray-400 p-8 w-full max-w-md"
//                 >
//                     <form onSubmit={handleSubmit} encType="multipart/form-data"
//                         className=" ">

//                         <div className='flex flex-row justify-center mb-5 text-2xl font-extrabold'>
//                             <h1 ><FaCircleUser size={40} /></h1>
//                         </div>

//                         <div className='text-center mb-20'>
//                             <h1 className='text-2xl font-bold'>Welcome</h1>
//                             <p>Login to your account to continue</p>
//                         </div>

//                         <div className='space-y-7'>

//                             <div className="flex flex-col gap-1">
//                                 {/* <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label> */}
//                                 <div className="flex items-center gap-2 bg-white px-5 border border-gray-300 rounded-full">
//                                     {/* <div className="">
//                                                     <MdEmail size={20} />
//                                                 </div> */}
//                                     <MdEmail size={20} />
//                                     <input
//                                         type="text"
//                                         value={email}
//                                         onChange={function (e) { setEmail(e.target.value) }}
//                                         required
//                                         id="email"
//                                         className=" w-full font-bold placeholder:font-bold placeholder-gray-300 focus:outline-none border-none"
//                                         placeholder="Email"
//                                     />
//                                 </div>
//                             </div>


//                             <div className="flex items-center gap-2 bg-white px-5 border border-gray-300 rounded-full">

//                                 <ImKey size={20} />
//                                 <input
//                                     type="password"
//                                     value={password}
//                                     onChange={(e) => setPassword(e.target.value)}
//                                     required
//                                     id="password"
//                                     className="bg-transparent font-bold placeholder:font-bold placeholder-gray-300 focus:outline-none w-full border-none"
//                                     placeholder="Password"
//                                 />
//                             </div>

//                         </div>

//                         <div className="mt-6 text-center">
//                             <button type="submit" className=" bg-[#820000] border-2 border-[#820000] text-white  font-nunito font-bold py-2 px-8 rounded-full hover:bg-white hover:text-[#820000] hover:border-2 hover:border-[#820000] hover:font-bold transition"
//                             >Login</button>
//                             <p className="text-xs mt-2">
//                                 Don't have an account?{" "}
//                                 <Link to="/organization_signup" className="text-our_red font-bold hover:underline">
//                                     Sign Up
//                                 </Link>
//                             </p>
//                         </div>
//                     </form>

//                 </div>


//             </div>



//         </div>



//     );


// }

// export default Organization_Login


















































import React, { useState } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../../context/auth";
import { toast } from 'react-toastify';
import { MdEmail } from "react-icons/md";
import { FaCircleUser } from "react-icons/fa6";
import { ImKey } from "react-icons/im";
import { IoArrowUndo } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

function Organization_Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [auth, setAuth] = useAuth();

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const res = await axios.post(`http://localhost:5000/organization/login`, {
                email: email,
                password,
            });

            if (res && res.data.success) {
                toast.success(res.data && res.data.success);
                const { send_user, send_organization, person, token } = res.data;

                const updatedAuth = {
                    user: send_user,
                    organization: send_organization,
                    person,
                    token
                };
                setAuth(updatedAuth);
                localStorage.setItem("auth", JSON.stringify(updatedAuth));

                toast.success('Login Successful!');
                navigate("/organization");
            } else {
                toast.error(res.data.message);
            }
        } catch (error) {
            console.error("Login error:", error);
            toast.error(error.response?.data?.message || "Something went wrong");
        }
    };

    return (
        <div className="min-h-screen font-nunito bg-gray-100 relative overflow-hidden">
            {/* Background image with overlay */}
            <div className="absolute inset-0 bg-[url('/LogIn.png')] bg-cover bg-center z-0"></div>
            {/* <div className="absolute inset-0 bg-black bg-opacity-30 z-0"></div> */}

            {/* Back button */}
            <div className='container mx-auto px-4 py-6 sm:py-10 relative z-30'>
                <button
                    onClick={() => navigate("/")}
                    className="bg-white text-our_red rounded-full w-8 h-8 hover:bg-white hover:text-our_red hover:border-2 hover:border-our_red hover:font-bold transition flex justify-center items-center"
                >
                    <IoArrowUndo size={20} />
                </button>
            </div>

            {/* Main content */}
            <div className="container mx-auto px-4 py-6 sm:py-10 flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-10 relative z-20">
                {/* Left side - Welcome message */}
                <div className='w-full lg:w-1/2 max-w-xl text-center lg:text-left px-4 lg:pl-12 xl:pl-20 relative z-40'>
                    <h1 className='text-2xl sm:text-3xl md:text-4xl font-extrabold  mb-3'>
                        <span className='text-our_red'>Every Drop</span> Counts!
                    </h1>
                    <p className='text-base sm:text-lg md:text-xl '>
                        Your small act of kindness can save a life today.
                    </p>
                </div>

                {/* Right side - Login form */}
                <div className="w-full max-w-md bg-white bg-opacity-10 backdrop-blur-lg rounded-xl shadow-2xl shadow-gray-400 p-6 sm:p-8">
                    <form onSubmit={handleSubmit} encType="multipart/form-data">
                        <div className='flex justify-center mb-5'>
                            <FaCircleUser size={40} className="" />
                        </div>

                        <div className='text-center mb-8 sm:mb-12'>
                            <h1 className='text-2xl sm:text-3xl font-bold '>Welcome</h1>
                            <p className="">Login to your account to continue</p>
                        </div>

                        <div className='space-y-5 sm:space-y-6'>
                            <div className="flex items-center gap-3 bg-white bg-opacity-80 px-4 sm:px-5 border border-gray-300 rounded-full">
                                <MdEmail size={20} className="text-gray-500" />
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    id="email"
                                    className="w-full font-medium placeholder:font-medium placeholder-gray-400 focus:outline-none border-none bg-transparent"
                                    placeholder="Email"
                                />
                            </div>

                            <div className="flex items-center gap-3 bg-white bg-opacity-80 px-4 sm:px-5 border border-gray-300 rounded-full">
                                <ImKey size={20} className="text-gray-500" />
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    id="password"
                                    className="w-full font-medium placeholder:font-medium placeholder-gray-400 focus:outline-none border-none bg-transparent"
                                    placeholder="Password"
                                />
                            </div>
                        </div>

                        <div className="mt-8 text-center">
                            <button
                                type="submit"
                                className="w-full sm:w-auto bg-[#820000] border-2 border-[#820000] text-white font-bold py-2 px-6 sm:px-8 rounded-full hover:bg-white hover:text-[#820000] transition duration-300"
                            >
                                Login
                            </button>
                            <p className="text-xs sm:text-sm mt-3">
                                Don't have an account?{" "}
                                <Link
                                    to="/organization_signup"
                                    className="text-our_red font-bold hover:underline"
                                >
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

export default Organization_Login;