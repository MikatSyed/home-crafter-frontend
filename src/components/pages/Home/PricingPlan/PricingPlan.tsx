import React from 'react';
import { FiCheck } from 'react-icons/fi';
import Image from 'next/image';
import pricingImg1 from '../../../public/assets/pricing-seven-1.svg';
import pricingImg2 from '../../../public/assets/pricing-seven-2.svg';
import pricingImg3 from '../../../public/assets/pricing-seven-3.svg';

const PricingPlan = () => {
  return (
    <div className="mx-auto px-6 md:px-[6rem] py-16 ">
      <div className="text-center mb-12">
        <div className="section-heading section-heading-seven" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-indigo-900 leading-tight">Pricing Plan</h2>
          <p className="text-gray-500 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
      </div>
      <div className="price-toggle price-toggle-seven mb-10 text-center">
        <div className="status-toggle toggle-pink inline-flex items-center">
          <span className="mr-2 text-gray-700">Bill Monthly</span>
          <input type="checkbox" id="status_1" className="check hidden" />
          <label htmlFor="status_1" className="checktoggle inline-block bg-gray-300 w-12 h-6 rounded-full cursor-pointer"></label>
          <span className="ml-2 text-gray-700">Bill Annually</span>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8" data-aos="fade-up">
        {/* Pricing Plan 1 */}
        <div className="pricing-plans price-new pricing-plans-seven bg-white p-8 rounded-xl shadow-md hover:shadow-2xl transition-shadow duration-300">
          <div className="flex justify-center mb-6">
           
          </div>
          <div className="pricing-planshead text-center mb-6">
            <h5 className="text-4xl font-bold text-indigo-600">Basic</h5>
            <h6 className="text-2xl font-extrabold text-gray-800"><span>$</span>10.00</h6>
          </div>
          <div className="pricing-planscontent pricing-planscontent-seven mb-6">
            <ul className="space-y-3">
              <li className="flex items-center text-gray-700">
                <FiCheck className="mr-3 text-indigo-600" />
                1 Bathroom cleaning
              </li>
              <li className="flex items-center text-gray-700">
                <FiCheck className="mr-3 text-indigo-600" />
                Up to 3 bedrooms cleaning
              </li>
              <li className="flex items-center text-gray-400">
                <FiCheck className="mr-3" />
                1 Livingroom cleaning
              </li>
              <li className="flex items-center text-gray-400">
                <FiCheck className="mr-3" />
                Small kitchen (0 - 150 ft²)
              </li>
              <li className="flex items-center text-gray-400">
                <FiCheck className="mr-3" />
                Up to 2 additional rooms cleaning
              </li>
            </ul>
          </div>
          <div className="text-center">
            <a href="search.html" className="bg-[#3730a3] text-white font-semibold px-6 py-3 rounded-full shadow hover:shadow-lg transition-shadow duration-300">
              Choose Plan
            </a>
          </div>
        </div>
        {/* Pricing Plan 2 */}
        <div className="pricing-plans price-new pricing-plans-seven bg-indigo-600 text-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 relative transform lg:scale-105 lg:translate-y-[-10px]">
          <div className="price-block absolute top-0 right-0 bg-red-500 text-white px-2 py-1 rounded-bl-lg">
            <span className="text-sm font-bold">MOST POPULAR</span>
          </div>
          <div className="flex justify-center mb-6">
           
          </div>
          <div className="pricing-planshead text-center mb-6">
            <h5 className="text-4xl font-bold">Standard</h5>
            <h6 className="text-2xl font-extrabold"><span>$</span>70.00</h6>
          </div>
          <div className="pricing-planscontent pricing-planscontent-seven mb-6">
            <ul className="space-y-3">
              <li className="flex items-center">
                <FiCheck className="mr-3" />
                1 Bathroom cleaning
              </li>
              <li className="flex items-center">
                <FiCheck className="mr-3" />
                Up to 3 bedrooms cleaning
              </li>
              <li className="flex items-center">
                <FiCheck className="mr-3" />
                1 Livingroom cleaning
              </li>
              <li className="flex items-center">
                <FiCheck className="mr-3" />
                Small kitchen (0 - 150 ft²)
              </li>
              <li className="flex items-center">
                <FiCheck className="mr-3" />
                Up to 2 additional rooms cleaning
              </li>
            </ul>
          </div>
          <div className="text-center">
            <a href="search.html" className="bg-white text-[#3730a3] font-semibold px-6 py-3 rounded-full shadow hover:shadow-lg transition-shadow duration-300">
              Choose Plan
            </a>
          </div>
        </div>
        {/* Pricing Plan 3 */}
        <div className="pricing-plans price-new pricing-plans-seven bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <div className="flex justify-center mb-6">
          
          </div>
          <div className="pricing-planshead text-center mb-6">
            <h5 className="text-4xl font-bold text-indigo-600">Premium</h5>
            <h6 className="text-2xl font-extrabold text-gray-800"><span>$</span>100.00</h6>
          </div>
          <div className="pricing-planscontent pricing-planscontent-seven mb-6">
            <ul className="space-y-3">
              <li className="flex items-center text-gray-700">
                <FiCheck className="mr-3 text-indigo-600" />
                1 Bathroom cleaning
              </li>
              <li className="flex items-center text-gray-700">
                <FiCheck className="mr-3 text-indigo-600" />
                Up to 3 bedrooms cleaning
              </li>
              <li className="flex items-center text-gray-400">
                <FiCheck className="mr-3" />
                1 Livingroom cleaning
              </li>
              <li className="flex items-center text-gray-400">
                <FiCheck className="mr-3" />
                Small kitchen (0 - 150 ft²)
              </li>
              <li className="flex items-center text-gray-400">
                <FiCheck className="mr-3" />
                Up to 2 additional rooms cleaning
              </li>
            </ul>
          </div>
          <div className="text-center">
            <a href="search.html" className="bg-[#3730a3] text-white font-semibold px-6 py-3 rounded-full shadow hover:shadow-lg transition-shadow duration-300">
              Choose Plan
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPlan;
