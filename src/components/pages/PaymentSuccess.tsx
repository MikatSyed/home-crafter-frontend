import Image from 'next/image';
import React from 'react';
import successImage from "../../../public/assets/Successful purchase-pana.png";

const PaymentSuccess = () => {
  return (
    <div className="min-h-screen flex flex-col-reverse md:flex-row py-8">
      <div className="text-center md:text-left py-8 md:py-12 md:pr-12">
        <h2 className="text-gray-700 text-2xl md:text-4xl font-semibold">
          Successfully Completed Payment
        </h2>
        <p className="text-sm md:text-md text-gray-500 my-4">
          Your booking has been successfully completed.
        </p>

        <div className="flex flex-col sm:flex-row justify-center md:justify-start mt-6">
          <button
            className="bg-[#4c40ed] text-semibold text-white hover:text-[#4c40ed] border border-[#4c40ed] py-3 px-6 rounded-lg hover:bg-white mr-0 sm:mr-4 mb-4 sm:mb-0 transition-colors duration-300 w-full sm:w-auto"
          >
            Go to Home
          </button>
          
          <button
            className="bg-[#f8fcfd] text-[#4c40ed] text-semibold text-sm hover:text-white py-3 px-6 rounded-lg border border-[#4c40ed] hover:bg-[#4c40ed] transition-colors duration-300 w-full sm:w-auto"
          >
            Booking History
          </button>
        </div>
      </div>

      <div className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 mb-6 md:mb-0">
        <Image src={successImage} alt="Success" className="w-full h-auto" />
      </div>
    </div>
  );
};

export default PaymentSuccess;
