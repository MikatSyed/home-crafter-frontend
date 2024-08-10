"use client";
import React, { useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";

const ServiceBooking = () => {
  const [page, setPage] = useState(1);

  const goToPage = (pageNumber) => setPage(pageNumber);

  return (
    <div className="max-w-full px-12 py-6 text-center md:px-[8rem]">
      {/* Navigation Buttons */}
      <div className="flex justify-center mb-6 space-x-4">
        <button
          onClick={() => goToPage(1)}
          className={`flex items-center p-4 w-full ${
            page === 1 ? "border-b-4 border-[#4c40ed]" : "border-b-4 border-gray-200 opacity-50"
          }`}
        >
          <div
            className={`flex items-center justify-center w-12 h-12 rounded-full ${
              page === 1 ? "bg-[#4c40ed]" : "bg-gray-300"
            }`}
          >
            <FaCalendarAlt
              className={`${
                page === 1 ? "text-white" : "text-gray-500"
              } text-xl`}
            />
          </div>
          <div className="ml-4 text-left">
            <h1
              className="text-lg font-semibold"
            >
              Appointment
            </h1>
            <p
                className="text-sm text-gray-500"
            >
              Choose time & date for the service
            </p>
          </div>
        </button>

        <button
          onClick={() => goToPage(2)}
          className={`flex items-center p-4 w-full ${
            page === 2 ? "border-b-4 border-[#4c40ed]" : "border-b-4 border-gray-200 opacity-50"
          }`}
        >
          <div
            className={`flex items-center justify-center w-12 h-12 rounded-full ${
              page === 2 ? "bg-[#4c40ed]" : "bg-gray-300"
            }`}
          >
            <FaCalendarAlt
              className={`${
                page === 2 ? "text-white" : "text-gray-500"
              } text-xl`}
            />
          </div>
          <div className="ml-4 text-left">
            <h1
               className="text-lg font-semibold"
            >
              Payment
            </h1>
            <p
            className="text-sm text-gray-500"
            >
              Confirm Payment
            </p>
          </div>
        </button>

        <button
          onClick={() => goToPage(3)}
          className={`flex items-center p-4 w-full ${
            page === 3 ? "border-b-4 border-[#4c40ed]" : "border-b-4 border-gray-200 opacity-50"
          }`}
        >
          <div
            className={`flex items-center justify-center w-12 h-12 rounded-full ${
              page === 3 ? "bg-[#4c40ed]" : "bg-gray-300"
            }`}
          >
            <FaCalendarAlt
              className={`${
                page === 3 ? "text-white" : "text-gray-500"
              } text-xl`}
            />
          </div>
          <div className="ml-4 text-left">
            <h1
            className="text-lg font-semibold"
            >
              Done
            </h1>
            <p
           className="text-sm text-gray-500"
            >
              Completion of Booking
            </p>
          </div>
        </button>
      </div>

      {/* Page Content */}
      {page === 1 && (
        <div>
          <h1 className="text-2xl font-bold mb-4">Appointment</h1>
          <p className="text-gray-600 mb-6">
            Choose time & date for the service
          </p>
          <input
            type="date"
            className="block w-full p-3 border border-gray-300 rounded mb-4"
          />
          <input
            type="time"
            className="block w-full p-3 border border-gray-300 rounded mb-6"
          />
          <button
            onClick={() => goToPage(2)}
            className="bg-blue-500 text-white py-2 px-4 rounded"
          >
            Next
          </button>
        </div>
      )}

      {page === 2 && (
        <div>
          <h1 className="text-2xl font-bold mb-4">Payment</h1>
          <p className="text-gray-600 mb-6">Select Payment Gateway</p>
          <select className="block w-full p-3 border border-gray-300 rounded mb-6">
            <option value="credit_card">Credit Card</option>
            <option value="paypal">PayPal</option>
            <option value="net_banking">Net Banking</option>
          </select>
          <div>
            <button
              onClick={() => goToPage(1)}
              className="bg-gray-500 text-white py-2 px-4 rounded mr-2"
            >
              Back
            </button>
            <button
              onClick={() => goToPage(3)}
              className="bg-blue-500 text-white py-2 px-4 rounded"
            >
              Next
            </button>
          </div>
        </div>
      )}

      {page === 3 && (
        <div>
          <h1 className="text-2xl font-bold mb-4">Confirmation</h1>
          <p className="text-gray-600 mb-6">Confirm and Complete Payment</p>
          <div className="bg-gray-100 p-4 rounded-lg mb-6">
            <p className="mb-2">
              <strong>Service:</strong> Example Service
            </p>
            <p className="mb-2">
              <strong>Date & Time:</strong> 10/10/2024, 14:00
            </p>
            <p>
              <strong>Payment Method:</strong> Credit Card
            </p>
          </div>
          <div>
            <button
              onClick={() => goToPage(2)}
              className="bg-gray-500 text-white py-2 px-4 rounded mr-2"
            >
              Back
            </button>
            <button className="bg-blue-500 text-white py-2 px-4 rounded">
              Complete Payment
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceBooking;
