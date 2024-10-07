import React from 'react';
import { FiMapPin, FiSearch } from 'react-icons/fi';
import { FaShieldAlt, FaHandsHelping, FaDollarSign } from "react-icons/fa"; // Example icons for cards
import Image from 'next/image';
import suitcase from "../../../../../public/assets/suitcase.svg";

const HeroSection = () => {
    return (
        <div className="mx-auto px-6 md:px-[6rem] bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-500 pt-14">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-wrap items-center w-full">
                    <div className="lg:w-6/12 w-full">
                        <div className="section-search" data-aos="fade-up">
                            <p className="text-lg text-gray-200">Search From 150 Awesome Verified Ads!</p>
                            <h1 className="text-4xl md:text-6xl font-bold mt-2 text-white leading-tight">
                                Best Solution for Every 
                            </h1>
                            <h1 className="text-4xl md:text-6xl font-bold mt-2 text-yellow-300">House Problems</h1>
                            <div className="bg-white mt-6 p-6 rounded-lg shadow-lg w-full md:w-4/5">
                                <h6 className="text-xl text-gray-800">2M+ Professionals registered</h6>
                                <ul className="flex mt-4 space-x-2">
                                    {['avatar-06', 'avatar-07', 'avatar-08', 'avatar-09', 'avatar-10'].map((avatar, index) => (
                                        <li key={index}>
                                            <a href="#">
                                                <img src={`https://truelysell.dreamstechnologies.com/html/template/assets/img/profiles/${avatar}.jpg`} alt="User" className="rounded-full w-10 h-10 border-2 border-white shadow-lg"/>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-6/12 w-full mt-8 lg:mt-0">
                        <div className="relative flex justify-center">
                            <img src="https://truelysell.dreamstechnologies.com/html/template/assets/img/hero-section-seven-ryt.png" alt="image" className="w-72 md:w-96 rounded-xl shadow-2xl border-4 border-white"/>
                            <div className="absolute bottom-4 left-4 lg:left-auto lg:right-4 bg-white p-6 rounded-lg shadow-xl">
                                <div className="flex items-center space-x-2">
                                    <h5 className="text-2xl font-bold text-indigo-700">+21 k</h5>
                                </div>
                                <div className='flex mt-2'>
                                    <p className="text-md text-gray-700">Services Completed</p>
                                    <div className='bg-indigo-600 p-2 ml-4 rounded-full'>
                                        <Image src={suitcase} alt='suitcase' className="w-6 h-6 text-white" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Premium Cards Section */}
                <div className="mt-10 mb-[-8rem] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Premium Card 1 */}
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <div className="flex items-center justify-center bg-indigo-600 text-white w-16 h-16 rounded-full mx-auto mb-4">
                            <FaShieldAlt className="text-3xl"/>
                        </div>
                        <h3 className="text-2xl font-bold text-indigo-800 mb-4 text-center">Quality Assurance</h3>
                        <p className="text-gray-700 text-center mb-6">
                            Get top-notch service with our verified professionals, ensuring you receive the highest quality for every task.
                        </p>
                        <button className="bg-indigo-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-indigo-800 mx-auto block">
                            Learn More
                        </button>
                    </div>

                    {/* Premium Card 2 */}
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <div className="flex items-center justify-center bg-indigo-600 text-white w-16 h-16 rounded-full mx-auto mb-4">
                            <FaHandsHelping className="text-3xl"/>
                        </div>
                        <h3 className="text-2xl font-bold text-indigo-800 mb-4 text-center">Customer Support</h3>
                        <p className="text-gray-700 text-center mb-6">
                            Our dedicated support team is available 24/7 to assist with any queries, ensuring a smooth experience.
                        </p>
                        <button className="bg-indigo-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-indigo-800 mx-auto block">
                            Get Support
                        </button>
                    </div>

                    {/* Premium Card 3 */}
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <div className="flex items-center justify-center bg-indigo-600 text-white w-16 h-16 rounded-full mx-auto mb-4">
                            <FaDollarSign className="text-3xl"/>
                        </div>
                        <h3 className="text-2xl font-bold text-indigo-800 mb-4 text-center">Affordable Packages</h3>
                        <p className="text-gray-700 text-center mb-6">
                            Choose from a variety of affordable packages tailored to fit your needs, offering great value for money.
                        </p>
                        <button className="bg-indigo-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-indigo-800 mx-auto block">
                            View Plans
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
