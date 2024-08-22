"use client";
import React from "react";
import CheckoutPage from "@/components/pages/CheckoutPage";
import Stepper from "@/components/UI/Stepper";
import { useRouter, usePathname } from "next/navigation";
import { useBookingQuery } from "@/redux/api/bookingApi";

type IDProps = {
  params: any;
};


const Checkout = ({ params }: IDProps) => {
  const { id } = params;
  
  const router = useRouter();
  const pathname = usePathname();
  const dynamicId = pathname?.split('/')[2]; 
  const {data} = useBookingQuery(id);
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
      <CheckoutPage data={data} />
    </div>
  );
};

export default Checkout;
