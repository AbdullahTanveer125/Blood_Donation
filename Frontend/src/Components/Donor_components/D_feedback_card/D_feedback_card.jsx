import React from 'react'
import image11 from "../../../../public/Home1.jpg"

function D_feedback_card({ event }) {
    // console.log("FFFFFFFFFFFFFFFFFFFFFFF=",event)
    return (
        <div className='bg-gray-200 p-4 max-w-72 h-[300px] border-[1px] border-black'>

            <div className='flex gap-5'>
                <figure>
                    <img
                        className='h-14 w-14 border-2 border-black rounded-full'
                        src={event.profile_photo ? event.profile_photo : image11} alt="" />
                </figure>
                <div>
                    <div className=' font-bold'>{event.recipient_username}</div>
                    <p className='text-[#B01030]'>donor</p>
                </div>
            </div>


            <div className=' pl-16 pt-4 h-[220px] flex flex-col justify-between'>
                <div className=' font-sans'>
                    {event.comment}
                </div>

                <div className=' font-sans'>
                    <strong>Rating=</strong> {event.rating}/5
                </div>
            </div>
        </div>
    )
}

export default D_feedback_card
