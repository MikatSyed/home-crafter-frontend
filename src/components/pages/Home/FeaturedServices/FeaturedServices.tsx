"use client";
import React from "react";
import { useServicesQuery } from "@/redux/api/servicesApi";
import ServiceCard from "@/components/UI/ServiceCard";
import Loader from "@/components/UI/Loader";

const FeaturedServices = () => {
  const { data, isLoading } = useServicesQuery(undefined);
  const services = data?.data;


  if (isLoading) {
    return <Loader />;
  }

  return (
   <div className="main mx-auto">
     <ServiceCard
      data={services}
      title="Featured Services"
      description="Explore the greatest of our services. You won’t be disappointed."
    />
   </div>
  );
};

export default FeaturedServices;
