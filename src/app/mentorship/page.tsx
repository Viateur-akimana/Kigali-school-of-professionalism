"use client"

import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useAnimation, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import image1 from '../../../public/mentor.jpg';

const Mentorship: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-7xl mx-auto mt-10 py-12 px-4 sm:px-6 lg:px-8"
    >
      <motion.div 
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="text-center mb-10 border-b-2"
      >
        <motion.h1 variants={itemVariants} className="text-3xl flex mx-auto justify-center text-blue-600 font-bold mt-10">
          Mentorship Program
        </motion.h1>
        <motion.p variants={itemVariants} className="mb-10 text-gray-700 mx-12 my-6 text-xl">
          Our mentorship program is designed to provide guidance, support, and inspiration to individuals seeking to grow both personally and professionally. By pairing mentees with experienced mentors, we aim to foster meaningful connections and facilitate the exchange of knowledge, skills, and perspectives.
        </motion.p>
      </motion.div>

      <motion.div 
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="flex flex-col md:flex-row items-center mb-8"
      >
        <motion.div variants={itemVariants} className="md:w-1/2 m-10 p-10 md:mb-0 space-y-7 text-gray-600">
          <motion.h2 
            className="text-4xl text-blue-600 font-bold mb-2"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Benefits for Mentees
          </motion.h2>
          <motion.ul className="list-disc pl-5 text-xl">
            {['Gaining valuable insights and advice from experienced professionals',
              'Developing skills and knowledge in specific areas of interest',
              'Expanding professional networks and building meaningful connections'].map((item, index) => (
              <motion.li
                key={index}
                whileHover={{ scale: 1.05, color: "#2563EB" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
        <motion.div 
          variants={itemVariants}
          className="relative"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="right-20 top-0">
            <Image src={image1} alt="Mentorship program illustration" width={500} height={500} />
          </div>
        </motion.div>
      </motion.div>

      <motion.div 
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="flex flex-col items-center justify-center"
      >
        <motion.div 
          variants={itemVariants}
          className="p-6 bg-white rounded-lg mx-auto justify-center border-t-2 shadow-lg"
          whileHover={{ boxShadow: "0px 0px 8px rgb(59, 130, 246)" }}
        >
          <motion.h2 className="text-2xl flex mx-auto justify-center text-blue-600 font-bold">
            Ready for mentorship?
          </motion.h2>
          <motion.p className="mb-4 text-gray-600 mx-6 my-6">
            Join our mentorship program and unlock the potential to grow personally and professionally. Tailored for individuals seeking guidance and support, our program provides the opportunity to connect with experienced mentors who can help you reach your goals. Do not miss out on this chance to elevate your skills and expand your network.
          </motion.p>
          <Link href="https://forms.office.com/pages/responsepage.aspx?id=SkBXWhK0KUKNZzA_2mwSSwskkQHjChNOrnrVmzogwhRUMEhFQjE4RkFaRVJRNUdIN0VLMVIxWThGQS4u" passHref legacyBehavior>
            <a target="_blank" rel="noopener noreferrer">
              <motion.button 
                whileHover={{ scale: 1.1, backgroundColor: "#1E40AF" }}
                whileTap={{ scale: 0.9 }}
                className="bg-blue-600 flex mx-auto justify-center hover:bg-blue-700 text-white font-bold py-2 px-4 m-6 rounded"
                aria-label="Register as a Mentee"
              >
                Register as a Mentee
              </motion.button>
            </a>
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Mentorship;