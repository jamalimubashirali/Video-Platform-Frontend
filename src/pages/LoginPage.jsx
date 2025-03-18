import React from 'react'
import { Link } from 'react-router-dom';
import { Login } from '../components';

const LoginPage = () => {
  return (
    <div>
      <h1>{`Welcome Back`}</h1>
      <p>
        {`Please login to continue using our platform`}
      </p>
      <Login />
    </div>
  )
}

export default LoginPage;
