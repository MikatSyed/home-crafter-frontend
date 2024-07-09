"use client";
import React from 'react';
import ReactStars from 'react-rating-stars-component';
import Image from 'next/image';
import avatar1 from '../../../public/assets/avatar-01.jpg';
import avatar2 from '../../../public/assets/avatar-02.jpg';
import avatar3 from '../../../public/assets/avatar-03.jpg';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
interface TestimonialData {
  image: any;
  text: string;
  name: string;
  position: string;
  rating: number;
}

const testimonials: TestimonialData[] = [
  {
    image: avatar1,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
    name: 'Sophie Moore',
    position: 'Director',
    rating: 4.5,
  },
  {
    image: avatar2,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
    name: 'Mike Hussy',
    position: 'Lead',
    rating: 5,
  },
  {
    image: avatar3,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
    name: 'Mike Hussy',
    position: 'Lead',
    rating: 5,
  },
];

const Testimonial: React.FC = () => {
  return (
    <div className="mx-auto px-6 md:px-[7rem] bg-[#f8fcfd] py-20">
      <div className="text-center mb-16">
        <div className="section-heading" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-indigo-900">What our clients say</h2>
          <p className="text-gray-600 mt-4">Lorem ipsum dolor sit amet, consectetur elit</p>
        </div>
      </div>
      <Swiper
              modules={[Pagination]}
              className="mySwiper"
              pagination
              breakpoints={{
                640: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                992: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
              }}
            >
   <div className="grid grid-cols-1 md:grid-cols-2 gap-12" data-aos="fade-up">
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index} className="bg-white p-8 rounded-lg  transition duration-300  h-[250px]">
            <div className="client-img flex justify-center mb-4 relative">
              <a href="#">
                <div className="image-half-bg absolute top-0 left-0 w-full h-full bg-[#f8fcfd] rounded-t-lg"></div>
                <Image src={testimonial.image} alt={`Image of ${testimonial.name}`} className="rounded-full w-24 h-24 border-4 border-indigo-100 relative z-10" />
              </a>
            </div>
            <div className="text-center h-[50%] flex flex-col justify-center">
              <div className="rating  flex justify-center items-center">
                <ReactStars
                  count={5}
                  value={testimonial.rating}
                  size={24}
                  isHalf={true}
                  edit={false}
                  emptyIcon={<i className="far fa-star"></i>}
                  halfIcon={<i className="fa fa-star-half-alt"></i>}
                  fullIcon={<i className="fa fa-star"></i>}
                  activeColor="#ffd700"
                />
              </div>
              <p className="text-gray-700 mb-2">{testimonial.text}</p>
              <h5 className="text-xl font-bold text-indigo-700">{testimonial.name}</h5>
            
            </div>
          </SwiperSlide>
        ))}
      </div>
            </Swiper>
   
    </div>
  );
};

export default Testimonial;
