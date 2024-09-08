import React from 'react';
import icon1 from '../../../public/assets/work-icon.svg';
import icon2 from '../../../public/assets/find-icon.svg';
import icon3 from '../../../public/assets/place-icon.svg';
import Image from 'next/image';

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      icon: icon1,
      title: 'Choose What To Do',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing tempor labore et dolore magna aliqua.',
      number: '01',
    },
    {
      id: 2,
      icon: icon2,
      title: 'Find What You Want',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing tempor labore et dolore magna aliqua.',
      number: '02',
    },
    {
      id: 3,
      icon: icon3,
      title: 'Amazing Places',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing tempor labore et dolore magna aliqua.',
      number: '03',
    },
  ];

  return (
    <div className="mx-auto px-6 md:px-[6rem] py-10 bg-[#f8fcfd]">
      <div className="text-center mb-10">
        <div className="section-heading" data-aos="fade-up">
          <h2 className="text-4xl font-extrabold text-indigo-900 leading-tight">How It Works</h2>
          <p className="text-gray-700 text-lg mt-4">Aliquam lorem ante, dapibus in, viverra quis</p>
        </div>
      </div>

      <div className="flex flex-wrap justify-center mt-8">
        {steps.map((step) => (
          <div key={step.id} className="w-full md:w-1/3 px-6 mb-8 md:mb-0">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl" data-aos="fade-up">
              <div className="work-icon flex justify-center mb-6">
                <span className="inline-block p-4 bg-[#f7f7ff] text-white rounded-full">
                  <Image src={step.icon} alt={step.title} className="h-14 w-14" />
                </span>
              </div>
              <h5 className="text-2xl font-semibold text-indigo-800 mb-3">{step.title}</h5>
              <p className="text-gray-700 mb-6">{step.description}</p>
              <h4 className="text-4xl font-extrabold text-indigo-800">{step.number}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
