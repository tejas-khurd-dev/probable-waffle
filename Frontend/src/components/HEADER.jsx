import React from 'react'
import { useState } from 'react'
import { Bell,Plus, Search, Menu, House, Users, Settings, LogOut } from 'lucide-react'

const HEADER = () => {

    const [pos, setPos] = useState({left:-250, top:50})
    const [hamburger, setHamburger] = useState(true)

    const hamFun = () => {
        if(hamburger=== false) setHamburger(true)
        else setHamburger(false)

        if(hamburger === true){
            setPos({
                left: 10,
                top: 50
            })
        } else {
            setPos({
                left:-250,
                top:50
            })
        }
    }

  return (
    <div className='relative'>
        <div className='bg-[var(--bg-primary)] w-full sm:w-[calc(100%-200px)] fixed h-15 z-20 right-0 text-white flex justify-between items-center gap-2 p-2'>
            <div className='sm:hidden' onClick={hamFun}><Menu /></div>
            <div className='hidden sm:block'></div>

            <div className='bg-[var(--bg-secondary)] border-2 border-b-gray-200 flex justify-center gap-2 items-center p-1 rounded-2xl w-50 sm:w-fit'>
                <Search size={25} className='hidden sm:block' />
                <input type="search" placeholder='Search...' className='outline-none bg-transparent ml-20'/>
            </div>

            <div className='flex justify-between items-center gap-5 y-2.5'>
                <Bell className='hover:text-[#5e47b1]' />
                <div className='md:flex justify-between items-center gap-1 bg-[#6f4fea] hover:bg-[#6d53c9] rounded px-2 py-1 mr-2 text-sm hidden'>
                    <Plus size={19} />
                    <p>Post</p>
                </div>
            </div>
        </div>

        <div className='absolute bg-black border-2 border-gray-300 mt-5 text-white w-50 rounded-2xl py-8 px-15 block sm:hidden transition-all duration-200 ease-in-out' style={{left:`${pos.left}px`, top:`${pos.top}px`}}>
            <ul className='flex flex-col gap-6 justify-between items-center mx-auto'>
                <li className='flex items-center gap-4'><House /> Home</li>
                <li className='flex items-center gap-4'><Search /> Search</li>
                <li className='flex items-center gap-4'><Users /> Layers</li>
                <li className='flex items-center gap-4'><Settings /> Setting</li>
                <li className='flex items-center gap-4'><LogOut /> Logout</li>
            </ul>
        </div>
    </div>
  )
}

export default HEADER