import React from 'react'

import { Link } from 'react-router-dom';
import { useAuth } from "../../context/auth";
import Footer1 from '../Footer1';
import Footer2 from '../Footer2';

import { useNavigate } from 'react-router-dom';

function Blog_1() {

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
                <img src="./blog1.jpg" alt="" />
                <h1 className='text-our_red text-4xl font-bold w-[90%] my-10'>
                    Donating Platelets: A Practical Guide to a Critical Contribution
                </h1>
                <p>
                    Blood consists of several components, each with a distinct and potentially lifesaving role. Platelets are a blood component that plays a critical role in <span className='font-bold'>supporting life, especially for surgery patients, transplant recipients, and anyone</span> undergoing treatment for cancer or leukemia.
                </p>
                <p className='my-10'>
                    Despite platelets’ distinct properties, the qualifications for donating platelets are similar to those for donating whole blood. One of the benefits of this process is that it makes it easier for someone to donate more frequently than traditional blood donations. The platelet donation process takes longer than traditional blood donations but enables more platelets to be collected each visit.
                </p>
                <p>
                    We can’t overstate the impact of platelet donations. And because of the constant need for this critical blood product, a steady pool of donors is all the more important.
                </p>
                <h1 className='text-our_red text-4xl font-bold w-[80%] my-10'>
                    What Makes Platelets Unique?
                </h1>

                <p>
                    Platelets are tiny cells in your blood that are responsible for forming clots and stopping bleeding. They are essential to those who have cancer, chronic diseases, and traumatic injuries. A significant side effect of cancer treatment is a lowered platelet count, putting patients at risk of life-threatening bleeding. Platelet transfusions help patients’ blood clot properly, enabling them to continue undergoing treatment.
                </p>
                <p className='my-10'>
                    Those suffering from blood disorders can also benefit from platelet transfusions. Blood disorders and other chronic conditions can lead to low platelet counts, making platelet transfusions essential to maintaining the blood’s ability to clot. Similarly, patients undergoing major surgeries or recovering from serious injuries may require platelet transfusions to replace those lost due to extensive bleeding.
                </p>
                <h1 className='text-our_red text-4xl font-bold w-[80%] my-10'>The Need for Platelets</h1>

                <p className=''>
                    <span className='font-bold'>Approximately 2 million units of platelets are transfused each year in the U.S. This breaks down to someone needing platelets every 15 seconds.</span> The need is only intensified by the fact that platelets must be used within five days of their donation. Platelets’ short shelf life means the need for donations is constant. Without a consistent pool of donors, the national platelet supply will dwindle, and patients won’t be able to receive the lifesaving treatment they need.
                </p>
                <p className='my-10'>
                    Emergency situations can cause sudden surges in demand. So, not only does there need to be enough supply to meet ongoing needs, but there also needs to be enough to treat patients with unexpected needs and critical situations.
                </p>
                <p>
                    Because platelet donation is a more specialized process, fewer people are aware of the need, creating a smaller pool of donors. Increasing awareness about the purpose of and need for platelet donations is essential to maintaining a sufficient supply for patients in need.
                </p>

                <h1 className='text-our_red text-4xl font-bold w-[80%] my-10'>How Platelet Donation Works</h1>

                <p>
                    Platelets are collected through a process known as apheresis, during which a cell-separating machine withdraws the platelets and returns the remaining blood cells and plasma to the donor. This process allows a single donor to provide a large quantity of platelets. For comparison, <span className='font-bold'>it can take 12 to 18 whole blood donations to provide the equivalent of a single platelet donation.</span>
                </p>
                <p className='mt-10'>
                    Here’s how the platelet collection process works: A small amount of blood is drawn from a donor’s arm and goes into the blood cell separator. The blood is rapidly spun to separate the plasma from the other blood components. The plasma cells then go into a sterile plastic bag, and the rest of the blood — your plasma, red blood cells, and white blood cells — is returned. This cycle repeats until several transfusable platelet units are collected. The amount collected could provide up to three platelet transfusions.
                </p>
                <p className='mt-10'>
                    <span className='font-bold'>Donating platelets takes about 2.5 hours,</span> but many donors see this time as a chance to unwind from daily stress. Plus, they get the peace of mind that their donation is helping save lives. While platelet donations take longer than whole blood donations, they offer some unique benefits. Since you get your fluids and red blood cells back after donating platelets, you may feel less sluggish when you’re finished. Also, platelet donations use a smaller needle than blood donations, which some donors find to be more comfortable.
                </p>
                <p className='mt-10'>
                    Donors can give platelets at one of our blood donation centers every seven days. <span className='font-bold'>You must be 17 years old, weigh at least 110 pounds,</span> and feel healthy to donate. To prepare for your donation, stay hydrated and eat a healthy meal on the day of your appointment.
                </p>
                <p className='my-10'>
                    At The Blood Connection, we offer a Platelet Plus rewards system that rewards donors based on the number of donations they make in a year. You’ll receive a specific dollar amount per donation for each donor level, and your rewards status can be viewed in your Donor Portal.
                </p>
                <p className='mb-20'>
                    Platelet donors play a crucial role in saving lives every day. Platelets’ short shelf life and constant need for platelet transfusions make having a steady supply of donors a must. If you’re considering becoming a platelet donor, we’d encourage you to make an appointment at The Blood Connection today. Your donation matters, and we are grateful for each and every person who decides to give their time — <span className='font-bold'>and platelets</span> — to help those in need.
                </p>








            </div>

            <Footer1 />
            <Footer2 />

        </div>
    )
}

export default Blog_1
