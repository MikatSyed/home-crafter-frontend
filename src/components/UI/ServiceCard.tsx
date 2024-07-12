"use client";
import React from 'react';
import { FaStar, FaMapPin, FaCheckCircle, FaCar, FaWrench, FaClipboardCheck } from 'react-icons/fa';

const services = [
  {
    name: 'House Cleaning',
    location: 'Alabama, USA',
    price: '$500.75',
    image: 'https://truelysell.dreamstechnologies.com/html/template/assets/img/services/service-07.jpg',
  },
  {
    name: 'Air Conditioner Service',
    location: 'Illinois, USA',
    price: '$500.75',
    image: 'https://truelysell.dreamstechnologies.com/html/template/assets/img/services/service-16.jpg',
  },
  {
    name: 'Interior Designing',
    location: 'California, USA',
    price: '$500.75',
    image: 'https://truelysell.dreamstechnologies.com/html/template/assets/img/services/service-07.jpg',
  },
  {
    name: 'Wooden Carpentry Work',
    location: 'Alabama, USA',
    price: '$354.45',
    image: 'https://truelysell.dreamstechnologies.com/html/template/assets/img/services/service-03.jpg',
  },
];

const availability = [
  { day: 'Monday', time: '9:30 AM - 7:00 PM' },
  { day: 'Tuesday', time: '9:30 AM - 7:00 PM' },
  { day: 'Wednesday', time: '9:30 AM - 7:00 PM' },
  { day: 'Thursday', time: '9:30 AM - 7:00 PM' },
  { day: 'Friday', time: '9:30 AM - 7:00 PM' },
  { day: 'Saturday', time: '9:30 AM - 7:00 PM' },
  { day: 'Sunday', time: 'Closed', closed: true },
];

const ServiceCard = () => {
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

      <div className="mb-8">
        <h5 className="text-xl font-semibold py-4">Additional Service</h5>
        <ul>
          {services.map((service, index) => (
            <li key={index} className="flex justify-between items-center mb-4 p-4 rounded-lg bg-[#f8fcfd]">
              <div className="flex items-center">
                <label className="custom_check mr-2">
                  <input type="checkbox" name="additionalService" className="h-4 w-4" />
                  <span className="checkmark"></span>
                </label>
                <div className="flex items-center">
                  <img src={service.image} className="w-12 h-12 rounded mr-2" alt="service" />
                  <div className="add-serv-info">
                    <h6 className="text-sm font-medium">{service.name}</h6>
                    <p className="text-gray-600 text-xs flex items-center"><FaMapPin className="mr-1" />{service.location}</p>
                  </div>
                </div>
              </div>
              <div className="add-serv-amt">
                <h6 className="text-sm font-medium">{service.price}</h6>
              </div>
            </li>
          ))}
        </ul>
      </div>

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
        <a href="booking.html" className="btn bg-blue-600 text-white px-4 py-3 rounded w-full block text-center">Book Service</a>
      </div>
    </div>
  );
};

export default ServiceCard;
