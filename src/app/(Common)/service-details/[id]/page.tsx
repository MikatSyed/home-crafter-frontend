import ServiceDetails from '@/components/pages/ServiceDetails/main';
import React from 'react';

type IDProps = {
    params: any;
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