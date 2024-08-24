import React from 'react';

const BlogCard = ({blog}:any) => {
    return (
        <div>
             <div
            key={blog?.id}
            className=" p-6 bg-white border rounded-lg h-[420px]"
            data-aos="fade-up"
          >
            <a href="blog-details.html">
              <img className="w-full h-48 object-cover rounded-t-lg" alt={blog?.title} src={blog?.blogImg[0]} />
            </a>
            <div className="p-4">
              <div className="service-bottom-seven flex items-center justify-between mb-2">
                <div className="service-bottom-icons flex items-center text-gray-500 text-sm">
                  <i className="feather-calendar mr-1"></i>
                  <span>{new Date(blog?.createdAt).toLocaleDateString()}</span>
                </div>
                <h6 className="text-gray-500">{blog?.category?.categoryName}</h6>
              </div>
              <h3 className="title text-lg font-semibold mb-2">
                <a href="blog-details.html" className="text-gray-800 hover:text-gray-600">
                  {blog?.title}
                </a>
              </h3>
              <div className="usefull-bottom flex items-center justify-between mt-5">
                <div className="useful-img flex items-center">
                  <img
                    src={blog?.user?.profileImg[0]}
                    alt={blog?.user?.fName}
                    className="w-8 h-8 rounded-full mr-2"
                  />
                  <span>{blog?.user?.fName} {blog?.user?.lName}</span>
                </div>
                <a href="javascript:void(0);" className="text-blue-500 hover:text-blue-400">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
    );
};

export default BlogCard;