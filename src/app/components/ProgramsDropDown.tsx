'use client';

import React, { useState } from 'react';
import { Transition } from '@headlessui/react';
import Link from 'next/link';

const ProgramsDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const programs = [
    { name: 'Intership', link: '/program1' },
    { name: 'Experience', link: '/program2' },
    { name: 'Mentorship', link: '/program3' },
    
  ];

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex items-center text-black hover:text-gray-900 px-3 py-2 rounded-md text-md font-medium"
          onClick={() => setIsOpen(!isOpen)}
        >
          Programs
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {programs.map((program, index) => (
              <Link
                key={index}
                href={program.link}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                onClick={() => setIsOpen(false)}
              >
                {program.name}
              </Link>
            ))}
          </div>
        </div>
      </Transition>
    </div>
  );
};

export default ProgramsDropdown;