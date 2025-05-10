import React from 'react'
import O_Sidebar from '../O_Sidebar/O_Sidebar'
import Footer1 from '../../Footer1'
import Footer2 from '../../Footer2'
import O_profile from '../O_profile/O_profile'
import Blog_Slider from '../../Blog_Slider/Blog_Slider'

function O_Hero_Section() {
  return (

        <div className="flex flex-col min-h-screen">
            {/* Sidebar - Fixed on the Left */}

            <O_Sidebar />


            {/* Main Content - Scrollable */}
            <main className="ml-[17.3%] w-[82%]">

                <O_profile />
                <Blog_Slider />
                
                <Footer1 />
                <Footer2 />



            </main>

         

        </div>

    )
}

export default O_Hero_Section
