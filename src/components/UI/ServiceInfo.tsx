import React from "react";
import Gallery from "./Gallery";
import VideoComponent from "./VideoComponent";
import ReviewComponent from "./ReviewComponent";
import RelatedServices from "./RelatedService";
import ServiceCard from "./ServiceCard";
import Review from "./Review";
import ProviderInfo from "./ProviderInfo";


// Define the types for the service data
interface ServiceData {
  id: string;
  serviceName: string;
  description: string;
  regularPrice: number;
  location: string;
  duration: string;
  videoUrl: string;
  serviceImg: string[];
  keyFeature1:string;
  keyFeature2:string;
  keyFeature3:string;
  keyFeature4:string;
  provider: {
    fName: string;
    lName: string;
    email: string;
    contactNo: string;
    address: string;
    profileImg: string[];
  };
  categoryId: string;
}

interface ProviderInfoProps {
  data: {
    data: ServiceData;
  };
}

const ServiceInfo: React.FC<ProviderInfoProps> = ({ data }) => {
  const service = data?.data;
  const images = service?.serviceImg || [];
  const videoUrl = service?.videoUrl;
  const serviceId = service?.id;
  const categoryId = service?.categoryId;

  return (
    <div>
      <div className="mx-auto px-6 md:px-[6rem] ">
        <div className="flex flex-wrap lg:flex-nowrap">
          <div className="lg:w-2/3 w-full mb-8 lg:mb-0 md:h-[1700px] overflow-y-auto scrollbar-hide">
            <div>
              <h5 className="text-2xl font-semibold mb-4">Service Details</h5>
              <p className="text-gray-700">{service?.description}</p>
            </div>
            {/* Provider Info Component */}
            <ProviderInfo provider={service?.provider} />
            <Gallery images={images} />
            <VideoComponent videoUrl={videoUrl || ''} />
            <Review serviceId={serviceId} />
            <ReviewComponent serviceId={serviceId} />
            <RelatedServices categoryId={categoryId} serviceId={serviceId} />
          </div>

          <div className="lg:w-1/3 w-full lg:pl-8 right md:h-[1700px]">
            <ServiceCard service={service} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceInfo;