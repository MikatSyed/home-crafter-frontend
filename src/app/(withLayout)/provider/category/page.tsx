"use client";

import CreateCategory from '@/components/UI/CreateCategory';
import UpdateCategory from '@/components/UI/UpdateCategory';
import { useState, FormEvent } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { FiEdit, FiTrash } from 'react-icons/fi';
import { TiTickOutline } from 'react-icons/ti';

interface Category {
  id: number;
  name: string;
  icon: string;
  img: string;
}

const ProviderCategory: React.FC = () => {
  const [showCreateModal, setShowCreateModal] = useState<boolean>(false);
  const [showUpdateModal, setShowUpdateModal] = useState<boolean>(false);
  const [currentCategory, setCurrentCategory] = useState<Category | null>(null);

  const categories: Category[] = [
    { id: 1, name: 'Construction', icon: 'https://truelysell.dreamstechnologies.com/html/template/assets/img/icons/feature-icon-01.svg', img: 'https://truelysell.dreamstechnologies.com/html/template/assets/img/services/service-02.jpg' },
    { id: 2, name: 'Car Wash', icon: 'https://truelysell.dreamstechnologies.com/html/template/assets/img/icons/feature-icon-02.svg', img: 'https://truelysell.dreamstechnologies.com/html/template/assets/img/feature.jpg' },
    { id: 3, name: 'Electrical', icon: 'https://truelysell.dreamstechnologies.com/html/template/assets/img/icons/feature-icon-03.svg', img: 'https://truelysell.dreamstechnologies.com/html/template/assets/img/services/service-01.jpg' },
    { id: 4, name: 'Cleaning', icon: 'https://truelysell.dreamstechnologies.com/html/template/assets/img/icons/feature-icon-04.svg', img: 'https://truelysell.dreamstechnologies.com/html/template/assets/img/services/service-09.jpg' },
    { id: 5, name: 'Interior', icon: 'https://truelysell.dreamstechnologies.com/html/template/assets/img/icons/feature-icon-05.svg', img: 'https://truelysell.dreamstechnologies.com/html/template/assets/img/services/service-07.jpg' },
    { id: 6, name: 'Carpentry', icon: 'https://truelysell.dreamstechnologies.com/html/template/assets/img/icons/feature-icon-06.svg', img: 'https://truelysell.dreamstechnologies.com/html/template/assets/img/services/service-03.jpg' },
    { id: 7, name: 'Computer', icon: 'https://truelysell.dreamstechnologies.com/html/template/assets/img/icons/feature-icon-07.svg', img: 'https://truelysell.dreamstechnologies.com/html/template/assets/img/services/service-06.jpg' },
    { id: 8, name: 'Plumbing', icon: 'https://truelysell.dreamstechnologies.com/html/template/assets/img/icons/feature-icon-08.svg', img: 'https://truelysell.dreamstechnologies.com/html/template/assets/img/services/service-11.jpg' },
  ];



  const handleUpdateSubmit = (id: number, name: string, img: File | null, icon: File | null) => {
    console.log(`Updated Category ID: ${id}`, { name, img, icon });
    setShowUpdateModal(false);
  };

  const handleEdit = (category: Category) => {
    setCurrentCategory(category);
    setShowUpdateModal(true);
  };



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
        {categories.map((category) => (
          <div key={category.id} className="relative rounded flex items-center justify-center overflow-hidden group bg-white p-2">
            <div className="relative rounded-lg overflow-hidden border hover:shadow-md transition-shadow duration-300 w-full">
              <div className="block image-wrapper">
                <img
                  src={category.img}
                  alt={category.name}
                  className="w-full h-[250px] object-cover transition-transform duration-300 ease-in-out"
                />
              </div>
              <div className="p-4 flex items-center justify-between">
                <div className="flex items-center">
                  <a href="service-details.html" className="rounded transition flex flex-col items-center justify-center text-center">
                    <span className="inline-block p-2 bg-gray-100 rounded-full mr-2">
                      <img src={category.icon} alt="icon" className="w-6 h-6" />
                    </span>
                  </a>
                  <div className="ml-1">
                    <h5 className="text-md font-bold text-gray-800">{category.name}</h5>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <button className="text-blue-500 hover:text-blue-700" onClick={() => handleEdit(category)}>
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

      <CreateCategory
        show={showCreateModal}
        onClose={() => setShowCreateModal(false)}
       
      />
      {currentCategory && (
        <UpdateCategory
          show={showUpdateModal}
          onClose={() => setShowUpdateModal(false)}
          onSubmit={handleUpdateSubmit}
          category={currentCategory}
        />
      )}
    </div>
    </>
  );
};

export default ProviderCategory;
