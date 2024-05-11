import Head from 'next/head';
import ServiceSection from '../components/ServiceSection';
import CompanyLogos from '../components/CompanyLogos';
import Testimonials from '../components/Testimonials';
import { FaCloud, FaDesktop, FaShieldAlt, FaRobot, FaPenNib, FaBriefcase } from 'react-icons/fa';
// import Testimonial from './Testimonial';
import Application from './Application';

const services = [
  {
    title: 'Cloud Computing Solutions',
    description: "Our  company is a leader in simplifying the experience for our clients by  providing state-of-the-art solutions. Our expertise lies in offering  customizable cloud computing solutions that can cater to the unique  needs of your business. You will receive cutting-edge technology that  will streamline your business processes by choosing us. Contact us today  to learn more about how we can help you achieve your goals.",
    icon: <FaCloud />,
  },
  {
    title: 'Web Development and UI/UX Design',
    description: 'At IT  Solutions Group, we are honored to be the top technology company in  Rwanda. We believe technology is a game-changer that can help companies  realize their goals and stay ahead of the competition. Our team is  committed to delivering exceptional service and support, particularly  emphasizing cybersecurity and security training. With our advanced  technology solutions and unbeatable expertise, your organization can  rest assured that you are safe.',
    icon: <FaDesktop />,
  },
  {
    title: 'Cybersecurity and Security Training',
    description: 'Are  you looking to create a stunning online experience for your users? Look  no further than IT Solutions Group! Our passionate developers and expert  designers offer cutting-edge web development and UI/UX design services  tailored to your unique business needs. We are always up-to-date with  the latest trends and techniques to stay ahead of the competition. Our  team works collaboratively with you to understand your requirements and  specifications to deliver exceptional results.',
    icon: <FaShieldAlt />,
  },
  {
    title: 'IoT and AI Technologies Solutions',
    description: 'With  our team of highly skilled professionals, your business can stay ahead  of the curve with the latest IoT and AI technologies. Our solutions are  designed to be flexible, scalable, and customizable to meet your  specific requirements. We are committed to providing you with the best  support and services throughout your journey to ensure you can maximize  the benefits of our services. Join us towards a more efficient and  profitable future for your business.',
    icon: <FaRobot />,
  },
  {
    title: 'Tech Blogging and Content Creation',
    description: 'Our  desktop and server support expertise, network engineering, and cloud  solutions have helped numerous companies optimize their IT  infrastructure. Our tech blog and content creators are dedicated to  providing the latest industry insights and knowledge, empowering and  educating readers to stay ahead of the curve. Choose us for a  comprehensive IT solution that delivers the results you need to succeed.',
    icon: <FaPenNib />,
  },
  {
    title: 'Technology Consulting and Business Analysis',
    description: 'Our  desktop and server support expertise, network engineering, and cloud  solutions have helped numerous companies optimize their IT  infrastructure. Our tech blog and content creators are dedicated to  providing the latest industry insights and knowledge, empowering and  educating readers to stay ahead of the curve. Choose us for a  comprehensive IT solution that delivers the results you need to succeed.',
    icon: <FaBriefcase />,
  },
];

export default function Home() {
  return (
    <div className="container mx-auto px-4 border-t-2">
      <Head>
        <title>Our Services</title>
      </Head>
      <h1 className="text-3xl text-blue-600 font-bold my-8 text-center">Our Services</h1>
      <p className="text-gray-600 mb-8 text-center">
      We transform businesses through technology.  "Revolutionize your businesses with our cutting-edge technology solutions."
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
      <Application />
    </div>
  );
}