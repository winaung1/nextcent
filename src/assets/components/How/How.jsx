import React from 'react'
import img2 from '../../pana.jpg'
export const How = () => {
  return (
    <div className='flex flex-col-reverse md:flex-row justify-between items-center py-10 max-w-7xl mx-auto p-4'>
        <img className='w-fit mx-auto md:w-[500px]' src={img2} alt="" />
        <div className='md:w-1/2'>
            <h1 className='font-semibold text-2xl'>How to design your site footer like we did</h1>
            <p className='py-4 text-sm opacity-60'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero repellendus minima mollitia sapiente quidem a, reiciendis totam, sint minus voluptate expedita voluptatibus similique temporibus aut error exercitationem explicabo ex maxime excepturi, sed quos nemo. Incidunt consectetur aliquid molestiae repellendus molestias.</p>
            <button>Learn more</button>
        </div>
    </div>
  )
}
