import React from 'react';
import icon1 from '../../../public/assets/work-icon.svg'
import icon2 from '../../../public/assets/find-icon.svg'
import icon3 from '../../../public/assets/place-icon.svg'
import Image from 'next/image';

const HowItWorks = () => {
  return (
    <div className="mx-auto px-6 md:px-[7rem]  py-10 bg-[#f8fcfd] ">
    <div className="text-center mb-10">
      <div className="section-heading" data-aos="fade-up">
        <h2 className="text-4xl font-extrabold text-indigo-900 leading-tight">How It Works</h2>
        <p className="text-gray-700 text-lg mt-4">Aliquam lorem ante, dapibus in, viverra quis</p>
      </div>
    </div>
    
    <div className="flex flex-wrap justify-center mt-8">
      <div className="w-full md:w-1/3 px-6 mb-8 md:mb-0 ">
        <div className="work-box bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300" data-aos="fade-up">
          <div className="work-icon flex justify-center mb-6">
            <span className="inline-block p-4 bg-[#f7f7ff] text-white rounded-full">
              <Image src={icon1} alt="Choose What To Do" className="h-14 w-14" />
            </span>
          </div>
          <h5 className="text-2xl font-semibold text-indigo-800 mb-3">Choose What To Do</h5>
          <p className="text-gray-700 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing tempor labore et dolore magna aliqua.</p>
          <h4 className="text-4xl font-extrabold text-indigo-800">01</h4>
        </div>
      </div>
  
      <div className="w-full md:w-1/3 px-6 mb-8 md:mb-0">
        <div className="work-box bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300" data-aos="fade-up">
          <div className="work-icon flex justify-center mb-6">
            <span className="inline-block p-4 bg-[#f7f7ff] text-white rounded-full">
              <Image src={icon2} alt="Find What You Want" className="h-14 w-14 "  />
            </span>
          </div>
          <h5 className="text-2xl font-semibold text-indigo-800 mb-3">Find What You Want</h5>
          <p className="text-gray-700 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing tempor labore et dolore magna aliqua.</p>
          <h4 className="text-4xl font-extrabold text-indigo-800">02</h4>
        </div>
      </div>
  
      <div className="w-full md:w-1/3 px-6 mb-8 md:mb-0">
        <div className="work-box bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300" data-aos="fade-up">
          <div className="work-icon flex justify-center mb-6">
            <span className="inline-block p-4 bg-[#f7f7ff] text-white rounded-full">
              <Image src={icon3} alt="Amazing Places" className="h-14 w-14" />
            </span>
          </div>
          <h5 className="text-2xl font-semibold text-indigo-800 mb-3">Amazing Places</h5>
          <p className="text-gray-700 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing tempor labore et dolore magna aliqua.</p>
          <h4 className="text-4xl font-extrabold text-indigo-800">03</h4>
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default HowItWorks;
