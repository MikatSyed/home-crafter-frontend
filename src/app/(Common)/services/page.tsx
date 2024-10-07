import BreadcrumbBar from '@/components/UI/BreadcrumbBar';
import ServicesPage from '@/components/pages/ServicesPage';
import React from 'react';

const Services = () => {
    return (
        <div>
          <BreadcrumbBar header="Our Services" name="Services"/>
            <ServicesPage/>
        </div>
    );
};

export default Services;