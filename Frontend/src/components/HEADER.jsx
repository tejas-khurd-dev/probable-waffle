import React from 'react'
import { Bell,Plus, Search } from 'lucide-react'

const HEADER = () => {
  return (
    <div>
        <div className='bg-[var(--bg-primary)] w-[calc(100%-200px)] fixed h-15 z-20 right-0 text-white flex justify-between items-center gap-2 p-2'>
            <div></div>

            <div className='bg-[var(--bg-secondary)] border-2 border-b-gray-200 flex justify-center gap-2 items-center p-1 rounded-2xl'>
                <Search size={25} className='inline-off' />
                <input type="search" placeholder='Search...' className='outline-none bg-transparent'/>
            </div>

            <div className='flex justify-between items-center gap-5 y-2.5'>
                <Bell />
                <div className='flex justify-between items-center gap-1 bg-[#6f4fea] rounded px-2 py-1 mr-2 text-sm'>
                    <Plus size={19} />
                    <p>Create Post</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HEADER