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

            <div className="shadow-lg shadow-gray-200 collapse collapse-arrow  ">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title font-extrabold">Click to open this one and close others</div>
                <div className=" collapse-content text-gray-500 ">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, eveniet.</p>
                </div>
            </div>

            <div className="shadow-lg shadow-gray-200 collapse collapse-arrow ">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title  font-extrabold ">Click to open this one and close others</div>
                <div className=" collapse-content text-gray-500 ">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error neque illo corporis nam officia, </p>
                </div>
            </div>

            <div className="shadow-lg shadow-gray-200 collapse collapse-arrow ">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-extrabold ">Click to open this one and close others</div>
                <div className=" collapse-content text-gray-500">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, sunt placeat tempore itaque</p>
                </div>
            </div>




        </div>
    )
}

export default Frequently_Ask_Questions
