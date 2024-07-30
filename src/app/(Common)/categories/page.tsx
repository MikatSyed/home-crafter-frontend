import BreadcrumbBar from '@/components/UI/BreadcrumbBar';
import FeaturedCategories from '@/components/UI/FeaturedCategories';
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