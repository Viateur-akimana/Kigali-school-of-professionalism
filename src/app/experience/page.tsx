import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import experienceImage from '../../../public/experience.jpg';

const Experience: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-10 border-b-2">
        <h1 className="text-3xl flex mx-auto justify-center text-blue-600 font-bold">Gain Experience</h1>
        <p className="mb-10 text-gray-700 mx-12 my-6 text-xl">
          Our experience program is designed to provide hands-on learning opportunities for individuals looking to enhance their skills and knowledge. Whether you are a recent graduate or a seasoned professional, our program offers a range of experiences to help you grow and succeed in your career.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center mb-8">
        <div className="md:w-1/2 m-10 p-10 md:mb-0 space-y-7 text-gray-600">
          <h2 className="text-4xl text-blue-600 font-bold mb-2">Benefits of Our Experience Program</h2>
          <ul className="list-disc pl-5 text-xl">
            <li>Hands-on learning opportunities</li>
            <li>Access to cutting-edge technology and tools</li>
            <li>Networking with industry professionals</li>
            <li>Mentorship and guidance from experienced mentors</li>
          </ul>

        </div>

        <div className="relative">
          <div className="right-20 top-0">
            <Image src={experienceImage} alt="Experience Image" width={500} height={500} />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center">
        <div className="p-6 bg-white rounded-lg mx-auto justify-center border-t-2 shadow-lg">
          <h1 className="text-2xl flex mx-auto justify-center text-blue-600 font-bold">Ready to gain experience?</h1>
          <p className="mb-4 text-gray-600 mx-6 my-6">
            Join our experience program and take your skills to the next level. Whether you are interested in technology, business, or creative fields, we have opportunities for you to learn, grow, and succeed. Apply now and start your journey!
          </p>
          <Link href="https://forms.office.com/pages/responsepage.aspx?id=SkBXWhK0KUKNZzA_2mwSSwskkQHjChNOrnrVmzogwhRUMEhFQjE4RkFaRVJRNUdIN0VLMVIxWThGQS4u" target="_blank">
            <button className="bg-blue-600 flex mx-auto justify-center hover:bg-blue-700 text-white font-bold py-2 px-4 m-6 rounded">
              Register for an Experience
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Experience;
