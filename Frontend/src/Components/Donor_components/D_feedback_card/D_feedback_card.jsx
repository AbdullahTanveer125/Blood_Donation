import React from 'react'
import { FaRegComment } from "react-icons/fa6";

function D_feedback_card({ event }) {
    return (
        <div className='font-nunito flex gap-48 h-[400px] w-[100%] pb-20 rounded-lg'>

            {/* *********************************************************************************
            *********************************************************************************
            ********************************************************************************* */}

            <div className="indicator">

                <span className="ml-7 w-9 h-9 border-red-600 bg-red-600 rounded-full indicator-item indicator-start badge badge-secondary font-extrabold p-1">
                    {/* <SiComma size={100}/> */}
                    <FaRegComment />
                </span>

                <div className="bg-base-300 grid h-32 w-32 place-items-center rounded-lg">

                    <div className='bg-gray-200 shadow-xl p-4 pb-8 w-[300px] h-[300px] border-[1px] border-gray-200 rounded-lg'>




                        <div className=' pt-4 h-[210px]'>

                            <div className='  italic'>
                                "{event.description}"
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
                                <div className='font-bold'>{event. recipient_username}</div>
                                <p className='text-gray-600 text-xs'>Recipient</p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>







            {/* ***************************************************************************
****************************************************************************
*************************************************************************** */}









        </div>
    )
}

export default D_feedback_card
