"use client";
import React, { useState } from 'react';
import { BsTrash } from 'react-icons/bs'; // Import icons

interface Payment {
  id: string;
  amount: number;
  transactionId: string;
  status: string;
  booking: {
    service: {
      serviceName: string;
    };
    user: {
      fName: string;
      lName: string;
    };
  };
  createdAt: string;
}

const paymentsData: Payment[] = [
  {
    id: '1',
    amount: 150,
    transactionId: 'TXN12345',
    status: 'Confirmed',
    booking: {
      service: {
        serviceName: '',
      },
      user: {
        fName: 'John',
        lName: 'Doe',
      },
    },
    createdAt: '2024-09-09T12:00:00Z',
  },
  {
    id: '2',
    amount: 200,
    transactionId: 'TXN67890',
    status: 'Pending',
    booking: {
      service: {
        serviceName: '',
      },
      user: {
        fName: 'John',
        lName: 'Doe',
      },
    },
    createdAt: '2024-09-08T12:00:00Z',
  },
  // Add more static payment data here...
];

const PaymentHistory: React.FC = () => {
  const handleDeleteClick = (id: string) => {
    // Handle delete logic here
    alert(`Delete payment with id: ${id}`);
  };

  return (
    <div className="px-4 py-7 sm:px-6">
      <h2 className="text-2xl font-semibold text-[#2a2a3d] mb-8">Payment History</h2>
      <div className="space-y-4">
        {paymentsData.map((payment: Payment, index: number) => (
          <div
            key={payment.id}
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between bg-gray-50 px-4 py-6 rounded-lg space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 w-full">
              {/* User Image and Name */}
              <div className="flex items-center space-x-4 w-full sm:w-auto">
                <img
                  src={`https://via.placeholder.com/40`} // Replace with the actual user photo source
                  alt={`${payment.booking.user.fName} ${payment.booking.user.lName}`}
                  className="w-10 h-10 rounded-full"
                />
                <div className="flex flex-col">
                  <p className="text-gray-800 text-sm sm:text-xs uppercase font-semibold">
                    {payment.booking.user.fName} {payment.booking.user.lName}
                  </p>
                  <span className="text-gray-500 text-sm">syed@gmail.com</span>
                </div>
              </div>

              {/* Transaction ID */}
              <div className="flex flex-col px-4 w-full sm:w-auto">
                <span className="text-gray-500 text-xs uppercase font-semibold">Transaction ID</span>
                <span className="text-gray-800 font-medium">{payment.transactionId}</span>
              </div>

              {/* Service Name */}
              <div className="flex flex-col px-4 w-full sm:w-auto">
                <span className="text-gray-500 text-xs uppercase font-semibold">Service Name</span>
                <span className="text-gray-800 font-medium">Stream Car Wash</span>
              </div>

              {/* Amount */}
              <div className="flex flex-col px-4 w-full sm:w-auto">
                <span className="text-gray-500 text-xs uppercase font-semibold">Amount</span>
                <span className="text-gray-800 font-medium">${payment.amount}</span>
              </div>

              {/* Payment Date */}
              <div className="flex flex-col px-4 w-full sm:w-auto">
                <span className="text-gray-500 text-xs uppercase font-semibold">Payment Date</span>
                <span className="text-gray-800 font-medium">
                  {new Date(payment.createdAt).toLocaleDateString('en-US', {
                    month: 'short',
                    day: '2-digit',
                    year: 'numeric',
                  })}
                </span>
              </div>

              {/* Status */}
              <div className="flex flex-col px-4 w-full sm:w-auto">
                <span className="text-gray-500 text-xs uppercase font-semibold">Status</span>
                <span
                  className={`text-gray-800 font-medium ${
                    payment.status === 'Confirmed' ? 'text-green-500' : 'text-yellow-500'
                  }`}
                >
                  {payment.status}
                </span>
              </div>
            </div>

            {/* Action Button */}
            <div className="w-full sm:w-auto sm:px-4 sm:mt-0 flex justify-end">
              <button
                onClick={() => handleDeleteClick(payment.id)}
                className="text-red-500 hover:text-red-700 transition duration-300 transform hover:scale-110"
              >
                <BsTrash size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaymentHistory;
