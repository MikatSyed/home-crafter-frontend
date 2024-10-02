// ComboPackCard.js
import React, { useState } from 'react';
import Image from 'next/image';
import { FiCheck, FiEdit, FiTrash } from 'react-icons/fi';
import UpdateComboPack from '../EditComboPack/UpdateComboPack';



const ComboPackCard = ({ id, name, services, providerImage, providerName, providerInfo, amount, onEdit, onDelete }: any) => {
    const [showCreateModal, setShowCreateModal] = useState<boolean>(false);
    const [selectedService, setSelectedService] = useState<string | null>(null);
    console.log(services,'11')
    return (
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 h-auto">
            {/* Plan Title */}
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{name}</h3>

            {/* Price Design */}
            <div className="flex justify-center items-center mb-6 p-3">
                <div className="bg-indigo-600 text-white font-semibold text-xl w-16 h-16 flex items-center justify-center rounded-full shadow-sm">
                    ${amount || ""}
                </div>
            </div>

            {/* Provider Information */}
            <div className="flex items-center mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                    <Image src={providerImage} alt={`${providerName} Image`} width={64} height={64} />
                </div>
                <div>
                    <h4 className="text-xl font-semibold">{providerName}</h4>
                    <p className="text-gray-600 text-sm">{providerInfo}</p>
                </div>
            </div>

            {/* Services Included */}
            <div className="mt-4">
                <h4 className="text-xl font-semibold">Services Included:</h4>
                <ul className="list-disc list-inside mt-2 space-y-2">
                    {services.map((service:any, index: number) => (
                        <li key={service.id} className="flex items-center text-gray-700">
                            <FiCheck className="mr-2 text-indigo-600" />
                            {service}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Edit and Delete Buttons */}
            <div className="mt-6 flex justify-center space-x-6">
                <button
                    onClick={() => {
                        setShowCreateModal(true);
                        setSelectedService(id); // Set the selected service ID
                    }}
                    className="text-indigo-600 hover:text-indigo-700 transform hover:scale-110 flex items-center justify-center"
                    title="Edit"
                >
                    <FiEdit size={20} />
                </button>
                <button
                    onClick={onDelete}
                    className="text-red-600 hover:text-red-700 transform hover:scale-110 flex items-center justify-center"
                    title="Delete"
                >
                    <FiTrash size={20} />
                </button>
            </div>

            
            <UpdateComboPack
                show={showCreateModal}
                onClose={() => {
                    setShowCreateModal(false);
                    setSelectedService(null); 
                }}
                serviceId={selectedService} 
            />
        </div>
    );
};

export default ComboPackCard;
