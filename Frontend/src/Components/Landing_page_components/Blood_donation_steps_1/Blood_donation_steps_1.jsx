import React from 'react'

function Blood_donation_steps_1() {
    return (
        <div className=' pt-28 px-32 font-nunito'>

            <h1 className='text-4xl font-bold text-center '>
                Your <span className='text-[#820000]'>Blood Donation</span>  Process
            </h1>

            <p className='text-center mt-4'>Follow this simple process to donate blood safely and make a real difference</p>

            <ul className="pt-20 timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                <li>
                    <div className="timeline-middle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-5 w-5">
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className="timeline-start mb-10 md:text-end">
                        <time className="text-lg font-black text-[#B01030]">Step-1</time>
                        <div className="text-lg font-black">Sign Up</div>
                        <p className=' bg-gray-100 rounded-md p-3 shadow-md shadow-gray-300 '>
                            Create your donor account by logging in securely with basic details and selecting your blood group and location preferences.
                        </p>
                    </div>
                    <hr />
                </li>
                <li>
                    <hr />
                    <div className="timeline-middle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-5 w-5">
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className="timeline-end md:mb-10">
                        <time className="text-lg font-black text-[#B01030]">Step-2</time>
                        <div className="text-lg font-black">Search Request</div>
                        <p className=' bg-gray-100 rounded-md p-3 shadow-md shadow-gray-300  '>
                            Browse real-time blood requests filtered by your blood type and the nearest hospital or recipient location around you.
                        </p>
                    </div>
                    <hr />
                </li>
                <li>
                    <hr />
                    <div className="timeline-middle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-5 w-5">
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className="timeline-start mb-10 md:text-end">
                        <time className="text-lg font-black text-[#B01030]">Step-3</time>
                        <div className="text-lg font-black">View Matches</div>
                        <p className=' bg-gray-100 rounded-md p-3 shadow-md shadow-gray-300  '>
                            See a list of recipients who match your blood type and are urgently in need of blood in your area.
                        </p>
                    </div>
                    <hr />
                </li>
                <li>
                    <hr />
                    <div className="timeline-middle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-5 w-5">
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className="timeline-end md:mb-10">
                        <time className="text-lg font-black text-[#B01030]">Step-4</time>
                        <div className="text-lg font-black">Connect</div>
                        <p className=' bg-gray-100 rounded-md p-3 shadow-md shadow-gray-300  '>
                            Contact the recipient directly using their phone number or start a secure in-site chat through our platform.
                        </p>
                    </div>
                    <hr />
                </li>
                <li>
                    <hr />
                    <div className="timeline-middle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-5 w-5">
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className="timeline-start mb-10 md:text-end">
                        <time className="text-lg font-black text-[#B01030]">Step-5</time>
                        <div className="text-lg font-black">Donate Blood</div>
                        <p className=' bg-gray-100 rounded-md p-3 shadow-md shadow-gray-300  '>
                            Visit the specified hospital or donation point to give blood and make a life-saving difference in just one visit.
                        </p>
                    </div>
                </li>
            </ul>



        </div>
    )
}

export default Blood_donation_steps_1
