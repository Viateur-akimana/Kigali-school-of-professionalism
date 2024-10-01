'use client'
import React, { useState } from 'react';
import { format, parseISO } from 'date-fns';

interface CardProps {
  id: number;
  title: string;
  duration: string;
  status: string;
  visibility: string;
  enrollments: number;
  price: string;
  createdOn: string;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

const Card: React.FC<CardProps> = ({
  id,
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

  const handleDelete = () => {
    const confirmed = confirm(`Are you sure you want to delete "${title}"?`);
    if (confirmed) {
      onDelete(id);
    }
  };

  const formattedDate = createdOn ? format(parseISO(createdOn), 'MMM dd, yyyy') : '';


  return (
    <div
      data-aos="fade-up"
      className="relative bg-gradient-to-br from-white to-indigo-50 dark:from-gray-800 dark:to-gray-900 shadow-lg rounded-lg p-6 transition transform hover:scale-105 hover:shadow-2xl hover:bg-opacity-80"
    >
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-lg mb-2 text-indigo-800 dark:text-white line-clamp-2">
          {title}
        </h2>
        <div className="relative">
          <button
            onClick={() => setMenuVisible(!menuVisible)}
            className="focus:outline-none"
          >
            <span className="text-gray-600 dark:text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400">
              &#8942;
            </span>
          </button>
          {menuVisible && (
            <div className="absolute right-0 mt-2 w-32 bg-white dark:bg-gray-800 rounded-lg shadow-xl z-10">
              <button
                onClick={() => onEdit(id)}
                className="w-full text-left px-4 py-2 text-sm text-indigo-800 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-gray-700"
              >
                Edit
              </button>
              <button
                onClick={handleDelete}
                className="w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-indigo-50 dark:hover:bg-gray-700"
              >
                Delete
              </button>
            </div>
          )}
        </div>
      </div>
      <p className="text-sm text-indigo-600 dark:text-gray-400 mb-2">{duration}</p>
      <div className="flex justify-between items-center mb-4">
        <span className="text-xs font-semibold py-1 px-2 rounded-full text-green-700 bg-green-200 dark:bg-green-800">
          {status}
        </span>
        <span className="text-xs text-gray-500 dark:text-gray-400">{visibility}</span>
      </div>
      <p className="text-sm text-indigo-600 dark:text-gray-400 mb-4">
        {enrollments} Enrollments
      </p>
      <div className="flex justify-between items-center">
        <span className="text-lg font-semibold text-indigo-800 dark:text-white">
          {price}
        </span>
        <p className="text-xs text-gray-500 dark:text-gray-400">{formattedDate}</p>
      </div>
    </div>
  );
};

export default Card;
