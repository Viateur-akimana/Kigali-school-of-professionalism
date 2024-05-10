import React from 'react'
import Image from 'next/image'
import heroImage from '../../public/hero-image.png';
const Choose = () => {
  return (
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
  )
}

export default Choose