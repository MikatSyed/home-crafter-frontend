import React from 'react';
import { FiMapPin, FiSearch } from 'react-icons/fi';
import { FaSuitcase } from "react-icons/fa6";
import suitcase from "../../../public/assets/suitcase.svg"
import Image from 'next/image';

const HeroSectionSeven = () => {
    return (
        <div className="mx-auto px-6 md:px-[6rem] bg-indigo-900 py-14">
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
                <div className="mt-10 bg-white p-8 rounded-xl shadow-xl">
                    <form action="search.html" className="flex flex-wrap items-center space-x-4">
                        <div className="flex items-center w-full md:w-auto lg:flex-grow">
                            <FiMapPin className="text-2xl text-gray-400 mr-2 mt-6" />
                            <div className="flex-1">
                                <label className="block mb-1 text-gray-700">Your Location</label>
                                <input
                                    type="text"
                                    className="form-control w-full px-4 py-2 border rounded-md"
                                    placeholder="America"
                                />
                            </div>
                        </div>
                        <div className="flex items-center w-full md:w-auto lg:flex-grow">
                            <FiSearch className="text-2xl text-gray-400 mr-2 mt-6" />
                            <div className="flex-1">
                                <label className="block mb-1 text-gray-700">What are you looking for?</label>
                                <input
                                    type="text"
                                    className="form-control w-full px-4 py-2 border rounded-md"
                                    placeholder="Car Repair Services"
                                />
                            </div>
                        </div>
                        <div className="w-full md:w-auto lg:w-auto flex items-center mt-6 md:mt-8 lg:mt-0">
                            <button type="submit" className="bg-indigo-600 text-white px-6 py-3 rounded-md shadow-lg hover:bg-indigo-700 transition duration-300">
                                Search
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default HeroSectionSeven;
