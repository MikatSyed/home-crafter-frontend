"use client"
import React from 'react';
import ComboPackCard from './ComboPackCard';
import { useCombosQuery } from '@/redux/api/comboPackApi';
import Loader from './Loader';

const ServiceComboPack = () => {
const {data,isLoading} = useCombosQuery(undefined);
const combos = data?.data;

if(isLoading){
  return <Loader/>
}
  return (
    <div className="mx-auto px-6 md:px-[6rem] py-10">
      <h1 className="text-4xl font-bold text-center text-gray-900 leading-tight mb-16">
        Our Service Combo Packs
      </h1>
 
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {combos?.map((pack:any, index:number) => (
          <ComboPackCard
          key={index}
          id={pack?.id} 
          name={pack?.name}
          services={pack?.services}
          providerImage={pack?.providerImage}
          providerName={pack?.providerName}
          providerInfo={pack?.providerInfo}
          amount={pack?.amount}  
          />
        ))}
      </div>
    </div>
  );
};

export default ServiceComboPack;
