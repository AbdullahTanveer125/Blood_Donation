import React from 'react'

function FrequentlyAsk_Questions() {
    return (
        <div>

            <h1 className='font-extrabold text-3xl text-center text-blue-500 underline'>Frequently Ask Questions</h1>

            <div className="border-b border-b-slate-400 collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title font-extrabold text-blue-500">Click to open this one and close others</div>
                <div className="border-b border-b-black collapse-content">
                    <p>hello</p>
                </div>
            </div>

            <div className="border-b border-b-slate-400 collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title  font-extrabold text-blue-500">Click to open this one and close others</div>
                <div className="border-b border-b-black collapse-content">
                    <p>hello</p>
                </div>
            </div>

            <div className="border-b border-b-slate-400 collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-extrabold text-blue-500">Click to open this one and close others</div>
                <div className="border-b border-b-black collapse-content">
                    <p>hello</p>
                </div>
            </div>




        </div>
    )
}

export default FrequentlyAsk_Questions
