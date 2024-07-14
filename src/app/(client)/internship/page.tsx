"use client"

import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useAnimation, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import image1 from '../../../../public/intern.jpg';

const Internship: React.FC = () => {
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
        <motion.h1 
          variants={itemVariants}
          className="text-3xl flex mx-auto justify-center text-blue-600 font-bold mt-10"
        >
          Internship Program
        </motion.h1>
        <motion.p 
          variants={itemVariants}
          className="mb-10 text-gray-700 mx-12 my-6 text-xl"
        >
          Experience the IT industry first-hand with our comprehensive internship program designed for Rwandan graduates and final-year students. To qualify for our internship program, you must be a Rwandan graduate or a final-year student with a passion for technology and a desire to learn and grow in the tech industry. Our internship program offers valuable experience and skills to thrive in the tech industry. You will have the opportunity to work on real projects, receive mentorship from industry professionals, and enhance your technical and soft skills.
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
          className="md:w-1/2 m-10 p-10 md:mb-0 space-y-7 text-gray-600"
        >
          <motion.h2 
            className="text-4xl text-blue-600 font-bold mb-4"
          >
            What we offer
          </motion.h2>
          <div className="text-lg opacity-4">
            <div className='my-4 text-xl text-gray-800'>
              <p>Our Internship Programme offers students and recent graduates the opportunity to gain direct practical work experience.</p>
            </div>
            <motion.p 
              whileHover={{ scale: 1.05, color: "#2563EB" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className='font-bold text-gray-800'>• Duration:</span> The duration of an internship is normally <span className='font-bold text-gray-800'>between four and sixteen weeks</span>. Internships can be on a remote or a office basis.
            </motion.p>
            <motion.p 
              whileHover={{ scale: 1.05, color: "#2563EB" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className='font-bold text-gray-800'>• Skills we cover:</span> ISG provides a real-time experience to interns. A one-time lump sum, as a contribution towards solving world problems, may also be mentors when funding is available.
            </motion.p>
          </div>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="relative"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="right-20 top-0">
            <Image src={image1} alt="Internship program illustration" width={500} height={500} />
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
          <motion.h2 
            className="text-2xl flex mx-auto justify-center text-blue-600 font-bold"
          >
            Ready for an internship?
          </motion.h2>
          <motion.p 
            className="mb-4 text-gray-600 mx-6 my-6"
          >
            Join our internship program and unlock the potential to become a professional in TECH. Designed specifically for Rwandan graduates and final-year students, this program offers you the opportunity to gain valuable experience and skills to thrive in the industry. Do not miss out on this chance to take your career to the next level. Apply now!
          </motion.p>
          <Link href="https://forms.office.com/pages/responsepage.aspx?id=SkBXWhK0KUKNZzA_2mwSSwskkQHjChNOrnrVmzogwhRUMEhFQjE4RkFaRVJRNUdIN0VLMVIxWThGQS4u" passHref legacyBehavior>
            <a target="_blank" rel="noopener noreferrer">
              <motion.button 
                whileHover={{ scale: 1.1, backgroundColor: "#1E40AF" }}
                whileTap={{ scale: 0.9 }}
                className="bg-blue-600 flex mx-auto justify-center hover:bg-blue-700 text-white font-bold py-2 px-4 m-6 rounded"
                aria-label="Apply for internship"
              >
                Apply now
              </motion.button>
            </a>
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Internship;