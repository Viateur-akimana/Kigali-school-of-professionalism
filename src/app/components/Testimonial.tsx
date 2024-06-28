import React from 'react';
import Image from 'next/image';
import { TextGenerateEffect } from '../ui/TextGenerateEffect'; // Ensure this path is correct

interface TestimonialProps {
  name: string;
  role: string;
  testimonial: string;
  avatar: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ name, role, testimonial, avatar }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center mb-4">
        <div className="relative w-12 h-12 rounded-full overflow-hidden">
          <Image src={avatar} alt={name} layout="intrinsic" width={48} height={48} style={{ width: 'auto', height: 'auto' }} />
        </div>
        <div className="ml-4">
          <h4 className="text-lg font-bold">{name}</h4>
          <p className="text-gray-600">{role}</p>
        </div>
      </div>
      <div className="text-gray-700">
        <TextGenerateEffect words={testimonial} />
      </div>
    </div>
  );
};

export default Testimonial;
