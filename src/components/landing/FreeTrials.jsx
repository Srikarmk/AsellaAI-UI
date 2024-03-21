import React from 'react'
import Tool from "../../assets/tool.png"
import CursorIcon from "../../assets/cursor.png"
const FreeTrials = () => {
  return (
    <div className='px-5 lg:py-4 lg:px-20 mt-20'>
    <div className='flex justify-between items-end'>
    <div>
        <h2 className='text-2xl lg:text-5xl font-bold'>Free Trials</h2>
        <p className='hidden lg:block text-lg mt-3'>Popular products available for free or with a free trial.</p></div>
        <div className='font-bold text-xl'>See More  ></div>
  </div>
  <div className="lg:grid lg:grid-cols-3 lg:gap-6 mt-10">
        <div className='w-[90%] lg:w-full  mx-auto lg:mx-0'>
            <img src={Tool} alt="" className='w-full' />
            <div className='flex lg:px-5 py-3 justify-around lg:justify-between border-[#F6F6F6] border-2 rounded-b-xl shadow-[-2px_5px_30px_-5px_rgba(0,0,0,0.25)]'>
                <div className='lg:w-[12%]'>
                <img src={CursorIcon} alt="" className='ml-2 lg:w-full' />
                </div>
                <div className='lg:ml-5 w-[40%] lg:w-[60%] items-center'>
                    <h5 className='font-bold'>Cursor</h5>
                    <p className='text-sm'>Ai Powered Code Editor</p>
                </div>
                <h5 className="font-bold">Free Trial</h5>
            </div>
        </div>
        <div className='hidden lg:block w-[90%] lg:w-full  mx-auto lg:mx-0'>
            <img src={Tool} alt="" className='w-full' />
            <div className='flex lg:px-5 py-3 justify-around lg:justify-between border-[#F6F6F6] border-2 rounded-b-xl shadow-[-2px_5px_30px_-5px_rgba(0,0,0,0.25)]'>
                <div className='lg:w-[12%]'>
                <img src={CursorIcon} alt="" className='ml-2 lg:w-full' />
                </div>
                <div className='lg:ml-5 w-[40%] lg:w-[60%] items-center'>
                    <h5 className='font-bold'>Cursor</h5>
                    <p className='text-sm'>Ai Powered Code Editor</p>
                </div>
                <h5 className="font-bold">Free Trial</h5>
            </div>
        </div>
        <div className='hidden lg:block w-[90%] lg:w-full  mx-auto lg:mx-0'>
            <img src={Tool} alt="" className='w-full' />
            <div className='flex lg:px-5 py-3 justify-around lg:justify-between border-[#F6F6F6] border-2 rounded-b-xl shadow-[-2px_5px_30px_-5px_rgba(0,0,0,0.25)]'>
                <div className='lg:w-[12%]'>
                <img src={CursorIcon} alt="" className='ml-2 lg:w-full' />
                </div>
                <div className='lg:ml-5 w-[40%] lg:w-[60%] items-center'>
                    <h5 className='font-bold'>Cursor</h5>
                    <p className='text-sm'>Ai Powered Code Editor</p>
                </div>
                <h5 className="font-bold">Free Trial</h5>
            </div>
        </div>

      </div>
</div>
  )
}

export default FreeTrials
