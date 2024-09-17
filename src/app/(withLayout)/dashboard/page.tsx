"use client";

import BarChart from '@/components/dashboard/Bar-chart';
import PieChart from '@/components/dashboard/Pie-chart';
import { useOverviewQuery } from '@/redux/api/servicesApi';
import { FiBarChart, FiPieChart, FiUsers, FiShoppingCart, FiActivity, FiTool } from 'react-icons/fi';
import React from 'react';

const Dashboard = () => {
  const { data } = useOverviewQuery(undefined);

  // Extract data from the API response
  const totalUsers    = data?.data?.totalServices?.providers || 0;
  const totalServices = data?.data?.totalServices?.services || 0;
  const totalRevenue  = data?.data?.totalEarnings?.amount || 0;
  const Earning = totalRevenue * 0.1 || 0;

  return (
    <div className="px-4 py-8 overflow-x-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  
      <div className="border rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Total Revenue</h3>
              <p className="text-4xl font-bold text-yellow-600">${totalRevenue}</p>
            </div>
            <div className="bg-yellow-100 p-3 rounded-full">
              <FiBarChart className="text-yellow-600 h-6 w-6" />
            </div>
          </div>
        </div>

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

        <div className=" border rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Total Providers</h3>
              <p className="text-4xl font-bold text-blue-600">{totalUsers}</p>
            </div>
            <div className="bg-blue-100 p-3 rounded-full">
              <FiUsers className="text-blue-600 h-6 w-6" />
            </div>
          </div>
        </div>
 

        {/* Card 4: Total Payments */}
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

     
      <div className="pt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className=" rounded-lg">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Revenue by Day (Last 7 Days)</h3>
        <div className=' shadow-md'>
        <BarChart revenueData={data?.data?.formattedRevenueData || []} />
        </div>
        </div>

        <div className=" rounded-lg ">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Services by Category</h3>
         <div className='shadow-md'>
         <PieChart categoryData={data?.data?.formattedCategoryServiceCounts || []} />
         </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
