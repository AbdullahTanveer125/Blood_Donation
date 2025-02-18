import React from 'react'
import image11 from "../../../../public/Home1.jpg"

function Testmonials_Feedbacks_of_us({event}) {


	return (


		<div className='bg-gray-200 p-4 max-w-72 rounded-2xl'>

			<div className='flex gap-5'>
				<figure>
					<img
						className='h-14 w-14 border-4 border-black rounded-full'
						src={event.profile_photo ? event.profile_photo : image11} alt="" />
				</figure>
				<div>
					<div className=' font-bold'>{event.username}</div>
					<p className='text-[#B01030]'>{event.person}</p>
				</div>
			</div>

			<div className='pl-16 pt-4 font-sans'>
			{event.our_feedback}
			</div>

		</div>

	)
}

export default Testmonials_Feedbacks_of_us
