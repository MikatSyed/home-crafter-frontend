'use client';
import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaCheckCircle, FaStar } from 'react-icons/fa';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

const TopProviders = () => {
    const pathname = usePathname();
    const [currentPage, setCurrentPage] = useState(1);
    const providersPerPage = 8;

    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    const providers = [
        {
            name: 'John Smith',
            role: 'Electrician',
            img: 'https://truelysell.dreamstechnologies.com/html/template/assets/img/provider/provider-11.jpg',
            rate: 4.8,
            price: '$20.00',
            link: 'provider-details.html'
        },
        {
            name: 'Michael',
            role: 'Carpenter',
            img: 'https://truelysell.dreamstechnologies.com/html/template/assets/img/provider/provider-12.jpg',
            rate: 4.8,
            price: '$50.00',
            link: 'provider-details.html'
        },
        {
            name: 'Antoinette',
            role: 'Cleaner',
            img: 'https://truelysell.dreamstechnologies.com/html/template/assets/img/provider/provider-13.jpg',
            rate: 4.8,
            price: '$25.00',
            link: 'provider-details.html'
        },
        {
            name: 'Thompson',
            role: 'Mechanic',
            img: 'https://truelysell.dreamstechnologies.com/html/template/assets/img/provider/provider-14.jpg',
            rate: 4.8,
            price: '$25.00',
            link: 'provider-details.html'
        },
        {
            name: 'Thompson',
            role: 'Mechanic',
            img: 'https://truelysell.dreamstechnologies.com/html/template/assets/img/provider/provider-14.jpg',
            rate: 4.8,
            price: '$25.00',
            link: 'provider-details.html'
        },
        {
            name: 'Thompson',
            role: 'Mechanic',
            img: 'https://truelysell.dreamstechnologies.com/html/template/assets/img/provider/provider-14.jpg',
            rate: 4.8,
            price: '$25.00',
            link: 'provider-details.html'
        },
        {
            name: 'Thompson',
            role: 'Mechanic',
            img: 'https://truelysell.dreamstechnologies.com/html/template/assets/img/provider/provider-14.jpg',
            rate: 4.8,
            price: '$25.00',
            link: 'provider-details.html'
        },
        {
            name: 'Thompson',
            role: 'Mechanic',
            img: 'https://truelysell.dreamstechnologies.com/html/template/assets/img/provider/provider-14.jpg',
            rate: 4.8,
            price: '$25.00',
            link: 'provider-details.html'
        },
        {
            name: 'Thompson',
            role: 'Mechanic',
            img: 'https://truelysell.dreamstechnologies.com/html/template/assets/img/provider/provider-14.jpg',
            rate: 4.8,
            price: '$25.00',
            link: 'provider-details.html'
        },
        {
            name: 'Thompson',
            role: 'Mechanic',
            img: 'https://truelysell.dreamstechnologies.com/html/template/assets/img/provider/provider-14.jpg',
            rate: 4.8,
            price: '$25.00',
            link: 'provider-details.html'
        },
        {
            name: 'Thompson',
            role: 'Mechanic',
            img: 'https://truelysell.dreamstechnologies.com/html/template/assets/img/provider/provider-14.jpg',
            rate: 4.8,
            price: '$25.00',
            link: 'provider-details.html'
        },
        {
            name: 'Thompson',
            role: 'Mechanic',
            img: 'https://truelysell.dreamstechnologies.com/html/template/assets/img/provider/provider-14.jpg',
            rate: 4.8,
            price: '$25.00',
            link: 'provider-details.html'
        },
        // Add more providers as needed
    ];

    // Calculate the displayed providers based on the current page and pathname
    const displayedProviders = pathname === '/' 
        ? providers.slice(-4) 
        : providers.slice((currentPage - 1) * providersPerPage, currentPage * providersPerPage);

    // Calculate the total number of pages for pagination
    const totalPages = Math.ceil(providers.length / providersPerPage);

    return (
        <section className="mx-auto px-6 md:px-[6rem] bg-white py-14">
            <div className="container mx-auto px-6">
                {pathname !== '/providers' && (
                    <div className="flex flex-wrap items-center mb-8">
                        <div className="w-full md:w-1/2 mb-6 md:mb-0" data-aos="fade-up">
                            <div className="">
                                <h2 className="text-4xl font-bold text-indigo-900 leading-tight">Top Providers</h2>
                                <p className="text-gray-300">Sed ut perspiciatis unde omnis iste natus error</p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 text-right" data-aos="fade-up">
                            <a href="categories.html" className="inline-flex items-center bg-[#4f46e5] text-white px-4 py-2 rounded">
                                View All
                                <i className="ml-2 feather-arrow-right-circle"></i>
                            </a>
                        </div>
                    </div>
                )}
                <div className="flex flex-wrap -mx-4" data-aos="fade-up">
                    {displayedProviders.map((provider, index) => (
                        <div key={index} className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
                            <div className="providerset provider-box bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
                                <div className="providerset-img">
                                    <a href={provider.link}>
                                        <img src={provider.img} alt="Provider" className="w-full h-48 object-cover" />
                                    </a>
                                </div>
                                <div className="providerset-content p-4 flex flex-col justify-between flex-1">
                                    <div className="providerset-price mb-4">
                                        <div className="providerset-name flex items-center">
                                            <h4 className="text-xl font-semibold flex items-center">
                                                <a href={provider.link} className="hover:underline">{provider.name}</a>
                                                <FaCheckCircle className="text-green-500 ml-2" />
                                            </h4>
                                            <span className="text-gray-500 ml-2">{provider.role}</span>
                                        </div>
                                        <div className="providerset-prices mt-2">
                                            <h6 className="text-lg font-bold">{provider.price}<span className="text-sm text-gray-500">/hr</span></h6>
                                        </div>
                                    </div>
                                    <div className="provider-rating flex justify-between items-center mt-auto">
                                        <div className="rate flex items-center">
                                            <FaStar className="text-yellow-500 mr-1" /><span className="text-gray-700">{provider.rate}</span>
                                        </div>
                                        <a href={provider.link} className="bg-[#4f46e5] text-white px-4 py-2 rounded hover:bg-pink-600 transition-colors duration-300">View Details</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {pathname === '/providers' && (
                <div className="flex justify-center mt-8">
            
                <button
                  className={`inline-flex items-center px-4 py-2 mx-1 rounded-lg transition-colors ${
                    currentPage === 1 ? ' text-gray-500 cursor-not-allowed text-sm' : 'text-gray-700 hover:from-blue-500 hover:to-blue-700 text-sm font-bold hover:text-[#4f46e5]'
                  }`}
                  onClick={() => setCurrentPage(currentPage - 1)}
                  disabled={currentPage === 1}
                >
               <FiArrowLeft className="mr-1" />   PREV
                </button>
            
                {Array.from({ length: totalPages }, (_, index) => (
                  <button
                    key={index}
                    className={`px-4 py-2 mx-1 rounded-lg transition-colors ${
                      currentPage === index + 1
                        ? 'bg-[#4f46e5] text-white '
                        : 'bg-[#f8fcfd] border border-gray-300 text-gray-800 hover:bg-[#4f46e5] text-sm hover:text-white'
                    }`}
                    onClick={() => setCurrentPage(index + 1)}
                  >
                    {index + 1}
                  </button>
                ))}
              
              
              <button
  className={`inline-flex items-center px-4 py-2 mx-1 rounded-lg transition-colors ${
    currentPage === totalPages
      ? ' text-gray-500 cursor-not-allowed text-sm'
      : 'text-gray-700 text-sm font-bold hover:text-[#4f46e5]'
  }`}
  onClick={() => setCurrentPage(currentPage + 1)}
  disabled={currentPage === totalPages}
>
  NEXT <FiArrowRight className="ml-1" />
</button>
              </div>
              
                 
                )}
            </div>
        </section>
    );
};

export default TopProviders;
