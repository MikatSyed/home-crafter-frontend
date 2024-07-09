"use client"
import Image from 'next/image';
import React, { useEffect } from 'react';

import { FaHeart, FaStar } from 'react-icons/fa';
import { FaRegHeart } from 'react-icons/fa6';
import { FiMapPin } from 'react-icons/fi';

const FeaturedServices = () => {

    const categories = [
        {
            name: 'Construction',
            category: 'Cleaning',
            img: 'https://truelysell.dreamstechnologies.com/html/template/assets/img/services/service-02.jpg',
            provider: 'Jeny Doe',
            providerImg: 'https://truelysell.dreamstechnologies.com/html/template/assets/img/profiles/avatar-01.jpg',
            location: 'New Jersey, USA',
            rating: 4.9,
            price: '$25.00',
            oldPrice: '$35.00',
            service: 'Electric Panel Repairing Service'
        },
        {
            name: 'Car Wash',
            category: 'Car Wash',
            img: 'https://truelysell.dreamstechnologies.com/html/template/assets/img/feature.jpg',
            provider: 'John Doe',
            providerImg: 'https://truelysell.dreamstechnologies.com/html/template/assets/img/profiles/avatar-02.jpg',
            location: 'Los Angeles, USA',
            rating: 4.8,
            price: '$15.00',
            oldPrice: '$20.00',
            service: 'Complete Car Wash'
        },
        {
            name: 'Electrical',
            category: 'Electrical',
            img: 'https://truelysell.dreamstechnologies.com/html/template/assets/img/services/service-01.jpg',
            provider: 'Emily Clark',
            providerImg: 'https://truelysell.dreamstechnologies.com/html/template/assets/img/profiles/avatar-03.jpg',
            location: 'Chicago, USA',
            rating: 4.9,
            price: '$30.00',
            oldPrice: '$40.00',
            service: 'Home Electrical Service'
        },
        // Add more categories as needed
    ];

    return (
        <div className="mx-auto px-6 md:px-[7rem] bg-white py-14">
            <div className="section-heading mb-8">
                <div className="flex flex-wrap items-center">
                    <div className="w-full md:w-1/2" data-aos="fade-up">
                        <h2 className="text-4xl font-bold text-indigo-900 leading-tight">Featured Services</h2>
                        <p className="text-gray-400 mt-4">Explore the greatest of our services. You won’t be disappointed</p>
                    </div>
                    <div className="w-full md:w-1/2 text-right" data-aos="fade-up">
                        <a href="categories.html" className="bg-[#4f46e5] text-white px-4 py-2 rounded">
                            View All
                            <i className="ml-2 feather-arrow-right-circle"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {categories.map((category, index) => (
                    <div key={index} className="service-widget shadow-md rounded-md" data-aos="fade-up">
                        <div className=" relative">
                            <a href="service-details.html">
                                <Image className="img-fluid  w-full rounded-md " alt="Service Image" src={category.img} height={218} width={328}/>
                            </a>
                            <div className="fav-item absolute top-0 left-0 p-4 flex justify-between w-full">
                                
                                    <span className="text-sm bg-white p-2 hover:text-white text-[#665cf0]  hover:bg-[#665cf0] rounded">{category.category}</span>
                              
                              
                                  <div className='border rounded-full text-black hover:text-white bg-white  p-2 hover:bg-blue-600 '>
                                  <FaRegHeart />
                                  </div>
                              
                            </div>
                            <div className="item-info absolute bottom-0 right-0 p-4 flex items-center justify-start w-full">
                                <a href="providers.html" className="flex items-center">
                                    <img src={category.providerImg} className="avatar w-10 h-10 rounded-full" alt="User" />
                                    <span className="ml-2 text-white">{category.provider}</span>
                                </a>
                            </div>
                        </div>
                        <div className="service-content p-4">
                            <h3 className="title text-xl font-bold">
                                <a href="service-details.html">{category.service}</a>
                            </h3>
                            <div className="flex items-center justify-between mt-2">
                                <p className="text-gray-500 flex items-center">
                                    <FiMapPin className="mr-1" /> {category.location}
                                </p>
                                <p className="flex items-center">
                                    <span className="rate ml-4 flex items-center">
                                        <FaStar className="filled text-yellow-500 mr-1" /> {category.rating}
                                    </span>
                                </p>
                            </div>
                            <div className="mt-4 flex items-center justify-between">
                                <h6 className="text-lg font-bold">
                                    {category.price} <span className="line-through text-gray-500 ml-2">{category.oldPrice}</span>
                                </h6>
                                <a href="service-details.html" className="bg-[#f7f7ff] text-[#6240ed] border border-transparent hover:border-[#6240ed] px-4 py-2 rounded text-sm font-semibold hover:bg-white">Book Now</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeaturedServices;
