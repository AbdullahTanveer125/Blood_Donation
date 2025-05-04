import React from 'react'
import D_Sidebar from './D_Sidebar/D_Sidebar'
import Messanger from '../../Pages/Messanger/Messanger'

function D_Messanger() {
    return (
        <div className='flex flex-col'>

                <D_Sidebar />
                <Messanger />
        </div>
    )
}

export default D_Messanger
