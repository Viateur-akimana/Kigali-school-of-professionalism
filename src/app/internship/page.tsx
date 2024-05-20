import React from 'react';
import Image from 'next/image';

const Internship: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Internship</h2>
        <p className="text-gray-700">
          Experience the IT industry first-hand with our internship program.
        </p>
      </div>
      <div className="mt-8">
        <Image
          src="/intern.jpg"
          alt="Intern working on a laptop"
          width={800}
          height={533}
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default Internship;
