
import Blog from '@/components/pages/Home/Blog/Blog';
import BreadcrumbBar from '@/components/UI/BreadcrumbBar';
import React from 'react';

const Blogs = () => {

    return (
        <div>
               <BreadcrumbBar name="Blog" subtitle=""/>
            <Blog/>
        </div>
    );
};

export default Blogs;