import React from 'react';
import Image from 'next/image';
import image1 from "../../../public/hero-image.png";

const Introduction = () => {
  return (
    <div className="flex flex-col md:flex-row items-center mb-8">
      <div className="md:w-1/2 m-10 p-10 md:mb-0 space-y-7">
        <h1 className="text-4xl text-blue-600 font-bold mb-4">IT Solution Group Limited</h1>
        <p className="text-lg opacity-4">
          The IT Solutions Group is leading the charge towards Rwanda s tech-driven future. With a steadfast commitment to the transformative power of technology, we are driving change in alignment with Vision 2050. Join us in shaping Rwanda s bright and prosperous future!
        </p>
        <input
          className="bg-gray-100 px-10 py-2 rounded-md md:w-auto border-2 border-blue-700"
          placeholder="Search..."
        />
      </div>
      <div className="relative">
   
        <div className="right-20 top-0">
          <Image src={image1} alt="Image 1" width={500} height={500} />
        </div>
      </div>
      </div>
  );
};

export default Introduction;
