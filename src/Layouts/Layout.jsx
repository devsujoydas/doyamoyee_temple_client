import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div className='bg-temple-bg text-temple-text'>

            <Outlet />

        </div>
    )
}

export default Layout