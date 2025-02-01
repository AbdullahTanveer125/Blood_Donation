import React, { useState } from 'react'
import { Link } from "react-router-dom";
// import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import axios from "axios";
import { useAuth } from "../../context/auth";



import { FaKey } from "react-icons/fa";
import { MdEmail } from "react-icons/md";



function Organization_Login() {
  

    
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
            const res = await axios.post(`http://localhost:5000/organization/login`, {
                email: email,
                password,
            });

            console.log("*********************************************");
            console.log("**res", res, "**res.data", res.data, "**res.data.success", res.data.success)
            console.log("*********************************************");

            if (res && res.data.success) {
                toast.success(res.data && res.data.success);//  line:35
                // toast.success(res.data.success && res.data);//  line:36

                const { send_user, send_organization, person, token } = res.data;

                // Update auth state and localStorage
                const updatedAuth = {
                    user: send_user,
                    organization: send_organization,
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
                // navigate("/");
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
            toast.error(error.response.data.message);
        }
    };







    return (

        <div>
            <div className='m-12'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, libero odio odit dolores expedita saepe magnam consequatur id nostrum labore a ipsum iste quasi at possimus, accusantium culpa mollitia! Placeat!
            </div>

            <div className="bg-slate-200 hero min-h-screen">
                ggggggggggg
                <div className='m-12'>AAAAAAsdjkkkkkkkkkkk
                    <p>asddddddddd</p>qqqq
                </div>


                <div className=" hero-content flex-col lg:flex-row-reverse">

                    <div className="w-[90%] md:w-[80%] lg:w-[35%] text-center lg:text-left">

                        <div className='text-center'
                        // className='bg-teal-200' style={{ borderRadius: "25% 25% 0% 71% / 0% 0% 25% 68%", border: "5px solid #1a73e8" }}
                        >

                            {/* <h1 className="text-5xl font-bold text-center">Register Now!</h1> */}
                            <img src="/donor register image.png" alt="" className='h-96 lg:h-auto mx-auto' />
                        </div>

                    </div>

                    <div className="bg-slate-300 w-[90%] md:w-[80%] lg:w-[60%] card shrink-0 shadow-2xl flex items-center"
                        style={{
                            boxShadow: "0 0 36px 2px #074799",
                        }}
                    >
                        <form onSubmit={handleSubmit} encType="multipart/form-data"
                            className=" card-body grid grid-cols-1 md:grid-cols-2 gap-4">



                            <div className="flex flex-col gap-1">
                                <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                                <div className="input input-bordered flex items-center gap-2">
                                    <div className="">
                                        <MdEmail size={20} />
                                    </div>
                                    <input
                                        type="text"
                                        value={email}
                                        onChange={function (e) { setEmail(e.target.value) }}
                                        required
                                        id="email"
                                        className="grow"
                                        placeholder=""
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="password" className="text-sm font-medium text-gray-700">Password</label>
                                <div className="input input-bordered flex items-center gap-2">
                                    <div className="">
                                        <FaKey size={20} />
                                    </div>
                                    <input
                                        type="password"
                                        value={password}
                                        onChange={function (e) { setPassword(e.target.value) }}
                                        required
                                        id="password"
                                        className="grow"
                                        placeholder=""
                                    />
                                </div>
                            </div>

                            <div className="mt-6 w-[90%]  text-center">
                                <button type="submit" className="bg-[#24599e] border-0 text-white btn w-[50%] font-bold text-2xl hover:bg-[#888b8e] hover:text-black"
                                    style={{
                                        boxShadow: "0 0 16px 2px #074799",
                                    }}
                                >Login</button>
                            </div>
                        </form>

                    </div>
                </div>
                ggggggggggg
            </div>

            <hr />
            <div>
                AAAAAAAAAAA


            </div>


        </div>




    );

    
}

export default Organization_Login
