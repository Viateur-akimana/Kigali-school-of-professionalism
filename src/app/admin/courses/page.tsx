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
      title: 'Professional Web design(UX/UI)',
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
  
    return (
      <div className="container mx-auto mt-20 px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Available Courses</h1>
        <div className="flex flex-wrap justify-center">
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
            />
          ))}
        </div>
      </div>
    );
  };
  
  export default Home;