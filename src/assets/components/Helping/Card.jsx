import React from 'react'

export const Card = ({icon, title, description}) => {
  return (
    <div className='flex items-center space-x-4 justify-center md:justify-start'>
        <img src={icon} alt="" />
        <div>
            <h1 className='font-semibold text-2xl'>{title}</h1>
            <p className='text-sm opacity-60'>{description}</p>
        </div>
    </div>
  )
}
