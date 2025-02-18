
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

        <div className="max-w-[85%] mt-10 bg-slate-300 ">
            <h1 className="text-4xl font-bold text-center mb-8 ">
                <span className="text-[#B01030]">Why</span> Donate blood
            </h1>

            <div className=''>
                <p className="py-6 max-w-[60%] text-center mx-auto">
                    Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                    quasi. In deleniti eaque aut repudiandae et a id nisi.
                </p>
            </div>

            <div className=" pb-14"> {/* Ensures no scrollbar */}
                {/* Marquee Effect */}
                <Marquee speed={40} gradient={false} pauseOnHover={true} className="w-fit">



                    <div className="mt-7 p-5 gap-10 flex">

                        <img
                            src={donation1}
                            className="w-[10%] h-[300px] border-2 border-black"
                        />
                        <img
                            src={donation2}
                            className="w-[10%] h-[300px] border-2 border-black"
                        />
                        <img
                            src={donation3}
                            className="w-[10%] h-[300px] border-2 border-black"
                        />
                        <img
                            src={donation4}
                            className="w-[10%] h-[300px] border-2 border-black"
                        />
                        <img
                            src={donation5}
                            className="w-[10%] h-[300px] border-2 border-black"
                        />
                        <img
                            src={donation6}
                            className="w-[10%] h-[300px] border-2 border-black"
                        />
                        <img
                            src={image1}
                            className="w-[10%] h-[300px] border-2 border-black"
                        />
                        <img
                            src={image2}
                            className="w-[10%] h-[300px] border-2 border-black"
                        />
                        <img
                            src={image3}
                            className="w-[10%] h-[300px] border-2 border-black"
                        />


                    </div>



                </Marquee>
            </div>


        </div>



    )
}

export default D_why_donate_blood
