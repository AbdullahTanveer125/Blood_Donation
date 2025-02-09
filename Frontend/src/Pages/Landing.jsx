import React from 'react'
import Landing_Navbar from '../Components/Landing_Navbar/Landing_Navbar'
import Hero_3 from '../Components/Hero_3/Hero_3'
import Hero2 from '../Components/Hero2/Hero2'
import Hero_4 from '../Components/Hero_4/Hero_4'
import Blood_donation_steps_1 from '../Components/Blood_donation_steps_1/Blood_donation_steps_1'
import Blood_donation_steps_2 from '../Components/Blood_donation_steps_2/Blood_donation_steps_2'
import Events_on_Landing from '../Components/Events_on_Landing/Events_on_Landing'

function Landing() {
  return (
    <div>

        <Landing_Navbar />
        <Hero_3 />
        <Hero2 />
        <Hero_4 />
        <Blood_donation_steps_1 />
        <Blood_donation_steps_2 />
        <Events_on_Landing />
      
    </div>
  )
}

export default Landing
