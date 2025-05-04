import React from 'react'

import Messanger from '../../Pages/Messanger/Messanger'
import R_Sidebar from './R_Sidebar/R_Sidebar'

function R_Messanger() {
    return (
        <div className='flex flex-col'>

                <R_Sidebar />
                <Messanger />
        </div>
    )
}

export default R_Messanger
