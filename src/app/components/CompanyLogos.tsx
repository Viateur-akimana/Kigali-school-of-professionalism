import React from 'react';
import Image from 'next/image';
import metaLogo from '../../../public/meta-logo';
import googleLogo from '../../../public/google-logo.png';
import microsoftLogo from '../../../public/'

const CompanyLogos: React.FC = () => {
  return (
    <div className="my-12">
      <h2 className="text-2xl font-bold mb-6 text-center">Trusted by a handful of companies</h2>
      <div className="flex justify-center items-center space-x-8">
        <div className="bg-white rounded-lg shadow-md p-4">
          <Image src="/meta-logo.png" alt="Meta" width={100} height={100} />
        </div>
        <div className="bg-white rounded-lg shadow-md p-4">
          <Image src="/google-logo.png" alt="Google" width={100} height={100} />
        </div>
        <div className="bg-white rounded-lg shadow-md p-4">
          <Image src="/microsoft-logo.png" alt="Microsoft" width={100} height={100} />
        </div>
      </div>
    </div>
  );
};

export default CompanyLogos;