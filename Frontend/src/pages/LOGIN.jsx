import React from 'react'
import logo from "../assets/veil_logo.png"
import register_page_background from "../assets/login_page_background.jpg"
import { Heart } from 'lucide-react'

const LOGIN = () => {
  return (
    <div>
        <div className='w-screen h-screen relative text-white overflow-hidden'>

            <img src={register_page_background} className='w-screen h-screen object-cover absolute inset-0 -z-100' />
    

            <div className='flex justify-center items-center w-screen h-screen bg-transparent ml-4'>
                <div className='bg-[#080c28b9] w-[80%] sm:w-[55%] md:w-[45%] lg:w-[35%] flex flex-col justify-center gap-2 rounded-2xl items-center py-5'>
                    <div className='w-25 mx-3'>
                        <img src={logo} className='w-full' />
                    </div>

                    <div className='flex flex-col ml-2 '>
                        <div className='flex items-center justify-center gap-2 mx-auto'>
                            <h1 className='text-3xl font-semibold text-center'>Welcom Back</h1>
                            <Heart className='text-[#5e47b1]  hidden sm:block'/>
                        </div>
                        
                        <div className='mx-auto px-2'>
                            <p className='text-gray-300/70 text-lg mt-2 sm:mt-1 text-center'>Login to continue your anonymous journey</p>
                        </div>
                        
                    </div>

                    <form className='ml-2 flex flex-col justify-center items-center gap-4 mt-3'>
                        <div>
                            <h3 className='text-lg'>Username / email</h3>
                            <input type="text" name="username" id="username" className='border-2 border-[#5e47b1] rounded-2xl' />
                        </div>

                        <div>
                            <h3 className='text-lg'>password</h3>
                            <input type="text" name="password" id="password" minLength={6} className='border-2 border-[#5e47b1] rounded-2xl' />
                        </div>

                        <input type="submit" className='border-2 border-[#5e47b1] w-25 rounded-3xl mt-3 cursor-pointer px-1 py-2'/>
                    </form>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default LOGIN