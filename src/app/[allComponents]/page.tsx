import Link from 'next/link'
import React from 'react'

const Page = () => {
  const ALLCOMPONENTSCONST = [
    {
      title: 'Vertical Cards',
      component: <div className='bg-neutral-50 text-black p-2'>Vertical Card Component</div>,
      url: '/vertical-cards'
    },
    {
      title: 'Horizontal Cards',
      component: <div className='bg-neutral-50 text-black p-2'>Horizontal Card Component</div>,
      url: '/horizontal-cards'
    },
  ]
  return (
    <div className=''>
      <h1>All Components</h1>
      <div className='flex  gap-2 w-full '>
        {ALLCOMPONENTSCONST.map((item, index) => (
          <div key={index} className='mt-4'>
            <p className='text-sm font-semibold text-neutral-200'>{item.title}</p>
            <Link href={"/component" + item.url}>
              {item.component}
            </Link>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Page