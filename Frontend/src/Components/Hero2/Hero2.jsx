import React from 'react'
import image1 from "../../../public/Home1.jpg"

function Hero2() {
    return (
        <div>


            <div
                className="hero  bg-orange-500 min-h-[550px]"
                style={{
                    backgroundImage: "url('../../../public/Home1.jpg')",
                }}
                >
                <div className="hero-overlay bg-opacity-10"></div>
                <div className="hero-content px-16 py-7 bg-black bg-opacity-70 text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                        <p className="mb-5">
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

export default Hero2
