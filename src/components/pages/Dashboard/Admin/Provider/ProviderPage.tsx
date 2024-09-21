"use client";
import React, { useState } from 'react';
import { FaTrash, FaEye } from 'react-icons/fa';
import ItemsPerPageSelector from '@/components/UI/ItemsPerPageSelector';
import Pagination from '@/components/UI/Pagination';
import ConfirmModal from '@/components/UI/ConfirmModal';
import { useDeleteUserMutation } from '@/redux/api/userApi';
import { useProvidersQuery, useUpdateProviderStatusMutation } from '@/redux/api/providerApi';
import { TiTickOutline } from 'react-icons/ti';
import { ShowToast } from '@/components/UI/ShowToast';
import { Toaster } from 'react-hot-toast';

const ProviderPage = () => {
    const [showConfirmModal, setShowConfirmModal] = useState<boolean>(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(6);
    const [userToDelete, setUserToDelete] = useState<any>(null);

    // Fetching providers data using the useProvidersQuery hook
    const { data, isLoading, isError }: any = useProvidersQuery(undefined);
    const [deleteUser] = useDeleteUserMutation();
    const [updateProviderStatus] = useUpdateProviderStatusMutation(); // Mutation for updating status
    const providers = data?.data; // Assuming data contains the list of providers

    const totalPages = Math.ceil((providers?.length || 0) / itemsPerPage);
    const paginatedProviders = providers?.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    const handleItemsPerPageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setItemsPerPage(Number(event.target.value));
        setCurrentPage(1);
    };

    const formatDate = (dateString: any) => {
        const options: any = { day: 'numeric', month: 'short', year: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-US', options);
    };

    const handleDeleteClick = (provider: any) => {
        setUserToDelete(provider);
        setShowConfirmModal(true);
    };

    const handleCloseDeleteModal = () => {
        setShowConfirmModal(false);
        setUserToDelete(null);
    };

    const handleDeleteConfirm = async () => {
        if (userToDelete) {
            await deleteUser(userToDelete?.id);
            setShowConfirmModal(false);
            setUserToDelete(null);
        }
    };

    const handleApprovalStatusChange = async (providerId: string, event: React.ChangeEvent<HTMLSelectElement>) => {
        const newStatus = event.target.value;
        try {
          const res =   await updateProviderStatus({ id: providerId,body:{ approvalStatus: newStatus} }).unwrap(); 
          console.log(res,'60')
          if(res?.data) {
            ShowToast({
                message: res?.message,
              });
          }
  
        } catch (error) {
            console.error('Error updating approval status:', error);
        }
    };

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error loading providers.</div>;

    return (
      <>
         <Toaster position="top-center" reverseOrder={false} />
        <div className="px-6 py-7">
            <div className="flex justify-between mb-8">
                <h2 className="text-2xl font-semibold text-[#2a2a3d]">Provider Listing</h2>
            </div>

            {/* Only show the table and pagination if there are providers */}
            {providers && providers.length > 0 ? (
                <>
                    <div className="rounded-lg">
                        <div className="overflow-x-auto">
                            <table className="min-w-full bg-white border border-gray-200 rounded-md">
                                <thead className="text-gray-600 uppercase text-md">
                                    <tr className="border-b border-gray-200">
                                        <th className="py-4 px-6 text-left">Name</th>
                                        <th className="py-4 px-6 text-left">Email</th>
                                        <th className="py-4 px-6 text-left">Phone</th>
                                        <th className="py-4 px-6 text-left">Gender</th>
                                        <th className="py-4 px-6 text-left">Date of Join</th>
                                        <th className="py-4 px-6 text-left">Approval Status</th>
                                        <th className="py-4 px-6 text-center">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-600 text-md font-light">
                                    {paginatedProviders?.map((provider: any) => (
                                        <tr key={provider.id} className="border-b border-gray-200 hover:bg-gray-100">
                                            <td className="py-4 px-6 text-left whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <img
                                                        className="w-8 h-8 rounded-full mr-3"
                                                        src={provider.profileImg[0]}
                                                        alt={`${provider.fName} ${provider.lName}`}
                                                    />
                                                    <span className="font-medium">{`${provider.fName} ${provider.lName}`}</span>
                                                </div>
                                            </td>
                                            <td className="py-4 px-6 text-left">
                                                <span>{provider.email}</span>
                                            </td>
                                            <td className="py-4 px-6 text-left">
                                                <span>{provider.contactNo}</span>
                                            </td>
                                            <td className="py-4 px-6 text-left">
                                                <span>{provider.gender}</span>
                                            </td>
                                            <td className="py-4 px-6 text-left">
                                                <span>{formatDate(provider.createdAt)}</span>
                                            </td>
                                            <td className="py-4 px-6 text-left">
                                                <select
                                                    value={provider.approvalStatus}
                                                    onChange={(event) => handleApprovalStatusChange(provider.id, event)}
                                                    className="border border-gray-300 rounded-md px-2 py-1"
                                                >
                                                    <option value="Pending">Pending</option>
                                                    <option value="Approved">Approved</option>
                                                    <option value="Rejected">Rejected</option>
                                                </select>
                                            </td>
                                            <td className="py-3 px-6 text-center">
                                                <div className="flex item-center justify-center space-x-4">
                                                    <button className="text-blue-600 hover:text-gray-700 transform hover:scale-110">
                                                        <FaEye size={16} />
                                                    </button>
                                                    <button
                                                        className="text-red-500 hover:text-red-700 transform hover:scale-110"
                                                        onClick={() => handleDeleteClick(provider)}
                                                    >
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

                    {providers.length > 0 && (
                        <div className="flex items-center justify-end mt-10">
                            <ItemsPerPageSelector
                                itemsPerPage={itemsPerPage}
                                onItemsPerPageChange={handleItemsPerPageChange}
                            />
                            <Pagination
                                currentPage={currentPage}
                                totalPages={totalPages}
                                onPageChange={setCurrentPage}
                            />
                        </div>
                    )}
                </>
            ) : (
                <div className="text-center text-gray-500 mt-6">No providers available.</div>
            )}

            <ConfirmModal
                isOpen={showConfirmModal}
                onClose={handleCloseDeleteModal}
                onConfirm={handleDeleteConfirm}
                message={`Are you sure you want to delete the provider "${userToDelete?.fName} ${userToDelete?.lName}"?`}
            />
        </div>
      </>
    );
};

export default ProviderPage;
