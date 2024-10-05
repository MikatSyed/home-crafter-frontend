import FeaturedCategories from '@/components/pages/Home/FeaturedCategories/FeaturedCategories';
import BreadcrumbBar from '@/components/UI/BreadcrumbBar';

import React from 'react';

const Categories = () => {
    return (
        <div>
             <BreadcrumbBar name="Categories" subtitle=""/>
             <FeaturedCategories/>
        </div>
    );
};

export default Categories;