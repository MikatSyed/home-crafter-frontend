"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import { FiMapPin } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useOfferServicesQuery } from "@/redux/api/servicesApi";
import Link from "next/link";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useFavourites } from "@/redux/hook";
import { Toaster } from "react-hot-toast";
import Rating from "@/components/UI/Rating";
import ServiceSkeletonCard from "@/components/UI/ServiceSkeletonCard";
import ServiceCard from "@/components/UI/ServiceCard";

const OfferedServices = () => {
  const [swiper, setSwiper] = useState<any | null>(null);
  const { isServiceFavourite, handleFavouriteClick } = useFavourites();

  const handleSwiper = (swiper: any) => {
    setSwiper(swiper);
  };

  const handlePrevious = () => {
    if (swiper) {
      swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiper) {
      swiper.slideNext();
    }
  };

  const { data, isLoading } = useOfferServicesQuery(undefined);
  const services = data?.data;

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
        <ServiceCard
            data={services}
            title="Offered Services"
            description=" Limited-time offer on our services. Don't miss out—grab it
                before it expires!"
            isLoading={isLoading}
          />
  
    </>
  );
};

export default OfferedServices;
