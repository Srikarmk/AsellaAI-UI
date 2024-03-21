import React from 'react'
import Logo from "../assets/logo.png"
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      <div className='hidden w-full md:flex justify-between py-4 px-20 items-center border-b-2 shadow-sm'>
        <div className='flex w-[60%] space-x-5 items-center'>
            <Link to='/'><img src={Logo} alt="logo" /></Link>
            <input type="text" className='border-2 w-[40%] px-5 py-1 rounded-xl' placeholder='Search Products' />
        </div>
        <ul className='flex justify-evenly w-[50%] text-[1rem] items-center'>
            <li>Start Selling</li>
            <Link to='/about'><li>About</li></Link>
            <li>Blog</li>
            <li>Log in</li>
            <button className='bg-[#8353E2] px-5 py-3 rounded-xl text-white hover:bg-[#7c44eb]'>Sign Up</button>
        </ul>
      </div>
      <div>
        <ul className='hidden md:flex justify-between w-full py-4 px-20 items-center border-b-2 shadow-lg'>
            <li>Category</li>
            <li>Category</li>
            <li>Category</li>
            <li>Category</li>
            <li>Category</li>
            <li>Category</li>
            <li>Category</li>
            <li>Category</li>
            <li>Category</li>
            <li>Category</li>
            <li>Category</li>
            <li>Category</li>
            <li>Category</li>

        </ul>
        
      </div>
    </div>
  )
}

export default Navbar
