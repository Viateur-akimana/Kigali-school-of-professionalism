import React from 'react';
import Link from 'next/link';
import image1 from '../../../public/intern.jpg'
import Image from 'next/image'

const Internship: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">

      <div className="text-center mb-10 border-b-2">
        <h1 className="text-3xl flex mx-auto justify-center text-blue-600 font-bold">Internship Program</h1>
        <p className="mb-10 text-gray-700 mx-12 my-6 text-xl">
          Experience the IT industry first-hand with our comprehensive internship program designed for Rwandan graduates and final-year students.
          To qualify for our internship program, you must be a Rwandan graduate or a final-year student with a passion for technology and a desire to learn and grow in the tech industry.
          Our internship program offers valuable experience and skills to thrive in the tech industry. You will have the opportunity to work on real projects, receive mentorship from industry professionals, and enhance your technical and soft skills.
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center mb-8">
        <div className="md:w-1/2 m-10 p-10 md:mb-0 space-y-7 text-gray-600">
          <h1 className="text-4xl text-blue-600 font-bold mb-4">What we offer</h1>
          <p className="text-lg opacity-4">
            <div className='my-4 text-xl text-gray-800'> <p>Our Internship Programme offers students and recent graduates the opportunity to gain direct practical work experience.</p></div>

            <span className='font-bold text-gray-800'>• Duration:</span> <p>The duration of an internship is normally <span className='font-bold text-gray-800'>between four and sixteen weeks</span>. Internships can be on a remote or a office basis.</p>

            <span className='font-bold text-gray-800'>• Skills we cover:</span><p>ISG provides a real-time experience to interns. A one-time lump sum, as a contribution towards solving world problems, may also be mentors when funding is available.</p>
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
          <h1 className="text-2xl flex mx-auto justify-center text-blue-600 font-bold">Ready for an internship?</h1>
          <p className="mb-4 text-gray-600 mx-6 my-6">
            Join our internship program and unlock the potential to become a professional in TECH. Designed specifically for Rwandan graduates and final-year students, this program offers you the opportunity to gain valuable experience and skills to thrive in the industry. Do not miss out on this chance to take your career to the next level. Apply now!
          </p>
          <Link href="https://forms.office.com/pages/responsepage.aspx?id=SkBXWhK0KUKNZzA_2mwSSwskkQHjChNOrnrVmzogwhRUMEhFQjE4RkFaRVJRNUdIN0VLMVIxWThGQS4u" target="_blank">
            <button className="bg-blue-600 flex mx-auto justify-center hover:bg-blue-700 text-white font-bold py-2 px-4 m-6 rounded">
              Apply now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Internship;
