import React from 'react'
import landing_image from '../../../public/landing.png'

function Hero_3() {
    return (
        <div className='font-nunito'>

            <div className="hero min-h-screen">
                <div className="-mt-16 gap-32 hero-content flex-col lg:flex-row">
                    <img
                        src={landing_image}
                        className="max-w-sm rounded-lg " />
                    <div>
                        <h1 className="text-5xl font-bold">
                            A <span className='text-[#820000]'> small drop of kindness </span> makes a big difference
                        </h1>
                        <p className="py-6 text-justify">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, atque cumque non aliquam voluptates ex saepe at, praesentium qui alias quia ea odio quis aperiam quisquam? Consequuntur perferendis dolor sint!
                        </p>

                        <div className='flex gap-3'>

                            <button className="font-bold bg-[#820000] border-2 border-[#820000] text-gray-50 hover:bg-white hover:text-[#820000] hover:border-2 hover:border-[#820000] hover:font-bold transition w-[20%]  px-6 py-3 ml-2">Sign Up</button>
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
