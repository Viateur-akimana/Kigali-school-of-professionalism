"use client"
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import image1 from '../../../../public/mission.jpg';

const AboutPage: React.FC = () => {
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      const threshold = windowHeight * 0.7;

      if (scrollY > threshold) {
        controls.start({ opacity: 1, y: 0 });
      }
    };

    window.addEventListener('scroll', handleScroll);

 
    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 mt-10"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-center mb-10 border-b-2"
      >
        <motion.h1
          className="text-3xl flex mx-auto justify-center text-blue-600 font-bold mt-10"
          whileHover={{ scale: 1.1 }}
        >
          Who we are?
        </motion.h1>
        <motion.p
          className="mb-10 text-gray-700 mx-12 my-6 text-xl"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          IT Solutions Group is a pioneering facilitator entity dedicated to empowering Students from technology schools to lead the country s tech revolution in alignment with Vision 2050. We are committed to nurturing a modern tech-savvy generation, fostering innovation, and providing impactful technology solutions for individuals, enterprises, and large companies across diverse industries.
        </motion.p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="flex flex-col md:flex-row items-center mb-8"
      >
        <motion.div
          className="md:w-1/2 m-10 p-10 md:mb-0 space-y-7 text-gray-600"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <motion.h1
            className="text-4xl text-blue-600 font-bold mb-4"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: 'spring', stiffness: 100 }}
          >
            Our mission
          </motion.h1>
          <div className="text-lg opacity-4">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Our mission at IT Solutions Group is to leverage our expertise and passion for technology to transform challenges into innovative solutions, driving development and progress. We are dedicated to harnessing the power of technology to empower individuals, businesses, and communities, making a tangible and positive impact on Rwandan society and beyond.
            </motion.p>
          </div>
        </motion.div>
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: 'spring', stiffness: 100 }}
          whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
        >
          <div className="right-20 top-0 overflow-hidden rounded-lg shadow-lg">
            <Image src={image1} alt="Image 1" width={500} height={500} />
          </div>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="flex flex-col items-center justify-center"
      >
        <motion.div
          className="p-6 bg-white rounded-lg mx-auto justify-center border-t-2 shadow-lg"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <motion.h1
            className="text-2xl flex mx-auto justify-center text-blue-600 font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Our Vision
          </motion.h1>
          <motion.p
            className="mb-4 text-gray-600 mx-6 my-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Our vision at IT Solutions Group is to democratize access to technology for all Rwandans, creating an inclusive space where everyone can benefit and thrive. We strive to bridge the digital divide by empowering individuals and communities through technology, fostering innovation, and unlocking sustainable growth and prosperity opportunities.

            We envision a future where every Rwandan has access to cutting-edge technology education and resources, enabling them to participate fully in the global digital economy. By championing digital literacy and technological innovation, we aim to position Rwanda as a leader in technology and digital transformation across Africa and beyond.
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default AboutPage;
