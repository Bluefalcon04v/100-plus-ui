'use client'
import React, { useState } from 'react'
import DropdownIcon from '../../../public/svg/dropdownIcon'

const Dropdown = () => {
    const [dropdownToggle, setDropdownToggle] = useState(false)
    return (
        <div className='top-8 z-20 fixed text-black'>
            <button onClick={() => setDropdownToggle(!dropdownToggle)} className={`bg-amber-400 px-2 hover:bg-amber-300 py-2 border-white rounded-md w-fit font-semibold  text-sm active:scale-95 transition-all cursor-pointer border-2 dropdown-starting }`}>
                <div className='flex place-content-center place-items-center gap-2 transition-all duration-200'>
                    <p className='px-3'>Select Component</p>
                    <DropdownIcon className={`transition-all duration-300 ${dropdownToggle ? 'rotate-0 ' : 'rotate-180'}`} />
                </div>
            </button>
            {dropdownToggle &&
                <div className='flex flex-col gap-1 bg-amber-400/20 mt-1 p-2 rounded-md w-full font-medium text-xs dropdown-starting'>
                    <p className='bg-neutral-50 hover:bg-neutral-200 p-2 rounded-sm hover:uppercase hover:scale-105 transition-all cursor-pointer'>Hello World</p>
                    <p className='bg-neutral-50 hover:bg-neutral-200 p-2 rounded-sm hover:uppercase hover:scale-105 transition-all cursor-pointer'>Hello World</p>
                    <p className='bg-neutral-50 hover:bg-neutral-200 p-2 rounded-sm hover:uppercase hover:scale-105 transition-all cursor-pointer'>Hello World</p>
                    <p className='bg-neutral-50 hover:bg-neutral-200 p-2 rounded-sm hover:uppercase hover:scale-105 transition-all cursor-pointer'>Hello World</p>
                    <p className='bg-neutral-50 hover:bg-neutral-200 p-2 rounded-sm hover:uppercase hover:scale-105 transition-all cursor-pointer'>Hello World</p>

                </div>
            }
        </div>
    )
}

export default Dropdown