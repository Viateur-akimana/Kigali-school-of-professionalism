'use client'
import React, { useEffect, useState } from 'react';
import Card from './Card';
import { useRouter } from 'next/navigation';

interface Course {
  id: number;
  title: string;
  duration: string;
  status: string;
  visibility: string;
  enrollments: number;
  price: string;
  createdOn: string;
}

const Home: React.FC = () => {
  const router = useRouter();
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    const fetchCourses = async () => {
      const response = await fetch('/api/courses');
      const data = await response.json();
      setCourses(data);
    };

    fetchCourses();
  }, []);

  const handleEdit = (courseId: number) => {
    router.push(`/admin/courses/edit/${courseId}`);
  };

  const handleDelete = async (courseId: number) => {
    if (confirm('Are you sure you want to delete this course?')) {
      await fetch(`/api/courses/${courseId}`, {
        method: 'DELETE',
      });

      setCourses(courses.filter(course => course.id !== courseId));
    }
  };

  return (
    <div className="container mx-auto mt-10 px-6 py-12 bg-gradient-to-r from-indigo-50 via-white to-purple-50 dark:bg-gray-900">
      <div className="flex flex-col md:flex-row justify-between items-center mb-10">
        <h1 className="text-3xl ml-6 md:text-4xl font-extrabold text-indigo-800 dark:text-white mb-4 md:mb-0">
          Available courses
        </h1>
        <button
          onClick={() => router.push('/admin/courses/add')}
          className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-purple-600 hover:to-indigo-500 text-white px-6 py-3 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 transition duration-300 ease-in-out"
        >
          Add New Course
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <Card
            key={course.id}
            title={course.title}
            duration={course.duration}
            status={course.status}
            visibility={course.visibility}
            enrollments={course.enrollments}
            price={course.price}
            createdOn={course.createdOn}
            onEdit={() => handleEdit(course.id)}
            onDelete={() => handleDelete(course.id)} id={0} />
        ))}
      </div>
    </div>
  );
};

export default Home;
