import { ChevronDown, ChevronUp, MessageCircle } from 'lucide-react'
import React from 'react'

const POST = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-4 my-8'>

        <div className='w-[98%] bg-[var(--bg-secondary)] rounded-2xl min-h-20'>
            <p className='px-5 py-2'>I love Veil</p>

            <div className='flex items-center gap-3 mx-2 mt-4 pb-3'>
                <div className='flex  items-center gap-2'>
                    <p className='text-[#9b84ee] font-semibold'>4</p>
                    <div className='hover:text-[#5e47b1] flex'>
                        <ChevronUp /> 

                        <p>Upvote</p>
                    </div>
                </div>

                 <div className='flex  items-center gap-2'>
                    <p></p>
                    <div className='hover:text-[#5e47b1] flex'>
                        <ChevronDown /> 

                        <p>Downvote</p>
                    </div>
                </div>

                <div className='flex  items-center gap-2'>
                    <p></p>
                    <div className='hover:text-[#5e47b1] flex items-center gap-1 mt-[2px] ml-1'>
                        <MessageCircle size={18} /> 
                        <p className='text-gray-300/50'>14.k</p>
                    </div>
                </div>
            </div>
        </div>

       <div className='w-[98%] bg-[var(--bg-secondary)] rounded-2xl min-h-20'>
            <p className='px-5 py-2'>I love Veil</p>

            <div className='flex items-center gap-3 mx-2 mt-4 pb-3'>
                <div className='flex  items-center gap-2'>
                    <p className='text-[#9b84ee] font-semibold'>4</p>
                    <div className='hover:text-[#5e47b1] flex'>
                        <ChevronUp /> 

                        <p>Upvote</p>
                    </div>
                </div>

                 <div className='flex  items-center gap-2'>
                    <p></p>
                    <div className='hover:text-[#5e47b1] flex'>
                        <ChevronDown /> 

                        <p>Downvote</p>
                    </div>
                </div>

                <div className='flex  items-center gap-2'>
                    <p></p>
                    <div className='hover:text-[#5e47b1] flex items-center gap-1 mt-[2px] ml-1'>
                        <MessageCircle size={18} /> 
                        <p className='text-gray-300/50'>14.k</p>
                    </div>
                </div>
            </div>
        </div>

        <div className='w-[98%] bg-[var(--bg-secondary)] rounded-2xl min-h-20'>
            <p className='px-5 py-2'>I love Veil</p>

            <div className='flex items-center gap-3 mx-2 mt-4 pb-3'>
                <div className='flex  items-center gap-2'>
                    <p className='text-[#9b84ee] font-semibold'>4</p>
                    <div className='hover:text-[#5e47b1] flex'>
                        <ChevronUp /> 

                        <p>Upvote</p>
                    </div>
                </div>

                 <div className='flex  items-center gap-2'>
                    <p></p>
                    <div className='hover:text-[#5e47b1] flex'>
                        <ChevronDown /> 

                        <p>Downvote</p>
                    </div>
                </div>

                <div className='flex  items-center gap-2'>
                    <p></p>
                    <div className='hover:text-[#5e47b1] flex items-center gap-1 mt-[2px] ml-1'>
                        <MessageCircle size={18} /> 
                        <p className='text-gray-300/50'>14.k</p>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default POST