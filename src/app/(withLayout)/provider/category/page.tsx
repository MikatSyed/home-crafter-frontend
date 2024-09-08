"use client";

import CreateCategory from '@/components/UI/CreateCategory';
import Loader from '@/components/UI/Loader';
import UpdateCategory from '@/components/UI/UpdateCategory';
import { useCategoriesQuery } from '@/redux/api/categoryApi';
import { useState } from 'react';
import  { Toaster } from 'react-hot-toast';
import { FiEdit, FiTrash, FiArrowLeft, FiArrowRight } from 'react-icons/fi';

interface Category {
  id: string;
  categoryName: string;
  categoryIcon: string;
  categoryImg: string;
}

const ProviderCategory: React.FC = () => {
  const [showCreateModal, setShowCreateModal] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(3); 
  const { data, isLoading }:any = useCategoriesQuery(undefined);
 
  const categories = data?.data || [];
  const totalPages = Math.ceil((data?.meta?.total || 0) / itemsPerPage);


  const paginatedCategories = categories.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handleItemsPerPageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setItemsPerPage(Number(event.target.value));
    setCurrentPage(1); 
  };
if(isLoading){
  return <Loader/>
}
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="px-6 py-7">
        <div className="flex justify-between mb-8">
          <h2 className="text-2xl font-semibold text-[#2a2a3d]">Category Listing</h2>
          <div>
            <button
              className="text-[#4f46e5] hover:bg-[#4f46e5] inline-flex items-center hover:text-white px-4 py-2 rounded text-md border border-[#4f46e5]"
              onClick={() => setShowCreateModal(true)}
            >
              Add Category
            </button>
          </div>
        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {paginatedCategories.map((category:any) => (
            <div key={category.id} className="relative rounded flex items-center justify-center overflow-hidden group bg-white p-2">
              <div className="relative rounded-lg overflow-hidden border hover:shadow-md transition-shadow duration-300 w-full">
                <div className="block image-wrapper">
                  <img
                    src={category.categoryImg}
                    alt={category.categoryName}
                    className="w-full h-[250px] object-cover transition-transform duration-300 ease-in-out"
                  />
                </div>
                <div className="p-4 flex items-center justify-between">
                  <div className="flex items-center">
                    <a href="#" className="rounded transition flex flex-col items-center justify-center text-center">
                      <span className="inline-block p-2 bg-gray-100 rounded-full mr-2">
                        <img src={category.categoryIcon} alt="icon" className="w-6 h-6" />
                      </span>
                    </a>
                    <div className="ml-1">
                      <h5 className="text-md font-bold text-gray-800">{category.categoryName}</h5>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <button className="text-blue-500 hover:text-blue-700">
                      <FiEdit size={18} />
                    </button>
                    <button className="text-red-500 hover:text-red-700">
                      <FiTrash size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-end mt-8">
        <div className="">
          <label htmlFor="itemsPerPage" className="mr-2 text-sm font-medium text-gray-700">Per Page:</label>
          <select
            id="itemsPerPage"
            value={itemsPerPage}
            onChange={handleItemsPerPageChange}
            className="p-2 border rounded text-sm focus:outline-none focus:border-blue-600"
          >
            {[3, 6, 9, 12, 15, 18, 21].map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </div>
          <button
            className={`inline-flex items-center px-4 py-2 mx-1 rounded-lg transition-colors ${
              currentPage === 1 ? 'text-gray-500 cursor-not-allowed text-sm' : 'text-gray-700 hover:text-[#4f46e5] text-sm font-bold'
            }`}
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <FiArrowLeft className="mr-1" /> PREV
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              className={`px-4 py-2 mx-1 rounded-lg transition-colors ${
                currentPage === index + 1
                  ? 'bg-[#4f46e5] text-white'
                  : 'bg-[#f8fcfd] border border-gray-300 text-gray-800 hover:bg-[#4f46e5] text-sm hover:text-white'
              }`}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </button>
          ))}
          <button
            className={`inline-flex items-center px-4 py-2 mx-1 rounded-lg transition-colors ${
              currentPage === totalPages ? 'text-gray-500 cursor-not-allowed text-sm' : 'text-gray-700 text-sm font-bold hover:text-[#4f46e5]'
            }`}
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            NEXT <FiArrowRight className="ml-1" />
          </button>
        </div>

        <CreateCategory
          show={showCreateModal}
          onClose={() => setShowCreateModal(false)}
        />
      
      </div>
    </>
  );
};

export default ProviderCategory;
