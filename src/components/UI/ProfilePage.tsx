"use client";

import React, { useState } from 'react';
import { FaEdit } from 'react-icons/fa';

const demoUser = {
  imageUrl: 'https://truelysell.dreamstechnologies.com/html/template/assets/img/profiles/avatar-02.jpg',
  name: {
    firstName: 'John',
    lastName: 'Doe',
  },
  role: 'Administrator',
  address: '123 Demo Street, Demo City, DM 12345',
  phoneNumber: '(123) 456-7890',
  email: 'johndoe@example.com',
};

const demoProjects = [
  {
    title: 'Project A',
    category: 'Web Development',
    location: 'Demo City',
    description: 'A demo web development project.',
    askingPrice: 10000,
    imageUrl: 'https://via.placeholder.com/100',
  },
  {
    title: 'Project B',
    category: 'Mobile App',
    location: 'Demo Town',
    description: 'A demo mobile app project.',
    askingPrice: 20000,
    imageUrl: 'https://via.placeholder.com/100',
  },
];

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  const handleCloseClick = () => {
    setIsEditing(false);
  };

  const user = demoUser;
  const projects = demoProjects;

  return (
    <div>
      <div className="bg-white rounded-md mt-3">
        <div
          className="relative"
          style={{
            backgroundImage: 'url("https://admin.fare.com.bd/assets/user-profile-cover-img-980af4bd.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            width: '100%',
            height: '27vh',
          }}
        >
          <div className="relative rounded-md">
            <div className="">
              <div className="h-[220px] w-[220px]">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="flex items-center justify-start relative flex-col gap-1 w-full h-full rounded-md">
                    <div className="relative">
                      <div className="change-container rounded-full cursor-pointer flex items-center justify-center absolute top-0 left-0 w-full h-full"></div>
                      <div className="w-[140px] h-[140px] rounded-full overflow-hidden relative mt-24 ml-[-35px]">
                        <img
                          className="w-full h-full object-cover rounded-full"
                          src={user?.imageUrl || 'https://via.placeholder.com/150'}
                          alt="profile-img"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-6 bg-white rounded-xl mt-3">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4 pt-14">
            <div className="md:col-span-4">
              <h2 className="text-xl font-bold">Name: {`${user?.name?.firstName} ${user?.name?.lastName}`}</h2>
              <p className="font-semibold">Role: {user?.role}</p>
              <span className="text-sm text-gray-500">Address: {user?.address || 'N/A'}</span>
              <span className="w-full flex items-center gap-5 mt-2"></span>
            </div>
            <div className="md:col-span-2 lg:px-5 relative">
              {!isEditing && (
                <span className="absolute top-[-50px] right-8">
                  <button className="btn btn-outline btn-info btn-sm" onClick={handleEditClick}>
                    <FaEdit size="1.3em" />
                  </button>
                </span>
              )}
              <p className="text-gray-600">
                <span className="font-semibold">Phone:</span> {user?.phoneNumber}
              </p>
              <p className="text-gray-600">
                <span className="font-semibold">Email:</span> {user?.email}
              </p>
            </div>
          </div>
        </div>
      </div>

      {isEditing && (
        <div className="mt-4 p-4 border-t border-gray-200 bg-white rounded-xl mt-3">
          <form>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                  defaultValue={user?.name?.firstName}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Role</label>
                <input
                  type="text"
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                  defaultValue={user?.role}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Address</label>
                <input
                  type="text"
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                  defaultValue={user?.address}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone</label>
                <input
                  type="text"
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                  defaultValue={user?.phoneNumber}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                  defaultValue={user?.email}
                />
              </div>
            </div>
            <div className="mt-4 flex justify-end gap-4">
              <button
                type="button"
                className="btn btn-outline btn-info btn-sm"
                onClick={handleCloseClick}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-info btn-sm"
                onClick={handleSaveClick}
              >
                Save
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white lg:col-span-2 rounded-xl border p-6">
          <h3 className="text-lg font-bold mb-4">User Projects</h3>
          <ul className="divide-y divide-gray-200">
            {projects.map((project, index) => (
              <li key={index} className="py-4">
                <div className="flex items-center space-x-4">
                  {project.imageUrl && (
                    <img
                      className="h-16 w-16 rounded-lg shadow-sm object-cover"
                      src={project.imageUrl}
                      alt={project.title}
                    />
                  )}
                  <div className="flex-1 min-w-0">
                    <p className="text-lg font-medium text-gray-900 truncate">{project.title}</p>
                    <p className="text-sm text-gray-500">{project.category}</p>
                    <p className="text-sm text-gray-500">{project.location}</p>
                    <p className="mt-1 text-sm text-gray-600">{project.description}</p>
                  </div>
                  <div className="shrink-0">
                    <span className="text-xl font-semibold text-gray-900">${project.askingPrice.toLocaleString()}</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-1 bg-white rounded-xl border p-6 self-start">
          <h3 className="text-lg font-bold mb-4">Account Settings</h3>
          <div>
            <button className="btn btn-outline btn-info btn-sm mb-2">Change Password</button>
          </div>
          <div>
            <button className="btn btn-outline btn-info btn-sm">Forgot Password</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
