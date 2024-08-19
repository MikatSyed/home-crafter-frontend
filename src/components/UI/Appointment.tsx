"use client";
import { useAvailbilitiesQuery } from '@/redux/api/availbility';
import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';

const Appointment = ({ onNext }) => {
    const { data, isLoading } = useAvailbilitiesQuery(undefined);
    const [date, setDate] = useState(new Date());
    const [availableTimes, setAvailableTimes] = useState<string[]>([]);
    const [selectedTime, setSelectedTime] = useState<string | null>(null);

    useEffect(() => {
        if (data) {
            // Extract the day of the week from the selected date
            const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'long' });

            // Get available times for the selected day
            const timesForDay = data.data[dayOfWeek] || [];
            setAvailableTimes(timesForDay);
            setSelectedTime(null); // Reset the selected time when the date changes
        }
    }, [date, data]);

    // Handle the change of date from the calendar
    const onChange = (newDate) => {
        setDate(newDate);

        // Log the selected date and day
        const selectedDate = newDate.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        const dayOfWeek = newDate.toLocaleDateString('en-US', { weekday: 'long' });

        console.log(`Selected Date: ${selectedDate}, Day: ${dayOfWeek}`);
    };

    // Handle time slot selection
    const onTimeSelect = (time) => {
        setSelectedTime(time);

        // Log the selected time along with the day
        const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'long' });
        console.log(`Selected Time: ${time}, Day: ${dayOfWeek}`);
    };

    // Format the selected date for display
    const formattedDate = date.toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    });

    if (isLoading) {
        return <p>Loading...</p>;
    }

    return (
        <div className="md:flex md:space-x-6 mt-6 py-8">
            {/* Calendar Section */}
            <div>
                <h6 className="text-lg font-semibold mb-5">Appointment Date</h6>
                <Calendar
                    onChange={onChange}
                    value={date}
                    className="custom-calendar"
                />
                <div className="mt-4">
                    <p className="text-gray-700">
                        <strong>Selected Date:</strong> {formattedDate}
                    </p>
                </div>
            </div>

            {/* Time Selection Section */}
            <div className="md:px-12 py-4 md:py-0">
                <h6 className="text-lg font-semibold mb-5">Appointment Time</h6>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-4">
                    {availableTimes.length > 0 ? (
                        availableTimes.map((time, index) => (
                            <div
                                key={index}
                                onClick={() => onTimeSelect(time)}
                                className={`border border-gray-200 shadow-sm flex items-center justify-center px-2 py-4 rounded-lg font-medium text-sm cursor-pointer ${
                                    selectedTime === time ? 'bg-[#4c40ed] text-white' : 'bg-[#f8fcfd] text-gray-600 hover:text-white hover:bg-[#4c40ed]'
                                }`}
                            >
                                {time}
                            </div>
                        ))
                    ) : (
                        <div className="col-span-full text-center py-10">
                            <p className="text-xl font-semibold text-gray-700 bg-[#f0f5f9] rounded-lg p-6 shadow-md">
                                No available times for this day.
                            </p>
                        </div>
                    )}
                </div>

                {/* Action Buttons */}
                {availableTimes.length > 0 && (
                    <div className="flex justify-end mt-6 space-x-4">
                        <button className="bg-gray-200 text-gray-700 py-2 px-4 rounded-md shadow-sm hover:bg-gray-300">
                            Cancel
                        </button>
                        <button onClick={onNext} className="bg-[#4c40ed] text-white py-3 px-4 rounded-md shadow-sm hover:bg-blue-600">
                            Book Appointment
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Appointment;
