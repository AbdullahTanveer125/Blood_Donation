import React from 'react'
import Blog_All from '../../Blog_All/Blog_All'
import D_Sidebar from '../D_Sidebar/D_Sidebar'

function D_Blog() {
    return (
        <div>

            <D_Sidebar />

            <div className='ml-[17.3%] w-[82%]'>
                <Blog_All />
            </div>

        </div>
    )
}

export default D_Blog
