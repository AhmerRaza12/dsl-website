import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullseye, faBinoculars,faUsersRays,faChalkboardUser} from '@fortawesome/free-solid-svg-icons';
import '../styles.css';

const HeroSection = () => {
  return (
    <div className="flex h-screen items center mt-5">
      <div className="w-full mx-auto p-6 ">
        {/* DSL Strategy */}
        <div className="hero-item animate-slideLeft text-left mt-10">
            <h2 className="text-2xl font-bold mb-2"> DSL Strategy 
             <FontAwesomeIcon icon={faUsersRays} className="pl-2 mr-4 text-green-500" size="1x"/> 
            </h2>
            <p className="text-gray-600 flex items-center">
            <span className='text-green-500 text-4xl'>T</span>
            <span className='ml-1'>o be a leader in the courier service industry by providing enhanced services,relationship and profitability.</span>
            </p>
        </div>

        {/* DSL Goal */}
        <div className="hero-item animate-slideRight mt-10 text-right">
    <h2 className="text-2xl font-bold mb-2 flex items-center justify-end">DSL Goal 
        <FontAwesomeIcon icon={faBullseye} className="pl-2 mr-4 text-green-500" size="1x" />
    </h2>
    <p className="text-gray-600 flex items-center justify-end">
        <span className='text-green-500 text-4xl'>O</span>
        <span className='ml-1'>ur goal is rather simple; provide a courier service that is super fast in terms of delivery times and is totally reliable.</span>
    </p>
</div>

        {/* DSL Vision */}
        <div className="hero-item animate-slideLeft text-left mt-10">
            <h2 className="text-2xl font-bold mb-2">DSL Vision 
            <FontAwesomeIcon icon={faBinoculars} className="pl-2 mr-4 text-green-500" size="1x" /> </h2>
            <p className="text-gray-600 flex items-center">
  <span className='text-green-500 text-4xl'>O</span>
  <span className="ml-1">ur vision is to provide unrivaled courier services to clients around the world, ensuring timely and safe delivery of parcels.</span>
</p>
        </div>

         {/* DSL Mission */}
         <div className="hero-item animate-slideRight text-right mt-10">
            <h2 className="text-2xl font-bold mb-2">DSL Mission 
            <FontAwesomeIcon icon={faChalkboardUser} className="pl-2 mr-4 text-green-500" size="1x" /> </h2>
            <p className="text-gray-600 flex items-center justify-end">
            <span className='text-green-500 text-4xl'>T</span>
            <span className='ml-1'>o become the most economical courier/parcel service provider without
              compromising on the quality of service.</span>
            </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
