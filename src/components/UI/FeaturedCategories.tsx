'use client';

import React from 'react';
import { usePathname } from 'next/navigation';

const FeaturedCategories = () => {
    const pathname = usePathname();

    const categories = [
        {
            name: 'Construction',
            icon: 'https://truelysell.dreamstechnologies.com/html/template/assets/img/icons/feature-icon-01.svg',
            img: 'https://truelysell.dreamstechnologies.com/html/template/assets/img/services/service-02.jpg',
            services: 34,
        },
        {
            name: 'Car Wash',
            icon: 'https://truelysell.dreamstechnologies.com/html/template/assets/img/icons/feature-icon-02.svg',
            img: 'https://truelysell.dreamstechnologies.com/html/template/assets/img/feature.jpg',
            services: 56,
        },
        {
            name: 'Electrical',
            icon: 'https://truelysell.dreamstechnologies.com/html/template/assets/img/icons/feature-icon-03.svg',
            img: 'https://truelysell.dreamstechnologies.com/html/template/assets/img/services/service-01.jpg',
            services: 45,
        },
        {
            name: 'Cleaning',
            icon: 'https://truelysell.dreamstechnologies.com/html/template/assets/img/icons/feature-icon-04.svg',
            img: 'https://truelysell.dreamstechnologies.com/html/template/assets/img/services/service-09.jpg',
            services: 78,
        },
        {
            name: 'Interior',
            icon: 'https://truelysell.dreamstechnologies.com/html/template/assets/img/icons/feature-icon-05.svg',
            img: 'https://truelysell.dreamstechnologies.com/html/template/assets/img/services/service-07.jpg',
            services: 64,
        },
        {
            name: 'Carpentry',
            icon: 'https://truelysell.dreamstechnologies.com/html/template/assets/img/icons/feature-icon-06.svg',
            img: 'https://truelysell.dreamstechnologies.com/html/template/assets/img/services/service-03.jpg',
            services: 23,
        },
        {
            name: 'Computer',
            icon: 'https://truelysell.dreamstechnologies.com/html/template/assets/img/icons/feature-icon-07.svg',
            img: 'https://truelysell.dreamstechnologies.com/html/template/assets/img/services/service-06.jpg',
            services: 54,
        },
        {
            name: 'Plumbing',
            icon: 'https://truelysell.dreamstechnologies.com/html/template/assets/img/icons/feature-icon-08.svg',
            img: 'https://truelysell.dreamstechnologies.com/html/template/assets/img/services/service-11.jpg',
            services: 67,
        },
    ];

    return (
        <div className={`mx-auto px-6 md:px-[7rem] ${pathname === '/categories' ? 'bg-white': 'bg-[#f8fcfd]'}  py-14`}>
            {pathname !== '/categories' && (
                <div className="section-heading mb-8">
                    <div className="flex flex-wrap items-center">
                        <div className="w-full md:w-1/2" data-aos="fade-up">
                            <h2 className="text-4xl font-bold text-indigo-900 leading-tight">Featured Categories</h2>
                            <p className="text-gray-400 mt-4">What do you need to find?</p>
                        </div>
                        <div className="w-full md:w-1/2 text-right" data-aos="fade-up">
                            <a href="categories.html" className="bg-[#4f46e5] inline-flex items-center text-white px-4 py-2 rounded">
                                View All
                                <i className="ml-2 feather-arrow-right-circle"></i>
                            </a>
                        </div>
                    </div>
                </div>
            )}
            <div className={`grid  ${pathname === '/categories' ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3' : 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'} gap-2 md:gap-2 lg:gap-4`}>
                {categories.map((category, index) => (
                    <div key={index} className="relative  rounded flex items-center justify-center overflow-hidden group bg-white p-2">
                        {pathname === '/categories' ? (
                        <div className="relative rounded-lg overflow-hidden border hover:shadow-md transition-shadow duration-300">
                        <a href="service-details.html" className="block">
                            <img src={category.img} alt={category.name} className="  md:w-[350px]  transition-transform duration-300 group-hover:scale-110 md:h-[250px]" />
                        </a>
                        <div className="p-4 flex items-center justify-between">
                            <div className="flex items-center ">
                            <a href="service-details.html" className="  rounded transition flex flex-col items-center justify-center text-center ">
                                <div className="">
                                    <span className="inline-block p-3 bg-gray-100 rounded-full mr-4">
                                        <img src={category.icon} alt="icon" />
                                    </span>
                                </div>
                               
                            </a>
                                <div>
                                    <h5 className="text-lg font-bold text-gray-800">{category.name}</h5>
                                </div>
                            </div>
                            <div className="text-gray-500">
                                <p className="text-sm">{category.services} Services</p>
                            </div>
                        </div>
                    </div>
                        ) : (
                            <a href="service-details.html" className="feature-box p-4 rounded transition flex flex-col items-center justify-center text-center z-10">
                                <div className="mb-4">
                                    <span className="inline-block p-5 bg-gray-100 rounded-full">
                                        <img src={category.icon} alt="icon" />
                                    </span>
                                </div>
                                <h5 className="text-lg font-bold mb-4 text-black group-hover:text-white">{category.name}</h5>
                            </a>
                        )}
                        {pathname !== '/categories' && (
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0">
                                <img src={category.img} alt={category.name} className="w-full h-full object-cover transform translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeaturedCategories;
