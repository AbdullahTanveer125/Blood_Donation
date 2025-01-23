import React from 'react'
import { TbMessageDots } from "react-icons/tb";


function User_Navbar() {
    return (
        <div>



            <div className="navbar bg-gray-400">

                <div className="dropdown ">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full border-2 border-black">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-200 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>

                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">User Name</a>
                </div>

                <div className="flex-none gap-4 bg-orange-400">
                    {/* <Link>Home</Link> */}
                    <a href="">Home</a>
                    <a href="">Settings</a>
                    <a href="">Home</a>
                    <div className="form-control">
                        <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                    </div>

                    <div className="indicator">
                        <span className="indicator-item badge badge-secondary">99+</span>
                        <button className="btn">inbox <TbMessageDots size={30} /></button>
                    </div>






                    <button className="btn btn-info px-4 py-2">Log out</button>


                </div>

            </div>




        </div>
    )
}

export default User_Navbar
