"use client"
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import experienceImage from '../../../public/experience.jpg';

const Experience: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-7xl mx-auto mt-10 py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="text-center mb-10 border-b-2 pb-4">
        <motion.h1 
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ type: 'spring', stiffness: 100 }}
          className="text-3xl text-blue-600 font-bold mt-10"
        >
          Gain Experience
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-6 text-gray-700 mx-4 sm:mx-12 text-xl"
        >
          Our experience program is designed to provide hands-on learning opportunities for individuals looking to enhance their skills and knowledge. Whether you are a recent graduate or a seasoned professional, our program offers a range of experiences to help you grow and succeed in your career.
        </motion.p>
      </div>

      <div className="flex flex-col md:flex-row items-center mb-8">
        <motion.div 
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 100 }}
          className="md:w-1/2 m-4 md:m-10 p-4 md:p-10 space-y-7 text-gray-600"
        >
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-4xl text-blue-600 font-bold mb-2"
          >
            Benefits of Our Experience Program
          </motion.h2>
          <ul className="list-disc pl-5 text-xl">
            <motion.li 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Hands-on learning opportunities
            </motion.li>
            <motion.li 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Access to cutting-edge technology and tools
            </motion.li>
            <motion.li 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Networking with industry professionals
            </motion.li>
            <motion.li 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              Mentorship and guidance from experienced mentors
            </motion.li>
          </ul>
        </motion.div>

        <motion.div 
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 100 }}
          className="relative md:w-1/2 m-4 md:m-10"
        >
          <Image src={experienceImage} alt="Experience Image" layout="responsive" width={500} height={500} className="rounded-lg" />
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="flex flex-col items-center justify-center"
      >
        <div className="p-6 bg-white rounded-lg mx-auto border-t-2 shadow-lg">
          <motion.h1 
            className="text-2xl text-blue-600 font-bold text-center"
          >
            Ready to gain experience?
          </motion.h1>
          <motion.p 
            className="mb-4 text-gray-600 mx-6 my-6 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            Join our experience program and take your skills to the next level. Whether you are interested in technology, business, or creative fields, we have opportunities for you to learn, grow, and succeed. Apply now and start your journey!
          </motion.p>
          <Link href="https://forms.office.com/pages/responsepage.aspx?id=SkBXWhK0KUKNZzA_2mwSSwskkQHjChNOrnrVmzogwhRUMEhFQjE4RkFaRVJRNUdIN0VLMVIxWThGQS4u" passHref target="_blank" >
          <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-blue-600 flex mx-auto justify-center hover:bg-blue-700 text-white font-bold py-2 px-4 m-6 rounded"
                aria-label="Apply for experience"
              >
                Register for experience
              </motion.button>
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Experience;
