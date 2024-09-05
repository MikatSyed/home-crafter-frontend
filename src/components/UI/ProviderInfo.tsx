import React from "react";
import {
  FiUser,
  FiMapPin,
  FiMail,
  FiPhone,
  FiInstagram,
  FiTwitter,
  FiYoutube,
  FiLinkedin,
} from "react-icons/fi";
import { FaStar } from "react-icons/fa";

// Define the types for the provider data
interface ProviderInfoProps {
  provider: {
    fName: string;
    lName: string;
    email: string;
    contactNo: string;
    address: string;
    profileImg: string[];
  };

}

const ProviderInfo: React.FC<ProviderInfoProps> = ({ provider }) => {
  const providerName = `${provider?.fName} ${provider?.lName}`;

  return (
    <div className="py-6">
      <h5 className="text-2xl font-semibold mb-4">Service Provider</h5>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex">
          <div>
            <img
              src={provider?.profileImg[0]}
              className="img-fluid rounded-full w-16 h-16"
              alt="Provider"
            />
          </div>
          <div className="ml-3">
            <h6 className="text-lg font-semibold mb-2">Rating</h6>
            <div className="text-yellow-500 text-sm">
              <FaStar className="inline" />{" "}
              <span className="text-gray-700">4.9</span>{" "}
              <span className="text-gray-500">(255 reviews)</span>
            </div>
          </div>
        </div>

        <div className="flex">
          <div>
            <span className="text-md text-gray-700 block p-4 rounded-full bg-[#f8fcfd]">
              <FiUser />
            </span>
          </div>
          <div className="ml-3">
            <h6 className="text-lg font-semibold mb-2">Provider</h6>
            <p className="text-sm text-gray-500 font-normal">{providerName}</p>
          </div>
        </div>

        <div className="flex">
          <div>
            <span className="text-md text-gray-700 block p-4 rounded-full bg-[#f8fcfd]">
              <FiMapPin />
            </span>
          </div>
          <div className="ml-3">
            <h6 className="text-lg font-semibold mb-2">Address</h6>
            <p className="text-sm text-gray-500 font-normal">{provider?.address}</p>
          </div>
        </div>

        <div className="flex mt-4">
          <div>
            <span className="text-md text-gray-700 block p-4 rounded-full bg-[#f8fcfd]">
              <FiMail />
            </span>
          </div>
          <div className="ml-3">
            <h6 className="text-lg font-semibold mb-2">Email</h6>
            <p className="text-sm text-gray-500 font-normal">
              {provider?.email}
            </p>
          </div>
        </div>

        <div className="flex mt-4">
          <div>
            <span className="text-md text-gray-700 block p-4 rounded-full bg-[#f8fcfd]">
              <FiPhone />
            </span>
          </div>
          <div className="ml-3">
            <h6 className="text-lg font-semibold mb-2">Phone</h6>
            <p className="text-sm text-gray-500 font-normal">
              {provider?.contactNo}
            </p>
          </div>
        </div>

        <div className="mt-4 flex md:justify-center items-center">
          <ul className="flex space-x-4">
            <li>
              <a
                href="#"
                target="_blank"
                className="text-lg text-gray-700 block p-4 rounded-full bg-[#f8fcfd]"
              >
                <FiInstagram />
              </a>
            </li>
            <li>
              <a
                href="#"
                target="_blank"
                className="text-lg text-gray-700 block p-4 rounded-full bg-[#f8fcfd]"
              >
                <FiTwitter />
              </a>
            </li>
            <li>
              <a
                href="#"
                target="_blank"
                className="text-lg text-gray-700 block p-4 rounded-full bg-[#f8fcfd]"
              >
                <FiYoutube />
              </a>
            </li>
            <li>
              <a
                href="#"
                target="_blank"
                className="text-lg text-gray-700 block p-4 rounded-full bg-[#f8fcfd]"
              >
                <FiLinkedin />
              </a>
            </li>
          </ul>
        </div>
        
      </div>
    </div>
  );
};

export default ProviderInfo;
