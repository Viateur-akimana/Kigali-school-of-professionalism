'use client'
import React, { useEffect, useState } from 'react';
import Card from './Card';

interface Course {
  id: number;
  title: string;
  duration: string;
  price: string;
  createdOn: string;
  imageUrl: string;
}

const staticImages: { [key: string]: string } = {
  'Front and backend engineering': '/fbe.jpg',
  'Strategic Business Management': '/accounting.jpg',
  'Professional Financial Management and Planning': '/finance.jpg',
  'Advanced Risk Assessment and Management (ARAM)': '/risk.jpg',
  'Accounting Systems and QuickBooks': '/accounting.jpg',
  'Advanced Statistical Analysis (ASA)': '/business.jpg',
  'Database Administration and Design': '/accounting.jpg',
  'Professional Web design(UX/UI)': '/risk.jpg',
  'Cloud Server Administration': '/finance.jpg',
  'Security Engineering Certificate + 2 years of Experience': '/fbe.jpg',
  'Project Management Professional (PMP) Certificate': '/accounting.jpg',
  'IT For Professionals': '/risk.jpg',
  '7 Steps to Becoming an SEO Expert 📈': '/finance.jpg',
  'Productivity Crash Course': '/business.jpg',
  'PROFESSIONAL DEVELOPMENT': '/risk.jpg',
};

const Home: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    const fetchCourses = async () => {
      const response = await fetch('/api/courses');
      const data = await response.json();
      const coursesWithImages = data.map((course: Course) => ({
        ...course,
        imageUrl: staticImages[course.title] || '/default.jpg',
      }));
      setCourses(coursesWithImages);
    };
    fetchCourses();
  }, []);
  return (
    <div className="container mx-auto mt-20 px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Available Courses</h1>
      <div className="flex flex-wrap justify-center">
        {courses.map(course => (
          <Card
            key={course.id}
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
