import React from 'react';
import Image from 'next/image';

import heroImage from '../../../public/hero-image.png';
import educationIcon from '../../../public/Vectors.png';
import certificationIcon from '../../../public/Vector.png';
import experienceIcon from '../../../public/Vector.png';

const Choose = () => {
  return (
    <div className="mx-auto border-t-2 m-4">
      <h2 className="text-2xl mb-4 text-blue-600 mx-auto my-4 text-center font-bold">IT Solution Group limited</h2>
      <div className="flex flex-row md:flex-row items-center">
        <div className="md:w-1/2 justify-center ml-10  md:mb-0">
          <Image src={heroImage} alt="IT s Group" width={400} height={400} />
        </div>
        <div className="">
        <h2 className="text-2xl font-bold mb-4 text-blue-600">Why choose IT Solution Group?</h2>
          <div className="p-4 rounded-md">
            <h3 className="text-lg font-bold  flex items-center">
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