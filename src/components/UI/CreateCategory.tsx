import React, { useRef, useState } from 'react';
import { FiX } from 'react-icons/fi';
import Form from '../Forms/Form';
import FormInput from '../Forms/FormInput';
import { IoCloudUploadOutline } from 'react-icons/io5';
import Image from 'next/image';
import toast, { Toaster } from 'react-hot-toast';
import { useAddCategoryMutation } from '@/redux/api/categoryApi';
import { TiTickOutline } from 'react-icons/ti';


interface CreateCategoryFormProps {
  show: boolean;
  onClose: () => void;
}

interface CategoryImage {
  id: number;
  url: string;
}

const CreateCategory: React.FC<CreateCategoryFormProps> = ({ show, onClose }) => {
  const [categoryImg, setCategoryImg] = useState<CategoryImage | null>(null);
  const [categoryIcon, setCategoryIcon] = useState<CategoryImage | null>(null);
  const [imgPreview, setImgPreview] = useState<string | null>(null);
  const [iconPreview, setIconPreview] = useState<string | null>(null);
  const hiddenFileInput = useRef<HTMLInputElement>(null);
  const [fileInputType, setFileInputType] = useState<'image' | 'icon'>('image');
  const [loading, setLoading] = useState<boolean>(false);  

  const [addCategory] = useAddCategoryMutation();

  const onSubmit = async (values: any) => {
    if (categoryImg) {
      values.category_img = categoryImg.url;
    }
    if (categoryIcon) {
      values.category_icon = categoryIcon.url;
    }
  
    
    try {
      setLoading(true);  
      const res: any = await addCategory(values).unwrap();
      console.log(res);
     
      if (res && res.data) {
        setLoading(false);
        toast("Category created successfully", { // Show success toast
          icon: <span style={{ marginRight: -8, fontSize: 22 }}><TiTickOutline/></span>,
          style: {
            borderRadius: "10px",
            background: "#4f46e5",
            color: "#fff",
          },
          duration: 2000, // Show toast for 2 seconds
        });
        onClose();
        
        setCategoryImg(null);
        setImgPreview(null);
        setCategoryIcon(null);
        setIconPreview(null);
        
      } else {
        throw new Error("Unexpected response format");
      }
    } catch (err: any) {
      console.error(err);
  
      toast.error("Failed to create category", { 
        style: {
          borderRadius: "10px",
          background: "#e74c3c",
          color: "#fff",
        },
        duration: 2000, 
      });
    } finally {
      setLoading(false);  
    }
  };
  
  
  
  if (!show) return null;

  const handleClick = (type: 'image' | 'icon') => {
    setFileInputType(type);
    hiddenFileInput.current?.click();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        const result = reader.result as string;
        const newImage = { id: Date.now(), url: result };

        if (fileInputType === 'image') {
          setCategoryImg(newImage);
          setImgPreview(result);
        } else {
          setCategoryIcon(newImage);
          setIconPreview(result);
        }
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <>
     <Toaster position="top-center" reverseOrder={false} />
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold">Add New Category</h3>
            <button
              onClick={onClose}
              className="bg-[#4f46e5] text-white rounded-full p-2 hover:bg-opacity-90 transition"
            >
              <FiX size={18} />
            </button>
          </div>
          <Form submitHandler={onSubmit}>
            <div className="mb-4">
              <FormInput
                name="category_name"
                label="Category Name"
                type="text"
              />
            </div>
            <div className="flex flex-col gap-1 w-full h-full rounded-md">
              <span className="mr-2 font-medium text-gray-500 text-sm">
                Upload Category Image
              </span>
              <button
                className="w-full rounded-md text-4xl lg:text-5xl md:mt-2 flex items-center justify-center text-gray-400 py-6 border border-dashed"
                onClick={() => handleClick('image')}
                type="button"
              >
                <IoCloudUploadOutline />
              </button>
              <input
                type="file"
                onChange={handleChange}
                ref={hiddenFileInput}
                style={{ display: "none" }}
              />
              {imgPreview && (
                <div>
                  <Image
                    src={imgPreview}
                    alt="Category Image"
                    height={80}
                    width={80}
                  />
                </div>
              )}
            </div>
            <div className="flex flex-col gap-1 w-full h-full rounded-md mt-3 mb-3">
              <span className="mr-2 font-medium text-gray-500 text-sm">
                Upload Category Icon
              </span>
              <button
                className="w-full rounded-md text-4xl lg:text-5xl md:mt-2 flex items-center justify-center text-gray-400 py-6 border border-dashed"
                onClick={() => handleClick('icon')}
                type="button"
              >
                <IoCloudUploadOutline />
              </button>
              <input
                type="file"
                onChange={handleChange}
                style={{ display: "none" }}
              />
              {iconPreview && (
                <div>
                  <Image
                    src={iconPreview}
                    alt="Category Icon"
                    height={50}
                    width={50}
                  />
                </div>
              )}
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                onClick={onClose}
                className="mr-4 px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                type="submit"
                className={`px-4 py-2 bg-[#4f46e5] text-white rounded-md hover:bg-blue-600 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={loading}
              >
                {loading ? 'Adding...' : 'Create Category'}
              </button>
            </div>
          </Form>
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

export default CreateCategory;
