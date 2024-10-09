import ServiceDetails from '@/components/pages/ServiceDetails/main';
import { Metadata } from 'next';
import React from 'react';

type IDProps = {
    params: any;
};

export const metadata: Metadata = {
    title: "HC | Services Details",
  };

const page = ({params}:IDProps) => {
    const {id} = params;
    return (
        <>
            <ServiceDetails id={id}/>
        </>
    );
};

export default page;