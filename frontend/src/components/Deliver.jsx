import React from 'react'
import DslPakistanImage from '../assets/DSL DOMESTIC MAP.png'
const Deliver = () => {
  return (
    <div className='h-screen flex gap-x-8 columns-2 '>
        {/* 35% width content textbox */}
        <div className='w-1/3 text-black p-6 text-left  '>
          
            <h1 className='text-4xl font-bold shadow-none'>We deliver everywhere <span className='text-green-400'>Domestic </span>& <span className='text-gray-700'>Local</span> </h1>
            <p className='mt-4 text-gray-500 text-xl'>At DSL Courier, we specialize in hassle-free distribution services tailored to meet your needs. From bustling urban hubs to remote rural areas, we ensure seamless delivery across Pakistan. With our commitment to efficiency and reliability, trust DSL Courier to handle your shipments with care and precision, every step of the way.</p>
        </div>
          {/* 65% width image container */}
            <div className='w-2/3 '>
                <img src={DslPakistanImage} alt='dsl pakistan' className='pr-10' />
            </div>
    </div>
  )
}

export default Deliver