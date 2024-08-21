
"use client";
import React from "react";
import PaymentSuccess from '@/components/pages/PaymentSuccess';
import Stepper from "@/components/UI/Stepper";
import { useRouter, usePathname } from "next/navigation";

const BookingDone = () => {
  const router = useRouter();
  const pathname = usePathname();
  const dynamicId = pathname?.split('/')[2]; 

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

  const handleNext = () => {
    router.push(`/success`);
  };

  const handleStepChange = (step: number) => {
    if (step === 1) {
      router.push(`/${dynamicId}/booking`);
    } else if (step === 2) {
      router.push(`/checkout/${dynamicId}`);
    } else if (step === 3) {
      router.push(`/booking-done`);
    }
  };

  return (
    <div className="max-w-full px-12 py-6 md:px-[8rem]">
      <Stepper steps={steps} currentStep={3} onStepClick={handleStepChange} />
      <PaymentSuccess  />
    </div>
  );
};

export default BookingDone;
