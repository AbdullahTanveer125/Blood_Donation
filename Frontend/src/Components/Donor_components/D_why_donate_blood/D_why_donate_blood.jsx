
// import React from 'react'

// import image1 from "../../../../public/Home1.jpg"
// import image2 from "../../../../public/Home2.jpg"
// import image3 from "../../../../public/Home3.jpg"
// import donation1 from "../../../../public/donation1.jpg"
// import donation2 from "../../../../public/donation2.jpg"
// import donation3 from "../../../../public/donation3.jpg"
// import donation4 from "../../../../public/donation4.jpg"
// import donation5 from "../../../../public/donation5.jpg"
// import donation6 from "../../../../public/donation6.jpg"

// import Marquee from "react-fast-marquee";

// function D_why_donate_blood() {
//     return (

//         <div className="ml-[3%] max-w-[95%] mt-40 font-nunito">
//             <h1 className="text-4xl font-extrabold text-center mb-5 ">
//                 <span className="text-our_red">Why</span> Donate blood ?
//             </h1>

//             <div className=''>
//                 <p className="pb-10 max-w-[60%] text-center mx-auto">
//                     Every few seconds ,someone needs a blood transfusion. 
//                     <br/>Your one donation can save 3 lives.
//                 </p>
//             </div>

//             <div className=" pb-14"> {/* Ensures no scrollbar */}
//                 {/* Marquee Effect */}
//                 <Marquee speed={80} gradient={false} pauseOnHover={true} className="w-fit">



//                     <div className="mt-7 p-5 gap-14  flex">

//                         <img
//                             src={donation1}
//                             className="w-[9%] h-[300px] rounded-2xl"
//                         />
//                         <img
//                             src={donation2}
//                             className="w-[9%] h-[300px] rounded-2xl"
//                         />
//                         <img
//                             src={donation3}
//                             className="w-[9%] h-[300px] rounded-2xl"
//                         />
//                         <img
//                             src={donation4}
//                             className="w-[9%] h-[300px] rounded-2xl"
//                         />
//                         <img
//                             src={donation5}
//                             className="w-[9%] h-[300px] rounded-2xl"
//                         />
//                         <img
//                             src={donation6}
//                             className="w-[9%] h-[300px] rounded-2xl"
//                         />
//                         <img
//                             src={image1}
//                             className="w-[9%] h-[300px] rounded-2xl"
//                         />
//                         <img
//                             src={image2}
//                             className="w-[9%] h-[300px] rounded-2xl"
//                         />
//                         <img
//                             src={image3}
//                             className="w-[9%] h-[300px] rounded-2xl"
//                         />


//                     </div>



//                 </Marquee>
//             </div>


//         </div>



//     )
// }

// export default D_why_donate_blood






















import React from 'react'
import Marquee from "react-fast-marquee";
import image1 from "../../../../public/Home1.jpg"
import image2 from "../../../../public/Home2.jpg"
import image3 from "../../../../public/Home3.jpg"
import donation1 from "../../../../public/donation1.jpg"
import donation2 from "../../../../public/donation2.jpg"
import donation3 from "../../../../public/donation3.jpg"
import donation4 from "../../../../public/donation4.jpg"
import donation5 from "../../../../public/donation5.jpg"
import donation6 from "../../../../public/donation6.jpg"

function D_why_donate_blood() {
    return (
        <div className="px-4 sm:px-6 lg:px-8 mx-auto mt-20 md:mt-32 lg:mt-40 font-nunito max-w-[1800px]">
            <div className="text-center">
                <h1 className="text-xl sm:text-4xl lg:text-5xl font-extrabold mb-4 sm:mb-6">
                    <span className="text-our_red">Why</span> Donate blood ?
                </h1>

                <p className="pb-8 sm:pb-10 md:pb-12 text-xs sm:text-base md:text-lg max-w-full sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%] mx-auto leading-relaxed">
                    Every few seconds, someone needs a blood transfusion.
                    <br className="hidden sm:block" />Your one donation can save 3 lives.
                </p>
            </div>

            <div className="pb-10 sm:pb-14 md:pb-16 lg:pb-20 overflow-hidden">
                <Marquee
                    speed={60}
                    gradient={false}
                    pauseOnHover={true}
                    className="w-full"
                >
                    <div className="mt-4 sm:mt-7 p-2 sm:p-5 flex gap-4 sm:gap-8 md:gap-10 lg:gap-14">
                        {[donation1, donation2, donation3, donation4, donation5, donation6, image1, image2, image3].map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt={`Donation ${index + 1}`}
                                className="w-[150px] sm:w-[180px] md:w-[200px] lg:w-[220px] xl:w-[250px] h-[120px] sm:h-[180px] md:h-[220px] lg:h-[260px] xl:h-[300px] rounded-xl sm:rounded-2xl object-cover"
                            />
                        ))}
                    </div>
                </Marquee>
            </div>
        </div>
    )
}

export default D_why_donate_blood