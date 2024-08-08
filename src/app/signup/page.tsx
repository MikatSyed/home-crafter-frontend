"use client";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import FormSelectField from "@/components/Forms/FormSelectField";

import { AiOutlineCloudUpload } from "react-icons/ai";
import { useRef } from "react";

import Image from "next/image";
import Navbar from "@/components/UI/Navbar";

interface ServiceImage {
  id: number;
  url: string;
}
const Signup = () => {
  const {push} = useRouter();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [images, setImages] = useState<ServiceImage[]>([]);
  // console.log(images);

  const [imagesPreview, setImagesPreview] = useState<string[]>([]);
  const router = useRouter();


  const onSubmit = async (values: any) => {
    images.forEach((image) => {
      values.imageUrl = image?.url;
    });
    try {
   
      
    } catch (err) {
  
    }
  };




  return (
    <>
      <Toaster position="bottom-right" reverseOrder={false} />
<Navbar/>
<div className="flex justify-center items-center min-h-screen  relative">
  <div className="w-full max-w-xl  flex justify-center items-center">
    <div className="p-12 bg-white   rounded-3xl w-full ">
      <div className="mb-7">
        <h3 className="font-semibold text-3xl text-gray-800">Register</h3>
      </div>
      <Form submitHandler={onSubmit}>
        <div className="flex flex-col sm:flex-row sm:space-x-4 mb-4">
          <FormInput name="name.firstName" label="First Name" type="text" />
          <FormInput name="name.lastName" label="Last Name" type="text" />
        </div>
        <FormInput name="email" label="Email" type="email" />
        <FormInput name="phoneNumber" label="Phone Number" type="number" />
        <div className="relative mb-5">
          <FormInput
            name="password"
            label="Password"
            type={passwordVisible ? "text" : "password"}
          />
          <div className="flex items-center absolute inset-y-0 right-0 mr-3 text-sm leading-5">
            {passwordVisible ? (
              <FaEyeSlash
                onClick={() => setPasswordVisible(!passwordVisible)}
              />
            ) : (
              <FaEye onClick={() => setPasswordVisible(!passwordVisible)} />
            )}
          </div>
        </div>
        <div className="flex items-center justify-start flex-col gap-1 w-full h-full rounded-md">
          <button
            className="w-full rounded-md text-4xl lg:text-5xl md:mt-2 flex items-center justify-center text-gray-400 bg-gray-200  border-dashed"
            type="button"
          >
            <AiOutlineCloudUpload />
          </button>
          <input type="file" style={{ display: "none" }} />
          {imagesPreview.map((image, index) => (
            <div key={index}>
              <Image src={image} alt="User Image" height={100} width={100} />
            </div>
          ))}
        </div>
        <div className="mt-5">
          <button
            type="submit"
            className="w-full flex justify-center bg-[#1475c6] text-white p-3 rounded-lg tracking-wide font-semibold cursor-pointer transition ease-in duration-500"
          >
            Register
          </button>
        </div>
      </Form>
      <div className="flex items-center justify-between mt-5">
        <div className="text-sm">
          Already have an account?
          <a href="/login" className="text-blue-700 hover:text-blue-600 ml-1">
            Login
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  );
};

export default Signup;
