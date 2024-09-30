"use client"
import React, { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import CreateCombo from './CreateCombo';

const ComboPack = () => {
    const [showCreateModal, setShowCreateModal] = useState<boolean>(false);
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
      <CreateCombo show={showCreateModal} onClose={() => setShowCreateModal(false)} />

 
    </div>
        
        </>
     
    );
};

export default ComboPack;