"use client";
import React, { useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import CreateCombo from './CreateCombo/CreateCombo';
import { useCombosForProviderQuery, useDeleteComboMutation } from '@/redux/api/comboPackApi';
import ComboPackCard from './ComboCard/ComboCard';
import Loader from '@/components/UI/Loader';
import ConfirmModal from '@/components/UI/ConfirmModal'; // Import a confirmation modal component
import ItemsPerPageSelector from '@/components/UI/ItemsPerPageSelector';
import Pagination from '@/components/UI/Pagination';

const Main = () => {
  const [showCreateModal, setShowCreateModal] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState("Active");
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);
  const [selectedCombo, setSelectedCombo] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(3); // Track the selected combo pack for deletion

  const { data, isLoading } = useCombosForProviderQuery(undefined);
  const combos = data?.data;

  const totalPages = Math.ceil((combos?.length || 0) / itemsPerPage);

  const paginatedCombo = combos?.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);


  const handleItemsPerPageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setItemsPerPage(Number(event.target.value));
    setCurrentPage(1);
  };


  // Show loader while fetching data
  if (isLoading) {
    return <Loader />;
  }



  // Open the delete confirmation modal
  const handleDelete = (id: string) => {
    setSelectedCombo(id);
    setIsDeleteModalOpen(true);
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="mx-auto px-6 bg-white py-7">
        {/* Header Section */}
        <div className="flex justify-between">
          <h2 className="text-2xl font-semibold text-[#2a2a3d] mb-6">Combo Pack</h2>
          <div>
            <button
              onClick={() => setShowCreateModal(true)}
              className="text-[#4f46e5] hover:bg-[#4f46e5] inline-flex items-center hover:text-white px-4 py-2 rounded text-md border border-[#4f46e5]"
            >
              Add Combo
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="mb-6">
          <button
            onClick={() => setActiveTab("Active")}
            className={`px-4 py-2 ${
              activeTab === "Active" ? "bg-[#4f46e5] text-white" : "bg-white text-blue-600"
            } border rounded-l-md`}
          >
            Basic
          </button>
          <button
            onClick={() => setActiveTab("Inactive")}
            className={`px-4 py-2 ml-2 ${
              activeTab === "Inactive" ? "bg-[#4f46e5] text-white" : "bg-white text-blue-600"
            } border rounded-r-md`}
          >
            Standard
          </button>
          <button
            onClick={() => setActiveTab("Inactive")}
            className={`px-4 py-2 ml-2 ${
              activeTab === "Inactive" ? "bg-[#4f46e5] text-white" : "bg-white text-blue-600"
            } border rounded-r-md`}
          >
            Premium
          </button>
        </div>

        {/* Combo Packs List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {paginatedCombo?.map((pack: any, index: number) => (
           <ComboPackCard
           key={index}
           id={pack?.id} // Make sure id is being passed correctly
           name={pack?.name}
           services={pack?.services}
           providerImage={pack?.providerImage}
           providerName={pack?.providerName}
           providerInfo={pack?.providerInfo}
           amount={pack?.amount}
           onDelete={handleDelete} // Pass the correct delete handler
         />
          ))}
        </div>

        {/* Create Combo Modal */}
        <CreateCombo show={showCreateModal} onClose={() => setShowCreateModal(false)} />

        <div className="flex items-center justify-end mt-10">
            <ItemsPerPageSelector itemsPerPage={itemsPerPage} onItemsPerPageChange={handleItemsPerPageChange} />
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
          </div>
      

      </div>
    </>
  );
};

export default Main;
