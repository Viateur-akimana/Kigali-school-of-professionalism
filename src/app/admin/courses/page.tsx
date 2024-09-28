'use client'
import React from 'react';
import Card from './Card';

const Home: React.FC = () => {
  const courses = [
    {
      title: 'Front and backend engineering',
      duration: 'Self-Paced | 24 Weeks',
      status: 'Active',
      visibility: 'Public',
      enrollments: 0,
      price: '$10.00',
      createdOn: 'Created on Jul 7, 2024',
    },
    {
      title: 'Strategic Business Management',
      duration: 'Self-Paced | 24 Weeks',
      status: 'Active',
      visibility: 'Public',
      enrollments: 0,
      price: '$10.00',
      createdOn: 'Created on Jul 7, 2024',
    },
    {
      title: 'Professional Financial Management and Planning',
      duration: 'Self-Paced | 24 Weeks',
      status: 'Active',
      visibility: 'Public',
      enrollments: 0,
      price: '$10.00',
      createdOn: 'Created on Jul 7, 2024',
    },
    {
      title: 'Advanced Risk Assessment and Management (ARAM)',
      duration: 'Self-Paced | 24 Weeks',
      status: 'Active',
      visibility: 'Public',
      enrollments: 0,
      price: '$10.00',
      createdOn: 'Created on Jul 7, 2024',
    },
    {
      title: 'Accounting Systems and QuickBooks',
      duration: 'Self-Paced | 24 Weeks',
      status: 'Active',
      visibility: 'Public',
      enrollments: 0,
      price: '$10.00',
      createdOn: 'Created on Jul 7, 2024',
    },
    {
      title: 'Advanced Statistical Analysis (ASA)',
      duration: 'Self-Paced | 24 Weeks',
      status: 'Active',
      visibility: 'Public',
      enrollments: 0,
      price: '$10.00',
      createdOn: 'Created on Jul 7, 2024',
    },
    {
      title: 'Database Administration and Design',
      duration: 'Self-Paced | 24 Weeks',
      status: 'Active',
      visibility: 'Public',
      enrollments: 0,
      price: '$10.00',
      createdOn: 'Created on Jul 6, 2024',
    },
    {
      title: 'Professional Web Design (UX/UI)',
      duration: 'Self-Paced | 24 Weeks',
      status: 'Active',
      visibility: 'Public',
      enrollments: 0,
      price: '$10.00',
      createdOn: 'Created on Jul 6, 2024',
    },
    {
      title: 'Cloud Server Administration',
      duration: 'Self-Paced | No Time Limit',
      status: 'Active',
      visibility: 'Public',
      enrollments: 0,
      price: 'Free',
      createdOn: 'Created on Jun 22, 2024',
    },
    {
      title: 'Security Engineering Certificate + 2 years of Experience',
      duration: 'Scheduled | Jul 6, 2024 - Sep 6, 2024',
      status: 'Active',
      visibility: 'Public',
      enrollments: 1,
      price: '$10.00',
      createdOn: 'Created on Jun 21, 2024',
    },
    {
      title: 'Project Management Professional (PMP) Certificate',
      duration: 'Scheduled | Jul 6, 2024 - Sep 6, 2024',
      status: 'Active',
      visibility: 'Public',
      enrollments: 0,
      price: 'Free',
      createdOn: 'Created on Jun 21, 2024',
    },
    {
      title: 'IT For Professionals',
      duration: 'Scheduled | Jul 6, 2024 - Sep 6, 2024',
      status: 'Active',
      visibility: 'Public',
      enrollments: 10,
      price: '$10.00',
      createdOn: 'Created on Jun 21, 2024',
    },
    {
      title: '7 Steps to Becoming an SEO Expert 📈',
      duration: 'Self-Paced | No Time Limit',
      status: 'Active',
      visibility: 'Public',
      enrollments: 1,
      price: '$10.00',
      createdOn: 'Created on Jun 11, 2024',
    },
    {
      title: 'Productivity Crash Course',
      duration: 'Scheduled | 5 Days',
      status: 'Active',
      visibility: 'Public',
      enrollments: 2,
      price: 'Free',
      createdOn: 'Created on Mar 20, 2024',
    },
    {
      title: 'PROFESSIONAL DEVELOPMENT',
      duration: 'Self-Paced | 4 Weeks',
      status: 'Active',
      visibility: 'Public',
      enrollments: 14,
      price: '$10.00',
      createdOn: 'Created on Mar 20, 2024',
    },
  ];

  const handleEdit = (index: number) => {
    alert(`Edit course at index: ${index}`);
  };

  const handleDelete = (index: number) => {
    alert(`Delete course at index: ${index}`);
  };

  return (
    <div className="container mx-auto mt-10 px-6 py-12 bg-gradient-to-r from-indigo-50 via-white to-purple-50 dark:bg-gray-900">
      <div className="flex flex-col md:flex-row justify-between items-center mb-10">
        <div className="flex items-center">
          <h1 className="text-3xl ml-6 md:text-4xl font-extrabold text-indigo-800 dark:text-white mb-4 md:mb-0">
            Available courses
          </h1>
        </div>
        <button className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-purple-600 hover:to-indigo-500 text-white px-6 py-3 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 transition duration-300 ease-in-out">
          Add New Course
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <Card
            key={index}
            title={course.title}
            duration={course.duration}
            status={course.status}
            visibility={course.visibility}
            enrollments={course.enrollments}
            price={course.price}
            createdOn={course.createdOn}
            onEdit={() => handleEdit(index)}
            onDelete={() => handleDelete(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;