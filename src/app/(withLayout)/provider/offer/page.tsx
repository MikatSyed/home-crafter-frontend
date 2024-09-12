"use client";
import React, { useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import CreateOffer from '@/components/UI/CreateOffer';
import { useOffersQuery } from '@/redux/api/offerApi'; 
import ItemsPerPageSelector from '@/components/UI/ItemsPerPageSelector';
import Pagination from '@/components/UI/Pagination';


const OfferPage = () => {
    const [showCreateModal, setShowCreateModal] = useState<boolean>(false);
    const [currentPage, setCurrentPage] = useState(1);
     const [itemsPerPage, setItemsPerPage] = useState(6);

    const { data, isLoading, isError } = useOffersQuery(undefined);
    const offers = data?.data;

    const totalPages = Math.ceil((offers?.length || 0) / itemsPerPage);

  const paginatedOffers = offers?.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handleItemsPerPageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setItemsPerPage(Number(event.target.value));
    setCurrentPage(1);
  };

    // Helper function to format dates
    const formatDate = (dateString: any) => {
        const options: any = { day: 'numeric', month: 'short', year: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-US', options);
    };



    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error loading offers.</div>;

    return (
        <div className="px-6 py-7">
            <div className="flex justify-between mb-8">
                <h2 className="text-2xl font-semibold text-[#2a2a3d]">Offer Listing</h2>
                <div>
                    <button
                        className="text-[#4f46e5] hover:bg-[#4f46e5] inline-flex items-center hover:text-white px-4 py-2 rounded text-md border border-[#4f46e5]"
                        onClick={() => setShowCreateModal(true)}
                    >
                        Add Offer
                    </button>
                </div>
            </div>
            <div className="rounded-lg">
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-200 rounded-md">
                        <thead className=" text-gray-600 uppercase text-md ">
                            <tr>
                                <th className="py-4 px-6 text-left">Offer Name</th>
                                <th className="py-4 px-6 text-left">Start Date</th>
                                <th className="py-4 px-6 text-left">End Date</th>
                                <th className="py-4 px-6 text-left">Discount</th>
                                <th className="py-4 px-6 text-left">Status</th>
                                <th className="py-4 px-6 text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-600 text-md font-light">
                            {paginatedOffers?.map((offer:any) => (
                                <tr key={offer.id} className="border-b border-gray-200 hover:bg-gray-100">
                                    <td className="py-4 px-6 text-left whitespace-nowrap">
                                        <div className="flex items-center">
                                            <span className="font-medium">{offer.offerName}</span>
                                        </div>
                                    </td>
                                    <td className="py-4 px-6 text-left">
                                        <span>{formatDate(offer.startDate)}</span>
                                    </td>
                                    <td className="py-4 px-6 text-left">
                                        <span>{formatDate(offer.endDate)}</span>
                                    </td>
                                    <td className="py-4 px-6 text-left">
                                        <span>{offer.discount}</span>
                                    </td>
                                    <td className="py-4 px-6 text-left">
                                        <span
                                            className={`py-1 px-3 rounded-full text-xs ${
                                                offer.status === 'Active'
                                                    ? 'bg-green-200 text-green-600'
                                                    : 'bg-red-200 text-red-600'
                                            }`}
                                        >
                                            {offer.status.charAt(0).toUpperCase() + offer.status.slice(1)}
                                        </span>
                                    </td>
                                    <td className="py-3 px-6 text-center">
                                        <div className="flex item-center justify-center space-x-2">
                                            <button className="text-blue-500 hover:text-blue-700 transform hover:scale-110">
                                                <FaEdit size={16} />
                                            </button>
                                            <button className="text-red-500 hover:text-red-700 transform hover:scale-110">
                                                <FaTrash size={16} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>


            <CreateOffer show={showCreateModal} onClose={() => setShowCreateModal(false)} />

            <div className="flex items-center justify-end mt-10">
          <ItemsPerPageSelector itemsPerPage={itemsPerPage} onItemsPerPageChange={handleItemsPerPageChange} />
          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
        </div>

        </div>
    );
};

export default OfferPage;
