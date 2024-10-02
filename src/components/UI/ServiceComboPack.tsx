// ServiceComboPack.js
import React from 'react';
import ComboPackCard from './ComboPackCard';

const ServiceComboPack = () => {
  // Static data for each service combo pack
  const comboPacks = [
    {
      plan: 'Basic',
      services: ['Wiring Check', 'Light Installation'],
      providerImage: "",
      providerName: 'John Doe',
      providerInfo: 'Electronic',
      price: 23,
    },
    {
      plan: 'Standard',
      services: ['Electrical Inspection', 'Ceiling Fan Installation', 'Emergency Repairs'],
      providerImage: "",
      providerName: 'John Doe Electricals',
      providerInfo: 'Offers reliable electrical services with warranty.',
      price: 45,
    },
    {
      plan: 'Premium',
      services: ['Home Automation Setup', 'Full House Rewiring', '24/7 Emergency Support'],
      providerImage: "",
      providerName: 'John Doe Electricals',
      providerInfo: 'Comprehensive electrical solutions for large properties.',
      price: 75,
    },
    {
      plan: 'Basic',
      services: ['Leak Detection', 'Faucet Replacement'],
      providerImage: "",
      providerName: 'WaterFlow Plumbing',
      providerInfo: 'Professional plumbing services at affordable rates.',
      price: 20,
    },
    {
      plan: 'Standard',
      services: ['Pipe Installation', 'Water Heater Repair', 'Bathroom Fitting'],
      providerImage: "",
      providerName: 'WaterFlow Plumbing',
      providerInfo: 'Experienced team with guaranteed work satisfaction.',
      price: 50,
    },
    {
      plan: 'Premium',
      services: ['Sewer Line Replacement', 'Waterproofing Solutions', 'Emergency Plumbing', 'Leak Repair'],
      providerImage: "",
      providerName: 'WaterFlow Plumbing',
      providerInfo: 'Premium solutions for complex plumbing needs.',
      price: 80,
    },
  ];

  return (
    <div className="mx-auto px-6 md:px-[6rem] py-10">
      <h1 className="text-4xl font-bold text-center text-gray-900 leading-tight mb-16">
        Our Service Combo Packs
      </h1>
      {/* Display All Combo Packs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {comboPacks.map((pack, index) => (
          <ComboPackCard
            key={index} // Use index as key since no unique ID is provided
            plan={pack.plan}
            services={pack.services}
            providerImage={pack.providerImage}
            providerName={pack.providerName}
            providerInfo={pack.providerInfo}
            price={pack.price}  
          />
        ))}
      </div>
    </div>
  );
};

export default ServiceComboPack;
