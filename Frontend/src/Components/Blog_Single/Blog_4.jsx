import React from 'react'

import { Link } from 'react-router-dom';
import { useAuth } from "../../context/auth";
import Footer1 from '../Footer1';
import Footer2 from '../Footer2';

import { useNavigate } from 'react-router-dom';

function Blog_4() {

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
                <img src="./blog4.jpg" alt="" />

                <h1 className='text-our_red text-4xl font-bold w-[90%] my-10'>
                    Maintaining Blood Donor Health: Tips for Optimal Well-Being
                </h1>

                <p className='mb-10'>
                    Being a blood donor is a selfless act that makes a lifelong difference. Every one of your donations has the potential to save up to three lives. But despite the profound impact donating blood can make for others, <span className='font-bold'>it’s important to consider your health and wellness as a donor as well.</span>
                </p>
                <p>
                    Whether you’re a regular donor or thinking about donating for the first time, taking care of yourself is essential not only for your well-being but also for the effectiveness of your contribution. Before you donate, there are a few simple steps you can take to ensure your gift doesn’t negatively affect your health.
                </p>
                <h1 className='text-our_red text-4xl font-bold w-[80%] my-10'>
                    The Importance of Blood Donor Health
                </h1>

                <p>
                    If you’re in good health when you show up to give blood, you’re more likely to have a smooth donation process and make a contribution that maintains a safe and reliable blood supply. A healthy national blood supply helps those needing a transfusion experience the benefits of donated blood without fear of adverse effects.
                </p>
                <p className='my-10'>
                    To ensure you’re healthy when you donate, we start each visit by conducting a mini-physical that measures your blood pressure, hemoglobin, and pulse. Your blood pressure should be below <span className='font-bold'>180/100</span> at the time of donation. If you struggle with high blood pressure, don’t worry. You can still be eligible to donate even if you take blood pressure medication.
                </p>
                <p>
                    Hemoglobin is important because it’s the protein in red blood cells that carries oxygen throughout the body. Low iron levels can contribute to low hemoglobin levels, making maintaining healthy iron levels essential. Your body also needs iron to generate new blood cells to replace the ones lost through donation. By checking your hemoglobin when you arrive, we’re making sure that your body is ready to donate and your blood is healthy enough to benefit potential recipients.
                </p>

                <h1 className='text-our_red text-4xl font-bold w-[80%] my-10'>
                    4 Ways To Ensure a Successful Donation
                </h1>
                <p>
                    As a donor, you should be looking after your health — not just to give a successful donation but to increase the overall quality of your life. At The Blood Connection, we value our donors’ well-being. We don’t just see you as a means to collect donations. Your health matters to us whether you donate or not. With clear benefits for you and those you may help, let’s look at the top four ways to make your donation smooth and easy.
                </p>

                <div className='pl-20'>
                    <h1 className='text-our_red text-2xl font-bold w-[80%] mt-10'>
                        1) Eat a balanced diet
                    </h1>
                    <p>
                        A balanced diet promotes your overall health, helping you get more out of each day. Focus on a diet rich in fruits, vegetables, lean proteins, whole grains, and healthy fats. Ensure you eat plenty of iron-rich foods, such as spinach, beans, red meat, poultry, and fortified cereals to help keep your iron and hemoglobin levels up. Vitamin C-rich foods like oranges and bell peppers can help enhance iron absorption. Prior to any donation appointment, do your best to steer clear of iron blockers, such as coffee, tea, and chocolate, as these foods will combat your body’s ability to absorb iron.
                    </p>

                    <h1 className='text-our_red text-2xl font-bold w-[80%] mt-10'>
                        2) Stay hydrated
                    </h1>
                    <p>
                        You are what you eat, but what you drink matters just as much. If you’re planning to donate blood, drink plenty of fluids — especially water — in the days and hours leading up to your donation. If you’re properly hydrated, your blood donation is more likely to go smoothly, and your blood volume will stay at optimal levels.
                    </p>
                    <p className='mt-10'>
                        Staying hydrated helps your blood volume return to normal faster after donating. If you’re not properly hydrated, the fluids lost during donation can cause a significant drop in your blood pressure and make you feel faint or dizzy. As a general rule, you should also steer clear of alcoholic and highly caffeinated beverages before and after you donate, as both can negatively affect your hydration levels.
                    </p>
                    <h1 className='text-our_red text-2xl font-bold w-[80%] mt-10'>
                        3) Get plenty of rest
                    </h1>
                    <p>
                        Getting enough rest is good for your mind, body, and soul. It also makes it easier to give blood without experiencing adverse effects. You should aim to get seven to nine hours of quality sleep each night, especially the night before your appointment. This amount of rest is especially crucial to help your body recover and regenerate after donating. Beyond its importance for blood donation, consistently getting quality sleep will help you maintain your overall health.
                    </p>

                    <h1 className='text-our_red text-2xl font-bold w-[80%] mt-10'>
                        4) Be intentional about exercise
                    </h1>
                    <p>
                        Exercising regularly will pay incredible dividends for your cardiovascular health and physical well-being. That being said, you should avoid working out immediately before or after donating to prevent dizziness and fatigue. Try to find an exercise routine that works for you between donations and stick with it.
                    </p>
                </div>

                <p className='mt-10 mb-20'>
                    Our goal at The Blood Connection is to enrich the lives of those in our community, and that includes you, our donors. We hope these steps give you a practical way to become the healthiest version of yourself — because when you’re healthy, you’re better able to help others. And if you’re a blood donor, your helpfulness can make a lifesaving difference.
                </p>

            </div>

            <Footer1 />
            <Footer2 />


        </div>
    )
}

export default Blog_4
