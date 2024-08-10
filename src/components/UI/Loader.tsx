import React from 'react';

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <div className="flex space-x-2">
        <div className="w-4 h-4 bg-[#4f46e5] rounded-full animate-pulse"></div>
        <div className="w-4 h-4 bg-[#4f46e5] rounded-full animate-pulse animation-delay-200"></div>
        <div className="w-4 h-4 bg-[#4f46e5] rounded-full animate-pulse animation-delay-400"></div>
        <div className="w-4 h-4 bg-[#4f46e5] rounded-full animate-pulse animation-delay-600"></div>
        <div className="w-4 h-4 bg-[#4f46e5] rounded-full animate-pulse animation-delay-800"></div>
      </div>
    </div>
  );
};

export default Loader;
