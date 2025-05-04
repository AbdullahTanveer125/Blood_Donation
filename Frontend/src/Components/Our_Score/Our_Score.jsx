import React from 'react'
import { FaRegUser } from "react-icons/fa";
import { VscOrganization } from "react-icons/vsc";
// import life_image from "../../../public/lifeline.png"
import { FaHandHoldingHeart } from "react-icons/fa";
import { FaUserShield } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { HiMiniUserGroup } from "react-icons/hi2";


function Our_Score() {
    return (
        <div>

            <div className='my-10 font-nunito mt-40'>
                <h1 className='mb-9 text-4xl font-extrabold text-center'>
                    <span className='text-[#820000]'>Real-Time</span> Score
                </h1>

                <div className=' flex justify-center gap-20'>
                    <div className='bg-gray-200 shadow-lg shadow-gray-200 py-10 px-20 flex flex-col items-center justify-center text-center gap-5 rounded-3xl'>
                        {/* <img className='h-20 mb-[-27px]' src={life_image} alt="<<->>" /> */}
                        <FaHandHoldingHeart size={40} />
                        <p className='text-[#820000] text-4xl font-extrabold text-center'>+1500</p>
                        <p>Save Lives</p>
                    </div>

                    <div className='bg-gray-200 shadow-lg shadow-gray-200 py-10 px-20 flex flex-col items-center justify-center text-center gap-5 rounded-3xl'>
                        <FaUser size={40} />
                        <p className='text-[#820000] text-4xl font-extrabold text-center'>+1000</p>
                        <p>Active Donor</p>
                    </div>
                    <div className='bg-gray-200 shadow-lg shadow-gray-200 py-10 px-10 flex flex-col items-center justify-center text-center gap-5 rounded-3xl'>
                        <HiMiniUserGroup size={45} />
                        <p className='text-[#820000] text-4xl font-extrabold text-center'>+10</p>
                        <p>Organization Registered</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Our_Score
