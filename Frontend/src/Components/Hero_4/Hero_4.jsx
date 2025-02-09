import React from 'react'
import image1 from "../../../public/Home1.jpg"
import image2 from "../../../public/Home2.jpg"
import image3 from "../../../public/Home3.jpg"
import Slider1 from '../Slider1'

function Hero_4() {
    return (
        <div>
            <div className="p-5 pt-32 text-center">

                <h1 className="text-5xl font-bold text-[#B01030]">Why Donate Blood?</h1>
                <p className="py-6">
                    Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                    quasi. In deleniti eaque aut repudiandae et a id nisi.
                </p>


                <div className="mt-7 carousel w-full p-5 gap-10 overflow-hidden">

                    <div id="item1" className="carousel-item w-[70%] h-[400px]">
                        <img
                            src={image1}
                            className="w-full animate-move-x" />
                    </div>

                    <div id="item2" className="carousel-item w-[70%] h-[400px]">
                        <img
                            src={image2}
                            className="w-full animate-move-x" />
                    </div>
                    
                    <div id="item3" className="carousel-item w-[70%] h-[400px]">
                        <img
                            src={image3}
                            className="w-full animate-move-x" />
                    </div>


                </div>

            </div>
        </div>
    )
}

export default Hero_4
