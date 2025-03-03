import React from 'react'
// import image11 from "../../../public/Home1.jpg"
import user from "../../../public/user.jpg"
import { SiComma } from "react-icons/si";
import { FaRegComment } from "react-icons/fa6";

function Feedback_Review_2({ event }) {
    return (
        <div className='bg-yellow-400 p-10 flex gap-48 h-[400px] w-[100%] pb-20'>

            <div className="indicator">

                <span className="ml-7 w-9 h-9 border-sky-500 bg-sky-500 rounded-full indicator-item indicator-start badge badge-secondary font-extrabold p-1">
                    {/* <SiComma size={100}/> */}
                    <FaRegComment />
                </span>

                <div className="bg-base-300 grid h-32 w-32 place-items-center">

                    <div className='bg-black text-white p-4 pb-8 w-[300px] h-[300px] border-[1px] border-gray-200'>




                        <div className=' pt-4 h-[210px]'>

                            <div className=' font-sans font-thin italic'>
                                {event.comment}
                            </div>

                            {/* <div className=' font-sans'>
                                <strong>Rating=</strong> event.rating/5
                            </div> */}
                        </div>

                        <div className='flex gap-3'>
                            <figure className='w-[25%]'>
                                <img
                                    className='h-14 w-14 border-2 border-gray-400 rounded-full'
                                    src={event.profile_photo ? event.profile_photo : "/donation6.jpg"}
                                    alt="loading" />
                                {/* src={event.profile_photo ? event.profile_photo : image11} alt="" /> */}
                            </figure>
                            <div className='w-[70%]'>
                                <div className=' '>{event.recipient_username}</div>
                                <p className='text-sky-700'>recipient</p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>


            {/* *********************************************************************************
            *********************************************************************************
            ********************************************************************************* */}

            <div className="indicator">

                <span className="ml-7 w-9 h-9 border-sky-500 bg-sky-500 rounded-full indicator-item indicator-start badge badge-secondary font-extrabold p-1">
                    {/* <SiComma size={100}/> */}
                    <FaRegComment />
                </span>

                <div className="bg-base-300 grid h-32 w-32 place-items-center">

                    <div className='bg-black text-white p-4 pb-8 w-[300px] h-[300px] border-[1px] border-gray-200'>




                        <div className=' pt-4 h-[210px]'>

                            <div className=' font-sans font-thin italic'>
                                event.comment Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod tempora dignissimos repudiandae amet illo
                            </div>

                            {/* <div className=' font-sans'>
                                <strong>Rating=</strong> event.rating/5
                            </div> */}
                        </div>

                        <div className='flex gap-3'>
                            <figure className='w-[25%]'>
                                <img
                                    className='h-14 w-14 border-2 border-gray-400 rounded-full'
                                    src="/donation6.jpg" alt="loading" />
                                {/* src={event.profile_photo ? event.profile_photo : image11} alt="" /> */}
                            </figure>
                            <div className='w-[70%]'>
                                <div className=' '>event. recipient_</div>
                                <p className='text-sky-700'>donor</p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>







            {/* ***************************************************************************
****************************************************************************
*************************************************************************** */}

            <div className="indicator">

                <span className="ml-7 w-9 h-9 border-sky-500 bg-sky-500 rounded-full indicator-item indicator-start badge badge-secondary font-extrabold p-1">
                    {/* <SiComma size={100}/> */}
                    <FaRegComment />
                </span>

                <div className="bg-base-300 grid h-32 w-32 place-items-center">

                    <div className='bg-black text-white p-4 pb-8 w-[300px] h-[300px] border-[1px] border-gray-200'>




                        <div className=' pt-4 h-[210px]'>

                            <div className=' font-sans font-thin italic'>
                                event.comment Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod tempora dignissimos repudiandae amet illo
                            </div>

                            {/* <div className=' font-sans'>
                                <strong>Rating=</strong> event.rating/5
                            </div> */}
                        </div>

                        <div className='flex gap-3'>
                            <figure className='w-[25%]'>
                                <img
                                    className='h-14 w-14 border-2 border-gray-400 rounded-full'
                                    src="/donation6.jpg" alt="loading" />
                                {/* src={event.profile_photo ? event.profile_photo : image11} alt="" /> */}
                            </figure>
                            <div className='w-[70%]'>
                                <div className=' '>event. recipient_</div>
                                <p className='text-sky-700'>donor</p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>







        </div>
    )
}

export default Feedback_Review_2
