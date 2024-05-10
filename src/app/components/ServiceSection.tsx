import React from 'react';

interface ServiceSectionProps {
  title: string;
  description: string;
  icon: React.ReactNode; 
}

const ServiceSection: React.FC<ServiceSectionProps> = ({ title, description, icon }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center mb-4">
        <div className="bg-blue-500 text-white p-3 rounded-full mr-4">{icon}</div> 
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Learn more
      </button>
    </div>
  );
};

export default ServiceSection;