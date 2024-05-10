import React from 'react';
import Image from 'next/image';

import heroImage from '../../../public/hero-image.png';
import certificationIcon from '../../../public/Vectors.png';
import educationIcon from '../../../public/Vector.png';
import experienceIcon from '../../../public/Vector.png';

const Choose = () => {
  return (
    <div className="mx-auto">
      <h2 className="text-2xl font-bold mb-4">Why choose IT Solution Group?</h2>
      <div className="flex flex-row md:flex-row items-center">
        <div className="md:w-1/2 justify-center mb-4 md:mb-0">
          <Image src={heroImage} alt="IT Solution Group" width={500} height={500} />
        </div>
        <div className="">
        <h2 className="text-2xl font-bold mb-4">Why choose IT Solution Group?</h2>
          <div className="p-4 rounded-md">
            <h3 className="text-lg font-bold flex items-center">
              <Image src={certificationIcon} alt="Certification" width={24} height={24} className="mr-2" />
              Certification
            </h3>
            <p>Our team is certified and trained to deliver high-quality solutions.</p>
          </div>
          <div className="p-4 rounded-md">
            <h3 className="text-lg font-bold flex items-center">
              <Image src={educationIcon} alt="Education" width={24} height={24} className="mr-2" />
              Education
            </h3>
            <p>We provide educational resources to help you stay up-to-date.</p>
          </div>
          <div className="p-4 rounded-md">
            <h3 className="text-lg font-bold flex items-center">
              <Image src={experienceIcon} alt="Experience" width={24} height={24} className="mr-2" />
              Experience
            </h3>
            <p>With years of experience, we deliver proven solutions.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;