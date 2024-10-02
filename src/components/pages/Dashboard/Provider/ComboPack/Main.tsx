"use client"
import React, { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import CreateCombo from './CreateCombo/CreateCombo';
import { useCombosQuery } from '@/redux/api/comboPackApi';
import ComboPackCard from './ComboCard/ComboCard';
import Loader from '@/components/UI/Loader';



const Main = () => {
    const [showCreateModal, setShowCreateModal] = useState<boolean>(false);
    const [activeTab, setActiveTab] = useState("Active");
    const {data,isLoading} = useCombosQuery(undefined);
    const combos = data?.data;
    if(isLoading){
      return <Loader/>
    }
    return (
        <>
           <Toaster position="top-center" reverseOrder={false} />
    <div className="mx-auto px-6 bg-white py-7">
      <div className="flex justify-between">
        <h2 className="text-2xl font-semibold text-[#2a2a3d] mb-6">Combo Pack</h2>
        <div>
          
            <button   onClick={() => setShowCreateModal(true)} className="text-[#4f46e5] hover:bg-[#4f46e5] inline-flex items-center hover:text-white px-4 py-2 rounded text-md border border-[#4f46e5]">
              Add Combo
            </button>
          
        </div>
      </div>
     

      <div className="mb-6">
        <button
          onClick={() => setActiveTab("Active")}
          className={`px-4 py-2 ${
            activeTab === "Active"
              ? "bg-[#4f46e5] text-white"
              : "bg-white text-blue-600"
          } border rounded-l-md`}
        >
          Basic
        </button>
        <button
          onClick={() => setActiveTab("Inactive")}
          className={`px-4 py-2 ml-2 ${
            activeTab === "Inactive"
              ? "bg-[#4f46e5] text-white"
              : "bg-white text-blue-600"
          } border rounded-r-md`}
        >
         Standard
        </button>
        <button
          onClick={() => setActiveTab("Inactive")}
          className={`px-4 py-2 ml-2 ${
            activeTab === "Inactive"
              ? "bg-[#4f46e5] text-white"
              : "bg-white text-blue-600"
          } border rounded-r-md`}
        >
         Premium
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {combos?.map((pack:any, index:number) => (
          <ComboPackCard
            key={index} 
            id = {pack?.id}
            name={pack?.name}
            services={pack?.services}
            providerImage={pack?.providerImage}
            providerName={pack?.providerName}
            providerInfo={pack?.providerInfo}
            amount={pack?.amount}  
            
          />
        ))}
      </div>
      <CreateCombo show={showCreateModal} onClose={() => setShowCreateModal(false)} />

 
    </div>
        
        </>
     
    );
};

export default Main;