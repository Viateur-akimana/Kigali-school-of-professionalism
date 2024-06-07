import React from 'react';
import Link from 'next/link';
import image1 from '../../../public/mission.jpg'
import Image from 'next/image'

const JobPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">

      <div className="text-center mb-10 border-b-2">
        <h1 className="text-3xl flex mx-auto justify-center text-blue-600 font-bold">Who we are?</h1>
        <p className="mb-10 text-gray-700 mx-12 my-6 text-xl">
        IT Solutions Group is a pioneering facilitator entity dedicated to empowering 
         Students from technology schools to lead the country s tech revolution in alignment
          with Vision 2050. We are committed to nurturing a modern tech-savvy generation, fostering 
          innovation, and providing impactful technology solutions for individuals, 
        enterprises, and large companies across diverse industries.
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center mb-8">
        <div className="md:w-1/2 m-10 p-10 md:mb-0 space-y-7 text-gray-600">
          <h1 className="text-4xl text-blue-600 font-bold mb-4">Our mission</h1>
          <p className="text-lg opacity-4">
            <div className='my-4 text-xl text-gray-800'> <p>Our mission at IT 
              Solutions Group is to leverage our expertise and passion for technology
               to transform challenges into innovative solutions, driving development
                and progress. We are dedicated to harnessing the power of technology to
                 empower individuals, businesses, and communities, making a tangible and positive
                  impact on Rwandan society and beyond.</p></div>

           
          </p>
        </div>
        <div className="relative">

          <div className="right-20 top-0">
            <Image src={image1} alt="Image 1" width={500} height={500} />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="p-6 bg-white rounded-lg mx-auto justify-center border-t-2 shadow-lg">
          <h1 className="text-2xl flex mx-auto justify-center text-blue-600 font-bold">Our Vision</h1>
          <p className="mb-4 text-gray-600 mx-6 my-6">
          Our vision at IT Solutions Group is to democratize access to technology for all Rwandans, creating an inclusive space where everyone can benefit and thrive. We strive to bridge the digital divide by empowering individuals and communities through technology, fostering innovation, and unlocking sustainable growth and prosperity opportunities.
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default JobPage;