"use client";
import Link from 'next/link';
import React from 'react';
import { FaStar, FaMapPin, FaCheckCircle, FaCar, FaWrench, FaClipboardCheck } from 'react-icons/fa';
import AdditionalService from './AdditionalService';


const availability = [
  { day: 'Monday', time: '9:30 AM - 7:00 PM' },
  { day: 'Tuesday', time: '9:30 AM - 7:00 PM' },
  { day: 'Wednesday', time: '9:30 AM - 7:00 PM' },
  { day: 'Thursday', time: '9:30 AM - 7:00 PM' },
  { day: 'Friday', time: '9:30 AM - 7:00 PM' },
  { day: 'Saturday', time: '9:30 AM - 7:00 PM' },
  { day: 'Sunday', time: 'Closed', closed: true },
];

const ServiceCard = ({id}:any) => {


  return (
    <div className="p-4 border rounded-lg bg-white">
      <div className="p-3 rounded-lg mb-8">
        <div className="flex justify-between items-center mb-2">
          <div>
            <h5 className="text-2xl font-bold">$150<span className="text-gray-500 line-through ml-2 text-xl">$170</span></h5>
            <p className="flex items-center text-yellow-500 text-sm">
              <FaStar /><span className="ml-1 text-black">4.9</span> 
              <span className="text-gray-600 ml-1">(255 reviews)</span>
            </p>
          </div>
          <div className="flex items-center">
            <img src="/assets/avatar-02.jpg" className="w-12 h-12 rounded-full shadow-md" alt="Author" />
          </div>
        </div>
      </div>

      <div className="mb-8 p-3 bg-[#f8fcfd] rounded-lg">
        <h5 className="text-xl font-semibold py-4">Available Service Packages</h5>
        <ul className="list-inside">
          <li className="flex items-center py-2"><FaCar className="mr-2 text-blue-500" />Full car wash and clean</li>
          <li className="flex items-center py-2"><FaWrench className="mr-2 text-blue-500" />Auto Electrical</li>
          <li className="flex items-center py-2"><FaClipboardCheck className="mr-2 text-blue-500" />Pre Purchase Inspection</li>
          <li className="flex items-center py-2"><FaClipboardCheck className="mr-2 text-blue-500" />Pre Purchase Inspection</li>
        </ul>
      </div>

     <AdditionalService serviceId={id} />
      <div className="card card-available mb-8 p-6 bg-[#f8fcfd] rounded-lg">
        <h5 className="text-xl font-semibold py-4">Service Availability</h5>
        <ul>
          {availability.map((item, index) => (
            <li key={index} className="flex justify-between py-2">
              <span>{item.day}</span>
              <span className={item.closed ? "text-red-500" : ""}>{item.time}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="map-grid mb-8 p-6 bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-lg shadow-md">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6509170.989457427!2d-123.80081967108484!3d37.192957227641294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb9fe5f285e3d%3A0x8b5109a227086f55!2sCalifornia%2C%20USA!5e0!3m2!1sen!2sin!4v1669181581381!5m2!1sen!2sin" 
          className="w-full h-64 border-0 rounded-md" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade">
        </iframe>
      </div>

      <div>
        <Link href={`/${id}/booking`} className=" bg-[#4c40ed] text-white px-4 py-3 rounded w-full block text-center">Book Service</Link>
      </div>
    </div>
  );
};

export default ServiceCard;
