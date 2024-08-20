"use client";
import CategoryField from '@/components/Forms/CategoryField';
import Form from '@/components/Forms/Form';
import FormInput from '@/components/Forms/FormInput';
import FormTextArea from '@/components/Forms/FormTextArea';
import { useAddServiceMutation } from '@/redux/api/servicesApi';
import Image from 'next/image';
import React, { useRef, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { IoCloudUploadOutline } from 'react-icons/io5';
import { TiTickOutline, TiDeleteOutline } from 'react-icons/ti';
import { yupResolver } from "@hookform/resolvers/yup";
import serviceSchema from '@/schemas/service';

interface ServiceImage {
  id: number;
  url: string;
}

const CreateService = () => {
  const [serviceImgs, setServiceImgs] = useState<ServiceImage[]>([]);
  const [imgPreviews, setImgPreviews] = useState<string[]>([]);
  const [imgError, setImgError] = useState<string | null>(null);
  const hiddenFileInput = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [addService] = useAddServiceMutation();

  const onSubmit = async (values: any) => {
    if (serviceImgs.length < 4) {
      setImgError("You must upload at least 4 images.");
      return;
    }

    setImgError(null); // Reset any existing error

    values.price = parseInt(values.price);
    if (serviceImgs.length > 0) {
      values.serviceImg = serviceImgs.map(img => img.url);
    }

    try {
      setLoading(true);

      const res = await addService(values).unwrap();

      if (res) {
        setLoading(false);
        toast("Services Created Successfully", {
          icon: <span style={{ marginRight: -8, fontSize: 22 }}><TiTickOutline /></span>,
          style: {
            borderRadius: "10px",
            background: "#4f46e5",
            color: "#fff",
          },
          duration: 2000,
        });

        setServiceImgs([]);
        setImgPreviews([]);
      } else {
        throw new Error("Unexpected response format");
      }
    } catch (err:any) {
      console.log(err,'64')
      setServiceImgs([]);
      setImgPreviews([]);
      // Handle error
      toast.error(err?.data);
      setLoading(false);
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
        setImgError(null); // Reset any image error on successful upload
      })
      .catch(error => {
        console.error("Error reading files: ", error);
        setImgError("An error occurred while uploading images.");
      });
  };

  const handleRemoveImage = (id: number) => {
    const updatedImages = serviceImgs.filter(img => img.id !== id);
    const updatedPreviews = updatedImages.map(img => img.url);
  
    setServiceImgs(updatedImages);
    setImgPreviews(updatedPreviews);
  };
  

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="max-w-4xl mx-auto bg-white p-10 rounded-lg">
        <div className="mb-8 text-center">
          <h2 className="text-4xl font-bold text-[#2a2a3d] tracking-tight">
            Create Service
          </h2>
          <p className="text-gray-500 mt-2">Fill in the details to create your service offering.</p>
        </div>
        <div className="relative">
          <div className="w-full">
            <Form submitHandler={onSubmit} resolver={yupResolver(serviceSchema)}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
                <FormInput name="serviceName" label="Service Name" type="text" />
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
                  <span className="ml-2 text-sm">Upload Images</span>
                </button>

                <input
                  type="file"
                  multiple
                  onChange={handleChange}
                  ref={hiddenFileInput}
                  style={{ display: 'none' }}
                />

                {imgError && <p className="text-red-500 text-sm">{imgError}</p>}

                {imgPreviews.length > 0 && (
                  <div className="mt-4 flex gap-2 flex-wrap">
                    {imgPreviews.map((img, index) => (
                      <div key={index} className="relative">
                        <Image
                          src={img}
                          alt={`Service Image ${index + 1}`}
                          height={80}
                          width={80}
                          className="rounded-md  shadow-md h-[80px] w-[80px]"
                        />
                        <button
                          type="button"
                          onClick={() => handleRemoveImage(serviceImgs[index].id)}
                          className="absolute top-0 right-0 p-1 bg-white rounded-full text-red-500 hover:bg-red-500 hover:text-white transition ease-in duration-200"
                        >
                          <TiDeleteOutline size={20} />
                        </button>
                      </div>
                    ))}
                  </div>
                )}

                {imgPreviews.length < 4 && (
                  <p className="text-sm text-gray-500 mt-2">Please select at least 4 images.</p>
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
                  className={`text-[#4f46e5] hover:bg-[#4f46e5] inline-flex items-center hover:text-white px-4 py-2 rounded text-md border border-[#4f46e5] ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                  disabled={loading}
                >
                  {loading ? 'Adding...' : 'Create Service'}
                </button>
              </div>

            </Form>
          </div>
        </div>
        {loading && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-40">
            <div className="w-16 h-16 border-4 border-t-4 border-t-blue-500 border-gray-300 rounded-full animate-spin"></div>
          </div>
        )}
      </div>
    </>
  );
};

export default CreateService;
