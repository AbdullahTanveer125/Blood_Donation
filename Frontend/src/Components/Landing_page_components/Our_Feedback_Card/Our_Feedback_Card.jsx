// import React from 'react'
// import image11 from "../../../../public/Home1.jpg"

// function Our_Feedback_Card({event}) {


// 	return (


// 		<div className='bg-gray-200 p-4 w-72 rounded-md shadow-md shadow-gray-600'>

// 			<div className='flex gap-5'>
// 				<figure>
// 					<img
// 						className='h-14 w-14 border-2 border-black rounded-full shadow-md shadow-gray-600'
// 						src={event.profile_photo ? event.profile_photo : image11} alt="" />
// 				</figure>
// 				<div>
// 					<div className=' font-bold'>{event.username}</div>
// 					<p className='text-[#B01030]'>{event.person}</p>
// 				</div>
// 			</div>

// 			<div className='pl-16 pt-4 font-nunito italic text-justify'>
// 			{event.our_feedback}
// 			</div>

// 		</div>

// 	)
// }

// export default Our_Feedback_Card


























import React from 'react'
import image11 from "../../../../public/Home1.jpg"
import { FaRegComment } from "react-icons/fa6";

function Our_Feedback_Card({ event }) {
	return (
		<div className=' flex gap-48 h-[400px] w-[100%] pb-20 rounded-lg'>

			{/* *********************************************************************************
			*********************************************************************************
			********************************************************************************* */}

			<div className="indicator">

				<span className="ml-7 w-9 h-9 border-[#820000] bg-[#820000] rounded-full indicator-item indicator-start badge badge-secondary font-extrabold p-1">
					{/* <SiComma size={100}/> */}
					<FaRegComment />
				</span>

				<div className="bg-base-300 grid h-32 w-32 place-items-center rounded-lg">

					<div className='bg-gray-200 shadow-xl p-4 pb-8 w-[300px] h-[300px] border-[1px] border-gray-200 rounded-lg'>




						<div className=' pt-4 h-[210px]'>

							<div className=' font-nunito italic text-justify'>
								"{event.our_feedback}"
							</div>

							{/* <div className=' font-sans'>
								<strong>Rating=</strong> event.rating/5
							</div> */}
						</div>

						<div className='bg-slate-200 flex'>
							<figure className='w-[25%]'>
								<img
									className='h-14 w-14 border-2 border-gray-700 rounded-full'
									src={event.profile_photo ? event.profile_photo : image11} alt="loading" />
								{/* src={event.profile_photo ? event.profile_photo : image11} alt="" /> */}
							</figure>
							<div className='w-[70%]'>
								<div className='font-bold '>{event.username}</div>
								<p className='text-[#820000] text-xs'>{event.person}</p>
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

export default Our_Feedback_Card
