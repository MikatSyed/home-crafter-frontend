"use client";

import { FaTimes } from "react-icons/fa";
import Image from "next/image";
import { useAppDispatch } from "@/redux/hook";
import { removeFavourite } from "@/redux/features/favouritesSlice";

interface Service {
  id: number;
  serviceName: string;
  regularPrice: string;
  serviceImg: string[];
}

interface CartProps {
  services: Service[];
  onClose: () => void;
}

const Cart: React.FC<CartProps> = ({ services, onClose }) => {
  const dispatch = useAppDispatch();

  return (
    <div className="fixed top-0 right-0 h-full bg-white shadow-xl z-50 w-[320px] md:w-[400px] overflow-y-auto flex flex-col"> {/* Added flex-col */}
      <div className="p-4 flex justify-between items-center border-b">
        <h2 className="text-lg font-semibold text-gray-800">Favorite Services</h2>
        <button
          className="p-2 bg-white border border-indigo-600 text-indigo-600 rounded-full hover:bg-indigo-600 hover:text-white transition"
          onClick={onClose}
        >
          <FaTimes className="text-xl" />
        </button>
      </div>

      {/* Content Container */}
      <div className="p-4 flex-grow"> {/* Use flex-grow to fill available space */}
        {services.length > 0 ? (
          services.map((service) => (
            <div
              key={service.id}
              className="flex items-center justify-between border-t border-b py-4"
            >
              <div className="flex items-center space-x-3">
                <Image
                  src={service.serviceImg[service.serviceImg.length - 1] || "/default-image.jpg"}
                  alt={service.serviceName}
                  width={100}
                  height={100}
                  className="w-[100px] h-[60px] rounded-lg object-cover"
                />
                <div>
                  <h3 className="font-semibold text-gray-800">{service.serviceName}</h3>
                  <p className="text-sm text-gray-500">${service.regularPrice}</p>
                </div>
              </div>
              <button
                className="text-red-500"
                onClick={() => dispatch(removeFavourite(service.id))}
              >
                <FaTimes />
              </button>
            </div>
          ))
        ) : (
          <div className="flex flex-col items-center justify-center h-full">
            <p className="text-gray-800 font-medium text-md">No favorite services yet.</p>
            <p className="text-gray-600 font-normal text-sm">Add your favourite services and they will appear here</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
