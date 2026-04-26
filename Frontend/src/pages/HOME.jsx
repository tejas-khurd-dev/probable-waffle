import React from 'react'
import { useState } from 'react'
import ASIDE from '../components/ASIDE'
import HEADER from '../components/HEADER'
import MAINASIDE from '../components/HOME/HOMEASIDE'
import UPDATES from '../components/HOME/UPDATES'
import FEED from '../components/HOME/FEED'

const HOME = () => {

  return (
    <div className='flex select-none'>
        <div className='hidden sm:block'>
          <ASIDE />
        </div>
        

        <div>
            <HEADER />

            <main>
                <div className='flex'>
                  <div>

                      <UPDATES />
                               

                    <div >
                      <FEED />
                    </div>
                  </div>
                  
                  
                  <div className='hidden md:block'>
                    <MAINASIDE />
                  </div>
                </div>
            </main>

            <footer></footer>
        </div>
    </div>
  )
}

export default HOME