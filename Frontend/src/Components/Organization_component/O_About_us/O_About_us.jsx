import React from 'react'

import O_Sidebar from '../O_Sidebar/O_Sidebar'
import About_Us from '../../About_Us/About_Us'

function O_About_us() {
    return (
        <div>
            <O_Sidebar />

            <div className='ml-[17.3%] w-[82%] '>
                <About_Us />
            </div>
        </div>
    )
}

export default O_About_us
