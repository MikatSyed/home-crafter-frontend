import Main from '@/components/pages/ProviderDetails/Main';
import React from 'react';

type IDProps = {
    params: any;
};

const page = ({ params }: IDProps) => {
    const { id } = params;
    return (
        <>
        <Main id={id}/>
        </>
    );
};

export default page;