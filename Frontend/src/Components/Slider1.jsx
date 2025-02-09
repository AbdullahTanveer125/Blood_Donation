import React from 'react'
import image1 from "../../public/Home1.jpg"
import image2 from "../../public/Home2.jpg"
import image3 from "../../public/Home3.jpg"

function Slider1() {
    return (
        <div>


            <div className="mt-7 carousel w-full p-5 border-t-2 border-blue-800 gap-10 overflow-hidden">

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
            <div className="flex w-full justify-center gap-2 py-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
            </div>



        </div>
    )
}

export default Slider1
