import React, { useState } from 'react';
import Calendar from 'react-calendar';

const times = [
    "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM",
    "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM",
    "01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM",
    "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM",
    "05:00 PM", "05:30 PM", "06:00 PM", "06:30 PM",
    "07:00 PM", "07:30 PM", "08:00 PM", "08:30 PM",
    "09:00 PM", "09:30 PM", "10:00 PM", "10:30 PM"
];

const Appointment = ({ onNext }:any) => {
    const [date, setDate] = useState(new Date());

    const onChange = (newDate:any) => {
        setDate(newDate);
    };

    return (
        <div className="md:flex md:space-x-6 mt-6 py-8"> {/* Reduced the margin-top and added space-x-6 for spacing */}
            <div className="">
                <h6 className="text-lg font-semibold mb-5">Appointment Date</h6>
                <Calendar
                    onChange={onChange}
                    value={date}
                    className="custom-calendar" // Apply custom class
                />
            </div>

            <div className="md:px-12 py-4 md:py-0">
                <h6 className="text-lg font-semibold mb-5">Appointment Time</h6>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-4">
                    {times.map((time, index) => (
                        <div
                            key={index}
                            className="border border-gray-200 bg-[#f8fcfd] shadow-sm flex items-center justify-center px-2 py-4 rounded-lg text-gray-600 hover:text-white hover:bg-[#4c40ed] font-medium text-sm"
                        >
                            {time}
                        </div>
                    ))}
                </div>

                {/* Buttons */}
                <div className="flex justify-end mt-6 space-x-4">
                    <button className="bg-gray-200 text-gray-700 py-2 px-4 rounded-md shadow-sm hover:bg-gray-300">
                        Cancel
                    </button>
                    <button  onClick={onNext} className="bg-[#4c40ed] text-white py-3 px-4 rounded-md shadow-sm hover:bg-blue-600">
                        Book Appointment
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Appointment;
