import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faShieldAlt, faUser } from '@fortawesome/free-solid-svg-icons';

const Cardads = () => {
  return (
    <div className="flex justify-center mt-10">
      <div className="flex space-x-8">
        <div className="card-container">
          <div className="card w-44 h-44 p-4 border-gray-300 rounded-md shadow-md flex flex-col items-center justify-center transition-transform hover:scale-105 cursor-pointer bg-white hover:bg-green-400 hover:text-white hover:shadow-lg hover:border-transparent duration-500">
            <FontAwesomeIcon icon={faTruck} size="3x" />
            <div className="card-text mt-4 text-center">Reliable Delivery</div>
          </div>
        </div>
        <div className="card-container">
          <div className="card w-44 h-44 p-4 border-gray-300 rounded-md shadow-md flex flex-col items-center justify-center transition-transform hover:scale-105 cursor-pointer bg-white hover:bg-green-400 hover:text-white hover:shadow-lg hover:border-transparent duration-500">
            <FontAwesomeIcon icon={faShieldAlt} size="3x" />
            <div className="card-text mt-4 text-center">Globally Secure Couriers</div>
          </div>
        </div>
        <div className="card-container">
          <div className="card w-44 h-44 p-4 border-gray-300 rounded-md shadow-md flex flex-col items-center justify-center transition-transform hover:scale-105 cursor-pointer bg-white hover:bg-green-400 hover:text-white hover:shadow-lg hover:border-transparent duration-500">
            <FontAwesomeIcon icon={faUser} size="3x" />
            <div className="card-text mt-4 text-center">Placeholder</div>
          </div>
        </div>
        <div className="card-container">
          <div className="card w-44 h-44 p-4 border-gray-300 rounded-md shadow-md flex flex-col items-center justify-center transition-transform hover:scale-105 cursor-pointer bg-white hover:bg-green-400 hover:text-white hover:shadow-lg hover:border-transparent duration-500">
            <FontAwesomeIcon icon={faUser} size="3x" />
            <div className="card-text mt-4 text-center">Placeholder</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cardads;
