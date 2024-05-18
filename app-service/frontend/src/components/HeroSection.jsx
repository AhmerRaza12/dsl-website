import React from 'react';
import { GoGoal } from "react-icons/go";

const HeroSection = () => {
  return (
    <div className='flex justify-center mt-10 w-full mb-10'>
      <div className='grid grid-cols-2 sm:grid-cols-4 gap-x-8 '>
        
        <div className='flex flex-col items-center justify-center w-60'>
          <GoGoal className='text-4xl text-green-500 my-2' />
          <h3 className='text-4xl font-semibold my-2 '>DSL Goal</h3>
          <p className='text-md mt-4 text-center text-gray-500'>To be a leader in the courier service industry by providing enhanced.</p>
        </div>
        <div className='flex flex-col items-center justify-center w-60'>
          <GoGoal className='text-4xl text-green-500 my-2' />
          <h3 className='text-4xl font-semibold my-2'>Goal</h3>
          <p className='text-md mt-4 text-center text-gray-500'>To be a leader in the courier service industry by providing enhanced.</p>
        </div>
        <div className='flex flex-col items-center justify-center w-60'>
          <GoGoal className='text-4xl text-green-500 my-2' />
          <h3 className='text-4xl font-semibold my-2'>Goal</h3>
          <p className='text-md mt-4 text-center text-gray-500'>To be a leader in the courier service industry by providing enhanced.</p>
        </div>
        <div className='flex flex-col items-center justify-center w-60'>
          <GoGoal className='text-4xl text-green-500 my-2' />
          <h3 className='text-4xl font-semibold my-2'>Goal</h3>
          <p className='text-md mt-4 text-center text-gray-500'>To be a leader in the courier service industry by providing enhanced.</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
