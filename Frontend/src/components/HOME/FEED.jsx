import React from 'react'
import { useState } from 'react'
import POST from '../POST'

const FEED = () => {
    
  const [feed, setFeed] = useState(true)

  return (
    <div className='bg-[var(--bg-primary)] w-full sm:w-[calc(100%-200px)] absolute right-0 pr-1 md:pr-60 lg:pr-85 mt-[212px]  text-white  border-t border-gray-300/15 h-full pt-4 overflow-auto'>

        <div className='flex justify-around items-center mt-8 border-b-2 border-gray-300/40'>
            <h1 className='font-semibold text-gray-300 -mb-[1px] border-b-3 border-transparent hover:border-[#5e47b1] px-15 pb-3 hover:text-[#5e47b1] whitespace-nowrap ' onClick={() => setFeed(true)} >For You</h1>
            <h1 className='font-semibold text-gray-300 -mb-[1px] border-b-3 border-transparent hover:border-[#5e47b1] px-15 hover:text-[#5e47b1] pb-3 ' onClick={() => setFeed(false)} >Following</h1>
        </div>

        {feed === true ? (
            <div>
                <POST />
            </div>
        ): (
            <div>

            </div>
        )}
    </div>
  )
}

export default FEED