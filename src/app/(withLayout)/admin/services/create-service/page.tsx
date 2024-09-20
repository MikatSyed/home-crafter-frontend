"use client"
import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAddServiceMutation } from '@/redux/api/servicesApi';
import { TiTickOutline } from 'react-icons/ti';
import CategoryField from '@/components/Forms/CategoryField';
import Form from '@/components/Forms/Form';
import FormInput from '@/components/Forms/FormInput';
import FormTextArea from '@/components/Forms/FormTextArea';
import Spinner from '@/components/UI/Spinner';
import serviceSchema from '@/schemas/service';
import MultipleImageUpload from '@/components/UI/MultipleImageUpload';

interface ServiceImage {
  id: number;
  url: string;
}

const CreateService = () => {
  const [serviceImgs, setServiceImgs] = useState<ServiceImage[]>([]);
  const [imgError, setImgError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [addService] = useAddServiceMutation();

  const onSubmit = async (values: any) => {
    if (serviceImgs.length < 4) {
      setImgError('You must upload at least 4 images.');
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
        toast('Services Created Successfully', {
          icon: <span style={{ marginRight: -8, fontSize: 22 }}><TiTickOutline /></span>,
          style: {
            borderRadius: '10px',
            background: '#4f46e5',
            color: '#fff',
          },
          duration: 2000,
        });

        setServiceImgs([]);
      } else {
        throw new Error('Unexpected response format');
      }
    } catch (err: any) {
      console.log(err, '64');
      setServiceImgs([]);
      toast.error(err?.data);
      setLoading(false);
    }
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
            <Form submitHandler={onSubmit} resolver={yupResolver(serviceSchema)} >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
                <FormInput name="serviceName" label="Service Name" type="text" />
                <FormInput name="regularPrice" label="Price" type="number" className="border border-gray-300 focus:border-[#1475c6] focus:ring-[#1475c6] transition ease-in duration-200" />
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

              <MultipleImageUpload
                images={serviceImgs}
                setImages={setServiceImgs}
                setError={setImgError}
                error={imgError}
              />

<h2 className="text-xl font-semibold text-[#2a2a3d] mb-8">
           Additional Feature(optional*)
          </h2> 

         <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
                <FormInput name="keyFeature1" label="key Feature 1" type="text" />
                <FormInput name="keyFeature2" label="key Feature 2" type="text" className="border border-gray-300 focus:border-[#1475c6] focus:ring-[#1475c6] transition ease-in duration-200" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
                <FormInput name="keyFeature3" label="key Feature 3" type="text" />
                <FormInput name="keyFeature4" label="key Feature 4" type="text" className="border border-gray-300 focus:border-[#1475c6] focus:ring-[#1475c6] transition ease-in duration-200" />
              </div>

              <div className="flex">
                <button
                  type="button"
                  className="bg-white border text-black hover:text-white py-2 px-4 rounded-lg cursor-pointer hover:bg-[#4f46e5] mr-3"
                >
                  Back
                </button>
                <button
  type="submit"
  className={`text-[#4f46e5] hover:bg-[#4f46e5] hover:text-white inline-flex items-center justify-center px-4 py-2 rounded text-md border border-[#4f46e5] ${
    loading
      ? 'w-[150px] bg-[#4f46e5] text-white opacity-50 cursor-not-allowed inline-flex justify-center items-center'
      : ''
  }`}
  disabled={loading}
>
  {loading ? <Spinner /> : 'Create Service'}
</button>

              </div>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateService;