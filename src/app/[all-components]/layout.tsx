import React from 'react'
import Dropdown from '../components/dropdown'

const Layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <div className='mt-24'>
            <div className='relative flex bg-red-300 w-full'>
                <Dropdown />
            </div>
            {children}
        </div>
    )
}

export default Layout