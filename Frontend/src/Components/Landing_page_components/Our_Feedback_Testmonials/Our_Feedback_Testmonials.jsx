import React from 'react'
import image11 from "../../../../public/Home1.jpg"

function Testmonials_Feedbacks_of_us({event}) {


	return (


		<div className='bg-gray-200 p-4 w-72 rounded-md shadow-md shadow-gray-600'>

			<div className='flex gap-5'>
				<figure>
					<img
						className='h-14 w-14 border-2 border-black rounded-full shadow-md shadow-gray-600'
						src={event.profile_photo ? event.profile_photo : image11} alt="" />
				</figure>
				<div>
					<div className=' font-bold'>{event.username}</div>
					<p className='text-[#B01030]'>{event.person}</p>
				</div>
			</div>

			<div className='pl-16 pt-4 font-nunito italic'>
			{event.our_feedback}
			</div>

		</div>

	)
}

export default Testmonials_Feedbacks_of_us
