
import Main from '@/components/pages/Home/Blog/Main';
import BreadcrumbBar from '@/components/UI/BreadcrumbBar';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: "HC | Blogs",
  };
const Blogs = () => {

    return (
        <div className=''>
               <BreadcrumbBar header="Our Blogs" name="Blogs"/>
            <Main/>
        </div>
    );
};

export default Blogs