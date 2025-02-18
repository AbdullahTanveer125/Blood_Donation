import React from 'react'
import Donor_Event_Section from '../D_Event_Section/D_Event_Section'
import Events_on_Landing from '../../Landing_page_components/Events_on_Landing/Events_on_Landing'
import Hero2 from '../../Hero2/Hero2'
import All_Blood_Requests from '../../All_Blood_Requests'
import Blood_Request_on_Donor from '../D_Blood_Request/D_Blood_Request'
import Blood_donation_steps_1 from '../../Landing_page_components/Blood_donation_steps_1/Blood_donation_steps_1'
import Blood_donation_steps_2 from '../../Landing_page_components/Blood_donation_steps_2/Blood_donation_steps_2'
import Process_Steps_3 from '../../Landing_page_components/Process_Steps_3/Process_Steps_3'
import Process_Steps from '../D_Process_Steps/D_Process_Steps'
import D_why_donate_blood from '../D_why_donate_blood/D_why_donate_blood'
import D_feedback from '../D_feedback/D_feedback'

function Donor_Hero_Section() {
    return (

        <div className="flex h-screen">
            {/* Sidebar - Fixed on the Left */}
            <aside className="mt-[5.7%]  w-[15%] h-screen bg-[#EE8A9E] p-6 fixed">
                <h2 className="text-2xl font-bold mb-4">Sidebar</h2>
                <ul className="space-y-3">
                    <li className="hover:text-gray-300 cursor-pointer">Dashboard</li>
                    <li className="hover:text-gray-300 cursor-pointer">Donors</li>
                    <li className="hover:text-gray-300 cursor-pointer">Requests</li>
                    <li className="hover:text-gray-300 cursor-pointer">Profile</li>
                </ul>
            </aside>

            {/* Main Content - Scrollable */}
            <main className="ml-[15.3%] w-[84%] pb-2 px-6 pt-[6%] bg-gray-400 min-h-screen h-auto">
                
                <Hero2 />
                <Donor_Event_Section />
                <Blood_Request_on_Donor />
                {/* <Blood_donation_steps_1 />
                <Blood_donation_steps_2 />
                <Process_Steps_3 /> */}
                <Process_Steps />
                <D_why_donate_blood />
                <D_feedback />


            </main>
        </div>

    )
}

export default Donor_Hero_Section
