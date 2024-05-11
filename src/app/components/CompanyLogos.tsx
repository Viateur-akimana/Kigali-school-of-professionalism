import React from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import metaLogo from '../../../public/meta-logo.png';
import googleLogo from '../../../public/google-logo.png';
import microsoftLogo from '../../../public/microsoft-logo.png';

interface CompanyLogosProps {}

const CompanyLogos: React.FC<CompanyLogosProps> = () => {
  

  return (
    <div className="border-t-2">
      <h2 className="text-2xl font-bold mb-2 text-blue-600 text-center m-4 p-4">Trusted by</h2>
      <p className="text-gray-600 mb-6 text-center">
        Trusted by a hundreds of companies
      </p>
          <div className="flex mx-auto justify-center my-4 space-x-4">
            <div className="bg-white rounded-lg shadow-md p-6 flex items-center mr-4">
              <Image src={metaLogo} alt="Meta" width={100} height={100} />
              <span className="ml-6 text-xl text-blue-600 px-8 font-bold">Meta</span>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 flex items-center mr-4 ">
              <Image src={googleLogo} alt="Google" width={100} height={100} />
              <span className="ml-6 text-xl text-yellow-500 font-bold px-8">Google</span>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6  flex items-center">
              <Image
                src={microsoftLogo}
                alt="Microsoft" 
                width={100}
                height={100}
              />
              <span className="ml-4 text-blue-500 text-xl font-bold px-8">Microsoft</span>
            </div>
        
      </div>
    </div>
  );
};

export default CompanyLogos;