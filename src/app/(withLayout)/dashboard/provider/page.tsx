"use client";

import BarChart from '@/components/dashboard/Bar-chart';
import PieChart from '@/components/dashboard/Pie-chart';
import { useOverviewQuery } from '@/redux/api/servicesApi';
import { FiBarChart, FiPieChart, FiUsers, FiTool } from 'react-icons/fi';
import React from 'react';

const Dashboard = () => {
  const { data } = useOverviewQuery(undefined);
  console.log(data?.data,'11')

  // Extract data from the API response
  const role = data?.data?.role;
  const totalUsers    = data?.data?.totalServices?.providers || 0;
  const totalServices = data?.data?.totalServices || 0;
  const totalBookings = data?.data?.totalBookings || 0;
  const totalRevenue  = data?.data?.totalEarnings?.amount || 0;
  const Earning = totalRevenue * 0.1 || 0;
  const lastFivePayments = data?.data?.lastFivePayments || [];
  const lastFiveBookings = data?.data?.lastFiveBookings || [];

  return (
    <div className="px-4 py-8 overflow-x-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  
       {role === 'Admin' &&   <div className="border rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Total Revenue</h3>
              <p className="text-4xl font-bold text-yellow-600">${totalRevenue}</p>
            </div>
            <div className="bg-yellow-100 p-3 rounded-full">
              <FiBarChart className="text-yellow-600 h-6 w-6" />
            </div>
          </div>
        </div>  }
  

        {/* Total Services */}
        <div className="border rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Total Services</h3>
              <p className="text-4xl font-bold text-green-600">{totalServices}</p>
            </div>
            <div className="bg-green-100 p-3 rounded-full">
              <FiTool className="text-green-600 h-6 w-6" />
            </div>
          </div>
        </div>

        {role === 'Admin' &&    <div className="border rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Total Providers</h3>
              <p className="text-4xl font-bold text-blue-600">{totalUsers}</p>
            </div>
            <div className="bg-blue-100 p-3 rounded-full">
              <FiUsers className="text-blue-600 h-6 w-6" />
            </div>
          </div>
        </div> }
        {role === 'Provider' &&    <div className="border rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Total Booking</h3>
              <p className="text-4xl font-bold text-blue-600">{totalBookings}</p>
            </div>
            <div className="bg-blue-100 p-3 rounded-full">
              <FiUsers className="text-blue-600 h-6 w-6" />
            </div>
          </div>
        </div> }
     

        {/* Earning */}
        <div className="border rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Earning</h3>
              <p className="text-4xl font-bold text-red-600">${Earning}</p>
            </div>
            <div className="bg-red-100 p-3 rounded-full">
              <FiPieChart className="text-red-600 h-6 w-6" />
            </div>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="pt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded-lg">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Revenue by Day (Last 7 Days)</h3>
          <div className="shadow-md">
            <BarChart revenueData={data?.data?.formattedRevenueData || []} />
          </div>
        </div>

        {role === 'Admin' &&   <div className="rounded-lg">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Services by Category</h3>
          <div className="shadow-md">
            <PieChart categoryData={data?.data?.formattedCategoryServiceCounts || []} />
          </div>
        </div> }
        {role === 'Provider' &&    <div className="">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Last Five Payments</h3>
        <div className=" rounded-lg p-4 shadow-md">
          <table className="min-w-full table-auto text-left">
            <thead>
              <tr>
                <th className="px-4 py-2">Payment ID</th>
                <th className="px-4 py-2">Amount</th>
                <th className="px-4 py-2">Transaction ID</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Date</th>
              </tr>
            </thead>
            <tbody>
              {lastFivePayments.map((payment) => (
                <tr key={payment.id} className="border-t">
                  <td className="px-4 py-2">{payment.id}</td>
                  <td className="px-4 py-2">${payment.amount}</td>
                  <td className="px-4 py-2">{payment.transactionId}</td>
                  <td className="px-4 py-2">{payment.status}</td>
                  <td className="px-4 py-2">{new Date(payment.createdAt).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>}
      </div>

      {/* Last Five Payments */}
   

      {role === 'Provider' &&  <div className="pt-10">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Last Five Bookings</h3>
        <div className="border rounded-lg p-4 shadow-md">
          <table className="min-w-full table-auto text-left">
            <thead>
              <tr>
                <th className="px-4 py-2">Booking ID</th>
                <th className="px-4 py-2">Date</th>
                <th className="px-4 py-2">Day</th>
                <th className="px-4 py-2">Time</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Work Status</th>
              </tr>
            </thead>
            <tbody>
              {lastFiveBookings.map((booking) => (
                <tr key={booking.id} className="border-t">
                  <td className="px-4 py-2">{booking.id}</td>
                  <td className="px-4 py-2">{new Date(booking.bookingDate).toLocaleDateString()}</td>
                  <td className="px-4 py-2">{booking.Day}</td>
                  <td className="px-4 py-2">{booking.Time}</td>
                  <td className="px-4 py-2">{booking.status}</td>
                  <td className="px-4 py-2">{booking.workStatus}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>}
     
    </div>
  );
};

export default Dashboard;

