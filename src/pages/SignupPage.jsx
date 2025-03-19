import React from "react";
import { Link } from "react-router-dom";
import { Signup } from "../components";

const SignupPage = () => {
  return (
    <div className="flex flex-col justify-center h-screen">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Welcome to Video Platform</h1>
        <p className="text-lg mb-4">
          Please signup to continue using our platform
        </p>
      </div>
      <Signup />
    </div>
  );
};

export default SignupPage;
