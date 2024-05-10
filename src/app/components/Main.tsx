import Head from 'next/head';
import ServiceSection from '../components/ServiceSection';
import CompanyLogos from '../components/CompanyLogos';
import Testimonials from '../components/Testimonials';
import { FaCloud, FaDesktop, FaShieldAlt, FaRobot, FaPenNib, FaBriefcase } from 'react-icons/fa';

const services = [
  {
    title: 'Cloud Computing Solutions',
    description: 'We provide cloud computing solutions...',
    icon: <FaCloud />,
  },
  {
    title: 'Web Development and UI/UX Design',
    description: 'Our UI/UX designers and web developers...',
    icon: <FaDesktop />,
  },
  {
    title: 'Cybersecurity and Security Training',
    description: 'We offer cybersecurity services and training...',
    icon: <FaShieldAlt />,
  },
  {
    title: 'IoT and AI Technologies Solutions',
    description: 'Our team of experts can help you...',
    icon: <FaRobot />,
  },
  {
    title: 'Tech Blogging and Content Creation',
    description: 'Our content creation services...',
    icon: <FaPenNib />,
  },
  {
    title: 'Technology Consulting and Business Analysis',
    description: 'Our consulting services help businesses...',
    icon: <FaBriefcase />,
  },
];

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <Head>
        <title>Our Services</title>
      </Head>
      <h1 className="text-4xl font-bold my-8 text-center">Our Services</h1>
      <p className="text-gray-600 mb-8 text-center">
        &quot Revolutionize your businesses with our cutting-edge technology solutions.&quot
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {services.map((service, index) => (
          <ServiceSection
            key={index}
            title={service.title}
            description={service.description}
            icon={service.icon}
          />
        ))}
      </div>
      <CompanyLogos />
      <Testimonials />
    </div>
  );
}