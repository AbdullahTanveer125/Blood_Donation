import React from 'react'

function Hero2() {
    return (
        <div>


            <div
                className="hero min-h-screen"
                style={{
                    backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
                }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content px-16 py-7 bg-black bg-opacity-40 text-neutral-content text-center">
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
