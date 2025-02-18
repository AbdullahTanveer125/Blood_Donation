import React from 'react'
import Landing_Navbar from '../Components/Landing_page_components/Landing_Navbar/Landing_Navbar'
import Hero_3 from '../Components/Hero_3/Hero_3'
import Hero2 from '../Components/Hero2/Hero2'
import Hero_4 from '../Components/Hero_4/Hero_4'
import Blood_donation_steps_1 from '../Components/Landing_page_components/Blood_donation_steps_1/Blood_donation_steps_1'
import Blood_donation_steps_2 from '../Components/Landing_page_components/Blood_donation_steps_2/Blood_donation_steps_2'
import Events_on_Landing from '../Components/Landing_page_components/Events_on_Landing/Events_on_Landing'
import Our_Score from '../Components/Landing_page_components/Our_Score/Our_Score'
import Our_feedback_on_Landing from '../Components/Landing_page_components/Our_feedback_on_Landing/Our_feedback_on_Landing'
import FrequentlyAsk_Questions from '../Components/Landing_page_components/Frequently_Ask_Questions/Frequently_Ask_Questions'
import Frequently_Ask_Questions from '../Components/Landing_page_components/Frequently_Ask_Questions/Frequently_Ask_Questions'
import Slider1 from '../Components/Slider1'
import Footer from '../Components/Footer'
import Footer1 from '../Components/Footer1'
import Footer2 from '../Components/Footer2'
import Process_Steps_3 from '../Components/Landing_page_components/Process_Steps_3/Process_Steps_3'
import Testmonials_Feedbacks_of_us from '../Components/Landing_page_components/Our_Feedback_Testmonials/Our_Feedback_Testmonials'

function Landing() {
  return (
    <div>

      <Landing_Navbar />
      <Hero_3 />
      <Hero2 />
      <Hero_4 />
      <Blood_donation_steps_1 />
      <Blood_donation_steps_2 />
      <Process_Steps_3 />
      <Events_on_Landing number_of_event_display={3}/>
      <Our_Score />
      <Our_feedback_on_Landing />
      {/* <Testmonials_Feedbacks_of_us /> */}
      <Frequently_Ask_Questions />
      <div>
        Also use as Educational Resources component
        <Blood_donation_steps_1 />
      </div>

      <Footer />
      <Footer1 />
      <Footer2 />

    </div>
  )
}

export default Landing
