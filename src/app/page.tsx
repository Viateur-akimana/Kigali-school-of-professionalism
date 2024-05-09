import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import heroImage from '../../public/hero-image.png'
import heroImagePlaceholder from '../../public/image 4.png'

const HomePage: React.FC = () => {
  return (

    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          <h1 className="text-4xl text-blue-600  font-bold mb-4">IT Solution Group Limited</h1>
          <p className="text-lg mb-6">
            The  IT Solutions Group is leading the charge towards Rwanda's tech-driven future.
            With a steadfast commitment to the transformative power of  technology,
            we are driving change in alignment with Vision 2050. Join us  in shaping
            Rwanda's bright and prosperous future!
          </p>
          <input
            className="bg-gray-200 px-4 py-2 rounded-md w-full md:w-auto"
            placeholder="Search..."
            
          />
        </div>
        <div className="md:w-1/2 flex justify-center">
          <Image
            src={heroImage}
            alt="IT Solution Group"
            width={500}
            height={500}
            placeholder="blur"
          />
        </div>
      </div>
      <div className="my-8">
        <h2 className="text-2xl flex font-bold mb-4">Why choose IT Solution Group?</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 justify-center">
            <Image
              src={heroImage}
              alt="IT Solution Group"
              width={500}
              height={500}
              placeholder="blur"
            />
          </div>

          <div className="grid grid-cols-3 md:grid-cols-3 gap-4">
            <h2 className="text-2xl flex font-bold mb-4">Why choose IT Solution Group?</h2>
            <div className="bg-gray-100 p-4 rounded-md">
              <h3 className="text-lg font-bold">Certification</h3>
              <p>Our team is certified and trained to deliver high-quality solutions.</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-md">
              <h3 className="text-lg font-bold">Education</h3>
              <p>We provide educational resources to help you stay up-to-date.</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-md">
              <h3 className="text-lg font-bold">Experience</h3>
              <p>With years of experience, we deliver proven solutions.</p>
            </div>
          </div>
        </div>

      </div>
      <div className="my-8">
        <h2 className="text-2xl font-bold mb-4">Our Services</h2>
        <p className="mb-6">
          We transform businesses through technology. &quot Revolutionize your businesses with our cutting-edge technology solutions. &quot
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-100 p-4 rounded-md">
            <h3 className="text-lg font-bold">Cloud Computing Solutions</h3>
            <p>
              Our services in cloud computing are designed to provide you with a reliable, scalable, and secure infrastructure...
            </p>
            <Link href="/services/cloud-computing" className="text-red-500">
              Learn More
            </Link>
          </div>
          <div className="bg-gray-100 p-4 rounded-md">
            <h3 className="text-lg font-bold">Web Development and UI/UX Design</h3>
            <p>
              Our web development and UI/UX design services are tailored to create visually appealing and user-friendly websites...
            </p>
            <Link href="/services/web-development" className="text-red-500">
              Learn More
            </Link>
          </div>
          <div className="bg-gray-100 p-4 rounded-md">
            <h3 className="text-lg font-bold">Cybersecurity and Security Training</h3>
            <p>
              We offer comprehensive cybersecurity solutions and security training programs to protect your business...
            </p>
            <Link href="/services/cybersecurity" className="text-red-500">
              Learn More
            </Link>
          </div>
        </div>
      </div>
      <div className="my-8">
        <h2 className="text-2xl font-bold mb-4">More Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-100 p-4 rounded-md">
            <h3 className="text-lg font-bold">IoT and AI Management Solutions</h3>
            <p>
              Our IoT and AI management solutions help you leverage the power of these technologies to optimize your operations...
            </p>
            <Link href="/services/iot-ai" className="text-red-500">
              Learn More
            </Link>
          </div>
          <div className="bg-gray-100 p-4 rounded-md">
            <h3 className="text-lg font-bold">Tech Staffing and Contract Creation</h3>
            <p>
              We provide expert tech staffing solutions and assist with contract creation to ensure you have the right talent...
            </p>
            <Link href="/services/tech-staffing" className="text-red-500">
              Learn More
            </Link>
          </div>
          <div className="bg-gray-100 p-4 rounded-md">
            <h3 className="text-lg font-bold">Technology Consulting and Business Solutions</h3>
            <p>
              Our technology consulting services help you identify and implement the best solutions for your business needs...
            </p>
            <Link href="/services/tech-consulting" className="text-red-500">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>

  );
};

export default HomePage;