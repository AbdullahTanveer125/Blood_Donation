import React from 'react'
import landing_image from '../../../public/landing.png'

function Hero_3() {
    return (
        <div>

            <div className="hero min-h-screen">
                <div className="-mt-16 gap-32 hero-content flex-col lg:flex-row">
                    <img
                        src={landing_image}
                        className="max-w-sm rounded-lg " />
                    <div>
                        <h1 className="text-5xl font-bold">Box Office News!</h1>
                        <p className="py-6 text-justify">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, atque cumque non aliquam voluptates ex saepe at, praesentium qui alias quia ea odio quis aperiam quisquam? Consequuntur perferendis dolor sint!
                        </p>

                        <div className='flex gap-3'>

                            <button className="bg-[#B01030] text-gray-50 w-[20%]  px-6 py-3 ml-2">Sign Up</button>
                            <button className=" border border-black px-4 py-2 w-[20%]">Log in</button>
                        </div>
                        {/* <button className="btn btn-primary">Get Started</button> */}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Hero_3
