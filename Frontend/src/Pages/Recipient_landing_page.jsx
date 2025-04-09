import React from 'react'

import Donor_Hero_Section from '../Components/Donor_components/D_Hero_Section/D_Hero_Section'
import Recipient_Hero_Section from '../Components/Recipient_Components/R_Hero_section/Recipient_Hero_Section'

function Recipient_landing_page() {
  return (
    <div className='overflow-x-hidden'>

        {/* <Donor_navbar /> */}
        <Recipient_Hero_Section />
      
    </div>
  )
}

export default Recipient_landing_page
