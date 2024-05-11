import React from 'react';

const Application: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="  p-6 bg-white rounded-lg  mx-auto justify-center shadow-lg">
        <h1 className="text-2xl text-blue-600 font-bold mb-4">Ready for an internship?</h1>
        <p className="mb-4 text-gray-600 ">
          Join our internship program and unlock the potential to become a professional in TECH. Designed specifically for
          Rwandan graduates and final-year students, this program offers you the opportunity to gain valuable experience
          and skills to thrive in the industry. Don't miss out on this chance to take your career to the next level.
        </p>
        <button className="bg-blue-500 mx-auto justify-center hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Apply now
        </button>
      </div>
    </div>
  );    
};

export default Application;