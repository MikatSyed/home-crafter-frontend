"use client";
import CreateBlog from '@/components/UI/CreateBlog';
import Loader from '@/components/UI/Loader';
import { useBlogsQuery } from '@/redux/api/blogApi';
import Link from 'next/link';
import React from 'react';
import { FiEdit, FiTrash2 } from 'react-icons/fi';

// Define the types for Blog
interface Blog {
  id: string;
  title: string;
  content: string;
  blogImg: string[]; // Assuming multiple images can be stored, but you are only using one
  category: {
    categoryName: string;
  };
  user: {
    fName: string;
    lName: string;
    profileImg: string[];
  };
  createdAt: string;
}

const ProviderBlog = () => {
  // Pass an empty object to fetch all blogs without any filters
  const { data, isLoading } = useBlogsQuery({});

  if (isLoading) return <Loader />;

  return (
    <div className="px-6 py-7">
      <div className="flex justify-between mb-8">
        <h2 className="text-2xl font-semibold text-[#2a2a3d]">Blog Listing</h2>
        <div>
          <Link href="/provider/blog/create-blog">
            <button className="text-[#4f46e5] hover:bg-[#4f46e5] inline-flex items-center hover:text-white px-4 py-2 rounded text-md border border-[#4f46e5]">
              Add Blog
            </button>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data?.data.map((blog: Blog) => (
          <div key={blog.id} className="border p-4 bg-white rounded-lg relative">
            <a href={`blog-details/${blog.id}`}>
              <img
                className="w-full h-48 object-cover rounded-t-lg"
                alt="Blog Image"
                src={blog.blogImg[0]} // Displaying the first image in the array
              />
            </a>
            <div className="p-4">
              <div className="service-bottom-seven flex items-center justify-between mb-2">
                <div className="service-bottom-icons flex items-center text-gray-500 text-sm">
                  <i className="feather-calendar mr-1"></i>
                  <span> {new Date(blog.createdAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}</span>
                </div>
                <h6 className="text-gray-500">{blog.category.categoryName}</h6>
              </div>
              <h3 className="title text-lg font-semibold mb-2">
                <a
                  href={`blog-details/${blog.id}`}
                  className="text-gray-800 hover:text-gray-600"
                >
                  {blog.title}
                </a>
              </h3>
              <div className="flex justify-between mt-5">
                <div className="flex items-center">
                  <img
                    src={blog.user.profileImg[0]}
                    alt="User"
                    className="w-8 h-8 rounded-full mr-2"
                  />
                  <span className="mr-4">
                    {blog.user.fName} {blog.user.lName}
                  </span>
                </div>
                <div>
                  <button
                    // onClick={() => handleEdit(blog)}
                    className="bg-white p-1 rounded-full hover:bg-gray-200"
                    aria-label="Edit Blog"
                  >
                    <FiEdit size={18} className="text-blue-500" />
                  </button>
                  <button
                    // onClick={() => handleDelete(blog)}
                    className="bg-white p-1 rounded-full hover:bg-gray-200 ml-2"
                    aria-label="Delete Blog"
                  >
                    <FiTrash2 size={18} className="text-red-500" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProviderBlog;
