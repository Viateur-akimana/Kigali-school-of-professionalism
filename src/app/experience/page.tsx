"use client"

import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useAnimation, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import experienceImage from '../../../public/experience.jpg';

const Experience: React.FC = () => {
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
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="max-w-7xl mx-auto mt-10 py-12 px-4 sm:px-6 lg:px-8"
    >
      <motion.div 
        variants={itemVariants}
        className="text-center mb-10 border-b-2 pb-4"
      >
        <motion.h1 
          className="text-3xl text-blue-600 font-bold mt-10"
          whileHover={{ scale: 1.05, color: '#2563EB' }}
        >
          Gain Experience
        </motion.h1>
        <motion.p 
          className="mb-6 text-gray-700 mx-4 sm:mx-12 text-xl"
          variants={itemVariants}
        >
          Our experience program is designed to provide hands-on learning opportunities for individuals looking to enhance their skills and knowledge. Whether you are a recent graduate or a seasoned professional, our program offers a range of experiences to help you grow and succeed in your career.
        </motion.p>
      </motion.div>

      <motion.div 
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="flex flex-col md:flex-row items-center mb-8"
      >
        <motion.div 
          variants={itemVariants}
          className="md:w-1/2 m-4 md:m-10 p-4 md:p-10 space-y-7 text-gray-600"
        >
          <motion.h2 
            className="text-4xl text-blue-600 font-bold mb-2"
            whileHover={{ scale: 1.05, color: '#2563EB' }}
          >
            Benefits of Our Experience Program
          </motion.h2>
          <motion.ul className="list-disc pl-5 text-xl">
            {[
              'Hands-on learning opportunities',
              'Access to cutting-edge technology and tools',
              'Networking with industry professionals',
              'Mentorship and guidance from experienced mentors'
            ].map((item, index) => (
              <motion.li
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, color: '#2563EB' }}
              >
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="relative md:w-1/2 m-4 md:m-10"
          whileHover={{ scale: 1.05 }}
        >
          <Image src={experienceImage} alt="Experience Image" layout="responsive" width={500} height={500} className="rounded-lg" />
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
          className="p-6 bg-white rounded-lg mx-auto border-t-2 shadow-lg"
          whileHover={{ boxShadow: "0px 0px 15px rgba(37, 99, 235, 0.5)" }}
        >
          <motion.h2 
            className="text-2xl text-blue-600 font-bold text-center"
            whileHover={{ scale: 1.05, color: '#2563EB' }}
          >
            Ready to gain experience?
          </motion.h2>
          <motion.p 
            className="mb-4 text-gray-600 mx-6 my-6 text-center"
            variants={itemVariants}
          >
            Join our experience program and take your skills to the next level. Whether you are interested in technology, business, or creative fields, we have opportunities for you to learn, grow, and succeed. Apply now and start your journey!
          </motion.p>
          <Link href="https://forms.office.com/pages/responsepage.aspx?id=SkBXWhK0KUKNZzA_2mwSSwskkQHjChNOrnrVmzogwhRUMEhFQjE4RkFaRVJRNUdIN0VLMVIxWThGQS4u" passHref legacyBehavior>
            <a target="_blank" rel="noopener noreferrer">
              <motion.button 
                whileHover={{ scale: 1.1, backgroundColor: "#1E40AF" }}
                whileTap={{ scale: 0.9 }}
                className="bg-blue-600 flex mx-auto justify-center hover:bg-blue-700 text-white font-bold py-2 px-4 m-6 rounded"
                aria-label="Apply for experience"
              >
                Register for experience
              </motion.button>
            </a>
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Experience;