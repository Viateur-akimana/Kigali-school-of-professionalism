import React from 'react';
import Image from 'next/image';
import heroImage from '../../../public/who.jpg';
import educationIcon from '../../../public/Vectors.png';
import certificationIcon from '../../../public/Vector.png';
import experienceIcon from '../../../public/Vector.png';

const Choose = () => {
  return (
    <div className="mb-10 border-t-2">
      <h2 className="text-3xl text-blue-600 mx-auto m-6 text-center font-bold">IT Solution Group Limited</h2>
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="m-10 md:mb-0">
          <Image src={heroImage} alt="IT Solution Group" width={500} height={500} />
        </div>
        <div className="m-4">
          <h2 className="text-4xl font-bold mb-4 text-blue-600">Why Choose IT Solution Group?</h2>
          <div className="p-4 rounded-md">
            <h3 className="text-xl font-bold flex items-center mb-2">
              <Image src={certificationIcon} alt="Certification" width={24} height={24} className="mr-2" />
              Certification
            </h3>
            <p className="ml-8">Our team is certified and trained to deliver high-quality solutions.</p>
          </div>
          <div className="p-4 rounded-md">
            <h3 className="text-xl font-bold flex items-center mb-2">
              <Image src={educationIcon} alt="Education" width={24} height={24} className="mr-2" />
              Education
            </h3>
            <p className="ml-8">We provide educational resources to help you stay up-to-date.</p>
          </div>
          <div className="p-4 rounded-md">
            <h3 className="text-xl font-bold flex items-center mb-2">
              <Image src={experienceIcon} alt="Experience" width={24} height={24} className="mr-2" />
              Experience
            </h3>
            <p className="ml-8">With years of experience, we deliver proven solutions.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
