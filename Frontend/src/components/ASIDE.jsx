import React from 'react'
import logo from "../assets/veil_logo.png"
import { House, Search, Settings, LogOut, Users } from "lucide-react"

const ASIDE = () => {
  return (
    <div className='bg-[var(--bg-primary)] text-white w-50 h-screen fixed z-100'>
        <div className='w-20 mx-3'>
            <img src={logo} className='w-full' />
        </div>


        <div className='flex flex-col justify-between h-[calc(100%-100px)]'>
            <div>
                <div className='mt-6 w-[80%] border-b border-gray-300 mx-auto'>
                    <ul className='flex flex-col gap-5 mb-7'>
                        <li className='flex justify-start items-center gap-2 ml-2 hover:text-[#5e47b1]'><House /> Home</li>
                        <li className='flex justify-start items-center gap-2 ml-2 hover:text-[#5e47b1]'><Search /> Search</li>
                        <li className='flex justify-start items-center gap-2 ml-2 hover:text-[#5e47b1]'><Users /> Layers</li>
                    </ul>
                </div>

                <div className='mt-6 w-[80%] border-b border-gray-300 mx-auto'>
                    <ul className='flex flex-col gap-5 mb-7'>
                        <li className='flex justify-start items-center gap-2 ml-2 hover:text-[#5e47b1]'><Settings /> Setting</li>
                        <li className='flex justify-start items-center gap-2 ml-2 hover:text-[#5e47b1]'><LogOut /> Logout</li>
                    </ul>
                </div>
            </div>

            <div className='flex justify-around items-center gap-2'>
                <img src="https://i.pinimg.com/1200x/fb/1a/39/fb1a3903355eeebf3335aadab88d72a1.jpg" className='rounded-full  w-20 h-20 object-cover border-4 border-gray-300/20 hover:border-[#5e47b1]'/>

                <div className='min-w-0'>
                    <h3 className='truncate max-w-[100px] hover:text-[#5e47b1]'>Display Name Here</h3>
                    <h1 className='font-semibold text-gray-400 truncate max-w-[100px] hover:text-[#5e47b1]'>username</h1>
                </div>

            </div>
        </div>
        

        
    </div>
  )
}

export default ASIDE