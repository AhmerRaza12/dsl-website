import React from 'react'
import LoginForm from '../components/forms/LoginForm.jsx'
import PropTypes from 'prop-types';

const Login = ({ handleLogin }) => {
  return (
    <div>
      <LoginForm onLogin={handleLogin}/>
    </div>
  )
}
Login.propTypes = {
  handleLogin: PropTypes.func.isRequired,
};


export default Login
