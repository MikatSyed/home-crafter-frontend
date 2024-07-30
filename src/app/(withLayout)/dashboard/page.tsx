"use client"

import BarChart from '@/components/dashboard/Bar-chart';
import PieChart from '@/components/dashboard/Pie-chart';
import { ChartOptions } from 'chart.js';
import React from 'react';
import { FiBarChart, FiPieChart, FiUsers, FiShoppingCart } from 'react-icons/fi';

const Dashboard = () => {
   
    
    
    
  return (
    <div className="container  px-4 py-8  ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Card 1 */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Total Users</h3>
              <p className="text-4xl font-bold text-blue-600">2,456</p>
            </div>
            <div className="bg-blue-100 p-3 rounded-full">
              <FiUsers className="text-blue-600 h-6 w-6" />
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Total Orders</h3>
              <p className="text-4xl font-bold text-green-600">1,789</p>
            </div>
            <div className="bg-green-100 p-3 rounded-full">
              <FiShoppingCart className="text-green-600 h-6 w-6" />
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Total Revenue</h3>
              <p className="text-4xl font-bold text-yellow-600">$45,678</p>
            </div>
            <div className="bg-yellow-100 p-3 rounded-full">
              <FiBarChart className="text-yellow-600 h-6 w-6" />
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Conversion Rate</h3>
              <p className="text-4xl font-bold text-red-600">84%</p>
            </div>
            <div className="bg-red-100 p-3 rounded-full">
              <FiPieChart className="text-red-600 h-6 w-6" />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Bar Chart */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Sales by Month</h3>
          <BarChart />
        </div>

        {/* Pie Chart */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Revenue by Product</h3>
        <PieChart/>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
