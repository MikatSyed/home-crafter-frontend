import ProviderDetails from '@/components/pages/ProviderDetails/ProviderDetails';
import React from 'react';

type IDProps = {
    params: any;
};

const page = ({ params }: IDProps) => {
    const { id } = params;
    return (
        <>
        <ProviderDetails id={id}/>
        </>
    );
};

export default page;