import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DslLogo from '../../assets/DSL LOGO 2024.png';
const SignUpForm = () => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [shippingAddress, setShippingAddress] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    console.log('Submitted:', { name, contact, shippingAddress,  email, password });
  };

  return (
    <>
    
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <div className="flex flex-col justify-center items-center w-2/5">
        <img src={DslLogo} alt="DSL LOGO" className="w-64 h-64 " />
        <p className='text-green-700 text-center items-center flex-nowrap '> <Link to='/'>2024 © DSL  Logistics Private Limited </Link></p>
        
      </div>
      <div className="bg-white p-8 rounded-md shadow-md w-2/5 mr-2">
        <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-wrap justify-between mb-4">
            <div className="w-full md:w-1/2 md:pr-2 mb-4 md:mb-0">
              <label htmlFor="name" className="block text-gray-800 font-semibold mb-2"> First Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-green-400 text-gray-800"
                required
              />
            </div>
            <div className="w-full md:w-1/2 md:pr-2 mb-4 md:mb-0">
              <label htmlFor="name" className="block text-gray-800 font-semibold mb-2">Last Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-green-400 text-gray-800"
                required
              />
            </div>
          </div>
          <div className="mb-2">
              <label htmlFor="contact" className="block text-gray-800 font-semibold mb-2">Phone no</label>
              <input
                type="number"
                id="contact"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-green-400 text-gray-800"
                required
              />
            </div>
          <div className="mb-2">
            <label htmlFor="shippingAddress" className="block text-gray-800 font-semibold mb-2">Shipping Address</label>
            <input
              type="text"
              id="shippingAddress"
              value={shippingAddress}
              onChange={(e) => setShippingAddress(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-green-400 text-gray-800"
              required
            />
          </div>
          
          <div className="mb-2">
            <label htmlFor="email" className="block text-gray-800 font-semibold mb-2">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-green-400 text-gray-800"
              required
            />
          </div>
          <div className="mb-2">
            <label htmlFor="password" className="block text-gray-800 font-semibold mb-2">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-green-400 text-gray-800"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block text-gray-800 font-semibold mb-2">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-green-400 text-gray-800"
              required
            />
          </div>
          <div className="flex justify-center">
            <button type="submit" className="bg-green-200 text-green-600 px-6 py-2 rounded-md hover:bg-green-300 transition-colors focus:outline-none focus:bg-green-300 focus:ring-2 focus:ring-green-600 focus:ring-opacity-50">Sign Up</button>
          </div>
        </form>
      
      <p className="mt-4 text-black">Already have an account? <span className='underline text-gray-800 font-bold text-xl pl-2'><Link to="/login">Login here</Link></span></p>
      
      </div>
      
    </div>
    

    


</>

  );
};

export default SignUpForm;
