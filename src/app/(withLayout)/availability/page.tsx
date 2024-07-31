"use client";
import React, { useState, FormEvent, ChangeEvent, FocusEvent } from 'react';

// Define types for the state and slot
type Day = "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday" | "All day";
type AvailabilityState = {
    [key in Day]: string[];
};

const Availability: React.FC = () => {
    const [availability, setAvailability] = useState<AvailabilityState>({
        Monday: [],
        Tuesday: [],
        Wednesday: [],
        Thursday: [],
        Friday: [],
        Saturday: [],
        Sunday: [],
        "All day": []
    });

    const [selectedDay, setSelectedDay] = useState<Day | null>(null);
    const [inputValues, setInputValues] = useState<{ [key in Day]?: string }>({});

    // Function to add a slot
    const addSlot = (day: Day, slot: string) => {
        if (day === "All day") {
            setAvailability(prev => {
                const updatedAvailability = { ...prev };
                Object.keys(updatedAvailability).forEach(d => {
                    const key = d as Day;
                    updatedAvailability[key] = [...updatedAvailability[key], slot];
                });
                return updatedAvailability;
            });
        } else {
            setAvailability(prev => ({
                ...prev,
                [day]: [...prev[day], slot]
            }));
        }
    };

    // Function to remove a slot
    const removeSlot = (day: Day, index: number) => {
        if (day === "All day") {
            const slotToRemove = availability["All day"][index];
            setAvailability(prev => {
                const updatedAvailability = { ...prev };
                Object.keys(updatedAvailability).forEach(d => {
                    const key = d as Day;
                    updatedAvailability[key] = updatedAvailability[key].filter(slot => slot !== slotToRemove);
                });
                return updatedAvailability;
            });
        } else {
            setAvailability(prev => ({
                ...prev,
                [day]: prev[day].filter((_, i) => i !== index)
            }));
        }
    };

    // Function to handle adding slot
    const handleAddSlot = (day: Day) => {
        const value = inputValues[day];
        if (value) {
            const formattedSlot = formatTime(value);
            addSlot(day, formattedSlot);
            console.log(`Added slot for ${day}: ${formattedSlot}`);
            setInputValues(prev => ({ ...prev, [day]: '' }));
        }
    };

    // Function to format time
    const formatTime = (time: string) => {
        const [hour, minute] = time.split(':');
        const hourInt = parseInt(hour, 10);
        const ampm = hourInt >= 12 ? 'PM' : 'AM';
        const formattedHour = hourInt % 12 || 12;
        return `${formattedHour}:${minute} ${ampm}`;
    };

    // Handle form submit
    const handleSubmit = (day: Day) => (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleAddSlot(day);
        setSelectedDay(null);
    };

    // Handle input change
    const handleChange = (day: Day) => (e: ChangeEvent<HTMLInputElement>) => {
        setInputValues(prev => ({ ...prev, [day]: e.target.value }));
    };

    // Handle input focus
    const handleFocus = (day: Day) => (e: FocusEvent<HTMLInputElement>) => {
        setSelectedDay(day);
        e.target.showPicker();
    };

    // Handle input blur
    const handleBlur = (day: Day) => () => {
        // Remove the slot if input loses focus and it's not empty
        if (inputValues[day]) {
            handleAddSlot(day);
        }
        setSelectedDay(null);
    };

    return (
        <div className="max-w-3xl px-6 py-7">
            <h2 className="text-2xl font-semibold text-[#2a2a3d] mb-6">Service Booking Availability</h2>
            <div className="bg-white py-6 mb-6">
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">All day</h2>
                <form onSubmit={handleSubmit("All day")} className="flex gap-4 mb-4">
                    <div className="relative flex-1">
                        <input
                            type="time"
                            name="slot"
                            required
                            value={inputValues["All day"] || ''}
                            className="border border-gray-300 rounded-md p-2 w-full appearance-none"
                            style={{ outline: 'none', color: inputValues["All day"] ? 'black' : 'transparent' }}
                            onFocus={handleFocus("All day")}
                            onBlur={() => handleBlur("All day")}
                            onChange={handleChange("All day")}
                        />
                        {!inputValues["All day"] && selectedDay !== "All day" && (
                            <span className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400 pointer-events-none select-none">
                                Select Time
                            </span>
                        )}
                    </div>
                    <button type="submit" className="bg-[#4f46e5] text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors">Add Slot</button>
                </form>
                <ul className="list-none p-0">
                    {availability["All day"].map((slot, index) => (
                        <li key={index} className="flex justify-between items-center py-2 border-b border-gray-200">
                            {slot}
                            <button onClick={() => removeSlot("All day", index)} className="text-red-500 hover:text-red-600 transition-colors">Remove</button>
                        </li>
                    ))}
                </ul>
            </div>
            {Object.keys(availability).filter(day => day !== "All day").map(day => (
                <div key={day} className="bg-white py-6 mb-6">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">{day}</h2>
                    <form onSubmit={handleSubmit(day as Day)} className="flex gap-4 mb-4">
                        <div className="relative flex-1">
                            <input
                                type="time"
                                name="slot"
                                required
                                value={inputValues[day as Day] || ''}
                                className="border border-gray-300 rounded-md p-2 w-full appearance-none"
                                style={{ outline: 'none', color: inputValues[day as Day] ? 'black' : 'transparent' }}
                                onFocus={handleFocus(day as Day)}
                                onBlur={() => handleBlur(day as Day)}
                                onChange={handleChange(day as Day)}
                            />
                            {!inputValues[day as Day] && selectedDay !== day && (
                                <span className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400 pointer-events-none select-none">
                                    Select Time
                                </span>
                            )}
                        </div>
                        <button type="submit" className="bg-[#4f46e5] text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors">Add Slot</button>
                    </form>
                    <ul className="list-none p-0">
                        {availability[day as Day].map((slot, index) => (
                            <li key={index} className="flex justify-between items-center py-2 border-b border-gray-200">
                                {slot}
                                <button onClick={() => removeSlot(day as Day, index)} className="text-red-500 hover:text-red-600 transition-colors">Remove</button>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default Availability;
