"use client";
import BreadcrumbBar from '@/components/UI/BreadcrumbBar';
import Gallery from '@/components/UI/Gallery';
import Loader from '@/components/UI/Loader';
import ProductGallery from '@/components/UI/ProductGallery';
import ProviderInfo from '@/components/UI/ProviderInfo';
import { useServiceQuery } from '@/redux/api/servicesApi';
import React from 'react';
import { FiMapPin } from 'react-icons/fi';

type IDProps = {
    params: any;
};

const ServiceDetails = ({ params }: IDProps) => {
    const { id } = params;
    const { data, isLoading } = useServiceQuery(id);

    if (isLoading) {
        return (
            <div >
                <Loader/>
            </div>
        );
    }

    

    return (
        <div>
            <BreadcrumbBar name="Service" subtitle="Service Details" />
            <ProductGallery data={data} />
            <ProviderInfo data={data} />
        </div>
    );
};

export default ServiceDetails;
