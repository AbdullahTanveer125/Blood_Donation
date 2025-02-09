import React from 'react'
import image1 from "../../../public/Home1.jpg"
import image2 from "../../../public/Home2.jpg"
import image3 from "../../../public/Home3.jpg"

function Hero_5() {
    return (
        <div>

            <div className=' bg-green-400 flex gap-6 float-start'>
                <img src={image1} alt="" />
                <img src={image2} alt="" />
                <img src={image3} alt="" />
            </div>

        </div>
    )
}

export default Hero_5
