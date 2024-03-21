import React from 'react'
import Logo from "../assets/logo.png"
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className='px-5 lg:py-4 lg:px-20 mt-20'>
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
      <div className='mt-10 lg:mt-0'>
        <ul className='font-bold'>
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
  )
}

export default Footer
