import React from 'react';
import Image from 'next/image';

import logoImage from '../../public/here.png';
import heroImage from '../../public/hero-image.png';
import Carousel from './components/Carousel';

const HomePage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row items-center mb-8">
        <div className="md:w-1/2 mb-4 md:mb-0">
          <h1 className="text-4xl text-blue-600 font-bold mb-4">IT Solution Group Limited</h1>
          <p className="text-lg mb-6">
            The IT Solutions Group is leading the charge towards Rwanda's tech-driven future. With a steadfast commitment to the transformative power of technology, we are driving change in alignment with Vision 2050. Join us in shaping Rwanda's bright and prosperous future!
          </p>
          <input
            className="bg-gray-200 px-4 py-2 rounded-md w-full md:w-auto"
            placeholder="Search..."
          />
        </div>
        <div className="md:w-1/2 flex justify-center">
          <Image src={logoImage} alt="IT Solution Group" width={500} height={500} />
        </div>
      </div>

      <Carousel/>
      <div className="my-8">
        <h2 className="text-2xl font-bold mb-4">Why choose IT Solution Group?</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 justify-center mb-4 md:mb-0">
            <Image src={heroImage} alt="IT Solution Group" width={500} height={500} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:w-1/2">
            <div className="bg-gray-100 p-4 rounded-md">
              <h3 className="text-lg font-bold flex items-center">
                <Image src="/certification.svg" alt="Certification" width={24} height={24} className="mr-2" />
                Certification
              </h3>
              <p>Our team is certified and trained to deliver high-quality solutions.</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-md">
              <h3 className="text-lg font-bold flex items-center">
                <Image src="/education.svg" alt="Education" width={24} height={24} className="mr-2" />
                Education
              </h3>
              <p>We provide educational resources to help you stay up-to-date.</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-md">
              <h3 className="text-lg font-bold flex items-center">
                <Image src="/experience.svg" alt="Experience" width={24} height={24} className="mr-2" />
                Experience
              </h3>
              <p>With years of experience, we deliver proven solutions.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;