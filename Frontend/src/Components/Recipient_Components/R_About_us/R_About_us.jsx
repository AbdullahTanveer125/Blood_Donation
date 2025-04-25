import React from 'react'

import About_Us from '../../About_Us/About_Us'
import R_Sidebar from '../R_Sidebar/R_Sidebar'

function R_About_us() {
    return (
        <div>
            <R_Sidebar />

            <div className='ml-[17.3%] w-[82%] '>
                <About_Us />
            </div>
        </div>
    )
}

export default R_About_us
