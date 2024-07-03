import Head from 'next/head';
import { motion, useScroll, useTransform } from 'framer-motion';
import ServiceSection from '../components/ServiceSection';
import CompanyLogos from './Partners';
// import Testimonials from '../components/Testimonials';
import { FaCloud, FaDesktop, FaShieldAlt, FaRobot, FaPenNib, FaBriefcase } from 'react-icons/fa';
import Application from './Application';
import MovingCards from './Testimonials';

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
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      }
    }
  };

  return (
    <motion.div 
      className="container mx-auto  border-t-2"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <Head>
        <title>Our Services</title>
      </Head>
      <motion.h1 
        className="text-3xl text-blue-600 font-bold my-8 text-center"
        variants={itemVariants}
      >
        Our Services
      </motion.h1>
      <motion.p 
        className="text-black text-xl mb-8 text-center"
        variants={itemVariants}
      >
        We transform businesses through technology. Revolutionize your businesses with our cutting-edge technology solutions.
      </motion.p>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
        variants={containerVariants}
        style={{ opacity, scale }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
              transition: { duration: 0.3 }
            }}
          >
            <ServiceSection
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          </motion.div>
        ))}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        <CompanyLogos />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        <MovingCards />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        <Application />
      </motion.div>
    </motion.div>
  );
}