import React from 'react'
import image1 from "../../../public/Home1.jpg"
import image2 from "../../../public/Home2.jpg"
import image3 from "../../../public/Home3.jpg"
import donation1 from "../../../public/donation1.jpg"
import donation2 from "../../../public/donation2.jpg"
import donation3 from "../../../public/donation3.jpg"
import donation4 from "../../../public/donation4.jpg"
import donation5 from "../../../public/donation5.jpg"
import donation6 from "../../../public/donation6.jpg"
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


                <div className="mt-7 carousel w-full p-5 gap-10">

                    {/* <div id="item1" className="carousel-item w-[70%] h-[400px]">
                        <img
                            src={image1}
                            className="w-full animate-move-x" />
                    </div> */}

                    <div id="item2" className="carousel-item w-[60%] h-[400px]">
                        <img
                            src={image2}
                            className="w-full animate-move-x" />
                    </div>
                    
                    <div id="item3" className="carousel-item w-[60%] h-[400px]">
                        <img
                            src={image3}
                            className="w-full animate-move-x" />
                    </div>
                    
                    
                    <div id="item4" className="carousel-item w-[60%] h-[400px]">
                        <img
                            src={donation1}
                            className="w-full animate-move-x" />
                    </div>
                    
                    <div id="item5" className="carousel-item w-[60%] h-[400px]">
                        <img
                            src={donation2}
                            className="w-full animate-move-x" />
                    </div>
                    
                    <div id="item6" className="carousel-item w-[60%] h-[400px]">
                        <img
                            src={donation3}
                            className="w-full animate-move-x" />
                    </div>
                    
                    <div id="item7" className="carousel-item w-[60%] h-[400px]">
                        <img
                            src={donation4}
                            className="w-full animate-move-x" />
                    </div>
                    
                    <div id="item8" className="carousel-item w-[60%] h-[400px]">
                        <img
                            src={donation5}
                            className="w-full animate-move-x" />
                    </div>
                    
                    <div id="item9" className="carousel-item w-[60%] h-[400px]">
                        <img
                            src={donation6}
                            className="w-full animate-move-x" />
                    </div>


                </div>

            </div>
        </div>
    )
}

export default Hero_4
