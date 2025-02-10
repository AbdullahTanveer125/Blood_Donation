import React from 'react'

function Frequently_Ask_Questions() {
    return (
        <div>

            <h1 className='font-extrabold text-3xl text-center  underline'><span className='text-[#B01030]'>Frequently</span> Ask Questions</h1>

            <div className="border-b border-b-slate-400 collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title font-extrabold">Click to open this one and close others</div>
                <div className="border-b border-b-black collapse-content text-[#B01030]">
                    <p>hello</p>
                </div>
            </div>

            <div className="border-b border-b-slate-400 collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title  font-extrabold ">Click to open this one and close others</div>
                <div className="border-b border-b-black collapse-content text-[#B01030]">
                    <p>hello</p>
                </div>
            </div>

            <div className="border-b border-b-slate-400 collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-extrabold ">Click to open this one and close others</div>
                <div className="border-b border-b-black collapse-content text-[#B01030]">
                    <p>hello</p>
                </div>
            </div>




        </div>
    )
}

export default Frequently_Ask_Questions
