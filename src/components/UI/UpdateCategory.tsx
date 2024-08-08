import React, { useState, ChangeEvent, FormEvent } from 'react';
import { FiX } from 'react-icons/fi';

interface UpdateCategoryFormProps {
  show: boolean;
  onClose: () => void;
  onSubmit: (id: number, name: string, img: File | null, icon: File | null) => void;
  category: {
    id: number;
    name: string;
    img: string;
    icon: string;
  };
}

const UpdateCategory: React.FC<UpdateCategoryFormProps> = ({ show, onClose, onSubmit, category }) => {
  const [name, setName] = useState<string>(category.name);
  const [img, setImg] = useState<File | null>(null);
  const [icon, setIcon] = useState<File | null>(null);

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleImgChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setImg(e.target.files[0]);
    }
  };

  const handleIconChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setIcon(e.target.files[0]);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(category.id, name, img, icon);
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold">Edit Category</h3>
          <button
            onClick={onClose}
            className="bg-[#4f46e5] text-white rounded-full p-2 hover:bg-opacity-90 transition"
          >
            <FiX size={18} />
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Category Name</label>
            <input
              type="text"
              value={name}
              onChange={handleNameChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Upload Image</label>
            <input
              type="file"
              onChange={handleImgChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              accept="image/*"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Upload Icon</label>
            <input
              type="file"
              onChange={handleIconChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              accept="image/*"
            />
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
              className="px-4 py-2 bg-[#4f46e5] text-white rounded-md hover:bg-blue-600"
            >
              Update Category
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateCategory;
