import React from 'react'

function O_Steps() {
    return (
        <div className=' pt-28 px-32 font-nunito'>

            <h1 className='text-4xl font-bold text-center'>
                <span className='text-our_red'>Process</span> to generate Event
            </h1>
            <p className='mt-2 text-center '>
                Contributing to the lifesaving mission of blood donation.
                To host a successful blood donation event, please follow the steps below.
                These steps will guide you in setting up event details and reaching potential donors.
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
                            Sign up your organization with valid credentials to access event creation and management features.
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
                        <div className="text-lg font-black">Create Event</div>
                        <p className=' bg-gray-00 rounded-md p-3 shadow-md shadow-gray-300  font-nunito'>
                            Whenever hosting a blood drive, create an event with date, time, and venue details.
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
                        <div className="text-lg font-black">Public Visibility</div>
                        <p className=' bg-gray-00 rounded-md p-3 shadow-md shadow-gray-300  font-nunito'>
                            Your event will be visible to all users, donors and recipients for wider participation.
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
                        <div className="text-lg font-black">Gather Users</div>
                        <p className=' bg-gray-00 rounded-md p-3 shadow-md shadow-gray-300  font-nunito'>
                            Interested users can view your event and join the drive at the specified location.
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
                        <div className="text-lg font-black">Delete Event</div>
                        <p className=' bg-gray-00 rounded-md p-3 shadow-md shadow-gray-300  font-nunito'>
                            You can delete the event from your dashboard easily and delete event automatically after passed event's date and time.
                        </p>
                    </div>
                </li>
            </ul>



        </div>
    )
}

export default O_Steps
