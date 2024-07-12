import BreadcrumbBar from '@/components/UI/BreadcrumbBar';
import Gallery from '@/components/UI/Gallery';
import ProductGallery from '@/components/UI/ProductGallery';
import ProviderInfo from '@/components/UI/ProviderInfo';
import React from 'react';
import { FiMapPin } from 'react-icons/fi';


const ServiceDetails = () => {
    return (
        <div>
            <BreadcrumbBar name="Service" subtitle="Service Details"/>
            <ProductGallery/>
            <ProviderInfo/>
            
        </div>
    );
};

export default ServiceDetails;