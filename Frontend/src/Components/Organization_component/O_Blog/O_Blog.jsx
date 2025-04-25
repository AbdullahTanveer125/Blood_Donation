import React from 'react'

import Blog_All from '../../Blog_All/Blog_All'
import O_Sidebar from '../O_Sidebar/O_Sidebar'

function O_Blog() {
    return (
        <div>
            <O_Sidebar />

            <div className='ml-[17.3%] w-[82%] '>
                <Blog_All />
            </div>
        </div>
    )
}

export default O_Blog
