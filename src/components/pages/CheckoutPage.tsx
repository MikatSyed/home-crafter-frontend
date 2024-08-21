"use client"

import { useRouter } from 'next/navigation';
import React from 'react';
import Shipping from '../UI/Shipping';

const CheckoutPage = () => {
    const {push} = useRouter()
    const handleCheckOut = ()=>{
        push("/booking-done")
    }
    
    return (
        <div >
        <div className="flex flex-col md:flex-row">
          {/* Checkout Form Section */}
          <div className="w-full  mt-6">
           <Shipping/>

          </div>




      
          {/* Booking Summary Section */}
          <div className="w-full rounded-lg mt-6">
                <h2 className="text-xl font-bold text-gray-600 pb-4">Booking Summary</h2>
            <div className="w-full bg-[#f8fcfd]  rounded-lg overflow-hidden">
             
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <img
                    src="https://truelysell.dreamstechnologies.com/html/template/assets/img/booking.jpg"
                    alt="Car Wash"
                    className="w-12 h-12 mr-4"
                  />
                  <div>
                    <p className="text-gray-800 text-xl font-semibold">Car Wash</p>
                    <p className="text-gray-600">Car Repair Services</p>
                  </div>
                </div>
      
                <div className="border-t border-gray-200 pt-4 mb-4">
                  <div className="flex justify-between mb-2">
                    <p className="text-gray-700">Rating</p>
                    <p className="text-gray-700 font-semibold">4.9 (255 reviews)</p>
                  </div>
                  <div className="flex justify-between mb-2">
                    <p className="text-gray-700">Location</p>
                    <p className="text-gray-700 font-semibold">Alabama, USA</p>
                  </div>
                  <div className="flex justify-between mb-2">
                    <p className="text-gray-700">Date</p>
                    <p className="text-gray-700 font-semibold">07/09/2023</p>
                  </div>
                  <div className="flex justify-between mb-4">
                    <p className="text-gray-700">Time</p>
                    <p className="text-gray-700 font-semibold">12:30 PM - 01:00 PM</p>
                  </div>
                </div>
      
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between mb-4">
                    <p className="text-gray-700">Service Provider</p>
                    <p className="text-gray-700 font-semibold">Thomas Herzberg</p>
                  </div>
                  <div className="flex justify-between mb-4">
                    <p className="text-gray-700">Subtotal</p>
                    <p className="text-gray-700 font-semibold">$150.00</p>
                  </div>
                  <div className="flex justify-between mb-4">
                    <p className="text-gray-700">Coupon Discount</p>
                    <p className="text-green-600 font-semibold">- $5.00</p>
                  </div>
                  <div className="flex justify-between mb-4">
                    <p className="text-gray-700">Service Charges</p>
                    <p className="text-gray-700 font-semibold">$3.00</p>
                  </div>
                  <div className="flex justify-between text-lg font-semibold mt-4">
                    <p className="text-gray-800">Total</p>
                    <p className="text-gray-800">$148.00</p>
                  </div>
                </div>
      
                <div className="flex mt-2">
                  <button
                    onClick={handleCheckOut}
                    className="flex-1 bg-indigo-600 text-white hover:text-indigo-600 border border-indigo-600 py-3 rounded-lg hover:bg-white transition-colors duration-300 mr-4"
                  >
                    Proceed to Pay $120
                  </button>
                  <button
                    className="flex-1 bg-white text-indigo-600 hover:text-white border border-indigo-600 py-3 rounded-lg hover:bg-indigo-600 transition-colors duration-300"
                  >
                    Skip
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    );
};

export default CheckoutPage;