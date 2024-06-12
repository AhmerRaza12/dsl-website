import React, { useState } from 'react';
import PropTypes from 'prop-types'; 
import { Link } from 'react-router-dom'; 
import {useNavigate} from 'react-router-dom';

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('username', username);
    formData.append('pwd', password);
    
    fetch('http://127.0.0.1:5000/user/login', {
      method: 'POST',
      body: formData,
    })
    .then((response) => response.json())
    .then((data) => {
      sessionStorage.setItem('username', data);
      onLogin(data); 
      navigate('/');
      
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
      <div className="bg-white p-8 rounded-md shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Welcome back, Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-800 font-semibold mb-2">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-green-400 text-gray-800"
              required
            />
          </div>
          <div className="mb-4">
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
          <div className="flex justify-center">
            <button type="submit" className="bg-green-200 text-green-600 px-6 py-2 rounded-md hover:bg-green-300 transition-colors focus:outline-none focus:bg-green-300 focus:ring-2 focus:ring-green-600 focus:ring-opacity-50">Login</button>
          </div>
        </form>
      </div>
      <p className="mt-4 text-black">Not registered? <span className='underline text-gray-800 font-bold text-xl pl-2'><Link to="/signup">Register here</Link></span></p>
    </div>
  );
};


LoginForm.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default LoginForm;
