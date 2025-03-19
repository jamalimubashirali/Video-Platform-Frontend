import React from 'react'
import { Link } from 'react-router-dom';
import { Login } from '../components';

const LoginPage = () => {
  return (
    <div className='flex flex-col justify-center mt-20'>
      <h1 className='text-3xl font-bold mb-4 text-center'>Welcome Back</h1>
      <p className='text-lg mb-4 text-center'>
        Please login to continue using our platform
      </p>
      <Login />
    </div>
  )
}

export default LoginPage;
