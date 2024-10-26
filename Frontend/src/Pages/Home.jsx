import React from 'react'
import Navbar from '../Components/Navbar.jsx'
import Hero1 from '../Components/Hero1.jsx'
import Hero2 from '../Components/Hero2.jsx'
import Slider1 from '../Components/Slider1.jsx'
import Footer1 from '../Components/Footer1.jsx'
import Footer2 from '../Components/Footer2.jsx'
import Card1 from '../Components/Card1.jsx'


function Home() {
    return (
        <div className='bg-teal-600'>

            <Navbar />
            <Hero1 />
            <Hero2 />
            <Slider1 />
            <Card1 />
            <Footer1 />
            <Footer2 />

        </div>
    )
}

export default Home