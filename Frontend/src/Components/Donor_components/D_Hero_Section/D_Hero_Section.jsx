import React from 'react'

import Hero2 from '../../Hero2/Hero2'
import All_Blood_Requests from '../../All_Blood_Requests'
import Blood_Request_on_Donor from '../D_Blood_Request/D_Blood_Request'
import Blood_donation_steps_1 from '../../Landing_page_components/Blood_donation_steps_1/Blood_donation_steps_1'
import Blood_donation_steps_2 from '../../Landing_page_components/Blood_donation_steps_2/Blood_donation_steps_2'
import Process_Steps_3 from '../../Landing_page_components/Process_Steps_3/Process_Steps_3'
import Process_Steps from '../D_Process_Steps/D_Process_Steps'
import D_why_donate_blood from '../D_why_donate_blood/D_why_donate_blood'
import D_feedback from '../D_feedback/D_feedback'
import Feedback_Review_2 from '../../Feedback_Review_2/Feedback_Review_2'

import { FaHouseDamage } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";
import { MdCastForEducation } from "react-icons/md";
import { IoIosLogOut } from "react-icons/io";
// import { LuMessageCircleMore } from "react-icons/lu";
// import { LuMessageSquareMore } from "react-icons/lu";  
import { AiOutlineMessage } from "react-icons/ai";

import { useAuth } from "../../../context/auth"; 
import D_profile from '../D_profile/D_profile'
import Donor_Process from '../D_Process_Steps/D_Process_Steps'
import Footer1 from '../../Footer1'
import Footer2 from '../../Footer2'
import Footer from '../../Footer'
import Event_Section from '../../Event_Section/Event_Section'
import D_Sidebar from '../D_Sidebar/D_Sidebar'
import Blog_Slider from '../../Blog_Slider/Blog_Slider'



function Donor_Hero_Section() {


    return (

        <div className="flex flex-col min-h-screen">
            {/* Sidebar - Fixed on the Left */}

            <D_Sidebar />


            {/* Main Content - Scrollable */}
            <main className="ml-[17.3%] w-[83%] ">

                <D_profile />
                <Donor_Process />
                <Blood_Request_on_Donor />
                <Blog_Slider />
                <Event_Section />

                {/* <Hero2 /> */}
                {/* <Blood_donation_steps_1 /> */}
                {/* <Donor_Event_Section /> */}

                {/* <Blood_donation_steps_1 />
                <Blood_donation_steps_2 />
                <Process_Steps_3 /> */}
                {/* <Process_Steps /> */}
                <D_why_donate_blood />
                {/* <D_feedback number_of_event_display={2} /> */}
                {/* <Feedback_Review_2 /> */}
                <D_feedback />

                <Footer1 />
                <Footer2 />



            </main>

            {/* <div className="w-full mt-10 z-10">
                <Footer1 />
                <Footer2 />
            </div> */}

        </div>

    )
}

export default Donor_Hero_Section
