import React from 'react'

export const SuitableCard = ({icon, title, description}) => {
  return (
    <div className='bg-white drop-shadow-xl p-4 text-center'>
        <img className='w-fit mx-auto'  src={icon} alt="" />
        <h1 className='font-semibold py-2'>{title}</h1>
        <p className='opacity-60 text-sm'>{description}</p>
    </div>
  )
}
