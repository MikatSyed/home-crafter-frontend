import React from "react";
import { FaStar } from "react-icons/fa";
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
import Gallery from "./Gallery";
import VideoComponent from "./VideoComponent";
import ReviewComponent from "./ReviewComponent";
import RelatedServices from "./RelatedService";
import ServiceCard from "./ServiceCard";
import Review from "./Review";

// Define the types for the service data
interface ServiceData {
  serviceName: string;
  description: string;
  price: number;
  location: string;
  duration: string;
  videoUrl: string;
  serviceImg: string[];
}

interface ProviderInfoProps {
  data: {
    data: ServiceData;
  };
}

const ProviderInfo: React.FC<ProviderInfoProps> = ({ data }) => {
  const service:any = data?.data;
  const images = service?.serviceImg || [];
  const videoUrl = service?.videoUrl;
  const serviceId = service?.id;
  const categoryId = service?.categoryId;


  return (
    <div>
      <div className="mx-auto px-6 md:px-[7rem] py-4">
        <div className="flex flex-wrap lg:flex-nowrap ">
          <div className="lg:w-2/3 w-full mb-8 lg:mb-0  md:h-[1700px] overflow-y-auto scrollbar-hide">
            <div>
              <h5 className="text-2xl font-semibold mb-4">Service Details</h5>
              <p className="text-gray-700">{service?.description}</p>
            </div>
            <div className="py-6">
              <h5 className="text-2xl font-semibold mb-4">Service Provider</h5>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex ">
                  <div>
                    <img
                      src="/assets/avatar-02.jpg"
                      className="img-fluid rounded-full w-16 h-16"
                      alt="img"
                    />
                  </div>
                  <div className="ml-3">
                    <h6 className="text-lg font-semibold mb-2">Member Since</h6>
                    <div className="text-yellow-500 text-sm">
                      <FaStar className="inline" />{" "}
                      <span className="text-gray-700">4.9</span>{" "}
                      <span className="text-gray-500">(255 reviews)</span>
                    </div>
                  </div>
                </div>

                <div className="flex ">
                  <div>
                    <span className="text-md text-gray-700 block p-4 rounded-full bg-[#f8fcfd]">
                      <FiUser />
                    </span>
                  </div>
                  <div className="ml-3">
                    <h6 className="text-lg font-semibold mb-2">Member Since</h6>
                    <p className="text-sm text-gray-500 font-normal">
                      Apr 2020
                    </p>
                  </div>
                </div>

                <div className="flex ">
                  <div>
                    <span className="text-md text-gray-700 block p-4 rounded-full bg-[#f8fcfd]">
                      <FiMapPin />
                    </span>
                  </div>
                  <div className="ml-3">
                    <h6 className="text-lg font-semibold mb-2">Address</h6>
                    <p className="text-sm text-gray-500 font-normal">
                      Hanover, Maryland
                    </p>
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
                      thomash@example.com
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
                      +1 888 888 8888
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
            <Gallery images={images} />
            <VideoComponent videoUrl={videoUrl || ''} />
            <Review  serviceId={serviceId}/>
            <ReviewComponent serviceId={serviceId} />
            <RelatedServices categoryId={categoryId} serviceId={serviceId}/>
          </div>

          <div className="lg:w-1/3 w-full lg:pl-8 right md:h-[1700px] ">
            <ServiceCard  id={serviceId} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProviderInfo;