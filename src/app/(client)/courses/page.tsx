  import React from 'react';
  import Card from './Card';
  import fbe from "../../../../public/fbe.jpg";
  import business from "../../../../public/business.jpg";
  import finance from "../../../../public/finance.jpg";
  import risk from "../../../../public/risk.jpg";
  import accounting from "../../../../public/accounting.jpg";
  import statistics from "../../../../public/business.jpg";
  import database from "../../../../public/accounting.jpg";
  import web from "../../../../public/risk.jpg";
  import cloud from "../../../../public/finance.jpg";
  import security from "../../../../public/fbe.jpg";
  import project from "../../../../public/accounting.jpg";
  import professional from "../../../../public/risk.jpg";
  import seo from "../../../../public/finance.jpg";
  
  const Home: React.FC = () => {

  const courses = [
    {
      title: 'Front and backend engineering',
      duration: 'Self-Paced | 24 Weeks',
 
      price: '$10.00',
      createdOn: 'Created on Jul 7, 2024',
      imageUrl: fbe,
    },
    {
      title: 'Strategic Business Management',
      duration: 'Self-Paced | 24 Weeks',
      price: '$10.00',
      createdOn: 'Created on Jul 7, 2024',
      imageUrl: accounting,
    },
    {
      title: 'Professional Financial Management and Planning',
      duration: 'Self-Paced | 24 Weeks',

      price: '$10.00',
      createdOn: 'Created on Jul 7, 2024',
      imageUrl: finance,
    },
    {
      title: 'Advanced Risk Assessment and Management (ARAM)',
      duration: 'Self-Paced | 24 Weeks',
      price: '$10.00',
      createdOn: 'Created on Jul 7, 2024',
      imageUrl: risk,
    },
    {
      title: 'Accounting Systems and QuickBooks',
      duration: 'Self-Paced | 24 Weeks',
      price: '$10.00',
      createdOn: 'Created on Jul 7, 2024',
      imageUrl: accounting,
    },
    {
      title: 'Advanced Statistical Analysis (ASA)',
      duration: 'Self-Paced | 24 Weeks',
      price: '$10.00',
      createdOn: 'Created on Jul 7, 2024',
      imageUrl: statistics,
    },
    {
      title: 'Database Administration and Design',
      duration: 'Self-Paced | 24 Weeks',
      price: '$10.00',
      createdOn: 'Created on Jul 6, 2024',
      imageUrl: database,
    },
    {
      title: 'Professional Web design(UX/UI)',
      duration: 'Self-Paced | 24 Weeks',
      price: '$10.00',
      createdOn: 'Created on Jul 6, 2024',
      imageUrl: web,
    },
    {
      title: 'Cloud Server Administration',
      duration: 'Self-Paced | No Time Limit',
      price: 'Free',
      createdOn: 'Created on Jun 22, 2024',
      imageUrl: cloud,
    },
    {
      title: 'Security Engineering Certificate + 2 years of Experience',
      duration: 'Scheduled | Jul 6, 2024 - Sep 6, 2024',
      price: '$10.00',
      createdOn: 'Created on Jun 21, 2024',
      imageUrl: security,
    },
    {
      title: 'Project Management Professional (PMP) Certificate',
      duration: 'Scheduled | Jul 6, 2024 - Sep 6, 2024',
      price: 'Free',
      createdOn: 'Created on Jun 21, 2024',
      imageUrl: project,
    },
    {
      title: 'IT For Professionals',
      duration: 'Scheduled | Jul 6, 2024 - Sep 6, 2024',
      price: '$10.00',
      createdOn: 'Created on Jun 21, 2024',
      imageUrl: professional,
    },
    {
      title: '7 Steps to Becoming an SEO Expert 📈',
      duration: 'Self-Paced | No Time Limit',
      price: '$10.00',
      createdOn: 'Created on Jun 11, 2024',
      imageUrl: seo,
    },
    {
      title: 'Productivity Crash Course',
      duration: 'Scheduled | 5 Days',
      price: 'Free',
      createdOn: 'Created on Mar 20, 2024',
      imageUrl: business,
    },
    {
      title: 'PROFESSIONAL DEVELOPMENT',
      duration: 'Self-Paced | 4 Weeks',
      price: '$10.00',
      createdOn: 'Created on Mar 20, 2024',
      imageUrl: professional,
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