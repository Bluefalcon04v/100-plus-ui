import React from 'react'
import Dropdown from '../components/dropdown'

const Layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <div className='mt-24'>
            <Dropdown />
            {children}
        </div>
    )
}

export default Layout