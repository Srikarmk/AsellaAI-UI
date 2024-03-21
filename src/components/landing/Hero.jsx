import React from 'react'
import { useTypewriter,Cursor } from 'react-simple-typewriter'
const Hero = () => {
  const [text]=useTypewriter({
    words:['Startups', 'Students', 'Influencers','Traders', 'B2B SaaS', 'Social Media', 'Consumers', 'Companies', 'Work'],
    loop:{},
    typeSpeed:50
  })
  return (
    <div className='text-center mt-16'>
      <h1 className='text-3xl lg:text-8xl font-bold'>AI for <span className='text-[#8353E2]'>{text}</span></h1>
      <p className='mt-5 md:text-2xl px-5 lg:px-0 lg:w-[50%] mx-auto'>Discover, compare, and buy access to AI-powered tools for any use-case on the first AI marketplace.</p>
      
<form className="w-[80%] lg:max-w-3xl mx-auto  mt-10 lg:mt-20">   
    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
    <div className="relative">
        
        <input 
        type="search" 
        id="default-search" 
        className="block w-full px-2 py-4 ps-5 lg:text-lg bg-[#F3F4F6] text-black border border-gray-300 rounded-full shadow-xl text-[0.5rem] " 
        placeholder="Enter a use case, task, product category, or AI company" required />
        <div className="absolute inset-y-0 end-5 flex items-center ps-3 pointer-events-none">
            <svg className="w-3 h-3 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
    </div>
</form>

    </div>
  )
}

export default Hero
