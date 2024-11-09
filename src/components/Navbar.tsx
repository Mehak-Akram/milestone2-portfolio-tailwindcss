import React from 'react'
import { ImMenu } from "react-icons/im";
import Link from 'next/link';

const Navbar = () => {
  return (
    <div>
        <div className='container pt-1'>
            <div className='flex justify-between items-center'>
                <div className='text-3xl font-extrabold'>Mehak <span className='text-accent'>Akram</span></div>
                <ul className='gap-10 lg:gap-16 hidden md:flex'>
                    <li className='menu-link text-1xl font-bold'><a href="#hero">Home</a></li>
                    <li className='menu-link text-1xl font-bold'><a href="#about">About</a></li>
                    <li className='menu-link text-1xl font-bold'><a href="#projects">Project</a></li>
                    <li className='menu-link text-1xl font-bold'><a href="#contact">Contact</a></li>
                </ul>
                <ImMenu className='md:hidden' size={30}/>
            </div>
        </div>
    </div>
  )
}

export default Navbar