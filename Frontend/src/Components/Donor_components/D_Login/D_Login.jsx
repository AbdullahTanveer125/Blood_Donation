import React, { useState } from 'react'
import { Link } from "react-router-dom";
// import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import axios from "axios";
import { useAuth } from "../../../context/auth";



import { FaKey } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { ImKey } from "react-icons/im";

import { useNavigate } from 'react-router-dom';

function Donor_Login() {


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

    const navigate = useNavigate();
    // const location = useLocation();

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            // const res = await axios.post(`${process.env.REACT_APP_API}/user/login`, {
            //   email: email,
            //   password,
            // });
            const res = await axios.post(`http://localhost:5000/donor/login`, {
                email: email,
                password,
            });

            console.log("*********************************************");
            console.log("**res", res, "**res.data", res.data, "**res.data.success", res.data.success)
            console.log("*********************************************");

            if (res && res.data.success) {
                toast.success(res.data && res.data.success);//  line:35
                // toast.success(res.data.success && res.data);//  line:36

                const { send_user, send_donor, person, token } = res.data;

                // Update auth state and localStorage
                const updatedAuth = {
                    user: send_user,
                    donor: send_donor,
                    person,
                    token
                };
                setAuth(updatedAuth);
                localStorage.setItem("auth", JSON.stringify(updatedAuth));

                console.log("Updated Auth State:", updatedAuth);

                console.log("**************auth AAAA*******************")
                console.log(auth)
                console.log("**************auth AAA**********************")

                // setAuth({
                //   // ...auth,
                //   user: res.data.send_donor,
                //   token: res.data.token,
                // });
                navigate("/donor");
                // navigate(location.state || "/");//is sy agr login ni hai to pehly login krwa kr phir usi page pr byj dy ga jisy access krna ho ga


                // localStorage.setItem("auth", JSON.stringify(res.data))

                // console.log("**************Auth*******************")
                // console.log(auth)
                // console.log("**************Auth**********************")






            } else {
                toast.error(res.data.message);
            }
        } catch (error) {
            console.log("********error*******", error, "***********");
            // toast.error("Something went wrong");
            // toast.error(error.response.data.message);
        }
    };







    return (

        <div className="min-h-screen bg-[url('./form_background.png')] bg-cover bg-center bg-no-repeat flex flex-row justify-center items-center font-nunito">

            {/* Black overlay */}
            {/* <div className="absolute inset-0 bg-black opacity-10 z-0"></div> */}

            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl shadow-2xl shadow-white p-8 w-full max-w-md"
            >
                <form onSubmit={handleSubmit} encType="multipart/form-data"
                    className=" ">

                    <div className='flex flex-row justify-center mb-5 text-2xl font-extrabold'>
                        <h1 ><FaCircleUser size={40} color='white'/></h1>
                    </div>

                    <div className='text-center text-white mb-20'>
                        <h1 className='text-2xl font-bold'>Welcome</h1>
                        <p>Login to your account to continue</p>
                    </div>

                    <div className='space-y-7'>

                        <div className="flex flex-col gap-1">
                            {/* <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label> */}
                            <div className="flex items-center gap-2 border-b border-white bg-white px-5 py-3 rounded-full">
                                {/* <div className="">
                                            <MdEmail size={20} />
                                        </div> */}
                                <MdEmail size={20}/>
                                <input
                                    type="text"
                                    value={email}
                                    onChange={function (e) { setEmail(e.target.value) }}
                                    required
                                    id="email"
                                    className=" font-bold placeholder:font-bold placeholder-gray-300 focus:outline-none"
                                    placeholder="Email"
                                />
                            </div>
                        </div>


                        <div className="flex items-center gap-2 border-b border-white bg-white px-5 py-3 rounded-full">

                            <ImKey size={20}/>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                id="password"
                                className="bg-transparent font-bold placeholder:font-bold placeholder-gray-300 focus:outline-none w-full"
                                placeholder="Password"
                            />
                        </div>

                    </div>

                    <div className="mt-6 text-center">
                        <button type="submit" className=" bg-[#820000] border-2 border-[#820000] text-white  font-nunito font-bold py-2 px-14 rounded hover:bg-white hover:text-[#820000] hover:border-2 hover:border-[#820000] hover:font-bold transition"
                        >Login</button>
                    </div>
                </form>

            </div>


        </div>




    );


}

export default Donor_Login
