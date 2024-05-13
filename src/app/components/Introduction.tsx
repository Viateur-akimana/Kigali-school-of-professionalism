import React from 'react'
import logoImage from '../../../public/here.png';
import Image from 'next/image';

const Introduction = () => {
  return (
    <div className="flex flex-col md:flex-row items-center mb-8">
        <div className="md:w-1/2 mb-4 md:mb-0">
          <h1 className="text-4xl text-blue-600 font-bold mb-4">IT Solution Group Limited</h1>
          <p className="text-lg mb-6">
            The IT Solutions Group is leading the charge towards Rwanda s tech-driven future. With a steadfast commitment to the transformative power of technology, we are driving change in alignment with Vision 2050. Join us in shaping Rwanda s bright and prosperous future!
          </p>
          <input
            className="bg-gray-100 px-10 py-2 rounded-md  md:w-auto border-2 border-blue-600"
            placeholder="Search..."
            />
        </div>
        <div className="md:w-1/4 flex justify-center">
          <Image
           src={logoImage} 
           alt="IT Solution Group"
            width={400} height={400}
             />
        </div>
        <div className="md:w-1/4 flex justify-center">
          <Image
           src={logoImage} 
           alt="IT Solution Group"
            width={200} height={200}
             />
        </div>
      </div>
  )
}

export default Introduction