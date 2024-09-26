'use client'
import React, { useState } from 'react';

interface CardProps {
  title: string;
  duration: string;
  status: string;
  visibility: string;
  enrollments: number;
  price: string;
  createdOn: string;
  onEdit: () => void;
  onDelete: () => void;
}

const Card: React.FC<CardProps> = ({
  title,
  duration,
  status,
  visibility,
  enrollments,
  price,
  createdOn,
  onEdit,
  onDelete,
}) => {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <div
      data-aos="fade-up"
      className="relative max-w-sm w-full rounded-lg overflow-hidden shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl m-4 bg-white dark:bg-gray-800"
    >
      <div className="absolute top-3 right-3">
        <button
          onClick={() => setMenuVisible(!menuVisible)}
          className="focus:outline-none"
        >
          <span className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200">
            &#8942; {/* Three dots icon */}
          </span>
        </button>
        {menuVisible && (
          <div className="absolute right-0 mt-2 w-32 bg-white dark:bg-gray-700 rounded-lg shadow-lg z-10">
            <button
              onClick={onEdit}
              className="w-full text-left px-4 py-2 text-sm text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600"
            >
              Edit
            </button>
            <button
              onClick={onDelete}
              className="w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-gray-100 dark:hover:bg-gray-600"
            >
              Delete
            </button>
          </div>
        )}
      </div>
      <div className="px-6 py-4">
        <h2 className="font-bold text-xl mb-2 text-gray-800 dark:text-gray-200 line-clamp-2">
          {title}
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
          {duration}
        </p>
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-200">
            {status}
          </span>
          <span className="text-xs text-gray-500 dark:text-gray-400">
            {visibility}
          </span>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {enrollments} Enrollments
        </p>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
          {createdOn}
        </p>
      </div>
      <div className="px-6 pt-4 pb-6">
        <div className="flex justify-between items-center mb-4">
          <span className="text-gray-800 dark:text-gray-200 text-lg font-semibold">
            {price}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
