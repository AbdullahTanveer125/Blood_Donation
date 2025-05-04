
import React from 'react'

import image1 from "../../../../public/Home1.jpg"
import image2 from "../../../../public/Home2.jpg"
import image3 from "../../../../public/Home3.jpg"
import donation1 from "../../../../public/donation1.jpg"
import donation2 from "../../../../public/donation2.jpg"
import donation3 from "../../../../public/donation3.jpg"
import donation4 from "../../../../public/donation4.jpg"
import donation5 from "../../../../public/donation5.jpg"
import donation6 from "../../../../public/donation6.jpg"

import Marquee from "react-fast-marquee";

function D_why_donate_blood() {
    return (

        <div className="ml-[3%] max-w-[95%] mt-40 font-nunito">
            <h1 className="text-4xl font-extrabold text-center mb-5 ">
                <span className="text-red-600">Why</span> Donate blood ?
            </h1>

            <div className=''>
                <p className="pb-10 max-w-[60%] text-center mx-auto">
                    Every few seconds ,someone needs a blood transfusion. 
                    <br/>Your one donation can save 3 lives.
                </p>
            </div>

            <div className=" pb-14"> {/* Ensures no scrollbar */}
                {/* Marquee Effect */}
                <Marquee speed={80} gradient={false} pauseOnHover={true} className="w-fit">



                    <div className="mt-7 p-5 gap-14  flex">

                        <img
                            src={donation1}
                            className="w-[9%] h-[300px] rounded-2xl"
                        />
                        <img
                            src={donation2}
                            className="w-[9%] h-[300px] rounded-2xl"
                        />
                        <img
                            src={donation3}
                            className="w-[9%] h-[300px] rounded-2xl"
                        />
                        <img
                            src={donation4}
                            className="w-[9%] h-[300px] rounded-2xl"
                        />
                        <img
                            src={donation5}
                            className="w-[9%] h-[300px] rounded-2xl"
                        />
                        <img
                            src={donation6}
                            className="w-[9%] h-[300px] rounded-2xl"
                        />
                        <img
                            src={image1}
                            className="w-[9%] h-[300px] rounded-2xl"
                        />
                        <img
                            src={image2}
                            className="w-[9%] h-[300px] rounded-2xl"
                        />
                        <img
                            src={image3}
                            className="w-[9%] h-[300px] rounded-2xl"
                        />


                    </div>



                </Marquee>
            </div>


        </div>



    )
}

export default D_why_donate_blood
