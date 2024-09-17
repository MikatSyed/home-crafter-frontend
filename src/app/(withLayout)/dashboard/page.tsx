"use client";

import BarChart from '@/components/dashboard/Bar-chart';
import PieChart from '@/components/dashboard/Pie-chart';
import { useOverviewQuery } from '@/redux/api/servicesApi';
import { FiBarChart, FiPieChart, FiUsers, FiShoppingCart, FiActivity, FiTool } from 'react-icons/fi';
import React from 'react';
import AdminDashboard from '@/components/UI/AdminDashboard';
import ProviderDashboard from '@/components/UI/ProviderDashboard';

const Dashboard = () => {
  const { data } = useOverviewQuery(undefined);
  const role = data?.data?.role;
 
  
  
  return (
    <div>
    <div>
      {role === 'Admin' ? (
        <AdminDashboard data={data.data} />
      ) : role === 'Provider' ? (
        <ProviderDashboard data={data.data} />
      ) : (
        <p>Unauthorized access or role not recognized.</p>
      )}
    </div>
    </div>
  );
};

export default Dashboard;
