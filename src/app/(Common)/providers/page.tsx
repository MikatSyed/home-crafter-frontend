import TopProviders from '@/components/pages/Home/TopProviders/TopProviders';
import BreadcrumbBar from '@/components/UI/BreadcrumbBar';

import React from 'react';

const Provider = () => {
    return (
        <div>
            <BreadcrumbBar header="Our Providers" name="Providers" subtitle=""/>
            <TopProviders/>
        </div>
    );
};

export default Provider;