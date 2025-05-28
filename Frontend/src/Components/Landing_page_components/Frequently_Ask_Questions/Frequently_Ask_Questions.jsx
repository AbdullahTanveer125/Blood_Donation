import React from 'react'

function Frequently_Ask_Questions() {
    return (
        <div className='flex flex-col justify-center items-center mt-[10%] ml-[10%] w-[80%] gap-5 mb-64 font-nunito'>

            <h1 className="text-4xl font-bold text-center ">
                <span className='text-our_red'>Frequently</span>  Asked Questions
            </h1>

            <div className=''>
                <p className="pb-10 max-w-[100%] text-center mx-auto  font-semibold text-md">
                    Find answers to common questions about blood donation
                    <br />and how you can help.
                </p>
            </div>



            <div className='w-[90%] flex flex-row justify-center items-center gap-10'>
                {/* <img src="./FAQs2.png" alt="" className='w-[40%] h-[40%]' /> */}


                <div className='w-[160%]'>
                    <div className="shadow-lg shadow-gray-200 collapse collapse-arrow  ">
                        <input type="radio" name="my-accordion-2" defaultChecked />
                        <div className="collapse-title font-extrabold">1. How do I sign up as a donor or recipient?</div>
                        <div className=" collapse-content text-gray-500 ">
                            <p>Click the Sign Up button on the homepage and choose your role to create an account.</p>
                        </div>
                    </div>

                    <div className="shadow-lg shadow-gray-200 collapse collapse-arrow ">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title  font-extrabold ">2. How can I request blood?</div>
                        <div className=" collapse-content text-gray-500 ">
                            <p>After signing in as a recipient, go to Request Blood, enter details, and submit your request.</p>
                        </div>
                    </div>

                    <div className="shadow-lg shadow-gray-200 collapse collapse-arrow ">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title font-extrabold ">3. Can I contact donors directly?</div>
                        <div className=" collapse-content text-gray-500">
                            <p>Yes, you can search for donors by blood type and contact them through their profile details.</p>
                        </div>
                    </div>

                    <div className="shadow-lg shadow-gray-200 collapse collapse-arrow  ">
                        <input type="radio" name="my-accordion-2" defaultChecked />
                        <div className="collapse-title font-extrabold">4. How can I host a blood donation event?</div>
                        <div className=" collapse-content text-gray-500 ">
                            <p>Register your organization and create an event by providing date, location, and contact info.</p>
                        </div>
                    </div>

                    <div className="shadow-lg shadow-gray-200 collapse collapse-arrow  ">
                        <input type="radio" name="my-accordion-2" defaultChecked />
                        <div className="collapse-title font-extrabold">5. Who can see my blood request?</div>
                        <div className=" collapse-content text-gray-500 ">
                            <p>All registered donors can see blood requests.</p>
                        </div>
                    </div>

                    <div className="shadow-lg shadow-gray-200 collapse collapse-arrow  ">
                        <input type="radio" name="my-accordion-2" defaultChecked />
                        <div className="collapse-title font-extrabold">6. Is my personal information secure on this site?</div>
                        <div className=" collapse-content text-gray-500 ">
                            <p>Yes, we take data privacy seriously and only share necessary information for blood donation purposes.</p>
                        </div>
                    </div>

                    <div className="shadow-lg shadow-gray-200 collapse collapse-arrow  ">
                        <input type="radio" name="my-accordion-2" defaultChecked />
                        <div className="collapse-title font-extrabold">7. What is the purpose of this website?</div>
                        <div className=" collapse-content text-gray-500 ">
                            <p>Our platform connects blood donors, recipients, and organizations to make blood donation easier and faster.</p>
                        </div>
                    </div>

                    <div className="shadow-lg shadow-gray-200 collapse collapse-arrow  ">
                        <input type="radio" name="my-accordion-2" defaultChecked />
                        <div className="collapse-title font-extrabold">8. Do I need to be a registered user to access services?</div>
                        <div className=" collapse-content text-gray-500 ">
                            <p>Yes, creating an account allows you to request blood, donate, or post events.</p>
                        </div>
                    </div>

                    <div className="shadow-lg shadow-gray-200 collapse collapse-arrow  ">
                        <input type="radio" name="my-accordion-2" defaultChecked />
                        <div className="collapse-title font-extrabold">9. How can I find nearby blood donors?</div>
                        <div className=" collapse-content text-gray-500 ">
                            <p>Use the search option to filter donors by blood group and location.</p>
                        </div>
                    </div>

                    <div className="shadow-lg shadow-gray-200 collapse collapse-arrow  ">
                        <input type="radio" name="my-accordion-2" defaultChecked />
                        <div className="collapse-title font-extrabold">10. Can I donate blood more than once?</div>
                        <div className=" collapse-content text-gray-500 ">
                            <p>Yes, donors can donate multiple times. The system tracks your donation history.</p>
                        </div>
                    </div>

                    <div className="shadow-lg shadow-gray-200 collapse collapse-arrow  ">
                        <input type="radio" name="my-accordion-2" defaultChecked />
                        <div className="collapse-title font-extrabold">Click to open this one and close others</div>
                        <div className=" collapse-content text-gray-500 ">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, eveniet.</p>
                        </div>
                    </div>
                    
                    <div className="shadow-lg shadow-gray-200 collapse collapse-arrow  ">
                        <input type="radio" name="my-accordion-2" defaultChecked />
                        <div className="collapse-title font-extrabold">Click to open this one and close others</div>
                        <div className=" collapse-content text-gray-500 ">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, eveniet.</p>
                        </div>
                    </div>
                    

                </div>
            </div>



        </div>
    )
}

export default Frequently_Ask_Questions
