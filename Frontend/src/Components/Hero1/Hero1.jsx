import React from 'react'
import image1 from "../../../public/Home3.jpg"

function Hero() {
    return (
        <div>

            <div className="hero min-h-[400px] bg-slate-200">
                <div className="px-[70px] w-[100%] h-[100vh] hero-content flex-col lg:flex-row-reverse">
                    <img
                        src={image1}
                        className="mt-[-80px]  rounded-lg shadow-2xl w-[60%] h-[500px]" />
                    <div>
                        <h1 className="text-5xl font-bold">Box Office News!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <button className="btn btn-primary">Register Now</button>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default Hero




