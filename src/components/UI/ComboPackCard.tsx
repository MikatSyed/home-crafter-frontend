// ComboPackCard.js
import React from 'react';
import Image from 'next/image';
import { FiCheck } from 'react-icons/fi';

const ComboPackCard = ({ name, services, providerImage, providerName, providerInfo, price }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 h-auto">
      {/* Plan Title */}
      <h3 className="text-2xl font-bold text-gray-900 mb-4">{name} </h3>
      
      {/* Price Design */}
      <div className="flex justify-center items-center mb-6 p-3">
        <div className="bg-indigo-600 text-white font-semibold text-xl w-16 h-16 flex items-center justify-center rounded-full shadow-sm">
          ${price || 23}
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
          {services.map((service, index) => (
            <li key={index} className="flex items-center text-gray-700">
              <FiCheck className="mr-2 text-indigo-600" />
              {service}
            </li>
          ))}
        </ul>
      </div>

      {/* Book Now Button */}
      <div className="mt-6 text-center">
        <button className="text-indigo-600 bg-white border border-indigo-600 px-6 py-3 rounded-full shadow hover:bg-indigo-700 hover:text-white transition duration-300">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default ComboPackCard;
