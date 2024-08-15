"use client";
import BookingPage from "@/components/pages/BookingPage";
import BookingPayment from "@/components/pages/BookingPayment";
import PaymentSuccess from "@/components/pages/PaymentSuccess";
import Stepper from "@/components/UI/Stepper";
import React, { useState } from "react";


const ServiceBooking = () => {
  const [page, setPage] = useState(1);

  const steps = [
    {
      title: "Appointment",
      description: "Choose time & date for the service",
    },
    {
      title: "Payment",
      description: "Confirm Payment",
    },
    {
      title: "Done",
      description: "Completion of Booking",
    },
  ];

  return (
    <div className="max-w-full px-12 py-6  md:px-[8rem]">
      {/* Stepper Navigation */}
      <Stepper steps={steps} currentStep={page} onStepClick={setPage} />

      {/* Page Content */}
      {page === 1 && (
        <div>
         <BookingPage onNext={() => setPage(2)}/>
         
         
        </div>
      )}

      {page === 2 && (
        <div>
        <BookingPayment onNext={() => setPage(3)}/>
          
         
        </div>
      )}

      {page === 3 && (
        <div>
        <PaymentSuccess/>
        </div>
      )}
    </div>
  );
};

export default ServiceBooking;
