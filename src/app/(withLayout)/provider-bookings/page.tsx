"use client";
import React, { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const ProviderBookings = () => {
  const bookings = [
    {
      id: 1,
      serviceImage:
        "https://truelysell.dreamstechnologies.com/html/template/assets/img/services/service-08.jpg",
      serviceName: "Service Name",
      bookingDate: "2024-07-30",
      slotTime: "10:00 AM - 12:00 PM",
      amount: "$100",
      paymentStatus: "Paid",
      location: "New York, NY",
      customerName: "John Doe",
      customerImage:
        "https://truelysell.dreamstechnologies.com/html/template/assets/img/profiles/avatar-02.jpg",
      email: "john@example.com",
      phone: "+1234567890",
      bookingStatus: "Confirmed",
      workStatus: "In Progress",
    },
    {
      id: 1,
      serviceImage:
        "https://truelysell.dreamstechnologies.com/html/template/assets/img/services/service-08.jpg",
      serviceName: "Service Name",
      bookingDate: "2024-07-30",
      slotTime: "10:00 AM - 12:00 PM",
      amount: "$100",
      paymentStatus: "Paid",
      location: "New York, NY",
      customerName: "John Doe",
      customerImage:
        "https://truelysell.dreamstechnologies.com/html/template/assets/img/profiles/avatar-02.jpg",
      email: "john@example.com",
      phone: "+1234567890",
      bookingStatus: "Confirmed",
      workStatus: "In Progress",
    },
    {
      id: 1,
      serviceImage:
        "https://truelysell.dreamstechnologies.com/html/template/assets/img/services/service-08.jpg",
      serviceName: "Service Name",
      bookingDate: "2024-07-30",
      slotTime: "10:00 AM - 12:00 PM",
      amount: "$100",
      paymentStatus: "Paid",
      location: "New York, NY",
      customerName: "John Doe",
      customerImage:
        "https://truelysell.dreamstechnologies.com/html/template/assets/img/profiles/avatar-02.jpg",
      email: "john@example.com",
      phone: "+1234567890",
      bookingStatus: "Confirmed",
      workStatus: "In Progress",
    },
    {
      id: 1,
      serviceImage:
        "https://truelysell.dreamstechnologies.com/html/template/assets/img/services/service-08.jpg",
      serviceName: "Service Name",
      bookingDate: "2024-07-30",
      slotTime: "10:00 AM - 12:00 PM",
      amount: "$100",
      paymentStatus: "Paid",
      location: "New York, NY",
      customerName: "John Doe",
      customerImage:
        "https://truelysell.dreamstechnologies.com/html/template/assets/img/profiles/avatar-02.jpg",
      email: "john@example.com",
      phone: "+1234567890",
      bookingStatus: "Confirmed",
      workStatus: "In Progress",
    },
    // Add more booking objects as needed
  ];

  const [selectedBooking, setSelectedBooking] = useState(null);
  const [selectedBookingStatus, setSelectedBookingStatus] = useState("");
  const [selectedWorkStatus, setSelectedWorkStatus] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBookingStatusChange = (e) => {
    setSelectedBookingStatus(e.target.value);
    // Update the booking status in your state or backend
  };

  const handleWorkStatusChange = (e) => {
    setSelectedWorkStatus(e.target.value);
    // Update the work status in your state or backend
  };

  const openModal = (booking) => {
    setSelectedBooking(booking);
    setSelectedBookingStatus(booking.bookingStatus);
    setSelectedWorkStatus(booking.workStatus);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8 bg-white py-7 ">
      <h2 className="text-2xl font-semibold text-[#2a2a3d] mb-6">
        Booking List
      </h2>
      <div>
        {bookings.map((booking) => (
          <div
            key={booking.id}
            className="bg-white rounded-2xl border p-6 flex flex-col md:flex-row items-center md:items-start w-full mb-6"
          >
            <div className="flex-shrink-0 w-full md:w-1/3 mb-6 md:mb-0 md:mr-8">
              <img
                src={booking.serviceImage}
                alt={booking.serviceName}
                className="w-full h-48 md:h-auto rounded-2xl object-cover"
              />
            </div>
            <div className="flex-grow w-full md:w-2/3">
              <div className="flex  flex-row justify-between  items-center mb-4">
                <div className="flex items-center">
                  <h3 className="text-xl font-bold text-gray-800 md:mb-0 md:mr-2">
                    {booking.serviceName}
                  </h3>
                  <span
                    className={`ml-2 px-3 py-1 ${
                      booking.paymentStatus === "Paid"
                        ? "bg-[#f3fff6] text-[#83cc76]"
                        : booking.paymentStatus === "Pending"
                        ? "bg-[#fffdef] text-[#ffe30f]"
                        : "bg-[#fff5f5] text-[#f92424]"
                    } text-[12px]`}
                  >
                    {booking.paymentStatus}
                  </span>
                </div>
                <p
                  className="text-[14px] text-[#74788d] font-semibold cursor-pointer mt-2 md:mt-0"
                  onClick={() => openModal(booking)}
                >
                  Edit
                </p>
              </div>

              <div className="flex flex-col md:flex-row justify-between">
                <div className="md:w-1/2">
                  <div className="text-gray-700 mb-2">
                    <span className="font-semibold mr-2">Booking Date:</span>
                    <span className="text-sm text-gray-500">
                      {booking.bookingDate}
                    </span>
                  </div>
                  <div className="text-gray-700 mb-2">
                    <span className="font-semibold mr-2">Amount:</span>
                    <span className="text-sm text-gray-500">
                      {booking.amount}
                    </span>
                  </div>
                  <div className="text-gray-700 mb-2 flex">
                    <span className="font-semibold mr-2">Location:</span>
                    <span className="text-sm text-gray-500 flex items-center">
                      <FaMapMarkerAlt className="mr-1" />
                      {booking.location}
                    </span>
                  </div>
                  <div className="text-gray-700 mb-2">
                    <span className="font-semibold mr-2">Slot Time:</span>
                    <span className="text-sm text-gray-500">
                      {booking.slotTime}
                    </span>
                  </div>
                  <div className="text-gray-700 mb-2">
                    <span className="font-semibold mr-2">
                      Booking Status:
                    </span>
                    <span className="text-sm text-gray-500">
                      {booking.bookingStatus}
                    </span>
                  </div>
                </div>

                <div className="flex items-center mt-4 md:mt-0 md:ml-8">
                  <img
                    src={booking.customerImage}
                    alt={booking.customerName}
                    className="w-16 h-16 rounded-full object-cover mr-6"
                  />
                  <div>
                    <p className="text-xl font-semibold text-gray-800">
                      {booking.customerName}
                    </p>
                    <p className="text-gray-500">{booking.email}</p>
                    <p className="text-gray-500">{booking.phone}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 ">
          <div className="bg-white p-6 rounded-lg w-full max-w-lg mx-4 md:mx-0">
            <h2 className="text-xl font-bold mb-4">Edit Booking</h2>
            <div className="">
              <div className="w-full">
                <label
                  htmlFor={`bookingStatus-${selectedBooking?.id}`}
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Booking Status
                </label>
                <select
                  id={`bookingStatus-${selectedBooking?.id}`}
                  value={selectedBookingStatus}
                  onChange={handleBookingStatusChange}
                  className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-300 ease-in-out bg-gradient-to-r from-white to-gray-100 hover:from-gray-100 hover:to-gray-200"
                >
                  <option value="Pending">Pending</option>
                  <option value="Confirmed">Confirmed</option>
                  <option value="Canceled">Canceled</option>
                </select>
              </div>
              <div className="w-full mt-4">
                <label
                  htmlFor={`workStatus-${selectedBooking?.id}`}
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Work Status
                </label>
                <select
                  id={`workStatus-${selectedBooking?.id}`}
                  value={selectedWorkStatus}
                  onChange={handleWorkStatusChange}
                  className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-300 ease-in-out bg-gradient-to-r from-white to-gray-100 hover:from-gray-100 hover:to-gray-200"
                >
                  <option value="Pending">Pending</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Completed">Completed</option>
                  <option value="Canceled">Canceled</option>
                </select>
              </div>
            </div>
            <div className="mt-6 flex justify-end">
              <button
                onClick={closeModal}
                className="bg-gray-500 text-white px-4 py-2 rounded-md mr-2"
              >
                Cancel
              </button>
              <button
                onClick={closeModal} // Add your save function here
                className="bg-indigo-500 text-white px-4 py-2 rounded-md"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProviderBookings;
