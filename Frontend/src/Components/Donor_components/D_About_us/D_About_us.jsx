import React from 'react'

import About_Us from '../../About_Us/About_Us'
import D_Sidebar from '../D_Sidebar/D_Sidebar'

function D_About_us() {
    return (
        <div>
            <D_Sidebar />

            <div className='ml-[17.3%] w-[82%] '>
                <About_Us />
            </div>
        </div>
    )
}

export default D_About_us
