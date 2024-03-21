import React from 'react'
import Logo from "../../assets/logo.png"
import { Link } from 'react-router-dom'
const About = () => {
  return (
    <div className='bg-[#181C25] text-white'>
      <div className=''>
  <div className='hidden w-full lg:flex justify-between py-4 px-20 items-center border-b-2 shadow-sm'>
    <div className='flex w-[60%] space-x-5 items-center'>
    <Link to='/'><img src={Logo} alt="logo" /></Link>
        <input type="text" className='border-2 bg-[#181C25] text-white w-[40%] px-5 py-1 rounded-xl' placeholder='Search Products' />
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
    <ul className='hidden lg:flex justify-between w-full py-4 px-20 items-center border-b-2 shadow-lg'>
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
      <div className='px-5 py-4 lg:py-4 lg:px-20 lg:mt-20 space-y-10 mb-10'>
        <h1 className='text-3xl lg:text-5xl'>There's never been a better time to start a company.</h1>
        <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p>
        <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum  </p>
        <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum  </p>
        <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum</p>
        <hr />
        <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum  </p>
        <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum  </p>
        <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum</p>
        <p ><span>-</span> <span className='underline'>Dennis,Founder & CEO</span></p>
      </div>
      <hr />
      <div className='px-5 lg:py-4 lg:px-20 mt-5'>
<main className='lg:flex justify-between'>
<div className='space-y-10'>
<div>
<Link to='/'><img src={Logo} alt="logo" /></Link>
  <p className='mt-3'>The marketplace for AI-powered products.</p>
</div>
<div>
  <p>hello@asella.ai</p>
  <div className='w-[40%] flex justify-between'>
  <span>Twitter</span>
  <span>Linkedin</span>
  </div>
</div>
</div>
<div>
  <ul className='font-bold mt-5 lg:mt-0'>
    <li>Start Selling</li>
    <Link to='/about'><li>About</li></Link>
    <li>Blog</li>
    <li>Privacy Policy</li>
    <li>Terms of Service</li>
    <li>Sitemap</li>
  </ul>
</div>
</main>
<p className='mt-5 text-center mb-2 text-sm'>© 2024 Asella, Inc.</p>
</div>
    </div>
  )
}

export default About
