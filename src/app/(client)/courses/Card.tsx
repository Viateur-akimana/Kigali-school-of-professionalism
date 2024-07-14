import React from 'react';
import Image from 'next/image';

interface CardProps {
  title: string;
  duration: string;
  status: string;
  visibility: string;
  enrollments: number;
  price: string;
  createdOn: string;
  imageUrl: string;
}

const Card: React.FC<CardProps> = ({
  title,
  duration,
  status,
  visibility,
  enrollments,
  price,
  createdOn,
  imageUrl,
}) => {
  return (
    <div
      data-aos="fade-up"
      className="max-w-sm rounded-lg overflow-hidden shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl m-4 bg-white dark:bg-gray-800"
    >
      <Image
        className="w-full object-cover"
        src={imageUrl}
        alt={title}
        width={400}
        height={200}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-gray-800 dark:text-gray-200">
          {title}
        </div>
        <p className="text-gray-600 dark:text-gray-400 text-base">
          {duration} | {status}
        </p>
        <p className="text-gray-600 dark:text-gray-400 text-base">
          {visibility} | {enrollments} Enrollments
        </p>
        <p className="text-gray-600 dark:text-gray-400 text-base">{createdOn}</p>
      </div>
      <div className="px-6 pt-4 pb-6">
        <span className="block text-gray-800 dark:text-gray-200 text-lg font-semibold mb-2">
          {price}
        </span>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-1/2l transition-colors duration-300">
          Join
        </button>
      </div>
    </div>
  );
};

export default Card;
