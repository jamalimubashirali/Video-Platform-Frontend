import React from 'react';

const LineNavigationBarLinks = ({ text , isActive }) => {
  return (
    <div className="relative">
      <div className={`text-center font-semibold py-2 ${isActive ? "text-gray-900" : "text-gray-500"}`}>{text}</div>
      <div className={isActive ? "absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500 rounded-full" : "hidden"} /> 
    </div>
  );
};

export default LineNavigationBarLinks;