import BreadcrumbBar from '@/components/UI/BreadcrumbBar';
import ServicesPage from '@/components/pages/ServicesPage';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: "HC | Services",
  };

const Services = () => {
    return (
        <div>
          <BreadcrumbBar header="Our Services" name="Services"/>
            <ServicesPage/>
        </div>
    );
};

export default Services;