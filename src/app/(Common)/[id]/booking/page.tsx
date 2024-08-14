"use client";
import BookingPage from "@/components/pages/BookingPage";
import Stepper from "@/components/UI/Stepper";
import React, { useState } from "react";


const ServiceBooking = () => {
  const [page, setPage] = useState(1);

  const steps = [
    {
      title: "Appointment",
      description: "Choose time & date for the service",
    },
    {
      title: "Payment",
      description: "Confirm Payment",
    },
    {
      title: "Done",
      description: "Completion of Booking",
    },
  ];

  return (
    <div className="max-w-full px-12 py-6  md:px-[8rem]">
      {/* Stepper Navigation */}
      <Stepper steps={steps} currentStep={page} onStepClick={setPage} />

      {/* Page Content */}
      {page === 1 && (
        <div>
         <BookingPage onNext={() => setPage(2)}/>
         
          <button
            onClick={() => setPage(2)}
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
              onClick={() => setPage(1)}
              className="bg-gray-500 text-white py-2 px-4 rounded mr-2"
            >
              Back
            </button>
            <button
              onClick={() => setPage(3)}
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
              onClick={() => setPage(2)}
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
