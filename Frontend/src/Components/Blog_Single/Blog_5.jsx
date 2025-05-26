import React from 'react'

import { Link } from 'react-router-dom';
import { useAuth } from "../../context/auth";
import Footer1 from '../Footer1';
import Footer2 from '../Footer2';

import { useNavigate } from 'react-router-dom';

function Blog_5() {

    const [auth] = useAuth();
    // console.log("DDDDDDD=", auth)

    const navigate = useNavigate();

    return (
        <div className='font-nunito'>


            {!auth && (
                <nav className="flex justify-between items-center mt-3 mx-8 pr-4 bg-[#820000] backdrop-blur-md shadow-md rounded-full ">
                    <div className="text-xl font-bold text-white flex items-center gap-2">
                        <span className="text-2xl">
                            <img
                                className="w-14"
                                src="./logo.png"
                                alt=""
                            />
                        </span> URGENT DROP
                    </div>
                    <div className="hidden md:flex space-x-6 text-white font-medium">
                        <Link to="/">Home</Link>
                        <Link to="/about_us">About Us</Link>
                        <Link to="/all_blogs">Blogs</Link>
                        <Link to="/all_events">Events</Link>
                        {/* <Link to="/faqs">FAQs</Link> */}
                    </div>
                    <div className="flex space-x-4">
                        <button
                            onClick={() => navigate('/login_as_a')}
                            className="text-white border-2 border-white px-4 py-1 rounded-full hover:bg-red-50 hover:text-[#820000] transition">Log In</button>
                        <button
                            onClick={() => navigate('/signup_as_a')}
                            className="bg-white text-[#820000] px-4 py-1 rounded-full hover:bg-gray-200 transition">Sign Up</button>
                    </div>
                </nav>
            )}

            <div className='max-w-4xl mx-auto px-6 py-12'>
                <img src="./blog5.jpg" alt="" />

                <h1 className='text-our_red text-4xl font-bold w-[%] my-10'>
                    The Human Side of Blood Donation: Personal Stories from Recipients
                </h1>

                <p>
                    Behind every pint of donated blood lies an incredible story, one of lives touched by the generosity of strangers. But every blood donation is more than a random act of kindness. It’s a connection forged between individuals, creating a culture of generosity and gratitude.
                </p>
                <p className='my-10'>
                    At The Blood Connection, our goal is to help everyone who needs blood have access to it. This is a big goal, and we realize it’s unattainable without the generosity of donors. From mothers dealing with complications during childbirth to children battling leukemia, <span className='font-bold'>there are countless people in need of this life-saving resource.</span> We are immensely grateful to have witnessed many recipients get the critical transfusions they need. These are their stories.
                </p>

                <h1 className='text-our_red text-4xl font-bold w-[80%] my-10'>The Gift of Life</h1>

                <p>
                    For many, blood transfusions are a life-saving gift. Whether suffering from an ongoing condition or a victim of an unexpected accident, countless individuals find themselves in life-or-death situations that require blood donations for survival.
                </p>
                <p className='my-10'>
                    Kristen’s time of need came during the birth of her first child. After a smooth pregnancy, she experienced a placental abruption during delivery, which led to a massive hemorrhage. She needed transfusions immediately, and ended up <span className='font-bold'>receiving 28 units of platelets, plasma, and whole blood.</span>
                </p>
                <p className='my-10'>
                    “I just remember them bringing bag after bag after bag,” <span className='font-bold'>Kristen shared.</span> Her transfusions continued after being moved to the ICU. As scary as the whole experience was, Kristen looks back and knows that she wouldn’t have survived without those transfusions. <span className='font-bold'>“It’s been such a humbling experience to realize that the blood other people gave me saved my life.”</span>
                </p>
                <p className='my-10'>
                    Thanks to the generosity of donors, Luca and his family have experienced the hope that only blood donations can provide. <span className='font-bold'>“When your child has been diagnosed with cancer, you feel absolutely helpless,”</span> said Luca’s parents. “We’re so thankful that he’s here and that he has people who donate blood.”
                </p>
                <p className='my-10'>
                    Luca’s parents urge people to donate, even if the impact of a single donation seems insignificant. Their journey through cancer with Luca has taught them that every donation counts. <span className='font-bold'>“You just don’t understand how much of an impact you’re making on people by donating.”</span>
                </p>

                <h1 className='text-our_red text-4xl font-bold w-[80%] my-10'>
                    From Despair to Hope
                </h1>

                <p>
                    During the pandemic, the world was searching for anything and everything that would help those who fell critically ill from <span className='font-bold'>COVID-19.</span> The Blood Connection rose to the occasion and became the first blood center to offer antibody testing during the pandemic. By collecting donations from recovered <span className='font-bold'>COVID-19</span> patients, we were able to acquire a blood product, known as convalescent plasma, that had antibodies to help those struggling to fight the virus.
                </p>
                <p className='my-10'>
                    But as soon as Lisa started to lose hope, a doctor approached her with some great news: they had a donor for her. <span className='font-bold'>“I can’t even tell you, my heart just filled with hope,”</span> Lisa said. “I knew that somebody cared enough to go and donate.” As the transfusion began, Lisa immediately felt it working in her body. <span className='font-bold'>“I looked up at the bag, and it was just a bag of gold.”</span>
                </p>


            </div>

            <Footer1 />
            <Footer2 />

        </div>
    )
}

export default Blog_5
