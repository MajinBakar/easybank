import React from 'react'
import logo from '../assets/logo.svg'
import Button from './Button'

const NavBar = () => {
  return (
    <nav className='flex justify-between sm:px-10 lg:px-20 bg-white h-14 items-center font-public'>
        <div>
            <img src={logo} alt="logo" />
        </div>

        <div>
            <ul className='flex text-sm gap-2 md:gap-5 lg:gap-6 xl:gap-6 2xl:gap-7 text-gray-500 font-medium mt-5'>
                <li className='limenu cursor-pointer leading-5'>Home</li>
                <li className='limenu cursor-pointer'>About</li>
                <li className='limenu cursor-pointer'>Contact</li>
                <li className='limenu cursor-pointer'>Blog</li>
                <li className='limenu cursor-pointer'>Careers</li>
            </ul>
        </div>

    <Button text="Request Invite"/>
    </nav>
  )
}

export default NavBar