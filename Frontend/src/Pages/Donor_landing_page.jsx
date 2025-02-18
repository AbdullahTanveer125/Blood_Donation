import React from 'react'
import Donor_navbar from '../Components/Donor_components/D_navbar/D_navbar'
import Donor_Hero_Section from '../Components/Donor_components/D_Hero_Section/D_Hero_Section'

function Donor_landing_page() {
  return (
    <div className='overflow-x-hidden'>

        <Donor_navbar />
        <Donor_Hero_Section />
      
    </div>
  )
}

export default Donor_landing_page
