import React from 'react';
import {  FaStar } from 'react-icons/fa';
import {  FiMail, FiMapPin, FiPhone } from 'react-icons/fi';// Assuming you use a calendar library
import 'react-calendar/dist/Calendar.css'; // Import default styles
 // Import the calendar styles
import { useState } from 'react';
import Calendar from 'react-calendar';
import Appointment from '../UI/Appointment';


const BookingPage = () => {
 

    return (
        <div className="py-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex flex-col md:flex-row">
                    <div className="flex-shrink-0">
                        <img src="https://truelysell.dreamstechnologies.com/html/template/assets/img/booking.jpg" className="img-fluid w-full md:w-36 h-auto md:h-32 rounded-md" alt="Demo Image" />
                    </div>
                    <div className="ml-0 md:ml-3 mt-4 md:mt-0">
                        <p className="bg-[#f8fcfd] text-blue-600 py-2 px-3 text-sm inline-block">Car Wash</p>
                        <h6 className="text-xl font-semibold my-2">Car Repair Services</h6>
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <img
                                    src="/assets/avatar-02.jpg"
                                    className="img-fluid rounded-full w-12 h-12"
                                    alt="img"
                                />
                            </div>
                            <div className="ml-3">
                                <h6 className="text-sm font-semibold mb-2">Thomas Herzberg</h6>
                                <div className="text-yellow-500 text-xs">
                                    <FaStar className="inline" />
                                    <span className="text-gray-700">4.9</span>
                                    <span className="text-gray-500">(255 reviews)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="px-4 md:px-10">
                    <div className="flex items-start">
                        <div>
                            <span className="text-md text-gray-700 block p-4 rounded-full bg-[#f8fcfd]">
                                <FiMapPin />
                            </span>
                        </div>
                        <div className="ml-3">
                            <h6 className="text-lg font-semibold mb-2">Service Amount</h6>
                            <p className="text-sm text-gray-500 font-normal">$150.00</p>
                        </div>
                    </div>
                    <div className="flex items-start mt-6">
                        <div>
                            <span className="text-md text-gray-700 block p-4 rounded-full bg-[#f8fcfd]">
                                <FiPhone />
                            </span>
                        </div>
                        <div className="ml-3">
                            <h6 className="text-lg font-semibold mb-2">Phone</h6>
                            <p className="text-sm text-gray-500 font-normal">+1 888 888 8888</p>
                        </div>
                    </div>
                </div>

                <div className="px-4 md:px-10">
                    <div className="flex items-start">
                        <div>
                            <span className="text-md text-gray-700 block p-4 rounded-full bg-[#f8fcfd]">
                                <FiMapPin />
                            </span>
                        </div>
                        <div className="ml-3">
                            <h6 className="text-lg font-semibold mb-2">Address</h6>
                            <p className="text-sm text-gray-500 font-normal">Hanover, Maryland</p>
                        </div>
                    </div>
                    <div className="flex items-start mt-6">
                        <div>
                            <span className="text-md text-gray-700 block p-4 rounded-full bg-[#f8fcfd]">
                                <FiMail />
                            </span>
                        </div>
                        <div className="ml-3">
                            <h6 className="text-lg font-semibold mb-2">Email</h6>
                            <p className="text-sm text-gray-500 font-normal">demo@gmail.com</p>
                        </div>
                    </div>
                </div>



            </div>
        
            <Appointment  />
        </div>
    );
};

export default BookingPage;
