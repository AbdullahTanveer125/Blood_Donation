import React from 'react'
import R_Sidebar from '../R_Sidebar/R_Sidebar'
import Blog_All from '../../Blog_All/Blog_All'

function R_Blog() {
    return (
        <div>
            <R_Sidebar />

            <div className='ml-[17.3%] w-[82%] '>
                <Blog_All />
            </div>
        </div>
    )
}

export default R_Blog
