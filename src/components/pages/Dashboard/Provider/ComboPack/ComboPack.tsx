import Link from 'next/link';
import React from 'react';
import { Toaster } from 'react-hot-toast';

const ComboPack = () => {
    return (
        <>
           <Toaster position="top-center" reverseOrder={false} />
    <div className="mx-auto px-6 bg-white py-7">
      <div className="flex justify-between">
        <h2 className="text-2xl font-semibold text-[#2a2a3d] mb-6">Combo Pack</h2>
        <div>
          <Link href="/provider/services/create-service">
            <button className="text-[#4f46e5] hover:bg-[#4f46e5] inline-flex items-center hover:text-white px-4 py-2 rounded text-md border border-[#4f46e5]">
              Add Combo
            </button>
          </Link>
        </div>
      </div>

 
    </div>
        
        </>
     
    );
};

export default ComboPack;