"use client"
import { useState } from 'react';
import { FiEdit, FiTrash, FiX } from 'react-icons/fi';

const ProviderCategory = () => {
    const [showModal, setShowModal] = useState(false);
    const [newCategory, setNewCategory] = useState({
        name: '',
        img: null,
        icon: null
    });
    const [editMode, setEditMode] = useState(false);
    const [currentCategory, setCurrentCategory] = useState(null);

    const categories = [
        { id: 1, name: 'Construction', icon: 'https://truelysell.dreamstechnologies.com/html/template/assets/img/icons/feature-icon-01.svg', img: 'https://truelysell.dreamstechnologies.com/html/template/assets/img/services/service-02.jpg' },
        { id: 2, name: 'Car Wash', icon: 'https://truelysell.dreamstechnologies.com/html/template/assets/img/icons/feature-icon-02.svg', img: 'https://truelysell.dreamstechnologies.com/html/template/assets/img/feature.jpg' },
        { id: 3, name: 'Electrical', icon: 'https://truelysell.dreamstechnologies.com/html/template/assets/img/icons/feature-icon-03.svg', img: 'https://truelysell.dreamstechnologies.com/html/template/assets/img/services/service-01.jpg' },
        { id: 4, name: 'Cleaning', icon: 'https://truelysell.dreamstechnologies.com/html/template/assets/img/icons/feature-icon-04.svg', img: 'https://truelysell.dreamstechnologies.com/html/template/assets/img/services/service-09.jpg' },
        { id: 5, name: 'Interior', icon: 'https://truelysell.dreamstechnologies.com/html/template/assets/img/icons/feature-icon-05.svg', img: 'https://truelysell.dreamstechnologies.com/html/template/assets/img/services/service-07.jpg' },
        { id: 6, name: 'Carpentry', icon: 'https://truelysell.dreamstechnologies.com/html/template/assets/img/icons/feature-icon-06.svg', img: 'https://truelysell.dreamstechnologies.com/html/template/assets/img/services/service-03.jpg' },
        { id: 7, name: 'Computer', icon: 'https://truelysell.dreamstechnologies.com/html/template/assets/img/icons/feature-icon-07.svg', img: 'https://truelysell.dreamstechnologies.com/html/template/assets/img/services/service-06.jpg' },
        { id: 8, name: 'Plumbing', icon: 'https://truelysell.dreamstechnologies.com/html/template/assets/img/icons/feature-icon-08.svg', img: 'https://truelysell.dreamstechnologies.com/html/template/assets/img/services/service-11.jpg' },
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewCategory(prev => ({ ...prev, [name]: value }));
    };

    const handleImageChange = (e) => {
        const { name, files } = e.target;
        if (files.length > 0) {
            setNewCategory(prev => ({ ...prev, [name]: files[0] }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editMode) {
            console.log(`Edited Category ID: ${currentCategory.id}`);
        } else {
            console.log("New Category:", newCategory);
        }
        setShowModal(false);
        setEditMode(false);
        setCurrentCategory(null);
        setNewCategory({ name: '', img: null, icon: null });
    };

    const handleEdit = (category) => {
        setCurrentCategory(category);
        setNewCategory({ name: category.name, img: null, icon: null });
        setEditMode(true);
        setShowModal(true);
        console.log(`Editing Category ID: ${category.id}`);
    };

    return (
        <div className="px-6 py-7">
            <div className="flex justify-between mb-8">
                <h2 className="text-2xl font-semibold text-[#2a2a3d]">Service Category</h2>
                <div>
                    <button
                        className="text-[#4f46e5] hover:bg-[#4f46e5] inline-flex items-center hover:text-white px-4 py-2 rounded text-md border border-[#4f46e5]"
                        onClick={() => {
                            setShowModal(true);
                            setEditMode(false);
                        }}
                    >
                        Add Category
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {categories.map((category) => (
                    <div key={category.id} className="relative rounded flex items-center justify-center overflow-hidden group bg-white p-2">
                        <div className="relative rounded-lg overflow-hidden border hover:shadow-md transition-shadow duration-300 w-full">
                            <a href="service-details.html" className="block">
                                <img
                                    src={category.img}
                                    alt={category.name}
                                    className="w-full h-[250px] object-cover transition-transform duration-300 group-hover:scale-110"
                                />
                            </a>
                            <div className="p-4 flex items-center justify-between">
                                <div className="flex items-center">
                                    <a href="service-details.html" className="rounded transition flex flex-col items-center justify-center text-center">
                                        <span className="inline-block p-2 bg-gray-100 rounded-full mr-2">
                                            <img src={category.icon} alt="icon" className="w-6 h-6" />
                                        </span>
                                    </a>
                                    <div className="ml-1">
                                        <h5 className="text-md font-bold text-gray-800">{category.name}</h5>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <button className="text-blue-500 hover:text-blue-700" onClick={() => handleEdit(category)}>
                                        <FiEdit size={18} />
                                    </button>
                                    <button className="text-red-500 hover:text-red-700">
                                        <FiTrash size={18} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {showModal && (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold">{editMode ? "Edit Category" : "Add New Category"}</h3>
                <button
                    onClick={() => {
                        setShowModal(false);
                        setEditMode(false);
                        setCurrentCategory(null);
                    }}
                    className="bg-[#4f46e5] text-white rounded-full p-2 hover:bg-opacity-90 transition"
                >
                   <FiX size={18}/>
                </button>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Category Name</label>
                    <input
                        type="text"
                        name="name"
                        value={newCategory.name}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Upload Image</label>
                    <input
                        type="file"
                        name="img"
                        onChange={handleImageChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        accept="image/*"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Upload Icon</label>
                    <input
                        type="file"
                        name="icon"
                        onChange={handleImageChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        accept="image/*"
                    />
                </div>
                <div className="flex justify-end">
                    <button
                        type="button"
                        onClick={() => {
                            setShowModal(false);
                            setEditMode(false);
                            setCurrentCategory(null);
                        }}
                        className="mr-4 px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="px-4 py-2 bg-[#4f46e5] text-white rounded-md hover:bg-blue-600"
                    >
                        {editMode ? "Update Category" : "Add Category"}
                    </button>
                </div>
            </form>
        </div>
    </div>
)}

        </div>
    );
};

export default ProviderCategory;
