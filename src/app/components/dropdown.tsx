'use client'
import React, { useState } from 'react'
import DropdownIcon from '../../../public/svg/dropdownIcon'

const Dropdown = () => {

    const DROPDOWN_MENU = [
        'Button',
        'Input',
        'Form',
        'Dropdown',
        'Accordion',
        'Tabs',
        'Pagination',
        'Modal',
        'Tooltip',
        'Snackbar',
        'Loading',
        'Notification',
        'Avatar',
        'Skeleton',
        'Progress',
        'Rating',
        'Carousel',
        'Collapse',
        'List',
        'Grid',
        'Table',
        'Tree',
        'Chart',
        'Map',
        'Editor',
        'Chat',
        'Chatbot',
        'Drag and Drop',
        'Form Builder',
        'Code Editor',
        'File Manager',
        'Settings',
        'User Profile',
        'Login',
        'Register',
        'Forgot Password',
        'Reset Password',
        '404',
        '500',
        'Documentation',
        'API',
        'Guide',
        'Blog',
        'FAQ',
        'Pricing',
    ]

    const [dropdownToggle, setDropdownToggle] = useState(false)
    return (
        <div className='top-8 z-20 fixed text-black'>
            <button onClick={() => setDropdownToggle(!dropdownToggle)} className={`bg-white px-2 hover:bg-neutral-300 py-2 border-white rounded-md w-fit font-semibold  text-sm active:scale-95 transition-all cursor-pointer border-2 dropdown-starting }`}>
                <div className='flex place-content-center place-items-center gap-2 transition-all duration-200'>
                    <p className='px-3'>Select Component</p>
                    <DropdownIcon className={`transition-all duration-300 ${!dropdownToggle ? 'rotate-0 ' : 'rotate-180'}`} />
                </div>
            </button>
            {dropdownToggle &&
                <div className='relative flex flex-col gap-2 bg-white/30 my-2 mt-1 px-2 py-3 rounded-md w-full max-h-80 font-medium text-sm dropdown-starting'>
                    <input onChange={(e) => console.log(e.target.value)} type='search' placeholder='Search Components' className='top-0 fixed bg-white mt-2 px-2 py-2 border-transparent rounded-md outline-amber-400 focus:outline-[3px] w-11/12' />
                    <div className='flex flex-col gap-2 mt-10 p-2 overflow-y-auto'>
                        {DROPDOWN_MENU.map((item) => (
                            <button
                                className='bg-neutral-100 hover:bg-neutral-200 py-2 rounded-sm hover:font-semibold capitalize hover:uppercase hover:scale-105 transition-all cursor-pointer'
                                key={item}
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                </div>
            }
        </div>
    )
}

export default Dropdown