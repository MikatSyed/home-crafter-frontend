"use client";
import React from "react";
import CheckoutPage from "@/components/pages/CheckoutPage";
import Stepper from "@/components/UI/Stepper";
import { useRouter, usePathname } from "next/navigation";

const Checkout = () => {
  const router = useRouter();
  const pathname = usePathname();
  const dynamicId = pathname?.split('/')[2]; // Extract dynamicId from URL

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
      router.push(`/success`);
    }
  };

  return (
    <div className="max-w-full px-12 py-6 md:px-[8rem]">
      <Stepper steps={steps} currentStep={2} onStepClick={handleStepChange} />
      <CheckoutPage onNext={handleNext} />
    </div>
  );
};

export default Checkout;
