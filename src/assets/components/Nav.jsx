import React from 'react'
import logo from '../mainlogo.png'
import { FaArrowRight } from 'react-icons/fa'
import { CiMenuFries } from "react-icons/ci";
export const Nav = () => {
  return (
    <div className='flex items-center justify-between p-4 max-w-7xl mx-auto'>
        <div>
            <img src={logo} alt="" />
        </div>
        <div className='flex items-center space-x-4'>
            <ul className='hidden md:flex items-center space-x-4'>
                <li>Home</li>
                <li>Features</li>
                <li>Community</li>
                <li>Blog</li>
                <li>Pricing</li>
            </ul>
            <button className='flex items-center'>Register Now <FaArrowRight className='pl-2 text-xl'/></button>
            <CiMenuFries className='text-2xl md:hidden'/>
        </div>
    </div>
  )
}
