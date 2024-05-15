import Link from 'next/link';
import React from 'react';

const Application: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center" id='jobs'>
      <div className="p-6 bg-white rounded-lg  mx-auto justify-center border-t-2 shadow-lg">
        <h1 className="text-2xl flex mx-auto justify-center text-blue-600 font-bold">Ready for an internship?</h1>
        <p className="mb-4 text-gray-600 mx-6 my-6">
        Join  our internship program and unlock the potential to become a professional  in TECH. Designed specifically for Rwandan graduates and final-year  students, this program offers you the opportunity to gain valuable  experience and skills to thrive in the industry . Do not miss out on this  chance to take your career to the next level. Apply now!.
        </p>
        <button className="bg-blue-600 flex mx-auto justify-center hover:bg-blue-700 text-white font-bold py-2 px-4 m-6 rounded">
          <Link href='https://forms.office.com/pages/responsepage.aspx?id=SkBXWhK0KUKNZzA_2mwSSwskkQHjChNOrnrVmzogwhRUMEhFQjE4RkFaRVJRNUdIN0VLMVIxWThGQS4u' target="_blank">Apply now</Link>
        </button>
      </div>
    </div>
  );    
};

export default Application;