import React from 'react'
import { FaRegUser } from "react-icons/fa";
import { VscOrganization } from "react-icons/vsc";
import life_image from "../../../public/lifeline.png"


function Our_Score() {
    return (
        <div>

            <div className='my-10'>
                <h1 className='mb-9 text-4xl font-bold text-center'>
                    <span className='text-[#B01030]'>Our</span> Score
                </h1>

                <div className=' flex justify-center gap-10'>
                    <div className='bg-gray-200 py-10 px-20 flex flex-col items-center justify-center text-center gap-5 rounded-3xl'>
                        <img className='h-20 mb-[-27px]' src={life_image} alt="<<->>" />
                        <p className='text-4xl font-bold text-center'>+1000</p>
                        <p>Save Lifes</p>
                    </div>
                    
                    <div className='bg-gray-200 py-10 px-20 flex flex-col items-center justify-center text-center gap-5 rounded-3xl'>
                        <FaRegUser size={50}/>
                        <p className='text-[#B01030] text-4xl font-bold text-center'>+1000</p>
                        <p>Active Donor</p>
                    </div>
                    <div className='bg-gray-200 py-10 px-10 flex flex-col items-center justify-center text-center gap-5 rounded-3xl'>
                        <VscOrganization size={50}/>
                        <p className='text-[#B01030] text-4xl font-bold text-center'>+1000</p>
                        <p>Organization Registered</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Our_Score
