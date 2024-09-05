"use client";
import BreadcrumbBar from '@/components/UI/BreadcrumbBar';
import Loader from '@/components/UI/Loader';
import ProductGallery from '@/components/UI/ServiceGallery';
import ServiceInfo from '@/components/UI/ServiceInfo';
import { useServiceQuery } from '@/redux/api/servicesApi';
import React from 'react';

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
            <ServiceInfo data={data} />
        </div>
    );
};

export default ServiceDetails;
