import React from 'react'
import Navbar from '../../Components/Navbar.jsx'
import Hero1 from '../../Components/Hero1/Hero1.jsx'
import Hero2 from '../../Components/Hero2/Hero2.jsx'
import Slider1 from '../../Components/Slider1.jsx'
import Footer1 from '../../Components/Footer1.jsx'
import Footer2 from '../../Components/Footer2.jsx'
import Card1 from '../../Components/Card1.jsx'
import Landing_Navbar from '../../Components/Landing_Navbar/Landing_Navbar.jsx'




function Home_1() {
    return (
        <div className='bg-teal-600'>

            <Landing_Navbar />
            <Hero1 />
            {/* <Hero2 /> */}
            <Slider1 />
            <Card1 />
            <Footer1 />
            <Footer2 />

        </div>
    )
}

export default Home_1
