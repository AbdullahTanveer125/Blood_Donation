import React from 'react'

import { Link } from 'react-router-dom';
import { useAuth } from "../../context/auth";
import Footer2 from '../Footer2';
import Footer1 from '../Footer1';

import { useNavigate } from 'react-router-dom';

function Blog_3() {

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
                <img src="./blog3.jpg" alt="" />

                <h1 className='text-our_red text-4xl font-bold w-[%] my-10'>
                    Blood Donation Myths Busted: Separating Fact from Fiction
                </h1>

                <p>
                    Donating blood is a generous act that saves countless lives each day. But despite its life-saving impact, blood donation is surrounded by numerous myths that keep far too many potential donors from donating. As a result, these misconceptions can have devastating implications for the national blood supply, reducing available blood products and keeping patients from getting the transfusions they desperately need.
                </p>
                <p className='my-10'>
                    It’s important to separate fact from fiction to dispel people’s apprehensions about donating. By sharing the truth about blood donation, we seek to empower people with accurate information so they can make a properly informed decision about whether or not to give blood. When you come to The Blood Connection, we aim to equip you with the facts and information you need to donate without hesitation and feel confident in your decision.
                </p>

                <img src="./donation5.jpg" alt="" />

                <h1 className='text-our_red text-4xl font-bold w-[80%] my-10'>7 Common Misconceptions About Blood Donations</h1>

                <div className='pl-20'>
                    <h1 className='text-our_red text-2xl font-bold w-[80%] mt-10'>1) Myth: It takes a long time to donate.</h1>
                    <p>
                        <span className='font-bold'>Fact:</span> Blood donation is an efficient process that only takes about an hour from start to finish. When you walk into a donation center, you’ll complete a brief mini-physical before donating to confirm your eligibility. The actual donation only takes about 10 minutes. Once your donation is complete, you’ll be asked to stay at the center for a few minutes for monitoring. You can enjoy a beverage and snack while you wait and then be on your way.
                    </p>

                    <h1 className='text-our_red text-2xl font-bold w-[80%] mt-10'>2) Myth: Donating blood hurts.</h1>
                    <p>
                        <span className='font-bold'>Fact:</span> The discomfort you’ll feel when donating is very minimal. There will be a slight pinch when the needle goes in, but you shouldn’t feel a thing after that. The Blood Connection’s skilled team will ensure you have a comfortable experience from start to finish.
                    </p>

                    <h1 className='text-our_red text-2xl font-bold w-[80%] mt-10'>3) Myth: If you don’t have a rare blood type, your donation isn’t needed.</h1>
                    <p>
                        <span className='font-bold'>Fact:</span> Your donation is valuable regardless of your blood type. Common blood types are needed by more people, meaning more donations are required to maintain a steady supply. And for rare types, there’s a smaller pool of donors. Long story short, your single donation — no matter your blood type — can save up to three lives, and that’s worth doing.
                    </p>

                    <h1 className='text-our_red text-2xl font-bold w-[80%] mt-10'>4) Myth: You can’t donate if you’re on medication.</h1>
                    <p>
                        <span className='font-bold'>Fact:</span> Most medications don’t disqualify you as a donor. More often, the medical condition that warrants the medication is the factor that impacts your eligibility. Of course, certain medicines, including anticoagulants, antiplatelet drugs, and some acne treatments, may render you ineligible to donate. If you’re unsure how your medication impacts your ability to donate, talk to a team member at your local donation center.
                    </p>

                    <h1 className='text-our_red text-2xl font-bold w-[80%] mt-10'>5) Myth: Donating will deplete your own blood supply.</h1>
                    <p>
                        <span className='font-bold'>Fact:</span> The average adult human body contains about 10 pints of blood. When you donate blood, only one of those pints is collected, leaving plenty for you to resume your day as usual. Your plasma levels can return to normal in as little as 24 hours. Red blood cells take about four to six weeks to completely replenish, which is why you can donate every 56 days. Ultimately, donating blood will not deplete your own blood supply in the long term due to the human body’s ability to quickly regenerate blood cells.
                    </p>

                    <h1 className='text-our_red text-2xl font-bold w-[80%] mt-10'>6) Myth: Donating blood can make you sick.</h1>
                    <p>
                        <span className='font-bold'>Fact:</span> If you’re healthy when you walk into your donation center, you’ll walk out the same way. Our donation centers follow strict protocols to keep the equipment sterile, and we work hard to make sure the donation process is safe for every donor. Of course, it’s possible to experience lightheadedness or mild fatigue immediately after donating, but you’ll be provided a snack and drink to help ease those symptoms. In most instances, these symptoms pass quickly and on their own.
                    </p>

                    <h1 className='text-our_red text-2xl font-bold w-[80%] mt-10'>7) Myth: There are plenty of donors already.</h1>
                    <p>
                        <span className='font-bold'>Fact:</span> Someone needs blood in the U.S. every two seconds, meaning there is always a need for more blood. On top of the constant need, blood has a limited shelf life, making maintaining an adequate supply even more challenging. A steady national blood supply helps meet both anticipated and unanticipated demand. Seasonal fluctuations and emergencies can cause shortages, making it difficult for people to get the lifesaving resources they need. A consistent group of regular donors ensures a reliable blood supply that can support emergency surgeries and ongoing treatments.
                    </p>
                </div>

                <p className='mt-10 mb-20'>
                    Every donation matters, whether you give once or become a regular donor. Our priority is to keep you informed and comfortable throughout the entire donation process so that you can walk into our donation centers feeling confident about your life-saving decision.
                </p>

            </div>

            <Footer1 />
            <Footer2 />


        </div>
    )
}

export default Blog_3
