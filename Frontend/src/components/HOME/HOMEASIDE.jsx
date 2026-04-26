import { Hash } from 'lucide-react'
import React from 'react'

const HOMEASIDE = () => {
  return (
    <div>
        <div className='bg-[var(--bg-primary)] fixed right-0 bottom-0 h-[calc(100%-60px)] w-60 lg:w-85 z-20 text-white '>
          <div className='bg-[var(--bg-secondary)] py-5 my-8 mx-4 rounded-2xl'>
            <h1 className='mx-4 '>Top Layers</h1>
            
            <div className='mx-2 mt-4 flex justify-between'>

              <div className='flex items-center'>
                <div className='w-15 h-15'> 
                  <img src="https://i.pinimg.com/736x/e4/32/12/e43212860a10e5e63c80c2ce5f76f8b3.jpg" className='w-full h-full rounded-full object-cover border-4 border-[#5e47b1] ' />
                </div>
                <div className=' ml-4'>
                  <h1 className='max-w-[150px] truncate font-semibold'>Illuminati</h1>
                  <h4 className='max-w-[150px] truncate text-gray-300/50 font-semibold'>14k members</h4>
                </div>
              </div>
              
              <div className='bg-transparent border-2 border-[#5e47b1] mr-2 px-4 flex justify-center items-center rounded-2xl'>
                Join
              </div>
            </div>

            <div className='mx-2 mt-4 flex justify-between'>

              <div className='flex items-center'>
                <div className='w-15 h-15'> 
                  <img src="https://i.pinimg.com/736x/e4/32/12/e43212860a10e5e63c80c2ce5f76f8b3.jpg" className='w-full h-full rounded-full object-cover border-4 border-[#5e47b1] ' />
                </div>
                <div className=' ml-4'>
                  <h1 className='max-w-[150px] truncate font-semibold'>Illuminati</h1>
                  <h4 className='max-w-[150px] truncate text-gray-300/50 font-semibold'>14k members</h4>
                </div>
              </div>
              
              <div className='bg-transparent border-2 border-[#5e47b1] mr-2 px-4 flex justify-center items-center rounded-2xl'>
                Join
              </div>
            </div>

            <div className='mx-2 mt-4 flex justify-between'>

              <div className='flex items-center'>
                <div className='w-15 h-15'> 
                  <img src="https://i.pinimg.com/736x/e4/32/12/e43212860a10e5e63c80c2ce5f76f8b3.jpg" className='w-full h-full rounded-full object-cover border-4 border-[#5e47b1] ' />
                </div>
                <div className=' ml-4'>
                  <h1 className='max-w-[150px] truncate font-semibold'>Illuminati</h1>
                  <p className='max-w-[150px] truncate text-gray-300/50 font-semibold'>14k members</p>
                </div>
              </div>
              
              <div className='bg-transparent border-2 border-[#5e47b1] mr-2 px-4 flex justify-center items-center rounded-2xl'>
                Join
              </div>
            </div>

          </div>


          <div className='bg-[var(--bg-secondary)] py-5 my-8 mx-4 rounded-2xl'>
            <h1 className='mx-4'>Trending on veil</h1>

            <div className='mt-3 mx-4'>
              <div className='flex  justify-start gap-1'>
                <Hash size={18} className='text-[#5e47b1] mt-[2px]' />
                <div>
                  <h2 className='max-w-[150px] truncate font-semibold'>Midnight Thoughts</h2>
                  <p className='max-w-[150px] truncate text-gray-300/50 font-semibold'>12k Veils</p>
                </div>
              </div>
            </div>

            <div className='mt-3 mx-4'>
              <div className='flex  justify-start gap-1'>
                <Hash size={18} className='text-[#5e47b1] mt-[2px]' />
                <div>
                  <h2 className='max-w-[150px] truncate font-semibold'>Crush</h2>
                  <p className='max-w-[150px] truncate text-gray-300/50 font-semibold'>12k Veils</p>
                </div>
              </div>
            </div>

            <div className='mt-3 mx-4'>
              <div className='flex  justify-start gap-1'>
                <Hash size={18} className='text-[#5e47b1] mt-[2px]' />
                <div>
                  <h2 className='max-w-[150px] truncate font-semibold'>Gupt gyan</h2>
                  <p className='max-w-[150px] truncate text-gray-300/50 font-semibold'>12k Veils</p>
                </div>
              </div>
            </div>

            <div className='mt-3 mx-4'>
              <div className='flex  justify-start gap-1'>
                <Hash size={18} className='text-[#5e47b1] mt-[2px]' />
                <div>
                  <h2 className='max-w-[150px] truncate font-semibold'>City Clubing</h2>
                  <p className='max-w-[150px] truncate text-gray-300/50 font-semibold'>12k Veils</p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default HOMEASIDE