import React from 'react'
import CountUp from 'react-countup'
const ByNumbers = () => {
  return (
    <div className='px-5 lg:py-4 lg:px-20 mt-20'>
    <p className='text-center text-[#8353E2] mb-3 font-bold'>By the Numbers</p>
    <h1 className='text-center text-2xl lg:text-5xl font-bold'>Products for everybody</h1>
    <div className="grid lg:grid-cols-3 lg:ap-10 mt-10 lg:mt-20 lg:mx-10">
        <div className='text-center p-10'>
        
            <h1 className='text-4xl mb-5 font-bold'><CountUp
                    start={0}
                    end={34982}
                    duration={7}
                /></h1>
            <p className='text-[#888E96]'>Unique Use Cases</p>
        </div>
        <div className='text-center p-10'>
            <h1 className='text-4xl mb-5 font-bold'>
            <CountUp
                    start={0}
                    end={8781}
                    duration={7}
                /></h1>
            <p className='text-[#888E96]'>Total Products</p>
        </div>
        <div className='text-center p-10'>
            <h1 className='text-4xl mb-5 font-bold'>
            <CountUp
                    start={0}
                    end={692}
                    duration={7}
                /></h1>
            <p className='text-[#888E96]'>Tasks to Help With</p>
        </div>
    </div>
  </div>
  )
}

export default ByNumbers
