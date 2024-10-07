
import Main from '@/components/pages/Home/Blog/Main';
import BreadcrumbBar from '@/components/UI/BreadcrumbBar';
import React from 'react';

const Blogs = () => {

    return (
        <div>
               <BreadcrumbBar header="Our Blogs" name="Blogs"/>
            <Main/>
        </div>
    );
};

export default Blogs