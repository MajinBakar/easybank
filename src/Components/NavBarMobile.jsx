import React, { useState } from 'react'
import logo from '../assets/logo.svg'


const NavBarMobile = () => {
    const [hamburger,setHamburger] = useState(false)

    const handleHamburger = () => {
        setHamburger(!hamburger)
   }

  return (
<nav className='flex relative justify-between px-8 bg-white h-14 items-center font-public'>
        <div>
        <img src={logo} alt="" />
    </div>
    <div className="block space-y-1 cursor-pointer z-50" onClick={handleHamburger}>
        <span className={' flex w-7 h-[0.05rem]  bg-slate-800 transition-all ease-in-out delay-75 duration-150' + (hamburger ? ' rotate-45 translate-y-[0.2rem] ' : ' ' )}></span>
        <span className={' flex w-7 h-[0.05rem]  bg-slate-800 transition-all ease-in-out duration-250 ' + (hamburger ? '  -rotate-45 -translate-y-[0.10rem] ' : ' ') }></span>
        <span className={' flex w-7 h-[0.05rem]  bg-slate-800 transition-all ease-in-out delay-75 duration-150' + (hamburger ? ' -rotate-45 -translate-y-[0.4rem]' : ' ')}></span>
    </div>

    <ul className={hamburger ? 'mobilemenu absolute w-10/12 backdrop-opacity-50 top-[4.5rem] left-0 right-0 mx-auto bg-white rounded-md p-3 text-center text-[#2d314d] font-medium text-lg shadow-2xl transition-all ease-in-out duration-200' : ' transition-all ease-in-out duration-200 hidden'} >
        <li className='py-2 cursor-pointer' onClick={handleHamburger}>Home</li>
        <li className='py-2 cursor-pointer' onClick={handleHamburger}>About</li>
        <li className='py-2 cursor-pointer' onClick={handleHamburger}>Contact</li>
        <li className='py-2 cursor-pointer' onClick={handleHamburger}>Blog</li>
        <li className='py-2 cursor-pointer' onClick={handleHamburger}>Careers</li>
    </ul>
    </nav>  )
}

export default NavBarMobile