"use client";
import CategoryField from '@/components/Forms/CategoryField';
import Form from '@/components/Forms/Form';
import FormInput from '@/components/Forms/FormInput';
import FormTextArea from '@/components/Forms/FormTextArea';
import { useAddServiceMutation } from '@/redux/api/servicesApi';
import Image from 'next/image';
import React, { useRef, useState } from 'react';
import { IoCloudUploadOutline } from 'react-icons/io5';

interface ServiceImage {
  id: number;
  url: string;
}

const CreateService = () => {
  const [serviceImgs, setServiceImgs] = useState<ServiceImage[]>([]);
  console.log(serviceImgs,'18')
  const [imgPreviews, setImgPreviews] = useState<string[]>([]);
  console.log(imgPreviews,'20')
  const hiddenFileInput = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [addService] = useAddServiceMutation();

  const onSubmit = async (values: any) => {
    values.price = parseInt(values.price);
    if (serviceImgs.length > 0) {
      values.service_img = serviceImgs.map(img => img.url);
    }
    try {
      const res = await addService(values).unwrap();
      // Handle success (e.g., redirect to another page)
    } catch (err) {
      // Handle error
    }
  };

  const handleClick = () => {
    hiddenFileInput.current?.click();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
  
    const fileArray = Array.from(files);
    const newPreviews: string[] = [];
    const newImages: ServiceImage[] = [];
  
    const readFiles = fileArray.map(file => {
      return new Promise<void>((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
          if (reader.readyState === 2) {
            const result = reader.result as string;
            const newImage = { id: Date.now(), url: result };
  
            newImages.push(newImage);
            newPreviews.push(result);
            resolve();
          }
        };
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });
    });
  
    Promise.all(readFiles)
      .then(() => {
        setServiceImgs(prevImgs => [...prevImgs, ...newImages]);
        setImgPreviews(prevPreviews => [...prevPreviews, ...newPreviews]);
      })
      .catch(error => {
        console.error("Error reading files: ", error);
      });
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-10 rounded-lg">
      <div className="mb-8 text-center">
        <h2 className="text-4xl font-bold text-[#2a2a3d] tracking-tight">
          Create Service
        </h2>
        <p className="text-gray-500 mt-2">Fill in the details to create your service offering.</p>
      </div>
      <div className="relative">
        <div className="w-full">
          <Form submitHandler={onSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
              <FormInput name="service_name" label="Service Name" type="text" />
              <FormInput name="price" label="Price" type="number" className="border border-gray-300 focus:border-[#1475c6] focus:ring-[#1475c6] transition ease-in duration-200" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
              <FormInput name="location" label="Location" type="text" className="border border-gray-300 focus:border-[#1475c6] focus:ring-[#1475c6] transition ease-in duration-200" />
              <FormInput name="duration" label="Duration" type="text" className="border border-gray-300 focus:border-[#1475c6] focus:ring-[#1475c6] transition ease-in duration-200" />
            </div>

            <div className="mb-8">
              <CategoryField name="categoryId" label="Category" />
            </div>

            <div className="mb-8">
              <FormTextArea name="description" label="Description" rows={5} />
            </div>

            <div className="mb-8">
              <FormInput name="videoUrl" label="Video URL (Optional*)" type="url" className="border border-gray-300 focus:border-[#1475c6] focus:ring-[#1475c6] transition ease-in duration-200" />
            </div>

            <div className="flex flex-col gap-3 w-full h-full rounded-md mb-8">
              <span className="font-medium text-black text-sm">
                Upload Service Images
              </span>
              <button
                className="w-full rounded-lg text-3xl lg:text-4xl flex items-center justify-center text-gray-500 py-12 border border-dashed border-gray-300 hover:text-[#1475c6] hover:border-[#1475c6] transition ease-in duration-300"
                onClick={handleClick}
                type="button"
              >
                <IoCloudUploadOutline />
              </button>

              <input
                type="file"
                multiple
                onChange={handleChange}
                ref={hiddenFileInput}
                style={{ display: 'none' }}
              />
              {imgPreviews.length > 0 && (
                <div className="mt-4 grid grid-cols-3 gap-4">
                  {imgPreviews.map((img, index) => (
                    <Image
                      key={index}
                      src={img}
                      alt={`Service Image ${index + 1}`}
                      height={80}
                      width={80}
                      className="rounded-md object-cover shadow-md"
                    />
                  ))}
                </div>
              )}
            </div>

            <div className='flex'>
              <button
                type="button"
                className="bg-white border text-black hover:text-white py-2 px-4 rounded-lg cursor-pointer hover:bg-[#4f46e5] mr-3"
              >
                Back
              </button>
              <button type="submit"
                className="text-[#4f46e5] hover:bg-[#4f46e5] inline-flex items-center hover:text-white px-4 py-2 rounded text-md border border-[#4f46e5]"
              >
                Add Service
              </button>
            </div>

          </Form>
        </div>
      </div>
    </div>
  );
};

export default CreateService;
