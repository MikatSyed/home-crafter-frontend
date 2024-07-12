"use client";
import React, { useState } from 'react';
import { Swiper, SwiperSlide, Swiper as SwiperType } from 'swiper/react';
import 'swiper/css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const images: string[] = [
  'https://images.unsplash.com/photo-1504675099198-7023dd85f5a3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1571104508999-893933ded431?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
];

const Gallery: React.FC = () => {
  const [swiper, setSwiper] = useState<any | null>(null);

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

  return (
    <div className="mx-auto py-4">
      <div className="flex items-center justify-between mb-4">
        <h5 className="text-2xl font-semibold">Gallery</h5>
        <div className="flex space-x-2">
        <button className="btn btn-arrow rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white p-3 shadow-lg hover:shadow-xl focus:outline-none transform transition-transform duration-200 ease-out hover:-translate-y-1">
          <FaArrowLeft className="w-5 h-5"   onClick={handlePrevious} />
        </button>
        <button className="btn btn-arrow rounded-full bg-gradient-to-r from-green-400 to-blue-500 text-white p-3 shadow-lg hover:shadow-xl focus:outline-none transform transition-transform duration-200 ease-out hover:-translate-y-1">
          <FaArrowRight className="w-5 h-5"  onClick={handleNext}/>
        </button>
        </div>
      </div>
      <Swiper
        onSwiper={handleSwiper}
        loop={true}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              className="w-full h-64 object-cover rounded"
              src={image}
              alt={`Gallery image ${index + 1}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Gallery;
