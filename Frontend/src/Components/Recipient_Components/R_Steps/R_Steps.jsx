import React from 'react'

function R_Steps() {
    return (
        <div className=' pt-28 px-32 font-nunito'>

            <h1 className='text-3xl font-bold text-center'>
                <span className='text-our_red'>Process to</span> Generate Blood Request
            </h1>
            <p className='mt-2 flex flex-row justify-center'>
                <div className='w-[80%] text-center'>
                    Every few seconds, someone needs a blood transfusion, Follow this simple process to generate blood request for your loved ones and help people in need. 
                </div>

            </p>

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
                        <time className="text-lg font-black text-our_red">Step-1</time>
                        <div className="text-lg font-black">Sign Up</div>
                        <p className=' bg-gray-00 rounded-md p-3 shadow-md shadow-gray-300 font-nunito'>
                            Create an account on our website to access donor profiles and request blood.
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
                        <time className="text-lg font-black text-our_red">Step-2</time>
                        <div className="text-lg font-black">Request Blood</div>
                        <p className=' bg-gray-00 rounded-md p-3 shadow-md shadow-gray-300  font-nunito'>
                            Generate a request mentioning blood type, urgency level, and hospital location for delivery.
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
                        <time className="text-lg font-black text-our_red">Step-3</time>
                        <div className="text-lg font-black">Search Donors</div>
                        <p className=' bg-gray-00 rounded-md p-3 shadow-md shadow-gray-300  font-nunito'>
                            Browse donor profiles by blood type and location; get contact info to reach out.
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
                        <time className="text-lg font-black text-our_red">Step-4</time>
                        <div className="text-lg font-black">Donor Contact</div>
                        <p className=' bg-gray-00 rounded-md p-3 shadow-md shadow-gray-300  font-nunito'>
                            If interested, a donor will contact you directly after viewing your blood request.
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
                        <time className="text-lg font-black text-our_red">Step-5</time>
                        <div className="text-lg font-black">Confirm it</div>
                        <p className=' bg-gray-00 rounded-md p-3 shadow-md shadow-gray-300  font-nunito'>
                            After receiving blood, confirm it on the site to update donor's donation history.
                        </p>
                    </div>
                </li>
            </ul>



        </div>
    )
}

export default R_Steps
