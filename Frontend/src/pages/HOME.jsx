import React from 'react'
import ASIDE from '../components/ASIDE'
import HEADER from '../components/HEADER'
import MAINASIDE from '../components/MAINASIDE'

const HOME = () => {
  return (
    <div className='flex'>
        <ASIDE />

        <div>
            <HEADER />

            <main>
                <section id='updates'></section>
                
                <section id='posts'></section>

                <MAINASIDE />
            </main>

            <footer></footer>
        </div>
    </div>
  )
}

export default HOME