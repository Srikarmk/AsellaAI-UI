import React from 'react'

const HowItWorks = () => {
  return (
    <div className='px-5 lg:py-4 lg:px-20 mt-20'>
      <p className='text-center text-[#8353E2] mb-3 font-bold'>How it Works</p>
      <h1 className='text-center text-2xl lg:text-5xl font-bold'>Three easy Steps</h1>
      <div className="grid lg:grid-cols-3 gap-10 mt-20">
        <div className='border-2 border-[#8353E2] p-8 rounded-xl space-y-5'>
            <h2 className='text-4xl font-bold text-[#8353E2]'>Search</h2>
            <p className='font-bold text-xl'>Thousands of tools</p>
            <p className='text-sm text-[#BCC1CA]'>Whether you're looking to get something done, searching for tools addressing a specific use case, or just want to compare some products within a category of tools, our AI-powered search engine gets it done.</p>
        </div>
        <div className='border-2 border-[#8353E2] p-8 rounded-xl space-y-5'>
            <h2 className='text-4xl font-bold text-[#8353E2]'>Browse</h2>
            <p className='font-bold text-xl'>Compare and filter</p>
            <p className='text-sm text-[#BCC1CA]'>Filter through dozens to hundreds of tools based on your unique needs and constraints, such as pricing, product integrations, features, and much more. </p>
        </div>
        <div className='border-2 border-[#8353E2] p-8 rounded-xl space-y-5'>
            <h2 className='text-4xl font-bold text-[#8353E2]'>Buy</h2>
            <p className='font-bold text-xl'>More done, less effort</p>
            <p className='text-sm text-[#BCC1CA]'>From writing essays as a college student to automating outbound marketing as an enterprise SDR, tools for every use case and profession are available for you to discover and buy, with ease.</p>
        </div>
      </div>
    </div>
  )
}

export default HowItWorks
