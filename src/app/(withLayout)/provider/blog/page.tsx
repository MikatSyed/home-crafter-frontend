"use client";
import React, { useState } from 'react';
import { FiX, FiEdit, FiTrash2 } from 'react-icons/fi';

// Define the types for Blog
interface Blog {
  imgSrc: string;
  date: string;
  category: string;
  title: string;
  description: string;
  authorImg: string;
  authorName: string;
}

const ProviderBlog = () => {
  const [showModal, setShowModal] = useState(false);
  const [newBlog, setNewBlog] = useState({
    name: '',
    description: '',
    img: null as File | null,
    category: '',
  });
  const [editMode, setEditMode] = useState(false);
  const [currentBlog, setCurrentBlog] = useState<Blog | null>(null);

  const categories = ["Repair", "Cleaning", "Maintenance", "Installation"]; // Example categories

  const blogs: Blog[] = [
    {
      imgSrc: "https://truelysell.dreamstechnologies.com/html/template/assets/img/blog/blog-02.jpg",
      date: "15, Dec 2023",
      category: "Repair",
      title: "Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium laudantium, eaque ipsa",
      authorImg: "https://truelysell.dreamstechnologies.com/html/template/assets/img/profiles/avatar-16.jpg",
      authorName: "Sophie",
    },
    {
      imgSrc: "https://truelysell.dreamstechnologies.com/html/template/assets/img/blog/blog-02.jpg",
      date: "15, Dec 2023",
      category: "Repair",
      title: "Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium laudantium, eaque ipsa",
      authorImg: "https://truelysell.dreamstechnologies.com/html/template/assets/img/profiles/avatar-16.jpg",
      authorName: "Sophie",
    },
    {
      imgSrc: "https://truelysell.dreamstechnologies.com/html/template/assets/img/blog/blog-02.jpg",
      date: "15, Dec 2023",
      category: "Repair",
      title: "Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium laudantium, eaque ipsa",
      authorImg: "https://truelysell.dreamstechnologies.com/html/template/assets/img/profiles/avatar-16.jpg",
      authorName: "Sophie",
    },
    {
      imgSrc: "https://truelysell.dreamstechnologies.com/html/template/assets/img/blog/blog-02.jpg",
      date: "15, Dec 2023",
      category: "Repair",
      title: "Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium laudantium, eaque ipsa",
      authorImg: "https://truelysell.dreamstechnologies.com/html/template/assets/img/profiles/avatar-16.jpg",
      authorName: "Sophie",
    },
    {
      imgSrc: "https://truelysell.dreamstechnologies.com/html/template/assets/img/blog/blog-02.jpg",
      date: "15, Dec 2023",
      category: "Repair",
      title: "Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium laudantium, eaque ipsa",
      authorImg: "https://truelysell.dreamstechnologies.com/html/template/assets/img/profiles/avatar-16.jpg",
      authorName: "Sophie",
    },
    {
      imgSrc: "https://truelysell.dreamstechnologies.com/html/template/assets/img/blog/blog-02.jpg",
      date: "15, Dec 2023",
      category: "Repair",
      title: "Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium laudantium, eaque ipsa",
      authorImg: "https://truelysell.dreamstechnologies.com/html/template/assets/img/profiles/avatar-16.jpg",
      authorName: "Sophie",
    },
    // Add more blog objects as needed
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewBlog((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files.length > 0) {
      setNewBlog((prev) => ({ ...prev, [name]: files[0] }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editMode && currentBlog) {
      console.log(`Updated Blog ID: ${currentBlog.title}`);
    } else {
      console.log('New Blog:', newBlog);
    }
    setShowModal(false);
    setEditMode(false);
    setCurrentBlog(null);
    setNewBlog({ name: '', description: '', img: null, category: '' });
  };

  const handleEdit = (blog: Blog) => {
    setCurrentBlog(blog);
    setNewBlog({
      name: blog.title,
      description: blog.description,
      img: null,
      category: blog.category,
    });
    setEditMode(true);
    setShowModal(true);
    console.log(`Editing Blog: ${blog.title}`);
  };

  const handleDelete = (blog: Blog) => {
    console.log(`Deleting Blog: ${blog.title}`);
    // Add your delete logic here
  };

  return (
    <div className="px-6 py-7">
      <div className="flex justify-between mb-8">
        <h2 className="text-2xl font-semibold text-[#2a2a3d]">Blog Listing</h2>
        <div>
          <button
            className="text-[#4f46e5] hover:bg-[#4f46e5] inline-flex items-center hover:text-white px-4 py-2 rounded text-md border border-[#4f46e5]"
            onClick={() => {
              setShowModal(true);
              setEditMode(false);
            }}
          >
            Add Blog
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {blogs.map((blog, index) => (
    <div
      key={index}
      className="border p-4 bg-white rounded-lg  relative"
    >
     
      <a href="blog-details.html">
        <img className="w-full h-48 object-cover rounded-t-lg" alt="Blog Image" src={blog.imgSrc} />
      </a>
      <div className="p-4">
        <div className="service-bottom-seven flex items-center justify-between mb-2">
          <div className="service-bottom-icons flex items-center text-gray-500 text-sm">
            <i className="feather-calendar mr-1"></i>
            <span>{blog.date}</span>
          </div>
          <h6 className="text-gray-500">{blog.category}</h6>
        </div>
        <h3 className="title text-lg font-semibold mb-2">
          <a href="blog-details.html" className="text-gray-800 hover:text-gray-600">
            {blog.title}
          </a>
        </h3>
        <div className="flex  justify-between mt-5">
         
            <div className='flex items-center'>
            <img src={blog.authorImg} alt="User" className="w-8 h-8 rounded-full mr-2" />
            <span className="mr-4">{blog.authorName}</span>
            </div>
           <div> <button
              onClick={() => handleEdit(blog)}
              className="bg-white p-1 rounded-full hover:bg-gray-200"
              aria-label="Edit Blog"
            >
              <FiEdit size={18} className="text-blue-500" />
            </button>
            <button
              onClick={() => handleDelete(blog)}
              className="bg-white p-1 rounded-full  hover:bg-gray-200 ml-2"
              aria-label="Delete Blog"
            >
              <FiTrash2 size={18} className="text-red-500" />
            </button></div>
         
        </div>
      </div>
    </div>
  ))}
</div>


      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">{editMode ? "Edit Blog" : "Add New Blog"}</h3>
              <button
                onClick={() => {
                  setShowModal(false);
                  setEditMode(false);
                  setCurrentBlog(null);
                }}
                className="bg-[#4f46e5] text-white rounded-full p-2 hover:bg-opacity-90 transition"
              >
                <FiX size={18} />
              </button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Blog Name</label>
                <input
                  type="text"
                  name="name"
                  value={newBlog.name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Description</label>
                <textarea
                  name="description"
                  value={newBlog.description}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Upload Blog Image</label>
                <input
                  type="file"
                  name="img"
                  onChange={handleImageChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  accept="image/*"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Category</label>
                <select
                  name="category"
                  value={newBlog.category}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  required
                >
                  <option value="">Select Category</option>
                  {categories.map((category, index) => (
                    <option key={index} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => {
                    setShowModal(false);
                    setEditMode(false);
                    setCurrentBlog(null);
                  }}
                  className="mr-4 px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#4f46e5] text-white rounded-md hover:bg-blue-600"
                >
                  {editMode ? "Update Blog" : "Add Blog"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProviderBlog;
