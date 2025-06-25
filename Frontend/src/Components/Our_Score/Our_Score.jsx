// import React from 'react'
// import { FaRegUser } from "react-icons/fa";
// import { VscOrganization } from "react-icons/vsc";
// // import life_image from "../../../public/lifeline.png"
// import { FaHandHoldingHeart } from "react-icons/fa";
// import { FaUserShield } from "react-icons/fa";
// import { FaUser } from "react-icons/fa";
// import { HiMiniUserGroup } from "react-icons/hi2";


// function Our_Score() {
//     return (
//         <div>

//             <div className='my-10 font-nunito mt-40'>
//                 <h1 className='mb-9 text-4xl font-extrabold text-center'>
//                     <span className='text-our_red'>Real-Time</span> Impact
//                 </h1>

//                 <div className=' flex justify-center gap-20'>
//                     <div className='bg-gray-100 shadow-lg shadow-gray-200 py-10 px-20 flex flex-col items-center justify-center text-center gap-5 rounded-3xl'>
//                         {/* <img className='h-20 mb-[-27px]' src={life_image} alt="<<->>" /> */}
//                         <FaHandHoldingHeart size={40} />
//                         <p className='text-our_red text-4xl font-extrabold text-center'>+1500</p>
//                         <p>Save Lives</p>
//                     </div>

//                     <div className='bg-gray-100 shadow-lg shadow-gray-200 py-10 px-20 flex flex-col items-center justify-center text-center gap-5 rounded-3xl'>
//                         <FaUser size={40} />
//                         <p className='text-our_red text-4xl font-extrabold text-center'>+1000</p>
//                         <p>Active Donor</p>
//                     </div>
//                     <div className='bg-gray-100 shadow-lg shadow-gray-200 py-10 px-10 flex flex-col items-center justify-center text-center gap-5 rounded-3xl'>
//                         <HiMiniUserGroup size={45} />
//                         <p className='text-our_red text-4xl font-extrabold text-center'>+10</p>
//                         <p>Organization Registered</p>
//                     </div>
//                 </div>
//             </div>

//         </div>
//     )
// }

// export default Our_Score





























import React from 'react'
import { FaRegUser } from "react-icons/fa";
import { VscOrganization } from "react-icons/vsc";
import { FaHandHoldingHeart } from "react-icons/fa";
import { FaUserShield } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { HiMiniUserGroup } from "react-icons/hi2";

function Our_Score() {
    return (
        <div className="font-nunito my-10 md:mt-40 px-4 sm:px-6 lg:px-8">
            <h1 className='mb-8 md:mb-12 md:text-4xl text-xl font-extrabold text-center'>
                <span className='text-our_red'>Real-Time</span> Impact
            </h1>

            <div className='flex flex-col md:flex-row justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-20'>
                {/* Save Lives Card */}
                <div className='bg-gray-100 shadow-lg shadow-gray-200 py-6 sm:py-8 md:py-10 px-6 sm:px-12 md:px-16 lg:px-20 flex flex-col items-center justify-center text-center gap-3 sm:gap-4 md:gap-5 rounded-2xl md:rounded-3xl'>
                    <FaHandHoldingHeart className="text-our_red" size={20} sm={35} md={40} />
                    <p className='text-our_red text-xl sm:text-xl md:text-4xl font-extrabold'>+1500</p>
                    <p className='text-sm sm:text-base md:text-lg'>Save Lives</p>
                </div>

                {/* Active Donor Card */}
                <div className='bg-gray-100 shadow-lg shadow-gray-200 py-6 sm:py-8 md:py-10 px-6 sm:px-12 md:px-16 lg:px-20 flex flex-col items-center justify-center text-center gap-3 sm:gap-4 md:gap-5 rounded-2xl md:rounded-3xl'>
                    <FaUser className="text-our_red" size={20} sm={35} md={40} />
                    <p className='text-our_red text-xl sm:text-3xl md:text-4xl font-extrabold'>+1000</p>
                    <p className='text-sm sm:text-base md:text-lg'>Active Donor</p>
                </div>

                {/* Organization Card */}
                <div className='bg-gray-100 shadow-lg shadow-gray-200 py-6 sm:py-8 md:py-10 px-6 sm:px-10 md:px-12 lg:px-16 flex flex-col items-center justify-center text-center gap-3 sm:gap-4 md:gap-5 rounded-2xl md:rounded-3xl'>
                    <HiMiniUserGroup className="text-our_red" size={25} sm={40} md={45} />
                    <p className='text-our_red text-xl sm:text-3xl md:text-4xl font-extrabold'>+10</p>
                    <p className='text-sm sm:text-base md:text-lg'>Organization Registered</p>
                </div>
            </div>
        </div>
    )
}

export default Our_Score