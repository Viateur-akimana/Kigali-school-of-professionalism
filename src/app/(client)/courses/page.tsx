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
      imageUrl: '/image1.png',
    },
    {
      title: 'Strategic Business Management',
      duration: 'Self-Paced | 24 Weeks',
      status: 'Active',
      visibility: 'Public',
      enrollments: 0,
      price: '$10.00',
      createdOn: 'Created on Jul 7, 2024',
      imageUrl: '/image2.png',
    },
    {
      title: 'Professional Financial Management and Planning',
      duration: 'Self-Paced | 24 Weeks',
      status: 'Active',
      visibility: 'Public',
      enrollments: 0,
      price: '$10.00',
      createdOn: 'Created on Jul 7, 2024',
      imageUrl: '/image3.png',
    },
    {
      title: 'Advanced Risk Assessment and Management (ARAM)',
      duration: 'Self-Paced | 24 Weeks',
      status: 'Active',
      visibility: 'Public',
      enrollments: 0,
      price: '$10.00',
      createdOn: 'Created on Jul 7, 2024',
      imageUrl: '/image4.png',
    },
    {
      title: 'Accounting Systems and QuickBooks',
      duration: 'Self-Paced | 24 Weeks',
      status: 'Active',
      visibility: 'Public',
      enrollments: 0,
      price: '$10.00',
      createdOn: 'Created on Jul 7, 2024',
      imageUrl: '/image5.png',
    },
    {
      title: 'Advanced Statistical Analysis (ASA)',
      duration: 'Self-Paced | 24 Weeks',
      status: 'Active',
      visibility: 'Public',
      enrollments: 0,
      price: '$10.00',
      createdOn: 'Created on Jul 7, 2024',
      imageUrl: '/image6.png',
    },
    {
      title: 'Database Administration and Design',
      duration: 'Self-Paced | 24 Weeks',
      status: 'Active',
      visibility: 'Public',
      enrollments: 0,
      price: '$10.00',
      createdOn: 'Created on Jul 6, 2024',
      imageUrl: '/image7.png',
    },
    {
      title: 'Professional Web design(UX/UI)',
      duration: 'Self-Paced | 24 Weeks',
      status: 'Active',
      visibility: 'Public',
      enrollments: 0,
      price: '$10.00',
      createdOn: 'Created on Jul 6, 2024',
      imageUrl: '/image8.png',
    },
    {
      title: 'Cloud Server Administration',
      duration: 'Self-Paced | No Time Limit',
      status: 'Active',
      visibility: 'Public',
      enrollments: 0,
      price: 'Free',
      createdOn: 'Created on Jun 22, 2024',
      imageUrl: '/image9.png',
    },
    {
      title: 'Security Engineering Certificate + 2 years of Experience',
      duration: 'Scheduled | Jul 6, 2024 - Sep 6, 2024',
      status: 'Active',
      visibility: 'Public',
      enrollments: 1,
      price: '$10.00',
      createdOn: 'Created on Jun 21, 2024',
      imageUrl: '/image10.png',
    },
    {
      title: 'Project Management Professional (PMP) Certificate',
      duration: 'Scheduled | Jul 6, 2024 - Sep 6, 2024',
      status: 'Active',
      visibility: 'Public',
      enrollments: 0,
      price: 'Free',
      createdOn: 'Created on Jun 21, 2024',
      imageUrl: '/image11.png',
    },
    {
      title: 'IT For Professionals',
      duration: 'Scheduled | Jul 6, 2024 - Sep 6, 2024',
      status: 'Active',
      visibility: 'Public',
      enrollments: 10,
      price: '$10.00',
      createdOn: 'Created on Jun 21, 2024',
      imageUrl: '/image12.png',
    },
    {
      title: '7 Steps to Becoming an SEO Expert 📈',
      duration: 'Self-Paced | No Time Limit',
      status: 'Active',
      visibility: 'Public',
      enrollments: 1,
      price: '$10.00',
      createdOn: 'Created on Jun 11, 2024',
      imageUrl: '/image13.png',
    },
    {
      title: 'Productivity Crash Course',
      duration: 'Scheduled | 5 Days',
      status: 'Active',
      visibility: 'Public',
      enrollments: 2,
      price: 'Free',
      createdOn: 'Created on Mar 20, 2024',
      imageUrl: '/image14.png',
    },
    {
      title: 'PROFESSIONAL DEVELOPMENT',
      duration: 'Self-Paced | 4 Weeks',
      status: 'Active',
      visibility: 'Public',
      enrollments: 14,
      price: '$10.00',
      createdOn: 'Created on Mar 20, 2024',
      imageUrl: '/image15.png',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
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
            imageUrl={course.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
