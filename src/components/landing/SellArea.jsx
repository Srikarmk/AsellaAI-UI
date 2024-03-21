import React from 'react'

const SellArea = () => {
  return (
    <div>
    <div className=' lg:w-[90%] mx-auto px-5 py-2 lg:py-4 lg:px-20 mt-20 mb-20 lg:rounded-md bg-black'>
      <h1 className='text-2xl lg:text-5xl text-white font-bold mt-10 '>It's never been easier</h1>
      <p className='lg:text-2xl text-white mt-5'>Get more done in less time and less effort, with the power of AI.</p>
      <div className='text-white mt-10 flex lg:w-[28%] justify-between mb-10'>
        <button className='bg-[#8353E2] px-8 py-1 lg:px-6 lg:py-2 rounded-md text-white hover:bg-[#7c44eb]'>Start Selling</button>
        <button className='bg-[#8353E2] px-8 py-1 lg:px-6 lg:py-2 rounded-md text-white hover:bg-[#7c44eb]'>Get Started</button>
      </div>
    </div>
    <hr />
    </div>
  )
}

export default SellArea
